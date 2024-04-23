import { IResultId } from "@src/common/IResultId";
import { ICreateUser, IUpdatePassword, IUserModel } from "../models/users.model";

export interface IUserRepository {
  findAllUsers(): Promise<IUserModel[]>;
  findOneUser(id: number): Promise<IUserModel>;
  createUser(input: ICreateUser): Promise<IResultId>;
  updateUser(id: number, updateData: IUpdatePassword): Promise<IResultId>;
  deleteUser(id: number): Promise<IResultId>;
}
