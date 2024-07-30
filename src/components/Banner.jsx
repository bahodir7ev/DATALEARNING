import React from 'react'

function Banner() {
    return (
        <section className="Banner">
            <div className="container">
                <div className="Banner-row">
                    <div className="Banner-left">
                        <h4 className="Banner-left-title">Biz bilimga to‘ldiramiz!</h4>
                        <p className='Banner-left-subtitle'>10 dan ortiq zamonaviy sohalar bo‘yicha ta'lim oling.</p>
                        <button className="Banner-left-btn">Kurs tanlash</button>
                    </div>
                    <div className="Banner-right">
                        <img src="../images/banner-bg.png" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Banner