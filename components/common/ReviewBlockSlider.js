import React, { Component } from 'react';
import Link from 'next/link';

const Review = ({ faceImg, reviewText, bottom, name, prof }) => (

        <div className="block-slider__reviews-item">
            <p className={`review ${bottom ? 'review-bottom': ''}`}>
                {reviewText}
            </p>
            <div className="reviews-author">
                <img src={faceImg} alt="" />
                <div className="reviews-author__data">
                    <span className="reviews-name">{name}</span>
                    <span className="reviews-job job-orange">{prof}</span>
                </div>
            </div>
        </div>

)


class Block extends Component {
    state = {
        shiftLeft: 0,
        shift:0
    }

    shift = () => {
        const that = this;
        this.sliderLoop = setInterval(function () {
            if (that.state.shiftLeft > -358 * that.props.blocksCount - 1) {

                that.setState({ shiftLeft: that.state.shiftLeft - 358})
            }
        }, 5000)

    }
    shouldComponentUpdate = (nextProps, nextState) => {
        if (nextState.shiftLeft < -358 * this.props.blocksCount - 1) {
            this.setState({ shiftLeft: 0 })

            return false
        }

        return true
    }
    componentDidMount = () => {
        this.shift()
    }
    componentWillReceiveProps = (nextProps) => {
        if (nextProps.shift !== this.props.shift) {

            let rate = Math.floor(nextProps.shift / 350)
            if (Math.abs(rate) < 1 && Math.abs(rate) > -1) {
                this.setState({ shiftLeft: 0 })
            } else if (rate > 0) {
                this.setState({ shiftLeft: this.state.shiftLeft + 358 })
            } else if (rate < 0) {
                this.setState({ shiftLeft: this.state.shiftLeft - 358 })
            }
        }

        if (nextProps.clearInterval) {
            clearInterval(this.sliderLoop);
        }

        if (!nextProps.clearInterval && this.props.clearInterval !== nextProps.clearInterval) {
            this.shift()
        }

    }
    componentWillUnmount = () => {
        clearInterval(this.sliderLoop);
    }
    render() {
        const { faceImg, reviewText, name, prof, faceImgBot, reviewTextBot, nameBot, profBot } = this.props;
        return (
            <div className="block-slider__slide review"
                 style={{
                     transform: `translate(${this.state.shiftLeft}px, 0)`,
                     transition: this.state.shiftLeft !== 0 ? 'transform 0.6s' : null
                 }}>
                    <div className="block-slider__reviews-block">
                        <Review faceImg={faceImg} 
                                reviewText={reviewText} 
                                name={name} 
                                prof={prof} 
                                bottom={false}/>
                        <Review faceImg={faceImgBot} 
                                reviewText={reviewTextBot} 
                                name={nameBot} 
                                prof={profBot} 
                                bottom={true}/>     
                    </div>
            </div>
        )
    }
}


const renderBlocks = (props) =>{
    const { reviewBlockConfig } = props;
    return reviewBlockConfig.map((item)=>(
            <Block  faceImg={item.faceImg}
                    faceImgBot={item.faceImgBot}
                    reviewText={item.reviewText}
                    reviewTextBot={item.reviewTextBot}
                    name={item.name}
                    nameBot={item.nameBot}
                    prof={item.prof}
                    profBot={item.profBot}
                    blocksCount={reviewBlockConfig.length}
                    {...props} />
    ))
}

const ReviewBlock = (props) => (
    <div style={{ display: 'flex' }}>
        {renderBlocks(props)}
    </div>
)

class ReviewSlider extends Component{
    state = {
        clickPoint: false,
        shift: 0,
        beginPoint: 0,
        positionChanged: 0,
        clearInterval: false

    }

    handleMouseUp = (e) => {
        const { blocksCount, blockWidth, beginPoint } = this.state;

        this.setState({ clickPoint: false, shift: 0, positionChanged: e.clientX - beginPoint, clearInterval: false })

    }

    handleDrag = (e) => {
   
        if (e.nativeEvent.which === 1){
            if (!this.state.clickPoint) {
                this.setState({ clickPoint: e.clientX, beginPoint: e.clientX, clearInterval: true })
            } else {
                if (this.state.clickPoint > e.clientX) {
                    this.setState({ shift: this.state.shift - (this.state.clickPoint - e.clientX), clickPoint: e.clientX })
                }
                if (this.state.clickPoint < e.clientX) {
                    this.setState({ shift: this.state.shift + (e.clientX - this.state.clickPoint), clickPoint: e.clientX })
                }
            }
        }
    }

    render(){
        const { reviewBlockConfig } = this.props;
        return(
            <section className="block-slider review">
                <div className="slick"
                     onMouseUp={(e) => this.handleMouseUp(e)}
                     onMouseMove={(e) => this.handleDrag(e)}
                     style={{ transform: `translate(${this.state.shift}px, 0)` }}>
                        <ReviewBlock reviewBlockConfig={reviewBlockConfig} shift={this.state.positionChanged} clearInterval={this.state.clearInterval}/>
                        {/* clone all blocks for illusion of infinite loop */}
                        <ReviewBlock reviewBlockConfig={reviewBlockConfig} shift={this.state.positionChanged} clearInterval={this.state.clearInterval}/>
                        {/* clone all blocks for illusion of infinite loop */}
                        <ReviewBlock reviewBlockConfig={reviewBlockConfig} shift={this.state.positionChanged} clearInterval={this.state.clearInterval}/>
                </div>

            </section>
        )
    }
}

export default ReviewSlider;

