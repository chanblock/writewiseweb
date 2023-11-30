import React, { useRef, useState,useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/Home.css";
import "../styles/Auth.css";
import styles from "../styles/Card.module.css";
import { Button, Card,Alert } from "react-bootstrap";
import 'react-datepicker/dist/react-datepicker.css';
import CardGrid from "./CardGrid";
// import { checkSubscription } from "../api";

const Home = () => {
    
    return (
        <div >
            <Alert variant="danger" style={{ textAlign: 'center' }}>
                Please note: Write Wise will cease operations as of November 30th this year. We're excited to announce that our services will continue under a new domain. Make sure to bookmark our new address: <a href="https://welby.com.au/" target="_blank">https://welby.com.au/</a>.
            </Alert>

            <CardGrid>
            <div className={styles.cardContainer} style={{ width: '22rem' }}>
                    <Card.Body>
                        <Card.Title>Child Care Expert</Card.Title>
                        <br></br>
                        <Card.Text>
                            Have a question? Start a conversation and get the answers you need.
                        </Card.Text>
                        {/* <Link to="/list_reports"  className={!fullAccess ? "link-disabled" : ""}> */}
                        <Link to="/list_reports" >

                            <Button >
                                Show options
                            </Button>
                        </Link>
                    </Card.Body>

                </div>
                <div className={styles.cardContainer} style={{ width: '22rem' }}>
                    <Card.Body>
                        <Card.Title>How to do in Australia</Card.Title>
                        <br></br>
                        <Card.Text>
                            Explore tips and information about traveling to and living in Australia.
                        </Card.Text>
                        <Link to="/to_do_australia">
                            <Button  >
                                How to do in Australia
                            </Button>
                        </Link>
                    </Card.Body>
                </div>
                <div className={styles.cardContainer} style={{ width: '22rem' }}>

                    <Card.Body>
                        <Card.Title>Ask me anything (Chat)</Card.Title>
                        <br></br>
                        <Card.Text>
                            Have a question? Start a conversation and get the answers you need.
                        </Card.Text>
                        {/* <Link to="/chat" className={!fullAccess ? "link-disabled" : ""}> */}
                        <Link to="/chat" >

                            <Button >
                                Ask me anything (Chat)
                            </Button>
                        </Link>
                    </Card.Body>

                </div>
                
            </CardGrid>


        </div>

    );
};

export default Home;
