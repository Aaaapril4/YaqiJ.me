'use client';

import { useState } from "react";
import { Container, Flex, Text, Box, Button } from "@radix-ui/themes"
import { ChevronLeft, ChevronRight } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/app/ui/avatar"
import Contacts from "@/app/components/contacts";


const Side = ({ className }) => {
    const [isExpanded, setIsExpanded] = useState(true);

    return (
        <Box className={`${className} bg-[#FFFEFB] fixed left-0 h-screen transition-all duration-500 ease-in-out z-50 ${isExpanded ? 'w-screen' : 'w-1/2 xxl:w-1/3'}`}>
            <div className="h-full flex items-center justify-center">
                <Container size="1" className={`flex flex-col items-center transition-all duration-500 ease-in-out ${isExpanded ? 'w-full' : 'w-1/2 xxl:w-1/3'}`}>
                    <Avatar align="center" className={`m-4 transition-all duration-500 ease-in-out ${isExpanded ? 'w-64 h-64' : 'w-48 h-48'} mx-auto`}>
                        <AvatarImage src="/me.png" />
                        <AvatarFallback>YJ</AvatarFallback>
                    </Avatar>

                    <Container p="2" className={`text-center transition-all duration-500 ease-in-out`}>
                        <Text size={isExpanded ? "7" : "6"} align="center" className={`transition-all duration-500 ease-in-out`}>
                            Yaqi Jie  
                        </Text>

                        <Text size="2" mb="3" style={{ fontStyle: 'italic' }} className={`transition-all duration-500 ease-in-out ${!isExpanded && 'hidden'}`}>
                            &nbsp;- Live every minute
                        </Text>

                        <Text size="2" mb="3" style={{ fontStyle: 'italic' }} className={`transition-all duration-500 ease-in-out ${isExpanded && 'hidden'}`}>
                            &nbsp;- This is my life and my sandbox
                        </Text>
                    </Container>

                    <Flex 
                        direction="column" 
                        gap="1" 
                        className={`w-fit mt-4 mx-auto ${
                            isExpanded 
                                ? 'opacity-0 pointer-events-none h-0 -mt-4' 
                                : 'opacity-100'
                        }`}
                    >
                        <Text className="ml-4">🏫 PhD candidate in EES&CMSE@MSU</Text>
                        <Text className="ml-4">🌋 Researcher in computational seismology</Text>
                        <Text className="ml-4">👩🏻‍💻 Independent developer</Text>
                        <Text className="ml-4">📈 Machine Learning learner</Text>
                        <Text className="ml-4">😴 Dreamer but INFJ</Text>
                        <Text className="ml-4">🥘 🏂 ✨ 🐱</Text>
                    </Flex>

                    <Contacts className={`transition-all duration-500 ease-in-out transform ${isExpanded ? 'mt-4 -translate-y-4' : 'mt-4 translate-y-0'}`} />
                </Container>

                <Button 
                    variant="ghost" 
                    size="icon"
                    className="absolute -right-4 top-4 z-50 bg-white rounded-full shadow-md hover:bg-gray-100"
                    onClick={() => setIsExpanded(!isExpanded)}
                >
                    {isExpanded ? <ChevronLeft className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
                </Button>
            </div>
        </Box>
    );
};

export default Side;