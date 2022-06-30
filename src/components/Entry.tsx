const Entry = () => {
  return (
    <section className="flex justify-between rounded bg-red-400 p-2 text-white">
      <div>
        <h1 className="text-xl font-bold">Christmas</h1>
        <p className="text-sm">25/12/2023</p>
      </div>

      <div className="ml-auto mr-0.5 flex items-center justify-center font-bold">
        <p className="text-xl">212</p>
        &nbsp;
        <sub className="text-neutral-200">d</sub>
        &nbsp;
        <p className="text-xl">13</p>
        &nbsp;
        <sub className="text-neutral-200">h</sub>
        &nbsp;
        <p className="text-xl">49</p>
        &nbsp;
        <sub className="text-neutral-200">m</sub>
        &nbsp;
        <p className="text-xl">32</p>
        &nbsp;
        <sub className="text-neutral-200">s</sub>
      </div>

      <div className="ml-0.5 flex items-center justify-center">
        <i className="ri-more-2-fill ri-lg"></i>
      </div>
    </section>
  );
};

export default Entry;
