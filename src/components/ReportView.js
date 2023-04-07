import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import "../styles/Home.css";
import { Container, Card, Button, Form } from 'react-bootstrap';
import TextareaAutosize from 'react-textarea-autosize';



const ReportView = () => {
    const location = useLocation();
    const { title = "", content = "" } = location.state || {};

    const [editedContent, setEditedContent] = useState(content);

    const handleContentChange = (e) => {
      setEditedContent(e.target.value);
    };

    const handleCopyToClipboard = async () => {
        try {
          await navigator.clipboard.writeText(editedContent);
          alert('El contenido ha sido copiado al portapapeles');
        } catch (err) {
          console.error('Error al copiar al portapapeles:', err);
        }
      };
  
    return (
        <Container>
        <Card className="report-card">
          <Card.Body>
            <h2 className="report-title text-center">{title}</h2>
            <TextareaAutosize
            className="report-content no-scrollbar"
            value={editedContent}
            readOnly={false}
            onChange={handleContentChange}
          />
        <Button onClick={handleCopyToClipboard} className="mt-2 d-none d-md-inline-block copy-button">
            Copy
          </Button>
            </Card.Body>
            <br></br>
            <Button onClick={handleCopyToClipboard} className="mt-2 d-inline-block d-md-none copy-button">
            Copy
          </Button>
      </Card>
    </Container>
     
    );
  };

export default ReportView;
