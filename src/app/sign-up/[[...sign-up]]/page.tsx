"use client";

import WithSubnavigation from "@/components/Navbar";
import { Center, Container, Flex, Text } from "@chakra-ui/react";
import { SignUp } from "@clerk/nextjs";

export default function Register() {
  return (
    <Container maxW={"full"} maxH={"full"}>
      <WithSubnavigation />
      <Flex>
        <Center w="100vw" height="85vh">
          <SignUp />
        </Center>
      </Flex>
    </Container>
  );
}
