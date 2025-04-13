import React from 'react';
import { useTranslation } from 'react-i18next';

export default function Services() {
  const { t } = useTranslation();

  return (
    <>
      <div className="page home">
        <div className="main">
          <div className="col-1">
            <h2>{t('services')}</h2>
          </div>

          <div className="col-services">
            <div className="projects">
              <div>
                <h3>{t('project')}</h3>
                {t('project_description')}
              </div>

              <div>
                <h3>{t('maintenance')}</h3>
                {t('maintenance_description')}
              </div>
            </div>

            <div className="projects">
              <div>
                <h3>{t('manufacturing')}</h3>
                {t('manufacturing_description')}
              </div>
            </div>
          </div>
        </div>

        <div className="main">
          <img className="img-fluid" src="bg.jpg" alt="teste" />
        </div>
      </div>
    </>
  );
}
