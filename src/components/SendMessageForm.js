import React from 'react'

class SendMessageForm extends React.Component{

	constructor(){
		super();
		this.state = {
			message:'',
		}

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(e){
		this.setState({
			message:e.target.value
		})
	}

	handleSubmit(e){
		//
		e.preventDefault();
		//send of message to api 
		this.props.sendMessage(this.state.message);
		//clean state		
		this.setState({
			message:'',
		})
	}

	render(){
		return(
			<form 
				onSubmit={this.handleSubmit} 
				className="send-message-form">
				<input 
					onChange={this.handleChange}
					value={this.state.message}
					placeholder="Type message here! and hit enter" 
					type="text" />
			</form>
		)
	}
}
export default SendMessageForm