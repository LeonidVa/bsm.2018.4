import playIcon from 'static/images/play-icon.svg'
import React, {Component} from 'react';
import styled from 'styled-components';

const VideoSection = styled.section`
    display: flex;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    align-items: center;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    justify-content: center;
    -webkit-box-pack: justify;
    -webkit-justify-content: center;
    -ms-flex-pack: justify;
    width: 30.94em;
    height: 17.03em;
    background-color: #9b9b9b;
    font-size: 2em;
    margin: 1.56em auto 0;
    position: relative;
    z-index: 1;
    &__play {
        width: 2.5em;
        height: 2.5em;
        position: absolute;
        top: 50%;
        left: 50%;
        margin-top: -1.25em;
        margin-left: -1.25em;
        img {
            width: 100%;
        }
    }
    @media (max-width: 900px) {
        width: 100%;
    }
    @media (max-width: 480px) {
        width: 100%;
        font-size: 1em;
    }

    iframe {
        width: 100% !important;
        height: 100% !important;
    }
`;
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