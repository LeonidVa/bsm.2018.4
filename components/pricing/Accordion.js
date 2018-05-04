import React, { Component } from 'react'
import Link from 'next/link';



class Accordion extends Component{

    state = {
        display: false
    }

    tableRows = (names, prices) => (
        names.map((name, index) => {
            return (
                <tr key={index}>
                    <td>{name}</td>
                    <td>{prices[index]}</td>
                </tr>
            )
        })
    )
    handleClick = () => {
        const { handleAccordions } = this.props
        this.setState({ display: !this.state.display })
        handleAccordions()
    }
    componentWillReceiveProps = (nextProps, nextState) => {
        if (nextProps.display !== this.state.display) {
            this.setState({ display: nextProps.display })
        }
    }

    render(){
        const { name, introduction, tableNames, tablePrices } = this.props;
        return(
            <section className="block-text block-accordion" data-accordion="open" style={{paddingBottom: 0}}>
                <div className="block-accordion__header" onClick={() => this.handleClick()}>
                    <h2 className="block-text__title">
                        {name}
                    </h2>
                    <div className="block-accordion__arrow">
                        <div></div>
                    </div>
                </div>
                <div className="block-accordion__body" style={{ opacity: this.state.display ? 1 : 0, maxHeight: this.state.display ? "1000px":"0"}}>
                    <p className="block-text__par">
                    {introduction}
                    </p>
                    <table>
                        <tbody>
                            <tr>
                                <th>Вид работы</th>
                                <th>Цена,руб</th>
                            </tr>
                                {this.tableRows(tableNames, tablePrices)}
                        </tbody>
                    </table>

                    <Link href="#">
                        <a className="big-btn">Заказать работу</a>
                    </Link>
                </div>
            </section>
        )
    }
}

export default Accordion;