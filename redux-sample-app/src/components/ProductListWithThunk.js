import React, { Component } from "react";
import { getAllProducts } from "../stateManagement/actions/productThunkActions";
import { connect } from "react-redux";

class ProductListWithThunk extends Component {
  componentDidMount(){
    this.props.getAll();
  }
  render() {
    return (
      <div>
        <h1>Product List With Thunk</h1>
        {this.props.isLoading ? <div>loading data from server ...</div> : null}
        {this.props.message ? <div>{this.props.message}</div> : null}
        <table className="table table-striped table-bordered">
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Price</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.props.products.map((item) => (
              <tr key={item.productId}>
                <td>{item.productId}</td>
                <td>{item.productName}</td>
                <td>{item.unitPrice}</td>
                <td>
                    <button className="btn btn-danger btn-sm" 
                    onClick={() => this.props.removeProduct(item.productId)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

//state = store
//products => this.props.products
// const mapStateToProps = (state = {
//   products: state.productState.items,
// });

//برای خواندن اطلاعات از ریداکس
function mapStateToProps(state) {
  return {
    products: state.productThunkState.items,
    isLoading: state.productThunkState.isLoading,
    message: state.productThunkState.message,
  };
}

//برای نوشتن و تغییر در ریداکس
const mapDispatchToProps = dispatch => {
    return {
        getAll : (id) => getAllProducts(dispatch),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductListWithThunk);
