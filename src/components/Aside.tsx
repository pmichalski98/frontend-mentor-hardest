import React from "react";

const Aside = () => {
  const asideData = ["YOUR INFO", "SELECT PLAN", "ADD-ONS", "SUMMARY"];

  return (
    <aside className="bg-aside min-h-[568px] min-w-[274px]">
      <ul className="">
        {asideData.map((data, index) => {
          return (
            <li key={index} className="m-9 flex items-center gap-4">
              <div className="flex h-8 w-8 shrink-0     items-center justify-center rounded-full text-white outline outline-1 outline-white">
                {index + 1}
              </div>
              <div className="flex flex-wrap">
                <span className="w-full text-sm text-secondary-coolGray">
                  STEP {index + 1}
                </span>
                <p className="font-medium text-secondary-white">{data}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

export default Aside;
