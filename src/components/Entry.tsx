const Entry = () => {
  return (
    <section className="flex justify-between rounded bg-red-400 p-2 text-white">
      <div>
        <h1 className="text-3xl font-bold">Christmas</h1>
        <p className="text-xs">25/12/2023</p>
      </div>

      <div className="flex w-28 items-center justify-center rounded-full bg-white py-2 px-4 font-bold text-black">
        <p>
          <span>212</span>&nbsp;days
        </p>
      </div>
      <div className="flex items-center justify-center">
        <i className="ri-more-2-fill"></i>
      </div>
    </section>
  );
};

export default Entry;
