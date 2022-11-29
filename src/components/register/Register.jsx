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
const Register = () => {
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [name, setName] = React.useState("");
    const [loading, setLoading] = React.useState(false);

    const navigator = useNavigate();
    const toast = useToast();

    const handleSubmit = () => {
        setLoading(true);
        axios
            .post(`${Api.baseUrl}/register`, {
                email,
                password,
                name,
            })
            .then((res) => {
                console.log(res.data);
                setLoading(false);
                toast({
                    title: "Account created.",
                    description: "We've created your account for you.",
                    status: "success",
                    duration: 9000,
                    isClosable: true,
                });
            })
            .finally(() => {
                setTimeout(() => {
                    navigator("/login");
                }, 1000);
            })
            .catch((err) => {
                setLoading(false);
                toast({
                    title: "An error occurred.",
                    description: "We're unable to create your account.",
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
                    Register
                </Heading>
                <Input
                    placeholder="Email"
                    type={"email"}
                    size={"md"}
                    width="300px"
                    color={"white"}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <Input
                    placeholder="Name"
                    type={"text"}
                    size={"md"}
                    width="300px"
                    color={"white"}
                    onChange={(e) => setName(e.target.value)}
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
                        Register
                    </Button>
                    <Link to="/login">
                        <Button
                            variant="outline"
                            borderRadius={10}
                            p={6}
                            colorScheme="cyan"
                            width={60}
                        >
                            {" "}
                            Sign in
                        </Button>
                    </Link>
                </VStack>
            </Flex>
        </VStack>
    );
};

export default Register;
