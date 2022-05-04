export interface Token {
    iat: number;
    exp: number;
    username: string;
    roles: RoleEnum[];
}

export enum RoleEnum {
    ADMIN = 'ROLE_ADMIN',
    USER = 'ROLE_USER',
}