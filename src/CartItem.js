import React from 'react';

const CartItem = (props) =>{

        const { price,title,qty } = props.product;
        const {product,onInceaseQuantity,onDecreaseQuantity,onDelete} = props;


        return(
            <div className="cart-item">
                <div className="left-block">
                   <img style={styles.image} src={product.img} />

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

const styles = {
    image : {
        height:110,
        width :110,
        borderRadius:4,
        background:'#ccc'
    }
}

export default CartItem;