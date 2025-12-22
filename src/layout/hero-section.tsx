import React from 'react';

export const Hero: React.FC = () => {
    return (
        <section className="py-5 bg-light">
        <div className="container">
            <div className="row align-items-center">
            <div className="col-lg-6 order-lg-1 order-2 text-center text-lg-start">
                <h2 className="display-4 fw-bold mb-4">Adopta un compañero</h2>
                <p className="lead text-muted mb-4">
                Encuentra a tu mejor amigo de cuatro patas. Miles de perros y gatos esperan un hogar lleno de amor.
                </p>
            </div>

            <div className="col-lg-6 order-lg-2 order-1 mb-4 mb-lg-0">
                <div id="carouselExample" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner rounded shadow">
                    <div className="carousel-item active" data-bs-interval="4000">
                    <img
                        src="https://media.istockphoto.com/id/1168451046/photo/cat-and-dog-sleeping-puppy-and-kitten-sleep.jpg?s=612x612&w=0&k=20&c=WufdaqZhhwOT6sJFAb6g7-laVoBWaf66XefiWUt44BQ="
                        className="d-block w-100"
                        alt="Gatito y cachorro durmiendo plácidamente juntos"
                    />
                    </div>
                    <div className="carousel-item" data-bs-interval="4000">
                    <img
                        src="https://t3.ftcdn.net/jpg/02/93/44/82/360_F_293448206_M1Bp6uHGD4SH90qHSPRF9A9vJVIBydUB.jpg"
                        className="d-block w-100"
                        alt="Perro y gato acurrucados en una manta suave"
                    />
                    </div>
                    <div className="carousel-item" data-bs-interval="4000">
                    <img
                        src="https://thumbs.dreamstime.com/b/cat-dog-cuddling-together-under-cozy-blanket-friend-cute-snuggling-friends-companions-tabby-brown-white-look-395509106.jpg"
                        className="d-block w-100"
                        alt="Gato y perro abrazados bajo una manta"
                    />
                    </div>
                </div>

                <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselExample"
                    data-bs-slide="prev"
                >
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Anterior</span>
                </button>
                <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselExample"
                    data-bs-slide="next"
                >
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Siguiente</span>
                </button>
                </div>
            </div>
            </div>
        </div>
        </section>
    );
};