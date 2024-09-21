
import {
  HStack,
  Icon,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  useColorMode,
  Link as ChakraLink,
} from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';
import { rgba } from 'polished';
import { Link } from 'react-router-dom';
import ToggleTheme from './ToggleTheme';

function DesktopNav({ links }: { links: any }): JSX.Element {
  const { colorMode } = useColorMode();

  const afterBgColor = colorMode === 'light'
    ? rgba('#2B6CB0', 0.46) 
    : rgba('#2B6CB0', 0.36);

  return (
    <HStack spacing={8} display={{ base: 'none', md: 'flex' }}>
      {links.map((linkItem: any, index: number) => {
        if (linkItem.type !== 'dropdown') {
          return (
            <Link to={linkItem.link} key={index.toString()}>
              <ChakraLink
                color={colorMode === 'light' ? 'gray.800' : 'white'}
                fontSize='lg'
                fontWeight='semibold'
                position='relative'
                textTransform='capitalize'
                _after={{
                  transition: 'all 0.25s ease-in-out',
                  content: `''`,
                  outline: '1px solid transparent',
                  width: '0%',
                  height: '25%',
                  position: 'absolute',
                  bottom: 1,
                  left: 0,
                  bg: afterBgColor,
                  zIndex: -1,
                }}
                _hover={{
                  _after: {
                    width: '100%',
                  },
                }}
              >
                {linkItem.name}
              </ChakraLink>
            </Link>
          );
        }
        if (linkItem.type === 'dropdown') {
          return (
            <Menu key={index.toString()}>
              <MenuButton
                color={colorMode === 'light' ? 'gray.800' : 'white'}
                fontSize='lg'
                fontWeight='semibold'
                position='relative'
                textTransform='capitalize'
                _after={{
                  transition: 'all 0.25s ease-in-out',
                  content: `''`,
                  outline: '1px solid transparent',
                  width: '0%',
                  height: '25%',
                  position: 'absolute',
                  bottom: 1,
                  left: 0,
                  bg: afterBgColor,
                  zIndex: -1,
                }}
                _hover={{
                  _after: {
                    width: '75%',
                  },
                  color: colorMode === 'light' ? 'gray.800' : 'white',
                }}
              >
                {linkItem.name}
                <Icon as={ChevronDownIcon} />
              </MenuButton>
              <MenuList>
                {linkItem.links.map((item: any, i: number) => (
                  <Link to={item.link} key={`${i.toString()}MenuLink`}>
                    <MenuItem sx={{ cursor: 'pointer' }} key={i.toString()}>
                      {item.name}
                    </MenuItem>
                  </Link>
                ))}
              </MenuList>
            </Menu>
          );
        }
        return null;
      })}
      <HStack spacing={2}>
        <ToggleTheme />
      </HStack>
    </HStack>
  );
}

export default DesktopNav;