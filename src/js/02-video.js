import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

// Закидаю поточний час у локальне сховище
function saveCurrentTimeToLocalStorage(data) {
  const currentTime = data.seconds;
  localStorage.setItem('videoplayer-current-time', currentTime);
}

// Обмежую частоту функції saveCurrentTimeToLocalStorage до 1 разу в секунду
const throttledSaveCurrentTime = throttle(saveCurrentTimeToLocalStorage, 1000);

// Встановлюю початковий час відеоплеєра на останнє збережене значення або 0
const savedCurrentTime = localStorage.getItem('videoplayer-current-time');
player.setCurrentTime(savedCurrentTime || 0);

player.on('timeupdate', throttledSaveCurrentTime);
