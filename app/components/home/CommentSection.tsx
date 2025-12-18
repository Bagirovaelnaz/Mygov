import { GoArrowUpRight } from "react-icons/go";

const CommentSection = () => {
  return (
    <div>
      <div className="mx-[120px] mt-[120px] mb-10">
        <div className="flex flex-col gap-8 mb-10">
          <h2>Rəy bildirin</h2>

          <div className="flex justify-between">
            {" "}
            <p className=" font-medium text-[#3B474D]">
              Portalın gələcək təkmilləşdirilməsi üçün öz rəyinizi bildirin və
              ya onlayn xidmətin göstərilməsi ilə bağlı şikayətinizi bizə <br />{" "}
              göndərin
            </p>
            <button className="button-5">Rəy bildirin</button>
          </div>
        </div>

        <span className=" font-medium text-[#7988a6]">
          Səhifənin son yenilənmə tarixi:{" "}
        </span>
        <span style={{ fontWeight: "500" }}>12.03.2025</span>
      </div>
      <div className="flex w-full mt-[100px] border gap-8 ">
        <a
          href="https://azerbaijan.un.org/az/sdgs"
          className="flex w-full min-w-[297px] transform flex-col justify-center border-e border-[#EEF0EF] px-6 pb-5 pt-6 "
        >
          <h4>Azərbaycanda Dayanıqlı İnkişaf Məqsədləri üzrə işimiz</h4>
          <GoArrowUpRight />
        </a>
        <a
          href="https://turkiye.gov.tr/"
          className="flex w-full min-w-[297px] transform flex-col justify-center border-e border-[#EEF0EF] px-6 pb-5 pt-6 "
        >
          <h4>Qardaş ölkə Türkiyənin e-Devlet portalı</h4>
          <GoArrowUpRight />
        </a>
        <a
          href="https://turkiye.gov.tr/"
          className="flex w-full min-w-[297px] transform flex-col justify-center border-e border-[#EEF0EF] px-6 pb-5 pt-6 "
        >
          <h4>Dünyanı dəyişdirmək üçün 17 məqsəd</h4>
          <GoArrowUpRight />
        </a>
        <a
          href="https://turkiye.gov.tr/"
          className="flex w-full min-w-[297px] transform flex-col justify-center border-e border-[#EEF0EF] px-6 pb-5 pt-6 "
        >
          <h4>Milli İnformasiya Portalı</h4>
          <GoArrowUpRight />
        </a>
        <a
          href="https://turkiye.gov.tr/"
          className="flex w-full min-w-[297px] transform flex-col justify-center  border-[#EEF0EF] px-6 pb-5 pt-6 "
        >
          <h4>Gələcək planlar</h4>
          <GoArrowUpRight />
        </a>
      </div>
    </div>
  );
};

export default CommentSection;
