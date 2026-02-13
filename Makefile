.PHONY: install update lint test dev build next merge
SHELL := /bin/bash
DEFAULT_GOAL := build

install:
	@echo "Installing dependencies..."
	bun install

update:
	@echo "Updating dependencies..."
	bun update

lint:
	@echo "Running linters..."
	bun run lint

test:
	@echo "Running tests..."
	bun test

format:
	@echo "Formatting code..."
	bun run format

dev: 
	@echo "Starting development server..."
	bun run dev

build:
	@echo "Building the project..."
	bun run build

next:
	@echo "Preparing for the next branch..."

merge:
	@echo "Merging branch next into main..."