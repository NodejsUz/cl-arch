import { IResultId } from '@src/common/interfaces/IResultId';
import { IUseCase } from '@src/common/interfaces/IUseCase';
import { UserEntity } from '@src/domain';
import { IUpdatePassword } from '@src/domain/models/users.model';
import { IUserRepository } from '@src/domain/repositories';

export class UpdateUserUseCaseImpl
  implements IUseCase<IUpdatePassword, IResultId>
{
  constructor(private readonly userRepository: IUserRepository) {}

  async execute(input: IUpdatePassword): Promise<IResultId> {
    const hasUser = await this.userRepository.findOneUser(input.id);

    if (!hasUser) {
      throw new Error('User not found');
    }

    const updateUser = new UserEntity(hasUser);
    updateUser.updateUser({ password: input.newPassword });

    return this.userRepository.updateUser(input.id, {
      newPassword: updateUser.password,
      oldPassword: input.oldPassword,
    });
  }
}
