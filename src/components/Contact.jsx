import React from 'react'

function Contact() {
    return (
        <section className="Contact">
            <div className="container">
                <div className="Contact-row">
                    <form className="Contact-panel">
                        <h2 className="Contact-panel-title">Kurs bo‘yicha bepul maslahat oling!</h2>
                        <label htmlFor="name">Ism*</label>
                        <input type="text" placeholder='ismingizni kiriting' id='name'/>
                        <label htmlFor="num">Telefon raqam *</label>
                        <input type="tel" id='num'placeholder='+998'/>
                        <label htmlFor="coursechoosing">Kurs tanlash (majburiy emas)</label>
                        <input type="text" placeholder="O'zingiz qiziqqan kursni yozing" id='coursechoosing'/>
                        <button className="Contact-btn" type='submit'>Yuborish</button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Contact