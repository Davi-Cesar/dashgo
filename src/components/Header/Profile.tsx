import { Box, Flex, Text, Avatar } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Davi César</Text>
          <Text color="gray.300">davicesar2515@gmail.com</Text>
        </Box>
      )}

      <Avatar size="md" name="Davi César" src="" />
    </Flex>
  );
}
