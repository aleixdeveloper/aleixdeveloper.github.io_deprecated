import React, { useContext } from 'react'
import ThemeContext from '../context/theme-context';
import contact from '../icons/contact.png'
import contact_white from '../icons/contact_white.png'

const Contact = () => {

    const theme = useContext(ThemeContext);

    return (
        <section className="page-section" id="contact" style={theme.neutral}>
            <div className="container">

                <div className="text-center">
                    <h2 className="page-section-heading d-inline-block mb-0">CONTACT</h2>
                </div>

                <div className="divider-custom">
                    <div className="divider-custom-line" style={theme.primary}></div>
                    <div className="divider-custom-icon"><img src={theme.id % 2 !== 0 ? contact : contact_white} alt='contact icon' style={contactStyles} /></div>
                    <div className="divider-custom-line" style={theme.primary}></div>
                </div>

                <div className="row justify-content-center">
                    {/*                     <div className="col-lg-4">
                        <div className="d-flex flex-column align-items-center">
                            <div className="icon-contact mb-3"><i className="fas fa-mobile-alt"></i></div>
                            <div className="text-muted">Phone</div>
                            <div className="lead font-weight-bold" id="mobile_number">692 838 332</div>
                        </div>
            r        </div> */}
                    <div className="col-lg-4">
                        <div className="d-flex flex-column align-items-center">
                            <a href="mailto:devaleix@gmail.com"><div className="icon-contact mb-3" style={theme.primary}><i className="far fa-envelope"></i></div></a>
                            <div className="text">Email</div><a className="lead font-weight-bold" href="mailto:devaleix@gmail.com" style={theme.primaryReversed}>dev.aleix@gmail.com</a>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
const contactStyles = {
    width: '2em'
}
export default Contact;
