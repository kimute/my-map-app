//filter list by country
const filterDatas = (datas: any, country: any) => {
  const result = datas.filter((item: any) => item.category === country);
  return result;
};

export default filterDatas;
