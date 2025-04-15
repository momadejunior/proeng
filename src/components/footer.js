import { useTranslation } from "../context/TranslationContext";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <>
      <hr />
      <div className="footer">
        <div className="logo-footer">
          <img src="logo.png" alt="logo-footer" className="logo-footer" />
        </div>
        <div className="info-container">
          <div className="menu-list">
            <ul className="nav-footer">
              <li><a>{t.aboutUs}</a></li>
              <li><a>{t.ourServices}</a></li>
              <li><a>{t.portfolio}</a></li>
              <li><a>{t.contacts}</a></li>
            </ul>
          </div>

          <div>
            <p className="email">info@proeng.co.mz</p>
            <p className="cell">(+258) 84 000 0000</p>
            <p className="location address">{t.address}</p>
            <p className="location">{t.cityCountry}</p>
          </div>
        </div>
      </div>
    </>
  );
}
