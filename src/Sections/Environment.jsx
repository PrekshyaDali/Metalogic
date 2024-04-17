import React from "react";

export default function Environment() {
  const environment = [
    {
      img: "/environment/bonus.png",
      title: "Performance Bonus",
    },
    {
      img: "/environment/healthbenifits.png",
      title: "Health Benefits",
    },
    {
      img: "/environment/paidleave.png",
      title: "Paid Leave Policy",
    },
    {
      img: "/environment/learninganddevelopment.png",
      title: "Learning And Development",
    },
    {
      img: "/environment/foodcredit.png",
      title: "Food Credit",
    },
    {
      img: "/environment/teamactivity.png",
      title: "Team Activities",
    },
  ];
  return (
    <div className="px-3 sm:px-20 md:px-40 pb-20 bg-[#BBCCD3]  pt-32 flex flex-col  ">
      <div className=" space-y-8  ">
        <div className="flex flex-col gap-5 justify-center ">
          <h2 className="text-black text-center ">MetaLogy Cares For You</h2>
          <p className="text-center">
            We're less about valuing perks and more about valuing people. <br />{" "}
            Our employee benefits are built around enhancing your wellbeing - at
            work and at home
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 justify-items-center">
          {environment.map((item, index) => (
            <div
              key={index}
              className="w-56 h-44 p-5 rounded-md bg-white shadow-md border-2 flex flex-col justify-center items-center "
            >
              <div className="h-10">
                <img
                  className="object-cover hover:-rotate-12"
                  src={item.img}
                  alt=""
                />
              </div>
              <h3 className="font-bold text-center ">{item.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
