import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import "../estilos/Contacto.css";

const Contacto = () => {
  // Definir el esquema de validación con Yup
  const validationSchema = Yup.object({
    name: Yup.string().required('Nombre es obligatorio'),
    email: Yup.string().email('Correo inválido').required('Correo es obligatorio'),
    password: Yup.string().min(6, 'La contraseña debe tener al menos 6 caracteres').required('Contraseña es obligatoria'),
  });

  return (
    <div className="form-container">
      <Formik
        initialValues={{ name: '', email: '', password: '' }}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting }) => {
          console.log('Formulario enviado', values);
          setSubmitting(false); // Para simular el envío
        }}
      >
        {({ isSubmitting }) => (
          <Form className="form">
            <h2>Contacto</h2>
            
            <div>
              <label htmlFor="name">Nombre</label>
              <Field type="text" name="name" />
              <ErrorMessage name="name" component="div" className="error-message" />
            </div>
            
            <div>
              <label htmlFor="email">Correo Electrónico</label>
              <Field type="email" name="email" />
              <ErrorMessage name="email" component="div" className="error-message" />
            </div>
            
            <div>
              <label htmlFor="password">Contraseña</label>
              <Field type="password" name="password" />
              <ErrorMessage name="password" component="div" className="error-message" />
            </div>
            
            <button type="submit" disabled={isSubmitting}>
              Registrarse
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Contacto;
