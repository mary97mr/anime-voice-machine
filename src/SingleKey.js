import React, { Component } from 'react';


class SingleKey extends Component {
  constructor(props) {
    super(props);
    this.playAudio = this.playAudio.bind(this);
    this.keyPress = this.keyPress.bind(this);
  }

  keyPress(e) {
    if(e.keyCode === this.props.code) {
      this.playAudio();
    }
  }

  playAudio() {
    document.getElementById(this.props.keyName).play();
    this.props.updateDisplayName(this.props.audioId);
    this.props.updateDisplayImg(this.props.imgUrl);
  }

  componentDidMount() {
    document.addEventListener("keydown", this.keyPress);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.keyPress);
  }
  render() {
    const { audioId, audioUrl, keyName } = this.props;
    return (
      <div className="drum-pad mb-3 fs-4 shadow" id={audioId} onClick={this.playAudio}>
        <audio src={audioUrl} className="clip" id={keyName}></audio>
        {keyName}
      </div>
    );
  }

}

export default SingleKey;
