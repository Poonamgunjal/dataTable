import React from 'react';
import Pagination from './pagination';
import FilterComp from './filter';
export default class TableComponent extends React.Component {
 
    constructor(props){
    super(props);
    this.getHeader = this.getHeader.bind(this);
    this.getRowsData = this.getRowsData.bind(this);
    this.getKeys = this.getKeys.bind(this);
    JSON.parse(JSON.stringify(this.props.data));
    }
   
    getKeys = function(){
        return Object.keys(this.props.data[0]);
    }
    

    componentDidMount(){
        document.getElementById("selectVal").selectedIndex = -1;

    }
    getHeader = function(){
        var keys = this.getKeys();
        var items = this.props.data;
        return keys.map((key, index1)=>{
        return <th key={key}><p class="headerSortDown" onClick={this.onSort}>{key.toUpperCase()}</p>
                 <select  id="selectVal"  onChange={this.FilterData}>
                 {
              items.map((row, index)=>{
            return <option  id={index1} key={row[key]} value={row[key]}>{row[key]}</option>
                })
        }
    </select>
  

        </th>
        })
    }

    
    getRowsData = function(){
        var items = this.props.data;
        var keys = this.getKeys();
        return items.map((row, index)=>{
        return <tr key={index}><RenderRow key={index} data={row} keys={keys}/></tr>
        })
        }
     onSort=(sortKey) =>{
           // alert(sortKey);
         //const data = this.props.data;
        // data.sort((a,b) => a[sortKey].localeCompare(b[sortKey]))
         
       }
         FilterData=()=> {
            var e = document.getElementById('selectVal');
            //alert(e);
            var filter = e.options[e.selectedIndex].value.toUpperCase();
           // alert(filter);
           // var filter = input.value.toUpperCase();
          
            var table = document.getElementById("data");
            var tr = table.getElementsByTagName("tr");
            var td, i;
    
            for (i = 0; i < tr.length; i++) {
              td = tr[i].getElementsByTagName("td")[0];
              if (td) {
                if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
                  tr[i].style.display = "table-row";
                } else {
                  tr[i].style.display = "none";
                }
              }
            } 
      }
  
    render() {
    return (
    <div>
        <h1 id='title'>Dynamic Table Data Generation </h1>

    <table id='data'>
    <thead>
    <tr>{this.getHeader()}</tr>
    </thead>
    <tbody>
    {this.getRowsData()}
    </tbody>
    </table>
    <Pagination></Pagination>
    </div>
    
    );
    }
   }

  

 const  RenderRow = (props) =>{
    return props.keys.map((key, index)=>{
    return <td key={props.data[key]}>{props.data[key]}</td>
    })
   }

 