const models = require('../models');
const config = require('../config/config.json');
const EscapeRoomOrder = models.EscapeRoomOrder;

exports.getAvailability = async function (req, res) {
  const room = await models.EscapeRoom.findByPk(req.params.id);
  const orders = await EscapeRoomOrder.findAll({
    where: {
      escapeRoomId: room.id
    }
  });

  const timeBlock = room.playTime + room.setupTime;

  const now = new Date();
  let today = now;
  today.setHours(0);
  today.setMinutes(0);
  today.setSeconds(0);
  today.setMilliseconds(0);
  let availability = [];

  // run over days
  for (let i = 0; i < config.availability.plan_ahead.days; i++) {
    let endTime = new Date(today.getTime() + i * 24 * 60 * 60 * 1000);
    endTime.setHours(config.availability.opening_hours.end);

    let slot = new Date(today.getTime() + i * 24 * 60 * 60 * 1000);
    slot.setHours(config.availability.opening_hours.start);
    let slotEnd = new Date(slot.getTime() + timeBlock * 60 * 1000);

    let slots = [];

    while (slotEnd.getTime() <= endTime.getTime()) {
      slots[slots.length] = slot.toISOString();

      slot = new Date(slot.getTime() + timeBlock * 60 * 1000);
      slotEnd = new Date(slot.getTime() + timeBlock * 60 * 1000);
    }

    availability[availability.length] = {
      date: today,
      slots: slots,
    };

    // filter existing reservations
    availability.forEach((day) => {
      day.slots = day.slots.filter((slotStart) => {
        let hasReservation = false;

        orders.forEach((order) => {
          if (slotStart === order.reservationDate.toISOString()) {
            hasReservation = true;
          }
        })

        return !hasReservation;
      });
    });
  }

  const result = {
    'data': availability,
    'statusCode': 200
  };

  res.status(200).json(result);
};
