"use client";

import { CacheProvider } from "@chakra-ui/next-js";
import { Center, ChakraProvider, Flex, Spinner } from "@chakra-ui/react";
import { theme } from "../theme";
import { ClerkLoaded, ClerkLoading } from "@clerk/nextjs";

const ChakraUiProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <CacheProvider>
      <ChakraProvider theme={theme}>
        <ClerkLoading>
          <Flex>
            <Center height={"100vh"} width={"100vw"}>
              <Spinner
                thickness="4px"
                speed="0.65s"
                emptyColor="gray.200"
                color="main"
                size="xl"
                alignSelf={"center"}
              />
            </Center>
          </Flex>
        </ClerkLoading>
        <ClerkLoaded>{children}</ClerkLoaded>
      </ChakraProvider>
    </CacheProvider>
  );
};

export default ChakraUiProvider;
