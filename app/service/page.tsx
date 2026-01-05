import { RiDownloadLine } from "react-icons/ri";

const Service = () => {
  return (
    <div className="h-[100vh]">
      <h1>Item</h1>
      <div className="data-section">
        <h4 className="font-semibold text-[17px] leading-6 mt-3 ml-4">
          Şəxsiyyət vəsiqəsi
        </h4>
        <div className="flex gap-5  ml-4">
          <img
            src="https://media.istockphoto.com/id/1682296067/photo/happy-studio-portrait-or-professional-man-real-estate-agent-or-asian-businessman-smile-for.jpg?s=612x612&w=0&k=20&c=9zbG2-9fl741fbTWw5fNgcEEe4ll-JegrGlQQ6m54rg="
            alt=""
          />
          <div className="mt-5 flex flex-col gap-2">
            <span className="text-[#626973] font-medium text-[17px]">
              FIN code
            </span>
            <p className="text-[#000000] leading-3">5FK9Y7U</p>
            <span className="text-[#626973] font-medium text-[17px]">
              Serial number
            </span>
            <p className="text-[#000000] leading-3">AA486024</p>
          </div>
        </div>
        <div className="flex justify-between bg-white mt-5 pl-4 rounded-b-[8px] text-[#0F7EF5] font-semibold uppercase leading-5 text-[14px] items-center p-3 ">
          <span>Sənədi yüklə</span>
          <RiDownloadLine />
        </div>
      </div>
      //?
      <div className="data-section2">
        <h4 className="font-semibold text-[17px] leading-6 mt-3 ml-4">
          Şəxsiyyət vəsiqəsi
        </h4>
        <div className="flex gap-5  ml-4">
          <img
            src="https://media.istockphoto.com/id/1682296067/photo/happy-studio-portrait-or-professional-man-real-estate-agent-or-asian-businessman-smile-for.jpg?s=612x612&w=0&k=20&c=9zbG2-9fl741fbTWw5fNgcEEe4ll-JegrGlQQ6m54rg="
            alt=""
          />
          <div className="mt-5 flex flex-col gap-2">
            <span className="text-[#626973] font-medium text-[17px]">
              FIN code
            </span>
            <p className="text-[#000000] leading-3">5FK9Y7U</p>
            <span className="text-[#626973] font-medium text-[17px]">
              Serial number
            </span>
            <p className="text-[#000000] leading-3">AA486024</p>
          </div>
        </div>
        <div className="flex justify-between bg-white mt-5 pl-4 rounded-b-[8px] text-[#0F7EF5] font-semibold uppercase leading-5 text-[14px] items-center p-3 ">
          <span>Sənədi yüklə</span>
          <RiDownloadLine />
        </div>
      </div>
    </div>
  );
};

export default Service;
