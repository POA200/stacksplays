"use client";
import Wordsearch from "/public/Wordsearch.png";
import Stackswitch from "/public/Stackswitch.png";
import gameplaceholder from "/public/gameplaceholder.png";

const Popular = () => {
  return (
    <section className="py-12">
      {/* Title */}
      <div className="text-center mb-24">
        <h2 className="text-3xl font-bold lg:text-6xl text-primary text-center">POPULAR THIS WEEK</h2>
      </div>

      {/* Cards */}
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-6">

        {/* Card 1 */}
        <div className="bg-primary pb-4 rounded-xl flex flex-col items-center justify-between hover:scale-102 transition-transform duration-300">
          <img src={Stackswitch} alt="Stacks Switch" className="mb-6" />
          <h3 className="text-background font-bold text-xl mb-2">STACKS SWITCH</h3>
        </div>

        {/* Card 2 */}
        <div className="bg-primary pb-4 rounded-xl flex flex-col items-center justify-between hover:scale-102 transition-transform duration-300">
          <img src={Wordsearch} alt="Word Search Game" className="mb-6" />
          <h3 className="text-background font-bold text-xl mb-2">WORD SEARCH</h3>
        </div>

        {/* Card 3 */}
        <div className="bg-primary pb-4 rounded-xl flex flex-col items-center justify-between hover:scale-102 transition-transform duration-300">
          <img src={gameplaceholder} className="mb-6" />
          <h3 className="text-background font-bold text-xl mb-2">GAME 2</h3>
        </div>

      </div>
    </section>
  );
};

export default Popular;