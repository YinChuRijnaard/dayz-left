// Dependency imports
import toast from "react-hot-toast";
import {
  Modal,
  ModalOverlay,
  useDisclosure,
  ModalContent,
  Button,
} from "@chakra-ui/react";

// Store imports
import useCountdownStore from "../store/CountdownStore";

interface EditDeleteProps {
  id: string;
}

const EditDeleteModal = (props: EditDeleteProps) => {
  const deleteCountdown = useCountdownStore((state) => state.deleteCountdown);

  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleDelete = () => {
    deleteCountdown(props.id);
    onClose();
  };

  return (
    <>
      <i className="ri-more-2-fill ri-lg cursor-pointer" onClick={onOpen}></i>

      <Modal isOpen={isOpen} onClose={onClose} size="xs">
        <ModalOverlay />

        <ModalContent>
          <div className="m-4 flex justify-evenly">
            {/* Edit */}
            <Button colorScheme="blue" size="lg">
              <i className="ri-edit-fill ri-lg"></i>
            </Button>

            {/* Delete */}
            <Button onClick={handleDelete} colorScheme="red" size="lg">
              <i className="ri-delete-bin-2-fill ri-lg cursor-pointer"></i>
            </Button>
          </div>
        </ModalContent>
      </Modal>
    </>
  );
};

export default EditDeleteModal;
