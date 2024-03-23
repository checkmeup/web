// https://www.conventionalcommits.org/en/v1.0.0/

// The commit message should be structured as follows:

// <type>[optional scope]: <description>

// <type> could be fix:, feat:, build:, chore:, ci:, docs:, style:, refactor:, perf:, test:, and others
// <scope> is optional and could be anything specifying the place of the commit change
// <description> should be a short description of the change

// A commit that appends a ! after the type/scope, introduces a breaking API change

https: module.exports = { extends: ['@commitlint/config-conventional'] };
