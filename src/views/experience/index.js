import React from "react";
/*----- components ------ */
import Spinner from "../../components/spinner/";
/*----- hooks ------ */
import useLoadingHook from "../../hooks/useLoading";
import useTranslationHook from "../../hooks/useTranslation";
/*----- utils ------ */
import Main from "../../utils/main-div";
/*----- JSON ------- */
import JSONExperience from "../../json/moreInfo";

function Experience() {
  const [t] = useTranslationHook();
  const [isLoading] = useLoadingHook();
  const data = JSONExperience()[0];

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <div className="table-responsive">
          <table className="table table-striped">
            <thead>
              <tr>
                <th>#</th>
                <th className="w-25">{t("table.job-title")}</th>
                <th className="w-50">{t("table.description")}</th>
                <th className="w-25">{t("table.year")}</th>
                <th className="w-25">{t("table.place")}</th>
                <th>{t("table.certificate")}</th>
              </tr>
            </thead>
            <tbody>
              {data.Experience.map((experience, index) => (
                <tr key={experience.id}>
                  <th scope="row">{index + 1}</th>
                  <td>{experience.position}</td>
                  <td>{experience.description}</td>
                  <td>{experience.year}</td>
                  <td>
                    <p
                      dangerouslySetInnerHTML={{ __html: experience.place }}
                    ></p>
                  </td>
                  <td>
                    <p
                      dangerouslySetInnerHTML={{
                        __html: experience.certificate,
                      }}
                    ></p>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
}

export default Main(Experience);
