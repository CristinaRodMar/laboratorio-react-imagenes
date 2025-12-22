type Animal = {
    id: string;
    picUrl: string;
    title: string;
    selected: boolean;
    };

type AnimalListProps = {
    animals: Animal[];
    };

export function AnimalList({ animals }: AnimalListProps) {
    return (
    <div className="animal-list-wrapper">
        <div className="animal-grid">
        {animals.map((animal) => (
            <div key={animal.id} className="animal-card">
            <img src={animal.picUrl} alt={animal.title} className="animal-image" />
            <div className="animal-info">
                <div className="title-button-wrapper">
                <h3>{animal.title}</h3>
                <button
                    className={`add-button ${animal.selected ? 'added' : ''}`}
                    onClick={() => onToggleSelect?.(animal.id)} >
                    {animal.selected ? 'Añadido' : 'Añadir'}
                </button>
                </div>
            </div>
            </div>
        ))}
        </div>
        </div>
    );
}