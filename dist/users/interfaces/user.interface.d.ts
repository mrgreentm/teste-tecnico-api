export interface UserInterface {
    id: number;
    name: string;
    email: string;
    password: string;
    createdAt?: Date;
    deletedAt?: Date;
}
