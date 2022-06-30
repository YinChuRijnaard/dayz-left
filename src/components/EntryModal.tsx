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

interface EntryModalProps {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const EntryModal = (props: EntryModalProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
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
  );
};

export default EntryModal;
