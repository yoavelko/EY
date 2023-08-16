import './Contact.css'
import { useState } from 'react'
import { useForm } from 'react-hook-form'

function Contact() {

    const [tooltip, setTooltip] = useState({
        phone: false,
        mail: false,
        navigation: false,
        fax: false
    })
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (e) => {
        console.log(e);
    }

    return (
        <div id='contact-container'>
            <h1 id='contact-header'>צור קשר</h1>
            <div id='contact-box-container'>
                <div className='contact-box'>
                    <div>
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAD4ElEQVR4nO1YW4hVZRT+u0CZ3cRCKdCKHrohQfoQPqqUUEGF9NCFilSoZs5Za3uZ8jJYzz3Wa9Djgdxr7TkM2O3YTdP2+vd0KigpNYqiDCHU8VaNrMnTWXu7Z2oE9/wD54PzNB97vu//1+1fzvXQw4WHT6KVnnDAzUSkMd7nCY57xjFPsNXNWPF89jdTTKRl4meKCZ9EK4XwRFcwfu8J3rMmhGCzCxFC9cWe8JgVnyb9C1qtwcuFcEfQJlqtwUs9Y9uEysERjm7u/H3fcN9lnmAo2HCSJHrSCDsuvG5RkRO0CWFo/h9RwYaTJ/ilayC6YzKuED6UM8B4IG1svMZNJzzjqY6gz4b7rp6Et8IzjlrxWVy7qVq1JfCMv/8rqhktLONIHN0TpHiFMLS6MR2BK4EQvGGrVDDiFZ6wZk92VwNmuQKEsa8b+/CdJrQLBV81nr9SCH8zyflqkdNuDsyxoRZMCe1ACJ7phhGeSBO87RwOR2uMydGRoeguFwrGxtxFnuBjM0qINq8cZ3DwYiHY2w03+HpkRzTbhQLZXrs9Nw8xvFbGEYKjppG96UKCxLDWhNLfGeOqIidjfDrfzOBFFxI8wds21iWp3VvCecsY+EsSeNSFgk9o/VWe4AtTcQ4Jw62Wo6VWGD41Jk5KgstcKEiT/gWe8WfTH75pc/+8PAevE4ZvTeL/4am+3IX0yBGTsHore7a/MNdy9N1gh0G9iYzw8f/6dlrVAJgyPmCHPc+QFv+59gNh+NEmvxBu0rJb9s2RcdP4g2d4qRITwtEjnuC0CZXdmic5Dq2/QRizwoPn/WwIbszxmtFCIdhveFsqMgFPaLUxp7wzTdZcYTlZXLtWGD8omDjkCZ7S2+iePBY2HhXdhI/xOQ0P848/LN6Evq+FcZtn/DNvBKVcPHZ+L1diQqfSnAnC3XryRV7G9aU62U4gdlTi+oPC+O70mIhhbS6cGLwf7ru+yNMQE4aN4+XViPdnS63OWrn3eKU5QfisDRMh+HJPc938Mq72D2HcIISv+yRack5DJHgnvyjATdWYiPExW2K1lGZx7e6pfmdf2U1U9d5ICR7W5mW7se5Xp/qdXQ2YVVxjVrba1xlICA6b0zutITNRI5twdNFdrFmw6a7WVQV9welbuZCQH+1t1m8JXnxuuCPcWQgDfSBtmWgJkHH9zqJ4YbjfTRcajVWXaGfN5cU/VWq/rmz0tNvNgTm6fxWCV+yuScWfT/5cEGg18oyfT9J5x/KvOjwSjPgONIkzgtXj89DkBtrnU34r3Tt5gn4d9IThV13bCOFPQkjaS3R+mm6NPfTQQw9uSjgDgpPcfnJJpocAAAAASUVORK5CYII=" alt="" />
                    </div>
                    <a href="tel:+972506284201">
                        <div className='contact-content' onMouseEnter={() => setTooltip({ ...tooltip, phone: true })} onMouseLeave={() => setTooltip({ ...tooltip, phone: false })}>050-6284-201</div>
                    </a>
                    {
                        tooltip.phone ?
                            <div className='tooltips'>לחצו בשביל להתקשר</div>
                            :
                            <></>
                    }
                </div>
                <div className='contact-box'>
                    <div>
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAADLUlEQVR4nO2ZTWgTQRTHR/EbD0r1INUe1EO9qAfRkzexoCgI9qYee7C0yXsp1pNR6cGrXkSP6im22Xnb0pMSUVtomZnFUhDbIigqCn5UUAStjUwbNJlukt1mdxNh/zCHwMy+/2/zZt7khbFYsWLFaigJu2OD5HBVEcwowjlFmK/zmNNeJMHl0Qysr2heT1AcRxvAdN5tSIKRihCS8Eq9Tapqg2O6LEAhbf4Rc3wk7O4WVicJu7tFezAApssucM95mJV26mykzhljOqaO7bYnyi4qJYVfRv7dH8t2NoVtfCzb2aRjVfLiCcDJwkFJ8MJIqfeS48mwzDt28qjk+KY0JrwUVvKwbwD9We94SXhdcpw33sidycz5jUEZH/UQZ1kAXt5MreYFTx1y/aat5Akv3jwBLEBYiU2S4J65oRTHa5OZ9Bq/xnO59CpJ0KsIfxqnTL+wcYsfb74mOYTtkvCTATKhBmGfV/Mym9ijCIRh/KukVEct3rxNKpzPisNDI19/6DeaT6dXlluXz7MV2qTi+N1ImafjQ8mdlWIGClDNjMj27AoKOjQAP+kQRNqpsAC0xK2O1Yqgb0kl59i/MMyNT9Cn1zAfChWg0pEY1NGrogAIs/ipqADM4icJPgRx/VBRA2jpguRWlBoC4NnAhe2K8KYzCM3LNeUMQrN+hn5WpACOldivCF4vzoVZxeGcb/OE7YrwYyHeO337jQRA8dRpo3jp+1DCL8BCEaSie9BiUTsTGsBi5YVeSfC7uGA5PHXcr/m/8XjyiOTwuaiKz+vLoVtlrglgarhrreJ4t/RchxldhVmNkgS7FYfnJfWCMKPbO4EAiIHkNkk4ZhSlx2q4aysLSBNDFzcrDg8MCGfcwh01AUjq2as4vjIefNvvNcDr7wPF4YbxLb+VPHlgWQDKgmM6x4s3q94DLGRJY3NLDt8Eh1O+AYo3qyT8IixsYxFJWNimY7p5qQawtC/EcVrY2MoilrCxVcf22Rda2pmLohdUsUdkdOYkh6myC3QH2IW4sQaHS1WuwjDSwOaf5HLpdayS9ATdAS7kX2P8P8BxWr/5quZjxYoVK1Ys9p/pD26QyB7ZHsFqAAAAAElFTkSuQmCC" alt="" />
                    </div>
                    <div className='contact-content' onMouseEnter={() => setTooltip({ ...tooltip, mail: true })} onMouseLeave={() => setTooltip({ ...tooltip, mail: false })}>eylaw2@gmail.com</div>
                    {
                        tooltip.mail ?
                            <div className='tooltips'>לחצו לשליחת אי-מייל</div>
                            :
                            <></>
                    }
                </div>
                <div className='contact-box'>
                    <div>
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEB0lEQVR4nO1ZTawURRBuQROMomBivBnxIFcSIgTRGC8aQowSg94UMPFAArtVw5+nRfCkEn+IJh4lorjBN1UjAUxM9oLwQqZ7Hi+gMVz49e9gAh4UhLemdtm3NcPO211ez7Ik70s6mcx019RXXVVd3W3MDGYwHKhWV8+Ow/IzlvADR3jMMvzhGK9KazzLO4L34wiflr5mWHC0Cvdaxi03FK730izh7y7CTbVaZc5tVd5G8IpjONer4jc1wrMxwaqBK16vm7sc405LOJFVyDJ+HIf4wgkqLRz7PrhPmjzLO0fwSZawJZywjO+IzMEoX6nMsgRfpa0J5yzB2l58W/pYwnWW4XyKCMOXAyEhls9Yfb9YuV85J6vr77cEYYbEdlO0z6fdBnZNx2p1cUXCD7U7JRG+bIqAZAzxcWWxEXGn6cqtN0l8055ROFNIdpJUqX2+F7c5WYWHpPXmTnhByQ+MTzQCT+X5hHFNtzE2LL/oGH+VJs/d+juGN9Us/OZjdichK6xOlVNlm/ED2+Y7gj0353zYI9/yxlWrq2frFJtwebk3AhKsKlN8lNsvClZk02N2BZ5q4XKEu9v/wff8ESA81hIsC1KnPpbxi05W7zQb0jfPAK5tqB+9EbCEf7YEj43gEx1/nl7YLmq/b8YDXNR9Osk4QaWFerb8EWC40hJ8hDbP7Uagk683YqMLgSO0ea4i8K9HAvh3PwTy5HTrE1e3Pqhc6LI3Ao7w9OTPo+DJwghQsFQR+MUbgVTxRritKAKO4W0V6Hu9EUgtMow/dap/+t0LdC4p4GcVA+u8EZByQIKq7UbwrG8CCcFzKv3+M9Wid0twDPtUmtznm4BLycevjW9kAuzKGAcLfMke42CBTtXJCCwxRcAy1IoIMsu4VxmnZoqCWKa1oWnsZcNg8bRlhqVFluH6pPuE+JQpEo7gW5/WcgQ/qBS93xSNRr1C8F874Mov3aqsmGCVCtyreXWWd1iCz9QsnM8rL6bC6MEND+jS2xJ+agaFZs3Sri7lLKhfGc0zIpzcgXnP+91gQ3xNzcJ1G5WW9TpW6inHeK01Pubyq8Vqm6cIAysSp+SctKfTDcZxFbiHzO1CHG181BFeUsrs7jYmvW2Ey0lYemww2uYqBK+rQJxIKFiZ11e2o+mDsfIbZhigy205fhnnjY9k+7iDGx6WYB1ozu8VSViaJydqqthjXXLfKJW/U8qflTFmmCA3LzqzyAVG65tl2KozlpTOZhjhGN5VK+u1JCo/36jzUys37jTDivjzt+5xDKM6HtJXTzBaq1XuNsOM4wfKj1uCv7IbGHkn38ydgISClbpELvTcvyhYgh3K+jvMnYZ6pTKrmTrh8FDdC/dbtUrra9AMZmAGiv8BCFd6iITCTmQAAAAASUVORK5CYII=" alt="" />
                    </div>
                    <a href="https://www.waze.com/he/live-map/directions/%D7%92%D7%93%D7%A8%D7%94?to=place.ws.il.75648.12" target="_blank" rel="noopener noreferrer">
                        <div className='contact-content' onMouseEnter={() => setTooltip({ ...tooltip, navigation: true })} onMouseLeave={() => setTooltip({ ...tooltip, navigation: false })}>הבילויים 12, גדרה</div>
                    </a>
                    {
                        tooltip.navigation ?
                            <div className='tooltips'>לחצו לניווט באמצעות waze</div>
                            :
                            <></>
                    }
                </div>
                <div className='contact-box'>
                    <div>
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAB3UlEQVR4nO2YsU7DMBCGrSIheAoQvAM8CfAY1C4SDJR0Ap4lQ+uTundAMIT6slQMwNqKF2AAVQq6tlCXJmmi2MKo/iQrg8/J/bHvj3KMeTwejzMMwmATpbhF4EMEkcwHHyrgNzSftXYxvtxgpqAk8x6kpLh2WgCCGK142Mh1AUnaTRd2AUSMID6rJrRC1BiBvyrgrYeQbxsVYOqNFr2XAn5fWISLApCGFIExAQr4eZobVRHA0t3wQhPwYkxAlpWaFPAjQqsJZkpA2bVV4rGsU5kSYKpm0AtYpx2wAXoB67QDWHKtczWAXsAyvojXqohtgL6IZ3gXgn/wHbAB2hCQ19wyycDWHxn9q9oWMfj1T6wkfy60cLml6MiQ/KqQAGodOpj8Xa8XbBXeuqmI1OZui1oqCOJpVWfOwBhTK4XefOHkqzrAXzlVJtP+5DShMDzayI5kjOZLO4ZtUOtUR936Xl5sv322rx835gIIHDQbu8yPFc15rJDMBVRHnGje/x63+UFaXF82Dmn+O7YP9WPmAkkQ1BDEoy6CdoKOC7nV7Ng09eSV5BGtY64Qd053lRRvRayP4lS3scNcI56I4FF+8jyiOOYqSRDUqCaoQGcftY/JVQpJZ96pY+PxsFJ8AbfdjGjVrhHZAAAAAElFTkSuQmCC" alt="" />
                    </div>
                    <div className='contact-content' onMouseEnter={() => setTooltip({ ...tooltip, fax: true })} onMouseLeave={() => setTooltip({ ...tooltip, fax: false })}>08-8597-730</div>
                    {
                        tooltip.fax ?
                            <div className='tooltips'>מספר פקס</div>
                            :
                            <></>
                    }
                </div>
            </div>
            <form id='form-container' onSubmit={handleSubmit(onSubmit)}>
                <div id='form-header'>צור קשר</div>
                <div id='form-top-contianer'>
                    <input className='form-inputs' type="text" placeholder='שם' {
                        ...register('name', { required: 'נא מלא/י את שמך' })
                    } />
                    {errors && errors?.name?.message}
                    <input className='form-inputs' type="text" placeholder='טלפון' {
                        ...register('phone', { required: 'נא מלא/י מספר טלפון' })
                    } />
                    {errors && errors?.phone?.message}
                    <input className='form-inputs' type="text" placeholder='מייל' {
                        ...register('email', {
                            required: 'מייל הוא  שדה חובה', pattern: {
                                value: /.@./,
                                message: "נא להכניס כתובת מייל תקינה"
                            }
                        })
                    } />
                    {errors && errors?.email?.message}
                </div>
                <textarea id='message-input' className='form-inputs' type="text" placeholder='הודעה' {
                    ...register('content', {
                        required: 'נא מלא/י את תוכן ההודעה', minLength: {
                            value: 10,
                            message: 'פנייה צריכה להכיל לפחות 10 תווים'
                        }
                    })
                } />
                {errors && errors?.content?.message}
                <button id='form-btn'>שלח</button>
            </form>
        </div>
    )
}

export default Contact