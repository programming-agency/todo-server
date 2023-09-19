import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose'

export enum Status {
    COMPLETED = 'COMPLETED',
    PENDING = 'PENDING',
    UPCOMING = 'UPCOMING',
}

@Schema({
    timestamps: true
})
export class Todo {
    @Prop()
    title: string;

    @Prop()
    message: string;

    @Prop()
    status: Status
}

export const TodoSchema = SchemaFactory.createForClass(Todo)