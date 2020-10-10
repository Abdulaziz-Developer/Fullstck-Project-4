import React from "react";
import Homepage from "./Pages/Homepage";
import Cart from "./Pages/Cart";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Newsletter from "./components/SignUpNews/newsletter";
import { BrowserRouter, Route } from "react-router-dom";
import DetailsPage from "./Pages/DetailsPage";

class App extends React.Component {
  state = {
    cart: [],
  };

  addToCart = (item) => {
    if (item) {
      this.setState({
        cart: [...this.state.cart, item],
      });
    }
  };

  render() {
    return (
      <BrowserRouter>
        <Header />
        <>
          <Route
            exact
            path="/"
            render={() => <Homepage disableHeader={this.disableHeader} />}
          />
        </>
        <>
          <Route
            exact
            path="/details/:id"
            render={(props) => (
              <DetailsPage addToCart={this.addToCart} {...props} />
            )}
          />
        </>
        <>
          <Route
            exact
            path="/cart"
            render={() => (
              <Cart cart={this.state.cart} removeItem={this.deleteItem} />
            )}
          />
        </>
        <Newsletter />
        <Footer />
      </BrowserRouter>
    );
  }
}

export default App;
