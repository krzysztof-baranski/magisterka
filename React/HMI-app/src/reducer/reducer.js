import * as Actions from '../actions/actionsConsts';

const initaialState = {
    currentSource: null,
    currentTrack: null,
    currentStation: null,
    webSocket: null,
    mediaItems: null,
    tunerItems: null,
    homeAddress: null,
    address: {}
};

const reducer = (state = initaialState, action) => {
    switch (action.type) {
        case Actions.SET_WEBSOCKET:
            return {
                ...state,
                webSocket: action.webSocket
            }
        case Actions.SET_CURRENT_SOURCE:
            return {
                ...state,
                currentSource: action.currentSource
            };
        case Actions.SET_CURRENT_STATION:
            return {
                ...state,
                currentStation: action.currentStation
            }
        case Actions.SET_TUNER_LIST_ITEMS:
            return {
                ...state,
                tunerItems: action.tunerItems
            }
        case Actions.SET_MEDIA_LIST_ITEMS:
            return {
                ...state,
                mediaItems: action.mediaItems
            }
        case Actions.SET_CURRENT_TRACK:
            return {
                ...state,
                currentTrack: action.currentTrack
            }
        case Actions.SET_HOME_ADDRESS:
            return {
                ...state,
                homeAddress: action.homeAddress
            }
        case Actions.SET_ADDRESS:
            return {
                ...state,
                address: action.address
            }
        default:
            return {
                ...state
            }
    }
}

export default reducer;