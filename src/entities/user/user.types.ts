import { z } from 'zod'

import { UserSchema, UserDtoSchema, CreateUserDtoSchema, LoginUserDtoSchema } from './user.schemas'

export type User = z.infer<typeof UserSchema>

export type UserDto = z.infer<typeof UserDtoSchema>
export type CreateUserDto = z.infer<typeof CreateUserDtoSchema>
export type LoginUserDto = z.infer<typeof LoginUserDtoSchema>
