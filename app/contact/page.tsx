"use client";
import React, { useEffect, useRef, useState } from "react";

const Contact: React.FC = () => {
  const sectionsRef = useRef<Array<HTMLHeadingElement | null>>([]);
  const [activeIndex, setActiveIndex] = useState(0);

  const sections = [
    {
      title: "Xidmətin təsviri",
      content: (
        <div>
          <p className="text-gray-700 text-[18px]">
            44 günlük Vətən müharibəsindən sonra Azərbaycan vətəndaşlarının
            işğaldan azad edilmiş ərazilərə minik avtomobili ilə səfərləri üçün
            rəqəmsal formada icazələrin alınması xidmətidir. Lorem ipsum dolor
            sit amet consectetur adipisicing elit. Blanditiis, repudiandae. Quam
            nihil nam expedita animi, consequatur illo fuga amet nemo neque odio
            accusamus aut inventore sapiente! Molestiae optio quas illum. Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Saepe cupiditate
            animi, error, voluptatem quas, voluptatibus deserunt reiciendis
            eligendi tempora laudantium excepturi incidunt esse nesciunt
            officiis! Quis itaque facere rerum dolore! Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Voluptates, consectetur odio
            recusandae velit quis alias repellendus quo cupiditate harum
            quibusdam illo optio, exercitationem, porro voluptas! Nobis
            consequatur quaerat quas accusantium. 44 günlük Vətən müharibəsindən
            sonra Azərbaycan vətəndaşlarının işğaldan azad edilmiş ərazilərə
            minik avtomobili ilə səfərləri üçün rəqəmsal formada icazələrin
            alınması xidmətidir. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Blanditiis, repudiandae. Quam nihil nam expedita
            animi, consequatur illo fuga amet nemo neque odio accusamus aut
            inventore sapiente! Molestiae optio quas illum. Lorem ipsum dolor
            sit amet consectetur adipisicing elit. Saepe cupiditate animi,
            error, voluptatem quas, voluptatibus deserunt reiciendis eligendi
            tempora laudantium excepturi incidunt esse nesciunt officiis! Quis
            itaque facere rerum dolore! Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Voluptates, consectetur odio recusandae velit quis
            alias repellendus quo cupiditate harum quibusdam illo optio,
            exercitationem, porro voluptas! Nobis consequatur quaerat quas
            accusantium. 44 günlük Vətən müharibəsindən sonra Azərbaycan
            vətəndaşlarının işğaldan azad edilmiş ərazilərə minik avtomobili ilə
            səfərləri üçün rəqəmsal formada icazələrin alınması xidmətidir.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis,
            repudiandae. Quam nihil nam expedita animi, consequatur illo fuga
            amet nemo neque odio accusamus aut inventore sapiente! Molestiae
            optio quas illum. Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Saepe cupiditate animi, error, voluptatem quas, voluptatibus
            deserunt reiciendis eligendi tempora laudantium excepturi incidunt
            esse nesciunt officiis! Quis itaque facere rerum dolore! Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Voluptates, consectetur
            odio recusandae velit quis alias repellendus quo cupiditate harum
            quibusdam illo optio, exercitationem, porro voluptas! Nobis
            consequatur quaerat quas accusantium. 44 günlük Vətən müharibəsindən
            sonra Azərbaycan vətəndaşlarının işğaldan azad edilmiş ərazilərə
            minik avtomobili ilə səfərləri üçün rəqəmsal formada icazələrin
            alınması xidmətidir. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Blanditiis, repudiandae. Quam nihil nam expedita
            animi, consequatur illo fuga amet nemo neque odio accusamus aut
            inventore sapiente! Molestiae optio quas illum. Lorem ipsum dolor
            sit amet consectetur adipisicing elit. Saepe cupiditate animi,
            error, voluptatem quas, voluptatibus deserunt reiciendis eligendi
            tempora laudantium excepturi incidunt esse nesciunt officiis! Quis
            itaque facere rerum dolore! Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Voluptates, consectetur odio recusandae velit quis
            alias repellendus quo cupiditate harum quibusdam illo optio,
            exercitationem, porro voluptas! Nobis consequatur quaerat quas
            accusantium. 44 günlük Vətən müharibəsindən sonra Azərbaycan
            vətəndaşlarının işğaldan azad edilmiş ərazilərə minik avtomobili ilə
            səfərləri üçün rəqəmsal formada icazələrin alınması xidmətidir.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis,
            repudiandae. Quam nihil nam expedita animi, consequatur illo fuga
            amet nemo neque odio accusamus aut inventore sapiente! Molestiae
            optio quas illum. Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Saepe cupiditate animi, error, voluptatem quas, voluptatibus
            deserunt reiciendis eligendi tempora laudantium excepturi incidunt
            esse nesciunt officiis! Quis itaque facere rerum dolore! Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Voluptates, consectetur
            odio recusandae velit quis alias repellendus quo cupiditate harum
            quibusdam illo optio, exercitationem, porro voluptas! Nobis
            consequatur quaerat quas accusantium. 44 günlük Vətən müharibəsindən
            sonra Azərbaycan vətəndaşlarının işğaldan azad edilmiş ərazilərə
            minik avtomobili ilə səfərləri üçün rəqəmsal formada icazələrin
            alınması xidmətidir. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Blanditiis, repudiandae. Quam nihil nam expedita
            animi, consequatur illo fuga amet nemo neque odio accusamus aut
            inventore sapiente! Molestiae optio quas illum. Lorem ipsum dolor
            sit amet consectetur adipisicing elit. Saepe cupiditate animi,
            error, voluptatem quas, voluptatibus deserunt reiciendis eligendi
            tempora laudantium excepturi incidunt esse nesciunt officiis! Quis
            itaque facere rerum dolore! Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Voluptates, consectetur odio recusandae velit quis
            alias repellendus quo cupiditate harum quibusdam illo optio,
            exercitationem, porro voluptas! Nobis consequatur quaerat quas
            accusantium. 44 günlük Vətən müharibəsindən sonra Azərbaycan
            vətəndaşlarının işğaldan azad edilmiş ərazilərə minik avtomobili ilə
            səfərləri üçün rəqəmsal formada icazələrin alınması xidmətidir.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis,
            repudiandae. Quam nihil nam expedita animi, consequatur illo fuga
            amet nemo neque odio accusamus aut inventore sapiente! Molestiae
            optio quas illum. Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Saepe cupiditate animi, error, voluptatem quas, voluptatibus
            deserunt reiciendis eligendi tempora laudantium excepturi incidunt
            esse nesciunt officiis! Quis itaque facere rerum dolore! Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Voluptates, consectetur
            odio recusandae velit quis alias repellendus quo cupiditate harum
            quibusdam illo optio, exercitationem, porro voluptas! Nobis
            consequatur quaerat quas accusantium.
          </p>
        </div>
      ),
    },
    {
      title: "Xidmətin ödənişi",
      content: (
        <div className=" border-[#dae2ff] border-2  p-4 rounded-lg">
          <h4 className="font-semibold mb-2">Ödəniş növləri:</h4>
          <p className="text-[18px]">Rüsum tələb edilmir</p>
          <p className="text-[18px]">Rüsum tələb edilmir</p>
          <p className="text-[18px]">Rüsum tələb edilmir</p>
          <p className="text-[18px]">Rüsum tələb edilmir</p>
          <p className="text-[18px]">Rüsum tələb edilmir</p>
        </div>
      ),
    },
    {
      title: "Xidmətin addımları",
      content: (
        <div className="border-[#dae2ff] border-2 p-5 rounded-xl flex gap-4">
          <ol className="list-decimal list-inside text-gray-700 space-y-1">
            <li>Səyahət məlumatlarının daxil edilməsi</li>
            <li>Avtomobil məlumatlarının daxil edilməsi</li>
            <li>Sərnişin məlumatlarının daxil edilməsi</li>
            <li>Məlumatların təsdiqi və nəticənin əldə olunması</li>
          </ol>
        </div>
      ),
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = sectionsRef.current.indexOf(
              entry.target as HTMLHeadingElement
            );
            setActiveIndex(index);
          }
        });
      },
      { threshold: 0.5 }
    );

    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="flex gap-6 p-8">
      <div className="w-3/4">
        {sections.map((section, index) => (
          <div key={index} className="mb-16">
            <h3
              ref={(el: any) => (sectionsRef.current[index] = el)}
              className="text-2xl font-bold mb-4"
            >
              {section.title}
            </h3>
            <div className="pb-1">{section.content}</div>
          </div>
        ))}
      </div>

      <div className="w-1/4 sticky top-44 z-10 h-fit p-4 border border-gray-300 rounded-lg">
        {sections.map((section, index) => (
          <div
            key={index}
            className={`mb-2 p-2 rounded cursor-pointer text-sm ${
              activeIndex === index
                ? "bg-blue-500 text-white"
                : "bg-gray-100 text-gray-800"
            }`}
            onClick={() => {
              const yOffset = -196;
              const element = sectionsRef.current[index];
              if (element) {
                const y =
                  element.getBoundingClientRect().top +
                  window.pageYOffset +
                  yOffset;
                window.scrollTo({ top: y, behavior: "smooth" });
              }
            }}
          >
            {section.title}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Contact;
