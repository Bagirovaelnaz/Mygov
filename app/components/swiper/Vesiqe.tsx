import { RiDownloadLine, RiEyeLine, RiEyeOffLine } from "react-icons/ri";
import HideGroup from "./HideText";
import { useState } from "react";

const IdentityCardPage = () => {
  const [visible, setVisible] = useState<boolean>(true);

  return (
    <div className="data-section">
       <div className="flex justify-between items-center  p-5">
        <h4 className="font-semibold text-[17px] leading-6">
         Şəxsiyyət vəsiqəsi

        </h4>
        <span
          className="cursor-pointer text-[#0F7EF5]"
          onClick={() => setVisible((prev) => !prev)}
        >
          {visible ? <RiEyeLine size={20} /> : <RiEyeOffLine size={20} />}
        </span>
      </div>
      <div className="flex gap-5 ml-4">
        <img
          src="https://media.istockphoto.com/id/1682296067/photo/happy-studio-portrait-or-professional-man-real-estate-agent-or-asian-businessman-smile-for.jpg?s=612x612&w=0&k=20&c=9zbG2-9fl741fbTWw5fNgcEEe4ll-JegrGlQQ6m54rg="
          alt=""
        />
        <HideGroup
          visible={visible}
          labels={[
            { title: "FIN", value: "5FK9Y7U" },
            { title: "Pasportun nömrəsi", value: "AA486024" },
          ]}
        />
      </div>

      <div className="flex justify-between bg-white mt-5 pl-4 rounded-b-lg text-[#0F7EF5] font-semibold uppercase leading-5 text-[14px] items-center p-3 ">
        <span>Sənədi yüklə</span>
        <RiDownloadLine />
      </div>
    </div>
  );
};

export default IdentityCardPage;
