import { IsInt, IsPositive, IsString, Length } from "class-validator";

export class CreatePropertyDto {
    // @IsString({always:true})
    @IsString()
    @Length(3,10, {message:"Length must not over 10"})
    name : string;

    @IsString()
    @Length(2,10, {groups: ['create']})
    @Length(1,15, {groups: ['update']})
    description : string;

    // @IsInt({always:true})
    @IsInt()
    @IsPositive({message: "Not allow negative"})
    area : number;
}