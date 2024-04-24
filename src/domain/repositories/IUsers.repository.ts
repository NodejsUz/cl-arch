import { IResultId } from '@src/common/interfaces/IResultId';
import {
  ICreateUser,
  IUpdatePassword,
  IUserModel,
} from '../models/users.model';
import { IPagination } from '../models/pagenation.model';

/**
 * @interface
 */
export interface IUserRepository {
  /**
   * @param query {IPagination}
   */
  findAllUsers(query: IPagination): Promise<IUserModel[]>;

  /**
   * @param id {string}
   */
  findOneUser(id: string): Promise<IUserModel>;

  /**
   * @param input {ICreateUser}
   */
  createUser(input: ICreateUser): Promise<IResultId>;

  /**
   * @param id {string}
   * @param updateData {IUpdatePassword}
   */
  updateUser(
    id: string,
    updateData: Omit<IUpdatePassword, 'id'>,
  ): Promise<IResultId>;

  /**
   * @param id {string}
   */
  deleteUser(id: string): Promise<IResultId>;

  /**
   * @param param {Partial<IUserModel>}
   */
  findByParam(param: Partial<IUserModel>): Promise<IUserModel>;
}
