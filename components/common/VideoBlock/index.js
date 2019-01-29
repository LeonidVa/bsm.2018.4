import playIcon from 'static/images/play-icon.svg'
import React, {Component} from 'react';
import {VideoSection} from './style.js';

class VideoBlock extends Component {
    render() {
        if (this.props.children) {
            return <VideoSection className="block-video">{this.props.children}</VideoSection>
        }

        return <VideoSection className="block-video">
            <div className="block-video__play">
                <img src={playIcon} alt=""/>
            </div>
        </VideoSection>
    }
}

export default VideoBlock