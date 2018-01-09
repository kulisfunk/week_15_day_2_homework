import React from 'react';

class Song extends React.Component {
  render() {
    return (
      <div className="song">
      {this.props.children}
      </div>
    )
  }
}

export default Song
