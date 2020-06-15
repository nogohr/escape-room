SERVICES=$(dir $(wildcard */Makefile))

help: ## Show this help message.
	@echo 'usage: make [target] ...'
	@echo
	@echo 'targets:'
	@egrep '^(.+)\:(.+)?\ ##\ (.+)' ${MAKEFILE_LIST} | column -t -c 2 -s ':#'
.PHONY: help

install: ## Install project dependencies
	$(foreach svc,$(SERVICES),($(MAKE) -C $(svc) $@) || exit $$?;)
.PHONY: install

update: ## Update after pull
	$(foreach svc,$(SERVICES),($(MAKE) -C $(svc) $@) || exit $$?;)
.PHONY: update

up: ## Bring project up
	$(foreach svc,$(SERVICES),($(MAKE) -C $(svc) $@) || exit $$?;)
.PHONY: up

down: ## Bring project down
	$(foreach svc,$(SERVICES),($(MAKE) -C $(svc) $@) || exit $$?;)
.PHONY: down
