import Aside from "@/components/Aside";
import FormGroup from "@/components/FormGroup";
import Button from "@/components/Button";

export default function Home() {
  return (
    <main className="flex justify-center items-center h-screen w-9/12 mx-auto container">
      <div className="bg-secondary-alabaster p-4 rounded-xl gap-20 flex">
        <Aside />
        <section className="mt-10 flex flex-col ">
          <h1 className="text-primary-marineBlue font-bold text-3xl">
            Personal info
          </h1>
          <p className="text-secondary-coolGray mt-2">
            Please provide your name, email adress, and phone number.
          </p>
          <form className="mt-10 flex flex-wrap container w-4/5 justify-end  h-full">
            <FormGroup label={"Name"} placeholder={"e.g. Stephen King"} />
            <FormGroup
              label={"Email Address"}
              placeholder={"e.g. stephenking@lorem.com"}
            />
            <FormGroup
              label={"Phone Number"}
              placeholder={"e.g. +1 234 567 890"}
            />
            <Button className="">Next Step</Button>
          </form>
        </section>
      </div>
    </main>
  );
}
