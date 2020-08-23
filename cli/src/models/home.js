import * as home from '../services/home';

export default {
    //表示对于整个应用不同的命名空间,以便通过this.props.home,规范保证命名空间和当前页面js名称相同
    namespace: 'home',
    state: {},  // 表示当前的example中的state状态，这里可以给初始值
    effects: {
        *mypage({ payload, callback }, { call, put }) {
            const testRes = yield call(home.mypage, payload);
            //这里的put表示存储在当前命名空间home中，通过success方法存在当前state中
            yield put({
                type: 'success',
                payload: {
                    mypageResult: testRes
                }
            });
            // 回调函数
            callback && callback(testRes);
            // 可以promise.then使用
            return testRes;
        }
    },
    //用来保存更新state值 上面的put方法调用这里的方法
    reducers: {
        success(state, { payload }) {
            return {
                ...state,
                ...payload
            }
        }
    }
}