dev:
	bun run dev
@PHONY: dev

build: format lint
	bun run build
@PHONY: build

test:
	bun test
@PHONY: test

lint: format
	bun run lint
	npx steiger ./src
	npx cspell lint .
@PHONY: lint

format:
	bun run format
@PHONY: format

install:
	bun install
@PHONY: install