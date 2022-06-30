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
  FormLabel,
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
            <FormLabel htmlFor="title">Title</FormLabel>
            <Input placeholder="Christmas 🎄" />

            <br />
            <br />

            <FormLabel htmlFor="Date">Date</FormLabel>
            <Input type="date" />

            <br />
            <br />

            <FormLabel htmlFor="color">Color</FormLabel>
            <Select placeholder="Select">
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

            <Button colorScheme="green" w="100%">
              {/* <Text fontSize="lg">Add</Text> */}
              <i className="ri-check-fill ri-lg"></i>
            </Button>
          </ModalBody>
        </ModalContent>
      </Modal>

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
