import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Heading,
  Link,
  VStack,
  useBreakpointValue,
} from "@chakra-ui/react";

const Sidebar = () => {
  const border = useBreakpointValue({ base: undefined, sm: "none" }, { ssr: false });

  return (
    <>
      <Heading
        as="h4"
        color="appBlue.600"
        fontSize="md"
        fontWeight="bold"
        mt={2}
        mb={4}
        mx={4}
      >
        All Categories
      </Heading>
      {/* Accordion start */}
      <Accordion allowMultiple fontSize="sm">
        {/* 1st item start */}
        <AccordionItem borderTop={border}>
          <AccordionButton py={3} borderRadius="md">
            <Box flex="1" textAlign="left">
              <Heading as="h6" fontSize="sm" fontWeight="semibold">
                Sportswear
              </Heading>
            </Box>
            <AccordionIcon color="appBlue.600" mr={1} />
          </AccordionButton>
          {/* Children */}
          <AccordionPanel ml={6}>
            <VStack spacing={3} align="initial">
              <Link>Jersey</Link>
              <Link>Pants</Link>
              <Link>Shoes</Link>
              <Link>Equipment</Link>
            </VStack>
          </AccordionPanel>
        </AccordionItem>
        {/* 1st item end */}
        {/* 2nd item start */}
        <AccordionItem borderTop={border} borderBottom={border}>
          <AccordionButton py={3} borderRadius="md">
            <Box flex="1" textAlign="left">
              <Heading as="h6" fontSize="sm" fontWeight="semibold">
                Sporting Goods
              </Heading>
            </Box>
            <AccordionIcon color="appBlue.600" mr={1} />
          </AccordionButton>
          {/* Children */}
          <AccordionPanel ml={6}>
            <VStack spacing={3} align="initial">
              <Link>Soccer</Link>
              <Link>Basketball</Link>
              <Link>Others</Link>
            </VStack>
          </AccordionPanel>
        </AccordionItem>
        {/* 2nd item end */}
        {/* 3rd item start */}
        <AccordionItem borderTop={border} borderBottom={border}>
          <AccordionButton py={3} borderRadius="md">
            <Box flex="1" textAlign="left">
              <Heading as="h6" fontSize="sm" fontWeight="semibold">
                Artwork
              </Heading>
            </Box>
            <AccordionIcon color="appBlue.600" mr={1} />
          </AccordionButton>
          {/* Children */}
          <AccordionPanel ml={6}>
            <VStack spacing={3} align="initial">
              <Link>Souvenir</Link>
              <Link>AR Work</Link>
            </VStack>
          </AccordionPanel>
        </AccordionItem>
        {/* 3rd item end */}
      </Accordion>
      {/* Accordion end */}
    </>
  );
};

export default Sidebar;
