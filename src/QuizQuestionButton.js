import React, {Component} from 'react';

function handleClick() {
}


class QuizQuestionButton extends Component {

	render() {
		return (
			<li>
				<button onClick={this.handleClick.bind(this)} >{this.props.button_text}</button>
			</li>

		);
	}
}

export default QuizQuestionButton;
