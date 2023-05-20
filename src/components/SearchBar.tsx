import { CloseIcon, SearchIcon } from "@chakra-ui/icons";
import {
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  ResponsiveValue,
  chakra,
} from "@chakra-ui/react";
import { Property } from "csstype";
import { ChangeEvent, FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

type Props = {
  display: ResponsiveValue<Property.Display>;
};

// Create new Form component and pass it chakra props
const Form = chakra("form");

const SearchBar = ({ display }: Props) => {
  const navigate = useNavigate();
  const [value, setValue] = useState("");
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setValue("");
    if (value !== "") navigate(`/search/${value}`);
  };
  return (
    <Form
      display={display}
      onSubmit={handleSubmit}
      w={{ base: "full", sm: "sm" }}
      m="0 auto"
    >
      <InputGroup>
        <InputLeftElement
          pointerEvents="none"
          children={<SearchIcon color="gray.600" />}
        />
        <Input
          borderRadius="full"
          bg="blackAlpha.200"
          _focus={{
            borderColor: "appBlue.400",
            boxShadow: "0 0 0 1px #3564e6",
          }}
          placeholder="Search Items"
          fontSize={{ base: "sm", sm: "md" }}
          _placeholder={{
            color: "gray.600",
          }}
          value={value}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setValue(e.target.value)}
        />
        {value && (
          <InputRightElement
            children={
              <CloseIcon
                color="appBlue.400"
                fontSize={12}
                cursor="pointer"
                onClick={() => setValue("")}
              />
            }
          />
        )}
      </InputGroup>
    </Form>
  );
};

export default SearchBar;
