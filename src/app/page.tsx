const asideData = ["YOUR INFO", "SELECT PLAN", "ADD-ONS", "SUMMARY"];

export default function Home() {
  return (
    <main className="flex justify-center items-center h-screen">
      <div className="bg-white p-4 rounded-xl gap-20 flex">
        <aside className=" bg-aside h-[568px] w-[274px] ">
          <ul className="">
            {asideData.map((data, index) => {
              return (
                <li key={index} className="gap-4 mb-10 flex m-10">
                  <div className=" outline outline-1 rounded-full w-8  flex items-center justify-center text-white h-8 outline-white">
                    {index + 1}
                  </div>
                  <div>
                    <span className="text-white ">STEP {index + 1}</span>
                    <p className=" font-bold text-white">{data}</p>
                  </div>
                </li>
              );
            })}
          </ul>
        </aside>
        <section>
          <h1 className="">Personal info</h1>
          <p>Please provide your name, email adress, and phone number.</p>
          <form>
            <label htmlFor="name">Name</label>
            <input id="name" placeholder="e.g. Stephen King" type="text" />
            <label htmlFor="email">Email Address</label>
            <input
              id="email"
              type="text"
              placeholder="e.g. stephenking@lorem.com"
            />
            <label htmlFor="phone">Phone Number</label>
            <input id="phone" type="text" placeholder="e.g. +1 234 567 890" />
          </form>
          <button>Next Step</button>
        </section>
      </div>
    </main>
  );
}
