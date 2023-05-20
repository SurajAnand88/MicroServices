import { Flex, Text, Button } from "@chakra-ui/react";
import React from "react";
import axios from "axios";

const Navbar = () => {
  async function downloadCsv() {
    await axios
      .get("http://localhost:8000/download", {
        method: "GET",
        responseType: "blob",
      })
      .then((res) => {
        const url = window.URL.createObjectURL(new Blob([res.data]));
        let link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", "data.csv");
        document.body.appendChild(link);
        link.click();
      });
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
