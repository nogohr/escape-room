import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';

// Components
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableFooter from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

function createData(name, quantity, price) {
  return { name, quantity, price};
}

export default function OverviewContainer({ items, selectedRoom, selectedOption }) {
  const classes = useStyles();

  const escapeRoomName = selectedRoom && selectedRoom.name ? selectedRoom.name : '';
  const orderOptionName = selectedOption && selectedOption.name ? selectedOption.name : '';
  const playerCount = items.items.selectedPlayerCount;

  let rows = [
    createData(`Escape Room: ${escapeRoomName}`, playerCount, '€100')
  ];

  if (orderOptionName) {
    rows = [
      ...rows,
      createData(`Extra Optie: ${orderOptionName}`, playerCount, '€20')
    ]
  }

  return (
    <TableContainer >
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Product</TableCell>
            <TableCell>Aantal spelers</TableCell>
            <TableCell>Prijs</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">{row.name}</TableCell>
              <TableCell>{row.quantity}</TableCell>
              <TableCell>{row.price}</TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={2}>Totaal</TableCell>
            <TableCell>€120</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </TableContainer>
  );
}
