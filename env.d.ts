/// <reference types="vite/client" />

// Declare Vue SFC compiler macros globally to avoid redeclaration in multiple files
declare function defineOptions<T = Record<string, unknown>>(opts: T): void
declare function defineProps<T = Record<string, unknown>>(): T
