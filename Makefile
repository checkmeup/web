.PHONY: install update lint test dev build next merge
SHELL := /bin/bash
DEFAULT_GOAL := build

install:
	@echo "Installing dependencies..."

update:
	@echo "Updating dependencies..."

lint:
	@echo "Running linters..."

test:
	@echo "Running tests..."

dev: 
	@echo "Starting development server..."

build:
	@echo "Building the project..."

next:
	@echo "Preparing for the next branch..."

merge:
	@echo "Merging branch next into main..."