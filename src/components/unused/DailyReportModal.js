import React, { useState } from "react";
import { Button, Modal, Form, Spinner } from "react-bootstrap";

const DailyReportModal = () => {
  const [show, setShow] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [nombre, setNombre] = useState("");
  const [actividades, setActividades] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);

    // Realiza la petición aquí, por ejemplo:
    // axios.post("/api/daily-report", { nombre, actividades }).then((response) => {
    //   setSubmitting(false);
    //   handleClose();
    // });

    // Simulación de una petición que tarda 2 segundos en completarse
    setTimeout(() => {
      setSubmitting(false);
      handleClose();
    }, 2000);
  };

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Agregar Informe Diario
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Informe Diario</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="nombre">
              <Form.Label>Nombre</Form.Label>
              <Form.Control
                type="text"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group controlId="actividades">
              <Form.Label>Actividades</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                value={actividades}
                onChange={(e) => setActividades(e.target.value)}
                required
              />
            </Form.Group>
            <br></br>
            <Button variant="primary" type="submit" disabled={submitting}>
              {submitting ? (
                <Spinner animation="border" size="sm" />
              ) : (
                "Enviar"
              )}
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default DailyReportModal;
