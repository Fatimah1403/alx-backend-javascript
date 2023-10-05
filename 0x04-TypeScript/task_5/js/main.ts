export interface MajorCredits {
    credits: number;
    brand: MajorCredits;
}

export interface MinorCredits {
    credits: number;
    brand: MinorCredits;
}
export function sumMajorCredits(subject1: MajorCredits, subject2: MinorCredits): number {
    return subject1.credits + subject2.credits;
}

export function sumMinorCredits(subject1: MajorCredits, subject2: MinorCredits): number {
    return subject1.credits + subject2.credits;

}
