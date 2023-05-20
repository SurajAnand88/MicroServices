import { SimpleGrid } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import axios from "axios";
import UserBox from "./UserBox";

const Home = () => {
  const [data, setData] = useState([]);

  async function getData() {
    const users = await axios.get("http://localhost:3001/users");
    setData(users.data.users);
  }

  useEffect(() => {
    getData();
  }, []);
  return (
    <SimpleGrid
      columns={{ base: 1, md: 2, lg: 3 }}
      gap={8}
      mt={"80px"}
      px={5}
      w={{ xl: "80%" }}
      mx={"auto"}
    >
      {data?.map((user, i) => {
        return <UserBox key={i} user={user} setData={setData} />;
      })}
    </SimpleGrid>
  );
};

export default Home;
