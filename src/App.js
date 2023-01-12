import React from 'react';
import Cart from './Cart';
import Navbar from './Navbar';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
        products :[
            {
                price : 99,
                title : 'watch',
                qty : 1,
                img :'https://images.unsplash.com/photo-1524805444758-089113d48a6d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8d2F0Y2h8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
                id:1
               
            },
            {
                price : 999,
                title : 'Mobile Phone',
                qty : 10,
                img :'https://images.unsplash.com/photo-1565277441243-2be39689f95b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=429&q=80',
                id: 2
               
            },
            {
                price : 9999,
                title : 'Laptop',
                qty : 4,
                img :'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
                id: 3
               
            }

        ]
    }
}
handleIncreaseQuantity = (product) =>{
      console.log("we are in handleInce");
      const {products} = this.state;
      const index = products.indexOf(product);

      products[index].qty += 1;

      this.setState({
          products :products
      })

}
handleDecreaseQuantity =(product) => {
 console.log('we are in handledec');
 const {products} =this.state;
 const index = products.indexOf(product);
(products[index].qty !=0) ? products[index].qty -=1 : products[index].qty =0;

    this.setState({
        products:products
    })

}

handleDelete =(id) =>{
    const {products} = this.state;
    const items = products.filter((item) =>item.id !== id);

    this.setState({
        products : items
    })
}


  getCartCount =() =>{
    const { products } = this.state;
     let count=0;
    products.forEach((product) =>{
         count += product.qty;
    })
    return count;
  }

  getTotalPrice = () =>{
    const { products } = this.state;
    let totalPrice =0;

    products.forEach((product) =>{
          totalPrice = totalPrice + product.qty * product.price;
    })
    return totalPrice;
  }



  render(){
    const {products} = this.state;
    return (
      <div className="App">
      <Navbar count ={this.getCartCount()} />
        <Cart
           products = {products}
           onInceaseQuantity = {this.handleIncreaseQuantity}
           onDecreaseQuantity ={this.handleDecreaseQuantity}
           onDelete = {this.handleDelete}
        />
        <div>Total :{this.getTotalPrice()}</div>
      </div>
    );
  }
}

export default App;
