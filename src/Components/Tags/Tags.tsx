
import { Flex, Tag, TagLabel, useMediaQuery } from '@chakra-ui/react';
import { getTotalCharCode } from '../../utils/utils';

interface TagsProps {
  tags: string[];
}

const Tags = ({ tags }: TagsProps): JSX.Element => {
  const [isLargerThan800] = useMediaQuery('(min-width: 800px)');
  return (
    <Flex height='25px' gap='2'>
      {tags?.map(tag => (
        <Tag
          key={tag}
          colorScheme={`${
            ['red', 'orange', 'yellow', 'green', 'brand', 'teal', 'blue', 'cyan', 'pink', 'purple'][
              getTotalCharCode(tag) % 10
            ]
          }`}
          size={isLargerThan800 ? 'md' : 'sm'}
        >
          <TagLabel fontWeight={'600'}>{tag}</TagLabel>
        </Tag>
      ))}
    </Flex>
  );
};

export default Tags;