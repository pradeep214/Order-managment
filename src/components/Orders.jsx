 import { useState } from 'react';
import { Tabs, TabList, TabPanels, Tab, TabPanel, Box, Button, useDisclosure, Table, Thead, Tbody, Tr, Th, Td, Flex, Spacer } from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons';
import SaleOrderModal from './SaleOrderModal';
import EditOrderModal from './EditOrderModal';
import ThemeToggle from './ThemeToggle';

const Orders = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [editOrderModal, setEditOrderModal] = useState({ isOpen: false, order: null });

    const handleEdit = (order) => {
        setEditOrderModal({ isOpen: true, order });
    };

    const handleEditClose = () => {
        setEditOrderModal({ isOpen: false, order: null });
    };

    return (
        <Box p={4}>
            <Flex justify="space-between" mb={4}>
                <ThemeToggle />
            </Flex>
            <Tabs variant="soft-rounded" colorScheme="teal">
                <TabList>
                    <Tab>Active Sale Orders</Tab>
                    <Tab>Completed Sale Orders</Tab>
                </TabList>
                <TabPanels>
                    <TabPanel>
                        <Flex mb={4}>
                            <Spacer />
                            <Button onClick={onOpen} leftIcon={<AddIcon />} colorScheme="teal">
                                Sale Order
                            </Button>
                        </Flex>
                        <SaleOrderModal isOpen={isOpen} onClose={onClose} />
                        <EditOrderModal
                            isOpen={editOrderModal.isOpen}
                            onClose={handleEditClose}
                            order={editOrderModal.order}
                        />
                        <Table mt={4}>
                            <Thead>
                                <Tr>
                                    <Th>id</Th>
                                    <Th>Customer name</Th>
                                    <Th>price(₹)</Th>
                                    <Th>last modified</Th>
                                    <Th>edit</Th>
                                </Tr>
                            </Thead>
                            <Tbody>
                                <Tr>
                                    <Td>1</Td>
                                    <Td>Customer 1</Td>
                                    <Th>₹ 210</Th>
                                    <Td>2024-05-24</Td>
                                    <Td>
                                        <Button onClick={() => handleEdit({ id: '1', customer: 'Customer 1', date: '2024-05-24', price:' ₹210' })}>
                                            ...
                                        </Button>
                                    </Td>
                                </Tr>
                                <Tr>
                                    <Td>2</Td>
                                    <Td>Customer 2</Td>
                                    <Th>₹ 100</Th>
                                    <Td>2024-05-24</Td>
                                    <Td>
                                        <Button onClick={() => handleEdit({ id: '2', customer: 'Customer 2', date: '2024-05-24', price:' ₹100' })}>
                                            ...
                                        </Button>
                                    </Td>
                                </Tr>
                            </Tbody>
                        </Table>
                    </TabPanel>
                    <TabPanel>
                        <Table mt={4}>
                            <Thead>
                                <Tr>
                                    <Th>Id</Th>
                                    <Th>Customer</Th>
                                    <Th>Date</Th>
                                </Tr>
                            </Thead>
                            <Tbody>
                                <Tr>
                                    <Td>1</Td>
                                    <Td>Customer 2</Td>
                                    <Td>2024-05-25</Td>
                                </Tr>
                            </Tbody>
                        </Table>
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </Box>
    );
};

export default Orders;
