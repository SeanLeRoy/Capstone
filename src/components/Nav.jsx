import React from 'react';

const Nav = () => (
    <React.Fragment>
        <div id="nav" 
            style={{ 
                color: 'white', 
                fontFamily: 'Kanit, sans-serif', 
                backgroundColor: '#345226',
                height: '50px'
            }}>
            <img src="/imgs/turnip.svg"
                alt="Turnip Logo"
                height="30px"
            />
            <a href="https://playturnip.itch.io/"><img src="/imgs/itch.svg" alt="Our Itch.io Site" height="30px" style={{ marginLeft: "6px" }}/></a>
        </div>
    </React.Fragment>
);

export default Nav;
