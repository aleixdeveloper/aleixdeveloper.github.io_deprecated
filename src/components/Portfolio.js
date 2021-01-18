import React, {useContext} from 'react'
import ThemeContext from '../context/theme-context';
import Modal from './Modal'
import {data} from './data'

import portfolio from '../icons/portfolio.png'
import portfolio_white from '../icons/portfolio_white.png'


const Portfolio = () => {
    const theme = useContext(ThemeContext);

    return (
        <>

        <section className="page-section portfolio" id="portfolio" style={theme.neutral}>
            <div className="container">
                <div className="text-center">
                    <h2 className="page-section-heading mb-0 d-inline-block">PORTFOLIO</h2>
                </div>

                <div className="divider-custom">
                    <div className="divider-custom-line" style={theme.primary}></div>
                    <div className="divider-custom-icon"><img src={theme.id %2 !== 0 ? portfolio : portfolio_white} style={portfolioStyles}/> </div>
                    <div className="divider-custom-line" style={theme.primary}></div>
                </div>

                <div className="row justify-content-center">
                {data.map((item) => (
                <Modal key={item.id} data={item} />
                    ))}
                </div>

            </div>
        </section>

        </>
    )
}
const portfolioStyles = {
    width: '2em'
}
export default Portfolio;
