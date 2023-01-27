import {
    Button,
    Flex,
    Heading,
    HStack,
    Image,
    Input,
    useToast,
    VStack,
    Text
} from "@chakra-ui/react";
import axios from "axios";
import React from "react";
import { FaRegEnvelope } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import Api from "../../Api";
const Login = () => {
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [loading, setLoading] = React.useState(false);
    const navigator = useNavigate();
    const toast = useToast();

    const handleSubmit = () => {
        setLoading(true);
        axios
            .post(`${Api.baseUrl}/login`, {
                email,
                password,
            })
            .then((res) => {
                const { data, token } = res.data;
                const { name, id } = data;
                localStorage.setItem("token", token);
                localStorage.setItem("id", id);
                localStorage.setItem("name", name);
            })
            .then(() => {
                setLoading(false);
                toast({
                    title: "Logged in.",
                    description: "We've logged you in.",
                    status: "success",
                    duration: 9000,
                    isClosable: true,
                });
            })
            .finally(() => {
                setTimeout(() => {
                    navigator("/");
                }, 1000);
            })
            .catch((err) => {
                setLoading(false);
                toast({
                    title: "An error occurred.",
                    description: "We're unable to log you in.",
                    status: "error",
                    duration: 9000,
                    isClosable: true,
                });
            });
    };
    return (
        <HStack h={"100vh"} maxH={"100vh"} bgColor="gray.300">
            <VStack
                alignItems="center"
                justifyContent="center"
                width="800px"
                maxWidth="100%"
                minHeight="100vh"
                // bgColor="gray.200"
            >
                <Flex
                    flexDirection="column"
                    gap={6}
                    justifyContent="center"
                    alignItems="center"
                    width="500px"
                    height="600px"
                    borderRadius={"20px"}>
                    <Heading as="h3" size="xl" color="gray.800" textAlign={"left"} >
                    Hi, <Text as={"span"} bgGradient='linear(to-r, #00c6ff, #0072ff)' bgClip='text'> Welcome Back!</Text>
                    </Heading>
                    <Input
                        placeholder="Email"
                        size={"md"}
                        width="300px"
                        color={"gray.700"}
                        borderColor="gray.500"
                        borderWidth={"0px 0px 1px"}
                        borderRadius={0}
                        paddingLeft={0}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <Input
                        placeholder="Password"
                        type={"password"}
                        size={"md"}
                        width="300px"
                        color={"gray.700"}
                        borderColor="gray.500"
                        borderWidth={"0px 0px 1px"}
                        borderRadius={0}
                        paddingLeft={0}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <VStack>
                        <Button
                            // variant="outline"
                            isLoading={loading}
                            borderRadius={10}
                            p={6}
                            colorScheme="cyan"
                            width={60}
                            onClick={handleSubmit}>
                            {" "}
                            Sign in
                        </Button>
                        <Link to="/register">
                            <Button
                                variant="outline"
                                borderRadius={10}
                                p={6}
                                colorScheme="cyan"
                                width={60}>
                                {" "}
                                Sign up
                            </Button>
                        </Link>
                    </VStack>
                </Flex>
            </VStack>
            <VStack
                position={"relative"}
                maxWidth={"100%"}
                maxH={"100vh"}
                margin={0}>
                <Flex width={"100%"} zIndex={0} margin={0}>
                    <Image
                        src="https://image.tmdb.org/t/p/original/s16H6tpK2utvwDtzZ8Qy4qm5Emw.jpg"
                        objectFit={"cover"}
                        height={"100vh"}
                        objectPosition={"center"}
                    />
                </Flex>
                <Flex
                    width={"100%"}
                    height={"99.2%"}
                    position="absolute"
                    bgGradient="linear(to-b, transparent, 
            RGBA(0, 0, 0, 0.4) 70%)"
                    zIndex={1} 
                    margin={0}></Flex>
                <Flex
                    position={"absolute"}
                    zIndex={2}
                    bottom={"40"}
                    left={"20%"}>
                    <Heading color={"gray.300"} size={"4xl"}></Heading>
                </Flex>
            </VStack>
        </HStack>
    );
};

export default Login;
