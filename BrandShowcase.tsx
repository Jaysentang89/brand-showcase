
import React from "react";

const brands = [
  "toa-logo.png",
  "jabra-logo.png",
  "barco-clickshare-logo.png",
  "mipro-logo.png",
  "datavideo-logo.png",
  "audio-technica-logo.png",
  "yamaha-logo.png",
  "aver-logo.png",
  "lg-logo.png",
  "samsung-logo.png"
];

const BrandShowcase = () => (
  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 bg-gray-100 p-4">
    {brands.map((logo, index) => (
      <div key={index} className="bg-white p-4 shadow rounded">
        <img src={`/public/assets/brands/${logo}`} alt={logo} className="h-16 mx-auto" />
      </div>
    ))}
  </div>
);

export default BrandShowcase;
