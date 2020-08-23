import 'babel-polyfill';
import dva from 'dva';
import createLoading from 'dva-loading';
import createHistory from 'history/createBrowserHistory';
// import createHistory from 'history/createHashHistory';
import { message } from 'antd';
import './assets/common.less';

// =======================
// 1. Initialize
// =======================
const app = dva({
  history: createHistory(),
  onError(e, dispatch) {

  },
});
import { default as home } from './models/home';
app.model(home);

// =======================
// 2. Plugins
// =======================
app.use(createLoading());

// =======================
// 3. Model
// =======================
// Moved to router.js

// =======================
// 4. Router
// =======================
app.router(require('./Router'));

// =======================
// 5. Start
// =======================
app.start('#app');
