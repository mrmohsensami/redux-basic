import React, { Component } from "react";
import { connect } from "react-redux";
import { categoryFetchRequested } from "../stateManagement/actions/categoryActions";

class CategoryList extends Component {
  componentDidMount(){
    this.props.fetchCategories();
  }
  render() {
    return (
      <div>
        <h1>Category List With Saga</h1>
        {this.props.isLoading ? <div>loading data</div> : null}
        {this.props.message  ? <div>Error Message : {this.props.message}</div> : null}
        {
          this.props.categories.map(item => <a className="btn btn-outline-secondary m-1">
            {item.categoryName}
          </a>)
        }
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    categories: state.categoryState.items,
    isLoading: state.categoryState.isLoading,
    message: state.categoryState.message,
  };
}

const mapDispatchToProps = dispatch => {
  return {
      fetchCategories : () => dispatch(categoryFetchRequested()),
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(CategoryList);
