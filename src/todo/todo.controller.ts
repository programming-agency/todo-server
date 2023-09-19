import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { Todo } from './schemas/todo.schema';
import { TodoService } from './todo.service';
import { CreateTodoDto } from './dto/create-todo.dto';

@Controller('todo')
export class TodoController {

    constructor(private todoService: TodoService){}

    @Get('/todos')
    async getTodos(): Promise<Todo[]> {
        return this.todoService.findAll()
    }

    @Post('/create')
    async createTodo(
        @Body()
        todo: CreateTodoDto
    ): Promise<Todo> {
        return this.todoService.create(todo)
    }

    // @Get('/todos/:id')
    // async getTodoById(@Param() id: number): Promise<Todo> {
    //     return this.todoService.findById(id);
    // }
}
