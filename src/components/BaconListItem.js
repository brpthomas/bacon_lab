import React, { Component } from 'react'; 
import BaconList from './BaconList';


class BaconListItem extends Component {
	render() {
		return (
			<li> { this.props.foodAndStuff } is better with bacon!</li>

		)
	}
}

export default BaconListItem; 