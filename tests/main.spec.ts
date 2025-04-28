import { describe, it, expect, vi } from 'vitest'
import { application } from '@/app'

vi.mock('@/app', () => ({
  application: {
    mount: vi.fn(),
  },
}))
describe('main.ts', () => {
  it('should mount the application without errors', () => {
    const mountSpy = vi.spyOn(application, 'mount')
    application.mount('#app')
    expect(mountSpy).toHaveBeenCalledWith('#app')
    mountSpy.mockRestore()
  })

  it('should call mount only once', () => {
    const mountSpy = vi.spyOn(application, 'mount')
    application.mount('#app')
    expect(mountSpy).toHaveBeenCalledTimes(1)
    mountSpy.mockRestore()
  })

  it('should not call mount with incorrect arguments', () => {
    const mountSpy = vi.spyOn(application, 'mount')
    application.mount('#app')
    expect(mountSpy).not.toHaveBeenCalledWith('#wrong-id')
    mountSpy.mockRestore()
  })
})
