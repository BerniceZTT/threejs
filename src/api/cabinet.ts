const path = "http://192.168.1.111:5173/mock/772752/cabinet/";
function getCabinateByName(name: string) {
  return fetch(path + name).then((res) => res.json());
}
export { getCabinateByName };
