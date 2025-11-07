import { IUser, IUserResponse } from "@common/interfaces";

export const responseMapper = (data: IUser[], page: number, limit: number): IUserResponse => {
    return {
        data,
        count: data.length,
        page,
        limit
    }
}

