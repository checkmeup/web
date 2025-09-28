.PHONY: install lint dev build update next
SHELL := /bin/bash
DEFAULT_GOAL := build

install:
	bun install

lint: install
	bunx eslint . --ext .ts,.json,.md --fix
	bunx prettier --write "**/*.md" "**/*.json" "**/*.ts" --log-level warn

dev: 
	bunx vitepress dev

build: test
	rm -Rf dist
	bunx vitepress build

update:
	bunx npm-check-updates -u
	bun install

next:
	git pull origin main
	git checkout main
	git merge next
	git push -u origin main