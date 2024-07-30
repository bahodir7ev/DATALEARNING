import React from 'react'

function Courses() {
    return (
        <section className="Courses">
            <div className="container">
                <div className="Courses-row">
                    <h1 className="Courses-title">Asosiy yo‘nalishlarimiz:</h1>
                    <div className="Courses-cards">
                        <div className="Courses-card">
                            <h4 className="Courses-card-title">Dasturlash</h4>
                            <p className="Courses-card-subtitle">
                                Dasturlash kurslarida asosan
                                Frontend, Backend yo‘nalishlari,
                                Python, JavaScript kabi
                                dasturlash tillarini o'rgana olasiz.
                            </p>
                            <button className="Courses-card-btn">Batafsil</button>
                        </div>
                        <div className="Courses-card">
                            <h4 className="Courses-card-title">Media</h4>
                            <p className="Courses-card-subtitle">
                                Media yo‘nalishlariga: "SMM",
                                "Video montaj", "Mobilografiya",
                                "Grafik dizayn", "Arxitektura va
                                dizayn" kabi kurslar kiradi.
                            </p>
                            <button className="Courses-card-btn">Batafsil</button>
                        </div>
                        <div className="Courses-card">
                            <h4 className="Courses-card-title">
                                Moliyaviy <br />
                                savodxonlik
                            </h4>
                            <p className="Courses-card-subtitle">
                                Bu yo‘nalishga "Ofis dasturlarida
                                ishlash" va "Buxgalteriya" kabi
                                kurslar kiradi.
                            </p>
                            <button className="Courses-card-btn">Batafsil</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Courses