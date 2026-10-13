export interface Partner {
    id: string;
    name: string;
    logo: string;
    business: string;

    competencies: string[];
    role: string[];
    goals: string[];
    contact: {
        name: string;
        email: string;
    }[];
}