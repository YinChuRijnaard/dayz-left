// Dependency imports
import { Toaster } from "react-hot-toast";
import { Heading } from "@chakra-ui/react";

// Store imports
import useCountdownStore from "./store/CountdownStore";

// Component imports
import Entry from "./components/Entry";
import EntryModal from "./components/EntryModal";

const App = () => {
  // cd === countdown
  const { countdowns } = useCountdownStore();

  const countdownsMapped = countdowns.map((cd) => {
    return (
      <Entry
        key={cd.id}
        id={cd.id}
        title={cd.title}
        date={cd.date}
        color={cd.color}
      />
    );
  });

  return (
    <main className="min-w-max p-1">
      <div className="flex items-center justify-between">
        <Heading size="lg">Your countdowns</Heading>
        <EntryModal />
      </div>

      <br />

      <div className="space-y-1">
        {countdowns.length > 0 ? (
          countdownsMapped
        ) : (
          <Heading size="lg">Add your first countdown</Heading>
        )}
      </div>

      <Toaster />
    </main>
  );
};

export default App;
