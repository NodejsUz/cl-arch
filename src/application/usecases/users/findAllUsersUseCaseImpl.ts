import { IUseCase } from '@src/common/interfaces/IUseCase';
import { IPagination } from '@src/domain/models/pagenation.model';
import { IUserModel } from '@src/domain/models/users.model';
import { IUserRepository } from '@src/domain/repositories';

export class FindAllUsersUseCaseImpl
  implements IUseCase<IPagination, IUserModel[]>
{
  constructor(private readonly userRepository: IUserRepository) {}

  async execute(query: IPagination): Promise<IUserModel[]> {
    return this.userRepository.findAllUsers(query);
  }
}
