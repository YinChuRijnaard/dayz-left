// Dependency imports
import {
  FormLabel,
  Input,
  Heading,
  Modal,
  ModalOverlay,
  useDisclosure,
  Select,
  ModalContent,
  Button,
} from "@chakra-ui/react";

const EntryModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <i className="ri-add-fill ri-2x" onClick={onOpen}></i>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />

        <ModalContent>
          <div className="m-4 space-y-4">
            <div className="flex items-center justify-between">
              <Heading size="lg">New countdown</Heading>
              <i className="ri-close-fill ri-2x" onClick={onClose}></i>
            </div>

            {/* Title */}
            <div>
              <FormLabel htmlFor="title">Title</FormLabel>
              <Input placeholder="Christmas 🎄" />
            </div>

            {/* Date */}
            <div>
              <FormLabel htmlFor="Date">Date</FormLabel>
              <Input type="date" />
            </div>

            {/* Color */}
            <div>
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
            </div>

            {/* Add */}
            <div>
              <Button colorScheme="green" w="100%">
                <i className="ri-check-fill ri-lg"></i>
              </Button>
            </div>
          </div>
        </ModalContent>
      </Modal>
    </>
  );
};

export default EntryModal;
