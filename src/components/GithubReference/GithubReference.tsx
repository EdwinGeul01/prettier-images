import githubLogo from "#public/github.svg";
import { Box, Float, Image } from "@chakra-ui/react";

export const GithubReference = () => {
  return (
    <Float
      zIndex={10000}
      asChild
      ml={50}
      placement={"bottom-start"}
      offsetY={10}
    >
      <Box w={"70px"} h={"55px"} p={1}>
        <a href="https://github.com/EdwinGeul01/prettier-images">
          <Image
            src={githubLogo}
            w={"full"}
            h={"full"}
            p={3}
            objectFit={"contain"}
            alt={"github logo"}
            _hover={{
              filter: "brightness(0.4)",
            }}
          ></Image>
        </a>
      </Box>
    </Float>
  );
};
