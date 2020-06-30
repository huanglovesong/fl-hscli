export default {
  "getAsync": "/api/v1/getAsync",
  mypage: '/api/Merchant/GetMerinfo',
  prolist: '/api/product/GetMerProList',
  importIntegral: '/api/product/ImportIntegral',
  "saveProductExchanteDetail": "/api/product/SaveProductExchanteDetail",
  "getProductExchanteDetail": "/api/product/GetProductExchanteDetail",
  getSingleMerProductCouponAfterPrice: '/api/product/GetSingleMerProductCouponAfterPrice',
  batchsOpenCouponAfterPrice: '/api/product/BatchsOpenCouponAfterPrice',
  batchsCloseCouponAfterPrice: '/api/product/BatchsCloseCouponAfterPrice',

  getMerProListDropDown: '/api/product/GetMerProListDropDown',
  ProClasslist: '/api/product/GetMerProClassOneListSearch',//商品分类
  ProClassTwoList: '/api/product/GetProClassTwoList',//商品二级分类
  exportpro: '/api/Report/MerProExport',//导出商品 
  exportBatchsCouponAfterPriceErrExcel: '/api/Report/ExportBatchsCouponAfterPriceErrExcel',//导出卷后价错误明细 
  deletepro: '/api/product/DeleleMerProInfo',//批量删除
  batchshelves: '/api/product/BatchShelves',//批量上架
  batches: '/api/product/Batches',//批量下架
  proDetail: '/api/product/GetMerProDetail',//商品详情
  saveproinfo: '/api/product/SaveMerProInfo',// 保存商户商品信息
  proinfolist: '/api/product/AllProInfoList',//未添加商品池列表
  addpro: '/api/product/SaveMerProAdd',//新增商品
  templateInfo: '/api/Merchant/GetInfoTemplateDetai',//返回相应页面信息
  edittemplateInfo: '/api/Merchant/UpdateMerDetai',//编辑页面信息
  newpage: '/api/Merchant/AddInfoTemplateDetai',//新增页面
  merstatus: '/api/Merchant/ValidateMerStatus',//验证商户状态，是否可以新增
  templateList: '/api/MerBanner/GetTempForPlatformId',// 获取模板
  paymentinfo: '/api/MerPayment/merpaymentconfig',// 获取商户支付配置信息
  getalipayinfo: '/api/MerPayment/alipay',//获取支付宝配置
  setalipayinfo: '/api/MerPayment/alipay',//编辑支付宝配置
  addalipayinfo: '/api/MerPayment/alipay',//第一次设置配置信息
  getwechatinfo: '/api/MerPayment/wechat', //获取微信配置
  setwechatinfo: '/api/MerPayment/wechat', //编辑微信 配置
  addwechatinfo: '/api/MerPayment/wechat',//添加微信配置
  ownpay: '/api/MerPayment/ownpay',//申请自有支付
  saveclass: '/api/product/SaveMerProClass',//保存商户分类配置
  setcode: '/api/merpayment/code',//发送手机验证
  platList: '/api/MerBanner/GetPlatform',//平台列表
  refundEndFailedOrder: '/api/Order/RefundEndFailedOrder',//终止重试
  orderlist: '/api/Order/GetOrders',//订单列表
  orderdetail: '/api/Order/GetOrderDetail',//订单详情
  fittotal: '/api/Report/ProfitTotal',//利润统计报表
  afterservers: '/api/AfterSale/GetAfterSaleOrders',//售后服务列表
  savesort: '/api/product/SaveSort', // 商品列表保存排序
  getmerProClassList: '/api/product/GetMerProClassList',// 获取商户商品分类
  newpagelogo: '/api/FileUpload/Upload',//上传图片
  bannerlist: '/api/MerBanner', //获取banner图管理列表
  editbanner: '/api/MerBanner', //修改banner图
  addbanner: '/api/MerBanner', //新增bannner图
  deletebannner: '/api/MerBanner',//删除banner图
  getallbanner: '/api/MerBanner/GeBannerForLocationId',//获取所有banner图库
  getmerinfo: '/api/Merchant/QueryinfoMessage',//同步商户信息
  changepaytype: '/api/merpayment/paytype',//编辑商户支付方式
  ptLocation: '/api/MerBanner/GetPlatformLocation',//平台模板位置信息
  uploadwechat: '/api/FileUpload/uploadforwechat', // 微信证书上传
  bannersort: '/api/MerBanner',//广告位修改排序
  addstatus: '/api/Merchant/ValidateAddMerStatus',//验证前端是否有新增页面重复
  saleschart: '/api/Report/WeekTotal',//一周销售额统计报表
  aftersaleverify: '/api/AfterSale/Verify',//申请核实
  transfer: '/api/AfterSale/TransferOrder',//申请售后
  txtupload: '/api/FileUpload/wechatmpverifytxt',//微信txt上传
  orderlistexport: '/api/Report/OrdersToExcel',//订单导出
  Profitexport: '/api/Report/ProfitTotalToExcel',//利润导出
  examinepay: '/api/merpayment/examinepay',//申请支付
  ordertop10: '/api/Report/producttop/orderquantity',//商品top10
  salestop10: '/api/Report/producttop/totalsales',//销售总额top10
  netprotop10: '/api/Report/producttop/netprofit',//净利润 top10
  productstatislist: '/api/Report/productstatistics',//商品报表统计
  productexport: '/api/Report/productexport',//商品导出
  datestaticslist: '/api/Report/datestatistics',//日期报表统计
  dataexport: '/api/Report/dateexport',//日期导出

  saleProfit: '/api/Report/PriceDistribution',//售价利润列表
  saleProfitExport: '/api/Report/PriceDistributionToExcel',
  miProfit: '/api/Report/DensePriceDistribution',//密价利润列表
  miProfitExport: '/api/Report/DensePriceDistributionToExcel',//密价分润导出excel
  profit: '/api/Report/DensePrice',//密价列表
  profitExport: '/api/Report/DensePriceToExcel',//密价导出
  replydetail: '/api/AfterSale/GetReplyRecord',//查询回复

  agreevalid: '/api/Merchant/Valid', //验证是否需要弹出协议
  agree: '/api/Merchant/Agree',//同意协议

  getPointRuleList: '/api/Point/GetPointRuleList', //获取积分规则
  modifyAliasName: '/api/Point/ModifyAliasName', //修改积分规则别名
  modifyExchangeRate: '/api/Point/ModifyExchangeRate', //修改积分规则兑换汇率
  modifyDeductionRate: '/api/Point/ModifyDeductionRate', //修改积分规则抵扣比例
  enableDeductionRate: '/api/Point/EnableDeductionRate', //启用积分规则抵扣比例

  getMembershipList: '/api/Membership/GetMembershipList', //获取会员列表
  getMembershipInfo: '/api/Membership/GetMembershipInfo', //获取会员信息
  createMembershipInfo: '/api/Membership/CreateMembershipInfo', //新增会员信息
  modifyMembershipInfo: '/api/Membership/ModifyMembershipInfo', //修改会员信息
  getMembershipIsOpen: '/api/Membership/GetMembershipIsOpen', //判断会员等级是否已经开通
  enableMembership: '/api/Membership/EnableMembership', //启用禁用会员等级

  // 一级分类
  getMerProClassOneList: '/api/product/GetMerProClassOneList', //商品一级分类
  saveOneProClass: '/api/product/SaveOneProClass', //添加编辑一级分类保存接口
  saveTwoProClass: '/api/product/SaveTwoProClass', //添加编辑二级级分类保存接口
  deleteProClass: '/api/product/DeleteProClass', //删除分类，id集合，逗号隔开，单个不用加逗号
  getProClassRelationProList: '/api/product/GetProClassRelationProList', //获取二级分类商品关联数据
  saveMerProductClass: '/api/product/SaveMerProductClass', //保存商户商品分类关联

  getProClassOneList: '/api/product/GetProClassOneList', //获取运营侧商品一级分类 用于添加商品
  getYyProClassTwoList: '/api/product/GetYyProClassTwoList', //运营侧根据一级分类id获取二级分类 用于添加商品

  merchantAuthorizedRefund: '/api/Order/MerchantAuthorizedRefund', //商户是否有退款权限
  refund: '/api/Order/refund', //订单退款

  validIntegral: '/api/Merchant/ValidIntegral', //验证商品是否可以配置积分

  GetList: '/api/FlashSale/GetList', //获取限时抢购活动列表
  updateSort: '/api/FlashSale/UpdateSort', //获取限时抢购活动列表
  addFlashSaleProductQuota: '/api/FlashSale/AddFlashSaleProductQuota', //追加活动名额

  GetDetail: '/api/FlashSale/GetDetail', //获取限时折扣详情
  SaveFlashSale: '/api/FlashSale/SaveFlashSale', //保存限时折扣信息
  Revoke: '/api/FlashSale/Revoke', //撤销限时抢购
  GetProductQueue: '/api/FlashSale/GetProductQueue', //获取资格码数量
  UpdateProductTemp: '/api/product/UpdateProductTemp', //更新商品模板缓存
  pointreturn: '/api/Order/pointreturn', //积分退还
  retryRefundFailedOrders: '/api/Order/RetryRefundFailedOrders', //积分退还

  merBannerBatch: '/api/MerBanner/MerBannerBatche', // 下架
  merBannerShelve: '/api/MerBanner/MerBannerShelve', // 上架

  saveHotSearchClass: '/api/product/SaveHotSearchClass',
  saveAfterSaleRecommendClass: '/api/product/SaveAfterSaleRecommendClass',
  saveSearchInputClass: '/api/product/SaveSearchInputClass',

  getMerSearchClass: '/api/product/GetMerSearchClass', // 获取热门分类搜索
  updateMerSearchClass: '/api/product/UpdateMerSearchClass',// 保存热门搜索分类
  retryFailedOrdersGetList: '/api/Order/RetryFailedOrders',
  handleRetryFailedOrder: '/api/Order/HandleRetryFailedOrder',
  refundRetryFailedOrder: '/api/Order/RefundRetryFailedOrder',
  getMerTemplateConfigure: '/api/Merchant/GetMerTemplateConfigure',
  getMerTemplateUrl: '/api/Merchant/GetMerTemplateUrl',

  getChannelList: '/api/ChannelManage/GetList', // 获取频道列表
  getChannelDetail: '/api/ChannelManage/GetDetail', // 获取频道详情
  addChannel: '/api/ChannelManage/Add', // 添加频道列表
  editChannel: '/api/ChannelManage/Edit', // 编辑频道列表
  deleteChannel: '/api/ChannelManage/Delete', // 删除频道列表
  shelvesChannel: '/api/ChannelManage/Shelves', // 上架频道列表
  obtainedChannel: '/api/ChannelManage/Obtained', // 下架频道列表
  getChannelCache: '/api/ChannelManage/GetChannelCache', // 获取频道列表预览
  getChannelBannerList: '/api/MerBanner/GetChannelBannerList', // 获取广告位列表

  //收藏有礼,分享有礼
  sharegetlist: '/api/MerCollShareConfig/GetList',//列表
  sharegetdetail: '/api/MerCollShareConfig/GetDetail',//详情
  shareadd: '/api/MerCollShareConfig/Add',//新增
  shareedit: '/api/MerCollShareConfig/Edit',//编辑
  sharedelete: '/api/MerCollShareConfig/Delete',//删除

  getChannelListNew: '/api/ChannelManageNew/GetList', // 获取频道列表
  getChannelDetailNew: '/api/ChannelManageNew/GetDetail', // 获取频道详情
  addChannelNew: '/api/ChannelManageNew/Add', // 添加频道列表
  editChannelNew: '/api/ChannelManageNew/Edit', // 编辑频道列表
  deleteChannelNew: '/api/ChannelManageNew/Delete', // 删除频道列表
  shelvesChannelNew: '/api/ChannelManageNew/Shelves', // 上架频道列表
  obtainedChannelNew: '/api/ChannelManageNew/Obtained', // 下架频道列表
  getChannelCacheNew: '/api/ChannelManageNew/GetChannelCache', // 获取频道列表预览
  getChannelBannerListNew: '/api/MerBanner/GetChannelBannerList', // 获取广告位列表
  getListByChannelNew: '/api/FlashSale/GetListByChannel', // 获取限时抢购活动列表(频道页)

  getMerUserInfoPageList: '/api/Merchant/getMerUserInfoPageList', // 获取商户用户信息
  merUserInfoToExcel: '/api/Merchant/MerUserInfoToExcel', // 商户用户信息
  merAliMessageTemp: '/api/MerAliMessageTemp',// 模板消息

  insertRisk: '/api/Risk/InsertRisk',
  updateRisk: '/api/Risk/UpdateRisk',

  checkRisk: '/api/Risk/CheckRisk',
  getRiskList: '/api/Risk/GetRiskList',
  deleteRisk: '/api/Risk/DeleteRisk',
  getRiskPageList: '/api/Risk/getRiskPageList',

  getProductUserAgreementExcel: '/api/Report/GetProductUserAgreementExcel',
  getMerAgreementProDetail: '/api/product/GetMerAgreementProDetail',
  userAgreementRescission: '/api/UserAgreement/UserAgreementRescission',

  merLifeCodeSet: '/api/Merchant/MerLifeCodeSet',

  getMerGeneralConfiguration: '/api/Merchant/GetMerGeneralConfiguration',
  saveMerGeneralConfiguration: '/api/Merchant/SaveMerGeneralConfiguration',
  /****页面自定义start**** */
  getOneClassAndChildProduct: '/api/product/GetOneClassAndChildProduct', // 获取一级分类及商品
  getMerCouponList: '/api/MerCouponActivity/GetMerCouponList', // 获取优惠卷活动列表
  getPageChannelList: '/api/PageManage/GetPageChannelList', // 获取频道列表（只展示正式版）
  getListByPage: '/api/FlashSale/GetListByPage', // 获取限时抢购活动列表(自定义页面)
  savePage: '/api/PageManage/SavePage', // 保存页面
  releaseOfficialEdition: '/api/PageManage/ReleaseOfficialEdition', // 发布至正式版
  returnOfficialEdition: '/api/PageManage/ReturnOfficialEdition', // 回退至正式版
  getlist: '/api/PageManage/getlist', // 获取页面列表
  getDetail: '/api/PageManage/GetDetail', // 根据id获取详情
  modifySort: '/api/PageManage/ModifySort', // 修改排序
  pageDelete: '/api/PageManage/Delete', // 删除

  /****页面自定义end**** */


  /****优惠券start**** */
  getCouponInfos: '/api/MerCouponActivity/GetCouponInfos', // 获取券码平台券码信息
  getMerCouponInfoPage: '/api/MerCouponActivity/getMerCouponInfoPage', // 获取商户优惠券分页列表
  updateMerCouponActivity: '/api/MerCouponActivity/UpdateMerCouponActivity', // 添加商户优惠券信息(自定义页面)
  addMerCouponActivity: '/api/MerCouponActivity/AddMerCouponActivity', // 获取商户优惠券活动详情
  getMerCouponInfoDetails: '/api/MerCouponActivity/GetMerCouponInfoDetails', // 获取页面列表
  stopMerCouponActivity: '/api/MerCouponActivity/StopMerCouponActivity', // 编辑商户优惠券信息
  couponsListEnable: '/api/MerCouponActivity/CouponsListEnable', // 停止活动
  /****优惠券end**** */
  /****兑换券配置start**** */

  getMerChannelCouponProduct: '/api/MerChannelCouponProduct/GetMerChannelCouponProduct',// 获取商户兑换卷配置
  saveMerChannelCouponProduct: '/api/MerChannelCouponProduct/SaveMerChannelCouponProduct',// 保存商户兑换卷配置
  /****兑换券配置end**** */

  /**权益包**/
  getMerEquityCardList: '/api/EquityCard/GetMerEquityCardList', // 权益列表
  addMerEquityCard: '/api/EquityCard/AddMerEquityCard',  // 新增权益包
  getMerEquityCardDetail: '/api/EquityCard/GetMerEquityCardDetail', //权益包详情
  editMerEquityCard: '/api/EquityCard/EditMerEquityCard', //修改权益包
  upperLowerShelves: '/api/EquityCard/UpperLowerShelves',  //权益包上下架
  getUserEquityCardList: '/api/EquityCard/GetUserEquityCardList',  //获取用户权益包列表
  getUserEquityCardDetail: '/api/EquityCard/GetUserEquityCardDetail',  //获取用户购买权益详情
  exportUserEquityCardExcel: '/api/Report/ExportUserEquityCardExcel',  //导出用户权益信息

  /****轻会员start**** */

  lightMemberRightsManageGetList: '/api/IsvEquity/GetList',// 获取列表
  lightMemberRightsManageSave: '/api/IsvEquity/Save',// 保存轻会员配置
  lightMemberRightsManageEditSort: '/api/IsvEquity/EditSort',// 修改排序
  lightMemberRightsManageDelete: '/api/IsvEquity/Delete',// 删除
  lightMemberRightsManageGetDetail: '/api/IsvEquity/GetDetail',// 获取详情
  lightMemberRightsManageEditSatus: '/api/IsvEquity/EditSatus',// 启用禁用
  /****轻会员end**** */

  /****轻会员权益订单start**** */
  lightMemberRightsOrderList: '/api/IsvOrder/GetOrderList',
  lightMemberRightsOrderDetail: '/api/IsvOrder/GetOrderDetail',
  /****轻会员end**** */
};
