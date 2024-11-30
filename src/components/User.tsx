
import  { FC, useEffect, useState } from "react";
import norm from "../assets/norm.svg";
const User: FC = () => {
  const [userInfo, setUserInfo] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://trello.vimlc.uz/get-personal-info")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setUserInfo(data);
        console.log(data);
      })
      .catch((err) => {
        setError(err.message); 
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="">Yuklanmoqda...</div>;
  if (error) return <div>Xatolik: {error}</div>;

  return (
    <div className="pt-20">
      <div className="container">
        {userInfo ? (
          <div className="flex justify-between ">
            <div className="left flex gap-12">
              <img src={userInfo.imageUrl} alt="" />
              <div className="flex flex-col ">
                <span className="name flex flex-col gap-4 w-[400px] ">
                  <h2 className="text-5xl  font-bold text-[#212529]">{userInfo.firstName}</h2>
                  <h2 className="text-5xl font-light text-[#212529]"> {userInfo.lastName}</h2>
                </span>
                <span className="flex flex-col gap-4  pt-5">
                  <p className="text-xl font-medium text-[#495057] ">
                    Тугилган сана: {userInfo.birthday}
                  </p>
                  <p className="text-xl font-medium text-[#495057] ">
                    Тугилган жой: {userInfo.address}
                  </p>
                </span>
                <span className="flex gap-[12px] font-bold  pt-5">
                  <span>
                    Буйи:
                    <p>{userInfo.height}</p>
                  </span>
                  <span>
                    Вазни:
                    <p>{userInfo.weight}</p>
                  </span>
                  <span>
                    Индекс:
                    <p>{userInfo.index}</p>
                  </span>
                  <img src={norm} alt="" />
                </span>
              </div>
            </div>
            <div className="right flex flex-col text-xl gap-9">
              <p className="text-2xl font-normal w-[480px]">
                Лавозими: <br />
                {userInfo.position}
              </p>
              <p className="text-2xl font-normal w-[480px]">
                Номзод: <br />
                {userInfo.candidate}
              </p>
            </div>
          </div>
        ) : (
          <p>malumot topilmadi</p>
        )}
      </div>
    </div>
  );
};

export default User;

