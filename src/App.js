import React, { Component } from "react";
import Header from "./components/header/header";
import Menu from "./components/menu/menu";
import Footer from "./components/footer/footer";
import Login from "./components/login/login";
import Stock from "./components/stock/stock";
import StockCreate from "./components/stockCreate";
import Register from "./components/register/register";
import Transaction from "./components/transaction";
import Shop from "./components/shop/shop";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import { server } from "./constants";
import * as actions from "../src/actions/app.action";
import { connect } from "react-redux";
import StockEdit from "./components/stockEdit";
import Report from "./components/report/report";

const isLoggedIn = () =>{
  return localStorage.getItem(server.TOKEN_KEY) != null;
}

// Protected Route
const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isLoggedIn() === true ? (
        <Component {...props} />
      ) : (
        <Redirect to="/login" />
      )
    }
  />
);


class App extends Component {
  componentDidMount(){
    this.props.appForceUpdate(this.forceUpdateEntirely)

  }
  forceUpdateEntirely = () => {
    this.forceUpdate();
  };

  render() {
    const LoginRedirect = () => (<Redirect to='/login'/>)
    return (
      <Router>
        <div>
          {isLoggedIn () ? <Header/> : null}
          {isLoggedIn () ? <Menu/> : null}
          <Route exact path="/" component={LoginRedirect}/>
          <Route path="/login" component={Login}/>
          <PrivateRoute path="/stock" component={Stock}/>
          <PrivateRoute path="/stock-create" component={StockCreate}/>
          <PrivateRoute path="/stock-edit/:id" component={StockEdit} />
          <PrivateRoute path="/report" component={Report} />
          <Route path="/transaction" component={Transaction} />
          <Route path="/shop" component={Shop} />
          <Route path="/register" component={Register}/>
          {isLoggedIn () ? <Footer/> : null}
        </div>
      </Router>
    );
  }
}

const mapStateToProps = ({ appReducer }) => ({
  appReducer
});

export default connect(
  mapStateToProps,
  actions
)(App);

