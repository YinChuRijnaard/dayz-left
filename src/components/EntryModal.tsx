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

interface EntryModalProps {
  isOpen: boolean;
}

const EntryModal = (props: EntryModalProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return null;
  // <Modal isOpen={isOpen} onClose={onClose}>
  //   <ModalOverlay />
  //   <ModalContent>
  //     <div className="flex items-center justify-between p-1">
  //       <Heading size="lg">Add countdown</Heading>
  //       <i className="ri-close-fill ri-2x" onClick={onClose}></i>
  //     </div>
  //     <ModalBody>
  //       <Input placeholder="Basic usage" />
  //     </ModalBody>
  //   </ModalContent>
  // </Modal>
};

export default EntryModal;
