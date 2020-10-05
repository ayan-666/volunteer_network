import React from 'react';
import {CardDeck,Card} from 'react-bootstrap';
import img1 from '../../images/images/animalShelter.png';
import img2 from '../../images/images/babySit.png';
import img3 from '../../images/images/childSupport.png';
import img4 from '../../images/images/birdHouse.png';
import img5 from '../../images/images/childSupport.png';
import img6 from '../../images/images/cleanWater.png';
import img7 from '../../images/images/clearnPark.png';
import img8 from '../../images/images/clothSwap.png';
import img9 from '../../images/images/driveSafety.png';
import img10 from '../../images/images/refuseShelter.png';
import img11 from '../../images/images/foodCharity.png';
import img12 from '../../images/images/goodEducation.png';
import img13 from '../../images/images/ITHelp.png';
import img14 from '../../images/images/libraryBooks.png';
import img15 from '../../images/images/musicLessons.png';
import img16 from '../../images/images/newBooks.png';

import './Detail.css'
import { Link } from 'react-router-dom';

const Detail = () => {
    return (
        <div>
            <div className="container mt-4">
                <div className="row">
                   <div className="col-3">
                        <div className="img">
                           <Link to="/register"> <img src={img1} alt="" id="img"/></Link>
                        </div>
                        <div className="title">
                            <h3>Animal</h3>
                            <p style={{textAlign:"center"}}>Know Details Click The Picture</p>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="img">
                        <Link to="/register"> <img src={img2} alt="" id="img"/></Link>
                        </div>
                        <div className="title">
                            <h3>Baby Support</h3>
                            <p style={{textAlign:"center"}}>Know Details Click The Picture</p>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="img">
                            <Link to="/register"><img src={img3} alt="" id="img"/></Link>
                        </div>
                        <div className="title">
                            <h3>Child Support</h3>
                            <p style={{textAlign:"center"}}>Know Details Click The Picture</p>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="img">
                        <Link to="/register"> <img src={img4} alt="" id="img"/></Link>
                        </div>
                        <div className="title">
                            <h3>Bird Support</h3>
                            <p style={{textAlign:"center"}}>Know Details Click The Picture</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container mt-4">
                <div className="row">
                    <div className="col-3">
                        <div className="img">
                        <Link to="/register"> <img src={img5} alt="" id="img"/></Link>
                        </div>
                        <div className="title">
                            <h3>Child Support</h3>
                            <p style={{textAlign:"center"}}>Know Details Click The Picture</p>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="img">
                        <Link to="/register"> <img src={img6} alt="" id="img"/></Link>
                        </div>
                        <div className="title">
                            <h3>Clean Water</h3>
                            <p style={{textAlign:"center"}}>Know Details Click The Picture</p>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="img">
                        <Link to="/register"> <img src={img7} alt="" id="img"/></Link>
                        </div>
                        <div className="title">
                            <h3>Clearn Park</h3>
                            <p style={{textAlign:"center"}}>Know Details Click The Picture</p>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="img">
                        <Link to="/register"> <img src={img8} alt="" id="img"/></Link>
                        </div>
                        <div className="title">
                            <h3>Cloth Swap</h3>
                            <p style={{textAlign:"center"}}>Know Details Click The Picture</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container mt-4">
                <div className="row">
                    <div className="col-3">
                        <div className="img">
                        <Link to="/register"> <img src={img9} alt="" id="img"/></Link>
                        </div>
                        <div className="title">
                            <h3>Drive Safty</h3>
                            <p style={{textAlign:"center"}}>Know Details Click The Picture</p>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="img">
                        <Link to="/register"> <img src={img10} alt="" id="img"/></Link>
                        </div>
                        <div className="title">
                            <h3>Refuse Shelter</h3>
                            <p style={{textAlign:"center"}}>Know Details Click The Picture</p>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="img">
                        <Link to="/register"> <img src={img11} alt="" id="img"/></Link>
                        </div>
                        <div className="title">
                            <h3>Food Charity</h3>
                            <p style={{textAlign:"center"}}>Know Details Click The Picture</p>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="img">
                        <Link to="/register"> <img src={img12} alt="" id="img"/></Link>
                        </div>
                        <div className="title">
                            <h3>Good Education</h3>
                            <p style={{textAlign:"center"}}>Know Details Click The Picture</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container mt-4">
                <div className="row">
                    <div className="col-3">
                        <div className="img">
                        <Link to="/register"> <img src={img13} alt="" id="img"/></Link>
                        </div>
                        <div className="title">
                            <h3>It Help</h3>
                            <p style={{textAlign:"center"}}>Know Details Click The Picture</p>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="img">
                        <Link to="/register"> <img src={img14} alt="" id="img"/></Link>
                        </div>
                        <div className="title">
                            <h3>Library Books</h3>
                            <p style={{textAlign:"center"}}>Know Details Click The Picture</p>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="img">
                        <Link to="/register"> <img src={img15} alt="" id="img"/></Link>
                        </div>
                        <div className="title">
                            <h3>Music Lessons</h3>
                            <p style={{textAlign:"center"}}>Know Details Click The Picture</p>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="img">
                        <Link to="/register"> <img src={img16} alt="" id="img"/></Link>
                        </div>
                        <div className="title">
                            <h3>Cloth Swap</h3>
                            <p style={{textAlign:"center"}}>Know Details Click The Picture</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Detail;