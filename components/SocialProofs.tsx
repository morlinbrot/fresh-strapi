export function SocialProofs() {
  return (
    <div className="flex flex-col items-center gap-[60px] justify-center w-full ">
      <h2 className="text-[40px] font-bold">
        More than 25,000 teams use Collabs
      </h2>
      <div className="flex gap-10 items-center justify-center w-full ">
        <div className="flex items-center justify-center gap-5">
          <img
            src={"/intercom.svg"}
            height={32}
            width={32}
            alt={"Intercom logo"}
          />
          <span className="text-gray text-3xl font-semibold">
            Unsplash
          </span>
        </div>
        <div className="flex items-center justify-center gap-5">
          <img
            src={"/notion.svg"}
            height={32}
            width={32}
            alt={"Notion logo"}
          />
          <span className="text-gray text-3xl font-semibold">Notion</span>
        </div>
        <div className="flex items-center justify-center gap-5">
          <img
            src={"/intercom.svg"}
            height={32}
            width={32}
            alt={"Intercom logo"}
          />
          <span className="text-gray text-3xl font-semibold">
            INTERCOM
          </span>
        </div>
        <div className="flex items-center justify-center gap-5">
          <img
            src={"/descript.svg"}
            height={32}
            width={32}
            alt={"Descript logo"}
          />
          <span className="text-gray text-3xl font-semibold">
            descript
          </span>
        </div>
        <div className="flex items-center justify-center gap-5">
          <img
            src={"/grammarly.svg"}
            height={32}
            width={32}
            alt={"Grammarly logo"}
          />
          <span className="text-gray text-3xl font-semibold">
            grammarly
          </span>
        </div>
      </div>
    </div>
  );
}
