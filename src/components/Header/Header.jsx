import './Header.css'
import { Link } from 'react-router-dom'
import logo from './cut-logo.png'
import { useState } from 'react'

function Header() {

    window.onscroll = function () { scrollFunction() };

    const [style, setStyle] = useState(true)

    function scrollFunction() {
        if (document.documentElement.scrollTop > 100) {
            setStyle(false)
        } else {
            setStyle(true)
        }
    }

    return (
        <>
            {
                style ?
                    <div id='header-container'>
                        <Link to={'/'} onClick={() => window.scrollTo(0, 0)}><img id='logo' src={logo} alt="" /></Link>
                        <Link to={'/'} onClick={() => window.scrollTo(0, 0)}><div className='headers'>דף הבית</div></Link>
                        <Link to={'/about'} onClick={() => window.scrollTo(0, 0)}><div className='headers'>אודות</div></Link>
                        <Link to={'/consulation'} onClick={() => window.scrollTo(0, 0)}><div className='headers'>שירותי ייעוץ</div></Link>
                        <Link to={'/contact'} onClick={() => window.scrollTo(0, 0)}><div className='headers'>צור קשר</div></Link>
                    </div>
                    :
                    <div id='header-opacity-container'>
                        <Link to={'/'} onClick={() => window.scrollTo(0, 0)}><img id='logo' src={logo} alt="" /></Link>
                        <Link to={'/'} onClick={() => window.scrollTo(0, 0)}><div className='headers'>דף הבית</div></Link>
                        <Link to={'/about'} onClick={() => window.scrollTo(0, 0)}><div className='headers'>אודות</div></Link>
                        <Link to={'/consulation'} onClick={() => window.scrollTo(0, 0)}><div className='headers'>שירותי ייעוץ</div></Link>
                        <Link to={'/contact'} onClick={() => window.scrollTo(0, 0)}><div className='headers'>צור קשר</div></Link>
                    </div>
            }
        </>
    )
}

export default Header