import React from 'react';
import './Product.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button,Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
    const {name,url,price,width,height,country}=props.product;
    const element = <FontAwesomeIcon icon={faShoppingCart} />
    return (
        <div>
            <Card className="product-data" style={{ width: '18rem' }}>
                <Card.Img variant="top" src={url} style={{height:'17.9rem',width:'17.9rem'}}/>
                <Card.Body className="text-center">
                    <h5>Name      : <small>{name}</small></h5>
                    <h5>Width     : <small>{width} cm</small></h5>
                    <h5>Height    : <small>{height} cm</small></h5>
                    <h5>Country   : <small>{country}</small></h5>
                    <h5>Price     : <small>${price}</small></h5>

                </Card.Body>
                <div className="align-self-center mx-auto mb-3">
                    <Button onClick={()=>props.addToCart(props.product)}  variant="primary">{element} Add To Cart</Button>
                </div>
            </Card>
        </div>
    );
};

export default Product;