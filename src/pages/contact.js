export default function Contact(){
    return(
        <>
           

            <div className="page">

                <div className="portfolio-page">
                    <div className="">
    
                        <h2>CONTACTA-NOS</h2>
                    </div>

                    <div className="small-description">
                    <div><p class="email">info@proeng.co.mz</p><p class="cell">(+258) 84 000 0000</p><p class="location address">Av. Informacao por inserir</p><p class="location">Maputo - Moçambique</p></div>
                    </div>
                </div>
            
               
                <div className='main'>
                    <img className="img-fluid img-project" src="contact.jpg" alt='teste'/>
                </div>

                <div className="portfolio-page contact-container">
                    <div className="">
    
                        <h2>ESCREVE-NOS</h2>
                    </div>

                    <div className="small-description col-contact">
                   

                        <input type="text" className="input-field" placeholder="Nome"/>
                        <input type="text" className="input-field" placeholder="E-mail"/>
                        <textarea type="text" className="input-field" placeholder="Sua mensagem"/>
                        <input type="submit" className="input-field" value={"Enviar Mensagem"}/>
                    
                    </div>
                </div>

                
            </div>

        </>
    );
}