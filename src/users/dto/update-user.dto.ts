import { OmitType, PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';

// export class UpdateUserDto extends PartialType(CreateUserDto)
export class UpdateUserDto extends OmitType(CreateUserDto, ['password'] as const)  {}
// Có nghĩa là sẽ tạo một lớp DTO mới có tất cả các thuộc tính của CreateUserDto trừ thuộc tính password, và tất cả các thuộc tính này sẽ là tùy chọn (optional).