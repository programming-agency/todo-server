import { StatusOptions } from "../schemas/todo.schema";

export class CreateTodoDto {
    readonly label: string;
    readonly message: string;
    readonly status: StatusOptions
}