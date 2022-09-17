//ascending sort
//sort the list by alphabetically
const sortDatas = (datas: any) => {
  const result = datas.sort(function (a: any, b: any) {
    return a.title < b.title ? -1 : a.title > b.title ? 1 : 0;
  });
  return result;
};

export default sortDatas;
