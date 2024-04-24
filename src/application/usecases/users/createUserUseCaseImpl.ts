import { IResultId } from '@src/common/interfaces/IResultId';
import { IUseCase } from '@src/common/interfaces/IUseCase';
import { UserEntity } from '@src/domain';
import { ICreateUser } from '@src/domain/models/users.model';
import { IUserRepository } from '@src/domain/repositories';

export class CreateUserUseCaseImpl implements IUseCase<ICreateUser, IResultId> {
  constructor(private readonly userRepository: IUserRepository) {}

  async execute(input: ICreateUser): Promise<IResultId> {
    const hasUser = await this.userRepository.findByParam({
      login: input.login,
    });

    if (hasUser) {
      throw new Error('User already exists');
    }

    const newUser = new UserEntity(input);

    const result = await this.userRepository.createUser(newUser);

    return { id: result.id };
  }
}
