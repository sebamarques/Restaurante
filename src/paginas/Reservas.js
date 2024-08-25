import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import "../estilos/Reservas.css";

const ReservationForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validationSchema = Yup.object({
    people: Yup.number()
      .min(2, 'El número mínimo de personas es 2')
      .required('Este campo es obligatorio'),
    location: Yup.string().required('Debes elegir una opción'),
    email: Yup.string().email('Correo inválido').required('Correo es obligatorio'),
    firstName: Yup.string().required('Nombre es obligatorio'),
    lastName: Yup.string().required('Apellido es obligatorio'),
  });

  return (
    <div className="form-container">
      {!isSubmitted ? (
        <Formik
          initialValues={{
            people: 2,
            location: 'inside', // Valor predeterminado
            email: '',
            firstName: '',
            lastName: '',
          }}
          validationSchema={validationSchema}
          onSubmit={(values, { setSubmitting }) => {
            // Simulación de una reserva exitosa
            const isSuccessful = true; // Cambia esto para simular una reserva fallida

            setSubmitting(false);
            if (isSuccessful) {
              setIsSubmitted(true);
            } else {
              alert('La reserva ha fallado. Por favor, intenta nuevamente.');
            }
          }}
        >
          {({ isSubmitting }) => (
            <Form className="form">
              <h1>Reserva una Mesa</h1>
              
              <div>
                <label htmlFor="people">Número de personas</label>
                <Field type="number" name="people" min="2" />
                <ErrorMessage name="people" component="div" className="error-message" />
              </div>

              <div>
                <label>¿Dónde te gustaría sentarte?</label>
                <Field as="select" name="location">
                  <option value="inside">Adentro</option>
                  <option value="outside">Afuera</option>
                </Field>
                <ErrorMessage name="location" component="div" className="error-message" />
              </div>

              <div>
                <label htmlFor="email">Correo Electrónico</label>
                <Field type="email" name="email" />
                <ErrorMessage name="email" component="div" className="error-message" />
              </div>

              <div>
                <label htmlFor="firstName">Nombre</label>
                <Field type="text" name="firstName" />
                <ErrorMessage name="firstName" component="div" className="error-message" />
              </div>

              <div>
                <label htmlFor="lastName">Apellido</label>
                <Field type="text" name="lastName" />
                <ErrorMessage name="lastName" component="div" className="error-message" />
              </div>

              <button type="submit" disabled={isSubmitting}>
                Reservar
              </button>
            </Form>
          )}
        </Formik>
      ) : (
        <div className="success-message">
          <h1>¡Reserva Exitosa!</h1>
          <p>Gracias por reservar con nosotros. Te esperamos pronto.</p>
        </div>
      )}
    </div>
  );
};

export default ReservationForm;
