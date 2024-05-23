// /pages/user/strategy/addNewStrategies.jsx

const AddNewStrategies = () => {
  return (
    <div className="p-8 w-full">
      {/* Header */}
      <div className="mb-6">
        <a href="#" className="text-blue-500">
          &lt; ALL STRATEGIES
        </a>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-3 gap-8">
        {/* Strategy Description and Key Stats */}
        <div className="col-span-2">
          <h2 className="text-xl font-bold mb-4">STRATEGY NAME</h2>
          <p className="mb-4">
            This trade strategy is built on the idea that market moves with
            large orders and aims to identify areas where large orders reside
            and trade with the money flow.
          </p>
          <div className="flex flex-col gap-4">
            <h3 className="font-bold ">KEY STATS</h3>
            <div className="flex gap-12">
              <div>
                <div>
                  <span className="text-base font-bold">Win Ratio: </span>50%
                </div>
                <div>
                  <span className="text-base font-bold">Risk Reward: </span>5R
                  to 10R
                </div>
                <div>
                  <span className="text-base font-bold">Cumulative Wins: </span>
                  25
                </div>
              </div>
              <div>
                <div>
                  <span className="text-base font-bold">Profit Factor: </span>
                  50%
                </div>
                <div>
                  <span className="text-base font-bold">
                    Average Win/Loss:{" "}
                  </span>
                  5R to 10R
                </div>
                <div>
                  <span className="text-base font-bold">
                    Cumulative Losses:{" "}
                  </span>
                  5
                </div>
              </div>
            </div>
          </div>
          {/* Rules */}
          <div className="mt-4">
            <h3 className="font-bold mb-2">RULES</h3>
            <div>Markets Traded</div>
            <div>Timing of the Trades</div>
            <div>Screen Layout</div>
            <div>Broker</div>
            <div>Platform</div>
            <div>ENTRY RULES</div>
            <div>TAKE PROFIT RULES</div>
            <div>STOP LOSS RULES</div>
          </div>
          {/* Visual Representation and Entry Details */}
          <div className="mt-4">
            <img
              src={
                "https://editorial.fxstreet.com/miscelaneous/image-638494818129142977.png"
              }
              alt=""
              className="w-[100%] h-[100%] rounded-lg"
            />
          </div>
        </div>
      </div>

      <div className="mb-6 mt-4 flex flex-col gap-2">
        {" "}
        <div>
          <div className="flex">
            <div className="font-bold ">Trend: </div>
            <p>
              If on timeframe [Daily, H4] the Swing direction is HH Direction of
              Trade is BUY If on timeframe [Daily, H4] the Swing direction is LL
              Direction of Trade is SELL
            </p>
          </div>
        </div>
        <div>
          <div className="flex">
            <div className="font-bold ">Pattern:</div>
            <p>
              If on timeframe [Daily, H4] the Swing direction is HH Direction of
              Trade is BUY If on timeframe [Daily, H4] the Swing direction is LL
              Direction of Trade is SELL
            </p>
          </div>
        </div>
        <div>
          <div className="flex">
            <div className="font-bold ">Point:</div>
            <p>
              If on timeframe [Daily, H4] the Swing direction is HH Direction of
              Trade is BUY If on timeframe [Daily, H4] the Swing direction is LL
              Direction of Trade is SELL
            </p>
          </div>
        </div>
        <div>
          <div className="flex">
            <div className="font-bold ">Price:</div>
            <p>
              Overwhelming balance between Supply and Demand Price delivery to
              the zone is impulsive or corrective Price objective completed
              Supply is in control or Demand is in control
            </p>
          </div>
        </div>
        <div>
          <div className="flex">
            <div className="font-bold ">Entry:</div>
            <p>
              On [M15, Timeframe, Instrument] in Column [Broke, Value] Find EM
            </p>
          </div>
        </div>
        <div>
          <div className="flex gap-4">
            <div className="font-bold ">Manage:</div>
            <div className="flex flex-col gap-2">
              <div>
                <div>Entry Price:</div>
                <div>
                  Order Type: Limit, Market, Stop, Today, Good Till Cancelled,
                  One Cancels Other, Fill or Kill, Trailing Stop, Limit and
                  Stop, Take Profit, Pending
                </div>
              </div>
              <div>
                <div>Stop Loss:</div>
                <div>
                  Order Type: Stop Buy: Lower edge of POI minus spread OR Higher
                  edge of POI plus spread (min. 2 pip for EU)
                </div>
              </div>
              <div>
                <div>Break-even Price:</div>
                <div>Trail to B/E after LTF structure is broken</div>
              </div>
              <div>
                <div>Target Profit 1:</div>
                <div>Next Zone (X%)</div>
              </div>
              <div>
                <div>Target Profit 2:</div>
                <div>Weak Structure (60% to 90%)</div>
              </div>
              <div>
                <div>Target Profit 3:</div>
                <div>5R, 10R</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Routine and Ideas to Improve */}
      <div className="flex flex-col">
        <div className="mb-4">
          <h3 className="font-bold mb-4">ROUTINE</h3>
          <div>Pre and Post Market Ritual</div>
          <div>Preparation at Start of the Trading Day</div>
          <div>Review and Journal Routines</div>
        </div>
        <div>
          <h3 className="font-bold mb-4">IDEAS TO IMPROVE</h3>
          <div>Win Size Improvement</div>
          <div>Reduce Loss Size</div>
          <div>Trades I am better at</div>
          <div>Reduce Trade Frequency</div>
        </div>
      </div>
    </div>
  );
};

export default AddNewStrategies;
