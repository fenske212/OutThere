// src/app/registrationM/page.tsx

"use client";

import * as React from "react";
import { useState } from 'react';

// Define your types as needed
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
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
};

type MemberFormProps = {};

const Image: React.FC<ImageProps> = ({ src, alt, className }) => (
  <img loading="lazy" src={src} alt={alt} className={className} />
);

const Nav: React.FC<NavProps> = ({ items }) => (
  <nav className="flex gap-5 my-auto text-xl font-bold text-amber-600 max-md:flex-wrap">
    {items.map((item) => (
      <div className="grow" tabIndex={0} key={item}>
        {item}
      </div>
    ))}
  </nav>
);

const FormField: React.FC<FormFieldProps> = ({ label, id, type, onChange, value }) => (
  <div className="flex flex-col grow text-2xl font-bold bg-amber-600 max-md:mt-10">
    <label className="text-white font-bold text-2xl" htmlFor={id}>
      {label}
    </label>
    <input
      id={id}
      type={type}
      value={value}
      onChange={onChange}
      className="shrink-0 mt-5 rounded-xl bg-stone-50 h-[38px] pl-3"
      aria-label={label}
    />
  </div>
);


const MemberForm: React.FC<MemberFormProps> = () => {
  const [formData, setFormData] = useState({
    type: 'sponsor',
    firstName: '',
    lastName: '',
    company: '',
    title: '',
    email: '',
    phone: '',
    category: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target as HTMLInputElement | HTMLTextAreaElement;
    setFormData({ ...formData, [id]: value });
  };
  

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/addRow', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        alert('Registration successful');
        setFormData({ type:'sponsor', firstName: '', lastName: '', company: '', title: '', email: '', phone: '', category: ''});
      } else {
        alert('Error registering');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Error submitting form');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col grow max-md:mt-10 max-md:max-w-full">
      <h2 className="self-start ml-20 px-1 text-3xl font-bold text-white max-md:ml-2.5">
        Register as a Sponsor
      </h2>
        <div className="px-7 py-10 ml-20 mt-2 bg-amber-600 h-[1000px] rounded-xl max-md:px-5 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                  <FormField label="First Name" id="firstName" type="text" onChange={handleChange} value={formData.firstName} />
                  <FormField label="Your Company" id="company" type="text" onChange={handleChange} value={formData.company} />
                  <FormField label="Your Title" id="title" type="text" onChange={handleChange} value={formData.title} />
                  <FormField label="Email" id="email" type="email" onChange={handleChange} value={formData.email} />
                  <FormField label="Phone Number" id="phone" type="tel" onChange={handleChange} value={formData.phone} />
                </div>
                <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                  <FormField label="Last Name" id="lastName" type="text" onChange={handleChange} value={formData.lastName} />
                  <Image
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/e64f25e85f6cd2a2dc86b56e33ff5e53459c5287755fd62d89cf9ab84d5b6769?apiKey=5225f171b9d24c36ba6d7c8220e73d94&"
                    alt=""
                    className="self-start mt-8 w-full aspect-[0.76]"
                  />
                </div>
            </div>
            <div className="flex flex-col grow text-2xl mt-5 text-bold bg-amber-600 max-md:mt-10">
              <label className="text-white font-bold text-2xl" htmlFor="activity">
                Recreation Cateogry
              </label>
              <textarea
                id="category"
                value={formData.category}
                onChange={handleChange}
                className="mt-5 rounded-xl font-bold bg-stone-50 h-[100px] pl-3"
                aria-label="Activity"
              />
            <button 
                  type="submit"
                  className="justify-center items-center font-bold text-2xl px-16 py-4 mt-7 text-amber-600 whitespace-nowrap rounded-xl bg-stone-50 max-md:px-5"
                >
                  Submit
                </button>
          </div>
        </div>
    </form>
  );
};

const MyComponent = () => {
  const navItems = ["About us", "Members", "Sponsors", "Register", "Login"];

  return (
    <div className="flex flex-col pt-3 bg-white">
      <header className="flex flex-col items-center pr-9 pl-3.5 w-full max-md:pr-5 max-md:max-w-full">
        <div className="flex gap-5 justify-between self-stretch w-full max-md:flex-wrap max-md:max-w-full">
          <div className="flex gap-4">
            <a href="/" className="flex gap-0.5">
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
              Out There Social Club
            </h1>
          </div>
          <Nav items={navItems} />
        </div>
      </header>
      <div className = "mt-3"> </div>
      <main className=" w-full" style={{ backgroundImage: `url('/sponsorsBg.png')`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <main className="mt-12 w-full max-w-[1827px] max-md:mt-10 max-md:max-w-full">
        <section className="flex gap-5 max-md:flex-col w-[100%] max-md:gap-0">
          <div className="flex flex-col w-[59%] h-[1200px] mr-10 max-md:ml-0 max-md:w-full">
            <MemberForm />
          </div>
          <div className="ml-60"> </div>
          <aside className="flex flex-col mt-20 ml-5 w-[100%] h-[500px] flex-grow max-md:ml-0 max-md:w-full">
            <Image
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/bbabd4443967166bf74205f0488cf363244e569fab388749e455333fd834f93a?apiKey=5225f171b9d24c36ba6d7c8220e73d94&"
              alt="Happy Member"
              className="w-full h-full rounded aspect-[1.23] max-md:max-w-full"
            />
            <div className="mx-6 mt-14 text-3xl font-bold text-white max-md:mx-2.5 max-md:mt-10">
              “I've been able to see my friends and have much more social experiences since joining OutThere. I highly recommend” - Lindsey Smith
            </div>
          </aside>
        </section>
      </main>
    </main>
    </div>
  );
};

export default MyComponent;
