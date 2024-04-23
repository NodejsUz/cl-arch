import { randomUUID } from "crypto";
import { IUserModel } from "../models/users.model";

export class UserEntity implements IUserModel {
  id: string;
  login: string;
  password: string;
  version: number;
  createdAt: number;
  updatedAt: number;
  
  constructor(login: string, password: string, version: number, createdAt: number, updatedAt: number) {
    this.id = randomUUID();
    this.login = login;
    this.password = password;
    this.version = version;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }
}