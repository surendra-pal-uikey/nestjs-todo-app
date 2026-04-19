import { Injectable } from '@nestjs/common';
import { UserDto } from './dto/user.dto';

@Injectable()
export class UserService {
  private users: UserDto[] = [
    { id: 1, name: 'surendra', age: 12, mobile: '7771', address: 'bhopal' },
  ];
  addUser(user: UserDto): UserDto {
    this.users.push(user);
    return user;
  }

  getAllUser(): UserDto[] {
    return this.users;
  }

  getUserById(id: number): UserDto | undefined {
    return this.users.find((user) => user.id === id);
  }
}
