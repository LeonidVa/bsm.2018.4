import playIcon from 'static/images/play-icon.svg'
import React, {Component} from 'react';

class VideoBlock extends Component {
    render() {
        if (this.props.children) {
            return <section className="block-video">{this.props.children}</section>
        }

        return <section className="block-video">
            <div className="block-video__play">
                <img src={playIcon} alt=""/>
            </div>
        </section>
    }
}

export default VideoBlock