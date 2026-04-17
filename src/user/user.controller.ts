import { Controller, Get } from '@nestjs/common';

@Controller('user')
export class UserController {
  @Get()
  fetchUsers(): string[] {
    return ['John Doe', 'Jane Doe'];
  }
}
