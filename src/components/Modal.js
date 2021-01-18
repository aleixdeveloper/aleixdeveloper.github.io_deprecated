import React, {useContext} from 'react'
import ThemeContext from '../context/theme-context';
import taca from '../icons/taca.png';



const Modal = ({data}) => {

    const theme = useContext(ThemeContext);

    return (
        <>

         <div className="col-md-6 col-lg-4 mb-5">
        <div className="portfolio-item mx-auto" data-toggle="modal" data-target={`#portfolioModal${data.id}`}>
            <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100" style={theme.primary}>
                <div className="portfolio-item-caption-content text-center"><i className="fas fa-plus fa-3x"></i></div>
            </div><img className="img-fluid" id="img-pre-modal" src={data.img} alt={data.alt}/>
        </div>
    </div>


        <div className="portfolio-modal modal fade"
        id={`portfolioModal${data.id}`}
        tabIndex="-1"
        role="dialog"
        aria-labelledby="#portfolioModal0Label"
        aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered modal-xl"  role="document">
                <div className="modal-content" style={theme.neutral}>
                    <button className="close" type="button" data-dismiss="modal" aria-label="Close"><span aria-hidden="true"><i className="fas fa-times"></i></span></button>
                    <div className="modal-body text-center">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-lg-8">

                                <h2 className="portfolio-modal-title mb-0" style={theme.primaryReversed}>{data.name}</h2>

                                    <div className="divider-custom">
                                        <div className="divider-custom-line" style={theme.primary}></div>
                                        <div className="divider-custom-icon"><img src={theme.id %2 !== 0 ? data.icon : data.icon_white} height={50} /> </div>
                                         
                                        <div className="divider-custom-line" style={theme.primary}></div>
                                    </div>
                                      <img className="img-fluid rounded mb-5" id="img-modal" src={data.img} alt={data.alt} />
                                    <div>{data.techIcons.map(icon => <img height={'35em'} className="m-2" src={icon}></img>)}</div>
                                    <p className="medium-fontsize mt-2">{data.text}</p>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="modal-footer justify-content-center mb-5">
                    <a href={data.url} target="_blank" rel="noreferrer"><button className="btn btn-lg" style={{...theme.primary,  border: theme.primary.backgroundColor}} ><i className="fas fa-external-link-alt mr-2"></i>Go to site</button></a>
                    <button className="btn btn-danger btn-lg" href="#" data-dismiss="modal"><i className="fas fa-times fa-fw"></i>Close window</button>

                        </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Modal
