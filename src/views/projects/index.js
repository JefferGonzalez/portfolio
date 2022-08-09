import React from "react";
/*----- components ------ */
import Spinner from "../../components/spinner/";
/*----- hooks ------ */
import useLoadingHook from "../../hooks/useLoading";
import useTranslationHook from "../../hooks/useTranslation";
/*----- utils ------ */
import Main from "../../utils/main-div";
/*----- JSON ------- */
import JSONProjects from "../../json/projects.js";

function Projects() {
  const [t] = useTranslationHook();
  const [isLoading] = useLoadingHook();
  const data = JSONProjects()[0];

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <div className="card">
          <div
            id="carouselExampleCaptions"
            className="carousel carousel-dark slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="0"
                className="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
            </div>
            <div className="carousel-inner">
              {data.Completed.map((project) => (
                <div
                  key={project.id}
                  className={
                    "carousel-item " + (project.id === 1 ? "active" : "")
                  }
                >
                  <img
                    src={project["url-image"]}
                    className="d-block img-fluid"
                    alt="..."
                  />
                  <div className="carousel-caption d-none d-md-block">
                    <h5>{project.name}</h5>
                    <p className="fw-bold">{project.description}</p>
                    {project.challenge ? (
                      <p
                        dangerouslySetInnerHTML={{
                          __html: project.challenge,
                        }}
                      ></p>
                    ) : (
                      t("actions.info")
                    )}
                  </div>
                </div>
              ))}
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
          <hr className="featurette-divider" />
          <div className="container marketing">
            {data.Videos.map((video) => (
              <>
                <div key={video.id} className="row featurette">
                  <div className="col-md-5">
                    <h2 className="featurette-heading fw-normal lh-1">
                      {video.name}
                    </h2>
                    <h3 className="text-muted">{video.description}</h3>
                    <div className="lead">
                      <font style={{ verticalAlign: "inherit" }}>
                        <font style={{ verticalAlign: "inherit" }}>
                          <p
                            dangerouslySetInnerHTML={{ __html: video.text }}
                          ></p>
                        </font>
                      </font>
                      <p
                        dangerouslySetInnerHTML={{ __html: video.repository }}
                      ></p>
                    </div>
                  </div>
                  <div className="col-md-7">
                    <video width="100%" height="100%" controls>
                      <source src={video.url} type="video/mp4" />
                      Tu navegador no soporta la reproducción de videos.
                    </video>
                  </div>
                </div>
                <hr className="featurette-divider" />
              </>
            ))}
          </div>
        </div>
      )}
    </>
  );
}

export default Main(Projects);
