var configs = {
	name: 'Merchant',
	version: '1.0.0-beta.0',
	productName: 'H5商城商户侧',
	productVersion: 'X1',
	clientId: '10000063', //通行证使用的appid(一般与appid保持一致，目前只有erp的与appid不一样)
	authorId: '10000063', //当前应用对应的appid
	id: '', //商户id(临时))
	accessToken: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6IjE3OEJBNEJGMDZGQzkzMDY1QUEyNTgyRjU1QzcyMkE2IiwiY2xpZW50X2lkIjoiMTAwMDAwMDMiLCJuYW1lIjoiODAwMSIsIm5pY2tuYW1lIjoi56ym54aZIiwicGhvbmVfbnVtYmVyIjoiMTg2MjcxMTU2NTciLCJlbWFpbCI6Ijc3NTE0NTU0QHFxLmNvbSIsInJvbGUiOiJVc2VyIiwiaXNzIjoiaHR0cDovL2xvY2FsaG9zdDoxNTMxIiwiYXVkIjoiYXBpIiwiZXhwIjoxNTIxNzcyNDYxLCJuYmYiOjE1MTY1ODg0NjF9.cfYs3h1KmMdExHPNevec1s2CLOSEcAuN1aIXiTiouhc',
	host: {
		passport: {
			'getUserInfo': 'https://api.passport.fulu.com', //获取用户信息，判断用户是否登录
			'authCode': 'https://console-mall-api-admin.fulu.com', //使用code换取access_token
			'auth': 'https://passport.fulu.com' // 通行证登录页 登录成功后会带上code跳转到回调地址
		},
		test: 'https://console-mall-api-admin.fulu.com', //商户侧
		menage: 'https://manage-mall-api-admin.fulu.com', //运营侧
		common: 'https://console-api-admin.fulu.com', //左侧导航和头部导航 福禄管家通用接口
		log: 'https://api-log-admin.fulu.com', //日志管理 接口
		webapi: 'https://api-open-admin.fulu.com', //新接口的地址
		main: 'https://console.open.fulu.com',
	}
};