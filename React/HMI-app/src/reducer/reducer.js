import * as Actions from '../actions/actionsConsts';

const initaialState = {
    currentSource: null,
    currentTrack: null,
    currentStation: null,
    webSocket: null,
    mediaItems: null,
    tunerItems: null,
    homeAddress: null,
    address: {},
    recentDestinations: null
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
        case Actions.SET_RECENT_DEST:
            return {
                ...state,
                recentDestinations: action.recents
            }
        default:
            return {
                ...state
            }
    }
}

export default reducer;