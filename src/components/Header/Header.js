import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css';

const Header = () => {
    return (
        <div className="text-center text-primary header-container">
            <h1>All available Cats</h1>
            <h5>Time spent with cats is never wasted</h5>
            <h1>Total Budget:10 Million</h1>
        </div>
    );
};

export default Header;