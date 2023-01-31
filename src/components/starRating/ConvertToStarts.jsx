import { HStack, Icon } from "@chakra-ui/react";
import React from "react";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";

const ConvertToStarts = ({ num, size }) => {
    const overview = num / 2;
    return (
        <HStack>
            {Array.from({ length: Math.floor(overview) }, (_, i) => {
                return (
                    <Icon as={FaStar} color="white" fontSize={size} key={i} />
                );
            })}
            {
                overview % 1 !== 0 && <Icon as={FaStarHalfAlt} color="white" fontSize={size} />
            }
        </HStack>
    );
};

export default ConvertToStarts;
