import React, {Component} from 'react';
import { Input,Button } from 'antd';
import ReactDOM from 'react-dom';

const { TextArea } = Input;

class ButtonSize extends Component {
    constructor() {  
        super();  
        this.state = {
            aaa: 6,
            bbb: '555'
        } 
    } 

    number = () => {
        console.log(11111)
        if(this.state.bbb === '7777'){
            this.setState({
                bbb: '555',
                aaa: 6
            })
        } else {
            this.setState({
                aaa: 10,
                bbb: '7777'
            })
        }
      }

    render() {
        return(
            <div>
                <div>
                    <TextArea placeholder="Autosize height based on content lines" style={{width:'100px'}}/> 
                </div>
                <div>
                    <span>{this.state.aaa}</span>
                </div>
                <div>
                    <Button onClick={this.number}>{this.state.bbb}</Button>
                </div>
            </div>
        )
    }
}

export default ButtonSize;



