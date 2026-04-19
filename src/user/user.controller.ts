import { Body, Controller, Get, Post, Param } from '@nestjs/common';
import { CreateUserDto, UserDto } from './dto/user.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Post('add')
  createUser(@Body() userDto: CreateUserDto): CreateUserDto {
    const user: UserDto = {
      ...userDto,
      id: Math.random(),
    };
    this.userService.addUser(user);
    return userDto;
  }

  @Get('all')
  getUsers(): UserDto[] {
    return this.userService.getAllUser();
  }

  @Get(':id')
  getUserById(@Param() id: number): UserDto | undefined {
    return this.userService.getUserById(id);
  }
}
