dev:
	bun run dev
@PHONY: dev

build: test
	bun run build
@PHONY: build

test: lint
	bun run test
@PHONY: test

preview: FORCE
	bun run preview
@PHONY: preview 

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

update:
	ncu -u
	bun install
@PHONY: update

# FORCE is a special target that always runs even if nothing has changed.
FORCE:
	@true
@PHONY: FORCE