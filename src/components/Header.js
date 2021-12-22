import React from 'react';

const Logo = () => {
    return (
        <h1>
            <strong>DCODELAB10</strong>
            <br></br>
            <span>UI/UX DESIGN & DEVELOPMENT</span>
        </h1>
    );
};

const Menu = () => (
    <a href="#" className="menu">
        <i className="fas fa-bars"></i>
    </a>
);

export { Logo, Menu };
