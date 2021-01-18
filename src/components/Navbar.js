import React, {useContext, useRef, useState} from 'react'
import ThemeContext from '../context/theme-context';
import '../assets/css/custom.css';

const Navbar = ({toggleTheme}) => {

    const theme = useContext(ThemeContext);
    let animation1 = useRef(null);
    let animation2 = useRef(null);
    let animation3 = useRef(null);

    let aleixdev = useRef(null);

    const hoverAleixdev = () => {

        aleixdev.current.style.color = theme.primary.background;
    }
    const hoverAleixdevOut = () => {

        aleixdev.current.style.color = theme.neutral.background;
    }

    const themeAnimation = () => {

            animation1.current.animate([
                { transform: 'translateX(0px)',
                 backgroundColor: theme.primary,
                opacity: 0.3}, 
                { transform: 'translateX(+15px)',
                backgroundColor: theme.primary,
                opacity: 0.6},
                { transform: 'translateX(0px)',
                backgroundColor: theme.primary,
                opacity: 0.9 },
              ], { 

                duration: 650,
                iterations: 1,
                easing: 'ease-out'
              });
              animation2.current.animate([
                { transform: 'translateX(+5px)',
                opacity: 0.3}, 
                { transform: 'translateX(-5px)',
                backgroundColor: theme.primary,
                opacity: 0.6},
                { transform: 'translateX(0px)',
                backgroundColor: theme.primary,
                opacity: 0.9 },
              ], { 

                duration: 600,
                iterations: 1,
                easing: 'ease'
              });
            animation3.current.animate([
                { transform: 'translateX(0px)',
                 backgroundColor: theme.terciary,
                opacity: 0.3}, 
                { transform: 'translateX(-10px)',
                backgroundColor: theme.terciary,
                opacity: 0.6},
                { transform: 'translateX(0px)',
                backgroundColor: theme.terciary,
                opacity: 0.9 },
              ], { 

                duration: 700,
                iterations: 1,
                easing: 'ease-out'
              });       

            const scrollHeight = window.pageYOffset;

            window.scrollBy(1500, 0)
            

    }
    
    return (
        <nav className="navbar navbar-expand-lg fixed-top" id="mainNav" style={theme.secondary}>
            <div className="container" style={{fontSize: '18px'}}>
                <a className="navbar-brand js-scroll-trigger"
                href="#page-top"
                style={theme.secondary}
                ref={aleixdev}
                onMouseOver={hoverAleixdev}
                onMouseLeave={hoverAleixdevOut}
                >aleixdev</a>
                <button className="navbar-toggler navbar-toggler-right font-weight-bold" style={{...theme.terciary, outline: 'none'}} type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><i className="fas fa-bars"></i></button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item mx-0 mx-lg-1">
                            <a className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" style={theme.secondary} href="#portfolio">PORTFOLIO</a>
                        </li>
                        <li className="nav-item mx-0 mx-lg-1">
                            <a className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" style={theme.secondary} href="#about">ABOUT</a>
                        </li>
                        <li className="nav-item mx-0 mx-lg-1">
                            <a className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" style={theme.secondary} href="#contact">CONTACT</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" id="theme-toggle" href="#" onClick={toggleTheme}>
                        
                                <div className="container-theme" onClick={themeAnimation}>
                                    <div className="banner1" style={{...styles.banner1, ...theme.primary}} ref={animation1}></div>
                                    <div className="banner2" style={theme.neutral} ref={animation2}></div>
                                    <div className="banner3" style={{...styles.banner3, ...theme.terciary}} ref={animation3}></div>
                                </div>
                            
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
const styles = {
    banner1 : {
        position: 'relative',
        width: '1em',
        left: '0.2em',
        height: '0.8em',
        borderTopLeftRadius: '0.5em',
        borderTopRightRadius: '0.5em',
    },
    banner3 : {
        position: 'relative',
        width: '1.3em',
        left: '0.9em',
        height: '0.8em',
        borderBottomLeftRadius: '0.5em',
        borderBottomRightRadius: '0.5em',
    }
}
export default Navbar;
