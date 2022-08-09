import React from "react";
/*----- components ------ */
import Spinner from "../../components/Spinner";
/*----- hooks ------ */
import useLoadingHook from "../../hooks/useLoading";
import useTranslationHook from "../../hooks/useTranslation";
/*----- utils ------ */
import Main from "../../utils/main-div";
/*----- JSON ------- */
import JSONEducation from "../../json/moreInfo";

function Education() {
  const [t] = useTranslationHook();
  const [isLoading] = useLoadingHook();
  const data = JSONEducation()[0];

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
                <th className="w-50">{t("table.degree")}</th>
                <th>{t("table.year")}</th>
                <th>{t("table.place")}</th>
                <th>{t("table.certificate")}</th>
              </tr>
            </thead>
            <tbody>
              {data.Education.map((educatacion, index) => (
                <tr key={educatacion.id}>
                  <th scope="row">{index + 1}</th>
                  <td>{educatacion.academicDegrees}</td>
                  <td>{educatacion.year}</td>
                  <td>
                    <p
                      dangerouslySetInnerHTML={{ __html: educatacion.place }}
                    ></p>
                  </td>
                  <td>
                    <p
                      dangerouslySetInnerHTML={{
                        __html: educatacion.certificate,
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

export default Main(Education);
