// request, fetch API Func.
const request = async (url: string) => {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = response.json();
      return data;
    }
  } catch (error) {
    console.log("fetch error");
  }
};

export default request;
