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
    <main className="h-screen min-w-max bg-[#fcf0e5] p-1">
      <div className="flex items-center justify-between">
        <Heading size="lg">Your countdowns</Heading>
        <EntryModal />
      </div>

      <br />

      <div className="space-y-1 pb-16">
        {countdowns.length > 0 ? (
          countdownsMapped
        ) : (
          <div className="flex flex-col items-center justify-center space-y-8">
            <Heading size="lg">Add your first countdown</Heading>
            <iframe
              src="https://giphy.com/embed/dNgK7Ws7y176U"
              className="pointer-events-none h-full w-full"
            ></iframe>
          </div>
        )}
      </div>

      <Toaster />
    </main>
  );
};

export default App;
