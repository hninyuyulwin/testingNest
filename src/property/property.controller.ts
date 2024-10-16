import { Body, Controller, Get, HttpCode, Param, ParseBoolPipe, ParseIntPipe, Patch, Post, Query, UsePipes, ValidationPipe } from '@nestjs/common';
import { CreatePropertyDto } from './dto/createProperty.dto';
import { dot } from 'node:test/reporters';
import { IdParamDto } from './dto/idParam.dto';
import { ParseIdPipe } from './pipes/parseIdpipe';
import { ZodValidationPipe } from './pipes/zodValidationPipe';
import { createPropertySchema, CreatePropertyZodDto } from './dto/createPropertyZod.dto';

@Controller('property')
export class PropertyController {
    @Get()
    findAll(){
        return "This is all properties"
    }

    // @Get(":id/:slug")
    @Get(":id")
        // getByID(@Param('id') id : string, @Param('slug') slug:string){
    // getByID(@Param() obj){
    getByID(@Param("id", ParseIntPipe) id, @Query('sort', ParseBoolPipe) sort) {
    //     return obj;
        console.log(typeof id, sort);
        // return `id = ${id} and slug : ${slug}`;
        return id;
    }

    @Post()
    // @HttpCode(201)
    // @UsePipes(new ValidationPipe({whitelist:true, forbidNonWhitelisted:true})) // for validation
    // createProperty(@Body("name") name){
    // createProperty(@Body(new ValidationPipe({whitelist:true, forbidNonWhitelisted:true, groups:['create']})) body: CreatePropertyDto) {
    @UsePipes(new ZodValidationPipe(createPropertySchema))
    // createProperty(@Body() body: CreatePropertyDto) {
    createProperty(@Body() body: CreatePropertyZodDto) {
        // return body; 
        return body;
    }

    @Patch(":id")
    // update(@Body(new ValidationPipe({whitelist:true, forbidNonWhitelisted:true, groups:['update'], always:true}),) body: CreatePropertyDto){
    update(
        // @Param() {id} : IdParamDto,
        @Param('id' , ParseIdPipe) id,
        @Body() body: CreatePropertyDto){
        return body;
    }

}

