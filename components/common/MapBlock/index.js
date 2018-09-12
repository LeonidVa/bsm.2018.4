import {YMaps, Map, Placemark} from 'react-yandex-maps';

import {Component} from 'react';
import './index.scss'


const mapState = {center: [55.753710, 37.605719], zoom: 17};

class FillContainer extends Component {
    state = {width: '100%', height: '100%'};

    render() {
        const {width, height} = this.state;
        return (
            <YMaps>
                <Map state={mapState} width={width} height={height}>
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
    <section className="block-map">
        <FillContainer/>
    </section>
);

export default MapBlock;