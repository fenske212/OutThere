import * as React from "react";

type ImageProps = {
  src: string;
  alt: string;
  className: string;
};

type NavProps = {
  items: string[];
};

type FormFieldProps = {
  label: string;
  id: string;
  type: string;
};

type MemberFormProps = {};

const Image: React.FC<ImageProps> = ({ src, alt, className }) => (
  <img loading="lazy" src={src} alt={alt} className={className} />
);

const Nav: React.FC<NavProps> = ({ items }) => (
  <nav className="flex gap-5 my-auto text-xl font-bold text-amber-600 max-md:flex-wrap">
    {items.map((item) => (
      <div className="grow " tabIndex={0}>
        {item}
      </div>
    ))}
  </nav>
);

const FormField: React.FC<FormFieldProps> = ({ label, id, type }) => (
  <div className="flex flex-col grow text-2xl font-bold text-white max-md:mt-10">
    <label className="text-white" htmlFor={id}>
      {label}
    </label>
    <input
      id={id}
      type={type}
      className="shrink-0 mt-5 rounded-xl bg-stone-50 h-[38px]"
      aria-label={label}
    />
  </div>
);

const MemberForm: React.FC<MemberFormProps> = () => (
  <form className="flex flex-col grow max-md:mt-10 max-md:max-w-full">
    <h2 className="self-start ml-20 px-1 text-3xl font-bold text-amber-600 max-md:ml-2.5">
      Register as a member
    </h2>
    <div className="px-7 py-10 ml-20 mt-2 bg-amber-600 rounded-xl max-md:px-5 max-md:max-w-full">
      <div className="flex gap-5 max-md:flex-col max-md:gap-0">
        <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
          <FormField label="First Name" id="firstName" type="text" />
          <FormField label="Email" id="email" type="email" />
          <FormField label="Phone Number" id="phone" type="tel" />
          <FormField label="Date of Birth" id="dob" type="date" />
          <FormField label="Address" id="address" type="text" />
          <p className="mt-10 text-base">
            By pressing submit you agree to our privacy policy
          </p>
        </div>
        <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
          <FormField label="Last Name" id="lastName" type="text" />
          <Image
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/e64f25e85f6cd2a2dc86b56e33ff5e53459c5287755fd62d89cf9ab84d5b6769?apiKey=5225f171b9d24c36ba6d7c8220e73d94&"
            alt=""
            className="self-start mt-8 w-full aspect-[0.76]"
          />
          <button
            type="submit"
            className="justify-center items-center px-16 py-4 mt-7 text-amber-600 whitespace-nowrap rounded-xl bg-stone-50 max-md:px-5"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  </form>
);

const MyComponent = () => {
  const navItems = ["About us", "Members", "Sponsors", "Register", "Login"];

  return (
    <div className="flex flex-col pt-3 bg-white">
      <header className="flex flex-col items-center pr-9 pl-3.5 w-full max-md:pr-5 max-md:max-w-full">
        <div className="flex gap-5 justify-between self-stretch w-full max-md:flex-wrap max-md:max-w-full">
          <div className="flex gap-4">
            <a href="../page" className="flex gap-0.5">
              <Image
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/f79a7274472c24b2f9c293ea73cfd3b844d5e04f5ab7a14add1a6cc162eb00fe?apiKey=5225f171b9d24c36ba6d7c8220e73d94&"
                alt="Logo Part 1"
                className="shrink-0 aspect-[0.78] fill-amber-600 w-[25px]"
              />
              <Image
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/902d1d6e10d192cd68bb06aa9dd4241350ce79e289aa5f56d24f13f79a4571b2?apiKey=5225f171b9d24c36ba6d7c8220e73d94&"
                alt="Logo Part 2"
                className="shrink-0 w-6 aspect-[0.75] fill-amber-600"
              />
            </a>
            <h1 className="flex-auto my-auto text-2xl font-bold text-amber-600">
              OutThere Social Club
            </h1>
          </div>
          <Nav items={navItems} />
        </div>
      </header>
      <main className="mt-12 w-full max-w-[1127px] max-md:mt-10 max-md:max-w-full">
        <section className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-[59%] max-md:ml-0 max-md:w-full">
            <MemberForm />
          </div>
          <aside className="flex flex-col ml-5 w-[41%] max-md:ml-0 max-md:w-full">
            <Image
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/bbabd4443967166bf74205f0488cf363244e569fab388749e455333fd834f93a?apiKey=5225f171b9d24c36ba6d7c8220e73d94&"
              alt="Happy Member"
              className="w-full aspect-[1.23] max-md:max-w-full"
            />
            <blockquote className="mx-6 mt-14 max-md:mx-2.5 max-md:mt-10">
              “I’ve been able to see my friends and have much more social
              experiences since joining OutThere. I highly recommend” - Lindsey
              Smith
            </blockquote>
          </aside>
        </section>
      </main>
      <section className="mt-80 text-4xl font-bold text-amber-600 max-md:mt-10">
        insert photo carousel
      </section>
      <footer className="flex gap-5 items-end px-5 pt-20 pb-5 mt-72 w-full text-2xl font-bold text-white bg-black max-md:flex-wrap max-md:px-5 max-md:mt-10 max-md:max-w-full">
        <div className="flex-auto mt-20 max-md:mt-10 max-md:max-w-full">
          2024 OutThere Social Club, All rights reserved
        </div>
        <div className="flex-auto mt-20 max-md:mt-10">Privacy / Contact</div>
      </footer>
    </div>
  );
};

export default MyComponent;
