import { Flex, FormControl, FormErrorMessage, Input } from "@chakra-ui/react";
import { Field, useField } from "formik";
import React from "react";

const TextField = ({ label, ...props }) => {
    const [field, meta] = useField(props);
    return (
        <FormControl
            isInvalid={meta.error && meta.touched}
            display="flex"
            alignItems={"center"}
            justifyContent={"center"}
            flexDirection={"column"}>
            <Flex flexDirection={"column"}>
                <Field
                    as={Input}
                    {...field}
                    {...props}
                    size={"md"}
                    width="300px"
                    color={"gray.700"}
                    borderColor="gray.500"
                    borderWidth={"0px 0px 1px"}
                    borderRadius={0}
                    paddingLeft={0}
                />
                <FormErrorMessage>{meta.error}</FormErrorMessage>
            </Flex>
        </FormControl>
    );
};

export default TextField;
