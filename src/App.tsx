// Framework elements
import { useState } from "react";

// Dependency imports
import { nanoid } from "nanoid";
import { Heading } from "@chakra-ui/react";

// Hook imports
import { useCountdown } from "./hooks/useCountdown";

// Component imports
import Entry from "./components/Entry";
import EntryModal from "./components/EntryModal";

const App = () => {
  const [days, hours, minutes, seconds] = useCountdown(new Date(2022, 11, 25));
  const [countdowns, setCountdowns] = useState([
    {
      id: nanoid(),
      title: "Christmas 2023",
      date: "25/12/2023",
    },
  ]);

  const countdownsMap = countdowns.map((cd) => {
    return (
      <Entry
        id={cd.id}
        title={cd.title}
        date={cd.date}
        days={days}
        hours={hours}
        minutes={minutes}
        seconds={seconds}
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

      <div className="space-y-1">{countdownsMap}</div>
    </main>
  );
};

export default App;
