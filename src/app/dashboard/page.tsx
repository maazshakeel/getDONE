"use client";

import { Text } from "@chakra-ui/react";
import { UserButton } from "@clerk/nextjs";

export default function Dashboard() {
  return (
    <div>
      <UserButton afterSignOutUrl="/" />
      <Text>Dashboard</Text>
    </div>
  );
}
