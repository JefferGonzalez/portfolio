import React from "react";
/*----- components ------ */
import Spinner from "../../components/spinner/";
/*----- hooks ------ */
import useLoadingHook from "../../hooks/useLoading";
import useTranslationHook from "../../hooks/useTranslation";
/*----- utils ------ */
import Main from "../../utils/main-div";

function Contact() {
  const [t] = useTranslationHook();
  const [isLoading] = useLoadingHook();

  (() => {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll(".needs-validation");

    // Loop over them and prevent submission
    Array.from(forms).forEach((form) => {
      form.addEventListener(
        "submit",
        (event) => {
          if (!form.checkValidity()) {
            event.preventDefault();
            event.stopPropagation();
          }

          form.classList.add("was-validated");
        },
        false
      );
    });
  })();

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <div className="row">
          <div className="col-md-6">
            <div className="card">
              <div className="card-header">
                <h5 className="card-title" id="ContactForm">
                  {t("contact.title")}
                </h5>
              </div>
              <div className="card-body">
                <form
                  className="needs-validation"
                  action="https://formsubmit.co/710c0faf70fc7e67f4d459a639c5635e"
                  method="POST"
                  noValidate
                >
                  <input
                    type="hidden"
                    name="_subject"
                    value="Mensaje nuevo :3"
                  />
                  <input
                    type="hidden"
                    name="_next"
                    value="https://jeffergonzalez.github.io/portfolio/thankyou"
                  ></input>
                  <input type="hidden" name="_captcha" value="false" />
                  <input type="hidden" name="_template" value="box" />
                  <div className="mb-3 has-validation">
                    <label htmlFor="email" className="form-label">
                      {t("contact.enter-your-email")}
                      <span className="text-danger">*</span>
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      name="email"
                      placeholder="name@example.com"
                      required
                    />
                    <div className="invalid-feedback">
                      Por favor completa este campo.
                    </div>
                  </div>
                  <div className="mb-3 has-validation">
                    <label htmlFor="message" className="form-label">
                      {t("contact.message")}
                      <span className="text-danger">*</span>
                    </label>
                    <textarea
                      className="form-control"
                      id="message"
                      name="message"
                      rows="4"
                      required
                    ></textarea>
                    <div className="invalid-feedback">
                      Por favor completa este campo.
                    </div>
                  </div>
                  <div className="d-flex justify-content-center">
                    <button type="submit" className="btn btn-success">
                      {t("actions.btn-send")}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card">
              <div className="card-header">
                <h5 className="card-title">
                  {t("contact.more-about-me.title")}
                </h5>
              </div>
              <div className="card-body">
                <ul className="list-group">
                  <li className="list-group-item d-flex justify-content-between align-items-center">
                    <span className="badge bg-primary rounded-pill">
                      {t("contact.more-about-me.name")}
                    </span>
                    Jefferson David González Cely
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center">
                    <span className="badge bg-primary rounded-pill">
                      {t("contact.more-about-me.age")}
                    </span>
                    {t("contact.data.age")}
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center">
                    <span className="badge bg-primary rounded-pill">
                      {t("contact.more-about-me.nationality")}
                    </span>
                    {t("contact.data.nationality")}
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center">
                    <span className="badge bg-primary rounded-pill">
                      {t("contact.more-about-me.language")}
                    </span>
                    {t("contact.data.language")}
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center">
                    <span className="badge bg-primary rounded-pill">
                      WhatsApp
                    </span>
                    (+57) 311 881 0950
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center">
                    <span className="badge bg-primary rounded-pill">
                      {t("contact.more-about-me.email")}
                    </span>
                    jefferd2016@gmail.com
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center">
                    <span className="badge bg-primary rounded-pill">
                      {t("contact.more-about-me.address")}
                    </span>
                    Bogotá D.C - Colombia
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Main(Contact);
