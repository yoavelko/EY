import './Footer.css'

function Footer() {
    return (
        <div id="footer-container">
            <div id="right-footer">
                <div className='footer-content'>דף הבית</div>
                <div className='footer-content'>אודות</div>
                <div className='footer-content'>שירותי ייעוץ</div>
                <div className='footer-content'>צור קשר</div>
            </div>
            <div id="left-footer">
                <div className='footer-content'>הבילויים 12, גדרה</div>
                <div className='footer-content' dir='ltr'>050-6284-201 :נייד</div>
                <div className='footer-content'>פקס: 08-8597-730</div>
                <div className='footer-content'>eylaw2@gmail.com</div>
            </div>
        </div>
    )
}

export default Footer