SHELL := /bin/bash
NCU_IGNORE_PACKAGE := "eslint"

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

upgrade:
	npm -g ls npm-check-updates | grep -c npm-check-updates || npm install -g npm-check-updates 
	ncu -u -x $(NCU_IGNORE_PACKAGE); npm i --no-audit --no-fund
.PHONY: upgrade