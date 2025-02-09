import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useRef } from "react";

export default function PortfolioService() {
    const sliderRef = useRef(null);

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
    };

    return (
        <div className="portfolio-container">
            <section className="slider-section">
                <Slider ref={sliderRef} {...settings}>

                    <div className="banner">
                        <img src="./portfolio-01.jpg" alt="Slide 3" />
                    </div>

                    <div className="banner">
                        <img src="./portfolio-02.jpg" alt="Slide 3" />
                    </div>
                </Slider>

                {/* Custom Arrows */}
                <div className="arrows">
                    <div className="arrow left" onClick={() => sliderRef.current.slickPrev()}>
                    <img src="left.svg" alt="right-arrow" className="arrows-icons"/>
                    </div>
                    <div className="arrow right" onClick={() => sliderRef.current.slickNext()}>
                        <img src="right.svg" alt="right-arrow" className="arrows-icons"/>
                    </div>
                </div>
            </section>

            {/* Other Page Content */}
            <div className="page">
                <div className="portfolio-page">
                    <div>
                        <p className="tag-project">
                            Arquitectura / Planeamento Urbano / Projecto De Interiores
                        </p>
                        <h2>
                            TITULO DA FICHA<br />
                            DE PROJECTO
                        </h2>
                    </div>

                    <div className="small-description">
                        <ul>
                            <li><span>Área:</span> 281 m²</li>
                            <li><span>Área:</span> 281 m²</li>
                            <li><span>Área:</span> 281 m²</li>
                        </ul>
                        <ul>
                            <li><span>Área:</span> 281 m²</li>
                            <li><span>Área:</span> 281 m²</li>
                            <li><span>Área:</span> 281 m²</li>
                        </ul>
                    </div>
                </div>

                <hr className="hr" />

                <div className="main description-project">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam
                        nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
                        volutpat.
                    </p>
                    <p>
                        Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper
                        suscipit lobortis nisl ut aliquip ex ea commodo consequat.
                    </p>
                </div>

                <hr className="hr" />

                <div className="main">
                    <img className="img-fluid img-project" src="bg.jpg" alt="Project" />
                </div>
            </div>
        </div>
    );
}
