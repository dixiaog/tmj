import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import { Input } from 'antd';
import IndexPage from './routes/IndexPage';
import Products from './routes/Products';
import Companys from './routes/Companys';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={IndexPage} />
        <Route path="/com" exact component={Companys} />
        <Route path="/products" exact component={Products} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;


