import { RiDownloadLine } from "react-icons/ri";

const Service = () => {
  return (
    <div className="h-[100vh]">
      <h1>Service Page</h1>
      <p>This is the service page content.</p>
      <div className="data-section">
        <h4>Ümumvətəndaş pasportu</h4>
        <div className="flex gap-5 ">
          <img
            src="https://media.istockphoto.com/id/1682296067/photo/happy-studio-portrait-or-professional-man-real-estate-agent-or-asian-businessman-smile-for.jpg?s=612x612&w=0&k=20&c=9zbG2-9fl741fbTWw5fNgcEEe4ll-JegrGlQQ6m54rg="
            alt=""
          />
          <div className="mt-5 flex flex-col gap-2">
            <span className="text-[#626973] font-medium text-[17px]">
              {" "}
              FIN code
            </span>
            <p className="text-[#000000] leading-3">5FK9Y7U</p>
            <span className="text-[#626973] font-medium text-[17px]">
              Serial number
            </span>
            <p className="text-[#000000] leading-3">AA486024</p>
          </div>
        </div>
        <div className="flex justify-between bg-white mt-5 rounded-lg cursor-pointer w-[380px] h-20 p-3 items-center ">
          <span>Sənədi yüklə</span>
          <RiDownloadLine />
        </div>
      </div>
    </div>
  );
};

export default Service;
