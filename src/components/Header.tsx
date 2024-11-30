import { FC } from "react";
import uzb from "../assets/uzb.jpg";
const Header: FC = () => {
  return (
    <div>
      <header className="flex items-center pt-9 justify-between">
        <div className="flex  w-[250px] justify-center flex-col ">
          <img className="w-[100px] ml-[70px]" src={uzb} alt="" />
          <p className="text-center font-bold text-xl">
            Давлат хизматининг <br /> ягона электрон ахборот-
            <br />
            аҳлил тизими
          </p>
        </div>
        <div>
          <h2 className="text-4xl text-center font-bold">Республика Ассессмент маркази <br />  онлайн платформаси</h2>
        </div>
        <div>
            <h2 className="text-7xl font-bold text-[#0956AF]">78</h2>
        </div>

      </header>
    </div>
  );
};

export default Header;
