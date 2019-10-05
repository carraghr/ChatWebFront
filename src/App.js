import React from 'react';
import ReactDOM from 'react-dom';

import RoomList from './components/JoinRoomForm'
import MessageList from './components/MessageList'
import SendMessageForm from './components/SendMessageForm'
import JoinRoomForm from './components/RoomList'

import './index.css';

class App extends React.Component{
	
	constructor(){
		super();

		this.state = {
			messages:[],
		}
		this.sendMessage = this.sendMessage.bind(this);
	}

	componentDidMount(){
		//get api url,
		//connect to api 
		/**
		 * this.currentUser should be defined here
		 */
		
	}

	sendMessage(text){
		this.currentUser.sendMessage({
			text,
			roomId: "",
		});
	}

	render(){
		return(
			<div className="app">
				<RoomList rooms={[...this.state.joinableRooms, ... this.state.joinedRooms]}/>
				<MessageList messages={this.state.messages}/>
				<SendMessageForm sendMessage={this.sendMessage}/>
				<JoinRoomForm/>
			</div>
		);
	}
}

export default App