import React from 'react';

class CartItem extends React.Component{
    
    //  increaseQuantity =() =>{
    // //     //console.log('this',this.state);

    // //      //setState form-1
    // //     //  this.setState({
    // //     //    qty : this.state.qty + 1
    // //     //  })

    //     //setState form-2
    //      this.setState((prevState) => {
    //         return{
    //             qty : prevState.qty + 1
    //         }
    //      })
    // }

    // decreaseQuanitity =() =>{
    //     this.setState((prevState) =>{
    //         return {
    //            qty : (prevState.qty != 0)? prevState.qty -1 : 0 
    //         }
    //     })
    // }




    render(){
        console.log('this.props' ,this.props);
        const { price,title,qty } = this.props.product;
        const {product,onInceaseQuantity,onDecreaseQuantity,onDelete} = this.props;


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
                    onClick ={() =>{onInceaseQuantity(product) }}
                    />

                   <img 
                    alt="decrease"
                    className="action-icons"
                    src="https://cdn-icons-png.flaticon.com/128/1828/1828906.png"
                    onClick ={() =>{onDecreaseQuantity(product)}}
                    />

                   <img 
                    alt="delete"
                    className="action-icons"
                    src="https://cdn-icons-png.flaticon.com/128/1214/1214428.png"
                    onClick ={() =>{onDelete(product.id)}}
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