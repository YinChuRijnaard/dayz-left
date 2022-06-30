const Entry = () => {
  return (
    <section className="flex justify-between rounded bg-red-400 p-2 text-white">
      <div>
        <h1 className="text-3xl font-bold">Christmas</h1>
        <p className="text-sm">25/12/2023</p>
      </div>

      <div className="ml-auto flex items-center justify-center py-2 px-4 font-bold">
        <p className="text-xl">212</p>
        &nbsp;
        <p className="text-gray-300">d</p>
        &nbsp;
        <p className="text-xl">13</p>
        &nbsp;
        <p className="text-gray-300">h</p>
        &nbsp;
        <p className="text-xl">49</p>
        &nbsp;
        <p className="text-gray-300">m</p>
        &nbsp;
        <p className="text-xl">32</p>
        &nbsp;
        <p className="text-gray-300">s</p>
      </div>
      <div className="flex items-center justify-center">
        <i className="ri-more-2-fill ri-lg"></i>
      </div>
    </section>
  );
};

export default Entry;
