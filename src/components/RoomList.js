import React from 'react'

class RoomList extends React.Component {
    render () {
        return (
            <div className="rooms-list">
			<ul>
            	{this.props.rooms.map(room=>{
            		return(
            			<li key={room.id} className="room">
        					<a herf="#"># {room.name}</a>
        				</li>            			
            		)
            	})}
            </ul>
                <div className="help-text">RoomList</div>
            </div>
        )
    }
}

export default RoomList