import React from 'react';
import Cart from './Cart';
import Navbar from './Navbar';
import firebase from 'firebase/compat/app';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
        products :[],
        loading : true
    }
}
 componentDidMount () {
    firebase
     .firestore()
     .collection('products')
     .onSnapshot((snapshot) =>{
      //console.log(snapshot);

      snapshot.docs.map((doc) =>{
        console.log(doc.data());
      })

      const products = snapshot.docs.map((doc) =>{
       const  data = doc.data();
       data['id'] = doc.id;
       
       return data;
      })

     this.setState({
       products :products,
       loading : false
     })
    })
    //  .get()
    //  .then((snapshot) =>{
    //    //console.log(snapshot);

    //    snapshot.docs.map((doc) =>{
    //      console.log(doc.data());
    //    })

    //    const products = snapshot.docs.map((doc) =>{
    //     const  data = doc.data();
    //     data['id'] = doc.id;
        
    //     return data;
    //    })

    //   this.setState({
    //     products :products,
    //     loading : false
    //   })
    //  })

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
    const { products} = this.state;
    let totalPrice =0;
   
 products.map(product => {
   if(product.qty > 0){
     totalPrice =totalPrice + product.qty * product.price;
   }
   return '';
 });
    
    return totalPrice;
  }



  render(){
    const {products , loading} = this.state;
    return (
      <div className="App">
      <Navbar count ={this.getCartCount()} />
        <Cart
           products = {products}
           onInceaseQuantity = {this.handleIncreaseQuantity}
           onDecreaseQuantity ={this.handleDecreaseQuantity}
           onDelete = {this.handleDelete}
        />
        {loading && <h1>loading products</h1>}
        <div>Total :{this.getTotalPrice()}</div>
      </div>
    );
  }
}

export default App;
