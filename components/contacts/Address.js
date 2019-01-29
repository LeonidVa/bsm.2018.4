import React, {Component} from 'react';
import {
    BlockAccordionContacts,
    BlockAccordionHeader,
    BlockTextPar,
    BlockAccordionBody,
} from "./style.js"

class Address extends Component {
    state = {
        display: false
    }
    handleClick = () => {
        const {handleMaps=()=>{}} = this.props
        this.setState({open: !this.state.open})
        handleMaps()
    }
    componentWillReceiveProps = (nextProps, nextState) => {
        if (nextProps.open !== this.state.open) {
            this.setState({open: nextProps.open})
        }
    }

    render() {
        const {metro, time, distance, route, officeRoute, schema} = this.props
        return (
            <BlockAccordionContacts className="block-accordion contacts">
                <BlockAccordionHeader className="block-accordion__header" onClick={() => this.handleClick()}>
                    <BlockTextPar className="block-text__par big-bold">
                        {metro}
                    </BlockTextPar>
                </BlockAccordionHeader>
                <BlockAccordionBody className="block-accordion__body active" style={{opacity: this.state.open ? 1 : 0, maxHeight: this.state.open ? "1000px" : "0"}}>
                    <img src={schema} alt="Карта проезда"/>
                    <BlockTextPar className="block-text__par">
                        {metro}<br/>
                        {time}<br/>
                        {distance}
                    </BlockTextPar>
                    {this.props.children}
                </BlockAccordionBody>
            </BlockAccordionContacts>
        )
    }
}


export default Address
