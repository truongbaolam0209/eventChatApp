import React, { useState } from 'react';
import ReactMapGL from 'react-map-gl';
import { Icon, Segment } from 'semantic-ui-react';


const Marker = () => <Icon name='marker' size='big' color='red' />


const EventDetailedMap = ({ lat, lng }) => {

    const [viewport, setViewport] = useState({
        width: '100%',
        height: '100%',
        latitude: lat,
        longitude: lng,
        zoom: 13,
    });

    return (
        <Segment attached='bottom' style={{ padding: 0 }}>
            <div style={{ height: '300px', width: '100%' }}>
                <ReactMapGL
                    {...viewport}
                    mapboxApiAccessToken='pk.eyJ1IjoidHJ1b25nYmFvbGFtMDIwOSIsImEiOiJjazRsMjdoM3IwMWU4M2psZW9vN3E2ajViIn0.GO70z4w4ayo4ejCkJZmhOg'
                    onViewportChange={viewport => setViewport(viewport)}
                    mapStyle='mapbox://styles/truongbaolam0209/ckb8qulo60al81ik06xlsnppu'
                >
                    <Marker lat={lat} lng={lng} />
                </ReactMapGL>
            </div>
        </Segment>
    );
};

export default EventDetailedMap;