import React from 'react';
import Header from '../Header/Header';
import './Register.css';
import {Button} from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';

const Register = () => {
    const history = useHistory();
    const handleProceed = () => {
        history.push('/event');
    }
    return (
        <div className="container">
            <div className="row">
                <div className="col mt-5" style={{textAlign:"center"}}>
                    <h2>Register as a volunteer</h2>
                    <br/>
                    <br/>
                    <input type="text" name="name" placeholder="Full Name" style={{width:"300px",border:"none",borderBottom:'1px solid black'}} required/>
                    <br/><br/>
                    <input type="text" name="email" placeholder="Write Email" style={{width:"300px",border:"none",borderBottom:'1px solid black'}} required/>
                    <br/><br/>
                    <input type="date" style={{width:"300px",border:"none",borderBottom:'1px solid black'}} required/>
                    <br/><br/>
                    <input type="text" name="description" placeholder="Description" style={{width:"300px",border:"none",borderBottom:'1px solid black'}} />
                    <br/><br/>
                    <Button variant="primary" style={{width:"300px",border:"none"}}  onClick={handleProceed}>Register</Button>
                </div>
            </div>
        </div>
    );
};

export default Register;