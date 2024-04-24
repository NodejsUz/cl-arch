import { IdRequest } from '@src/common/interfaces/IId';
import { IResultId } from '@src/common/interfaces/IResultId';
import { IUseCase } from '@src/common/interfaces/IUseCase';
import { IUserRepository } from '@src/domain/repositories';

export class DeleteUserUseCaseImpl implements IUseCase<IdRequest, IResultId> {
  constructor(private readonly userRepository: IUserRepository) {}
  async execute(input: IdRequest): Promise<IResultId> {
    const hasUser = await this.userRepository.findOneUser(input.id);
    if (!hasUser) {
      throw new Error('User not found');
    }
    return this.userRepository.deleteUser(input.id);
  }
}
