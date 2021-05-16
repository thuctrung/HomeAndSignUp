import React, { Component } from "react";
// import 'bootstrap/dist/css/bootstrap.css';
import Styles from './show';


class ViewUsers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoaded: false,
    };
  }

  componentDidMount() {
    fetch("http://localhost:8080/api/products")
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          isLoaded: true,
          items: json,
        });
      });
  }


  block_user(id){
    
  }
  render() {
    var { isLoaded, items } = this.state;

    if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <Styles>
          <table>
            <tr>
              <th>No.
              </th>
              <th>categories</th>
              <th>name</th>
              <th>detail_image</th>
              <th>description</th>
              <th>price</th>
              <th>Action</th>
            </tr>
          
         
            {items.map(item => (
              <tr key={item.id}>
                
                <td>{item.id}</td>
                <td>{item.categories}</td> 
                <td>{item.name}</td>
                <td><img src={item.detail_image} alt="" height="200" width="300" /></td>
                <td style={{}}>{item.description}</td>
                <td>{item.price}</td>
                {/* <button class="btn btn-warning" style={{marginTop: '100px'}}>EDIT</button>
                <button class="btn btn-danger"style={{marginTop: '100px'}}>DELETE</button>  */}
              </tr>
            ))}
          </table>
        </Styles>
        
      );
    }
  }
}


export default ViewUsers;