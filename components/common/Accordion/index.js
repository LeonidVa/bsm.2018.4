import React, {Component} from 'react'
import Link from 'next/link';
import './Accordion.scss'

class Accordion extends Component {

    state = {
        open: this.props.open
    };

    tableRows = (rows) => {
        if (rows === undefined) {
            return ""
        }
        return rows.map((row, index) => {
            let cells = row.map((cell, ck) => (<td key={ck}>{cell}</td>));
            return (<tr key={index}>{cells}</tr>)
        })
    };

    render() {
        const {title, rows, button, buttonLabel, buttonURL} = this.props;
        let adfad = "block-accordion__arrow";
        if (this.state.open) {
            adfad += " up"
        }
        let buttonEl = <br/>;
        if (button) {
            buttonEl = <Link href={buttonURL}>
                <a className="big-btn" href="">{buttonLabel}</a>
            </Link>;
        }
        return (
            <section className="block-text block-accordion" data-accordion="open" style={{paddingBottom: 0}}>
                <div className="block-accordion__header" onClick={() => this.setState({open: !this.state.open})}>
                    <h2 className="block-text__title">{title}</h2>
                    <div className={adfad}>
                        <div></div>
                    </div>
                </div>
                <div className="block-accordion__body" style={{opacity: this.state.open ? 1 : 0, maxHeight: this.state.open ? "1000px" : "0"}}>
                    <p className="block-text__par">{this.props.children}</p>
                    <table>
                        <tbody>
                        <tr>
                            <th>Вид работы</th>
                            <th>Цена, руб</th>
                        </tr>
                        {this.tableRows(rows)}
                        </tbody>
                    </table>
                    {buttonEl}
                </div>
            </section>
        )
    }
}

export default Accordion;