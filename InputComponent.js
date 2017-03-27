/**
 * Created by weng on 2017/3/23.
 */
import React from 'react';



export default class InputComponent extends React.Component{
    constructor(props) {
        super(props);


         this.handleSub = this.handleSub.bind(this);


    }
    handleSub(){
        //this.props.handleSubmit(this.refs.itemText.value.trim());
        console.log(this.refs.itemText.value.trim());
        // this.setState({item :this.refs.itemText.value.trim(),list:this.list.push(this.item)});
        // this.props.changeItem(this.refs.itemText.value.trim());
        this.props.changeList(this.refs.itemText.value.trim());
    }

    render() {
        return (
            <div>
                <input type="text" ref="itemText"/>
                <button onClick={this.handleSub}>submit</button>
            </div>


        )
    }
}