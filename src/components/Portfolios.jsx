import React from 'react'

function Portfolios() {
    return (
        <section className="Portfolios">
            <div className="Portfolios-row">
                <h1 className="Portfolios-title">O‘quvchilarimiz portfoliosi</h1>
                <div className="Portfolios-cards">
                    <div className="Portfolios-card">
                        <img src="../images/portfolio1.png" />
                    </div>
                    <div className="Portfolios-card">
                        <img src="../images/portfolio2.png" />
                    </div>
                    <div className="Portfolios-card">
                        <img src="../images/portfolio3.png" />
                    </div>
                    <div className="Portfolios-card">
                        <img src="../images/portfolio4.png" />
                    </div>
                </div>
                <button className="Portfolios-btn">Ko‘proq</button>
            </div>

        </section>
    )
}

export default Portfolios