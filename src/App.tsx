// Dependency imports
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  useDisclosure,
  Heading,
  Input,
  Select,
  Text,
  Button,
} from "@chakra-ui/react";

// Component imports
import Entry from "./components/Entry";

const App = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <main className="min-w-max select-none p-1">
      <div className="flex items-center justify-between">
        <Heading size="lg">Your countdowns</Heading>
        <i className="ri-add-fill ri-2x" onClick={onOpen}></i>
      </div>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <div className="mx-6 flex items-center justify-between p-1">
            <Heading size="lg">Add countdown</Heading>
            <i className="ri-close-fill ri-2x" onClick={onClose}></i>
          </div>
          <ModalBody>
            <Input placeholder="Title" />

            <br />
            <br />

            <Input type="date" />

            <br />
            <br />

            <Select placeholder="Color">
              <option value="blue">Blue</option>
              <option value="green">Green</option>
              <option value="orange">Orange</option>
              <option value="pink">Pink</option>
              <option value="purple">Purple</option>
              <option value="red">Red</option>
              <option value="rose">Rose</option>
              <option value="yellow">Yellow</option>
            </Select>

            <br />
            <br />

            <Button colorScheme="green" w="100%">
              <Text fontSize="lg">Add</Text>
              {/* <i className="ri-check-fill"></i> */}
            </Button>
          </ModalBody>
        </ModalContent>
      </Modal>

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
