export default function (itemObj) {
  for (let key in itemObj) {
    if (itemObj[key] == "" || itemObj[key] == null) {
      return false;
    }
  }
  return true;
}