const CommentSection = () => {
  return (
    <div className="mx-[120px] mt-8 mb-10">
      <div className="flex flex-col gap-4 mb-10">
        <h2>Rəy bildirin</h2>

        <div className="flex justify-between">
          {" "}
          <p className=" font-medium text-[#3B474D]">
            Portalın gələcək təkmilləşdirilməsi üçün öz rəyinizi bildirin və ya
            onlayn xidmətin göstərilməsi ilə bağlı şikayətinizi bizə <br />{" "}
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
  );
};

export default CommentSection;
