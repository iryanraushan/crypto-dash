const GridLoader = () => {
  return (
    <div className=" w-full lg:max-w-screen-xl max-w-screen-md mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4">
        {Array.from({ length: 10 }).map((_, index) => (
          <div
            key={index}
            className="min-w-[19rem] h-80 bg-neutral-300 dark:bg-dark-grey animate-pulse rounded-lg"
          ></div>
        ))}
      </div>
    </div>
  );
};

export default GridLoader;
