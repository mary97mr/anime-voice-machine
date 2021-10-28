import React, { Component } from 'react';
import './AnimeVoiceMachine.css';
import SingleKey from './SingleKey'


class Keys extends Component {
	render() {
    const keys = this.props.keys.map(obj => {
      return (
        <SingleKey
          audioId={obj.id}
          audioUrl={obj.url}
          keyName={obj.keyName}
          code={obj.keyCode}
          imgUrl={obj.img}
          updateDisplayName={this.props.updateDisplayName}
          updateDisplayImg={this.props.updateDisplayImg}
          key={obj.id}
        />
      )
    });
	
		return (
			<div className="col-7 p-0 d-flex flex-wrap justify-content-between"> { keys }</div>
		);
	}

}

export default Keys;
