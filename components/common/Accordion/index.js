import React, {Component} from 'react'
import Link from 'next/link';
import './index.scss'
import styled from 'styled-components'

const SectionBlockAccordion = styled.section `
  width: 34em;
  margin: 3rem auto 0;
  padding: 0;
  background-color: #ffffff;
  color: #4a4a4a;
  position: relative;
  z-index: 0;
`;

const BlockAccordionHeader = styled.div`
  position: relative;
  cursor: pointer;
  padding: 3em 2em 2em;
`;

const BlockAccordionTitle = styled.h2`
  font-size: 1.9rem;
  font-style: normal;
  font-stretch: normal;
  letter-spacing: normal;
  font-weight: bold;
  line-height: 1.19;
  color: #4a4a4a;
  transition: all .4s;
  width: 90%;
  @media (max-width: 415px) {
    font-size: 139%;
  }
  @media (max-width: 376px) {
    font-size: 117%;
  }
  @media (max-width: 361px) {
    font-size: 120%;
  }
  @media (max-width: 321px) {
    font-size: 97%;
  }
  &:hover {
    color: #f4511e;
  }
`;

const BlockAccordionBody = styled.div`
  max-height: 0;
  padding: 0 2.18rem;
  transition: all .5s linear;
`;

const BlockTextPar = styled.p `
  transition: all .4s;
  &:hover {
    color: #f4511e;
  }
`;

const BigBtn = styled.a `
  display: block;
  width: calc(100% + 4.36rem);
  text-align: center;
  font-size: 2rem;
  padding: 2.36rem 0;
  color: #ffffff;
  text-decoration: none;
  margin: 3.12rem 0 0 -2.18rem;
  background-color: #f4511e;
  transition: all .4s;
  @media (max-width: 415px) {
    width: 87%;
    min-width: 273px;
  }
  @media (max-width: 400px) {
    width: 79%;
    min-width: 273px;
  }
  @media (max-width: 321px) {
    width: 68%;
  }
  &:hover {
    background-color: #922d0e;
  }
`;

const BlockAccordionArrow = styled.div`
    font-size: 2rem;
    width: 2rem;
    height: 2rem;
    border: solid 0.125rem #f4511e;
    border-radius: 50%;
    position: absolute;
    top: 55%;
    margin-top: -0.875rem;
    right: 2rem;
    @media (max-width: 415px) {
      right: 28%;
    }
    @media (max-width: 376px) {
      right: 36%;
    }
    @media (max-width: 321px) {
      right: 44%;
    }
    div {
      font-size: 2rem;
      width: 0.625rem;
      height: 0.625rem;
      border-right: 0.125rem solid #f4511e;
      border-bottom: 0.125rem solid #f4511e;
      transform: ${props => props.isOpen ? "rotate(225deg)" :  "rotate(45deg)"};
      position: absolute;
      top: 50%;
      left: 50%;
      margin-top: -0.375rem;
      margin-top: ${props => props.isOpen ? "-0.18rem" :  "-0.375rem"};
      margin-left: -0.31rem;
      transition: all 0.4s ease-out;
    }
`;



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
                    <table className="block-accordion__table">
                        <tbody>
                        <tr>
                            <th></th>

                        </tr>
                        {this.tableRows(rows)}
                        </tbody>
                    </table>
                    {buttonEl}
                </BlockAccordionBody>
            </SectionBlockAccordion>
        )
    }
}

export default Accordion;
