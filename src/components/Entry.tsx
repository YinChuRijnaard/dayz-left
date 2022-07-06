// Dependency imports
import { Heading, Text } from "@chakra-ui/react";

// Hook imports
import { useCountdown } from "../hooks/useCountdown";

// Component imports
import EditDeleteModal from "./EditDeleteModal";

interface EntryProps {
  id: string;
  title: string;
  date: string;
}

const Entry = (props: EntryProps) => {
  const [days, hours, minutes, seconds] = useCountdown(props.date);

  return (
    <section className="flex rounded bg-red-400 p-2 text-white">
      <div>
        <Heading size="lg">{props.title}</Heading>
        <Text fontSize="sm">{props.date}</Text>
      </div>

      <div className="ml-auto mr-2 flex items-center space-x-4 font-bold">
        {/* Days */}
        <span className="flex flex-col items-center">
          <Text fontSize="lg">{days}</Text>
          <Text fontSize="xs">d</Text>
        </span>

        {/* Hours */}
        <span className="flex flex-col items-center">
          <Text fontSize="lg">{hours}</Text>
          <Text fontSize="xs">h</Text>
        </span>

        {/* Minutes */}
        <span className="flex flex-col items-center">
          <Text fontSize="lg">{minutes}</Text>
          <Text fontSize="xs">m</Text>
        </span>

        {/* Seconds */}
        <span className="flex flex-col items-center">
          <Text fontSize="lg">{seconds}</Text>
          <Text fontSize="xs">s</Text>
        </span>
      </div>

      <div className="ml-2 flex items-center justify-center">
        <EditDeleteModal id={props.id} />
      </div>
    </section>
  );
};

export default Entry;
