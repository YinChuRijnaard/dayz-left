// Dependency imports
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  useDisclosure,
  Heading,
  Input,
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
          <div className="flex items-center justify-between p-1">
            <Heading size="lg">Add countdown</Heading>
            <i className="ri-close-fill ri-2x" onClick={onClose}></i>
          </div>
          <ModalBody>
            <Input placeholder="Basic usage" />
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
