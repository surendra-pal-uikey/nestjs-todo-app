export class CreateUserDto {
  name: string;
  age: number;
  address: string;
  mobile: string;
}

export class UserDto extends CreateUserDto {
  id: number;
}
