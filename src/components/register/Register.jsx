import {
    Button,
    Flex,
    Heading,
    HStack,
    Image,
    Text,
    useToast,
    VStack
} from "@chakra-ui/react";
import axios from "axios";
import { Formik } from "formik";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import Api from "../../data/Api";
import TextField from "../form/TextField";
const Register = () => {
    const [loading, setLoading] = React.useState(false);

    const navigator = useNavigate();
    const toast = useToast();

    const handleSubmit = (values) => {
        const { email, password, name } = values;
        setLoading(true);
        axios
            .post(`${Api.baseUrl}/register`, {
                email,
                password,
                name,
            })
            .then((res) => {
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
                console.log(err);
                toast({
                    title: "An error occurred.",
                    description: err.response.data.msg,
                    status: "error",
                    duration: 9000,
                    isClosable: true,
                });
            });
    };
    return (
        <HStack
            h={"100vh"}
            maxH={"100vh"}
            bgColor="gray.300"
            overflowX={"hidden"}>
            <Formik
                initialValues={{ email: "", password: "", name: "" }}
                validationSchema={Yup.object({
                    email: Yup.string()
                        .email("Invalid email address")
                        .required("Required"),
                    password: Yup.string()
                        .min(8, "Must be 8 characters or more")
                        .required("Required"),
                    name: Yup.string()
                        .required("Required")
                        .min(3, "Must be 3 characters or more"),
                })}
                onSubmit={handleSubmit}>
                {(formik) => (
                    <VStack
                        alignItems="center"
                        justifyContent="center"
                        width="800px"
                        maxWidth="100%"
                        minHeight="100vh"
                        as={"form"}
                        onSubmit={formik.handleSubmit}>
                        <Flex
                            flexDirection="column"
                            gap={6}
                            justifyContent="center"
                            alignItems="center"
                            width="300px"
                            height="600px"
                            borderRadius={"20px"}>
                            <Heading
                                as="h3"
                                size="xl"
                                color="gray.800"
                                textAlign={"left"}>
                                Hi,{" "}
                                <Text
                                    as={"span"}
                                    bgGradient="linear(to-r, #00c6ff, #0072ff)"
                                    bgClip="text">
                                    Get Started{" "}
                                </Text>
                            </Heading>

                            <TextField
                                name="email"
                                type="email"
                                placeholder="Email"
                            />
                            <TextField name="name" placeholder="Name" />
                            <TextField
                                name="password"
                                type="password"
                                placeholder="password"
                            />

                            <VStack>
                                <Button
                                    type={"submit"}
                                    isLoading={loading}
                                    borderRadius={10}
                                    p={6}
                                    colorScheme="cyan"
                                    width={60}>
                                    {" "}
                                    Register
                                </Button>
                                <Link to="/login">
                                    <Button
                                        variant="outline"
                                        borderRadius={10}
                                        p={6}
                                        colorScheme="cyan"
                                        width={60}>
                                        {" "}
                                        Sign in
                                    </Button>
                                </Link>
                            </VStack>
                        </Flex>
                    </VStack>
                )}
            </Formik>
            <VStack
                position={"relative"}
                maxWidth={"100%"}
                maxH={"100vh"}
                margin={0}>
                <Flex
                    width={"100%"}
                    zIndex={0}
                    margin={0}
                    display={{ base: "none", md: "flex" }}>
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
                    left={"20%"}></Flex>
            </VStack>
        </HStack>
    );
};

export default Register;
