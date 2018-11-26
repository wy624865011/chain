let apiUrl = '/'                // dev 服务地址
let jumpUrl = 'http://test.yz.zhihanyun.com'                  // dev 富文本预览 跳转前台地址

if (process.env.NODE_ENV === 'production') {
  apiUrl = 'http://api.yz.zhihanyun.com/'
  jumpUrl = 'http://yz.zhihanyun.com'
} else if (process.env.NODE_ENV === 'test') {
  apiUrl = 'http://test.api.yz.zhihanyun.com/'
  jumpUrl = 'http://test.yz.zhihanyun.com'
}
export default {
  apiUrl        : apiUrl,
  jumpUrl       : jumpUrl,
  qiniuUrl      : 'http://upload.qiniu.com/',
  domain        : 'http://oss.zhihanyun.com/',
}

export const enums = {
  itemType: {
    101: '政策倡导',
    102: '行业孵化',
    103: '教育创新',
    104: '人才培养'
  },
  newsType: {
    101: '永真资讯',
    102: '媒体报道'
  },
  fileType:{
    101: '信息',
    102: '资料',
    103: '视频'
  },
  infoType: {
    101: '年度工作报告',
    102: '审计报告',
    103: '年检报告',
    104: '资质证书和制度'
  },
  carouselStatus: ['未发布', '已发布'],
  commendStatus: ['未推荐', '已推荐'],
}
