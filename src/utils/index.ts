/**
 * @Author: Guoxing.han
 * @Date: 2018-06-13 17:15:53
 * @version 0.0.1
 */
const getDate = () => {
  let d: Date = new Date();
  let m: number = d.getMonth() + 1;
  let dd: number = d.getDate();
  let _m: string = m.toString()
  let _dd: string = dd.toString()
  if (m < 10) {
    _m = "0" + m.toString();
  }
  if (dd < 10) {
    _dd = "0" + dd.toString();
  }
  let str = d.getFullYear().toString() + _m + _dd;
  return str;
}

export {
  getDate
}
