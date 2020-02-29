import React from 'react';
import TableComponent from './tableComponent';

function Home() {
    
  var data=[
    {'Name': 'Abc', 'Age': 15, 'Location': 'Bangalore'},
    {'Name': 'Def', 'Age': 43, 'Location': 'Mumbai'},
    {'Name': 'Uff', 'Age': 30, 'Location': 'Chennai'},
    {'Name': 'Ammse', 'Age': 87, 'Location': 'Delhi'},
    {'Name': 'Yysse', 'Age': 28, 'Location': 'Hyderabad'}
];
         
       
          return(
             <div>
             
                                  <TableComponent data={data}>
                 </TableComponent>
              </div>  
         )
        
}
export default Home;