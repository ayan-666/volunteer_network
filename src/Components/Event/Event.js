import React from 'react';
import './Event.css';
import extraVolunteer from '../../images/images/extraVolunteer.png';
import {Button} from 'react-bootstrap';
const Event = () => {
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-6">
                    <div className="left">
                        <img src={extraVolunteer} alt=""/>
                    </div>
                    <div className="right">
                        <h3 className="ml-3">Hello EveryOne..</h3>
                        <h5 className="ml-3">23 Oct, 2019</h5>
                        <Button variant="secondary" className="ml-3">Cencel</Button>
                    </div>
                </div>
                <div className="col-6">
                    <div className="left">
                        <img src={extraVolunteer} alt=""/>
                    </div>
                    <div className="right">
                        <h3 className="ml-3">Hello EveryOne..</h3>
                        <h5 className="ml-3">23 Oct, 2019</h5>
                        <Button variant="secondary" className="ml-3">Cencel</Button>
                    </div>
                </div>
                
                <div className="col-6 mt-5">
                    <div className="left">
                        <img src={extraVolunteer} alt=""/>
                    </div>
                    <div className="right">
                        <h3 className="ml-3">Hello EveryOne..</h3>
                        <h5 className="ml-3">23 Oct, 2019</h5>
                        <Button variant="secondary" className="ml-3">Cencel</Button>
                    </div>
                </div>
                <div className="col-6 mt-5">
                    <div className="left">
                        <img src={extraVolunteer} alt=""/>
                    </div>
                    <div className="right">
                        <h3 className="ml-3">Hello EveryOne..</h3>
                        <h5 className="ml-3">23 Oct, 2019</h5>
                        <Button variant="secondary" className="ml-3">Cencel</Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Event;