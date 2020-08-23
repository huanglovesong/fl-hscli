import React from 'react';
import { cutWord } from '../../utils/common';

const productAttr = {
    1: '话费',
    2: '流量',
    3: '卡密',
    4: '直充',
}

const soujiaColums1 = [
    { title: '序号', width: 50, key: 'index', dataIndex: 'index' },
    {
        title: '订单编号', width: 150, key: 'orderId', dataIndex: 'orderId',
        render: (text, record) => <span>{cutWord(35, text)}</span>
    },
    {
        title: '商品编号', width: 100, key: 'productId', dataIndex: 'productId',
        render: (text, record) => <span>{cutWord(15, text)}</span>
    },
    {
        title: '商品名称', width: 150, key: 'productName', dataIndex: 'productName',
        render: (text, record) => <span>{cutWord(15, text)}</span>
    },
    {
        title: '商品属性', width: 100, key: 'productAttr', dataIndex: 'productAttr',
        render: (text, record) => <span>{productAttr[text] || ''}</span>
    },
    { title: '商品面值', width: 80, key: 'faceValue', dataIndex: 'faceValue',render: (text, record) => <span>{text ? `${text}元` : text === 0 ? '0元' : ''}</span> },
    { title: '销售价', width: 80, key: 'salePrice', dataIndex: 'salePrice',render: (text, record) => <span>{text && `${text}元` || '0元'}</span> },
    { title: '分润费率', width: 80, key: 'fractionalRate', dataIndex: 'fractionalRate',render: (text, record) => <span>{text && `${text}` || '0'}</span> },
    { title: '分润金额', width: 80, key: 'allotProfit', dataIndex: 'allotProfit',render: (text, record) => <span>{text && `${text}元` || '0元'}</span> },
]

const mijiaColums1 = [
    { title: '序号', width: 50, key: 'index', dataIndex: 'index' },
    {
        title: '订单编号', width: 150, key: 'orderId', dataIndex: 'orderId',
        render: (text, record) => <span>{cutWord(35, text)}</span>
    },
    {
        title: '商品编号', width: 100, key: 'productId', dataIndex: 'productId',
        render: (text, record) => <span>{cutWord(15, text)}</span>
    },
    {
        title: '商品名称', width: 150, key: 'productName', dataIndex: 'productName',
        render: (text, record) => <span>{cutWord(15, text)}</span>
    },
    {
        title: '商品属性', width: 100, key: 'productAttr', dataIndex: 'productAttr',
        render: (text, record) => <span>{productAttr[text] || ''}</span>
    },
    { title: '商品面值', width: 80, key: 'faceValue', dataIndex: 'faceValue',render: (text, record) => <span>{text ? `${text}元` : text === 0 ? '0元' : ''}</span> },
    { title: '成本价', width: 80, key: 'costPrice', dataIndex: 'costPrice',render: (text, record) => <span>{text ? `${text}元` : text === 0 ? '0元' : ''}</span> },
    { title: '销售价', width: 80, key: 'salePrice', dataIndex: 'salePrice',render: (text, record) => <span>{text && `${text}元` || '0元'}</span> },
    { title: '分润费率', width: 80, key: 'fractionalRate', dataIndex: 'fractionalRate',render: (text, record) => <span>{text && `${text}` || '0'}</span> },
    { title: '分润金额', width: 80, key: 'allotProfit', dataIndex: 'allotProfit',render: (text, record) => <span>{text && `${text}元` || '0元'}</span> },
]

const defalutColums1 = [
    { title: '序号', width:50, key: 'index', dataIndex: 'index' },
    {
        title: '订单编号', width: 150, key: 'orderId', dataIndex: 'orderId',
        render: (text, record) => <span>{cutWord(35, text)}</span>
    },
    {
        title: '商品编号', width: 100, key: 'productId', dataIndex: 'productId',
        render: (text, record) => <span>{cutWord(15, text)}</span>
    },
    {
        title: '商品名称', width: 150, key: 'productName', dataIndex: 'productName',
        render: (text, record) => <span>{cutWord(15, text)}</span>
    },
    {
        title: '商品属性', width: 100, key: 'productAttr', dataIndex: 'productAttr',
        render: (text, record) => <span>{productAttr[text] || ''}</span>
    },
    { title: '商品面值', width: 80, key: 'faceValue', dataIndex: 'faceValue',render: (text, record) => <span>{text ? `${text}元` : text === 0 ? '0元' : ''}</span> },
    { title: '成本价', width: 80, key: 'costPrice', dataIndex: 'costPrice',render: (text, record) => <span>{text ? `${text}元` : text === 0 ? '0元' : ''}</span> },
    { title: '销售价', width: 80, key: 'salePrice', dataIndex: 'salePrice',render: (text, record) => <span>{text && `${text}元` || '0元'}</span> },
    { title: '手续费', width: 80, key: 'feeRate', dataIndex: 'feeRate',render: (text, record) => <span>{text && `${text}元` || '0元'}</span> },
    { title: '净利润', width: 80, key: 'profit', dataIndex: 'profit',render: (text, record) => <span>{text && `${text}元` || '0元'}</span> },
]

const tableColums = [
    { title: '序号', width: 50, key: 'index', dataIndex: 'index' },
    {
        title: '订单编号', width: 150, key: 'orderId', dataIndex: 'orderId',
        render: (text, record) => <span>{cutWord(35, text)}</span>
    },
    {
        title: '商品编号', width: 100, key: 'productId', dataIndex: 'productId',
        render: (text, record) => <span>{cutWord(15, text)}</span>
    },
    {
        title: '商品名称', width: 150, key: 'productName', dataIndex: 'productName',
        render: (text, record) => <span>{cutWord(15, text)}</span>
    },
    {
        title: '商品属性', width: 100, key: 'productAttr', dataIndex: 'productAttr',
        render: (text, record) => <span>{productAttr[text] || ''}</span>
    },
    { title: '商品面值', width: 80, key: 'faceValue', dataIndex: 'faceValue',render: (text, record) => <span>{text ? `${text}元` : text === 0 ? '0元' : ''}</span> },
    { title: '成本价', width: 80, key: 'costPrice', dataIndex: 'costPrice',render: (text, record) => <span>{text && `${text}元` || '0元'}</span> },
    { title: '销售价', width: 80, key: 'salePrice', dataIndex: 'salePrice',render: (text, record) => <span>{text && `${text}元` || '0元'}</span> },
    { title: '购买数量', width: 80, key: 'buyNum', dataIndex: 'buyNum' },
    { title: '销售总额', width: 80, key: 'totalPrice', dataIndex: 'totalPrice',render: (text, record) => <span>{text && `${text}元` || '0元'}</span> },
    { title: '成本总额', width: 80, key: 'totalCostPrice', dataIndex: 'totalCostPrice',render: (text, record) => <span>{text && `${text}元` || '0元'}</span> },
    { title: '毛利润', width: 80, key: 'grossProfit', dataIndex: 'grossProfit',render: (text, record) => <span>{text && `${text}元` || '0元'}</span> },
    { title: '手续费', width: 80, key: 'poundage', dataIndex: 'poundage',render: (text, record) => <span>{text && `${text}元` || ''}</span> },
    { title: '分润', width: 80, key: 'allotProfit', dataIndex: 'allotProfit',render: (text, record) => <span>{text && `${text}元` || '0元'}</span> },
    { title: '净利润', width: 80, key: 'profit', dataIndex: 'profit',render: (text, record) => <span>{text && `${text}元` || '0元'}</span> },
]
const tableColums1 = [
    { title: '序号', width: 50, key: 'index', dataIndex: 'index' },
    {
        title: '订单编号', width: 150, key: 'orderId', dataIndex: 'orderId',
        render: (text, record) => <span>{cutWord(35, text)}</span>
    },
    {
        title: '商品编号', width: 100, key: 'productId', dataIndex: 'productId',
        render: (text, record) => <span>{cutWord(15, text)}</span>
    },
    {
        title: '商品名称', width: 150, key: 'productName', dataIndex: 'productName',
        render: (text, record) => <span>{cutWord(15, text)}</span>
    },
    {
        title: '商品属性', width: 100, key: 'productAttr', dataIndex: 'productAttr',
        render: (text, record) => <span>{productAttr[text] || ''}</span>
    },
    { title: '商品面值', width: 80, key: 'faceValue', dataIndex: 'faceValue',render: (text, record) => <span>{text ? `${text}元` : text === 0 ? '0元' : ''}</span> },
    { title: '密价', width: 80, key: 'costPrice', dataIndex: 'costPrice',render: (text, record) => <span>{text && `${text}元` || '0元'}</span> },
    { title: '销售价', width: 80, key: 'salePrice', dataIndex: 'salePrice',render: (text, record) => <span>{text && `${text}元` || '0元'}</span> },
    { title: '购买数量', width: 80, key: 'buyNum', dataIndex: 'buyNum' },
    { title: '销售总额', width: 80, key: 'totalPrice', dataIndex: 'totalPrice',render: (text, record) => <span>{text && `${text}元` || '0元'}</span> },
    { title: '密价总额', width: 80, key: 'totalCostPrice', dataIndex: 'totalCostPrice',render: (text, record) => <span>{text && `${text}元` || '0元'}</span> },
    { title: '毛利润', width: 80, key: 'grossProfit', dataIndex: 'grossProfit',render: (text, record) => <span>{text && `${text}元` || '0元'}</span> },
    { title: '手续费', width: 80, key: 'poundage', dataIndex: 'poundage',render: (text, record) => <span>{text && `${text}元` || '0元'}</span> },
    { title: '净利润', width: 80, key: 'profit', dataIndex: 'profit',render: (text, record) => <span>{text && `${text}元` || '0元'}</span> },
]


export default { 
    tableColums, 
    tableColums1,
    defalutColums1,
    soujiaColums1,
    mijiaColums1
 };