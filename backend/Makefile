help: ## Show this help message.
	@echo 'usage: make [target] ...'
	@echo
	@echo 'targets:'
	@egrep '^(.+)\:(.+)?\ ##\ (.+)' ${MAKEFILE_LIST} | column -t -c 2 -s ':#'
.PHONY: help

install: ## Install app
	docker-compose run --rm app npm install
	make pristine
.PHONY: install

up: ## Start app
	docker-compose up -d
.PHONY: up

down: ## Stop app
	docker-compose down
.PHONY: down

pristine: ## Reset db
	docker-compose run --rm app npx sequelize-cli db:drop || true
	docker-compose run --rm app npx sequelize-cli db:create
	docker-compose run --rm app npm run migrate
	docker-compose run --rm app npx sequelize-cli db:seed:all
.PHONY: pristine

cli: ## Create cli inside container
	docker-compose run --rm app bash
.PHONY: cli
