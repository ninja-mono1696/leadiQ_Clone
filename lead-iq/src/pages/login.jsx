import React from "react";
import {
  FormControl,
  FormLabel,
  FormHelperText,
  Input,
  Box,
  Container,
  Button,
  VStack,
} from '@chakra-ui/react'
import { Spinner } from '@chakra-ui/react'
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate()
    const handleSubmit = () => {
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
        navigate("/");
      }, 1000)
    };
  
    return <div>
      <Box h='80' w='40%' m='auto' >
        <VStack p={8}>
          <Container>
            <FormControl>
            <FormLabel>Email address</FormLabel>
            <Input type='email' />
            <FormHelperText>We'll never share your email.</FormHelperText>
          </FormControl>
          <FormControl>
            <FormLabel>Password</FormLabel>
            <Input type='password' />
          </FormControl>
          </Container>
          <Button variant='outline' onClick={handleSubmit}>LOGIN {isLoading && <Spinner color="red.500" />}</Button>
        </VStack>
      </Box>
    </div>;
  };
  
  export default Login;