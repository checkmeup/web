// @vitest-environment jsdom
import { it, expect } from 'vitest'

it('mounts the app to #app', async () => {
  // create the mount target that main.ts expects
  document.body.innerHTML = '<div id="app"></div>'

  // import the main entry which should mount the app synchronously
  await import('./main')

  const el = document.getElementById('app')
  expect(el).toBeTruthy()
  expect(el?.innerHTML).not.toBe('')
})
