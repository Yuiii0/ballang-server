import { Module } from '@nestjs/common';
import { UserProfileModule } from './user-profile/user-profile.module';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

@Module({
  controllers: [UsersController],
  providers: [UsersService],
  imports: [UserProfileModule],
})
export class UsersModule {}
