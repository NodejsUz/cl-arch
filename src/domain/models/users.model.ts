export interface IUserModel {
  id?: string; // uuid v4
  login: string;
  password: string;
  version?: number; // integer number, increments on update
  createdAt?: Date; // timestamp of creation
  updatedAt?: Date | null; // timestamp of last update
}

export interface ICreateUser extends Pick<IUserModel, 'login' | 'password'> {}

export interface IUpdatePassword {
  id: string;
  oldPassword: string; // previous password
  newPassword: string; // new password
}
