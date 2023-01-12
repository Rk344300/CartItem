import React from 'react';

class CartItem extends React.Component{
    constructor(){
        super();
        this.state = {
            price : 999,
            title : 'Mobile Phone',
            qty : 1,
            img :''
        }
    }
    increaseQuantity =() =>{
        //console.log('this',this.state);

         //setState form-1
        //  this.setState({
        //    qty : this.state.qty + 1
        //  })

        //setState form-2
         this.setState((prevState) => {
            return{
                qty : prevState.qty + 1
            }
         })
    }

    decreaseQuanitity =() =>{
        this.setState((prevState) =>{
            return {
               qty : (prevState.qty != 0)? prevState.qty -1 : 0 
            }
        })
    }
    render(){
        const { price,title,qty } = this.state;
        return(
            <div className="cart-item">
                <div className="left-block">
                   <img style={styles.image} />

                </div>
                <div className="right-block">
                   <div style={{fontSize:25}}>{title}</div>
                   <div style={{color:'#777'}}>Rs.{price}</div>
                   <div style={{color:'#777'}}>Qty: {qty}</div>
                
                {/* button */}
                <div className="cart-item-actions">
                    <img 
                    alt="increase"
                    className="action-icons"
                    src="https://cdn-icons-png.flaticon.com/128/748/748113.png"
                    onClick ={this.increaseQuantity}
                    />

                   <img 
                    alt="decrease"
                    className="action-icons"
                    src="https://cdn-icons-png.flaticon.com/128/1828/1828906.png"
                    onClick ={this.decreaseQuanitity}
                    />

                   <img 
                    alt="delete"
                    className="action-icons"
                    src="https://cdn-icons-png.flaticon.com/128/1214/1214428.png"
                    />

                </div>
                </div>
            </div>
        );
    }
}

const styles = {
    image : {
        height:110,
        width :110,
        borderRadius:4,
        background:'#ccc'
    }
}

export default CartItem;