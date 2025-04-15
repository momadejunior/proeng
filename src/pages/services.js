import React from 'react';
import { useTranslation } from "../context/TranslationContext";

export default function Services() {
  const { t } = useTranslation();

  return (
    <>
      <div className="page home">
        <div className="main">
          <div className="col-1">
            <h2>{t.servicesTitle}</h2>
          </div>

          <div className="col-services">
            <div className="projects">
              <div>
                <h3>{t.projectManagementTitle}</h3>
                <p>{t.projectManagementText}</p>
              </div>

              <div>
                <h3>{t.maintenanceTitle}</h3>
                <p>{t.maintenanceText}</p>
              </div>
            </div>

            <div className="projects">
              <div>
                <h3>{t.manufacturingTitle}</h3>
                <p>{t.manufacturingText}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="main">
          <img className="img-fluid" src="bg.jpg" alt={t.servicesImageAlt} />
        </div>
      </div>
    </>
  );
}
