import React, {Component} from 'react'
import Link from 'next/link';

import {
    BlockAccordionTable,
    SectionBlockAccordion,
    BlockAccordionHeader,
    BlockAccordionTitle,
    BlockAccordionBody,
    BlockTextPar,
    BigBtn,
    BlockAccordionArrow,
    TableTh,
    SingleTd,
    StyleTd
}from './style.js'




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
                    cells = <SingleTd className="single" colSpan={2}>{row}</SingleTd>;
                    break;
                case "object":
                    if (row['$$typeof'] !== undefined) {
                        cells = <SingleTd className="single" colSpan={2}>{row}</SingleTd>;
                    } else {
                        if (row.length === 1) {
                            cells = <SingleTd className="single" colSpan={2}>{row[0]}</SingleTd>;
                        } else {
                            cells = row.map((cell, ck) => (<StyleTd key={ck}>{cell}</StyleTd>));
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
        const {title, rows, button, buttonLabel, buttonURL, isOpen} = this.props;
        let classes = "block-accordion__arrow";
        if (this.state.open) {
            classes += " up"
        }
        let buttonEl = <br/>;
        if (button) {
            buttonEl = <Link href={buttonURL}><BigBtn className="big-btn">{buttonLabel}</BigBtn></Link>;
        }
        return (
            <SectionBlockAccordion className="block-accordion" data-accordion="open" style={{paddingBottom: 0}}>
                <BlockAccordionHeader className="block-accordion__header" onClick={() => this.setState({open: !this.state.open})}>
                    <BlockAccordionTitle className="block-accordion__title">{title}</BlockAccordionTitle>
                    <BlockAccordionArrow className={classes} isOpen={this.state.open ? true : false} >
                        <div></div>
                    </BlockAccordionArrow>
                </BlockAccordionHeader>
                <BlockAccordionBody className="block-accordion__body" style={{opacity: this.state.open ? 1 : 0, maxHeight: this.state.open ? "100000px" : "0"}}>
                    <BlockTextPar className="block-text__par">{this.props.children}</BlockTextPar>
                    <BlockAccordionTable className="block-accordion__table">
                        <tbody>
                        <tr>
                            <TableTh></TableTh>

                        </tr>
                        {this.tableRows(rows)}
                        </tbody>
                    </BlockAccordionTable>
                    {buttonEl}
                </BlockAccordionBody>
            </SectionBlockAccordion>
        )
    }
}

export default Accordion;
