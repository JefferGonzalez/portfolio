import React from "react";
/*----- components ------ */
import Spinner from "../../components/Spinner";
/*----- hooks ------ */
import useLoadingHook from "../../hooks/useLoading";
import useTranslationHook from "../../hooks/useTranslation";
/*----- images ------*/
import Me from '../../resources/img/yo.jpg';
/*----- utils ------ */
import Main from "../../utils/main-div";

function Home() {
  const [t] = useTranslationHook();
  const [isLoading] = useLoadingHook();
  return (
    <>
      {isLoading ? (<Spinner />) : (
        <div className="card p-2">
          <div className="row">
            <div className="col-md-6">
              <div className="image d-flex flex-column justify-content-center align-items-center">
                <div className="btn btn-outline-secondary btn-backgroud">
                  <img src={Me} alt="Jeffeson David González Cely" />
                </div>
                <br />
                <div className="gap-3 icons d-flex flex-row justify-content-center align-items-center">
                  <span>
                    <a
                      className="link-dark"
                      href="https://github.com/JefferGonzalez"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="bi bi-github"></i>
                    </a>
                  </span>
                  <span>
                    <a
                      className="link-success"
                      href="https://api.whatsapp.com/send?phone=573118810950"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="bi bi-whatsapp"></i>
                    </a>
                  </span>
                  <span>
                    <a
                      href="https://www.linkedin.com/in/jeffergonzalez"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="bi bi-linkedin"></i>
                    </a>
                  </span>
                  <span>
                    <a
                      className="link-info"
                      href="https://twitter.com/_JefferGonzalez"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="bi bi-twitter"></i>
                    </a>
                  </span>
                </div>
                <span className="arroba">@_JefferGonzalez</span>
                <br />
                <a
                  className="btn btn-primary"
                  href="https://drive.google.com/file/d/1F_on-ISJQ9gVsn-w0envkts_OM2990hX/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Descargar CV
                </a>
              </div>
            </div>
            <div className="col-md-6">
              <div className="text mt-3">
                <span>
                  {t("home.about-me.paragraph-1")}
                  <br />
                  <br />
                  {t("home.about-me.paragraph-2")}
                  <br />
                  <br />
                  {t("home.about-me.paragraph-3")}
                  <br />
                  <br />
                  <span className="text-primary">{t("actions.click-me")}</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Main(Home);
