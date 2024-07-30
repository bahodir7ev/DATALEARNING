import React from 'react'
import { Links } from './datas'
import Headerlink from './Header-card'

function Header() {
    return (
        <header className="Header">
            <div className="container">
                <div className="Header-row">
                    <div className="Header-logo">
                        <img src="../DATA.png" />
                    </div>
                    <div className="Header-bottom">
                        <div className="Header-links">
                            {Links.map((link) => (
                                <Headerlink
                                    key={link.id}
                                    name={link.name}
                                    active='/asosiy'
                                />
                            ))
                            }
                        </div>
                        <div className="Header-socials">
                            <a href="https://instagram.com/data_talim_stansiyasi" className="Header-social">
                                <img src="../images/instagram.png" />
                            </a>
                            <a href="https://t.me/data_talim_stansiyasi" className="Header-social">
                                <img src="../images/telegram.png" />
                            </a>
                            <a href="https://youtube.com/data_talim_stansiyasi" className="Header-social">
                                <img src="../images/youtube.png" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header