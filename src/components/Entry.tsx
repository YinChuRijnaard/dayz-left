// Dependency imports
import { Heading, Text } from "@chakra-ui/react";

const Entry = () => {
  return (
    <section className="flex rounded bg-red-400 p-2 text-white">
      <div>
        <Heading size="lg">Christmas 🎄</Heading>
        <Text fontSize="sm">25/12/2023</Text>
      </div>

      <div className="ml-auto mr-2 flex items-center space-x-4 font-bold">
        {/* Days */}
        <span className="flex flex-col items-center">
          <Text fontSize="lg">212</Text>
          <Text fontSize="xs">d</Text>
        </span>

        {/* Hours */}
        <span className="flex flex-col items-center">
          <Text fontSize="lg">13</Text>
          <Text fontSize="xs">h</Text>
        </span>

        {/* Minutes */}
        <span className="flex flex-col items-center">
          <Text fontSize="lg">49</Text>
          <Text fontSize="xs">m</Text>
        </span>

        {/* Seconds */}
        <span className="flex flex-col items-center">
          <Text fontSize="lg">0</Text>
          <Text fontSize="xs">s</Text>
        </span>
      </div>

      <div className="ml-2 flex items-center justify-center">
        <i className="ri-more-2-fill ri-lg"></i>
      </div>
    </section>
  );
};

export default Entry;
