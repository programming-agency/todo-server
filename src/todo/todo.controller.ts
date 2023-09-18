import { Controller, Get } from '@nestjs/common';

@Controller('todo')
export class TodoController {

    @Get('/todos')
    async getTodos(){
        
    }
}
