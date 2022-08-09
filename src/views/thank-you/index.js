import React from "react";
/*----- components ------ */
import Spinner from "../../components/spinner/";
/*----- hooks ------ */
import useLoadingHook from "../../hooks/useLoading";
import useTranslationHook from "../../hooks/useTranslation";
/*----- utils ------ */
import CenterDiv from "../../utils/main-div";

function ThankYou() {
  const [t] = useTranslationHook();
  const [isLoading] = useLoadingHook();
  return (
    <>
      {isLoading ? (<Spinner />) : (
        <div className="position-absolute top-50 start-50 translate-middle">
          <div className="h-100 text-center text-dark">
            <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
              <main className="px-3 h-100">
                <p className="fs-1 fw-bolder">
                  <span>❤️</span>
                  {t("contact.thank-you.title")}
                  <span>❤️</span>
                </p>
                <h5>{t("contact.thank-you.paragraph")}👋</h5>
              </main>
            </div>
          </div>
        </div>
      )
      }
    </>
  );
}

export default CenterDiv(ThankYou);
