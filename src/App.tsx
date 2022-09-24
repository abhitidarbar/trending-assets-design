import React from "react";
import "./App.css";

type Asset = {
  icon: string;
  iconGradient: string;
  name: string;
  amount: string;
  price: string;
  change: number;
  pair: [string, string, string];
};

let trendingAssets: Asset[] = [
  { 
    icon: "./btc.svg",
    iconGradient: "btc-gradient",
    name: "Bitcoin (BTC)",
    amount: "$31,812.80",
    price: "$60,000",
    change: 10,
    pair: ["./sol.svg", "./eth.svg", "./bnb.svg"],
  },
  {
    icon: "./sol.svg",
    iconGradient: "sol-gradient",
    name: "Solana (SOL)",
    amount: "$32.83",
    price: "$60,000",
    change: -12.32,
    pair: ["./btc.svg", "./eth.svg", "./bnb.svg"],
  },
  {
    icon: "./eth.svg",
    iconGradient: "eth-gradient",
    name: "Ethereum (ETH)",
    amount: "$1,466.45",
    price: "$60,000",
    change: -11.93,
    pair: ["./sol.svg", "./btc.svg", "./bnb.svg"],
  },
  {
    icon: "./bnb.svg",
    iconGradient: "bnb-gradient",
    name: "Binance USD (BUSD)",
    amount: "$1.00",
    price: "$60,000",
    change: 0.26,
    pair: ["./sol.svg", "./eth.svg", "./bnb.svg"],
  },
  {
    icon: "./shib.svg",
    iconGradient: "shib-gradient",
    name: "Shiba Inu (SHIB)",
    amount: "$0.00000001948",
    price: "$60,000",
    change: -8.1,
    pair: ["./sol.svg", "./eth.svg", "./bnb.svg"],
  },
];

const App: React.FC = () => {
  return (
    <div
      className={
        "min-h-screen overflow-x-scroll relative bg-[#14172B] z-1 p-20 "
      }
    >
      <div className="flex">
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="mt-2 mr-4"
        >
          <path
            d="M5.99998 14.6666H9.99998C13.3333 14.6666 14.6666 13.3333 14.6666 9.99998V5.99998C14.6666 2.66665 13.3333 1.33331 9.99998 1.33331H5.99998C2.66665 1.33331 1.33331 2.66665 1.33331 5.99998V9.99998C1.33331 13.3333 2.66665 14.6666 5.99998 14.6666Z"
            stroke="#DC1FFF"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M4.88666 9.66003L6.47332 7.60003C6.69999 7.30669 7.11999 7.25336 7.41332 7.48003L8.63332 8.44003C8.92666 8.66669 9.34666 8.61336 9.57332 8.32669L11.1133 6.34003"
            stroke="#DC1FFF"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <div className="font-semibold leading-8 uppercase opacity-90 heading">
          Trending Assets
        </div>
      </div>
      <div className="flex">
        {trendingAssets.map((a) => {
          return (
            <div className="px-4">
              <div className="card flex flex-col items-center">
                <div className="icon">
                  <div className={"iconBorder flex justify-center "+a.iconGradient}><img src={a.icon} alt="" height="50px" width="50px"/></div>
                </div>
                <div className="font-semibold text-xs coin opacity-90">
                  {a.name}
                </div>
                <div className="relative price mt-1 z-1 flex p-0.5 ">
                  <div className="absolute ml-auto mr-auto opacity-90 amount w-60 ">
                    {a.amount}
                  </div>
                  <div
                    className={
                      "ml-auto opacity-90 uppercase change mt-0.5 mr-3 " +
                      (a.change > 0 ? "positive" : "negative")
                    }
                  >
                    {(a.change > 0 ? "+" : "") + a.change + "%"}
                  </div>
                </div>
                <div className="font-semibold text-xs coin opacity-90 mt-1">
                  Price
                </div>
                <div className="price mt-1">
                  <div className="opacity-90 amount mt-0.5">{a.price}</div>
                </div>
                <div className="font-semibold text-xs coin opacity-90 mt-1">
                  TVL
                </div>
                <div className="pairs flex mt-1">
                  <img src={a.pair[0]} className="ml-3" alt="" height="23px" width="23px" />
                  <img src={a.pair[1]} className="mx-3" alt="" height="23px" width="23px" />
                  <img src={a.pair[2]} className="mr-3" alt="" height="23px" width="23px" />
                </div>
                <div className="font-semibold text-xs coin opacity-90 mt-1">
                  Popular pairs
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default App;
