import React, { Component } from 'react';

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = { 
        list:[
            {cid:123,title:'Hello World-1'}
            {cid:456,title:'Hello World-2'}
            {cid:789,title:'Hello World-3'}
        ]
     }
  }
  render() { 
    return ( 
        <h2>Sophie.com</h2>
        <ul>
            {
                this.state.list.map((item,index)=>{
                    return (
                        <li key={index}>{item.title}</li>
                    )
                })
            }
        </ul>
     );
  }
}
 
export default Index;