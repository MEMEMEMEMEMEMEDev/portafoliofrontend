import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

import "./About.scss";
import "../../styles/SwiperStyle.scss";
import "swiper/scss";
import "swiper/scss/pagination";

export default function About() {
  return (
    <section className="about" id="about-scroll">
      <Swiper modules={[Navigation]} navigation={true}>
        <SwiperSlide>
          <div className="about-title">
            <h2> MIS SERVICIOS </h2>
            <h3> Desarrollador </h3>
            <h3> Ecommerce </h3>
            <h3> Mantenimiento de Hardware </h3>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="about-tech">
            <label>TECNOLOGÍAS DE DESARROLLO </label>
            <h3> JAVASCRIPT </h3>
            <h3> REACT </h3>
            <h3> NEXT JS </h3>
            <h3> NODE/EXPRESS/MONGODB </h3>
            <h3> FIREBASE </h3>
            <h3> GIT </h3>
            <h3> SASS/MUI/CSS</h3>
            <h3>STYLED-COMPONENTS</h3>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}
