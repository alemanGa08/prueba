import React, { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

interface Info {
  name: string;
  description: string;
  html_url: string;
  private: boolean;
}

const RepositoriesList = () => {
  const [info, setInfo] = useState<Info[]>([]);

  useEffect(() => {
    const fetchApi = async () => {
      const response = await fetch(
        "https://api.github.com/users/alemanGa08/repos"
      );
      const data = await response.json();
      setInfo(data.filter((inf: Info) => !inf.private));
    };

    fetchApi();
  }, []);

  return (
    <div className="repositories-list">
      {info.length > 0 ? (
        <Carousel>
          {info.map((inf, index) => (
            <div className="repository-item" key={inf.name}>
              <div className="card bg-light mb-4">
                <div className="card-body">
                  <h5 className="card-title text-primary">{inf.name}</h5>
                  <p className="card-text">{inf.description}</p>
                  <a
                    href={inf.html_url}
                    className="btn btn-outline-primary"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Mostrar Repositorio
                  </a>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      ) : (
        <div className="loading-message text-center">
          <p>Loading...</p>
        </div>
      )}
    </div>
  );
};

export default RepositoriesList;
