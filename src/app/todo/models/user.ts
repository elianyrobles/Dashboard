import { UserState } from '../store/todo.reducer'

export interface AppState {
    user: UserState
}

export interface User {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}




