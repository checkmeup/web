init:
	@rm -rf node_modules
	@npm install
PHONY: init

build: lint
	@rm -rf dist
	@npm run build
PHONY: build

dev: lint
	@npm run dev
PHONY: dev

lint:
	@npm run lint
.PHONY: lint
