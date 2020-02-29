// label>
//     Value to filer:
//     <select value={this.state.value} name="value" onChange={this.handleChange}>
//       {filteredData.map(item => <option value={item.value}> {item.value} </option>}
//     </select>
//   </label>

import React from 'react';

export default class FilterComp extends React.Component {
    constructor(props){
        super(props);
       
        }
       
        getoptions = function(){
            return this.props.items.map((row, index)=>{
            return <option>{row[this.props.keyVal]}</option>
                })
        }
render(){

    return(<p>
              {this.getoptions}
              </p>
    )
}

}