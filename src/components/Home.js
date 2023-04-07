import React, { useState } from "react";
import { Link , useNavigate } from "react-router-dom";
import "../styles/Home.css";
import { Button, Modal, Form, FormControl, Spinner } from "react-bootstrap";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { submitDailyReport,submitGoal,submitObservations } from '../api'; // Import the submitDailyReport function


const Home = () => {

    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [date, setDate] = useState(new Date());
    const handleConfirm = (date) => {
        setDate(date);
    };

    // const daily report
    const [show, setShow] = useState(false);
    const [submitting, setSubmitting] = useState(false);
    const [activities, setActivities] = useState("");
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
   

    // const to goal
    const [showGoal, setShowGoal] = useState(false);
    const [goals, setGoals] = useState('');
    const handleCloseGoal = () => setShowGoal(false);
    const handleShowGoal = () => setShowGoal(true);
    
    // const to Observations
    const [showObservations, setShowObservations] = useState(false);
    const [goalObservations, setGoalObservations] = useState('');
    const [descriptions, setDescriptions]= useState('');
    const handleCloseObservations = () => setShowObservations(false);
    const handleShowObservations = () => setShowObservations(true);

    // const report view
    const navigate = useNavigate();
    const[reportTitle, setReportTitle]= useState('');
    const[reportContent, setReportContent]= useState('');
    const handleRedirect = (title, content) => {
        navigate("/report", { state: { title, content } });
      };
      
    
 

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmitting(true);
        
        const data = await submitDailyReport(name, date, activities); // Use the imported function
        // const data = await response.json();
        console.log(data)
        
        setTimeout(() => {
            setSubmitting(false);
            handleClose();
            handleRedirect('Daily Report', data['message']);
          }, 2000);
    };

    const handleSubmitGoal = async (e) => {
        e.preventDefault();
        setSubmitting(true);
        
        const data = await submitGoal(date,name,age,goals); // Use the imported function
        // const data = await response.json();
        console.log(data)
    
        // Simulación de una petición que tarda 2 segundos en completarse
        setTimeout(() => {
            setSubmitting(false);
            handleClose();
            handleRedirect('Goal Report', data['message']);
          }, 2000);
      
    };

    const handleSubmitObservations = async (e) => {
        e.preventDefault();
        setSubmitting(true);
        const data = await submitObservations(date,name,age,goalObservations,descriptions); // Use the imported function
        // const data = await response.json();
        console.log(data)
    
        // Simulación de una petición que tarda 2 segundos en completarse
        setTimeout(() => {
            setSubmitting(false);
            handleClose();
            handleRedirect('Descriptions Report', data['message']);
          }, 2000);
    };

    return (
        <div className="main-view">
            <div className="button-container">
               <Button className="main-view-btn main-view-btn-primary" size="lg" onClick={handleShowObservations} >
                     Observations
                </Button>
                <Modal show={showObservations} onHide={handleCloseObservations}>
                    <Modal.Header closeButton>
                        <Modal.Title>Report Goal</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form onSubmit={handleSubmitObservations}>
                            <Form.Group controlId="date">
                                <Form.Label>Date</Form.Label>
                                <DatePicker
                                    className="form-control"
                                    selected={date}
                                    onChange={handleConfirm}
                                />
                            </Form.Group>
                            <br />
                            <Form.Group controlId="name">
                                <Form.Label>Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    required
                                />
                            </Form.Group>
                            <br />
                            <Form.Group controlId="age">
                                <Form.Label>Age</Form.Label>
                                <Form.Control
                                    type="number"
                                    value={age}
                                    onChange={(e) => setAge(e.target.value)}
                                    required
                                />
                            </Form.Group>
                            <br />
                            <Form.Group controlId="goals">
                                <Form.Label>Goals</Form.Label>
                                <FormControl
                                    as="textarea"
                                    rows={3}
                                    value={goalObservations}
                                    onChange={(e) => setGoalObservations(e.target.value)}
                                    required
                                />
                            </Form.Group>
                            <br />
                            <Form.Group controlId="goals">
                                <Form.Label>Descriptions</Form.Label>
                                <FormControl
                                    as="textarea"
                                    rows={3}
                                    value={descriptions}
                                    onChange={(e) => setDescriptions(e.target.value)}
                                    required
                                />
                            </Form.Group>
                          
                            <br />
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
                <Button className="main-view-btn main-view-btn-success" size="lg" onClick={handleShow}>
                    Daily Report
                </Button>
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Daily Report</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form onSubmit={handleSubmit}>
                            <Form.Group controlId="date">
                                <Form.Label>Date</Form.Label>
                                <DatePicker
                                    className="form-control"
                                    selected={date}
                                    onChange={handleConfirm}
                                />
                            </Form.Group>
                            <Form.Group controlId="namte">
                                <Form.Label>Nombre</Form.Label>
                                <Form.Control
                                    type="text"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    required
                                />
                            </Form.Group>
                            <Form.Group controlId="activities">
                                <Form.Label>Actividades</Form.Label>
                                <Form.Control
                                    as="textarea"
                                    rows={3}
                                    value={activities}
                                    onChange={(e) => setActivities(e.target.value)}
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
                <Button className="main-view-btn main-view-btn-warning" size="lg"  onClick={handleShowGoal}>
                    Goal
                </Button>
                <Modal show={showGoal} onHide={handleCloseGoal}>
                    <Modal.Header closeButton>
                        <Modal.Title>Report Goal</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form onSubmit={handleSubmitGoal}>
                            <Form.Group controlId="date">
                                <Form.Label>Date</Form.Label>
                                <DatePicker
                                    className="form-control"
                                    selected={date}
                                    onChange={handleConfirm}
                                />
                            </Form.Group>
                            <Form.Group controlId="name">
                                <Form.Label>Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    required
                                />
                            </Form.Group>
                            <Form.Group controlId="age">
                                <Form.Label>Age</Form.Label>
                                <Form.Control
                                    type="number"
                                    value={age}
                                    onChange={(e) => setAge(e.target.value)}
                                    required
                                />
                            </Form.Group>
                            <Form.Group controlId="goals">
                                <Form.Label>Goals</Form.Label>
                                <FormControl
                                    as="textarea"
                                    rows={3}
                                    value={goals}
                                    onChange={(e) => setGoals(e.target.value)}
                                    required
                                />
                            </Form.Group>
                            <br />
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
                <Link to="/chat">
                    <Button className="main-view-btn main-view-btn-info" size="lg">
                        Chat
                    </Button>
                </Link>
            </div>
        </div>
    );
};

export default Home;
