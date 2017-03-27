/**
 * Created by weng on 2017/3/26.
 */

import React from "react";
import Inputcomponent from "./InputComponent.js";
import Listcomponent from "./ListComponent.js";

export default class TodoComponent extends React.Component{
    constructor(props){
        super(props);
        this.state={
            list:[]
        };


    }
    // changeItem(item){
    //     this.state.item = item;
    //     this.setState({
    //         item
    //     });
    // }
    changeList(last){
        this.setState({
            list: [...this.state.list, last]

    })
    }


    render(){
        return(
            <div>
                <Inputcomponent changeList={(last)=>this.changeList(last)} list={this.state.list}/>
                <Listcomponent list={this.state.list}/>
            </div>

        )
    }




}