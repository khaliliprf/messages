import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { CreateMessage } from './dtos/create-message.dto';
@Controller('messages')
export class MessagesController {
  @Get()
  getMessages() {
    return 1;
  }

  @Post()
  createMessage(@Body() body: CreateMessage) {
    console.log(body);
    // return 5;
  }

  @Get('/:id')
  getMessage(@Param('id') id: string) {
    console.log(id);
    return 3;
  }
}
