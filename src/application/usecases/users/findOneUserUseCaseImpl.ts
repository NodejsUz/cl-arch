import { IdRequest } from '@src/common/interfaces/IId';
import { IUseCase } from '@src/common/interfaces/IUseCase';
import { IUserModel } from '@src/domain/models/users.model';
import { IUserRepository } from '@src/domain/repositories';

export class FindOneUserUseCaseImpl implements IUseCase<IdRequest, IUserModel> {
  constructor(private readonly userRepository: IUserRepository) {}

  async execute(input: IdRequest): Promise<IUserModel> {
    const hasUser = await this.userRepository.findOneUser(input.id);

    if (!hasUser) {
      throw new Error('User not found');
    }

    return hasUser;
  }
}
