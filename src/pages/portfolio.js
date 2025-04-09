import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useEffect, useRef } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';


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

    const projects = [
        {
            name: "Tanque 1264 & Slope Tanks",
            year: "2023",
            client: "Friedlander",
            location: "Porto da Matola",
            category: "Engenharia",
            description:
                "O projeto Tanque 1264 começou em setembro de 2023 e envolveu a reabilitação de um tanque de combustível. A Proeng, subcontratada da Friedlander, foi responsável pelo trabalho de Blast e pintura. O processo incluiu o jateamento com areia para remover o revestimento antigo, seguido pela aplicação de novos revestimentos, desde a camada primária, intermédia, até à final. Este trabalho foi realizado tanto no interior como no exterior do tanque, incluindo a sua base.",
            smallDescription:
                " proeng fez a reabilitação dos “Slope Tanks”. O trabalho incluiu jateamento, pintura e a aplicação de novos revestimentos, mantendo os mesmos padrões de qualidade e atenção ao detalhe.",
            images: ["portfolio-01.jpg", "portfolio-01.jpg"]
        },
        {
            name: "Restaurante em Marracuene",
            year: "2024",
            client: "Alex (particular)",
            location: "Marracuene",
            category: "Engenharia",
            description:
                "Este projeto consistiu na construção de um restaurante de dois pisos, com uma estrutura metálica na parte superior. A Proeng foi responsável pelo fabrico e a montagem da estrutura metálica, incluindo pilares, asnas, mezzanine e chaparia, entregando uma obra sólida e esteticamente agradável.",
            images: ["proeng-projects-03.jpg", "proeng-projects-03.jpg"]
        },
        {
            name: "Remoção de Estruturas Metálicas na Baixa",
            year: "2024",
            client: "JcDecaux Mozambique",
            location: "Avenida 25 de Setembro, Maputo",
            category: "Engenharia",
            description:
                "Em 2024, a Proeng participou na remoção de duas grandes estruturas metálicas localizadas na Avenida 25 de Setembro, na Baixa de Maputo.Este projeto envolveu logística e coordenação minuciosas, assegurando uma execução eficiente e segura.",
            smallDescription: "",
            images: ["proeng-projects-02.jpg", "proeng-projects-02.jpg"]
        },
        {
            name: "Montagem de Outdoor",
            year: "2023",
            client: "JcDecaux Mozambique",
            location: "Maputo",
            category: "Engenharia",
            description:
                "Em 2023, a Proeng foi responsável pela montagem de um outdoor em frente ao Ministério da Defesa. O trabalho incluiu a montagem da estrutura e o tratamento superficial, blast e pintura, garantindo uma finalização impecável",
            images: ["proeng-projects-08.jpg", "proeng-projects-08.jpg"]
        },
        {
            name: "Construção de duas estruturas metálicas",
            year: "2022-2023",
            client: "Ministério Divina Esperança",
            location: "Chiango",
            category: "Engenharia",
            description:
                "Este projeto consistiu na construção de duas estruturas metálicas de grande porte para servirem de templo de adoração. A Proeng foi responsável pelo fabrico e a montagem da estrutura metálica, incluindo pilares, asnas e chaparia, entregando uma obra sólida e esteticamente agradável.",
            images: ["projects-01.jpg", "projects-01.jpg"]
        },
        {
            name: "Fabrico de peças sob medida",
            year: "2024",
            client: "Televisa",
            location: "FPLM, Maputo",
            category: "Engenharia",
            description:
                "Em 2024, a Proeng participou no fabrico de pecas sob medida e asmesmas passaram pelo processo de galvanizaç ão. Este projeto envolveu logística e coordenação minuciosas, assegurando uma execução eficiente e segura.",
            images: ["proeng-projects-02.jpg", "proeng-projects-02.jpg"]
        },
        {
            name: "Jateamento e Pintura de Estrutura Metálica",
            year: "2022",
            client: "Escopil",
            location: "",
            category: "Engenharia",
            description:
                "Neste projeto, a Proeng realizou o jateamento e a pintura de uma estrutura metálica, garantindo a remoção de corrosão e a aplicação de um novo revestimento protetor. O serviço foi executado dentro do prazo estipulado, assegurando a qualidade e durabilidade da estrutura.",
            images: ["proeng-projects-04.jpg", "proeng-projects-04.jpg"]
        },
        {
            name: "Reabilitação de Tanques na Beira",
            year: "2023-2024",
            client: "Friedlander",
            location: "Terminal da Beira",
            category: "Engenharia",
            description:
                "Realizámos a reabilitação de tanques na Beira, com a Proeng responsável pelo trabalho de Blast e pintura, tanto no interior como no exterior dos tanques.",
            images: ["proeng-projects-06.jpg", "proeng-projects-06.jpg"]
        },
        {
            name: "Reparação e Pintura de Geradores Industriais",
            year: "2022",
            client: "Coca-Cola / Friedlander",
            location: "",
            category: "Engenharia",
            description:
                "A Proeng foi contratada para realizar a reparação e pintura de três geradores industriais, com foco no tratamento superficial. O trabalho incluiu a limpeza e preparação das superfícies, garantindo uma pintura uniforme e protetora para aumentar a longevidade dos geradores. O projeto foi concluído com sucesso para a Coca-Cola e a Friedlander.",
            images: ["proeng-projects-01.jpg", "proeng-projects-01.jpg"]
        }
    ];


    useEffect(() => {
        AOS.init({
          duration: 800, // optional: animation duration
          once: true, // optional: whether animation happens only once
        });
      
        // Refresh AOS to detect any dynamic content
        AOS.refresh();
      }, []);
      


    return (

        <>


            <div className="portfolio-container">
                <section className="slider-section">
                    <Slider ref={sliderRef} {...settings}>
                        <div className="banner">
                            <img src="./portfolio-01.jpg" alt="Slide 1" />
                        </div>
                        <div className="banner">
                            <img src="./portfolio-02.jpg" alt="Slide 2" />
                        </div>
                    </Slider>

                    {/* Custom Arrows */}
                    <div className="arrows">
                        <div
                            className="arrow left"
                            onClick={() => sliderRef.current?.slickPrev()}
                        >
                            <img src="left.svg" alt="left-arrow" className="arrows-icons" />
                        </div>
                        <div
                            className="arrow right"
                            onClick={() => sliderRef.current?.slickNext()}
                        >
                            <img src="right.svg" alt="right-arrow" className="arrows-icons" />
                        </div>
                    </div>
                </section>

                {/* Projects List */}
                {projects.map((item, index) => (
                    <div key={index} className="page headline">
                        <div className="portfolio-page">
                            <div data-aos="fade-left">
                                <p className="tag-project">{item.category}</p>
                                <h2>{item.name}</h2>
                            </div>

                            <div className="small-description" data-aos="fade-right">
                                <ul className="ul-list-category">
                                    <li>
                                        <span>Ano:</span> {item.year}
                                    </li>
                                    <li>
                                        <span>Cliente:</span> {item.client}
                                    </li>
                                    <li>
                                        <span>Localização:</span> {item.location}
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <hr className="hr" />

                        <div className="main description-project" data-aos="fade-up">
                            <p className="col-description">{item.description}</p>
                        </div>

                        <hr className="hr" />

                        <div className="main">

                            <swiper-container data-aos="zoom-in">
                                {item.images.map((image, index) => (

                                    <swiper-slide key={index}>
                                        <img className="img-fluid img-project" src={image} alt={item.name} />
                                    </swiper-slide>

                                ))}
                            </swiper-container>


                        </div>
                    </div>
                ))}
            </div>

        </>
    );
}