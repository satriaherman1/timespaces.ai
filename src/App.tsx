import { ArrowBackIcon } from "@chakra-ui/icons";
import {
  Box,
  ChakraProvider,
  Container,
  Divider,
  Flex,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import CustomSlider from "./components/commons/GradientSlider";

function App() {
  return (
    <ChakraProvider>
      <Container
        display="flex"
        maxW="400px"
        padding="20px"
        justifyContent="space-between"
        alignItems="center"
        w="100%"
        background="white"
        boxShadow="0px 6px 16px 0px rgba(79, 79, 79, 0.10)"
      >
        <ArrowBackIcon />
        <Flex>
          <Image src="/logo.svg" width="150px" />
        </Flex>
        <Box></Box>
      </Container>
      <Container maxW="400px">
        <Box mt="20px">
          <Text fontSize="20px" fontWeight="700">
            Acquire
          </Text>
          <Heading as="h1" fontSize="36px">
            Make An Offer
          </Heading>

          <Flex mt="30px" gap="20px">
            <Box padding="5px 10px" bg="#F0F0F0" borderRadius="10px">
              <Image src="/rolex.png" width="60px" />
            </Box>

            <Box>
              <Text fontWeight="600">
                Rolex Daytona Stainless Steel Ref #116520
              </Text>
              <Text fontWeight="600" color="#F34848">
                $17,563
              </Text>
            </Box>
          </Flex>
          <Divider mt="25px" />

          {/* slider */}
          <CustomSlider mt="20px" />
          <Flex justifyContent="space-between" fontWeight={700}>
            <Text>£11,000</Text>
            <Text>£14,500</Text>
          </Flex>
          {/* end slider */}

          <Flex my="20px" alignItems="start" gap="10px">
            <Image src="/info-circle.svg" width="25px" mt="3px" />
            <Text>
              This is 17% less the market price and not likely to be accepted.
            </Text>
          </Flex>
        </Box>

        <Box
          padding="12px 20px"
          borderRadius="10px"
          fontFamily="Space Grotesk"
          fontWeight={700}
          as="button"
          bg="black"
          color="white"
          textTransform="uppercase"
          w="calc(100% - 20px)"
          pos="fixed"
          left="50%"
          transform="translateX(-50%)"
          bottom="2vh"
        >
          Continue
        </Box>
      </Container>
    </ChakraProvider>
  );
}

export default App;
