import React, { Component } from 'react'
import './component.css'
import { Link } from 'react-router-dom'

class Navbar extends Component {
    state = { clicked: false }

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked})
    }
    render()  {
        return(
            <>
                <div className="navbar">
                <Link to="/" className="logo">Coinster</Link>
                {
                    this.state.clicked ? (
                        <ul className="navlinks mobile">
                    <li>
                        <Link to="/">Cryptocurrencies </Link>
                    </li>
                    <li>
                    <Link to="/exchanges">Exchanges </Link>
                    </li>
                    <form action="/development" className="searchbar">
                        <input type="text" placeholder="Search a coin" name="search" className="search__box" />
                        <button className="submit">
                            <i className="fa fa-search"></i>
                        </button>
                    </form>
                </ul>
                    ):(
                        <ul className="navlinks">
                    <li>
                        <Link to="/">Cryptocurrencies </Link>
                    </li>
                    <li>
                    <Link to="/exchanges">Exchanges </Link>
                    </li>
                    <form action="/development" className="searchbar">
                        <input type="text" placeholder="Search a coin" name="search" className="search__box" />
                        <button className="submit">
                            <i className="fa fa-search"></i>
                        </button>
                    </form>
                </ul>


                    )
                }
                <div className="menu" onClick={this.handleClick}>
                {
                    this.state.clicked ? (
                        <div className="menu2">
                            <div className="bar2"></div>
                            <div className="bar3"></div>
                        </div>
                    ):(
                        <div className="menu2">
                        <div className="bar"></div>
                        <div className="bar"></div>
                        <div className="bar"></div>
                        </div>
                    )
                }
                </div>
            </div>
            </>
        )
    }
}

export default Navbar
