import React, { Component } from 'react';
import './AnimeVoiceMachine.css';
import Keys from './Keys';
import { keysArr } from './keysArr';


class AnimeVoiceMachine extends Component {
  constructor(props) {
    super(props);
    this.state = {
      keys: keysArr,
      displayName: "naruto",
      displayImg: "https://p325k7wa.twic.pics/high/naruto/naruto-suns-revolution/00-page-setup/nsr_game-thumbnail.jpg?twic=v1/dpr=2/cover=760x844/step=10/quality=80"
    }
  }
  render() {
    return (
      <div id="drum-machine" className="row p-4 text-center shadow-lg">
        <h2 className="text-center">Anime Voice Machine</h2>
        <hr />

        <Keys
          keys={this.state.keys}
          updateDisplayImg={imgUrl => this.setState({displayImg: imgUrl})}
          updateDisplayName={name => this.setState({displayName: name})}
        />

        <div id="display" className="col-5">
          <p className="display-name py-3 btn d-grid btn-dark text-uppercase">{ this.state.displayName }</p>
          <img className="img-fluid" src={this.state.displayImg} alt={this.setState.displayName }/>
        </div>
      </div>
    );
  }

}

export default AnimeVoiceMachine;
