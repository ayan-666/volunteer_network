import React from 'react';
import { Button} from 'react-bootstrap';
const Search = () => {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col" style={{textAlign:"center"}}>
                        <h1 style={{textAlign:"center",marginTop:"20px"}}>I Grow By Helping People In Need</h1>
                        <input type="text" placeholder="Search" className="mt-3"/>
                        <Button variant="primary" size="sm" className="mb-1">Search</Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Search;