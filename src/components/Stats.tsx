
const Stats = () => {
  return (
    <section className="py-16 mr-10 ml-10">
      {/* Center the stats container */}
      <div className="max-w-4xl mx-auto text-center">
        {/* Stats box */}
        <div className="border-4 border-primary p-8 rounded-xl flex justify-around items-center">
          {/* Stat 1 */}
          <div className="text-yellow-500 gap-10">
            <p className="text-3xl font-bold">10+</p>
            <p className="text-lg">GAMES</p>
          </div>

          {/* Divider */}
          <div className="border-l-3 border-primary h-18" />

          {/* Stat 2 */}
          <div className="text-green-500 gap-10">
            <p className="text-3xl font-bold">200+</p>
            <p className="text-lg">ACTIVE GAMERS</p>
          </div>

          {/* Divider */}
          <div className="border-l-3 border-primary h-18" />

          {/* Stat 3 */}
          <div className="text-blue-500 gap-10">
            <p className="text-3xl font-bold">5000+</p>
            <p className="text-lg">NFTS</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;