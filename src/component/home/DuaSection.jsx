import { Link } from "react-router";

const DuaSection = () => {
  return (
    <section className="pt-16 px-6 ">
      <div className="max-w-7xl mx-auto text-center">

        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          A Du’a for Ramadan
        </h2>
        <p className="text-neutral mb-12">
          A simple reminder for a meaningful Ramadan.
        </p>

        {/* Dua Card */}
        <div className="bg-base-100 shadow-xl rounded-2xl p-8 md:p-12 border border-base-300">

          {/* Arabic */}
          <p className="text-2xl md:text-3xl leading-loose font-semibold mb-6">
            اللهم إنك عفو تحب العفو فاعفُ عني
          </p>

          {/* Transliteration */}
          <p className="italic text-lg mb-4 text-neutral">
            Allahumma innaka ‘afuwwun tuhibbul ‘afwa fa’fu ‘anni
          </p>

          {/* Meaning */}
          <p className="text-base md:text-lg text-neutral">
            O Allah, You are Most Forgiving, and You love forgiveness;
            so forgive me.
          </p>

             <div className="mt-8">
          <span className="text-sm text-base-content/70 poppins">
            — A du’a often recited during the last ten nights of Ramadan 🌙
          </span>
        </div>

        </div>

        {/* Button */}
        <div className="mt-10">
          <Link
            to="/planner"
            className="btn btn-primary px-8 rounded-full shadow-md hover:scale-105 transition-transform duration-300"
          >
            Go to Planner
          </Link>
        </div>

      </div>
    </section>
  );
};

export default DuaSection;