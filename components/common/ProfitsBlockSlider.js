
import React, {Component } from 'react';
import Link from 'next/link';



class Block extends Component{
    state = {
        shiftLeft: 0,
        shift: 0
    }

    shift = () => {
        const that = this;
        this.sliderLoop = setInterval(function(){
            if(that.state.shiftLeft > -308 * that.props.blocksCount - 1){
                
                that.setState({shiftLeft: that.state.shiftLeft - 308})
            }
        }, 5000)

    }
    shouldComponentUpdate = (nextProps, nextState) => {
        if (nextState.shiftLeft < -308 * this.props.blocksCount - 1){
            this.setState({ shiftLeft: 0})

            return false
        }

        return true
    }

    componentWillReceiveProps =(nextProps)=>{
        if(nextProps.shift !== this.props.shift){
 
            let rate = Math.floor(nextProps.shift / 308)
            if (Math.abs(rate) < 1 && Math.abs(rate) >-1){
                this.setState({ shiftLeft: 0})
            }else if(rate > 0){
                this.setState({ shiftLeft: this.state.shiftLeft + 308})
            } else if (rate < 0) {
                this.setState({ shiftLeft: this.state.shiftLeft - 308 })
            }
        }

        if(nextProps.clearInterval){
            clearInterval(this.sliderLoop);
        }

        if(!nextProps.clearInterval && this.props.clearInterval !== nextProps.clearInterval){
            this.shift()
        }
    }
    componentDidMount = () => {
        this.shift()
    }

    componentWillUnmount = () => {
        clearInterval(this.sliderLoop);
    }


    render(){
        const { imageSrc, profit, description } = this.props;

        return(
  
                <div className="block-slider__slide"
                     style= {{ 
                                transform: `translate(${this.state.shiftLeft}px, 0)`,
                                transition: this.state.shiftLeft !== 0 ? 'transform 0.6s' : null
                            }}>
                    <Link href="#">
                        <a className="block-profits__item">
                            <img src={imageSrc} alt="profit" />
                            <h3 className="block-profits__title">{profit}</h3>
                            <p className="block-profits__par">
                                {description}   
                            </p>
                        </a>
                    </Link>
                </div>


        )
    }
}


const renderBlocks = (shift, clearInterval, profitBlockConfig) => {

    return profitBlockConfig.map((item) => (
        <Block shift={shift} 
               clearInterval={clearInterval} 
               imageSrc={item.imageSrc} 
               profit={item.profit} 
               description={item.description}
               blocksCount={profitBlockConfig.length} />
    ))
}
const ProfitBlock = ({shift, clearInterval, profitBlockConfig}) => (

        <div style={{display: 'flex'}}>
           {renderBlocks(shift, clearInterval, profitBlockConfig)}
        </div>
)



class ProfitSlider extends Component{

    state = {
        clickPoint: false,
        shift: 0,
        beginPoint: 0,
        positionChanged: 0,
        clearInterval: false

    }
    
    handleDragEnd = (e) => {
        //console.log('click', this.state.beginPoint, e.clientX);
        const {blocksCount, blockWidth, beginPoint } = this.state;

        this.setState({ clickPoint: false, shift: 0, positionChanged: e.clientX - beginPoint, clearInterval: false})
       
    }

    handleDrag = (e) => {
        //console.log(e.clientX, this.state.clickPoint)
        if(!this.state.clickPoint){
            this.setState({ clickPoint: e.clientX, beginPoint: e.clientX, clearInterval: true})
        }else{
            if(this.state.clickPoint > e.clientX){
                this.setState({ shift: this.state.shift - (this.state.clickPoint - e.clientX), clickPoint: e.clientX})
            }
            if (this.state.clickPoint < e.clientX) {
                this.setState({ shift: this.state.shift + (e.clientX - this.state.clickPoint), clickPoint: e.clientX})
            }
        }
    }
    render(){
        const { profitBlockConfig } = this.props
        return(
            <section className="block-slider" style={profitBlockConfig.length > 3 ? { maxWidth: '100%' } : {}}>
                    
                        <div className="slick3"
                            onDragEnd={(e) => this.handleDragEnd(e)}
                            onDrag={(e) => this.handleDrag(e)}
                            style={{ transform: `translate(${this.state.shift}px, 0)`}}
                            >           
                            <ProfitBlock profitBlockConfig={profitBlockConfig} shift={this.state.positionChanged} clearInterval={this.state.clearInterval}/>
                            {/* clone allprofitBlockConfig={profitBlockConfig}  blocks for illusion of infinite loop */}
                            <ProfitBlock profitBlockConfig={profitBlockConfig} shift={this.state.positionChanged} clearInterval={this.state.clearInterval}/>
                            {/* clone allprofitBlockConfig={profitBlockConfig}  blocks for illusion of infinite loop */}
                            <ProfitBlock profitBlockConfig={profitBlockConfig} shift={this.state.positionChanged} clearInterval={this.state.clearInterval} />
                    
                        </div>
               

            </section>
        )
    }
}

export default ProfitSlider;