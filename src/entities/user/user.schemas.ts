import { z } from 'zod'

// Schemas

export const UserSchema = z.object({
  email: z.string(),
  displayName: z.string(),
  username: z.string(),
})

// Data Transfer Objects (DTOs)

export const UserDtoSchema = z.object({
  user: UserSchema,
})

export const CreateUserDtoSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
  displayName: z.string(),
})

export const LoginUserDtoSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
})
