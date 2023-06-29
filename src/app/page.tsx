export default function Home() {
    return (
        <main className="">
            <aside className=" bg-aside  ">
                <ul className="">
                    <li>
                        <span>STEP 1</span>
                        <p>YOUR INFO</p>
                    </li>
                    <li>
                        <span>STEP 1</span>
                        <p>YOUR INFO</p>
                    </li>
                    <li>
                        <span>STEP 1</span>
                        <p>YOUR INFO</p>
                    </li>
                    <li>
                        <span>STEP 1</span>
                        <p>YOUR INFO</p>
                    </li>
                </ul>
            </aside>
            <section>
                <h1>Personal info</h1>
                <p>Please provide your name, email adress, and phone number.</p>
                <form>
                    <label htmlFor="name">Name</label>
                    <input id="name" placeholder='e.g. Stephen King' type="text"/>
                    <label htmlFor="email">Email Address</label>
                    <input id="email" type="text" placeholder='e.g. stephenking@lorem.com'/>
                    <label htmlFor="phone">Phone Number</label>
                    <input id="phone" type="text" placeholder='e.g. +1 234 567 890'/>
                </form>
                <button>Next Step</button>
            </section>
        </main>
    )
}
