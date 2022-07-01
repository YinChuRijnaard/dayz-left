// Dependency imports
import { Heading } from "@chakra-ui/react";

// Component imports
import Entry from "./components/Entry";
import EntryModal from "./components/EntryModal";

const App = () => {
  return (
    <main className="min-w-max p-1">
      <div className="flex items-center justify-between">
        <Heading size="lg">Your countdowns</Heading>
        <EntryModal />
      </div>

      <br />

      <div className="space-y-1">
        <Entry
          title={"Christmas"}
          date={"25/12/2023"}
          days={"212"}
          hours={"23"}
          minutes={"49"}
          seconds={"0"}
        />
        <Entry
          title={"Birthday"}
          date={"02/09/2023"}
          days={"126"}
          hours={"08"}
          minutes={"59"}
          seconds={"12"}
        />
      </div>
    </main>
  );
};

export default App;
