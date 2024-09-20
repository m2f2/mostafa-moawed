import {
  Box,
  Button,
  Flex,
  SimpleGrid,
  Text,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import { FaGithub } from 'react-icons/fa';
import LineHeading from '../Components/LineHeading/LineHeading';
import RepoCard from '../Components/RepoCard/RepoCard';
import { pinnedRepos, pinnedRepoType } from '../data/pinnedRepos';
import { repoType } from '../data/repoType';
import PinnedProjects from '../Components/PinnedProjects/PinnedProjects';

const repos: repoType[] = [
  {
    id: 1,
    name: "sample-repo",
    created_at: "2023-06-15T00:00:00Z",
    pushed_at: "2023-08-10T00:00:00Z",
    description: "This is a sample repository",
    stars: 100,
  },
];

function Projects(): React.ReactElement {
  return (
    <Box
      width="full"
      px={3}
      minH="100vh"
      height="full"
      mx="auto"
      maxW="6xl"
      py="28"
    >
      <Flex
        direction="column"
        alignItems="center"
        width="full"
        px={3}
        height="full"
        mx="auto"
      >
        <LineHeading
          fontSize={{ base: `5xl`, md: `6xl` }}
          mx="auto"
          textAlign="center"
        >
          My Projects
        </LineHeading>
        <Text mt={3}>A quick collection of my projects.</Text>
        <VStack
          direction="column"
          my={16}
          width="full"
          height="full"
          maxWidth="5xl"
          spacing={10}
        >
          {pinnedRepos
            .reverse()
            .map((data: pinnedRepoType, index) => (
              <PinnedProjects
                key={index.toString()}
                repo={repos.find(
                  (x: repoType) =>
                    x.name.toLowerCase() === data.id.toLowerCase()
                )}
                left={index % 2 === 0}
                projectData={data}
              />
            ))}
        </VStack>
        <LineHeading fontSize={{ base: `5xl`, lg: `5xl` }} textAlign="center">
          Repositories
        </LineHeading>
        <Button
          as="a"
          href="https://github.com/m2f2"
          variant="ghost"
          colorScheme="brand"
          size="lg"
          mt={5}
          leftIcon={<FaGithub />}
        >
          View My Profile
        </Button>
      </Flex>

      <SimpleGrid
        mt={10}
        columns={{ base: 1, md: 2 }}
        width="full"
        height="full"
        maxH="full"
        mx="auto"
        gridAutoRows="1fr"
        spacingX={10}
        spacingY={8}
        isTruncated
        overflow="visible"
      >
      </SimpleGrid>
    </Box>
  );
}

export default Projects;