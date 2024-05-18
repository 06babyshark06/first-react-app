import { Component } from "react";

class Player extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentSongIndex: 0,
      isPlaying: false,
      songs: [
        { title: "First", url: "/resources/better-day-186374.mp3" },
        { title: "Second", url: "/resources/groovy-ambient-funk-201745.mp3" },
        { title: "Third", url: "resources/perfect-beauty-191271.mp3" },
        {
          title: "Forth",
          url: "resources/solitude-dark-ambient-electronic-197737.mp3",
        },
      ],
    };
    this.audioPlayer = new Audio();
  }
  playSong = () => {
    if (!this.state.isPlaying) {
      this.audioPlayer.src = this.state.songs[this.state.currentSongIndex].url;
      this.audioPlayer.play();
      this.setState({ isPlaying: true });
    } else {
      this.audioPlayer.pause();
      this.setState({ isPlaying: false });
    }
  };
  nextSong = () => {
    let newSongIndex =
      (this.state.currentSongIndex + 1) % this.state.songs.length;
    this.audioPlayer.src = this.state.songs[newSongIndex].url;
    if (this.state.isPlaying) {
      this.audioPlayer.play();
    }
    this.setState({ currentSongIndex: newSongIndex });
  };
  prevSong = () => {
    let newSongIndex = this.state.currentSongIndex - 1;
    if (newSongIndex < 0) newSongIndex = this.state.songs.length - 1;
    this.audioPlayer.src = this.state.songs[newSongIndex].url;
    if (this.state.isPlaying) {
      this.audioPlayer.play();
    }
    this.setState({ currentSongIndex: newSongIndex });
  };
  render() {
    const { songs, currentSongIndex, isPlaying } = this.state;
    return (
      <div>
        {songs.map((song, index) => (
          <div key={`${index}-${song.title}`}>
            <h4>
              {song.title}
              {index === currentSongIndex
                ? isPlaying
                  ? "(Playing)"
                  : "(Paused)"
                : ""}
            </h4>
          </div>
        ))}
        <button onClick={this.playSong}>{!isPlaying ? "Play" : "Pause"}</button>
        <button onClick={this.nextSong}>Next</button>
        <button onClick={this.prevSong}>Back</button>
      </div>
    );
  }
}
export default Player;
