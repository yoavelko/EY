import './Footer.css'
import { Link } from 'react-router-dom'

function Footer() {

    function handleScroll() {
        window.scrollTo(0,0)
    }
    return (
        <div id="footer-container">
            <div id="right-footer">
                <Link to={'/'} onClick={handleScroll}><div className='footer-content'>דף הבית</div></Link>
                <Link to={'/about'} onClick={handleScroll}><div className='footer-content'>אודות</div></Link>
                <Link to={'/consulation'} onClick={handleScroll}><div className='footer-content'>שירותי ייעוץ</div></Link>
                <Link to={'/contact'} onClick={handleScroll}><div className='footer-content'>צור קשר</div></Link>
            </div>
            <div id="left-footer">
                <a href="https://www.waze.com/he/live-map/directions/%D7%92%D7%93%D7%A8%D7%94?to=place.ws.il.75648.12" target="_blank" rel="noopener noreferrer">
                    <div className='footer-content'>הבילויים 12, גדרה</div>
                </a>
                <a href="tel:+972506284201">
                    <div className='footer-content' dir='ltr'>050-6284-201 :נייד</div>
                </a>
                <div className='footer-content'>פקס: 08-8597-730</div>
                <a href="mailto: eylaw2@gmail.com">
                    <div className='footer-content'>eylaw2@gmail.com</div>
                </a>
            </div>
        </div>
    )
}

export default Footer