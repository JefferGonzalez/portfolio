import React from "react";
/*----- components ------ */
import Spinner from "../../components/Spinner";
/*----- hooks ------ */
import useLoadingHook from "../../hooks/useLoading";
import useTranslationHook from "../../hooks/useTranslation";
/*----- utils ------ */
import Main from "../../utils/main-div";
/*----- JSON ------- */
import JSONSkills from "../../json/skills.js";
/*----- Image ------ */
import Adobe_Photoshop_CC from "../../resources/img/skills/Adobe_Photoshop_CC.png";

function Skills() {
  const [t] = useTranslationHook();
  const [isLoading] = useLoadingHook();

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <div className="container">
          <div className="d-flex justify-content-center">
            <h2 id="skills">
              {t("skills.title")}
            </h2>
          </div>
          <div className="row">
            {JSONSkills.map((type) =>
              type["Studied"].map((skill) => (
                <div
                  key={skill.id}
                  className="col-md-1 mt-2 tooltipCustom"
                  style={{ width: "11rem" }}
                >
                  <div className="card w-100 h-100 justify-content-center ">
                    <img
                      src={skill["url-image"]}
                      className="card-img-top border-none"
                      alt="Logo of HTML-5"
                    />
                    <span className="tooltiptext">{skill.name}</span>
                  </div>
                </div>
              ))
            )}
            <h4 className="mt-2">{t("skills.currently-learning")}</h4>
            {JSONSkills.map((type) =>
              type["Learning"].map((skill) => (
                <div
                  key={skill.id}
                  className="col-md-1 mt-2 tooltipCustom"
                  style={{ width: "11rem" }}
                >
                  <div className="card w-100 h-100 justify-content-center ">
                    <img
                      src={skill["url-image"]}
                      className="card-img-top border-none"
                      alt="Logo of HTML-5"
                    />
                    <span className="tooltiptext">{skill.name}</span>
                  </div>
                </div>
              ))
            )}
            <div className="d-flex justify-content-center">
              <h3 className="mt-4">{t("skills.tools")}</h3>
            </div>
            <div className="d-flex justify-content-center">
              <div
                className="col-md-4 mt-2 tooltipCustom"
                style={{ width: "11rem" }}
              >
                <div className="card w-100 h-100">
                  <img
                    src={Adobe_Photoshop_CC}
                    className="card-img-top border-none"
                    alt="Logo of HTML-5"
                  />
                  <span className="tooltiptext">Adobe Photoshop</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Main(Skills);
