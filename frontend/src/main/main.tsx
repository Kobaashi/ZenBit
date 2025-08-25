import city from "../assets/city.png";

export function Main() {
  return (<>
    <div className="h-[80px] bg-[#172234]">
      <button className="font-Merriweather text-[#B29F7E] border-[#B29F7E] border-[1px] w-[160px] h-[44px] my-[18px] ml-[1100px] font-bold text-[16px] tracking-[0px] leading-[22px] rounded-[5px] cursor-pointer">Log In</button>
      <button className="font-Merriweather text-[#B29F7E] border-[#B29F7E] border-[1px] w-[160px] h-[44px] my-[18px] ml-[10px] font-bold text-[16px] tracking-[0px] leading-[22px] rounded-[5px] cursor-pointer">Sign Up</button>
    </div>
    <div>
      <div>
        <img src={city} alt="city" className="w-full h-[1024px] brightness-50"/>
      </div>
      <div className="-mt-[550px] relative z-10">
        <h1 className="font-Merriweather font-bold text-[64px] leading-[80px] text-center text-white">The chemical  negatively charged</h1>
        <p className="mx-[310px] mt-[10px] w-[822px] h-[96px] font-Merriweather font-normal text-[24px] leading-[32px] -tracking-[2%] text-center text-white">Numerous calculations predict, and experiments confirm, that the force field reflects the beam, while the mass defect is not formed. The chemical compound is negatively charged. Twhile the mass defect is </p>
        <button className="font-Merriweather font-bold text-[20px] leading-[34px] text-white border-white border-[1px] rounded-[8px] mx-[675px] mt-[30px] py-[10px] px-[24px] cursor-pointer">Get Started</button>
      </div>
    </div>
  </>)
}
