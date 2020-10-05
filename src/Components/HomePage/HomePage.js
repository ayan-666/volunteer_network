import React from 'react';
import Detail from '../Detail/Detail';
import Header from '../Header/Header';
import Search from '../Search/Search';

const HomePage = () => {
    return (
        <div>
            <Header></Header>
            <Search></Search>
            <Detail></Detail>
        </div>
    );
};

export default HomePage;