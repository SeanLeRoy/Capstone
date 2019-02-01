import React from 'react';
import '../css/footer.css';

const Footer = () => (
    <div id="footer">
        <span><a href = "mailto: swartell@washington.edu"><img src="/imgs/mail.svg" alt="Our Email"/></a></span>
        <a href="https://twitter.com/playturnip"><img src="/imgs/twitter.svg" alt="Our Twitter"/></a>
        <a href="https://playturnip.itch.io/"><img src="/imgs/itch.svg" alt="Our Itch.io Site" height="30px" style={{ marginLeft: "6px" }}/></a>


        <div id="freepik">Icons made by 
            <a href="https://www.freepik.com/" title="Freepik">Freepik</a> 
            from 
            <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>
            is licensed by 
            <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a>
        </div>
    </div>
);

export default Footer;
