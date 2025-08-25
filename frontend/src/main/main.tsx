import city from "../assets/city.png";
import {
    Link,
} from 'react-router-dom';

const isActive: boolean = false


export function Main() {
  const authButtons = isActive ? (
    <div className="navmenu-button h-[80px] bg-[#172234]">
      <button className="font-Merriweather text-white border-[#B29F7E] bg-[#B29F7E] border-[1px] w-[160px] h-[44px] my-[18px] ml-[1250px] font-bold text-[16px] tracking-[0px] leading-[22px] rounded-[5px] cursor-pointer hover:bg-[#172234] hover:text-[#B29F7E] transition duraction-300">
        Log Out
      </button>
    </div>
  ) : (
    <div className="navmenu h-[80px] bg-[#172234]">
      <Link to="/login">
          <button className="navmenu-button font-Merriweather text-white border-[#B29F7E] bg-[#B29F7E] border-[1px] w-[160px] h-[44px] my-[18px] ml-[1100px] font-bold text-[16px] tracking-[0px] leading-[22px] rounded-[5px] cursor-pointer hover:bg-[#172234] hover:text-[#B29F7E] transition duraction-300">
            Log In
          </button>
      </Link>
      <Link to="/register">
          <button className="navmenu-button font-Merriweather text-white border-[#B29F7E] bg-[#B29F7E] border-[1px] w-[160px] h-[44px] my-[18px] ml-[10px] font-bold text-[16px] tracking-[0px] leading-[22px] rounded-[5px] cursor-pointer hover:bg-[#172234] hover:text-[#B29F7E] transition duraction-300">
            Sign Up
          </button>
      </Link>
    </div>
  );

  return (
    <>
      {authButtons}
      <div className="container">
        <div className="container-img">
          <img src={city} alt="city" className="w-full h-[1024px] brightness-50"/>
        </div>
        <div className="container-content -mt-[550px] relative z-10">
          <h1 className="container-content-title font-Merriweather font-bold text-[64px] leading-[80px] text-center text-white">
            The chemical negatively charged
          </h1>
          <p className="container-content-description mx-[310px] mt-[10px] w-[822px] h-[96px] font-Merriweather font-normal text-[24px] leading-[32px] -tracking-[2%] text-center text-white">
            Numerous calculations predict, and experiments confirm, that the force field reflects the beam, while the mass defect is not formed. The chemical compound is negatively charged. Twhile the mass defect is
          </p>
          <Link to="/register">
            <button className="container-content-button font-Merriweather font-bold text-[20px] leading-[34px] text-white border-white border-[1px] rounded-[8px] mx-[675px] mt-[30px] py-[10px] px-[24px] cursor-pointer">
              Get Started
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}

