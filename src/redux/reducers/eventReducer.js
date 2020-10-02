import _ld from 'lodash';
import { CREATE_EVENT, DELETE_EVENT, UPDATE_EVENT } from "../types";

const initState = _ld.mapKeys([
    {
        id: '16fc97a0-bb3d-4852-be5e-d4a4f8ae1550',
        title: 'Trip to Tower of London',
        date: '2018-03-27',
        category: 'culture',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt, quis scelerisque magna dapibus. Sed eget ipsum vel arcu vehicula ullamcorper.',
        city: 'London, UK',
        venue: "Tower of London, St Katharine's & Wapping, London",
        venueLatLng: {
            lat: 40.7484405,
            lng: -50.665567
        },  
        hostedBy: 'Bob',
        hostPhotoURL: 'https://randomuser.me/api/portraits/men/20.jpg',
        attendees: [
            {
                id: 'a',
                name: 'Bob',
                photoURL: 'https://randomuser.me/api/portraits/men/20.jpg'
            },
            {
                id: 'b',
                name: 'Tom',
                photoURL: 'https://randomuser.me/api/portraits/men/22.jpg'
            }
        ]
    },
    {
        id: '9590cc22-8f70-4921-946a-a3a7eefb681c',
        title: 'Trip to Punch and Judy Pub',
        date: '2018-03-28',
        category: 'drinks',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt, quis scelerisque magna dapibus. Sed eget ipsum vel arcu vehicula ullamcorper.',
        city: 'London, UK',
        venue: 'Punch & Judy, Henrietta Street, London, UK',
        venueLatLng: {
            lat: 41.7484405,
            lng: -51.665567
        },  
        hostedBy: 'Tom',
        hostPhotoURL: 'https://randomuser.me/api/portraits/men/22.jpg',
        attendees: [
            {
                id: 'b',
                name: 'Tom',
                photoURL: 'https://randomuser.me/api/portraits/men/22.jpg'
            },
            {
                id: 'a',
                name: 'Bob',
                photoURL: 'https://randomuser.me/api/portraits/men/20.jpg'
            }
        ]
    }
], 'id');



export default (state = initState, { type, payload }) => {
    switch (type) {

        case CREATE_EVENT:
        case UPDATE_EVENT:
            return { ...state, [payload.id]: payload };

        case DELETE_EVENT:
            return [
                ...state.filter(event => event.id !== payload.eventId)
            ]

        default: return state;
    };
};

