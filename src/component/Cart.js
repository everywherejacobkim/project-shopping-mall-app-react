import React from "react";
import {Table} from "react-bootstrap";
import { connect } from "react-redux";

function Cart(props) {
    return (
        <div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                    <th>#</th>
                    <th>Item</th>
                    <th>Quantity</th>
                    <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>1</td>
                    <td>{props.state[0].name}</td>
                    <td>{props.state[0].quantity}</td>
                    <td>{props.state[0].price}</td>
                    </tr>
                </tbody>
            </Table>
        </div>
    )
}

function stateProps(state){
    return {
        state : state
    }
}

export default connect(stateProps)(Cart)
// export default Cart;