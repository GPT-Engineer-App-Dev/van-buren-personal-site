import { Box, VStack, Heading, Text, Image, SimpleGrid } from "@chakra-ui/react";

const Index = () => {
  return (
    <Box p={5}>
      <VStack spacing={8}>
        <Heading as="h1" size="2xl" textAlign="center">Martin Van Buren</Heading>
        <Text fontSize="xl">The 8th President of the United States</Text>
        <Image borderRadius="full" boxSize="150px" src="/images/martin-van-buren.jpg" alt="Martin Van Buren" />
        <Box>
          <Heading as="h2" size="lg">Biography</Heading>
          <Text>
            Martin Van Buren was born on December 5, 1782, in Kinderhook, New York. He served as the President from 1837 to 1841. Before his presidency, he was the 8th Vice President and the 10th Secretary of State, both under Andrew Jackson.
          </Text>
        </Box>
        <Box>
          <Heading as="h2" size="lg">Achievements</Heading>
          <Text>
            Van Buren was a key organizer of the Democratic Party and a dominant figure in the Second Party System. He established a system of party finance and pioneered the use of patronage for party purposes.
          </Text>
        </Box>
        <Box>
          <Heading as="h2" size="lg">Gallery</Heading>
          <SimpleGrid columns={3} spacing={4}>
            <Image src="/images/van-buren-1.jpg" alt="Martin Van Buren Portrait" />
            <Image src="/images/van-buren-2.jpg" alt="Historical Document" />
            <Image src="/images/van-buren-3.jpg" alt="The White House during Van Buren's Presidency" />
          </SimpleGrid>
        </Box>
      </VStack>
    </Box>
  );
};

export default Index;