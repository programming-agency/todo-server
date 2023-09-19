import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose'

export enum StatusOptions {
    COMPLETED = 'COMPLETED',
    PENDING = 'PENDING',
    UPCOMING = 'UPCOMING',
}

@Schema({
    timestamps: true
})
export class Todo {
    @Prop()
    label: string;

    @Prop()
    message: string;

    @Prop()
    status: StatusOptions
}

export const TodoSchema = SchemaFactory.createForClass(Todo)