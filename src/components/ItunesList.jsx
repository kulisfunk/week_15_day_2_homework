import React from 'react';

class ItunesList extends React.Component {

  render() {
    if(!this.props.songs){
      console.log("empty props");
    return null}
    console.log("good props");
    const songs = this.props.songs.map((song, index) => {
      return (
        <div>
        <p>{song["im:artist"].label}</p>
      </div>
      )
    })
    return (
    <div className="song-list">
     {songs}
    </div>
  )
  }
}

export default ItunesList;
