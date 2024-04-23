export interface IUserModel {
  id: string; // uuid v4
  login: string;
  password: string;
  version: number; // integer number, increments on update
  createdAt: number; // timestamp of creation
  updatedAt: number; // timestamp of last update
}

export interface ICreateUser extends Pick<IUserModel, 'login' | 'password'> {}

export interface IUpdatePassword {
  oldPassword: string; // previous password
  newPassword: string; // new password
}
