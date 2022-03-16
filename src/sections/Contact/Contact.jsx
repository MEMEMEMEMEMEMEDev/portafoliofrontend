import React, { useState } from "react";
import { TextField, Alert } from "@mui/material";
import { Button } from "@mui/material";
import { useFormik } from "formik";
import { collection, addDoc } from "@firebase/firestore";
import { db } from "../../firebase/firebaseconfig";
import * as Yup from "yup";

import "./Contact.scss";
import "./MuiStyles.scss";
import GithubImg from "../../assets/images/more/github.png";
import LinkedinImg from "../../assets/images/more/linkedin.png";
import TwitterImg from "../../assets/images/more/twitter.png";

export default function Contact() {
  const [alert, setAlert] = useState({
    success: false,
    error: false,
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Este campo es obligatorio"),
      email: Yup.string().email().required("Este campo es obligatorio"),
      message: Yup.string(),
    }),
    onSubmit: async (values, { resetForm }) => {
      const newMessage = {
        name: values.name,
        email: values.email,
        message: values.message,
        createdAt: new Date(),
      };

      try {
        await addDoc(collection(db, "contacts"), newMessage);
        setAlert({ success: true, error: false });
        resetForm();
        setTimeout(() => {
          setAlert({ success: false, error: false });
        }, 3000);
      } catch (error) {
        setAlert({ success: false, error: true });
        setTimeout(() => {
          setAlert({ success: false, error: false });
        }, 3000);
      }
    },
  });

  return (
    <>
      {alert.success ? (
        <Alert style={{ position: "absolute" }} severity="success">
          {" "}
          Mensaje enviado con exito!
        </Alert>
      ) : null}
      {alert.error ? <Alert severity="error"> Error en el envío </Alert> : null}
      <section className="contact" id="contact-scroll">
        <div className="contact-form" id="form-contact">
          <h2> CONTACTAME </h2>
          <form onSubmit={formik.handleSubmit}>
            <TextField
              id="name"
              name="name"
              label="Nombre"
              variant="standard"
              fullWidth
              value={formik.values.name}
              onChange={formik.handleChange}
              error={formik.touched.name && Boolean(formik.errors.name)}
              helperText={formik.touched.name && formik.errors.name}
              inputProps={{ maxLength: 70 }}
              autoComplete="off"
            />

            <TextField
              id="email"
              name="email"
              label="Email"
              variant="standard"
              fullWidth
              value={formik.values.email}
              onChange={formik.handleChange}
              error={formik.touched.name && Boolean(formik.errors.email)}
              helperText={formik.touched.name && formik.errors.email}
              inputProps={{ maxLength: 50 }}
              autoComplete="off"
            />

            <TextField
              id="message"
              name="message"
              label="Dejame un mensaje"
              variant="standard"
              fullWidth
              value={formik.values.message}
              onChange={formik.handleChange}
              error={formik.touched.name && Boolean(formik.errors.message)}
              multiline
              inputProps={{ maxLength: 800 }}
              autoComplete="off"
            />

            <Button type="submit" variant="text" size="medium">
              Enviar
            </Button>
          </form>
        </div>

        <div className="contact-image" />

        <footer>
          <a
            href="https://github.com/MEMEMEMEMEMEMEDev/portafoliofrontend"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={GithubImg} alt="github" />
          </a>

          <a
            href="https://www.linkedin.com/in/marcelo-huenchupan-aravena-884420208/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={LinkedinImg} alt="linkedin" />
          </a>

          <a
            href="https://twitter.com/arceparsedev"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={TwitterImg} alt="twitter" />
          </a>
        </footer>
      </section>
    </>
  );
}
