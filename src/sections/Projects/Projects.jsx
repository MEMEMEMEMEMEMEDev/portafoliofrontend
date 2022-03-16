import React from "react";
import "../../styles/SwiperStyle.scss";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/scss/navigation";
import "./Projects.scss";
import "swiper/scss";
import HomeImg from "../../assets/images/more/home.png";
import Github from "../../assets/images/more/github.png";
import BlogImg from "../../assets/images/projects/blog.webp";
import ClimaImg from "../../assets/images/projects/climate.webp";
import NoteImg from "../../assets/images/projects/note.webp";

export default function Projects() {
  return (
    <section className="projects" id="projects-scroll">
      <Swiper modules={[Navigation]} navigation={true} cssMode={true}>
        <SwiperSlide>
          <PrincipalHome />
        </SwiperSlide>

        <SwiperSlide>
          <Project
            urlImg={ClimaImg}
            name="Clima App"
            description="Aplicación en React con el fin de mostrar la información del clima de una ciudad, consume la API de OpenWeatherMap y la API de Google Geocoding para funcionar. Estilada con SASS tomando un par de elementos de Material UI.
            (Otra vez funcionando!)"
            githubproyect="https://github.com/MEMEMEMEMEMEMEDev/climaApp/tree/main"
            projectlink="https://clima-app-swart.vercel.app/"
          />
        </SwiperSlide>

        <SwiperSlide>
          <Project
            urlImg={BlogImg}
            name="BLOG"
            description="Blog creado con NextJS y estilado con Styled Components. Se utiliza Mdx para crear los artículos del blog. Planeo hacerlo mi propio blog, pero aún me faltan ideas para crear contenido, por lo que lo dejé como una muestra de lo que podría ser, aunque le debo algo de amor a los estilos."
            githubproyect="https://github.com/Kazuo-dev/MyBlog"
            projectlink="https://my-blog-beige-two.vercel.app/"
          />
        </SwiperSlide>

        <SwiperSlide>
          <Project
            urlImg={NoteImg}
            name="Note APP"
            description="Aplicación en React para crear notas, el sistema de usuarios y el de autenticacion están implementados con firebase, la principal razón de esta aplicación era implementar REDUX. Aún no decido que rumbo tomará, sigue en desarrollo pero es una versión estable que demuestra el conocimiento de React, Redux, firebase y SASS. (Actualmente migrando proyecto a React Native)(9 de Marzo)."
            githubproyect="https://github.com/MEMEMEMEMEMEMEDev/notesApp"
            projectlink="https://notes-app-sigma-fawn.vercel.app/"
          />
        </SwiperSlide>
      </Swiper>
    </section>
  );
}

const PrincipalHome = () => {
  return (
    <div className="projects-home">
      <h2> PROYECTOS </h2>
    </div>
  );
};

const Project = ({ urlImg, name, description, githubproyect, projectlink }) => {
  return (
    <div className="projects-project">
      <div className="projects-project__container">
        <div className="projects-project__container-img">
          <img src={urlImg} alt="project" />
        </div>
        <div className="projects-project__container-description">
          <h2> {name} </h2>
          <p> {description} </p>
          <div className="projects-project__container-description__links">
            <a href={githubproyect} target="_blank" rel="noopener noreferrer">
              <img src={Github} alt="github" />
            </a>
            <a href={projectlink} target="_blank" rel="noopener noreferrer">
              <img src={HomeImg} alt="visit" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
