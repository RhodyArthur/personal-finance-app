export interface Pots {
    pots: Pot[]
}

export interface Pot {
    name: string;
    target: number;
    total: number;
    theme: string;
}