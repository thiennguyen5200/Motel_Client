export interface User {
    _id: string;
    email: string;
    password: string;
    level: number;
    avatar: string;
    name: string;
    phone: string;
    card_id: string;
    motels: any;
    rooms: any;
    address: string;
    job: string;
    sex: string;
    birth_day: Date;
    deposit: number;
    status: boolean;
    star_date: Date;
    end_date: Date;
    create_date: Date;
    create_by?: string
}