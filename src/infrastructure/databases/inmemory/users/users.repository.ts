import { IResultId } from '@src/common/interfaces/IResultId';
import {
  ICreateUser,
  IPagination,
  IUpdatePassword,
  IUserModel,
  IUserRepository,
  UserEntity,
} from '@src/domain';

export class UsersRepository implements IUserRepository {
  private users: IUserModel[] = [];
  constructor() {}

  async findAllUsers(query: IPagination): Promise<IUserModel[]> {
    if (query.page && query.total) {
      return this.users.slice(query.page, query.total);
    }
    return this.users;
  }

  async findOneUser(id: string): Promise<IUserModel> {
    const user = this.users.find((user) => user.id === id);
    if (!user) {
      throw new Error('User not found');
    }
    return user;
  }
  async createUser(input: ICreateUser): Promise<IResultId> {
    const user = new UserEntity(input);

    this.users.push(user);

    return { id: +user.id };
  }
  async updateUser(
    id: string,
    updateData: Omit<IUpdatePassword, 'id'>,
  ): Promise<IResultId> {
    const user = this.users.find((user) => user.id === id);
    if (!user) {
      throw new Error('User not found');
    }

    const updateRes = new UserEntity(user);

    updateRes.updateUser({ password: updateData.newPassword });

    this.users.splice(this.users.indexOf(user), 1, updateRes);

    return { id: +updateRes.id };
  }

  async deleteUser(id: string): Promise<IResultId> {
    const user = this.users.find((user) => user.id === id);

    if (!user) {
      throw new Error('User not found');
    }

    this.users.splice(this.users.indexOf(user), 1);

    return { id: +id };
  }

  async findByParam(param: Partial<IUserModel>): Promise<IUserModel> {
    const user = this.users.find((user) => user.login === param.login);
    if (!user) {
      throw new Error('User not found');
    }
    return user;
  }
}
