export default function Footer() {
    return (
        <>
            <hr/>
            <div className="footer">
                <div className="logo-footer">
                    <img src="logo.png" alt="logo-footer" className="logo-footer" />
                </div>
                <div className="info-container">
                <div className="menu-list">
                    <ul className="nav-footer">
                        <li><a>Sobre Nós</a></li>
                        <li><a>Nossos Serviços</a></li>
                        <li><a>Portfolio</a></li>
                        <li><a>Contactos </a></li>
                    </ul>
                </div>

                <div>
                    <p className="email">info@proeng.co.mz</p>
                    <p className="cell">(+258) 84 000 0000</p>
                    <p className="location address">Av. Informacao por inserir</p>
                    <p className="location">Maputo - Moçambique</p>
                </div>
                </div>
            </div>
        </>
    );
}