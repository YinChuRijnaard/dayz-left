// Framework imports
import { useState } from "react";

// Dependency imports
import { nanoid } from "nanoid";
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
  // const [title, setTitle] = useState<string>("");
  // const [date, setDate] = useState<string>("");
  // const [color, setColor] = useState<string>("");
  const [countdownDetails, setCountdownDetails] = useState({
    title: "",
    date: "",
    color: "",
  });

  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => {
    const target = e.target;
    const name = target.name;
    const value = target.value;

    setCountdownDetails((prevCountdownDetails) => {
      return {
        ...prevCountdownDetails,
        [name]: target.value,
      };
    });

    console.log(countdownDetails);
  };

  const handleSubmit = () => console.log(countdownDetails);

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
              <Input
                value={countdownDetails.title}
                onChange={handleChange}
                name="title"
                placeholder="Christmas 🎄"
              />
            </div>

            {/* Date */}
            <div>
              <FormLabel htmlFor="Date">Date</FormLabel>
              <Input
                value={countdownDetails.date}
                onChange={handleChange}
                name="date"
                type="date"
              />
            </div>

            {/* Color */}
            <div>
              <FormLabel htmlFor="color">Color</FormLabel>
              <Select
                value={countdownDetails.color}
                onChange={handleChange}
                name="color"
                placeholder="Select"
              >
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
