import ChakraUiProvider from "@/provider/chakra-ui.provider";
import { ClerkProvider } from "@clerk/nextjs";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>
          <ChakraUiProvider>{children}</ChakraUiProvider>
        </body>
      </html>
    </ClerkProvider>
  );
};

export default RootLayout;
