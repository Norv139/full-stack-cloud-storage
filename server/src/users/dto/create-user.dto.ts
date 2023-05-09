import { ApiProperty } from "@nestjs/swagger";

export class CreateUserDto {
    @ApiProperty({default: 'test@gamil.com'})
    email: string;
    @ApiProperty({default: 'Anton'})
    fullName: string;
    @ApiProperty({default: 'any_pass_123_@'})
    password: string;
}
