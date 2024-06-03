const AddNewStrategies = () => {
  return (
    <div className="flex flex-col m-3 px-3 py-6 rounded-lg bg-white">
      <div className="p-8 w-full">
        {/* Header */}
        <div className="mb-6">
          <a href="#" className="text-blue-500 hover:underline">
            &lt; ALL STRATEGIES
          </a>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Strategy Description and Key Stats */}
          <div className="col-span-3 md:col-span-2">
            <h2 className="text-2xl font-bold mb-4">STRATEGY NAME</h2>
            <p className="mb-4">
              This trade strategy is built on the idea that market moves with
              large orders and aims to identify areas where large orders reside
              and trade with the money flow.
            </p>
            <div className="flex flex-col gap-4">
              <h3 className="font-bold text-lg">KEY STATS</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <span className="font-bold">Win Ratio:</span> 50%
                </div>
                <div>
                  <span className="font-bold">Risk Reward:</span> 5R to 10R
                </div>
                <div>
                  <span className="font-bold">Cumulative Wins:</span> 25
                </div>
                <div>
                  <span className="font-bold">Profit Factor:</span> 50%
                </div>
                <div>
                  <span className="font-bold">Average Win/Loss:</span> 5R to 10R
                </div>
                <div>
                  <span className="font-bold">Cumulative Losses:</span> 5
                </div>
              </div>
            </div>
            {/* Rules */}
            <div className="mt-4">
              <h3 className="font-bold mb-2">RULES</h3>
              <ul className="list-disc list-inside">
                <li>Markets Traded</li>
                <li>Timing of the Trades</li>
                <li>Screen Layout</li>
                <li>Broker</li>
                <li>Platform</li>
                <li>ENTRY RULES</li>
                <li>TAKE PROFIT RULES</li>
                <li>STOP LOSS RULES</li>
              </ul>
            </div>
            {/* Visual Representation and Entry Details */}
            <div className="mt-4">
              <img
                src="https://editorial.fxstreet.com/miscelaneous/image-638494818129142977.png"
                alt=""
                className="w-full rounded-lg"
              />
            </div>
          </div>
        </div>

        <div className="mb-6 mt-4 flex flex-col gap-2">
          <div>
            <div className="flex">
              <div className="font-bold">Trend:</div>
              <p>
                If on timeframe [Daily, H4] the Swing direction is HH Direction
                of Trade is BUY If on timeframe [Daily, H4] the Swing direction
                is LL Direction of Trade is SELL
              </p>
            </div>
          </div>
          {/* Other sections */}
          {/* ... */}
        </div>

        {/* Routine and Ideas to Improve */}
        <div className="flex flex-col gap-8">
          <div>
            <h3 className="font-bold mb-4">ROUTINE</h3>
            <ul className="list-disc list-inside">
              <li>Pre and Post Market Ritual</li>
              <li>Preparation at Start of the Trading Day</li>
              <li>Review and Journal Routines</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">IDEAS TO IMPROVE</h3>
            <ul className="list-disc list-inside">
              <li>Win Size Improvement</li>
              <li>Reduce Loss Size</li>
              <li>Trades I am better at</li>
              <li>Reduce Trade Frequency</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddNewStrategies;
