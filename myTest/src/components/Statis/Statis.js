import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'dva';
import { Tabs } from 'antd';
import './less/orderlist.less';
import moment from 'moment';
import columns from './columns';
import { getScrollHeight } from '../../utils/common';
import qs from 'qs';
import Api from '../../configs/api';
import TopNav from '../TopNav';
import Profit from './Profit';
import Product from './Product';
import Date from './Date';

const { TabPane } = Tabs;

class Statis extends React.Component {

    static propTypes = {

    }

    static defaultProps = {

    }

    constructor(props) {
        super(props);
        this.state = {}
    }

    componentWillMount() {
    }

    init = () => {
    }

    componentWillReceiveProps(nextProps) {
    }

    render() {
        return (
            <div className="statis-index">
                <TopNav />
                <Tabs className="statis-body" type="card" animated={false} defaultActiveKey="1">
                    <TabPane tab="平台" key="1"><Profit/></TabPane>
                    <TabPane tab="商品" key="2"><Product/></TabPane>
                    <TabPane tab="日期" key="3"><Date/></TabPane>
                </Tabs>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        ...state,
    };
}
export default connect(mapStateToProps)(Statis);
