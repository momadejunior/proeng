import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useEffect, useRef } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useTranslation } from "../context/TranslationContext";

export default function PortfolioService() {
    const sliderRef = useRef(null);
    const { t,language} = useTranslation();
    

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
          name: {
            pt: "Tanque 1264 & Slope Tanks",
            en: "Tank 1264 & Slope Tanks"
          },
          year: "2023",
          client: "Friedlander",
          location: "Porto da Matola",
          category: {
            pt:"Engenharia",
            en:"Engineering",
          },
          description: {
            pt: "O projeto Tanque 1264 começou em setembro de 2023 e envolveu a reabilitação de um tanque de combustível. A Proeng, subcontratada da Friedlander, foi responsável pelo trabalho de Blast e pintura. O processo incluiu o jateamento com areia para remover o revestimento antigo, seguido pela aplicação de novos revestimentos, desde a camada primária, intermédia, até à final. Este trabalho foi realizado tanto no interior como no exterior do tanque, incluindo a sua base.",
            en: "The Tank 1264 project started in September 2023 and involved the rehabilitation of a fuel tank. Proeng, subcontracted by Friedlander, was responsible for blasting and painting. The process included sandblasting to remove the old coating, followed by the application of new coatings from primer to final layer. This work was carried out both inside and outside the tank, including its base."
          },
          smallDescription: {
            pt: "A Proeng fez a reabilitação dos “Slope Tanks”. O trabalho incluiu jateamento, pintura e a aplicação de novos revestimentos, mantendo os mesmos padrões de qualidade e atenção ao detalhe.",
            en: "Proeng handled the rehabilitation of the Slope Tanks. The work included blasting, painting, and applying new coatings, maintaining the same standards of quality and attention to detail."
          },
          images: ["portfolio-01.jpg", "portfolio-01.jpg"]
        },
        {
          name: {
            pt: "Restaurante em Marracuene",
            en: "Restaurant in Marracuene"
          },
          year: "2024",
          client: "Alex (particular)",
          location: "Marracuene",
          category: "Engenharia",
          description: {
            pt: "Este projeto consistiu na construção de um restaurante de dois pisos, com uma estrutura metálica na parte superior. A Proeng foi responsável pelo fabrico e a montagem da estrutura metálica, incluindo pilares, asnas, mezzanine e chaparia, entregando uma obra sólida e esteticamente agradável.",
            en: "This project involved the construction of a two-story restaurant, featuring a metallic structure on the upper level. Proeng was responsible for manufacturing and assembling the metal structure, including columns, trusses, mezzanine, and paneling, delivering a solid and aesthetically pleasing result."
          },
          images: ["proeng-projects-03.jpg", "proeng-projects-03.jpg"]
        },
        {
          name: {
            pt: "Remoção de Estruturas Metálicas na Baixa",
            en: "Removal of Metal Structures in Baixa"
          },
          year: "2024",
          client: "JcDecaux Mozambique",
          location: "Avenida 25 de Setembro, Maputo",
          category: "Engenharia",
          description: {
            pt: "Em 2024, a Proeng participou na remoção de duas grandes estruturas metálicas localizadas na Avenida 25 de Setembro, na Baixa de Maputo. Este projeto envolveu logística e coordenação minuciosas, assegurando uma execução eficiente e segura.",
            en: "In 2024, Proeng was involved in removing two large metal structures located on Avenida 25 de Setembro, in downtown Maputo. This project required meticulous logistics and coordination, ensuring efficient and safe execution."
          },
          smallDescription: {
            pt: "",
            en: ""
          },
          images: ["proeng-projects-02.jpg", "proeng-projects-02.jpg"]
        },
        {
          name: {
            pt: "Montagem de Outdoor",
            en: "Billboard Installation"
          },
          year: "2023",
          client: "JcDecaux Mozambique",
          location: "Maputo",
          category: "Engenharia",
          description: {
            pt: "Em 2023, a Proeng foi responsável pela montagem de um outdoor em frente ao Ministério da Defesa. O trabalho incluiu a montagem da estrutura e o tratamento superficial, blast e pintura, garantindo uma finalização impecável.",
            en: "In 2023, Proeng was responsible for installing a billboard in front of the Ministry of Defense. The work included structural assembly and surface treatment, blasting, and painting, ensuring a flawless finish."
          },
          images: ["proeng-projects-08.jpg", "proeng-projects-08.jpg"]
        },
        {
          name: {
            pt: "Construção de duas estruturas metálicas",
            en: "Construction of Two Metal Structures"
          },
          year: "2022-2023",
          client: "Ministério Divina Esperança",
          location: "Chiango",
          category: "Engenharia",
          description: {
            pt: "Este projeto consistiu na construção de duas estruturas metálicas de grande porte para servirem de templo de adoração. A Proeng foi responsável pelo fabrico e a montagem da estrutura metálica, incluindo pilares, asnas e chaparia, entregando uma obra sólida e esteticamente agradável.",
            en: "This project involved the construction of two large metal structures to serve as a worship temple. Proeng was responsible for manufacturing and assembling the metal framework, including columns, trusses, and panels, delivering a solid and visually appealing structure."
          },
          images: ["projects-01.jpg", "projects-01.jpg"]
        },
        {
          name: {
            pt: "Fabrico de peças sob medida",
            en: "Custom Parts Fabrication"
          },
          year: "2024",
          client: "Televisa",
          location: "FPLM, Maputo",
          category: "Engenharia",
          description: {
            pt: "Em 2024, a Proeng participou no fabrico de peças sob medida, que passaram pelo processo de galvanização. Este projeto envolveu logística e coordenação minuciosas, assegurando uma execução eficiente e segura.",
            en: "In 2024, Proeng took part in fabricating custom-made parts, which underwent galvanization. This project involved detailed logistics and coordination, ensuring efficient and safe execution."
          },
          images: ["proeng-projects-02.jpg", "proeng-projects-02.jpg"]
        },
        {
          name: {
            pt: "Jateamento e Pintura de Estrutura Metálica",
            en: "Blasting and Painting of Metal Structure"
          },
          year: "2022",
          client: "Escopil",
          location: "",
          category: "Engenharia",
          description: {
            pt: "Neste projeto, a Proeng realizou o jateamento e a pintura de uma estrutura metálica, garantindo a remoção de corrosão e a aplicação de um novo revestimento protetor. O serviço foi executado dentro do prazo estipulado, assegurando a qualidade e durabilidade da estrutura.",
            en: "In this project, Proeng performed blasting and painting on a metal structure, ensuring the removal of corrosion and the application of a new protective coating. The service was completed within the agreed timeframe, ensuring the structure’s quality and durability."
          },
          images: ["proeng-projects-04.jpg", "proeng-projects-04.jpg"]
        },
        {
          name: {
            pt: "Reabilitação de Tanques na Beira",
            en: "Tank Rehabilitation in Beira"
          },
          year: "2023-2024",
          client: "Friedlander",
          location: "Terminal da Beira",
          category: "Engenharia",
          description: {
            pt: "Realizámos a reabilitação de tanques na Beira, com a Proeng responsável pelo trabalho de Blast e pintura, tanto no interior como no exterior dos tanques.",
            en: "We carried out tank rehabilitation in Beira, with Proeng responsible for blasting and painting, both inside and outside the tanks."
          },
          images: ["proeng-projects-06.jpg", "proeng-projects-06.jpg"]
        },
        {
          name: {
            pt: "Reparação e Pintura de Geradores Industriais",
            en: "Repair and Painting of Industrial Generators"
          },
          year: "2022",
          client: "Coca-Cola / Friedlander",
          location: "",
          category: "Engenharia",
          description: {
            pt: "A Proeng foi contratada para realizar a reparação e pintura de três geradores industriais, com foco no tratamento superficial. O trabalho incluiu a limpeza e preparação das superfícies, garantindo uma pintura uniforme e protetora para aumentar a longevidade dos geradores. O projeto foi concluído com sucesso para a Coca-Cola e a Friedlander.",
            en: "Proeng was contracted to repair and paint three industrial generators, focusing on surface treatment. The work included cleaning and surface preparation, ensuring a uniform and protective paint job to extend the generators’ lifespan. The project was successfully completed for Coca-Cola and Friedlander."
          },
          images: ["proeng-projects-01.jpg", "proeng-projects-01.jpg"]
        }
      ];
      

    useEffect(() => {
        AOS.init({
          duration: 800,
          once: true,
        });
        AOS.refresh();
    }, []);
      
    return (
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

                <div className="arrows">
                    <div className="arrow left" onClick={() => sliderRef.current?.slickPrev()}>
                        <img src="left.svg" alt="left-arrow" className="arrows-icons" />
                    </div>
                    <div className="arrow right" onClick={() => sliderRef.current?.slickNext()}>
                        <img src="right.svg" alt="right-arrow" className="arrows-icons" />
                    </div>
                </div>
            </section>

            {projects.map((item, index) => (
      <div key={index} className="page headline">
        <div className="portfolio-page">
          <div data-aos="fade-left">
          <p className="tag-project">{item.category[language]}</p>
            <h2>{item.name[language]}</h2>
          </div>

          <div className="small-description" data-aos="fade-right">
            <ul className="ul-list-category">
              <li>
                <span>{t.Ano}:</span> {item.year}
              </li>
              <li>
                <span>{t.Cliente}:</span> {item.client}
              </li>
              <li>
                <span>{t.Localização}:</span> {item.location}
              </li>
            </ul>
          </div>
        </div>

        <hr className="hr" />

        <div className="main description-project" data-aos="fade-up">
          <p className="col-description">{item.description[language]}</p>
        </div>

        <hr className="hr" />

        <div className="main">
        <swiper-container navigation="true" data-aos="zoom-in">
  {item.images.map((image, imgIndex) => (
    <swiper-slide key={imgIndex}>
      <img
        className="img-fluid img-project"
        src={image}
        alt={item.name[language]}
      />
    </swiper-slide>
  ))}
</swiper-container>

        </div>
      </div>
    ))}
        </div>
    );
}