import React from 'react';
import CartItem from './CartItem';

class Cart extends React.Component{
    constructor(){
        super();
        this.state = {
            products :[
                {
                    price : 99,
                    title : 'watch',
                    qty : 1,
                    img :'',
                    id:1
                   
                },
                {
                    price : 999,
                    title : 'Mobile Phone',
                    qty : 10,
                    img :'',
                    id: 2
                   
                },
                {
                    price : 9999,
                    title : 'Laptop',
                    qty : 4,
                    img :'',
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

  render(){
     const {products} = this.state;
      return(

          <div className="cart">
           {products.map((product) =>{
               return (
                    <CartItem 
                    product = {product} 
                    key ={product.id}
                    onInceaseQuantity = {this.handleIncreaseQuantity}
                    onDecreaseQuantity ={this.handleDecreaseQuantity}
                    onDelete = {this.handleDelete}
                     />
               )
           })}
         
          </div>   
      )
  }
}

export default Cart;