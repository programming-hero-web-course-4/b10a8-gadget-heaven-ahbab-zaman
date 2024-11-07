import Title from "../Title/Title";

const Statistics = () => {
  Title("Statistics");
  return (
    <div>
      <div className="bg-[#9538E2] py-8">
        <div className="space-y-2 text-center w-1/2 mx-auto">
          <h1 className="text-4xl text-white font-bold">
            Statistics
          </h1>
          <p className="text-sm text-slate-300">
            See our stats based on the usage of the gadgets
          </p>
        </div>
      </div>

      <div>
        <h3 className="text-[#9538E2] text-5xl font-semibold text-center py-8">No Data Found Here</h3>
      </div>
    </div>
  );
};

export default Statistics;
