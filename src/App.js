import React from 'react';
import Cart from './Cart';
import Navbar from './Navbar';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
        products :[],
        loading : true
    }
    // this.db = firebase.firestore();
}
 componentDidMount () {
    firebase
     .firestore()
    //this.db
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

      // products[index].qty += 1;

      // this.setState({
      //     products :products
      // })

      const docRef = firebase.firestore().collection('products').doc(products[index].id);

      docRef
      .update({
        qty:products[index].qty + 1
      })
      .then(() =>{
        console.log("update successfully");
      })
      .catch((error) =>{
        console.log('error',error);
      })

}
handleDecreaseQuantity =(product) => {
 console.log('we are in handledec');
 const {products} =this.state;
 const index = products.indexOf(product);

 const docRef = firebase.firestore().collection('products').doc(products[index].id);

 docRef
 .update({
   qty:products[index].qty > 0 ? products[index].qty - 1 : 0
 })
 .then(() =>{
   console.log("update successfully");
 })
 .catch((error) =>{
   console.log('error',error);
 })

// (products[index].qty !=0) ? products[index].qty -=1 : products[index].qty =0;

//     this.setState({
//         products:products
//     })

}

handleDelete =(id) =>{
    const {products} = this.state;
    // const items = products.filter((item) =>item.id !== id);

    // this.setState({
    //     products : items
    // })


    const docRef = firebase.firestore().collection('products').doc(id);

    docRef
      .delete()
      .then(() =>{
        console.log("deleted successfully");
      })
      .catch((error) =>{
        console.log('error',error);
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

  addProduct () {
      firebase
      .firestore()
      // this.db
        .collection('products')
        .add({
          img:'',
          price:400,
          qty:2,
          title:'washing machine'
        })
        .then((docRef) =>{
          console.log("product added",docRef);
        })
        .catch((error) =>{
          console.log(error);
        })
  }


  render(){
    const {products , loading} = this.state;
    return (
      <div className="App">
      <Navbar count ={this.getCartCount()} />
      <button onClick={this.addProduct} style ={{padding:20,fontSize:20}}>Add a Product</button>
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
