import React from "react";
import "../../styles/SwiperStyle.scss";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/scss/navigation";
import "./Projects.scss";
import "swiper/scss";
import HomeImg from "../../assets/images/png/home.png";
import Github from "../../assets/images/png/github.png";
import BlogImg from "../../assets/images/jpg/myblog.webp";
import ClimaImg from "../../assets/images/jpg/climateApp.png";
import NoteImg from "../../assets/images/png/a.png";

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
            description="Aplicacion de React para obtener la informacion del clima de una ciudad, con una API de clima y una API de geolocalizacion, estilada con SCSS tomando prestado un par de elementos de MaterialUI."
            githubproyect="https://github.com/MEMEMEMEMEMEMEDev/climaApp/tree/main"
            projectlink="https://clima-app-swart.vercel.app/"
          />
        </SwiperSlide>

        <SwiperSlide>
          <Project
            urlImg={BlogImg}
            name="BLOG"
            description="Blog personal creado con NextJS, trabajando con paginación dinámica y markdown para crear posts, estilada con styled-components, aún contiene sólo textos de prueba, espero poder ir llenandolo con contenido a lo largo de mi carrera."
            githubproyect="https://github.com/Kazuo-dev/MyBlog"
            projectlink="https://my-blog-jmeno97zr-kazuo-dev.vercel.app/"
          />
        </SwiperSlide>

        <SwiperSlide>
          <Project
            urlImg={NoteImg}
            name="Note APP"
            description="Aplicación en React para crear notas, el sistema de usuarios y el de autenticacion están implementados con firebase, la principal razón de esta aplicación era implementar REDUX. Aún no decido que rumbo tomará, sigue en desarrollo pero es una versión estable que demuestra el conocimiento de React, Redux, firebase y SASS."
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
      <div className="projects-project__img">
        <img src={urlImg} alt="project" />
      </div>
      <div className="projects-project__description">
        <h2> {name} </h2>
        <p> {description} </p>
        <div className="projects-project__description-links">
          <a href={githubproyect} target="_blank" rel="noopener noreferrer">
            <img src={Github} alt="github" />
          </a>
          <a href={projectlink} target="_blank" rel="noopener noreferrer">
            <img src={HomeImg} alt="visit" />
          </a>
        </div>
      </div>
    </div>
  );
};
