/* eslint-disable prettier/prettier */
import { ApiProperty } from "@nestjs/swagger";

/* eslint-disable prettier/prettier */
export class CreateKrakenDto { 
    @ApiProperty()
    name : string;

    @ApiProperty({required: false})
    description?: string;

    @ApiProperty()
    lastSee: string;

    @ApiProperty()
    countLastSee : number;
    
    @ApiProperty({default: false})
    extinct: boolean;
}
