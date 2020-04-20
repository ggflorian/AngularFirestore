
export interface Task {
    id: string;
    name: string;
};

export class Author {
    id: string;
    fullName: string;
    dateOfBirth: Date;
    placeOfBirth: string;
    hobbies: string[];
};