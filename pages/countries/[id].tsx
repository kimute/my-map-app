import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useRecoilValue } from "recoil";
import { locateDataState } from "../../components/atom";
import MapBox from "../../components/MapBox";
import filterDatas from "../../components/utils/fliterDatas";
import sortDatas from "../../components/utils/sortDatas";

const Detail: NextPage = () => {
  const router = useRouter();
  const country = router?.query.title;
  const data = useRecoilValue(locateDataState);
  const targetData = [...data];
  const filteredDatas = filterDatas(targetData, country);
  const result = sortDatas(filteredDatas);

  return <MapBox result={result} />;
};

export default Detail;
