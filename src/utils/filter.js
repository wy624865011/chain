
const filter = function (Vue, options) {
  Vue.filter('date', function (date, fmt) {

    if (date === null) {
      return
    }
    var oDate = new Date(date)
    if (/(y+)/.test(fmt)) {
      fmt = fmt.replace(RegExp.$1, (oDate.getFullYear() + '').substr(4 - RegExp.$1.length))
    }
    let o = {
      'M+': oDate.getMonth() + 1,
      'd+': oDate.getDate(),
      'h+': oDate.getHours(),
      'm+': oDate.getMinutes(),
      's+': oDate.getSeconds()
    }

    function padLeftZero (str) {
      return ('00' + str).substr(str.length)
    }

    for (let k in o) {
      if (new RegExp(`(${k})`).test(fmt)) {
        let str = o[k] + ''
        fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : padLeftZero(str))
      }
    }
    return fmt
  })



  Vue.filter('number', function (number, n) {
    if (n !== 0) {
      n = (n > 0 && n <= 20) ? n : 2
    }
    number = parseFloat((number + '').replace(/[^\d\.-]/g, '')).toFixed(n) + ''
    var subVal = number.split('.')[0].split('').reverse()
    var subXs = number.split('.')[1]

    var showHtml = ''
    for (let i = 0; i < subVal.length; i++) {
      showHtml += subVal[i] + ((i + 1) % 3 === 0 && (i + 1) !== subVal.length ? ',' : '')
    }

    if (n === 0) {
      return showHtml.split('').reverse().join('')
    } else {
      return showHtml.split('').reverse().join('') + '.' + subXs
    }
  })
  Vue.filter('enumsMap', function (code, objArr) {
    let str = ''
    if (code === undefined || code === null) {
      // str = ''
    } else {
      str = objArr.filter(item => {
        return item.code === code
      })[0].description
    }
    return str
  })
}

export default filter

