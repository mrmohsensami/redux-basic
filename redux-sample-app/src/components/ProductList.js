import React, { Component } from "react";
import { getAll, remove } from "../stateManagement/actions/productActions";
import { connect } from "react-redux";
import { ThemeContext } from "../App";

class ProductList extends Component {
  render() {
    return (
      <div>
        <ThemeContext.Consumer>
          {(theme) => <h1 style={{ backgroundColor: theme   }}>Product List</h1>}
        </ThemeContext.Consumer>

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
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.productName}</td>
                <td>{item.price}</td>
                <td>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => this.props.removeProduct(item.id)}
                  >
                    Delete
                  </button>
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
    products: state.productState.items,
  };
}

//برای نوشتن و تغییر در ریداکس
const mapDispatchToProps = (dispatch) => {
  return {
    removeProduct: (id) => dispatch(remove(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
