"use client";

import { Center, Container, Flex, Text } from "@chakra-ui/react";
import { SignIn } from "@clerk/nextjs";

export default function Login() {
  return (
    <Container maxW={"full"} maxH={"full"} centerContent>
      <Flex>
        <Center w="100vw" height="100vh">
          <SignIn />
        </Center>
      </Flex>
    </Container>
  );
}
