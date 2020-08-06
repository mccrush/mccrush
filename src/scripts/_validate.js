/* eslint-disable no-console */
export default function (itemObj) {
  for (let key in itemObj) {
    //console.log(key, ": ", itemObj[key]);
    if (itemObj[key] == "" || itemObj[key] == null) {
      return false;
    }
  }
  return true;
}