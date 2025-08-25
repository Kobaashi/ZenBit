import { useState, useEffect } from "react";
import { environment } from "../environment/backend";

export function Deals() {

  const [deals, setDeals] = useState([])

  useEffect(() => {
    fetch(`${environment.apiUrl}/deals`)
      .then((res) => res.json())
      .then((data) => setDeals(data))
      .catch((err) => console.error("Error fetching deals:", err));
  }, []) 

  return(
    <>
    <div className="ml-[80px] mt-[50px]">
      <h1 className="font-Merriweather font-bold text-[28px] text-[#B29F7E] leading-[34px]">Open Deals</h1>
    </div>
      <div className="grid grid-cols-2 ml-[80px] mb-[50px]">
        {deals.map((deal: any) => (
          <div key={deal.deal_id} className="rounded">
            <img 
              src={`../assets/${deal.deal_imagesrc}`} 
              alt={deal.deal_title} 
              width={100} 
              className="w-[630px] h-[400px] mt-[40px]"/>
            <div className="-mt-[100px]">
              <h3 className="ml-[14px] font-Merriweather font-bold text-[20px] text-white leading-[34px]">{deal.deal_title}</h3>
              <div className="flex">
                <p className="ml-[14px] font-Lato font-bold text-[18px] text-white leading-[22px]">{deal.deal_dhs} Dhs</p>
                <p className="ml-[90px] font-Lato font-bold text-[18px] text-white leading-[22px]">Yield: {deal.deal_yield}%</p>
                <p className="ml-[90px] font-Lato font-bold text-[18px] text-white leading-[22px]">Sold: {deal.deal_sold}%</p>
              </div>
              <div className="flex">
                  <p className="ml-[14px] font-Lato font-bold text-[18px] text-white leading-[22px]">Tiket - {deal.deal_tiket} Dhs</p>
                  <p className="ml-[60px] font-Lato font-bold text-[18px] text-white leading-[22px]">Days left {deal.deal_daysleft}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  )

}
