export type Car = {
    name: string;
    type: string;
    color: string;
    image: string; // Neues Bildfeld
    motor: {
        serialNumber: number;
        hp: number;
    }
}