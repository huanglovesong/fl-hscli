import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'dva';
import { Form, Row, Col, Input, DatePicker, Select, Button, Tabs, Modal, Table, Spin } from 'antd';
import './less/orderlist.less';
import moment from 'moment';
import columns from './columns';
import {
    ResponsiveContainer, LineChart, Line, XAxis, YAxis, ReferenceLine,
    ReferenceDot, Tooltip, CartesianGrid, Legend, Brush, ErrorBar, AreaChart, Area,
    Label, LabelList
} from 'recharts';
import { getScrollHeight } from '../../utils/common';
import qs from 'qs';
import Api from '../../configs/api';
import TopNav from '../TopNav';
import mathmanage from '../../utils/mathmanage';


const FormItem = Form.Item;
const { RangePicker } = DatePicker;
const Option = Select.Option;
const TabPane = Tabs.TabPane;

@Form.create()
class Date extends React.Component {

    static propTypes = {

    }

    static defaultProps = {

    }

    constructor(props) {
        super(props);
        this.state = {
            postData: {
                PageIndex: 1,
                PageSize: 20,
                MerchantId: localStorage.getItem('MerchantId'),
                startDate: moment().subtract(7, 'days').format('YYYY-MM-DD'),
                endDate: moment().format('YYYY-MM-DD'),
            },
            linetypedata: [
                { text: '订单量', value: 1, active: true },
                { text: '销售总额', value: 2, active: false },
                { text: '成本总额', value: 3, active: false },
            ],
            filteredInfo: null,
            sortedInfo: null,
            tabtypevalue: 1,
            linedata: [],
            tablelist: [],
        }

    }

    componentWillMount() {
        this.init();
    }

    init = () => {
        this.props.dispatch({ type: 'statis/datestaticslist', params: this.state.postData });
    }

    init1 = () => {
        const { PageIndex, PageSize } = this.state.postData;
        const { tabledata, tabletotalall } = this.state;
        console.log(tabledata, 'tabledata');
        tabledata.data.current = PageIndex;
        tabledata.data.PageSize = PageSize;
        tabledata.data.pageTotal = tabledata.data.list.length / PageSize;
        tabledata.data.total = tabledata.data.list.length + 1;
        let tableDatapage = [];
        if (tabledata.data.pageTotal > PageIndex - 1) {
            tabledata.data.list.map((item, i) => {
                if ((PageIndex - 1) * PageSize - 1 < i && i < PageIndex * PageSize) {
                    tableDatapage.push(item);
                }
            })
        }
        if (tabledata.data.list.length > 0) {
            let addtotal = {
                allProductFaceValue: 0,
                buyNum: 0,
                date: "本页总计",
                orderNum: 0,
                poundage: 0,
                profit: 0,
                totalCostPrice: 0,
                totalPrice: 0,
            }
            tableDatapage.map((item, index) => {
                addtotal.allProductFaceValue = mathmanage.accAdd(addtotal.allProductFaceValue, item.allProductFaceValue);
                addtotal.orderNum = mathmanage.accAdd(addtotal.orderNum, item.orderNum);
                addtotal.poundage = mathmanage.accAdd(addtotal.poundage, item.poundage);
                addtotal.profit = mathmanage.accAdd(addtotal.profit, item.profit);
                addtotal.totalCostPrice = mathmanage.accAdd(addtotal.totalCostPrice, item.totalCostPrice);
                addtotal.totalPrice = mathmanage.accAdd(addtotal.totalPrice, item.totalPrice);
                addtotal.buyNum = mathmanage.accAdd(addtotal.buyNum, item.buyNum);
            })
            tableDatapage.push(addtotal);
            const addtotalall = {
                allProductFaceValue: tabletotalall.allProductFaceValue,
                buyNum: tabletotalall.buyNum,
                date: "查询总计",
                orderNum: tabletotalall.orderNum,
                poundage: tabletotalall.poundage,
                profit: tabletotalall.profit,
                totalCostPrice: tabletotalall.allProductFaceValue,
                totalPrice: tabletotalall.totalPrice,
            }
            tableDatapage.push(addtotalall);
        }
        this.setState({
            tablelist: tableDatapage,
            total: tabledata.data.total + Math.ceil(tabledata.data.pageTotal),
        })
    }

    componentWillReceiveProps(nextProps) {
        const { datestaticslistRes } = nextProps.statis;
        if (datestaticslistRes !== this.props.statis.datestaticslistRes) {
            if (datestaticslistRes.code === '0') {
                datestaticslistRes.data.dateStatisticsOutDtos.data.list && datestaticslistRes.data.dateStatisticsOutDtos.data.list.map((item, i) => {
                    item.index = i + 1;
                })
                this.setState({
                    orderdata: datestaticslistRes.data.dateChartStatisticsOutDto.orderQuantity,
                    salesdata: datestaticslistRes.data.dateChartStatisticsOutDto.totalSales,
                    costdata: datestaticslistRes.data.dateChartStatisticsOutDto.totalCost,
                    tabledata: datestaticslistRes.data.dateStatisticsOutDtos,
                    tabletotalall: datestaticslistRes.data.dateStatistic,
                }, () => {
                    this.linedata();
                    this.init1();
                })
            }
        }
    }

    linedata = () => {
        const { tabtypevalue, orderdata, salesdata, costdata } = this.state;
        if (tabtypevalue === 1) {
            orderdata.map((item, i) => {
                item['订单量'] = item.value
            })
            this.setState({ linedata: orderdata })
        } else if (tabtypevalue === 2) {
            salesdata.map((item, i) => {
                item['销售总额'] = item.value;
                item['净利润'] = item.value2
            })
            this.setState({ linedata: salesdata })
        } else if (tabtypevalue === 3) {
            costdata.map((item, i) => {
                item['成本总额'] = item.value;
                item['净利润'] = item.value2
            })
            this.setState({ linedata: costdata })
        }
    }

    changetype = (val) => {
        const { linetypedata } = this.state;
        linetypedata.map((item, i) => {
            item.active = false;
            if (val === item.value) {
                item.active = true
            }
        })
        this.setState({
            linetypedata,
            tabtypevalue: val,
        }, () => {
            this.linedata();
        })
    }

    serachData = () => {
        this.props.form.validateFields((err, values) => {
            if (!err) {
                const { postData } = this.state;
                postData.startDate = values.time.length > 0 && values.time[0].format('YYYY-MM-DD') || '';
                postData.endDate = values.time.length > 0 && values.time[1].format('YYYY-MM-DD') || '';
                //postData.Platform = this.state.Platform;//一级分类（平台）
                values.time = null;
                postData.PageIndex = 1;
                this.setState({ postData: { ...this.state.postData, ...values } }, () => {
                    this.init();
                });
            }
        });
    }

    handleChange = (pagination, filters, sorter) => {
        console.log('Various parameters', pagination, filters, sorter);
        this.setState({
            filteredInfo: filters,
            sortedInfo: sorter,
        });
    }

    export = () => {
        //导出
        let str = qs.stringify(this.state.postData);
        window.open(`${configs.host.test}/api/Report/dateexport/?${str}&accessToken=${localStorage.getItem('access_token')}`);
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        const { btnArr, total, tabData, productType, postData, tablelist } = this.state;
        console.log(tablelist, 'tablelist');
        const formItemLayout = {
            labelCol: {
                sm: { span: 8 },
            },
            wrapperCol: {
                sm: { span: 16 },
            },
        }
        const pagination = {
            total,
            showQuickJumper: true,
            pageSize: postData.PageSize + 2,
            current: postData.PageIndex,
            pageSizeOptions: ['30', '50', '100'],
            onShowSizeChange: (current, pageSize) => {
                this.setState({ postData: { ...postData, PageIndex: current, PageSize: postData.PageSize } }, () => {
                    this.init1();
                })
            },
            onChange: (current, pageSize) => {
                console.log(current, 'current');
                this.setState({ postData: { ...postData, PageIndex: current, PageSize: postData.PageSize } }, () => {
                    this.init1();
                })
            },
        };

        let { sortedInfo, filteredInfo } = this.state;
        sortedInfo = sortedInfo || {};
        filteredInfo = filteredInfo || {};
        const Colums = [
            // {
            //     title: '序号',
            //     dataIndex: 'index',
            //     key: 'index',
            // },
            {
                title: '日期',
                dataIndex: 'date',
                key: 'date',
                sorter: (a, b) => a.date - b.date,
                sortOrder: sortedInfo.columnKey === 'date' && sortedInfo.order,
            },
            {
                title: '订单量',
                dataIndex: 'orderNum',
                key: 'orderNum',
                sorter: (a, b) => a.orderNum - b.orderNum,
                sortOrder: sortedInfo.columnKey === 'orderNum' && sortedInfo.order,
            },
            {
                title: '购买数量',
                dataIndex: 'buyNum',
                key: 'buyNum',
                sorter: (a, b) => a.buyNum - b.buyNum,
                sortOrder: sortedInfo.columnKey === 'buyNum' && sortedInfo.order,
            },
            {
                title: '销售总额',
                dataIndex: 'totalPrice',
                key: 'totalPrice',
                sorter: (a, b) => a.totalPrice - b.totalPrice,
                sortOrder: sortedInfo.columnKey === 'totalPrice' && sortedInfo.order,
                render: (text, record) => <span>{text && `${text}元` || '0元'}</span>
            },
            {
                title: '成本总额',
                dataIndex: 'totalCostPrice',
                key: 'totalCostPrice',
                sorter: (a, b) => a.totalCostPrice - b.totalCostPrice,
                sortOrder: sortedInfo.columnKey === 'totalCostPrice' && sortedInfo.order,
                render: (text, record) => <span>{text && `${text}元` || '0元'}</span>
            },
            {
                title: '商品总面值',
                dataIndex: 'allProductFaceValue',
                key: 'allProductFaceValue',
                sorter: (a, b) => a.allProductFaceValue - b.allProductFaceValue,
                sortOrder: sortedInfo.columnKey === 'allProductFaceValue' && sortedInfo.order,
                render: (text, record) => <span>{text && `${text}元` || '0元'}</span>
            },
            {
                title: '手续费',
                dataIndex: 'poundage',
                key: 'poundage',
                sorter: (a, b) => a.poundage - b.poundage,
                sortOrder: sortedInfo.columnKey === 'poundage' && sortedInfo.order,
                render: (text, record) => <span>{text && `${text}元` || '0元'}</span>
            },
            {
                title: '净利润',
                dataIndex: 'profit',
                key: 'profit',
                sorter: (a, b) => a.profit - b.profit,
                sortOrder: sortedInfo.columnKey === 'profit' && sortedInfo.order,
                render: (text, record) => <span>{text && `${text}元` || '0元'}</span>
            },
        ];

        return (
            <div>
                <div className="datedata">
                    <Form>
                        <Row>
                            <Col span={120}>
                                <span className="timelable">下单时间:</span>
                                <div className="timepiker">
                                <FormItem>
                                    {getFieldDecorator('time', {
                                        initialValue: [moment().subtract(7, 'days'), moment()],
                                        rules: [{ required: false, message: '请选择时间' }]
                                    })(
                                        <RangePicker
                                            className="timepicker"
                                        />
                                    )}
                                </FormItem>
                                </div>
                                <div className="btns">
                                    <Button onClick={this.serachData} type="primary" className="btn search-btn" htmlType="submit">查询</Button>
                                    <Button onClick={() => { this.props.form.resetFields() }} className="btn search-btn">重置</Button>
                                    <Button onClick={this.export} className="btn export-btn">导出</Button>
                                </div>
                            </Col>
                        </Row>
                    </Form>
                    <div className="charts-body">
                        <div className="tab">
                            <ul>
                                {
                                    this.state.linetypedata.map((item, i) => (
                                        <li className={item.active && 'active' || ''} key={i} onClick={() => { this.changetype(item.value, i) }}>{item.text}</li>
                                    ))
                                }
                            </ul>
                        </div>
                        <div className="chart-line">
                            {
                                this.state.tabtypevalue === 1 ?
                                    <LineChart width={document.body.clientWidth - 320} height={300} data={this.state.linedata}
                                        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                                        <XAxis dataKey="name" />
                                        <YAxis />
                                        <CartesianGrid strokeDasharray="3 3" />
                                        <Tooltip />
                                        <Legend />
                                        <Line type="monotone" dataKey="订单量" stroke="#6DA9ED " activeDot={{ r: 8 }} />
                                    </LineChart> : this.state.tabtypevalue === 2 ?
                                        <LineChart width={document.body.clientWidth - 320} height={300} data={this.state.linedata}
                                            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                                            <XAxis dataKey="name" />
                                            <YAxis />
                                            <CartesianGrid strokeDasharray="3 3" />
                                            <Tooltip />
                                            <Legend />
                                            <Line type="monotone" dataKey="销售总额" stroke="#6DA9ED " activeDot={{ r: 8 }} />
                                            <Line type="monotone" dataKey="净利润" stroke="#000 " />
                                        </LineChart> :
                                        <LineChart width={document.body.clientWidth - 320} height={300} data={this.state.linedata}
                                            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                                            <XAxis dataKey="name" />
                                            <YAxis />
                                            <CartesianGrid strokeDasharray="3 3" />
                                            <Tooltip />
                                            <Legend />
                                            <Line type="monotone" dataKey="成本总额" stroke="#6DA9ED " activeDot={{ r: 8 }} />
                                            <Line type="monotone" dataKey="净利润" stroke="#000 " />
                                        </LineChart>
                            }
                        </div>
                    </div>
                    <Spin spinning={!!(this.props.loading && this.props.loading.effects['statis/productstatislist'])}>
                        <Table pagination={pagination} onChange={this.handleChange} scroll={{ x: 100 }} className="statistable" rowKey={tablelist.index} rowSelection={null} columns={Colums} dataSource={tablelist} />
                    </Spin>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        ...state,
    };
}
export default connect(mapStateToProps)(Date);
