const NewsSection = async () => {

  await fetch('https://mygov-api.e-gov.az/dg-compositor-gateway/api/v1/search?query=test&csrt=17893355420925143115').then((res: any) => res.json())
  return (
    <div className=" mt-[100px] container mx-auto">
      <div className=" lg:mx-3 ">
        <h2>Xəbərlər</h2>
        <div className="grid grid-cols-1 grid-rows-1 lg:grid-cols-3 news-box ">
          <div>
            <img src="https://mygov-cdn.e-gov.az/cdn//upcoming-event/azeriqaz_ib.PNG" alt="" />
            <div>
              <p>11.12.2025</p>
              <h5>Vətəndaşlar qaz təchizatı ilə bağlı <br /> müayinə aktlarına “mygov” <br /> platformasında baxa biləcəklər</h5>
            </div>
          </div>
          <div>
            <img src="https://mygov-cdn.e-gov.az/cdn//upcoming-event/resmi_mektub.png" alt="" />
            <div>
              <p>08.12.2025</p>
              <h5>Artıq vətəndaşlar “mygov” üzərindən <br />  istənilən dövlət qurumuna rəqəmsal <br />  formada rəsmi məktub göndərə və <br /> qəbul edə biləcəklər</h5>
            </div>
          </div>
          <div>
            <img src="https://mygov-cdn.e-gov.az/cdn//upcoming-event/2milyon.PNG" alt="" />
            <div>
              <p>25.11.2025</p>
              <h5>“mygov” platformasından istifadə edən <br /> vətəndaşların sayı 2 milyonu ötüb.</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsSection;
