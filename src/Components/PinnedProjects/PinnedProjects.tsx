import React from 'react';
import {
  Box,
  Flex,
  Text,
  useColorMode,
  Stack,
  Link as ChakraLink,
  VStack,
} from '@chakra-ui/react';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import { repoType } from '../../data/repoType';
import PinnedImageProjects from '../PinnedImageProjects';
import Tags from '../Tags';
import { pinnedRepoType } from '../../data/pinnedRepos';


interface PinnedProjectsProps {
  repo: repoType;
  projectData: pinnedRepoType;
  left: boolean;
}

const PinnedProjects = ({projectData, left }: PinnedProjectsProps): JSX.Element => {
  const { colorMode } = useColorMode();

  if (projectData && projectData?.image) {
    return <PinnedImageProjects left={left}  projectData={projectData} />;
  }

  return (
    <Box h="full" w="full" my={5}>
      <VStack
        bg={colorMode === 'light' ? `white` : `gray.900`}
        px={{ base: 4, md: 8 }}
        py={4}
        height="100%"
        width="100%"
        border="1px solid"
        borderColor={colorMode === 'light' ? `gray.200` : `gray.700`}
        borderRadius="2xl"
        boxShadow="xl"
        textAlign="left"
        justifyContent="flex-start"
        alignItems="flex-start"
        spacing={1}
      >
        <Flex
          direction={{ base: 'column', sm: 'row' }}
          maxWidth="full"
          width="full"
          justifyContent="space-between"
          alignItems="flex-start"
        >
          <Flex width="full" justifyContent="space-between">
            <Text fontSize={{ base: `2xl`, md: `4xl` }} fontWeight="bold" isTruncated maxW="100%">
              {projectData.name}
            </Text>
            <Stack isInline justifyContent="flex-end" alignItems="center" spacing={4} mr={1}>
              {repo?.html_url && (
                <ChakraLink href={repo.html_url} isExternal className={`hover-link-${colorMode}`}>
                  <FaGithub size={23} />
                </ChakraLink>
              )}
              {projectData?.deployedLink && (
                <ChakraLink href={projectData.deployedLink} isExternal className={`hover-link-${colorMode}`}>
                  <FaExternalLinkAlt size={20} />
                </ChakraLink>
              )}
            </Stack>
          </Flex>
        </Flex>
        <Tags tags={projectData?.stack} />
        <Text
          color={colorMode === 'light' ? `gray.600` : `gray.300`}
          height="100%"
          width="100%"
          pt={2}
        >
          {projectData.longDescription}
        </Text>
      </VStack>
    </Box>
  );
};

export default PinnedProjects;