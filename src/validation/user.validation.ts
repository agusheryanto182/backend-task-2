import { z, ZodType } from "zod";

export class UserValidation {
  static readonly CREATE_USER: ZodType = z.object({
    name: z.string().min(1).max(100),
    email: z.string().email().max(100),
    phone: z
      .string()
      .min(10)
      .max(20)
      .regex(/^[0-9]+$/, "Only digits (0-9) are allowed"),
    active_status: z.boolean(),
    department: z.string().min(1).max(100),
  });

  static readonly UPDATE_USER: ZodType = z.object({
    id: z.number().positive(),
    name: z.string().min(1).max(100).optional(),
    email: z.string().email().max(100).optional(),
    phone: z
      .string()
      .min(10)
      .max(20)
      .regex(/^[0-9]+$/, "Only digits (0-9) are allowed")
      .optional(),
    active_status: z.boolean().optional(),
    department: z.string().min(1).max(100).optional(),
  });

  static readonly GET_ALL_USER_REQUEST: ZodType = z.object({
    page: z.number().positive().min(1),
    size: z.number().positive().min(1),
  });
}
