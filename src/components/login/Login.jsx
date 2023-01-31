import {
    Button,
    Flex,
    Heading,
    HStack,
    Image, Text, useToast,
    VStack
} from "@chakra-ui/react";
import axios from "axios";
import { Formik } from "formik";
import React from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import Api from "../../data/Api";
import { initUserData } from "../../features/userData/UserData";
import { initWatchList } from "../../features/watchlist/WatchlistSlice";
import TextField from "../form/TextField";
const Login = () => {
    const [loading, setLoading] = React.useState(false);
    const navigator = useNavigate();
    const toast = useToast();
    const dispatch = useDispatch();

    const getWatchlist = async ({ id }) => {
        try {
            const res = await axios.get(`${Api.baseUrl}/watchlist/${id}`);
            const { movies } = res.data;
            dispatch(initWatchList(movies));
            localStorage.setItem("watchlist", JSON.stringify(movies));
        } catch (err) {
            console.log(err);
        }
    }; 

    const handleSubmit = (values) => {
        const { email, password } = values;
        setLoading(true);
        axios
            .post(`${Api.baseUrl}/login`, {
                email,
                password,
            })
            .then((res) => {
                const { data, token } = res.data;
                const { name, id, photo } = data;
                localStorage.setItem("token", token);
                localStorage.setItem("id", id);
                localStorage.setItem("name", name);
                localStorage.setItem("photo", photo);
                console.log(photo);
                dispatch(
                    initUserData({
                        image: photo
                            ? photo
                            : "https://art-gallery-latam.api.hbo.com/images/a286cb57-fee3-45b1-a9c0-b9fabe519bfb/avatar?size=250x250&format=png",
                        name,
                        id,
                    })
                );
                getWatchlist({ id });
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
                console.log(err);
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
        <HStack
            h={"100vh"}
            maxH={"100%"}
            w={"100vw"}
            maxWidth={"100%"}
            bgColor="gray.300"
            overflowX={"hidden"}>
            <Formik
                initialValues={{ email: "", password: "" }}
                validationSchema={Yup.object({
                    email: Yup.string()
                        .email("Invalid email address")
                        .required("Required"),
                    password: Yup.string()
                        .min(8, "Must be 8 characters or more")
                        .required("Required"),
                })}
                onSubmit={handleSubmit}>
                {(formik) => (
                    <VStack
                        as="form"
                        onSubmit={formik.handleSubmit}
                        alignItems="center"
                        justifyContent="center"
                        width="800px"
                        maxWidth="100%"
                        minHeight="100vh">
                        <Flex
                            flexDirection="column"
                            gap={6}
                            justifyContent="center"
                            alignItems="center"
                            width="500px"
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
                                    {" "}
                                    Welcome Back!
                                </Text>
                            </Heading>
                            <TextField
                                name="email"
                                placeholder="Email"
                                type="email"
                            />
                            <TextField
                                name="password"
                                placeholder="Password"
                                type="password"
                            />
                            <VStack>
                                <Button
                                    type={"submit"}
                                    isLoading={loading}
                                    borderRadius={10}
                                    p={6}
                                    colorScheme="cyan"
                                    width={60}
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
                                        width={60}>
                                        {" "}
                                        Sign up
                                    </Button>
                                </Link>
                            </VStack>
                        </Flex>
                    </VStack>
                )}
            </Formik>
            <VStack
                position={"relative"}
                display={{ base: "none", md: "flex" }}
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
                    left={"20%"}>
                    <Heading color={"gray.300"} size={"4xl"}></Heading>
                </Flex>
            </VStack>
        </HStack>
    );
};

export default Login;
