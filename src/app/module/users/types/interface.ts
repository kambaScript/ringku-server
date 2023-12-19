export interface IUserInterface {
  id?: string;
  name: string;
  email: string;
  avatar?: string | null;
  password: string;
  profile_fk?: string | null;
  createdAt?: Date;
  updatedAt?: Date;
}
