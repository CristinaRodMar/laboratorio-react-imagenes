export type Animal = {
    id: string;
    picUrl: string;
    title: string;
    selected: boolean;
};

export type AnimalListProps = {
    animals: Animal[];
};