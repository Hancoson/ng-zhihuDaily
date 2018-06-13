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
const substring = str => {
  let _y: string = "",
    _m: string = "",
    _d: string = "";
  _y = str.substring(0, 4);
  _m = str.substring(4, 6);
  _d = str.substring(6, 8);
  return _y + "/" + _m + "/" + _d;
}

export {
  getDate, substring
}
