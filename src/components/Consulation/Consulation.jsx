import './Consulation.css'
import { useState } from 'react'

function Consulation() {

    return (
        <div id='consulation-outer-container'>
            <div className='consulation-header'>שירותי הייעוץ למעסיק ולמייצג</div>
            <div id='consulation-container'>
                <div class="box">
                    <div class="content">
                        <h2 className='content-headers'>ביקורת ניכויים</h2>
                        <div id='nikuim-content'>
                            <div className='nikuim-content'>&#x2022; ייעוץ לקראת ביקורת ניכויים ובמהלכה.</div>
                            <div className='nikuim-content'>&#x2022; ייעוץ בהשגות על ביקורת ניכויים.</div>
                            <div className='nikuim-content'>&#x2022; ייעוץ בביקורות מס הכנסה והשלכותיהן לביטוח לאומי.</div>
                            <div className='nikuim-content'>&#x2022; הייעוץ כולל התייחסות מקצועית לעובדות התיק, לחישובים, להוראות, לטענות המשפטיות ולפרקטיקה הנוהגת.</div>
                            <div className='nikuim-content'>&#x2022; מתן חוות דעת משפטית בסוגיות שונות.</div>
                        </div>
                    </div>
                </div>
                <div class="box">
                    <div class="content">
                        <h2 className='content-headers'>ביטוח וגבייה</h2>
                        <div id='nikuim-content'>
                            <div className='nikuim-content'>&#x2022; ענייני גבייה שגרתיים וחריגים בניכויים משכר עובדים.</div>
                            <div className='nikuim-content'>&#x2022; יישום חלוקת שכר נוסף עפ"י הכללים. </div>
                            <div className='nikuim-content'>&#x2022; הכנסות ואוכלוסיות פטורות מדמי ביטוח. </div>
                            <div className='nikuim-content'>&#x2022; מעמד עובדים חריגים וסיווג מעסיקים.</div>
                            <div className='nikuim-content'>&#x2022; קנסות והצמדה.</div>
                            <div className='nikuim-content'>&#x2022; דוחות ותשלומים. </div>
                        </div>
                    </div>
                </div>
                <div class="box">
                    <div class="content">
                        <div id='nikuim-content'>
                            <h2 className='content-headers'>גמלאות</h2>
                            <div className='nikuim-content'>&#x2022; ייעוץ וייצוג למיצוי זכויות בגמלאות. </div>
                            <div className='nikuim-content'>&#x2022; איתור שגיאות בתביעות לגמלה.</div>
                            <div className='nikuim-content'>&#x2022; מקורות וזכויות להגדלת גמלאות.</div>
                            <div className='nikuim-content'>&#x2022; איתור מקורות פיצוי נוספים.</div>
                            <div className='nikuim-content'>&#x2022; תביעות עובדים בפירוק תאגיד.</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='consulation-header'>שירותי הייעוץ לעצמאי ולשכיר</div>
            <div id='second-content-container'>
                <div id='second-inner-container'>
                    &#x2022; התמודדות מול קביעות לתשלום דמי ביטוח, חיובי קנסות ועיקולים, חקירות.
                    <br />
                    &#x2022; ניתוח מרכיבי שכר במשכורות עובדים לאיתור טעויות והחזרי דמי ביטוח.
                    <br />
                    &#x2022; מבחני תושבות וקביעת מעמד (תושב חוזר, רילוקיישן, עולה חדש ועוד).
                    <br />
                    &#x2022; תיאום דמי ביטוח לבעלי הכנסות ממקורות שונים.
                    <br />
                    חובות וזכויות גמלאים, גמלאים בפרישה מוקדמת, סטודנטים ועוד.
                    <br />
                    &#x2022; בחינת מיצוי זכויות לגמלאות המל"ל.
                    <br />
                    &#x2022; השלכות דיווח "גילוי מרצון"  במ"ה לעניין ביטוח לאומי.
                    <br />
                    &#x2022; משמעויות הכנסה של נישום מייצג בחברת בית וחברה משפחתית.
                    <br />
                    &#x2022; סיווג הכנסות מסויימות כגון: אופציות ומניות, הכנסות בחו"ל, שכירות וכד'.
                </div>
            </div>
            <div id='spacer'></div>
        </div>
    )
}

export default Consulation