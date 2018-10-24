import React, {Component} from 'react'
import Link from 'next/link';
import './index.scss'

class Accordion extends Component {

    state = {
        open: this.props.open
    };

    tableRows = (rows) => {
        if (rows === undefined) {
            return ""
        }
        return rows.map((row, index) => {
            if (row === undefined) {
                return ""
            }
            let cells = null;
            const tof = typeof row;

            switch (tof) {
                case "string":
                    cells = <td className="single" colSpan={2}>{row}</td>;
                    break;
                case "object":
                    if (row['$$typeof'] !== undefined) {
                        cells = <td className="single" colSpan={2}>{row}</td>;
                    } else {
                        if (row.length === 1) {
                            cells = <td className="single" colSpan={2}>{row[0]}</td>;
                        } else {
                            cells = row.map((cell, ck) => (<td key={ck}>{cell}</td>));
                        }
                    }
                    break;

                default:
                    console.log('Accordion row rendering failed: unknown type ' + tof)
            }

            return (<tr key={index}>{cells}</tr>)
        })
    };

    render() {
        const {title, rows, button, buttonLabel, buttonURL} = this.props;
        let classes = "block-accordion__arrow";
        if (this.state.open) {
            classes += " up"
        }
        let buttonEl = <br/>;
        if (button) {
            buttonEl = <Link href={buttonURL}><a className="big-btn">{buttonLabel}</a></Link>;
        }
        return (
            <section className="block-accordion" data-accordion="open" style={{paddingBottom: 0}}>
                <div className="block-accordion__header" onClick={() => this.setState({open: !this.state.open})}>
                    <h2 className="block-accordion__title">{title}</h2>
                    <div className={classes}>
                        <div></div>
                    </div>
                </div>
                <div className="block-accordion__body" style={{opacity: this.state.open ? 1 : 0, maxHeight: this.state.open ? "100000px" : "0"}}>
                    <p className="block-text__par">{this.props.children}</p>
                    <table className="block-accordion__table">
                        <tbody>
                        <tr>
                            <th></th>

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
