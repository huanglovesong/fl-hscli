import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'dva';
import { Form, Icon, Table, Spin } from 'antd';
import './less/orderlist.less';
import moment from 'moment';
import { getScrollHeight } from '../../utils/common';
import {
    G2,
    Chart,
    Geom,
    Axis,
    Tooltip,
    Coord,
    Label,
    Legend,
    View,
    Guide,
    Shape,
    Facet,
    Util
} from "bizcharts";
//import DataSet from "@antv/data-set";

//@Form.create()
class Product extends React.Component {

    static propTypes = {

    }

    static defaultProps = {

    }

    constructor(props) {
        super(props);
        this.state = {
            bardata: [],
            postData: {
                PageIndex: 1,
                PageSize: 2,
            },
            lastmaxvalue: '',
            yvalueArr: [],
            yvaluelist: [],
            xvalue: [],
            filteredInfo: null,
            sortedInfo: null,
            tableData: [],
            bartypevalue:1,
            typelist: [
                { text: '订单量', value: 1, active: true },
                { text: '销售总额', value: 2, active: false },
                { text: '净利润', value: 3, active: false },
            ],
        }

    }

    componentWillMount() {
        // 请求图表
        this.props.dispatch({ type: 'statis/ordertop10', params: { merchantId: localStorage.getItem('MerchantId') } });
        this.init();
        //----------替换
    }

    // datasort1 = () => {
    //     //计算x轴的数值分布
    //     //1.找出最大值 2.计算最大值的位数 3. 最大值除（1后面是位数的0的个数 例：1000） 4.向上取整 5.乘以1后加位数的0 6.10等分
    //     const { bardata } = this.state;
    //     const { bardataall } = this.state;
    //     const { maxvalue } = this.state;
    //     //------------替换
    //     //let maxvalue = bardata.length > 0 && bardataall.data.negativeOrderQuantity[0].value;
    //     //let maxvalue = bardata.length > 0 && bardata[0].value;
    //     //-------------替换
    //     let maxlength = String(maxvalue).split('.')[0];
    //     let defaultvalue = '1';
    //     for (var i = 1; i < maxlength.length; i++) {
    //         defaultvalue += '0'
    //     }
    //     const lastmaxvalue = Math.ceil(maxvalue / defaultvalue) * defaultvalue;
    //     let arr = [];
    //     let arrvalue = [];
    //     let arrx = [];
    //     for (var i = 0; i < bardata.length; i++) {
    //         arrx.push(i);
    //     }
    //     for (var i = 0; i < 10; i++) {
    //         arr.push(lastmaxvalue / 10 * i);
    //     }
    //     if (lastmaxvalue < 10) {
    //         for (var i = 0; i < lastmaxvalue + 1; i++) {
    //             arrvalue.push(i);
    //         }
    //     } else {
    //         for (var i = 0; i < 11; i++) {
    //             arrvalue.push(lastmaxvalue / 10 * i);
    //         }
    //     }
    //     this.setState({
    //         lastmaxvalue: lastmaxvalue,
    //         yvalueArr: arr,
    //         yvaluelist: arrvalue,
    //         xvalue: arrx
    //     });
    // }

    init = () => {
        this.props.dispatch({ type: 'statis/productstatislist', params: { merchantId: localStorage.getItem('MerchantId') } });
    }

    init1 = () => {
        const { PageIndex, PageSize } = this.state.postData;
        console.log(PageSize, 'PageSize');
        const { productRes } = this.state;
        productRes.data.current = PageIndex;
        productRes.data.PageSize = PageSize;
        productRes.data.pageTotal = productRes.data.list.length / PageSize;
        productRes.data.total = productRes.data.list.length;
        console.log(productRes.data.list.length);
        console.log(productRes.data.pageTotal, '页数');
        let tableDatapage = [];
        if (productRes.data.pageTotal > PageIndex - 1) {
            productRes.data.list.length > 0 && productRes.data.list.map((item, i) => {
                if ((PageIndex - 1) * PageSize - 1 < i && i < PageIndex * PageSize) {
                    tableDatapage.push(item);
                }
            })
        }
        console.log(tableDatapage, 'tableDatapage111');

        this.setState({
            tableData: tableDatapage,
            total: productRes.data.total,
        })
    }

    componentWillReceiveProps(nextProps) {
        const { ordertop10Res, salestop10Res, netprotop10Res, productstatislistRes } = nextProps.statis;
        if (ordertop10Res !== this.props.statis.ordertop10Res) {
            if (ordertop10Res.code === '0') {
                ordertop10Res.data.positiveOrderQuantity.length > 0 && ordertop10Res.data.positiveOrderQuantity.map((item,i)=>{
                    item['订单量'] = item.value
                })
                ordertop10Res.data.negativeOrderQuantity.length > 0 && ordertop10Res.data.negativeOrderQuantity.map((item,i)=>{
                    item['订单量'] = item.value
                })
                this.setState({
                    bardata: ordertop10Res.data.positiveOrderQuantity,
                    bardataall: ordertop10Res,
                    maxvalue: ordertop10Res.data.negativeOrderQuantity.length > 0 && ordertop10Res.data.negativeOrderQuantity[0].value
                }, () => {
                    //this.datacolor();
                })
            }
        }
        if (salestop10Res !== this.props.statis.salestop10Res) {
            if (salestop10Res.code === '0') {
                salestop10Res.data.positiveTotalSales.length > 0 && salestop10Res.data.positiveTotalSales.map((item,i)=>{
                    item['销售总额'] = item.value
                })
                salestop10Res.data.negativeTotalSales.length > 0 && salestop10Res.data.negativeTotalSales.map((item,i)=>{
                    item['销售总额'] = item.value
                })
                this.setState({
                    bardata: salestop10Res.data.positiveTotalSales,
                    bardataall: salestop10Res,
                    maxvalue: salestop10Res.data.negativeTotalSales.length > 0 && salestop10Res.data.negativeTotalSales[0].value
                }, () => {
                    //this.datacolor();
                })
            }
        }
        if (netprotop10Res !== this.props.statis.netprotop10Res) {
            if (netprotop10Res.code === '0') {
                netprotop10Res.data.positiveNetProfit.length > 0 && netprotop10Res.data.positiveNetProfit.map((item,i)=>{
                    item['净利润'] = item.value
                })
                netprotop10Res.data.negativeNetProfit.length > 0 && netprotop10Res.data.negativeNetProfit.map((item,i)=>{
                    item['净利润'] = item.value
                })
                this.setState({
                    bardata: netprotop10Res.data.positiveNetProfit,
                    bardataall: netprotop10Res,
                    maxvalue: netprotop10Res.data.negativeNetProfit.length > 0 && netprotop10Res.data.negativeNetProfit[0].value
                }, () => {
                    //this.datacolor();
                })
            }
        }
        if (productstatislistRes !== this.props.statis.productstatislistRes) {
            if (productstatislistRes.code === '0') {
                this.setState({
                    productRes: productstatislistRes
                }, () => {
                    this.init1();
                })
            }
        }
    }

    barchange = (val) => {
        const { typelist } = this.state;
        typelist.map((item, i) => {
            item.active = false;
            if (val === item.value) {
                item.active = true
            }
        })
        this.setState({
            typelist,
            bartypevalue: val,
        })
        if (val === 1) {
            this.props.dispatch({ type: 'statis/ordertop10', params: { merchantId: localStorage.getItem('MerchantId') } });
        } else if (val === 2) {
            this.props.dispatch({ type: 'statis/salestop10', params: { merchantId: localStorage.getItem('MerchantId') } });
        } else if (val === 3) {
            this.props.dispatch({ type: 'statis/netprotop10', params: { merchantId: localStorage.getItem('MerchantId') } });
        }
    }

    up = () => {
        const { bartypevalue } = this.state;
        if (bartypevalue === 1) {
            this.setState({
                bardata: this.state.bardataall.data.positiveOrderQuantity
            })
        } else if (bartypevalue === 2) {
            this.setState({
                bardata: this.state.bardataall.data.positiveTotalSales
            })
        } else if (bartypevalue === 3) {
            this.setState({
                bardata: this.state.bardataall.data.positiveNetProfit
            })
        }
    }

    down = () => {
        const { bartypevalue } = this.state;
        if (bartypevalue === 1) {
            this.setState({
                bardata: this.state.bardataall.data.negativeOrderQuantity
            })
        } else if (bartypevalue === 2) {
            this.setState({
                bardata: this.state.bardataall.data.negativeTotalSales
            })
        } else if (bartypevalue === 3) {
            this.setState({
                bardata: this.state.bardataall.data.negativeNetProfit
            })
        }
    }

    handleChange = (pagination, filters, sorter) => {
        console.log('Various parameters', pagination, filters, sorter);
        this.setState({
            filteredInfo: filters,
            sortedInfo: sorter,
        });
    }

    render() {
        const { tableData, btnArr, total, postData, yvalueArr } = this.state;
        console.log(tableData, 'tableData');
        const pagination = {
            total,
            showQuickJumper: true,
            pageSize: postData.PageSize + 1,
            current: postData.PageIndex,
            pageSizeOptions: ['30', '50', '100'],
            onShowSizeChange: (current, pageSize) => {
                this.setState({ postData: { ...postData, PageIndex: current, PageSize: postData.PageSize } }, () => {
                    this.init1();
                })
            },
            onChange: (current, pageSize) => {
                console.log(current, 'current');
                console.log(pageSize, 'pageSize');
                this.setState({ postData: { ...postData, PageIndex: current, PageSize: postData.PageSize } }, () => {
                    this.init1();
                })
            },
        };

        let { sortedInfo, filteredInfo } = this.state;
        sortedInfo = sortedInfo || {};
        filteredInfo = filteredInfo || {};

        const Colums = [
            {
                title: '商品编号',
                dataIndex: 'productNo',
                key: 'productNo',
                // sorter: (a, b) => a.productNo - b.productNo,
                // sortOrder: sortedInfo.columnKey === 'productNo' && sortedInfo.order,
            },
            {
                title: '商品名称',
                dataIndex: 'productName',
                key: 'productName',
                // sorter: (a, b) => a.productName - b.productName,
                // sortOrder: sortedInfo.columnKey === 'productName' && sortedInfo.order,
            },
            {
                title: '商品面值',
                dataIndex: 'productFaceValue',
                key: 'productFaceValue',
                sorter: (a, b) => a.productFaceValue - b.productFaceValue,
                sortOrder: sortedInfo.columnKey === 'productFaceValue' && sortedInfo.order,
                render: (text, record) => <span>{text && `${text}元` || '0元'}</span>
            },
            {
                title: '销售价',
                dataIndex: 'unitPrice',
                key: 'unitPrice',
                sorter: (a, b) => a.unitPrice - b.unitPrice,
                sortOrder: sortedInfo.columnKey === 'unitPrice' && sortedInfo.order,
                render: (text, record) => <span>{text && `${text}元` || '0元'}</span>
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
                title: '商品总面值',
                dataIndex: 'allProductFaceValue',
                key: 'allProductFaceValue',
                sorter: (a, b) => a.allProductFaceValue - b.allProductFaceValue,
                sortOrder: sortedInfo.columnKey === 'allProductFaceValue' && sortedInfo.order,
                render: (text, record) => <span>{text && `${text}元` || '0元'}</span>
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
                dataIndex: 'costPrice',
                key: 'costPrice',
                sorter: (a, b) => a.costPrice - b.costPrice,
                sortOrder: sortedInfo.columnKey === 'costPrice' && sortedInfo.order,
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
        // const tableData = [
        //     { costPrice: 12, poundage: 22, profit: 4 },
        //     { costPrice: 23, poundage: 5, profit: 333 },
        //     { costPrice: 1, poundage: 56, profit: 222 }
        // ]

        // console.log(this.state.bardata,'this.state.bardata');
        // const ds = new DataSet();
        // const dv = ds.createView().source(this.state.bardata);
        // dv.source(this.state.bardata).transform({
        //     type: "sort",
        //     callback(a, b) {
        //         // 排序依据，和原生js的排序callback一致
        //         return a.value - b.value > 0;
        //     }
        // });

        const grid = {
            zeroLineStyle: {
                stroke: '#ddd',
                lineDash: [2, 4]
            }
        }

        return (
            <div className="product">
                <div className="product-bar">
                    <div className="tab">
                        <ul>
                            {
                                this.state.typelist.map((item, i) => (
                                    <li className={item.active && 'active'} onClick={() => { this.barchange(item.value, i) }} key={i}>{item.text}</li>
                                ))
                            }
                        </ul>
                    </div>
                    <div className="listsort"><span>商品TOP10</span><span onClick={this.up} className="up"><Icon type="caret-up" /></span><span onClick={this.down} className="down"><Icon type="caret-down" /></span></div>
                    <div className="barshow">
                        <Chart height={500} data={this.state.bardata} padding={[40, 80, 40, 180]} forceFit>
                            <Coord transpose />
                            <Axis
                                name="name"
                                label={{
                                    offset: 12
                                }}
                                grid={grid}
                            />
                            <Axis name="value" />
                            <Tooltip />
                            <Geom type="interval" position="name*value" color={[ this.state.bartypevalue === 1 ? '订单量' : this.state.bartypevalue === 2 ? '销售总额' : this.state.bartypevalue === 3 ? '净利润' : value, (value) => {
                                if (value > 0 )
                                    return '#85B2E2';
                                else
                                    return '#ccc';
                            }]} />
                        </Chart>
                    </div>
                </div>
                <div className="tablelist">
                    <Spin spinning={!!(this.props.loading && this.props.loading.effects['statis/productstatislist'])}>
                        <Table pagination={pagination} onChange={this.handleChange} scroll={{ x: 100 }} className="statistable" rowKey={tableData.productNo} rowSelection={null} columns={Colums} dataSource={tableData} />
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
export default connect(mapStateToProps)(Product);
