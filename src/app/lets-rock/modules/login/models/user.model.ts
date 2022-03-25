import { ILogin } from './login.model';

export interface IUser {
    username: keyof ILogin;
    password?: keyof ILogin;
    role: string
}
