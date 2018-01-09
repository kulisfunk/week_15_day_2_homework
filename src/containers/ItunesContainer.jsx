import React from 'react';
import ItunesList from '../components/ItunesList';

class ItunesContainer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
    songs: [],
    selectedSong: null
    };

  }

  validateSongs() {
    if (this.state.songs.length === 0) {
    console.log("no joy for setSate");
   }
   console.log("setstate validate");
  }

  componentDidMount(){
  const url = "https://itunes.apple.com/gb/rss/topsongs/limit=20/json";
  const request = new XMLHttpRequest();
  request.open("GET", url);
  request.addEventListener("load", () => {
    if (request.status === 200) {
    const jsonString = request.responseText;
    const list = JSON.parse(jsonString);
    const data = list.feed.entry;
    console.log("data prior to setState", data);
    this.setState({ songs: data }, function(){
      this.validateSongs();
    });
    console.log("setState good", this.state.songs);
    }
  });
  request.send();
  }

  render() {
    if(this.state.songs.length === 0){
      console.log("empty render");
    return null}
    console.log("render");
    return (
      <div>
        <ItunesList />
      </div>
    );
  }
}

export default ItunesContainer;
