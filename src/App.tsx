import Entry from "./components/Entry";

const App = () => {
  return (
    <div className="mx-2 my-2">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-bold">Your countdowns</h1>
        <i className="ri-add-fill ri-2x"></i>
      </div>

      <br />

      <div className="space-y-1">
        <Entry />
        <Entry />
        <Entry />
      </div>
    </div>
  );
};

export default App;
