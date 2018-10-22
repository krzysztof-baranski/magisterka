import * as Actions from './actionsConsts';

export const setWebSocket = ws => ({
    type: Actions.SET_WEBSOCKET,
    webSocket: ws
});

export const setCurrentSource = source => ({
    type: Actions.SET_CURRENT_SOURCE,
    currentSource: source
});
export const setCurrentStation = station => ({
    type: Actions.SET_CURRENT_STATION,
    currentStation: station
});
const s = function (ss) {
    console.log('AAAAA', ss);
    return ss;
}

export const setTunerListItems = items => ({
    type: Actions.SET_TUNER_LIST_ITEMS,
    tunerItems: s(items)
});

export const setMediaListItems = items => ({
    type: Actions.SET_MEDIA_LIST_ITEMS,
    mediaItems: s(items)
});

export const setCurrentTrack = track => ({
    type: Actions.SET_CURRENT_TRACK,
    currentTrack: track
})

export const setHomeAddress = address => ({
    type: Actions.SET_HOME_ADDRESS,
    homeAddress: address
});

export const setAddress = address => ({
    type: Actions.SET_ADDRESS,
    address: address
});

export const setBrightness = value => ({
    type: Actions.SET_BRIGHTNESS,
    brightness: value
});

