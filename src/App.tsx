import Header from "./components/Header";
import User from "./components/User";
import Chard from "./components/Chard";
import name from "./assets/name.png";
import Calso from "./components/Calso";
import img from "./assets/img.png";
import Cha from "./components/Cha";
import Fotter from "./components/Fotter";
import RaderChart from "./components/RadarChart";
import qrKod from '../public/qrKod.png'

import shaxsy from "../public/shaxs.svg";
export default function App() {
  return (
    <div className="pl-40 pr-40 bg-white">
      <Header />
      <User />
      <img className="pt-10 " src={name} alt="" />
      <div className="flex justify-between items-center pt-10">
        <Calso />
        <div className="flex flex-col justify-start items-start">
          <Chard />
        </div>
        <img src={img} alt="" />
      </div>

      <Cha />
      <Fotter />
      <img className="pt-20 pb-12" src={shaxsy} alt="" />
      <div className="flex justify-between  pt-10">
        <div className=" flex flex-col gap-5 mt-10">
          <div className=" flex flex-col">
            <p className="text-xl">Максадга интилувчанлик</p>
            <div className="flex items-center gap-4 w-[490px]">
              <div className="w-full bg-gray-200 rounded-full h-4">
                <div className="bg-blue-600 h-4 rounded-full w-[90%]"></div>
              </div>
              <p className="text-right text-xl font-medium mt-1">90%</p>
            </div>
          </div>
          <div className=" flex flex-col">
            <p className="text-xl">Эмоционал интеллект</p>
            <div className="flex items-center gap-4 w-[490px]">
              <div className="w-full bg-gray-200 rounded-full h-4">
                <div className="bg-blue-600 h-4 rounded-full w-[95%]"></div>
              </div>
              <p className="text-right text-xl font-medium mt-1">95%</p>
            </div>
          </div>
          <div className=" flex flex-col">
            <p className="text-xl">Креативлик</p>
            <div className="flex items-center gap-4 w-[490px]">
              <div className="w-full bg-gray-200 rounded-full h-4">
                <div className="bg-blue-600 h-4 rounded-full w-[75%]"></div>
              </div>
              <p className="text-right text-xl font-medium mt-1">75%</p>
            </div>
          </div>
          <div className=" flex flex-col">
            <p className="text-xl">Ходимларга йуналганлик</p>
            <div className="flex items-center gap-4 w-[490px]">
              <div className="w-full bg-gray-200 rounded-full h-4">
                <div className="bg-blue-600 h-4 rounded-full w-[86%]"></div>
              </div>
              <p className="text-right text-xl font-medium mt-1">86%</p>
            </div>
          </div>
        </div>
        <div>
          <RaderChart />
        </div>
        <div className=" flex flex-col gap-5 mt-10">
          <div className="1-chart flex flex-col">
            <p className="text-xl">Топширикларга йуналганлик</p>
            <div className="flex items-center gap-4 w-[490px]">
              <div className="w-full bg-gray-200 rounded-full h-4">
                <div className="bg-blue-600 h-4 rounded-full w-[95%]"></div>
              </div>
              <p className="text-right text-xl font-medium mt-1">95%</p>
            </div>
          </div>
          <div className="2-chart flex flex-col">
            <p className="text-xl">Фаол ижтимоий муносабатлар</p>
            <div className="flex items-center gap-4 w-[490px]">
              <div className="w-full bg-gray-200 rounded-full h-4">
                <div className="bg-blue-600 h-4 rounded-full w-[75%]"></div>
              </div>
              <p className="text-right text-xl font-medium mt-1">75%</p>
            </div>
          </div>
          <div className="3-chart flex flex-col">
            <p className="text-xl">Уз устида ишлаш</p>
            <div className="flex items-center gap-4 w-[490px]">
              <div className="w-full bg-gray-200 rounded-full h-4">
                <div className="bg-blue-600 h-4 rounded-full w-[86%]"></div>
              </div>
              <p className="text-right text-xl font-medium mt-1">86%</p>
            </div>
          </div>
          <div className="4-chart flex flex-col">
            <p className="text-xl">Муаммоли вазиятга йуналганлик</p>
            <div className="flex items-center gap-4 w-[490px]">
              <div className="w-full bg-gray-200 rounded-full h-4">
                <div className="bg-blue-600 h-4 rounded-full w-[86%]"></div>
              </div>
              <p className="text-right text-xl font-medium mt-1">86%</p>
            </div>
          </div>
        </div>
      </div>
      <img src={qrKod} alt="" />
    </div>
  );
}
