import React from 'react';
import ReactDOM from 'react-dom';
import RoomList from './components/RoomList'

import './index.css';

class App extends React.Component{
	constructor(){
		super();

		this.state = {
			messages:[],
		}

	}

	componentDidMount(){
		//get api url,
		/*
		this.setState({
					messages: [... this.state.messages, messages]
				})
		*/
		
	}

	sendMessage(text){

	}

	render(){
		return(
			<div className="app">
				<RoomList/>
				<MessageList messages={this.state.messages}/>
				<SendMessageForm sendMessage/>
				<JoinRoomForm/>
			</div>
		);
	}
}