export interface DirectorInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workTeacherTasks(): string;
}

export interface TeacherInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workTeacherTasks(): string; 
}

export class Director implements DirectorInterface {
     workFromHome() {
        return 'Working from home';
    }
    
    getCoffeeBreak() {
        return 'Getting a coffee break';
    }
    
    workDirectorTasks() {
        return 'Getting to director tasks';
    }
    workTeacherTasks() {
        return 'Working on teacher tasks';
    }
}

  export class Teacher implements TeacherInterface {
        workFromHome() {
            return 'Cannot work from home';
        }
        
        getCoffeeBreak() {
            return 'Cannot have a break';
        }
        
        workTeacherTasks() {
            return 'Getting to work';
        }
    }

export function createEmployee(salary) {
    if (typeof salary === 'number' && salary < 500) {
        return new Teacher();
    }
    return new Director();
}

export function isDirector(employee: (Director | Teacher)) {
    return employee instanceof Director;
}

export function execurteWork(employee: (Director | Teacher)) {
    if (isDirector(employee)) {
        return (employee as Director).workDirectorTasks();
    }
    return (employee as Teacher).workTeacherTasks();
}

export type Subjects = "Math" | "History";

export function teachClass(todayClass: Subjects): string {
    if (todayClass === 'Math') {
        return 'Teaching Math';
    }
    return 'Teaching History';
}
