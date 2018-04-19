import React, { Component } from 'react';

class Address extends Component{
    state = {
        display: false
    }
    handleClick = () =>{
        const { handleMaps } = this.props
        this.setState({ display: !this.state.display })
        handleMaps()
    }
    componentWillReceiveProps = (nextProps, nextState) => {
        if(nextProps.display !== this.state.display){
            this.setState({ display: nextProps.display })
        }
    }
    render(){
        const { metro, time, distance, route, officeRoute, schema } = this.props
        return(
            <div className="block-accordion contacts">
                <div className="block-accordion__header" onClick={() => this.handleClick()}>
                    <p className="block-text__par big-bold">
                        {metro}
                    </p>
                </div>
                <div className="block-accordion__body active" style={{ opacity: this.state.display ? 1 : 0, maxHeight: this.state.display ? "1000px" : "0" }}>
                    <img src={schema} alt="how-to-go" />
                    <p className="block-text__par">
                        {metro}<br />
                        {time}<br />
                        {distance}
                            </p>
                    <p className="block-text__par">
                        {route}
                    </p>
                    <p className="block-text__par">
                        {officeRoute}
                    </p>
                </div>
            </div>		
        )
    }
}


export default Address