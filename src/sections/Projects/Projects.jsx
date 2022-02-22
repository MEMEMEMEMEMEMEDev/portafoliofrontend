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
import ClimaImg from "../../assets/images/jpg/climaApp.webp";
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
            description="Aplicación de clima con React(CRA) y sass, que permite obtener la información de una ciudad y su clima."
            githubproyect="https://github.com/MEMEMEMEMEMEMEDev/climaApp/tree/main"
            projectlink="https://clima-app-swart.vercel.app/"
          />
        </SwiperSlide>

        <SwiperSlide>
          <Project
            urlImg={BlogImg}
            name="BLOG"
            description="Proyecto de blog personal creado con NextJS y Styled-components principalmente, con el cual se pueden crear posts con archivos markdown de una forma sencilla. Actualmente sólo contiene textos de prueba. 
           "
            githubproyect="https://github.com/Kazuo-dev/MyBlog"
            projectlink="https://my-blog-jmeno97zr-kazuo-dev.vercel.app/"
          />
        </SwiperSlide>

        <SwiperSlide>
          <Project
            urlImg={NoteImg}
            name="Note APP"
            description="Aplicación de notas con React(CRA) y sass, que permite crear notas y guardarlas en una base de datos, aún está en desarrollo pero es una version estable.
           "
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
