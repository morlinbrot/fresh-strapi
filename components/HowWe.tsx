export function HowWe() {
  return (
    <>
      <div className="flex flex-col max-w-[617px]">
        <h2 className="text-[40px] font-bold">
          How we support our partner all over the world
        </h2>
        <p className="text-gray font-medium">
          SaaS become a common delivery model for many business application,
          including office software, messaging software, payroll processing
          software, DBMS software, management software
        </p>
        <button className="bg-primary rounded-full  h-[62px] text-white px-4 py-2">
          Try free trial
        </button>
      </div>

      <div className="flex flex-col gap-[30px]">
        <div className="flex justify-start gap-5">
          <div className="w-[60px] h-[60px] bg-[#FFFFFF] flex justify-center items-center rounded-md drop-shadow-sm">
            <img
              src={"/publishing.svg"}
              height={30}
              width={30}
              alt={"Publishing logo"}
            />
          </div>
          <div className="flex flex-col justify-start align-top gap-[10px]">
            <h3 className="text-[28px] font-bold">Publishing</h3>
            <p className="text-gray font-medium max-w-[428px] ">
              Plan, collaborate, and publish your content that drivees
              meaningful engagement and growth for your barnd
            </p>
          </div>
        </div>
        <div className="flex justify-start gap-5">
          <div className="w-[60px] h-[60px] bg-[#FFFFFF] flex justify-center items-center rounded-md drop-shadow-sm">
            <img
              src={"/analytics.svg"}
              height={30}
              width={30}
              alt={"Analytics logo"}
            />
          </div>
          <div className="flex flex-col justify-start align-top gap-[10px]">
            <h3 className="text-[28px] font-bold">Analytics</h3>
            <p className="text-gray font-medium  max-w-[428px]">
              Analyze your performance and create goegeous report
            </p>
          </div>
        </div>
        <div className="flex justify-start gap-5">
          <div className="w-[60px] h-[60px] bg-[#FFFFFF] flex justify-center items-center rounded-md drop-shadow-sm">
            <img
              src={"/engagement.svg"}
              height={30}
              width={30}
              alt={"Engagement logo"}
            />
          </div>
          <div className="flex flex-col justify-start align-top gap-[10px]">
            <h3 className="text-[28px] font-bold">Engagement</h3>
            <p className="text-gray font-medium  max-w-[428px]">
              Quickly navigate you anda engage with your adience
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
