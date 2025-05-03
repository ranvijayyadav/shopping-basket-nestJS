import { IsArray, IsString} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CalculateBasketDto {
    @ApiProperty({ example: ["Apple", "Banana", "Melon"] })
    @IsArray()
    @IsString({ each: true })
    items: string[];
}