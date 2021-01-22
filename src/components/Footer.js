import React, { useContext } from 'react'
import ThemeContext from '../context/theme-context';

const Footer = () => {

    const theme = useContext(ThemeContext);

    return (
        <React.Fragment>
            <footer className="footer text-center" style={theme.secondary}>
                <div className="container">
                    <div className="row mb-5">

                        <div className="col-lg-4 mb-5 mb-lg-0">
                            <h4 className="mb-4">LOCATION</h4>
                            <p className="pre-wrap lead mb-0">08629 Torrelles de Llobregat<br />
                        Barcelona
                        </p>

                        </div>

                        <div className="col-lg-4 mb-5 mb-lg-0">
                            <h4 className="mb-4">AROUND THE WEB</h4>
                            <a className="btn btn-social mx-1" style={theme.id % 2 !== 0 ? { color: 'white', borderColor: 'white' } : { color: 'black', borderColor: 'black' }} href="https://www.github.com/aleixdeveloper" target="_blank" rel="noreferrer">
                                <i className="fab fa-fw fa-github"></i></a>
                            <a className="btn btn-social mx-1" style={theme.id % 2 !== 0 ? { color: 'white', borderColor: 'white' } : { color: 'black', borderColor: 'black' }} href="https://www.freecodecamp.com/aleixdeveloper" target="_blank" rel="noreferrer"><i className="fab fa-fw fa-free-code-camp"></i></a>

                            <a className="btn btn-social mx-1" style={theme.id % 2 !== 0 ? { color: 'white', borderColor: 'white' } : { color: 'black', borderColor: 'black' }} href="https://www.linkedin.com/in/aleixclemente/" target="_blank" rel="noreferrer">
                                <i className="fab fa-fw fa-linkedin-in"></i></a>
                            <a className="btn btn-social mx-1" style={theme.id % 2 !== 0 ? { color: 'white', borderColor: 'white' } : { color: 'black', borderColor: 'black' }} href="https://www.twitter.com/aleeiixxx" target="_blank" rel="noreferrer">
                                <i className="fab fa-fw fa-twitter"></i></a>
                        </div>

                        <div className="col-lg-4">
                            <h4 className="mb-4">SUBMIT AN IMPROVEMENT</h4>
                            <p className="pre-wrap lead mb-0">Let me know which are your thoughts in order to upgrade this website</p>
                        </div>
                    </div>
                    <div className="row ">
                        <div className="col-lg-12">
                            <div id="linkedin"
                                className="LI-profile-badge text-left"
                                data-version="v1"
                                data-size="medium"
                                data-locale="en_US"
                                data-type="horizontal"
                                data-theme="dark"
                                data-vanity="aleixclemente">
                                <a className="LI-simple-link"
                                    href='https://es.linkedin.com/in/aleixclemente?trk=profile-badge'>
                                    Aleix Clemente Campderrós</a>
                            </div>
                        </div>
                    </div>

                </div>
            </footer>
            <section className="copyright py-4 text-center text-white" style={theme.copyright}>
                <div className="container"><p className="pre-wrap">Copyright © aleixdev 2020</p></div>
            </section>
        </React.Fragment>
    )
}


export default Footer;
