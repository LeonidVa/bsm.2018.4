import {YMaps, Map, Placemark} from 'react-yandex-maps';

import {Component} from 'react';
import './MapBlock.scss'
import styles from "styled-components"


const BlockMap = styles.section `
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
    height: 12.5em;
    background-color: #f5f5f5;
    font-size: 2em;
    color: #4a4a4a;
    margin: 1.56em auto 0;
    position: relative;
    z-index: 1;
    // @media (min-width: 1200px) {
    //     font-size: 1.75em;
    // }
    // @media (min-width: 1900px) {
    //     font-size: 3.06em;
    // }
    // @media (min-width: 3000px) {
    //     font-size: 5.36em;
    // }
    @media (max-width: 900px) {
        width: 100%;
    }
`;

const mapState = {center: [55.753710, 37.605719], zoom: 17};

class FillContainer extends Component {

    render() {
        return (
            <YMaps>
                <Map state={mapState} width="100%" height="100%">
                    <Placemark
                        geometry={{
                            coordinates: [55.753710, 37.605719]
                        }}
                        properties={{
                            hintContent: 'Собственный значок метки',
                            balloonContent: 'Это красивая метка'
                        }}
                        options={{
                            iconLayout: 'default#image',
                            iconImageHref: require('static/images/fox-logo.128.png'),
                            iconImageSize: [48, 48],
                            iconImageOffset: [-24, -24]
                        }}
                    />
                </Map>
            </YMaps>
        );
    }
}


const MapBlock = () => (
    <BlockMap className="block-map">
        <FillContainer/>
    </BlockMap>
);

export default MapBlock;