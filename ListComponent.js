/**
 * Created by weng on 2017/3/26.
 */

import React from "react";


export default class ListComponent extends React.Component{
    constructor(props){
        super(props);
    }


    render(){
        console.log(this.props.list);
        return(
            <ul>
                {this.props.list.map(item=><li className={item.index}>{item}</li>)}



            </ul>
        )
    }
}

