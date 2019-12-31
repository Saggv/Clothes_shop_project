import React, {Component} from "react";

class Footer extends Component{
    render(){
        return(
            <footer className="footer">
                <div className="container">
                    <h1 className="hero-area__info--logo">Clothes Shop</h1>
                    <form className="footer__form">
                        <input className="email" type="email" placeholder="sangvivi25@gmail.com"></input>
                        <button type="submit" className="btn__submit btn__submit--footer">Send</button>
                    </form>
                    <ul className="footer__nav">
                        <li className="footer__nav__item"><a href="/">Shop</a></li>
                        <li className="footer__nav__item"><a href="/">Show</a></li>
                        <li className="footer__nav__item"><a href="/">Wonam Shop</a></li>
                        <li className="footer__nav__item"><a href="/">Man Shop</a></li>
                    </ul>
                </div>
            </footer>
        )
    }
}

export default Footer;