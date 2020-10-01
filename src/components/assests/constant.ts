import Avatar from "./images/Avatar.png";

export interface DesignOptionType {
    name: string;
    code: string;
    img: any
}
export enum ModalFormStep {
    FactoryStep = 0,
    DesignStep,
    QuantityStep,
    ChallanStep,
    FinalStep
}

export interface FormDataType {
    factory: string;
    design: string;
    quantity: number;
    fileName: string;
}


export const colors: string[] = ["#d48806", "#1890ff", "#f759ab", "#00ff00", "#ff0000", "#531dab"];
export const factories: string[] = [
    'Amaya Creations-1',
    'Amaya Creations-2',
    'Amaya Creations-3',
    'Amaya Creations-4',
];
export const designs: DesignOptionType[] = [
    { name: 'Design-12', code: 'DM-12', img: Avatar},
    { name: 'Design-234', code: 'DM-234', img: Avatar},
    { name: 'Design-32', code: 'DM-32', img: Avatar},
    { name: 'Design-54', code: 'DM-54', img: Avatar},
    { name: 'Design-98', code: 'DM-98', img: Avatar},
]

