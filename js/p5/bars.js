const BARS_AUDIO_PATH = "/audio/triple.mp3";

let barsSong;

let barsFit;

let barsAmplitude;

const barBins = 64;

function preload() {

    soundFormats('mp3');
    barsSong = loadSound(BARS_AUDIO_PATH);
}

