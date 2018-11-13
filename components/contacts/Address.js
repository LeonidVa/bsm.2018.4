import React, {Component} from 'react';

class Address extends Component {
    state = {
        display: false
    }
    handleClick = () => {
        const {handleMaps} = this.props
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
            <div className="block-accordion contacts">
                <div className="block-accordion__header" onClick={() => this.handleClick()}>
                    <p className="block-text__par big-bold">
                        {metro}
                    </p>
                </div>
                <div className="block-accordion__body active" style={{opacity: this.state.open ? 1 : 0, maxHeight: this.state.open ? "1000px" : "0"}}>
                    <img src={schema} alt="Карта проезда"/>
                    <p className="block-text__par">
                        {metro}<br/>
                        {time}<br/>
                        {distance}
                    </p>
                    {this.props.children}
                </div>
            </div>
        )
    }
}


export default Address
