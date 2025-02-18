import {Component} from 'react';
export class Button extends Component {
    render() {
        const {text, click, disabled} = this.props;
        return (
            <button 
                onClick={click}
                className = "moreposts-button"
                disabled={disabled}
            >
                {text}
            </button>	
        )
    }
}