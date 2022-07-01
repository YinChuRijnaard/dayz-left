// Framework imports
import { useState } from 'react'

// Dependency imports
import { nanoid } from 'nanoid'
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
} from '@chakra-ui/react'
import useCountdownStore from '../context/CountdownStore'

const EntryModal = () => {
	// cd === countdown
	const addtoDo = useCountdownStore((state) => state.addCountdown)
	const [cdRaw, setCdRaw] = useState([])

	const { isOpen, onOpen, onClose } = useDisclosure()

	const updateTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
		setCdRaw((prevCdRaw) => {
			return {
				...prevCdRaw,
				title: e.target.value,
			}
		})
	}

	const updateDate = (e: React.ChangeEvent<HTMLInputElement>) => {
		setCdRaw((prevCdRaw) => {
			return {
				...prevCdRaw,
				date: e.target.value,
			}
		})
	}

	const updateColor = (e: React.ChangeEvent<HTMLSelectElement>) => {
		setCdRaw((prevCdRaw) => {
			return {
				...prevCdRaw,
				color: e.target.value,
			}
		})
	}

	const handleSubmit = () => {
		// console.log("Works???");
		console.log(cdRaw)
		addtoDo(cdRaw)
	}

	return (
		<>
			<i
				className="ri-add-fill ri-2x"
				onClick={onOpen}
				style={{ cursor: 'pointer' }}
			></i>

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
								onChange={updateTitle}
								name="title"
								placeholder="Christmas 🎄"
							/>
						</div>

						{/* Date */}
						<div>
							<FormLabel htmlFor="Date">Date</FormLabel>
							<Input onChange={updateDate} name="date" type="date" />
						</div>

						{/* Color */}
						<div>
							<FormLabel htmlFor="color">Color</FormLabel>
							<Select onChange={updateColor} name="color" placeholder="Select">
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
	)
}

export default EntryModal
