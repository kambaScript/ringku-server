export interface IUser {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  password: string;
  perfil_fk: string;
  createdAt: Date;
  updatedAt: Date;
}
