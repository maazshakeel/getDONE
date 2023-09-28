"use client";

import { Center, Container, Flex, Text } from "@chakra-ui/react";
import { SignUp } from "@clerk/nextjs";

export default function Register() {
  return (
    <Container maxW={"full"} maxH={"full"} centerContent>
      <Flex>
        <Center w="100vw" height="100vh">
          <SignUp />
        </Center>
      </Flex>
    </Container>
  );
}
