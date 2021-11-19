import React from 'react'
import './component.css'

const Footer = () => {
    return (
        <>
            <div className="footer-section">
                <div className="section-top">
                    <a href="/" className="logo">Coinster</a>
                    <div className="subscribe-us">
                        <input type="email" name="email" placeholder="Enter your email" id="enter-email" />
                        <button className="subscribe-btn" type="submit">Sign Up</button>
                    </div>
                </div>
                <div className="section-start">
                    <div className="about-us">
                        <div className="title">About Us</div>
                        <p className="discription">Coinster provides a fundamental analysis of the crypto market. In addition to tracking price, volume and market capitalisation, Coinster tracks community growth, open-source code development, major events and on-chain metrics.</p>
                    </div>
                    <div className="important-links">
                        <div className="title"> Important Links</div>
                        <ul>
                            <li>
                                <a href="/">Cryptocurrencies</a>
                            </li>
                            <li>
                                <a href="/exchanges">Exchanges</a>
                            </li>
                            <li>
                                <a href="/development">API Docs</a>
                            </li>
                            <li>
                                <a href="/development">Calculator</a>
                            </li>
                            <li>
                                <a href="/development">Promote Your Coin</a>
                            </li>
                            <li>
                                <a href="/development">Privacy Policy</a>
                            </li>
                        </ul>
                    </div>
                    <div className="donate-us">
                        <div className="title"> Donate Us</div>
                        <ul>
                            <li>
                                <a href="/development">Bitcoin</a>
                            </li>
                            <li>
                                <a href="/development">Ethereum</a>
                            </li>
                            <li>
                                <a href="/development">Binance Coin</a>
                            </li>
                            <li>
                                <a href="/development">Tether</a>
                            </li>
                            <li>
                                <a href="/development">Litecoin</a>
                            </li>
                            <li>
                                <a href="/development">Tron</a>
                            </li>
                        </ul>
                    </div>
                    <div className="important-links its2">
                        <div className="title"> Community Links</div>
                        <ul>
                            <li>
                                <a href="https://www.facebook.com">Facebook</a>
                            </li>
                            <li>
                                <a href="https://www.twitter.com">Twitter</a>
                            </li>
                            <li>
                                <a href="https://www.linkedin.com">LinkedIn</a>
                            </li>
                            <li>
                                <a href="https://www.instagram.com">Instagram</a>
                            </li>
                            <li>
                                <a href="https://www.telegram.org">Telegram</a>
                            </li>
                            <li>
                                <a href="https://www.reddit.com">Reddit</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <hr className="copyright-line" />
                <div className="copright-text">©Copyright 2021 Coinster| All Rights Reserved</div>
            </div>
        </>
    )
}

export default Footer