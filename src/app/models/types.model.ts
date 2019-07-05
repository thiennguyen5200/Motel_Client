import { User } from './user.model'
export interface ServerResponse{
    code: boolean;
    message?: string;
    data?: Array<User>;
}
