import { Status } from "../schemas/todo.schema";

export class CreateTodoDto {
    readonly title: string;
    readonly message: string;
    readonly status: Status
}