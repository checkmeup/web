.PHONY: install update lint test dev build next merge
SHELL := /bin/bash
DEFAULT_GOAL := build

install:
	@echo "Installing dependencies..."
	bun install

update:
	@echo "Updating dependencies..."
	npx ncu -u
	bun install
	bun update

lint: format
	@echo "Running linters..."
	bun run lint

test: lint
	@echo "Running tests..."
	bun run test

format:
	@echo "Formatting code..."
	bun run format

dev: 
	@echo "Starting development server..."
	bun run dev

build: test
	@echo "Building the project..."
	bun run build

next:
	@echo "Preparing for the next branch..."

merge:
	@echo "Merging branch next into main..."