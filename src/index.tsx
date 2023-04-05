import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Navbar from './components/sections/navbar';
import HeroSectionBG from './lib/media/hero-bg-md.webp';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <React.StrictMode>
    <div className="app-container relative">
      {/* <img
        src={HeroSectionBG}
        alt="hero-section-bg"
        className="absolute select-none top-0 left-0"
        style={{
          left: '-1050px',
          top: '0px',
          maxWidth: 'calc(280vw + 1270px)',
        }}
      /> */}
      <div className="container-xl absolute right-[1040px] -z-20">
        <picture>
          <source
            media="(max-width: 768px)"
            type="image/webp"
            srcSet="https://github.githubassets.com/images/modules/site/home-campaign/hero-bg-md.webp 1x, https://github.githubassets.com/images/modules/site/home-campaign/hero-bg.webp 2x"
          />
          <source
            media="(min-width: 1280px)"
            type="image/webp"
            srcSet="https://github.githubassets.com/images/modules/site/home-campaign/hero-bg.webp 1x, https://github.githubassets.com/images/modules/site/home-campaign/hero-bg-2x.webp 2x"
          />
          <img
            alt="hero-bg"
            aria-hidden="true"
            width="2377"
            className="max-lg:absolute top-0 events-none"
            src="https://github.githubassets.com/images/modules/site/home-campaign/hero-bg.webp"
            style={{
              maxWidth: 'calc(230vw + 1670px)',
              backgroundAttachment: 'fixed',
              backgroundSize: 'cover',
            }}
          />
        </picture>
      </div>
      <div className="app-content-container absolute w-full">
        <Navbar />
        <App />
      </div>
    </div>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
