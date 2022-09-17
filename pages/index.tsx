import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import getFetchData from "../components/api/fetchData";
import { locateDataState } from "../components/atom";
import NavArea from "../components/NavArea";

const Home: NextPage = () => {
  const [data, setData] = useRecoilState(locateDataState);
  useEffect(() => {
    (async () => {
      const response = await getFetchData();
      setData(response);
    })();
  }, []);

  const targetData = [...data];
  const countries = targetData.sort(function (a: any, b: any) {
    return a.category < b.category ? -1 : a.category > b.category ? 1 : 0;
  });

  return (
    <div>
      <h1 className="text-2xl mt-2 mb-2 ml-2 text-amber-600 font-bold">
        My Trace
      </h1>
      <NavArea datas={data} />
      <h3 className="mt-2 mb-2 ml-2 text-amber-600">
        Click on Images below ≫{" "}
      </h3>
      <section className="mt-5 gap-2 px-2 items-center grid grid-cols-2 md:grid-cols-3">
        {!countries && <h4>Loading ..</h4>}
        {countries?.map((data: any, idx: any) => (
          <Link
            href={{
              pathname: `/countries/${data.id}`,
              query: {
                title: data.category,
              },
            }}
            as={`/countries/${data.id}`}
            key={data.id}
          >
            <a>
              <div
                key={idx}
                className="relative cursor-pointer hover:z-50 hover:scale-y-105 hover:transition duration 300"
              >
                <h3 className="mt-2 mx-2 text-xl text-bold text-amber-900 absolute z-40 ">
                  {data.category} | {data.title}
                </h3>
                <Image
                  className="z-0"
                  src={data.imgSrc}
                  width="400px"
                  height="300px"
                  alt="country"
                />
              </div>
            </a>
          </Link>
        ))}
      </section>
    </div>
  );
};

export default Home;
