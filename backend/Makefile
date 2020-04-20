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
	npm run migrate
.PHONY: pristine
