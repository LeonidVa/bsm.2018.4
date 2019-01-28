import {YMaps, Map, Placemark} from 'react-yandex-maps';

import {Component} from 'react';

import  {
BlockMap
} from './style';

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
                            iconImageHref: require('static/images/fox-circle.svg'),
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