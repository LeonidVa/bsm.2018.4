import React, {Component} from 'react';
import Link from 'next/link'

import './MenuWide.scss';

class MenuWide extends Component {

    state = {
        showMenu: false
    }

    componentWillReceiveProps = (nextProps, nextState) => {
        if (nextProps.showMenu !== this.state.showMenu) {
            this.setState({showMenu: nextProps.showMenu})
        }
    }

    render() {
        return (
            <div className={"menu-desk " + ( this.state.showMenu ? "open" : "")}>
                <div className="inner">
                    <div className="menu-desk__item">
                        <span className="menu-desk__title">Flights</span>
                        <div className="menu-desk__lists">
                            <ul className="menu-desk__list">
                                <li className="menu-desk__list--item">
                                    <a href="#" className="menu-desk__list--link">Departures</a>
                                </li>
                                <li className="menu-desk__list--item">
                                    <a href="#" className="menu-desk__list--link">Arrivals</a>
                                </li>
                                <li className="menu-desk__list--item">
                                    <a href="#" className="menu-desk__list--link">Transfers</a>
                                </li>
                            </ul>
                        </div>

                        <span className="menu-desk__title">Things to do at Schiphol</span>
                        <div className="menu-desk__lists">
                            <ul className="menu-desk__list">
                                <li className="menu-desk__list--item">
                                    <a href="#" className="menu-desk__list--link">Shop</a>
                                </li>
                                <li className="menu-desk__list--item">
                                    <a href="#" className="menu-desk__list--link">Eat & drink</a>
                                </li>
                                <li className="menu-desk__list--item">
                                    <a href="#" className="menu-desk__list--link">Relax & enjoy</a>
                                </li>
                                <li className="menu-desk__list--item">
                                    <a href="#" className="menu-desk__list--link">Services</a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="menu-desk__item">
                        <span className="menu-desk__title">Check-in</span>
                        <div className="menu-desk__lists">
                            <ul className="menu-desk__list">
                                <li className="menu-desk__list--item">
                                    <a href="#" className="menu-desk__list--link">Ways to check in</a>
                                </li>
                                <li className="menu-desk__list--item">
                                    <a href="#" className="menu-desk__list--link">Baggage rules and checks</a>
                                </li>
                                <li className="menu-desk__list--item">
                                    <a href="#" className="menu-desk__list--link">How busy is Schiphol</a>
                                </li>
                            </ul>
                        </div>

                        <span className="menu-desk__title">Schiphol parking</span>
                        <div className="menu-desk__lists">
                            <ul className="menu-desk__list">
                                <li className="menu-desk__list--item">
                                    <a href="#" className="menu-desk__list--link">Parking at Schiphol</a>
                                </li>
                                <li className="menu-desk__list--item">
                                    <a href="#" className="menu-desk__list--link">Short term parking</a>
                                </li>
                                <li className="menu-desk__list--item">
                                    <a href="#" className="menu-desk__list--link">Long term parking</a>
                                </li>
                                <li className="menu-desk__list--item">
                                    <a href="#" className="menu-desk__list--link">Affiliate programme Parking</a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="menu-desk__item">
                        <span className="menu-desk__title">All Schiphol websites</span>
                        <div className="menu-desk__lists">
                            <ul className="menu-desk__list">
                                <li className="menu-desk__list--item">
                                    <a href="#" className="menu-desk__list--link">Royal Schiphol Group</a>
                                </li>
                                <li className="menu-desk__list--item">
                                    <a href="#" className="menu-desk__list--link">Careers at Schiphol</a>
                                </li>
                                <li className="menu-desk__list--item">
                                    <a href="#" className="menu-desk__list--link">Work at Schiphol</a>
                                </li>
                                <li className="menu-desk__list--item">
                                    <a href="#" className="menu-desk__list--link">Advertise at Schiphol</a>
                                </li>
                                <li className="menu-desk__list--item">
                                    <a href="#" className="menu-desk__list--link">Real Estate</a>
                                </li>
                                <li className="menu-desk__list--item">
                                    <a href="#" className="menu-desk__list--link">Cargo</a>
                                </li>
                                <li className="menu-desk__list--item">
                                    <a href="#" className="menu-desk__list--link">Company Directory</a>
                                </li>
                                <li className="menu-desk__list--item">
                                    <a href="#" className="menu-desk__list--link">Route Development</a>
                                </li>
                            </ul>
                            <ul className="menu-desk__list">
                                <li className="menu-desk__list--item">
                                    <a href="#" className="menu-desk__list--link">Travel professionals</a>
                                </li>
                                <li className="menu-desk__list--item">
                                    <a href="#" className="menu-desk__list--link">Airport Utilities</a>
                                </li>
                                <li className="menu-desk__list--item">
                                    <a href="#" className="menu-desk__list--link">Operations</a>
                                </li>
                                <li className="menu-desk__list--item">
                                    <a href="#" className="menu-desk__list--link">You and Schiphol</a>
                                </li>
                                <li className="menu-desk__list--item">
                                    <a href="#" className="menu-desk__list--link">Projects at Schiphol</a>
                                </li>
                                <li className="menu-desk__list--item">
                                    <a href="#" className="menu-desk__list--link">Schiphol Telematics</a>
                                </li>
                                <li className="menu-desk__list--item">
                                    <a href="#" className="menu-desk__list--link">Developer center</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

export default MenuWide
