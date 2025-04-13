import { useTranslation } from "react-i18next";

export default function HomePage() {
        const { t, i18n } = useTranslation();
        return (
                <>
                       <div className="page home">
        <div className="main">
          <div className="col-1">
            <h2>{t('about_us')}</h2>
            <div>
              <h3 className="subtitle">{t('team_experience')}</h3>
              <p>{t('mission_description')}</p>
            </div>
          </div>

          <div className="col-2">
            <br />
            <br />
            <b>{t('mission_title')}</b>
            <p>{t('mission_description')}</p>
            <br />
            <b>{t('vision_title')}</b>
            <p>{t('vision_description')}</p>
          </div>
        </div>

        <div className="main">
          <div className="exp">
            <h3>100</h3>
            <span className="separator"></span>
            {t('years_of_experience')}
          </div>

          <div className="exp">
            <h3>100</h3>
            <span className="separator"></span>
            {t('projects_done')}
          </div>

          <div className="exp">
            <h3>100</h3>
            <span className="separator"></span>
            {t('location')}
          </div>

          <div className="exp">
            <h3>100</h3>
            <span className="separator"></span>
            {t('employees')}
          </div>
        </div>

        <div className="main">
          <img className="img-fluid" src="bg.jpg" alt="teste" />
        </div>
      </div>
                </>
        );

}