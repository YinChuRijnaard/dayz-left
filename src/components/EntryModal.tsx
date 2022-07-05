// Framework imports
import { useState } from "react";

// Dependency imports
import toast from "react-hot-toast";
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

// Store imports
import useCountdownStore from "../store/CountdownStore";

const EntryModal = () => {
  const [entry, setEntry] = useState({
    id: "1",
    title: "",
    date: "",
    color: "",
  });

  const addCountdown = useCountdownStore((state) => state.addCountdown);

  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleChange = (e: any) => {
    setEntry((prevEntry) => {
      return {
        ...prevEntry,
        [e.target.name]: e.target.value,
      };
    });
    console.log(entry);
  };

  const handleSubmit = () => {
    if (entry.title.length > 0) {
      addCountdown(entry);
      onClose();
    } else {
      toast.error("Title is empty");
    }
  };

  return (
    <>
      <i className="ri-add-fill ri-2x cursor-pointer" onClick={onOpen}></i>

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
              <Input
                name="title"
                onChange={handleChange}
                placeholder="Christmas 🎄"
              />
            </div>

            {/* Date */}
            <div>
              <FormLabel htmlFor="Date">Date</FormLabel>
              <Input name="date" onChange={handleChange} type="date" />
            </div>

            {/* Color */}
            <div>
              <FormLabel htmlFor="color">Color</FormLabel>
              <Select name="color" onChange={handleChange} placeholder="Select">
                <option value="#4299E1">Blue</option>
                <option value="#48BB78">Green</option>
                <option value="#ED8936">Orange</option>
                <option value="#ED64A6">Pink</option>
                <option value="#9F7AEA">Purple</option>
                <option value="#F56565">Red</option>
                <option value="#ECC94B">Yellow</option>
              </Select>
            </div>

            {/* Add */}
            <div>
              <Button onClick={handleSubmit} colorScheme="green" w="100%">
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
