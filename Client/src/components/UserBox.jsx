import {
  Button,
  Flex,
  Text,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalBody,
  ModalCloseButton,
  ModalFooter,
  ModalContent,
  ModalHeader,
  Input,
  useToast,
} from "@chakra-ui/react";
import React, { useState } from "react";
import axios from "axios";

const UserBox = ({ user, setData }) => {
  const colorPallet = ["#D14D72", "#FFB84C", "#E76161", "#ADE4DB"];
  const color = Math.floor(Math.random() * 4);
  const toast = useToast();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [editObj, setEditObj] = useState({
    _id: user._id,
    name: user.name,
    email: user.email,
    gender: user.gender,
    status: user.status,
  });

  async function editUser() {
    let users = await axios.post(`http://localhost:8000/update`, editObj);
    const newUser = await axios.get("http://localhost:8000/users");
    setData(newUser.data.users);
    onClose();
    toast({
      title: "User updated.",
      description: "User Successfully updated on database.",
      status: "success",
      duration: 2000,
      isClosable: true,
      position: "top",
    });
  }
  return (
    <>
      <Flex
        direction={"column"}
        justify={"center"}
        px={8}
        py={4}
        gap={2}
        border={"1px solid black"}
        borderRadius={"10px"}
        fontWeight={"bold"}
        bg={colorPallet[color]}
        boxShadow={
          "rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px"
        }
      >
        <Text>Name : {user.name}</Text>
        <Text>Email : {user.email}</Text>
        <Text>Gender : {user.gender}</Text>
        <Text>Status : {user.status}</Text>
        <Button
          bg={"#77037B"}
          color={"white"}
          _hover={{ bg: "white", color: "#77037B" }}
          onClick={onOpen}
          w={"50%"}
          m={"auto"}
          size={"sm"}
        >
          Edit User
        </Button>
      </Flex>

      <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay
          bg="none"
          backdropFilter="auto"
          backdropInvert="80%"
          backdropBlur="2px"
        />
        <ModalContent bg={"#FFB84C"}>
          <ModalHeader m={"auto"} fontSize={"24px"} fontWeight={"bold"}>
            Edit User
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Flex direction={"column"} gap={3}>
              <Input
                border={"2px solid black"}
                type="text"
                placeholder="name"
                defaultValue={user.name}
                onChange={(e) => {
                  setEditObj({
                    ...editObj,
                    [e.target.placeholder]: e.target.value,
                  });
                }}
              />
              <Input
                border={"2px solid black"}
                type="email"
                placeholder="email"
                defaultValue={user.email}
                onChange={(e) => {
                  setEditObj({
                    ...editObj,
                    [e.target.placeholder]: e.target.value,
                  });
                }}
              />
              <Input
                border={"2px solid black"}
                type="text"
                placeholder="gender"
                defaultValue={user.gender}
                onChange={(e) => {
                  setEditObj({
                    ...editObj,
                    [e.target.placeholder]: e.target.value,
                  });
                }}
              />
              <Input
                border={"2px solid black"}
                type="text"
                placeholder="status"
                defaultValue={user.status}
                onChange={(e) => {
                  setEditObj({
                    ...editObj,
                    [e.target.placeholder]: e.target.value,
                  });
                }}
              />
            </Flex>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="green" m={"auto"} onClick={editUser}>
              Submit
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default UserBox;
