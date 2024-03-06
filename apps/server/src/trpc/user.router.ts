import { Injectable } from '@nestjs/common';
import { TrpcService } from './trpc.service';
import { UsersService } from '@server/users/users.service';

@Injectable()
export class UserRouter {
  constructor(
    private readonly trpc: TrpcService,
    private usersService: UsersService,
  ) {}

  router = this.trpc.router({
    getAllUsers: this.trpc.procedure.query(async () => {
      return await this.usersService.findAll();
    }),
  });
}
