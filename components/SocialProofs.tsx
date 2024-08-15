export function SocialProofs() {
  return (
    <div className="flex flex-col items-center gap-[60px] justify-center w-full ">
      <h2 className="text-[40px] font-bold">
        More than 25,000 teams use Collabs
      </h2>
      <div className="flex gap-10 items-center justify-center w-full ">
        <div className="flex items-center justify-center gap-5">
          <img
            src={"/unsplash.png"}
            height={32}
            width={32}
            alt={"logo1"}
          />
          <span className="text-[#A6A6A6] text-3xl font-semibold">
            Unsplash
          </span>
        </div>
        <div className="flex items-center justify-center gap-5">
          <img
            src={"/notion.png"}
            height={32}
            width={32}
            alt={"logo1"}
          />
          <span className="text-[#A6A6A6] text-3xl font-semibold">Notion</span>
        </div>
        <div className="flex items-center justify-center gap-5">
          <img
            src={"/inter.png"}
            height={32}
            width={32}
            alt={"logo1"}
          />
          <span className="text-[#A6A6A6] text-3xl font-semibold">
            INTERCOM
          </span>
        </div>
        <div className="flex items-center justify-center gap-5">
          <img
            src={"/descript.png"}
            height={32}
            width={32}
            alt={"logo1"}
          />
          <span className="text-[#A6A6A6] text-3xl font-semibold">
            descript
          </span>
        </div>
        <div className="flex items-center justify-center gap-5">
          <img
            src={"/gram.png"}
            height={32}
            width={32}
            alt={"logo1"}
          />
          <span className="text-[#A6A6A6] text-3xl font-semibold">
            grammarly
          </span>
        </div>
      </div>
    </div>
  );
}
