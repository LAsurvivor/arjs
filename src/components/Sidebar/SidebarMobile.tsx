import {
  Box,
  Divider,
  Drawer,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
} from "@chakra-ui/react";
import { RefObject } from "react";
import Logo from "../Logo";
import Sidebar from "./Sidebar";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  hamburgerRef: RefObject<SVGSVGElement>;
};

const SidebarMobile = ({ isOpen, onClose, hamburgerRef }: Props) => {
  return (
    <Drawer
      isOpen={isOpen}
      placement="left"
      onClose={onClose}
      finalFocusRef={hamburgerRef}
    >
      <DrawerOverlay display={{ base: "block", sm: "none" }}>
        <DrawerContent pt={16} color="blackAlpha.700">
          <DrawerCloseButton
            color="appBlue.500"
            top="1rem"
            right={0}
            left="0.5rem"
            fontSize="1rem"
          />
          <Box position="absolute" top="1.2rem" right={0} left="3rem">
            <Logo />
          </Box>
          <Divider />
          <Sidebar />
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  );
};

export default SidebarMobile;
