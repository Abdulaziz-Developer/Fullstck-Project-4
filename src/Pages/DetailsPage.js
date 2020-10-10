import React from "react";
import DetailPage from "../components/Details/DetailPage";

class DetailsPage extends React.Component {
  render() {
    return (
      <>
        <DetailPage
          card={this.props.match.params.id}
          addToCart={this.props.addToCart}
        />
      </>
    );
  }
}

export default DetailsPage;
