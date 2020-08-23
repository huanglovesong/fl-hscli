import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'dva';
import { Form, Row, Col, Input, DatePicker, Select, Button, Tabs, Modal, Table, Spin } from 'antd';
import './less/orderlist.less';
import moment from 'moment';
import columns from './columns';
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
class Profit extends React.Component {

    static propTypes = {

    }

    static defaultProps = {

    }

    constructor(props) {
        super(props);
        this.state = {
            productType: [
                { title: '话费', key: '1' },
                { title: '流量', key: '2' },
                { title: '卡密', key: '3' },
                { title: '直充', key: '4' },
            ],
            // orderStatus: [
            //     { title: '全部', key: '-1' },
            //     { title: '未支付', key: '1' },
            //     { title: '充值成功', key: '2' },
            //     { title: '充值失败', key: '3' },
            //     { title: '处理中', key: '4' },
            //     { title: '支付成功', key: '5' },
            //     { title: '支付失败', key: '6' },
            //     { title: '退款', key: '7' },
            // ],
            tableData: [],
            tabData: [],
            postData: {
                PageIndex: 1,
                PageSize: 20,
                Platform: 0,
                MerchantId: localStorage.getItem('MerchantId'),
                StartOrderDate: moment().subtract(7, 'days').format('YYYY-MM-DD'),
                EndOrderDate: moment().format('YYYY-MM-DD'),
            },
            visible: false,
        }

    }

    componentWillMount() {
        //获取所有平台
        this.props.dispatch({ type: 'orderlist/platList' });
        //this.init();
        this.setState({
            btnArr: window.getAuthButtons(),
        })
        console.log(window.getAuthButtons())
        //判断商户类型
        this.props.dispatch({ type: 'mypage/getmerinfo' });
    }

    init = () => {
        //this.props.dispatch({ type: 'orderlist/fittotal', params: this.state.postData });
        const { profitType } = this.state;
        //通过不同的分润模式,请求不同的列表
        if (profitType === 0) {
            //售价分润
            this.props.dispatch({ type: 'statis/saleProfit', params: this.state.postData })
        } else if (profitType === 3) {
            //密价分润
            this.props.dispatch({ type: 'statis/miProfit', params: this.state.postData })
        } else if (profitType === 1) {
            //密价
            this.props.dispatch({ type: 'statis/profit', params: this.state.postData })
        }
    }

    init1 = () => {
        const { PageIndex, PageSize } = this.state.postData;
        const { fittotal, profitType } = this.state;
        console.log(fittotal, 'fittotal');
        fittotal.data.current = PageIndex;
        fittotal.data.PageSize = PageSize;
        fittotal.data.pageTotal = fittotal.data.data.length / PageSize;
        fittotal.data.total = fittotal.data.data.length + 1;
        let tableDatapage = [];
        if (fittotal.data.pageTotal > PageIndex - 1) {
            fittotal.data.data.map((item, i) => {
                if ((PageIndex - 1) * PageSize - 1 < i && i < PageIndex * PageSize) {
                    tableDatapage.push(item);
                }
            })
        }
        // if (fittotal.data.profitDetails.length > 0) {
        //     let addtotal = {
        //         allotProfit: 0,
        //         buyNum: 0,
        //         costPrice: 0,
        //         grossProfit: 0,
        //         orderId: "本页总计",
        //         poundage: 0,
        //         productId: "",
        //         productName: "",
        //         profit: 0,
        //         salePrice: 0,
        //         totalCostPrice: 0,
        //         totalPrice: 0,
        //     }
        //     tableDatapage.map((item, index) => {
        //         addtotal.buyNum = mathmanage.accAdd(addtotal.buyNum, item.buyNum);
        //         addtotal.allotProfit = mathmanage.accAdd(addtotal.allotProfit, item.allotProfit);
        //         addtotal.grossProfit = mathmanage.accAdd(addtotal.grossProfit, item.grossProfit);
        //         addtotal.profit = mathmanage.accAdd(addtotal.profit, item.profit);
        //         addtotal.poundage = mathmanage.accAdd(addtotal.poundage, item.poundage);
        //         addtotal.totalCostPrice = mathmanage.accAdd(addtotal.totalCostPrice, item.totalCostPrice);
        //         //addtotal.shareProfit += Number(item.shareProfit);
        //         addtotal.totalPrice = mathmanage.accAdd(addtotal.totalPrice, item.totalPrice);
        //         addtotal.netProfit = mathmanage.accAdd(addtotal.netProfit, item.netProfit);
        //         addtotal.costPrice = mathmanage.accAdd(addtotal.costPrice, item.costPrice);
        //         addtotal.salePrice = mathmanage.accAdd(addtotal.salePrice, item.salePrice);
        //     })
        //     tableDatapage.push(addtotal);
        // }
        // const addtotalall = {
        //     allotProfit: fittotal.data.profitTotal.shareProfit,
        //     buyNum: fittotal.data.profitTotal.buyNum,
        //     costPrice: fittotal.data.profitTotal.costPrice,
        //     grossProfit: fittotal.data.profitTotal.grossProfit,
        //     orderId: "查询总计",
        //     poundage: fittotal.data.profitTotal.poundage,
        //     productId: fittotal.data.profitTotal.productId,
        //     productName: fittotal.data.profitTotal.productName,
        //     profit: fittotal.data.profitTotal.netProfit,
        //     salePrice: fittotal.data.profitTotal.salePrice,
        //     totalCostPrice: fittotal.data.profitTotal.costPriceTotal,
        //     totalPrice: fittotal.data.profitTotal.salePriceTotal,
        // }

        if (fittotal.data.data.length > 0) {
            let addtotalall = null;
            if (profitType === 0) {
                addtotalall = {
                    orderId: "查询总计",
                    salePrice: fittotal.data.salePrice,
                    allotProfit: fittotal.data.allotProfit,
                }
            } else if (profitType === 3) {
                addtotalall = {
                    orderId: "查询总计",
                    costPrice: fittotal.data.costPrice,
                    salePrice: fittotal.data.salePrice,
                    allotProfit: fittotal.data.allotProfit,
                }
            } else if (profitType === 1) {
                addtotalall = {
                    orderId: "查询总计",
                    costPrice: fittotal.data.costPrice,
                    salePrice: fittotal.data.salePrice,
                    profit: fittotal.data.profit,
                }
            }
            tableDatapage.push(addtotalall);
        }

        this.setState({
            tableData: tableDatapage,
            total: fittotal.data.total + Math.ceil(fittotal.data.pageTotal),
        })
    }

    componentWillReceiveProps(nextProps) {
        const { platList, fittotal } = nextProps.orderlist;
        const { getmerinfo } = nextProps.mypage;
        const { saleProfitRes, miProfitRes, profitRes } = nextProps.statis;
        if (saleProfitRes !== this.props.statis.saleProfitRes) {
            if (saleProfitRes.code === '0') {
                saleProfitRes.data.data.length > 0 && saleProfitRes.data.data.map((item, i) => {
                    item.index = i + 1;
                })
                this.setState({
                    fittotal: saleProfitRes,
                    //total: fittotal.data.total,
                }, () => {
                    this.init1();
                })
            }
        }
        if (miProfitRes !== this.props.statis.miProfitRes) {
            if (miProfitRes.code === '0') {
                miProfitRes.data.data.length > 0 && miProfitRes.data.data.map((item, i) => {
                    item.index = i + 1;
                })
                this.setState({
                    fittotal: miProfitRes,
                    //total: fittotal.data.total,
                }, () => {
                    this.init1();
                })
            }
        }
        if (profitRes !== this.props.statis.profitRes) {
            if (profitRes.code === '0') {
                profitRes.data.data.length > 0 && profitRes.data.data.map((item, i) => {
                    item.index = i + 1;
                })
                this.setState({
                    fittotal: profitRes,
                    //total: fittotal.data.total,
                }, () => {
                    this.init1();
                })
            }
        }
        if (getmerinfo !== this.props.mypage.getmerinfo) {
            if (getmerinfo.code === '0') {
                this.setState({
                    profitType: getmerinfo.data.profitType
                }, () => {
                    this.init()
                })

            }
        }
        if (platList !== this.props.orderlist.platList) {
            if (platList.code === "0") {
                platList.data.list.unshift({ id: 0, platformName: "全部" })
                this.setState({
                    tabData: platList.data.list,
                    Platform: platList.data.list.length > 0 ? platList.data.list[0].id : '',
                })
            }
        }
        if (fittotal !== this.props.orderlist.fittotal) {
            //const { PageIndex, PageSize } = this.state.postData;
            if (fittotal.code === '0') {
                fittotal.data.profitDetails.length > 0 && fittotal.data.profitDetails.map((item, i) => {
                    item.index = i + 1;
                })
                this.setState({
                    fittotal,
                    //total: fittotal.data.total,
                }, () => {
                    this.init1();
                })
            }
            //this.init1();
        }
    }

    detail = () => {
        this.setState({
            visible: true
        })
    }

    afterS = () => {

    }

    handleCancel = () => {
        this.setState({
            visible: false
        })
    }

    serachData = () => {
        this.props.form.validateFields((err, values) => {
            if (!err) {
                const { postData } = this.state;
                postData.StartOrderDate = values.time.length > 0 && values.time[0].format('YYYY-MM-DD') || '';
                postData.EndOrderDate = values.time.length > 0 && values.time[1].format('YYYY-MM-DD') || '';
                values.time = null;
                console.log({ ...this.state.postData, ...values }, 12);
                postData.PageIndex = 1;
                this.setState({ postData: { ...this.state.postData, ...values } }, () => {
                    //this.props.dispatch({ type: 'orderlist/fittotal', params: this.state.postData });
                    this.init();
                });
            }
        });
    }

    changeTab = (values) => {
        const { postData } = this.state;
        postData.Platform = values;
        this.setState({
            postData
        }, () => {
            //this.props.dispatch({ type: 'orderlist/fittotal', params: this.state.postData });
            this.init();
        })
    }

    export = () => {
        this.props.form.validateFields((err, values) => {
            if (!err) {
                const { postData } = this.state;
                postData.StartOrderDate = values.time.length > 0 && values.time[0].format('YYYY-MM-DD') || '';
                postData.EndOrderDate = values.time.length > 0 && values.time[1].format('YYYY-MM-DD') || '';
                values.time = null;
                console.log({ ...this.state.postData, ...values }, 12);
                postData.PageIndex = 1;
                this.setState({ postData: { ...this.state.postData, ...values } }, () => {
                    let str = qs.stringify(this.state.postData);
                    const { profitType } = this.state;
                    //通过不同的分润模式,请求不同的列表
                    if (profitType === 0) {
                        //售价分润
                        window.open(`${configs.host.test}${Api.saleProfitExport}/?${str}&accessToken=${localStorage.getItem('access_token')}`);
                    } else if (profitType === 3) {
                        //密价分润
                        window.open(`${configs.host.test}${Api.miProfitExport}/?${str}&accessToken=${localStorage.getItem('access_token')}`);
                    } else if (profitType === 1) {
                        //密价
                        window.open(`${configs.host.test}${Api.profitExport}/?${str}&accessToken=${localStorage.getItem('access_token')}`);
                    }
                });
            }
        });
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        const { btnArr, total, tabData, productType, tableData, postData, profitType } = this.state;
        const formItemLayout = {
            labelCol: {
                sm: { span: 8 },
            },
            wrapperCol: {
                sm: { span: 16 },
            },
        }
        // const rowSelection = {
        //     onChange: (selectedRowKeys, selectedRows) => {
        //         console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
        //         this.setState({ selectedRows });
        //     },
        //     getCheckboxProps: record => ({
        //         disabled: record.name === 'Disabled User', // Column configuration not to be checked
        //         name: record.name,
        //     }),
        // };
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

        // const columns = postData.Platform === '2' ? columns.tableColums1 : (
        //     profitType === 0 ? columns.soujiaColums1 : profitType === 1 ?
        //     //columns.tableColums
        // )
        let tablecolumn = '';
        if (postData.Platform === '2') {
            tablecolumn = columns.tableColums1
        } else {
            if (profitType === 0) {
                tablecolumn = columns.soujiaColums1
            } else if (profitType === 3) {
                tablecolumn = columns.mijiaColums1
            } else if (profitType === 1) {
                tablecolumn = columns.defalutColums1
            }
        }

        return (
            <div>
                <div className="orderlist">
                    <Form>
                        <Row>
                            <Col span={6}>
                                <FormItem {...formItemLayout} label="商品属性">
                                    {getFieldDecorator('ProductAttr', {
                                        initialValue: ''
                                    })(
                                        <Select>
                                            {
                                                productType && productType.map((v, i) => (
                                                    <Option key={i} value={v.key}>{v.title}</Option>
                                                ))
                                            }
                                        </Select>
                                    )}
                                </FormItem>
                            </Col>
                            <Col span={7}>
                                <FormItem {...formItemLayout} label="商品名称">
                                    {getFieldDecorator('ProductName', {
                                        initialValue: ''
                                    })(
                                        <Input />
                                    )}
                                </FormItem>
                            </Col>
                            <Col className="top-col" span={11}>
                                <FormItem {...{
                                    labelCol: {
                                        sm: { span: 5 },
                                    },
                                    wrapperCol: {
                                        sm: { span: 19 },
                                    },
                                }} label="下单时间">
                                    {getFieldDecorator('time', {
                                        initialValue: [moment().subtract(7, 'days'), moment()],
                                        rules: [{ required: true, message: '请选择时间' }]
                                    })(
                                        <RangePicker
                                            className="timepicker"
                                        />
                                    )}
                                </FormItem>
                            </Col>
                        </Row>
                        <Row>
                            <Col className="top-col" span={6}>
                                <FormItem {...formItemLayout} label="订单编号">
                                    {getFieldDecorator('orderId', {
                                        initialValue: ''
                                    })(
                                        <Input />
                                    )}
                                </FormItem>
                            </Col>
                            <Col span={7}>
                                <FormItem {...formItemLayout} label="商品编号">
                                    {getFieldDecorator('ProductId', {
                                        initialValue: ''
                                    })(
                                        <Input />
                                    )}
                                </FormItem>
                            </Col>
                            <Col className="serachbtns" span={11}>
                                <Button onClick={this.serachData} type="primary" className="search-btn" htmlType="submit">查询</Button>
                                {
                                    btnArr.find(v => v.enCode === 'lr-export') && <Button onClick={this.export} type="primary" className="search-btn">导出</Button>
                                }
                                <Button onClick={() => { this.props.form.resetFields() }} className="search-btn">重置</Button>
                            </Col>
                        </Row>
                    </Form>
                    <Tabs onChange={this.changeTab} type="card">
                        {
                            tabData && tabData.map((item, i) => (
                                <TabPane tab={item.platformName} key={item.id}></TabPane>
                            ))
                        }
                    </Tabs>
                    <Spin spinning={!!(this.props.loading && this.props.loading.effects['orderlist/fittotal'])}>
                        <Table pagination={pagination} scroll={{ x: 1550 }} className="statistable" rowKey={tableData.id} rowSelection={null} columns={tablecolumn} dataSource={tableData} />
                    </Spin>
                    <Modal
                        title="订单明细表"
                        visible={this.state.visible}
                        onOk={this.handleOk}
                        onCancel={this.handleCancel}
                    >
                    </Modal>
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
export default connect(mapStateToProps)(Profit);
