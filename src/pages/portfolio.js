export default function PortfolioService() {
    return (
        <>
            <div className="banner">
                <div className="arrows">
                    <div>left</div>
                    <div>right</div>
                </div>
            </div>

            <div className="page">

                <div className="portfolio-page">
                    <div className="">
                        <p className="tag-project">Arquitectura / Planeamento Urbano / Projecto De Interiores</p>
                        <h2>TITULO DA FICHA<br />
                            DE PROJECTO</h2>
                    </div>

                    <div className="small-description">
                        <div>
                            <li><span>Área</span>281 m²</li>
                            <li><span>Área</span>281 m²</li>
                            <li><span>Área</span>281 m²</li>
                        </div>

                        <div>
                            <li><span>Área</span>281 m²</li>
                            <li><span>Área</span>281 m²</li>
                            <li><span>Área</span>281 m²</li>
                        </div>
                    </div>
                </div>
                <hr className="hr" />

                <div className="main description-project">
                    <div>Lorem ipsum dolor sit amet, cons ectetuer
                        adipiscing elit, sed diam nonummy nibh euismod
                        tincidunt ut laoreet dolore magna aliquam erat
                        volutpat. Ut wisi enim ad minim veniam, quis
                        nostrud exerci tation ullamcorper suscipit lobortis
                        nisl ut aliquip ex ea commodo consequat.</div>

                    <div>Lorem ipsum dolor sit amet, cons ectetuer
                        adipiscing elit, sed diam nonummy nibh euismod
                        tincidunt ut laoreet dolore magna aliquam erat
                        volutpat. Ut wisi enim ad minim veniam, quis
                        nostrud exerci tation ullamcorper suscipit lobortis
                        nisl ut aliquip ex ea commodo consequat.</div>
                </div>

                <hr className="hr" />


                <div className='main'>
                    <img className="img-fluid img-project" src="bg.jpg" alt='teste'/>
                </div>
            </div>




        </>
    );
}