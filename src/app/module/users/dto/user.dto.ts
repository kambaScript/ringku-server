export interface IUserDTO {
  name: string;
  email: string;
  avatar?: string;
  password: string;
  profile_fk?: string | null;
}
export interface IUserUpdateDTO {
  id: string;
  name?: string;
  email?: string;
  avatar?: string;
  password?: string;
  profile_fk?: string | null;
}
