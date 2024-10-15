import { Controller, Get, Param, Post } from '@nestjs/common';

@Controller('property')
export class PropertyController {
    @Get()
    findAll(){
        return "This is all properties"
    }

    @Get(":id/:slug")
        // getByID(@Param('id') id : string){
    getByID(@Param() id){
        return id;
    }

    @Post()
    createProperty(){
        return "Posting property";
    }
}

