import React, { useContext, useRef } from 'react';
import ThemeContext from '../context/theme-context';
import '../assets/css/custom.css';
import face from '../images/face.png';
import code_white from '../icons/code-white.png';
import code_black from '../icons/code-black.png';


const Header = () => {

    const theme = useContext(ThemeContext);
    const photo = useRef(null);

    const hoverIn = () => {
        photo.current.style.transition = 'box-shadow 0.5s';

        photo.current.style.boxShadow = `0px 20px 20px ${theme.secondary.background}`;
    }

    const hoverOut = () => {
        photo.current.style.boxShadow = `0px 0px 10px ${theme.secondary.background}`;

    }

    return (
        <header className="masthead text-center" style={theme.primary}>
            <div className="container d-flex align-items-center flex-column">
                <div className="img-hover-zoom img-hover-zoom--xyz"
                    onMouseOver={hoverIn}
                    onMouseOut={hoverOut}
                    style={{ boxShadow: `0px 0px 10px ${theme.secondary.background}` }} ref={photo}>
                    <img className="masthead-avatar mb-5" id="photo" src={face} alt="Face" />
                </div>

                <h1 className="masthead-heading mb-0" style={h1Style}>Aleix Clemente</h1>

                <div className="divider-custom">
                    <div className="divider-custom-line" style={theme.primaryReversed}></div>
                    <div className="divider-custom-icon"><img src={theme.id % 2 !== 0 ? code_white : code_black} alt='Code icon </>' style={code_iconStyle} /></div>
                    <div className="divider-custom-line" style={theme.primaryReversed}></div>
                </div>

                <p className="pre-wrap masthead-subheading font-weight-light mb-0">Front End Developer</p>
            </div>
        </header>
    )
}

const h1Style = { fontSize: '2.5rem', fontWeight: 'bold' }
const code_iconStyle = { width: '4em' }

export default Header;
