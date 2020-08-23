import React from 'react';
import PropTypes from 'prop-types';
import {
  Switch,
  Route,
  routerRedux,
} from 'dva/router';
import dynamic from 'dva/dynamic';
import { LocaleProvider } from 'antd';
import zh_CN from 'antd/lib/locale-provider/zh_CN';
import { fulu as Flayout } from 'fl-pro';


const { ConnectedRouter } = routerRedux;
const RouterWrapper = ({ history, app }) => {
  const PageForbidden = dynamic({
    app,
    component: () => import('./components/PageForbidden'),
  });

  const PageServerError = dynamic({
    app,
    component: () => import('./components/PageServerError'),
  });

  const PageNetworkError = dynamic({
    app,
    component: () => import('./components/PageNetworkError'),
  });

  const PageNotFound = dynamic({
    app,
    component: () => import('./components/PageNotFound'),
  });
  const Home = dynamic({
    app,
    component: () => import('./components/Home'),
  });
  const AddBanner = dynamic({
    app,
    component: () => import('./components/AddBanner'),
  });


  const WraperRouter = (props, WrappedComponent) => {
    return (
      <Flayout appName="福禄商户控制台" config={window.configs} {...props} defaultOpenMenu={['商城管理']} initPath="/mypage">
        <LocaleProvider locale={zh_CN}>
          <WrappedComponent {...props} />
        </LocaleProvider>
      </Flayout>
    )
  }
  return (
    <ConnectedRouter history={history}>
      <LocaleProvider locale={zh_CN}>
        <Switch>
          <Route exact path="/" render={(props) => WraperRouter(props, Home)} />
          <Route exact path="/mypage" render={(props) => WraperRouter(props, Home)} />
          <Route exact path="/addbanner" render={(props) => WraperRouter(props, AddBanner)} />
          
          {/* <Route exact path="/403" component={Flayout.Page403} msg={window.errMsg}/> */}
          {/* 500 */}
          <Route exact path="/404" render={props => WraperRouter(props, Flayout.Page404)} />
          <Route exact path="/500" render={props => WraperRouter(props, Flayout.Page500)} />
          {/* 网络错误 */}
          <Route exact path="/error" render={props => WraperRouter(props, PageNetworkError)} />
        </Switch>
      </LocaleProvider>
    </ConnectedRouter>
  );
};

RouterWrapper.propTypes = {
  history: PropTypes.object,
  app: PropTypes.object,
};

RouterWrapper.defaultProps = {};

export default RouterWrapper;

