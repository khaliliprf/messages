import { Controller, Get, Post } from '@nestjs/common';

@Controller('messages')
export class MessagesController {
  @Get()
  getMessages() {
    return 1;
  }

  @Post()
  createMessage() {
    return 2;
  }

  @Get('/:id')
  getMessage() {
    return 3;
  }
}
