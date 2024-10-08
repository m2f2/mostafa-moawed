import { Link as ChakraLink, useColorModeValue, chakra } from "@chakra-ui/react";
import styled from "@emotion/styled";

const CustomChakraLink = styled(ChakraLink)`
  &:hover {
    text-decoration: none;
  }
  &:hover .path-under {
    transform: translateY(6px);
  }
`;

const AnimatedTitle = () => {
  const linkHoverColor = useColorModeValue("gray.900", "white");
  const animatedStrokeColor = useColorModeValue("brand.600", "brand.300");

  return (
    <CustomChakraLink
      color={linkHoverColor}
      position="relative"
      fontSize="2xl"
      fontWeight="semibold"
      textAlign="center"
      mb='10px'
    >
      Mostafa Moawed
      <chakra.svg
        className="path-under"
        position="absolute"
        height="27px"
        bottom="-20px"
        left="-15px"
        transition="all 0.2s"
        transitionTimingFunction="spring(1 10 10 10)"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 265 43"
        fill="none"
        stroke={animatedStrokeColor}
        strokeWidth="5px"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
      >
        <path
          className="animated-underline"
          d="M16.7 20.2c76.5 4.4 153.6-9.7 229.8-4.1 5.4.4 12.4 2.1 11.7 5.6-67.3 1.7-134.5 5.5-201.2 11.5l87.7-.9c35.2-.4 70.8-.7 104.9 4.6"
        ></path>
      </chakra.svg>
    </CustomChakraLink>
  );
};

export default AnimatedTitle;