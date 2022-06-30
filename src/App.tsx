import Entry from "./components/Entry";

const App = () => {
  return (
    <main className="p-1">
      <div className="flex items-center justify-between bg-green-400">
        <h1 className="text-xl font-bold">Your countdowns</h1>
        <i className="ri-add-fill ri-2x"></i>
      </div>

      <br />

      <div className="space-y-1">
        <Entry />
        <Entry />
        <Entry />
      </div>
    </main>
  );
};

export default App;
