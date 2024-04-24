import { randomUUID } from 'crypto';
import { IUserModel } from '../models/users.model';

export class UserEntity implements IUserModel {
  id: string;
  login: string;
  password: string;
  version: number;
  createdAt: Date;
  updatedAt: Date | null;

  constructor(data: IUserModel) {
    this.id = randomUUID();
    this.login = data.login;
    this.password = data.password;
    this.createdAt = new Date();
    this.updatedAt = null;
    this.version = data.version || 0;
  }

  public updateUser(data: Required<Pick<IUserModel, 'password'>>) {
    this.password = data.password;
    this.updatedAt = new Date();
  }
}
