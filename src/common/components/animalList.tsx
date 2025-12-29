import { useCart } from "../../pod/use-card";
import type { AnimalListProps } from "../../pod/types";

export function AnimalList({ animals }: AnimalListProps) {
    const { cart, toggleCart } = useCart();

    const isSelected = (id: string) => cart.some(item => item.id === id);

    return (
        <div className="animal-list-wrapper">
            <div className="animal-grid">
                {animals.map((animal) => (
                    <div key={animal.id} className="animal-card">
                        <img src={animal.picUrl} alt={animal.title} className="animal-image"/>
                        <div className="animal-info">
                            <div className="title-button-wrapper">
                                <h3>{animal.title}</h3>
                                <button className={`add-button ${isSelected(animal.id) ? 'added' : ''}`} onClick={() => toggleCart(animal)} >
                                    {isSelected(animal.id) ? 'Quitar' : 'Añadir'}
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}