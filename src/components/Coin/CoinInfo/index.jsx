import { useState } from "react";

const CoinInfo = ({ name, symbol, image, desc }) => {
  const [showFullDesc, setShowFullDesc] = useState(false);

  const shortDesc = `${desc.slice(0, 200)}... <span style="color:#5659a1";cursor:pointer;">Read more</span>`;
  const longDesc = `${desc} <span style="color:#5659a1";cursor:pointer;">Read less</span>`;

  return (
    <div className="p-4 shadow-md shadow-primary-color/10 rounded-lg border-t border-primary-color">
      <div className="flex items-center gap-2">
        <img src={image} alt={`${name} logo`} className="w-10 h-10" />
        <div className="flex flex-col">
          <span className="font-bold text-white">{name}</span>
          <span className="text-sm text-gray-300 uppercase">{symbol}</span>
        </div>
      </div>
      <div
        className="mt-2 text-gray-300 text-sm cursor-pointer"
        onClick={() => setShowFullDesc(!showFullDesc)}
        dangerouslySetInnerHTML={{
          __html: showFullDesc ? longDesc : shortDesc,
        }}
      ></div>
    </div>
  );
};

export default CoinInfo;
