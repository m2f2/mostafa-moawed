import {
  Box,
  Flex,
  chakra,
  useColorMode,
  useColorModeValue,
  useBreakpointValue,
  Link,
} from "@chakra-ui/react";
import { useToken } from "@chakra-ui/react";
import { Link as RouterLink, useLocation } from 'react-router-dom';

import useScrollPosition from "../../hooks/useScrollPosition.hook";
import MobileNav from "./MobileNav";
import DesktopNav from "./DesktopNav";
import AnimatedTitle from "./AnimatedTitle";

const links = [
  {
    name: "Projects",
    link: "/projects",
  },
];

function Nav() {
  const { colorMode } = useColorMode();
  const { y, max } = useScrollPosition();
  const { pathname } = useLocation();

  const brandColor = useToken("colors", "brand.500");
  const lightBg = `rgba(${brandColor}, 0.46)`;
  const darkBg = `rgba(${brandColor}, 0.36)`;

  const width = useBreakpointValue({ base: "100%", md: `${(y / max) * 100}%` });

  const headerBg = useColorModeValue(
    "rgba(255, 255, 255, 0.8)",
    "rgba(26, 33, 41, 0.8)"
  );
  const linkHoverColor = useColorModeValue("gray.900", "white");
  const linkColor = useColorModeValue("gray.900", "white");

  const progressBarBg = useColorModeValue("brand.500", "brand.300");

  return (
    <chakra.header
      width="full"
      position="fixed"
      _before={{
        transition: "all 0.10s",
        transitionTimingFunction: "1 100 10 10",
        content: '""',
        width: width,
        top: 0,
        left: 0,
        height: "6px",
        bg: progressBarBg,
        position: "absolute",
        zIndex: 9999,
      }}
      top={0}
      left={0}
      zIndex={10}
      bg={headerBg}
      sx={{ backdropFilter: "saturate(180%) blur(5px)" }}
    >
      <chakra.nav mx="auto" p={3}>
        <Flex
          margin="auto"
          justifyContent="space-between"
          alignContent="center"
          maxW="7xl"
          width="full"
        >
          <Box display="flex" alignContent="center">
            <RouterLink to="/">
              {pathname === '/' ? (
                <AnimatedTitle/>
              ) : (
                <Link
                  fontSize="lg"
                  margin="auto"
                  fontWeight="semibold"
                  position="relative"
                  textTransform="capitalize"
                  aria-label="Go to Home"
                  _after={{
                    transition: 'all 0.25s ease-in-out',
                    content: `''`,
                    outline: '1px solid transparent',
                    width: '0%',
                    height: '25%',
                    position: 'absolute',
                    bottom: 1,
                    left: 0,
                    bg: colorMode === 'light' ? lightBg : darkBg,
                    zIndex: -1,
                  }}
                  _hover={{
                    _after: {
                      width: '100%',
                    },
                    color: linkHoverColor,
                  }}
                  color={linkColor}
                >
                  Mostafa Moawed
                </Link>
              )}
            </RouterLink>
          </Box>
          <MobileNav links={links} />
          <DesktopNav links={links} />
        </Flex>
      </chakra.nav>
    </chakra.header>
  );
}

export default Nav;


