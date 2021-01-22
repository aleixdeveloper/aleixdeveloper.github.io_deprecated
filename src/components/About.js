import React, { useContext } from 'react'
import ThemeContext from '../context/theme-context';
import about from '../icons/about.png'
import about_white from '../icons/about_white.png'

const About = () => {

    const theme = useContext(ThemeContext);

    return (

        <section className="page-section mb-0" id="about" style={theme.terciary}>
            <div className="container">

                <div className="text-center">
                    <h2 className="page-section-heading d-inline-block">ABOUT</h2>
                </div>

                <div className="divider-custom">
                    <div className="divider-custom-line" style={theme.primaryReversed}></div>
                    <div className="divider-custom-icon"><img src={theme.id % 2 !== 0 ? about_white : about} alt='about icon' style={aboutStyles} /></div>
                    <div className="divider-custom-line" style={theme.primaryReversed}></div>
                </div>

                <div className="row">
                    <div className="col-lg-4 ml-auto">
                        <p className="pre-wrap lead" style={{ fontSize: '1.2em' }}>Hey there! I'm a web developer specialized in React. I'm learning day by day the depths of Javascript and keeping an eye on the incoming trends of the Front End World.</p>
                    </div>
                    <div className="col-lg-4 mr-auto">
                        <p className="pre-wrap lead" style={{ fontSize: '1.2em' }}>I like to play football, chess and the bass on my leisure time. <br />
                        Most of my web apps have borned to accomplish personal needs.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
const aboutStyles = {
    width: '2em'
}
export default About;
