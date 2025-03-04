import { UsersService } from './users.service';
export declare class UsersResolver {
    private readonly usersService;
    constructor(usersService: UsersService);
    getUsers(): {
        id: number;
        name: string;
    }[];
}
