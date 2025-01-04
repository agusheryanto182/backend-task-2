export type UserResponse = {
  id: number;
  name: string;
  email: string;
  phone: string;
  active_status: boolean;
  department: string;
};

export type CreateUserRequest = {
  name: string;
  email: string;
  phone: string;
  active_status: boolean;
  department: string;
};

export type UpdateUserRequest = {
  id: number;
  name?: string;
  email?: string;
  phone?: string;
  active_status?: boolean;
  department?: string;
};

export type GetAllRequest = {
  page: number;
  size: number;
};

export function toUserResponse(user: UserResponse): UserResponse {
  return {
    id: user.id,
    name: user.name,
    email: user.email,
    phone: user.phone,
    active_status: user.active_status,
    department: user.department,
  };
}
