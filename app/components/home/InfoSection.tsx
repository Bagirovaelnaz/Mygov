const InfoSection = () => {
  return (
    <div className="bg-[#DEEEFC] mt-6 h-auto">
      <div className="flex container mx-auto py-[90px] max-md:flex-col md:items-center md:gap-[80px] md:rounded-none lg:gap-[200px]">
        <div className="flex-1 flex flex-col gap-5 p-6">
          <p className="text-[#7489B2] text-[32px] font-bold ">Şəxsi məlumatlarınıza 
            <br /> vahid və təhlükəsiz çıxış</p>
          <span className="text-xl text-[#3B474D] font-medium ">
            Sizə aid müxtəlif kateqoriyalar üzrə məlumatlarınızı vahid mərkəzdən <br />
            rəqəmsal və təhlükəsiz şəkildə əldə edə, sənəd formasında yükləyə və <br />
            digər tərəflərlə paylaşa bilərsiniz.
          </span>
          <a href="https://my.gov.az/landing-my-info" className="button-5 w-auto self-center p-3 ">
            MƏLUMATLARA KEÇ
          </a>
        </div>
        <div className="flex-1 info"> 
          <div>
            <img
              src="https://mygov-cdn.e-gov.az/cdn/life-events/web/M%C9%99%C5%9F%C4%9Fulluq.svg"
              alt=""
              className="p-3.5"
            />
            <span>Şəxsi və Ailə məlumatları</span>
          </div>
          <div>
            <img
              src="https://mygov-cdn.e-gov.az/cdn/life-events/web/M%C9%99%C5%9F%C4%9Fulluq.svg"
              alt=""
              className="p-3.5"
            />
            <span>Əmək və maliyyə məlumatları</span>
          </div>
          <div>
            <img
              src="https://mygov-cdn.e-gov.az/cdn/life-events/web/T%C9%99hsil-almaq.svg"
              alt=""
              className="p-3.5"
            />
            <span>Təhsil məlumatları</span>
          </div>
          <div>
            <img
              className="p-3.5"
              src="https://mygov-cdn.e-gov.az/cdn/life-events/web/Sa%C4%9Flaml%C4%B1q.svg"
              alt=""
            />
            <span>Tibb məlumatları</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoSection;
