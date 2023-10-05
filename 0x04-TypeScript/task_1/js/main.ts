export interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
}

export interface Directors extends Teacher {
    numberOfReports: number;
}

export interface printTeacher { 
    (firstName:string, lastName: string): string;
}
export default function printTeacher(firstName:string, lastName: string) {
    const firstLetter = firstName.charAt(0);
    return `${firstLetter}. ${lastName}`;

}
export interface IStuentClassConstructor {
    new (firstName: string, lastName: string): IStudentClass;
}

export interface IStudentClass {
    workOnHomework(): string;
    displayName(): string;

}

export class StudentClass implements IStudentClass {
    private _firstName: string;
    private _lastName: string; 

    constructor(firstName: string, lastName: string) {
        this._firstName = firstName;
        this._lastName = lastName;
    }

    workOnHomework() {
        return 'currently working';
    }

    displayName() {
        return this._firstName;
    }
        
}

