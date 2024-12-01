import { type Session } from './types'

export const sessionStore = {
  getSession: () => {
    return {
      id: 'session-id',
      userId: 'user-id',
      name: 'session-name',
    }
  },
  saveSession: (value: Session) => {
    console.log('session saved', value)
  },
  deleteSession: () => {
    console.log('session deleted')
  },
}
