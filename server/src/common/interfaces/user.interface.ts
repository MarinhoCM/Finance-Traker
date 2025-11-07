export interface IUser {
    id: number;
    name: string;
    passwd: string;
    created_at: Date;
    updated_at: Date;
    last_session: Date;    
}

export interface IUserResponse {
    data: IUser[]
    count: number;
    page: number;
    limit: number;
}
