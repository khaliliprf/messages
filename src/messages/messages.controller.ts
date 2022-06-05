import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  NotFoundException,
} from '@nestjs/common';

import { MessagesService } from './messages.service';

import { CreateMessageDto } from './dtos/create-message.dto';
@Controller('messages')
export class MessagesController {
  service: MessagesService;

  constructor(service: MessagesService) {
    this.service = service;
  }
  @Get()
  getMessages() {
    return 1;
  }

  @Post()
  createMessage(@Body() body: CreateMessageDto) {
    console.log(body);
    return 5;
  }

  @Get('/:id')
  getMessage(@Param('id') id: string) {
    const message = this.service.findById(id);
    if (!message) throw new NotFoundException('message not found');
    return message;
  }
}
