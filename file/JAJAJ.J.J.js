const audio = new Audio();
const playlist = document.querySelectorAll('.playlist li');
const currentSongElement = document.querySelector('.current-song');
let currentSongIndex = 0;

function playSong(index) {
    const song = playlist[index].getAttribute('data-src');
    audio.src = song;
    audio.play();
    updateCurrentSongInfo(index);
}

function updateCurrentSongInfo(index) {
    currentSongElement.textContent = `Now Playing: ${playlist[index].textContent}`;
    currentSongIndex = index;
}

function togglePlayPause() {
    if (audio.paused) {
        audio.play();
        document.querySelector('.play-pause').textContent = 'Pause';
    } else {
        audio.pause();
        document.querySelector('.play-pause').textContent = 'Play';
    }
}

function skipSong() {
    currentSongIndex = (currentSongIndex + 1) % playlist.length;
    playSong(currentSongIndex);
}

function setVolume(volume) {
    audio.volume = volume;
}

playlist.forEach((song, index) => {
    song.addEventListener('click', () => {
        playSong(index);
    });
});

audio.addEventListener('ended', () => {
    skipSong();
});
