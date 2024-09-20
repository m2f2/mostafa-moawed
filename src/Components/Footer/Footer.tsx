import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import SocialIcons from './SocialIcons';
import { Stack, Text, Box, Flex } from '@chakra-ui/react';
import { useColorModeValue } from '@chakra-ui/react';

const Footer = () => {
  return (
    <Box
      bg={useColorModeValue('gray.50', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')}
      py={6}
    >
      <Flex
        direction={{ base: 'column', md: 'row' }} // Stack vertically on small screens, row on larger
        align="center"
        justifyContent="space-between"
        maxW="7xl"
        mx="auto"
        px={6}
        textAlign={{ base: 'center', md: 'left' }} // Center text on small screens
      >
        <Text fontSize="sm" mb={{ base: 4, md: 0 }}> {/* Add margin on small screens */}
          &copy; {new Date().getFullYear()} All rights reserved.
        </Text>

        <Stack
          direction="row"
          align="center"
          spacing={6}
        >
          <Text fontSize="lg" fontWeight="bold">
            Connect with us:
          </Text>

          <SocialIcons label="GitHub" href="https://github.com/m2f2">
            <FaGithub />
          </SocialIcons>
          <SocialIcons label="LinkedIn" href="https://www.linkedin.com/in/mostafa-moawed/">
            <FaLinkedin />
          </SocialIcons>
          <SocialIcons label="Email" href="mailto:mostafamoawed0202@gmail.com">
            <HiOutlineMail />
          </SocialIcons>
        </Stack>
      </Flex>
    </Box>
  );
};

export default Footer;