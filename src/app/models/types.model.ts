import { User } from './user.model'
export interface ServerResponse{
    code: number;
    message?: string;
    data?: any;
}
