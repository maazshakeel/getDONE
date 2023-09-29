"use client";

import WithSubnavigation from "@/components/Navbar";
import { Center, Container, Flex, Text } from "@chakra-ui/react";
import { SignIn } from "@clerk/nextjs";

export default function Login() {
  return (
    <Container maxW={"full"} maxH={"full"}>
      <WithSubnavigation />
      <Flex>
        <Center height={"85vh"} width={"100vw"}>
          <SignIn />
        </Center>
      </Flex>
    </Container>
  );
}
