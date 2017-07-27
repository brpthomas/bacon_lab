import React, { Component } from 'react';
import BaconListItem from './BaconListItem';

class BaconList extends Component {
    renderBaconItems(arr) {
        return arr.map((el, index) => {
            return <BaconListItem key={index} foodAndStuff={el} />
        })
    }


    render() {
    	const thingsWithBacon =['pizza', 'salad', 'life', 'grilled cheese', 'wdi']
        return (
            <ul> 
				{ this.renderBaconItems(thingsWithBacon)}
			</ul>
        )
    }
}

export default BaconList;