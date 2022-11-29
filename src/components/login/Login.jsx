import {
    Button,
    Flex,
    Heading,
    HStack,
    Input,
    useToast,
    VStack,
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
                const { id, name } = res.data;
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
        <VStack
            alignItems="center"
            justifyContent="center"
            width="100%"
            minHeight="100vh"
        >
            <Flex
                flexDirection="column"
                gap={6}
                justifyContent="center"
                alignItems="center"
                bgColor="gray.700"
                width="500px"
                height="600px"
                borderRadius={"20px"}
            >
                <Heading as="h3" size="xl" color="gray.100">
                    Login
                </Heading>
                <Input
                    placeholder="Email"
                    size={"md"}
                    width="300px"
                    color={"white"}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <Input
                    placeholder="Password"
                    type={"password"}
                    size={"md"}
                    width="300px"
                    color={"white"}
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
                        onClick={handleSubmit}
                    >
                        {" "}
                        Sign in
                    </Button>
                    <Link to="/register">
                        <Button
                            variant="outline"
                            borderRadius={10}
                            p={6}
                            colorScheme="cyan"
                            width={60}
                        >
                            {" "}
                            Sign up
                        </Button>
                    </Link>
                </VStack>
            </Flex>
        </VStack>
    );
};

export default Login;
