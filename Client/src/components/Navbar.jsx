import { Flex, Text, Button } from "@chakra-ui/react";
import React from "react";
import axios from "axios";

const Navbar = () => {
  function downloadCsv() {
    axios.get("http://localhost:8000/download");
  }
  return (
    <Flex
      pos={"fixed"}
      justify={"space-around"}
      top={"0"}
      bg={"black"}
      w={"full"}
      zIndex={2}
      py={3}
      px={{ base: 5, md: 8, lg: "160px" }}
    >
      <Text
        fontSize={"32px"}
        fontWeight={"bold"}
        bg={"black"}
        color={"cyan.500"}
      >
        GoldStoneTech
      </Text>
      <Button colorScheme="yellow" onClick={downloadCsv}>
        Download csv
      </Button>
    </Flex>
  );
};

export default Navbar;
