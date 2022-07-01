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
  // const [days, hours, minutes, seconds] = useCountdown(new Date(2022, 11, 25));

  return (
    <main className="min-w-max p-1">
      <div className="flex items-center justify-between">
        <Heading size="lg">Your countdowns</Heading>
        <EntryModal />
      </div>

      <br />

      <div className="space-y-1">
        <Heading size="lg">Add your first countdown</Heading>
      </div>
    </main>
  );
};

export default App;

// const handleSubmit = () => {
//   console.log("Works???");

//   const countdownDetailsArr = new Array(countdownDetails);

//   const countdownsMapped = countdownDetailsArr.map((cd) => {
//     return <Entry id={nanoid()} title={cd.title} date={cd.date} />;
//   });
// };

// const countdownsMap = countdowns.map((cd) => {
//   return (
//     <Entry
//       id={cd.id}
//       title={cd.title}
//       date={cd.date}
//       days={days}
//       hours={hours}
//       minutes={minutes}
//       seconds={seconds}
//     />
//   );
// });
