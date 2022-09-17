import request from "./requestAPI";

const getFetchData = async () => {
  const result = await request("/myList.json");
  return result;
};

export default getFetchData;
