import * as React from 'react';
import Link from 'next/link';

type HeaderComponentProps = {
  logoSrc: string;
  navItems: string[];
};

const HeaderComponent: React.FC<HeaderComponentProps> = ({ logoSrc, navItems }) => {
  return (
    <header className="flex overflow-hidden relative flex-col items-start pt-3.5 pr-9 pb-20 pl-3.5 w-full text-xl font-bold text-white" style={{ minHeight: '1000px' }}>
      <img 
        loading="lazy" 
        src={logoSrc} 
        alt="Background" 
        className="absolute inset-0 w-full h-full object-cover" 
      />
      <div className="flex relative gap-5 justify-between self-stretch w-full max-md:flex-wrap max-md:max-w-full">
        <div className="flex gap-4">
        <Link href="/">
          <img 
            loading="lazy" 
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/910c3cd67c242c0d15838d90ed248af281a63a0717f943a14470f8537a8ce421?apiKey=5225f171b9d24c36ba6d7c8220e73d94&" 
            alt="Logo" 
            className="shrink-0 aspect-[1.59] w-[51px] text-xl cursor-pointer"
          />
        </Link>
          <div className="flex-auto my-auto text-2xl">Out There Social Club</div>
        </div>
        <nav className="flex gap-5 my-auto max-md:flex-wrap text-xl">
          {navItems.map((item) => (
            <a href={`#${item.toLowerCase()}`} key={item} className="grow">
              {item}
            </a>
          ))}
        </nav>
      </div>
      <div className="absolute tracking-wide left-30 top-[500px] pr-10 mr-auto ml-32 text-9xl font-bold max-md:max-w-full max-md:text-4xl">
        Go Out with Your
        <br />
        Friends - On Us!
      </div>
    </header>
  );
};



type SectionProps = {
  imgSrc: string;
  heading: string;
  description: string;
  className?: string;
};

const SectionComponent: React.FC<SectionProps> = ({ imgSrc, heading, description, className}) => {
  return (
    <section className="flex flex-col ml-10 w-[130%] max-md:w-full">
      <div className="flex flex-col grow px-5 font-bold text-amber-600 max-md:mt-10 max-md:max-w-full">
        <img loading="lazy" src={imgSrc} alt={heading} className="w-full aspect-[1.37] max-md:max-w-full" />
        <div className="self-center mt-11 mr-6 -ml-0.5 text-5xl max-md:mt-10 max-md:text-5xl">{heading}</div>
        <div className="mt-7 -mr-1 text-3xl ml-10 max-md:max-w-full">{description}</div>
      </div>
    </section>
  );
};

const App: React.FC = () => { // this is the main component, where all the attributes are being called. like main
  const navItems = ['About us', 'Members', 'Sponsors', 'Register', 'Login'];

  return (
    <div className="flex flex-col bg-white">
      <HeaderComponent logoSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/77846dc17fda938c4c6666cbdcc5d87528363a184cdbb7670fa6959f3b71ee23?apiKey=5225f171b9d24c36ba6d7c8220e73d94&" navItems={navItems} />
      <main className="self-center mt-6 w-full max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0"> 
        <section className="flex flex-col w-[95%] h-[100%] max-w-[1400px] "> 
          <div className="flex grow gap-5 mt-11 font-bold max-md:flex-wrap max-md:mt-10">
            <div className="flex-col grow px-5 pb-px basis-0 w-full">
              <Link href="/registrationM" className="flex justify-center items-center px-10 pt-28 pb-28 text-5xl text-white bg-amber-600 rounded-2xl max-md:px-5 max-md:max-w-full max-md:text-4xl">
                For Members
              </Link>
            </div>
          </div>
        </section>
        <section className="flex flex-col w-[100%] h-[100%] max-w-[1400px] "> 
          <div className="flex grow gap-5 mt-11 font-bold max-md:flex-wrap max-md:mt-10">
            <div className="shrink-0 self-end mt-80 h-60 bg-amber-600 border-2 border-amber-600 border-solid max-md:mt-10" />
            <div className="flex-col grow px-5 pb-px basis-0 w-full">
              <Link href="/registrationS" className="flex justify-center items-center px-10 pt-28 pb-28 text-5xl text-white bg-amber-600 rounded-2xl max-md:px-5 max-md:max-w-full max-md:text-4xl">
                For Brand Partners
              </Link>
            </div>
            </div>
        </section>
        </div>
      </main>
      <footer className="flex justify-between gap-5 items-end px-5 pt-20 pb-5 mt-48 w-full text-2xl font-bold text-white bg-black max-md:flex-wrap max-md:px-5 max-md:mt-10 max-md:max-w-full">
        <div className="flex-auto mt-20 max-md:mt-10 max-md:max-w-full">2024 OutThere Social Club, All rights reserved</div>
        <div className="flex-auto pr-px pl-48 mt-20 ml-96 max-md:mt-10">Privacy / Contact</div>
      </footer>
    </div>
  );
};

export default App;