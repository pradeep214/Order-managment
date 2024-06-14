import { Box, Button, Center, FormControl, FormLabel, Input, Stack, Heading, Flex } from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';

const Login = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    if (data.username === 'user' && data.password === 'password') {
      localStorage.setItem('authenticated', true);
      navigate('/orders');
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <>
      <Center height="100vh">
        <Box p={6} rounded="md" boxShadow="lg" w="sm">
          <Stack spacing={4}>
            <Flex justify="space-between" align="center">
              <Heading as="h1" size="lg" textAlign="center">Login</Heading>
              <ThemeToggle />
            </Flex>
            <form onSubmit={handleSubmit(onSubmit)}>
              <FormControl id="username">
                <FormLabel>Username</FormLabel>
                <Input type="text" {...register('username')} placeholder='user' />
              </FormControl>
              <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <Input type="password" {...register('password')} placeholder='password' />
              </FormControl>
              <Box m={[2, 3]} />
              <Button type="submit" colorScheme="teal" size="md" width="full">Login</Button>
            </form>
          </Stack>
        </Box>
      </Center>
    </>

  );
};

export default Login;
