import { IsNotEmpty, IsNumber, IsString, MinLength } from 'class-validator';

export class CreatePropertyDto {
@IsNotEmpty({ message: 'name should not be null' })
@IsString({ message: 'Name must be a string'})
name: string;

@IsNotEmpty({message: 'serial number should never be null'})
serialNumber: string;

@IsNotEmpty({message: 'Category must not be null'})
@IsString({message: "category must be a string"})
category: string;
    
@IsNotEmpty({message: 'Status cant be null'})
@IsString({message: 'Status must be a string'})
status: string;     
}
