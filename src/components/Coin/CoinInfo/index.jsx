import { useState } from "react";

const CoinInfo = ({ coin }) => {
  const [showFullDesc, setShowFullDesc] = useState(false);

  const shortDesc = `${coin.desc.slice(
    0,
    200
  )}... <span style="color:#fab44c; cursor:pointer;">Read more</span>`;
  const longDesc = `${coin.desc} <span style="color:#fab44c; cursor:pointer;">Read less</span>`;

  return (
    <div className="flex flex-col gap-8">
      <div
        className="p-4 shadow-md relative shadow-primary-color/10 rounded-lg border-t border-primary-color 
        bg-neutral-200 dark:bg-dark-grey"
      >
        <div className="flex items-center gap-2">
          <img
            src={coin.image}
            alt={`${coin.name} logo`}
            className="w-10 h-10"
          />
          <div className="flex flex-col">
            <span className="font-bold text-gray-900 dark:text-white text-lg md:text-xl">{coin.name}</span>
            <span className="text-xs md:text-sm text-gray-700 dark:text-gray-300 uppercase">
              {coin.symbol}
            </span>
          </div>
        </div>
        <div className="absolute top-4 right-4 text-primary-color text-2xl">
          <strong className="text-dark-grey dark:text-gray-300 text-sm">Market Rank:</strong> #
          {coin.market_cap_rank}
        </div>
        <div
          className="mt-2 text-dark-grey dark:text-gray-300 text-sm cursor-pointer"
          onClick={() => setShowFullDesc(!showFullDesc)}
          dangerouslySetInnerHTML={{
            __html: showFullDesc ? longDesc : shortDesc,
          }}
        ></div>
      </div>

      <div
        className="p-4 shadow-md shadow-primary-color/10 rounded-lg border-t border-primary-color space-y-4
        bg-neutral-200 dark:bg-dark-grey"
      >
        <div>
          <strong className="text-dark-grey dark:text-white">Official Website:</strong>
          <ul className="flex gap-4 flex-wrap">
            {coin.homepage.map((url, index) => {
              if (!url) return null;

              const linkText = new URL(url).hostname;
              return (
                <li key={index}>
                  <a
                    href={url}
                    className="text-primary-color"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {linkText}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="flex gap-4 flex-wrap">
          <strong className="text-dark-grey dark:text-white">Blockchain Sites:</strong>
          {coin.blockchain_site.map((url, index) => {
            if (!url) return null;
            const linkText = new URL(url).hostname;
            return (
              <div key={index}>
                <a
                  href={url}
                  className="text-dark-grey dark:text-gray-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {linkText}
                </a>
              </div>
            );
          })}
        </div>
        <p className="text-dark-grey dark:text-gray-300">
          <strong>Categories:</strong>{" "}
          {coin.categories.map((category, index) => {
            if (index === coin.categories.length - 1) {
              return category;
            }
            return `${category}, `;
          })}
        </p>
      </div>
    </div>
  );
};

export default CoinInfo;
