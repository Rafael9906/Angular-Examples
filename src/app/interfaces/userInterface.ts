export interface User{
    ID:number;
    Name:string;
    Type:UserType;
}

export enum UserType{
    ADMINISTRADOR,
    CLIENTE,
    TECNICO
}