
import { useState } from 'react';
// import Link from 'next/link';
// import Image from "next/image";

import { Inter } from '@next/font/google';
import { CloseButton,Stack } from '@chakra-ui/react'
import { Box, Flex, Text,Link} from '@chakra-ui/react';
import style from '@/styles/Home.module.css'
import {Image} from '@chakra-ui/react'


const inter = Inter({ subsets: ['latin'] });

export default function Home() {



  return (
    <>
    <Flex>
    <Flex   mt="44px" ml={"8%"} mr={"10%"} w={"80%"}>
         <Text  color="purple" mt="px" fontSize="44px" linea   >
          Next
         </Text>
         <Text  color={"purple"} mt="px" fontSize="44px" >Gen</Text>
     <Flex ml={"100px"} >
      {
        HeadersLikes.map((item)=>{
          return(
            <>
            <Box mt={"19px"}>
              <Link bottom-border={"2px solid transparent"} _hover={{ borderBottomColor: "red" }} href={item.href}  >
              <Text  ml={"28px"} fontSize={"22px"} >{item.title}</Text>
              </Link>
            </Box>
            </>
          )
        })
      }
      </Flex>
      <Flex justifyContent="flex-end" bg={""}>
      <CloseButton ml={"160px"} w={"130px"} fontSize={"19"}  bg={"purple"} borderColor={"purple"}>
        Log In
      </CloseButton>
      <CloseButton ml={"10px"} w={"130px"} fontSize={"19"} borderColor={"purple"} bg={"black"}>
        Sign Up
      </CloseButton>
      </Flex>
    </Flex>
    </Flex>
    </>
  );
}
const HeadersLikes=[
  {
    title:"Home",
    href:"https//:www.facebook.com",
  },
  {
    title:"Marketplace",
    href:"https//:www.facebook.com",
  },
  {
    title:"Artist",
    href:"https//:www.facebook.com",
  },
  {
    title:"Community",
    href:"https//:www.facebook.com",
  }
]