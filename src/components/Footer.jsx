import { Avatar, Box, Stack, Text, VStack } from '@chakra-ui/react'
import React from 'react';
import btc from "../assets/MG_1861.jpg";

const Footer = () => {
  return <Box bgColor={"blackAlpha.900"} color={"whiteAlpha.700"} minH={"48"} px={"16"} py={["16","8"]}>

    <Stack direction={["column","row"]} h={"full"} alignItems={"cebter"}>

    </Stack>
    <VStack w={"full"} alignItems={["center","flex-start"]}>
<Text fontWeight={"bold"}>ABOUT US</Text>
<Text fontSize={"sm"} letterSpacing={"widest"} textAlign={["center","left"]}>we know we are best,but we are passionate to provide free services for people in india.Because sikhega india tabhito market ko smjega india</Text>
    </VStack>
    <VStack>
<Avatar boxSize={"28"} mt={["4","0"]} src={btc}/>
<Text>
    OUR FOUNDER
</Text>
    </VStack>

  </Box>

}

export default Footer
