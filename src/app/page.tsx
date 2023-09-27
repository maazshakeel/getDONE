"use client";

import {
  Flex,
  Container,
  Heading,
  Stack,
  Text,
  Button,
} from "@chakra-ui/react";
import Illustration from "./components/Illustration";
import WithSubnavigation from "@/components/Navbar";

export default function CallToActionWithIllustration() {
  return (
    <Container maxW={"5xl"}>
      <WithSubnavigation />
      <Stack
        textAlign={"center"}
        align={"center"}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}
      >
        <Heading
          fontWeight={600}
          fontSize={{ base: "3xl", sm: "4xl", md: "6xl" }}
          lineHeight={"110%"}
        >
          You working on{" "}
          <Text as={"span"} color={"main"}>
            a project
          </Text>
        </Heading>
        <Text color={"gray.500"} maxW={"2xl"}>
          Unlock the extraordinary potential of getDONE, the ultimate solution
          designed to revolutionize the way you approach your projects. In a
          world filled with distractions, getDONE empowers you to reclaim
          control over your tasks.
        </Text>
        <Stack spacing={6} direction={"row"}>
          <Button
            rounded={"full"}
            px={6}
            colorScheme={"orange"}
            bg={"main"}
            _hover={{ bg: "orange.500" }}
          >
            Get started
          </Button>
          <Button rounded={"full"} px={6}>
            Learn more
          </Button>
        </Stack>
        <Flex w={"full"}>
          <Illustration
            height={{ sm: "24rem", lg: "28rem" }}
            mt={{ base: 12, sm: 16 }}
          />
        </Flex>
      </Stack>
    </Container>
  );
}
