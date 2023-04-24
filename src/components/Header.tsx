import { HamburgerIcon } from "@chakra-ui/icons";
import {
  Avatar,
  Box,
  Button,
  Flex,
  HStack,
  Icon,
  Link,
  useDisclosure,
} from "@chakra-ui/react";
import { useContext, useRef } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { Route, Link as RouterLink, Routes, useLocation } from "react-router-dom";
import { GlobalContext } from "../context/GlobalState";
import Logo from "./Logo";
import MUIBadge from "./MUI/MUIBadge";
import SearchBar from "./SearchBar";
import SidebarMobile from "./Sidebar/SidebarMobile";

const Header = () => {
  const { cartItemCount } = useContext(GlobalContext);

  const location = useLocation();
  const hamburgerRef = useRef<SVGSVGElement>(null);
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Flex
      as="header"
      direction="column"
      height={["120px", "fit-content"]}
      px={[3, null]}
      position="fixed"
      top={0}
      zIndex={10}
      w="100%"
      bg="white"
      boxShadow="base"
    >
      <Flex
        height="65px"
        align="center"
        px={[null, 2]}
        py={[7, 9]}
        justify={["space-between", null]}
      >
        <Flex align="center">
          <HamburgerIcon
            display={["inline-block", "none"]}
            color="appBlue.500"
            w="1.5rem"
            h="1.5rem"
            mr={2}
            cursor="pointer"
            ref={hamburgerRef}
            onClick={onOpen}
          />
          <Link as={RouterLink} to="/" _hover={{ textDecoration: "none" }}>
            <Logo />
          </Link>
        </Flex>
        <SearchBar display={["none", "block"]} />
        <Flex justify="space-between" align="center">
          <HStack spacing={[3, 5]}>
            <Link
              as={RouterLink}
              to={location.pathname === "/login" ? "/register" : "/login"}
              _hover={{ textDecoration: "none" }}
            >
              <Button
                height={[8, 9]}
                minW={[8, 9]}
                fontSize={["sm", "md"]}
                variant="outline"
                borderColor="appBlue.400"
                borderRadius="0.3rem"
                color="appBlue.400"
                _hover={{
                  bg: "appBlue.400",
                  color: "white",
                }}
                _active={{
                  bg: "appBlue.500",
                  color: "white",
                }}
              >
                {location.pathname === "/login" ? "Sign Up" : "Sign In"}
              </Button>
            </Link>
            <Box
              mr={
                location.pathname === "/login" || location.pathname === "/register"
                  ? 2
                  : undefined
              }
            >
              <Link as={RouterLink} to="/cart" _hover={{ textDecoration: "none" }}>
                <MUIBadge badgeContent={cartItemCount}>
                  <Icon
                    as={FaShoppingCart}
                    height={{ base: 25, smallTablet: 27, sm: 30 }}
                    width={{ base: 25, smallTablet: 27, sm: 30 }}
                    color="gray.400"
                    cursor="pointer"
                    _hover={{ color: "appBlue.300" }}
                    _active={{ color: "appBlue.400" }}
                  />
                </MUIBadge>
              </Link>
            </Box>
          </HStack>
          <Routes>
            {/* Show the avatar on every route except "/login" and "/register" */}
            <Route path="/login" element={null} />
            <Route path="/register" element={null} />
            <Route
              path="*"
              element={
                <Avatar
                  ml={cartItemCount! > 0 ? [5, 7] : [3, 5]}
                  width={[7, 8]}
                  height={[7, 8]}
                  src="https://bit.ly/broken-link"
                  cursor="pointer"
                />
              }
            />
          </Routes>
        </Flex>
      </Flex>
      <SearchBar display={["block", "none"]} />
      <SidebarMobile isOpen={isOpen} onClose={onClose} hamburgerRef={hamburgerRef} />
    </Flex>
  );
};

export default Header;