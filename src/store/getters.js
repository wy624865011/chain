const getters = {
  sidebar: state => state.app.sidebar,
  token: state => state.user.token,
  avatar: state => state.user.avatar,
  name: state => state.user.name,
  mobile: state => state.user.mobile,
  email: state => state.user.email,
  roleName: state => state.user.roleName,
  roles: state => state.user.roles,
  permission_routers: state => state.permission.routers,
  addRouters: state => state.permission.addRouters,
  enumsList:state => state.enums.enumsList,
  uploading:state => state.upload.uploading,
  uploadQueue:state => state.upload.uploadQueue,
  lang:state => state.lang.lang,
  sliderActiveIndex:state => state.app.sliderActiveIndex,
}
export default getters
