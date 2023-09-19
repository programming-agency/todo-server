import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Todo } from './schemas/todo.schema';
import mongoose from 'mongoose';

@Injectable()
export class TodoService {
    constructor(
        @InjectModel(Todo.name)
        private todoModel: mongoose.Model<Todo>
    ) {}

    async findAll() {
        const todos = await this.todoModel.find();
        return todos;
    }

    async create(todo: Todo): Promise<Todo> {
        const res = await this.todoModel.create(todo)
        return res;
    }
}
