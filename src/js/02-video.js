import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);
const LOCALSTORAGE_KEY = 'videoplayer-current-time';
let currentTime = 0;

if (localStorage.getItem(LOCALSTORAGE_KEY)) {
  currentTime = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));
}
player.on('timeupdate', throttle(onPlayerTime, 1000));
player.setCurrentTime(currentTime);

function onPlayerTime(data) {
  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(data.seconds));
}

