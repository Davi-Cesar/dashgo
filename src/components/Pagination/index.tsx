import { Box, Button, Stack } from "@chakra-ui/react";
import { PaginationItem } from "./PaginationItem";

export function Pagination() {
  return (
    <Stack
      direction={["column", "row"]}
      mt="8"
      justify="space-between"
      spacing="6"
    >
      <Box>
        <Box as="strong">0</Box> - <Box as="strong">10</Box> de{" "}
        <Box as="strong">100</Box>
      </Box>
      <Stack direction="row" spacing="2">
        <PaginationItem number={1} isCurrent />
        <PaginationItem number={2} isCurrent />
        <PaginationItem number={3} isCurrent />
        <PaginationItem number={4} isCurrent />
      </Stack>
    </Stack>
  );
}
