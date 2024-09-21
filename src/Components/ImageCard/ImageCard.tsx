import {
            AspectRatio,
            Box,
            Link as ChakraLink,
            Flex,
            Heading,
            Stack,
            Text,
            useColorMode,
            useColorModeValue,
            VStack,
} from "@chakra-ui/react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

import { pinnedRepoType } from "../../data/pinnedRepos";
import Tags from "../Tags/Tags";

interface ImageCardProps {
  projectData: pinnedRepoType;
}

const ImageCard = ({ projectData }: ImageCardProps): JSX.Element => {
  const { colorMode } = useColorMode();

  return (
    <Flex
      direction="column"
      borderRadius="2xl"
      bg={useColorModeValue("white", "gray.900")}
      border="1px solid"
      boxShadow="lg"
      width="full"
      borderColor={useColorModeValue("gray.200", "gray.700")}
    >
      <AspectRatio ratio={16 / 9} border="none">
        <Box borderTopRadius="2xl">
          <img
            alt={`${projectData.name} screenshot`}
            src={projectData.image || ""}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: "2xl",
            }}
          />
        </Box>
      </AspectRatio>
      <VStack borderBottomRadius={"2xl"} py={5} px={4} spacing={1}>
        <Stack
          isInline
          justifyContent="space-between"
          alignItems="center"
          width="full"
        >
          <Heading
            fontFamily="Ubuntu"
            isTruncated
            maxWidth="full"
            fontSize={"2xl"}
          >
            {projectData.name}
          </Heading>
          <Stack
            isInline
            justifyContent="flex-end"
            alignItems="center"
            spacing={4}
          >
             {projectData?.url && (
                        <ChakraLink href={projectData.url} isExternal className={`hover-link-${colorMode}`}>
                          <FaGithub size={23} />
                        </ChakraLink>
                      )}
            {projectData?.deployedLink && (
              <ChakraLink
                href={projectData.deployedLink}
                isExternal
                className={`hover-link-${colorMode}`}
              >
                <FaExternalLinkAlt size={20} />
              </ChakraLink>
            )}
          </Stack>
        </Stack>
        <Box
          maxWidth="100%"
          maxHeight="100%"
          height="100%"
          width="100%"
          textAlign="left"
          color={useColorModeValue(`gray.500`, `gray.500`)}
        >
          <Tags tags={projectData?.stack || []} />
        </Box>
        <Text pt={2}>{projectData.longDescription}</Text>
      </VStack>
    </Flex>
  );
};

export default ImageCard;
