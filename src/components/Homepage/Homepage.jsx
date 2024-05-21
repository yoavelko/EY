import './Homepage.css'
import { useForm } from 'react-hook-form'

function Homepage() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (e) => {
        console.log(e);
    }
    return (
        <div id='homepage-container'>
            <div id='introduction-outer'>
                <div id='introduction'>
                    <div id='text-container'>
                        <div id='header-flexer'><h1>יגאל אלקובי |</h1><h3 id='small-header'><pre> עו"ד ומגשר</pre></h3></div>
                        <h3 id='intro-h3'>ייצוג וייעוץ בתחומי ביטוח לאומי</h3>
                    </div>
                </div>

            </div>
            <div id='homepage-content-container'>
                <div id='homepage-header'>ידע וניסיון = רווח וחיסכון!</div>
                <div id='homepage-flexer'>
                    <div className='homepage-content'>
                        <div className='icons-container'>
                            <img className='icons' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAHHUlEQVR4nO1aa2xURRS+PvD9wmei+IgGjS9QNEaixneMRnwhGn6pKJjw6p6zLaCoVR6JDzRRowkSEwwmmo3tnrmtCGhsooiAd2bb2kQFFaKAiAgiqARaar65M7u32y4F03YhcpJNunPv3J0zc875vu/cBsEB+5+YltSVWvFmo7jdff7WWX4w2N/MKJqRcCL+CNUE+6rlshUnGKFnIkVXJ8eN4hCLj1TqAVNHg50j3yTvicKJZ2lF45vrp/QPymnN9VP6G8VfuUXuhEOZzIhDGhqqj9CKfsZ4k1RcgO9GcatRvKNxYfpozDWKR/rQ04pMS4ZOLNtJYAF2IcLrtaI293ejUbwxdo63wDHcrxV9565v0Io/9uGmFf3p7tV4Zp87YrL8mFvAX001kwZEKn2TFl7jFtiqFX8YZfm2/P0hXW8ULXAn066FtuWERufq6Aw4FzvFk/rckWY18bTCAmg8xpbVjjspEh7XWMvnl5qnaysu1MJTTV3VQHw3WbpDC+/Swtu1qhwUlMMioXv9qexu8d1sxnr7jJArg3KaFl7owunJDuPZ1DAttMjmBBYrVJcTurFoLruQWtZeXX1wUC5ryYw9xia20M7kiWjFL3bCkDjRdyXzoLEufQmKBByNZo/p16eLBzoD2LTib23JjRN3vr+eUzzCLXq7VjR5eZbPzGUrznEA2Qpnctn0DQmnP3X3r0Ex0MKzomzqut53RPHWxC63oqwmfxhh4nBl4m7QPixsTGpYvgQrzwB4S6874stnFKaGAOiS14AZzrk2hF3x3PhkbJX7NTmO/IhqK88zKnW3D8Fed8QDH6gHUNsDHqyhofpQd701CsccVTwXeON2fWPxtaXzJxynw4qh/qT7wJEOjDZG5jB9e+J6zuXNI53n0mR3bZEfA2hqoR/7PLR0Nn2FUTw9JoX0U/zjtCB/XXiUdxDO4GQWS9WxRrgCBSA+Tb7T328Uf+Zy6h9QHq3oXeRN0Je2Yv6Ew2PuRG1AbIy1twcHaeG5Ceq+04eji/9Zfj7yDPlgFK1tyVQfFpTLkB954qh4gh93zoxCmMXYAUdoKUpzcr5W/Fxx+S6Lgba70FobhXxyV/cA6JIFocP8uqqBII/utEYG5TAIKR82YL5+YUa4OsrSpaXm5bIVl+WEqhpr0qfa70Kj3YluhtAKynYaQr/YshrSWJBHl+htWlGDUXxr3oGQ70FixzkRaxgwX0vjHSBGwuPKI3EVRZ79JkrnR3DO7fIqD3gF9Ka1yBcPfEboN68Sm8sleSFPEypxg1bp+3w1s10T4V0Auhi1XS7NHtMPjoG2+3KMDSmb1C06mUehLYrAL3YwrBiqhe8qxpv4nspBYMNlkbh7akZ4XmcqTy8H+5tpy2oTTFl4S5/Q890ZUNeGh/A8q0MU/eGqD7olzVrRHHCmvVV5sX6nN41QExw1witB9Zdk6MigJw1lVQvN9E2G7j42L+pocHfPRQEwQq95SdC5I8krjdBqy7+EW7SiZ7uSBd1aFPK1WnHGK8B8v0poInbRPxTlEuAHeqKFVuTJYsg3l3q2kfT9cQm2z92hhd/I1dJVUWby8Ub4+ZKbJLQ8bifRWkQF9D6oUKcfsLU+pOF5hed+yCh+D5WnO+cRDkZxbZ7JhjQ8GWoQVVpRfeL0vvAMIC7PtufV7jZtMfpgYM7u5Eo5N7OLneIvEw9CKE3XUnX6Xp3k7DH98s7EDq22OaBohudUoCI6S4/DSZd7U4E57trvaPxhp4H4vn/s1tQCIrq8PnUuZIAbX9fZEYu29D1oQlfqbk/Nyt2QK43wDyXzyXI0XuX1jOuuvGPmTzgFTgCXCn1h3gxdkwyjuGsZNyyC3jb8MIilVYXCHyDHoNURdl049zTm6Pr02VCPCdxRxVHhnIh7y4qeCMpp0PZxzvCrrkppRIL2uBPzrw60HlECUZboHWfxnGBfMNfgK0b/9z3F9waZgLD3jQnkXK90JlFlEDZaWHDcQHV0WFBSSyrLOIxeSjixDlS/i1cXcwrUn75GqQ56y4zQ53sCmKXLKM8tpvA5q18KeIMqClbda07knamrGphT/LARft0IfWKrFmhH1wygzWoWoRojqVs6degVZwr3cg6qsscW2ih8uRF6wSh6G+9DeoN6G5V6yGKJ7x0LPdVjzW0IHrf4fEvHxes2OFaq6bA35prceWQ3wktyKnVx0FNmKYt/EWPrP70CcIKczSeg4q2gCv9F4VmlCP6WL7u8BafdoxXJvdtzi6UG/6qs4z8EFLiTXYTQtD3V3UbSF4FvJcGvqWbSgKCnzZZIoWmI2y5ZpjOUQzTYEsm52baESpRekEvQ8oJe53VgxMG+YjrW5gsTObQJOIFeMRAYuQT0tjqjwK/e2mf1ek6lrrHld3fYIdQEzRPsDxaFqSHAFKCxO51NODEAXVlffB6woG/sX5KSDxKCOsr1AAAAAElFTkSuQmCC" alt="" />
                        </div>
                        <h2 className='content-headers'>
                            השירותים
                        </h2>
                        <div className='homepage-box-content'>שירותי ייעוץ וליווי מקצועיים בתחומי ביקורות ניכויים וגבייה של המוסד לביטוח לאומי ע"י עורך דין מומחה ומנוסה.
                            שירותי הייעוץ ניתנים למעסיקים, למייצגים, לעצמאים וללקוחות פרטיים בתחומי ביטוח לאומי.
                        </div>
                    </div>
                    <div className='homepage-content'>
                        <div className='icons-container'>
                            <img className='icons' src="data:image/png;base64,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"></img>
                        </div>
                        <h2 className='content-headers'>המומחיות</h2>
                        <div className='homepage-box-content'>יגאל אלקובי, עורך דין, ניהל שנים רבות את אגף ביקורת ניכויים במוסד לביטוח לאומי. מומחה בתחומי הגבייה וביקורות ניכויים של המוסד לביטוח לאומי ושל מס הכנסה.
                        </div>
                    </div>
                    <div className='homepage-content'>
                        <div className='icons-container'>
                            <img className='icons' src="data:image/png;base64,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"></img>
                        </div>
                        <h2 className='content-headers'>המטרות</h2>
                        <div className='homepage-box-content'>התמודדות מועילה מול ביקורות ניכויים ותביעות דמי ביטוח. <br />
                            אופטימיזציה בתשלומי דמי ביטוח ואיתור שגיאות. <br />
                            מקסום זכויות בתחומי גמלאות, ביטוח ומעמד, תושבות, חקירות ואכיפה ועוד.</div>
                    </div>
                    <div className='homepage-content'>
                        <div className='icons-container'>
                            <img className='icons' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAACoElEQVR4nO2YzWoUQRDH26Ao4t0P9OjNiw+hGA3mDUQvOQjqds1GFA9z9Q00rxAJqZpVD3rYXJXt2hgWD0FR/IhCQPGkSMxKzfTMujEmM5nZ3R4zfxhYhu6e+lV1VXWvUpUq7Vht9C4YhA+G9HsOvHFVVhkBIOhGj36nyiomWCk9iEG4aBDWYwhD+pwqm5bo+mGD8DmECKCuyqhuV+0xBI8EwiAsdH1/TJVRTNqLIPSX5/NwQpVRiw3vFKP+HuVFbVKVUc2mf4AJlmyVuudOA5vX57PMZYL7FuJlK5g6qFxpYALUbPp708xjqk3aOT8WEU6rUaod1M726n7SxF61CS5vBWRw+hijXrXjPTXKcskIt5hgLTQG4Zt0ZEPwJgFCeG1QX2nNTO3rm+v7Y4bgqa1ST2StkUB0Zq8eMgSzdlusM8LduO6L0Yz6kkG93APSbxnhxvLja/tlDAdQt+9XJTLxuv1R/fspFIIb0ycNQieEIPjaIpjYbJwASTQkKkn+SLRQf4odIMeRvrWHBSJGi/HWkI5AbTdH8kTyRfJmg2ErG8f+y+DCQGw++Ib0r8iz+oFsryxrCBCT/rjVqZYHBSIRCD8eJbIstiYJvtPklB4TlWq96al2ICAv5m4e/9ODsqel1KoBiosCkcojXmPSlJTVIV5wOC9Ia6521CDcCctkz/ifTBAIwLAuOJwVJD4bhUaiblijkybGpG8/e1g/MmjDc4P0X+4j70slYoIzWS40Rdd9zgMiv+WKmfWjToBw4I0LQN7/jYoulzzohjisD3MFklNpPZg2l9j1iPx3IKqgcalVtAcrkKIist370kREuQrCju993rUgylEDuQJxzNNcRcQxT3MVEcc8zVVEHPM079qIcMojiqvjlOsGphn3G7MzNdmfsNHcAAAAAElFTkSuQmCC"></img>
                        </div>
                        <h2 className='content-headers'>היתרונות</h2>
                        <div className='homepage-box-content'>עם הכוונה מקצועית וייעוץ מועיל תוכלו למקסם את מירב זכויותיכם מול המוסד לביטוח לאומי ולחסוך עלויות מיותרות. </div>
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
        </div>
    )
}

export default Homepage