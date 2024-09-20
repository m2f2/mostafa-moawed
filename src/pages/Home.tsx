import React, { useState } from 'react';
import {
  Box,
  Flex,
  Heading,
  Image,
  chakra,
  useColorModeValue,
  Skeleton,
  Link as ChakraLink,
} from '@chakra-ui/react';
import { Link as LinkRouter } from 'react-router-dom';
import AboutTerminal from '../Components/AboutTerminal/AboutTerminal';


export default function Home(): React.ReactElement {
  const [imageLoad, setImageLoad] = useState(false);

  return (
    <>
      <Box
        minH="100vh"
        height="full"
        width={{ base: '95%', md: '90%', lg: '80%', xl: '90%W' }}
        maxW="7xl"
        mx="auto"
        pt={{ base: '28', sm: '14', md: '16', xl: '20' }}
      >
        <Flex
          direction="column"
          justifyContent={{ base: 'center', md: 'flex-start' }}
          height="full"
          width="full"
          p={{ base: 0, sm: 16 }}
        >
          <Flex
            direction={{ base: `column`, lg: `row` }}
            alignItems="center"
            mx="auto"
            my={{ xl: '16' }}
          >
            <Skeleton
              isLoaded={imageLoad}
              boxSize="250px"
              borderRadius="2xl"
              m="auto"
            >
              <Image
                flexGrow={3}
                borderRadius="2xl"
                boxSize="250px"
                src="profile.jpeg"
                objectFit="cover"
                alt="Mostafa Moawed"
                onLoad={() => setImageLoad(true)}
              />
            </Skeleton>
            <Flex
              alignSelf="center"
              direction="column"
              pl={{ base: 0, lg: 10 }}
              my={{ base: 10, lg: 0 }}
              flexGrow={1}
            >
              <Heading
                bgGradient={`linear(to-r, ${useColorModeValue(
                  `brand.600`,
                  `brand.400`
                )}, ${useColorModeValue(
                  `teal.600`,
                  `teal.400`
                )}, ${useColorModeValue(`blue.600`, `blue.300`)})`}
                className="moving-grad"
                bgClip="text"
                fontSize={{ base: `5xl`, lg: `7xl` }}
                textAlign={{ base: `center`, lg: `left` }}
              >
                Hi, I&apos;m Mostafa!
              </Heading>
              <chakra.p
                maxW="650px"
                textAlign={{ base: 'center', lg: 'left' }}
                fontSize="xl"
                mt={2}
              >
                Welcome to my website! I use this to showcase my{' '}
                <ChakraLink as={LinkRouter} to="/projects">projects</ChakraLink> and experiment with new technologies.
                Currently, I&apos;m focused on developing projects using MEARN Stack technologies.
              </chakra.p>
            </Flex>
          </Flex>
          <AboutTerminal />
        </Flex>
      </Box>
    </>
  );
}