export interface IUser {
    id: number,
    email: string,
    first_name: string,
    last_name: string,
    avatar: string
}

export interface ILoginUser {
    email?: string;
    password?: string;
    token?: string;
}

export interface INewUser {
    name: string;
    job: string;
}

export interface INewUserResponse extends INewUser {
    id: string;
    createdAt: Date;
}

export interface ISupport {
    url: string,
    text: string
}

export interface ResponseRegres {
    page: number,
    per_page: number,
    total: number,
    total_pages: number,
    data: IUser[],
    support: ISupport
}