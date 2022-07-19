import React, { useState, useEffect } from "react";
import { Box, FlatList, Center, NativeBaseProvider, Text } from "native-base";

export default function Blogs() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchData = async () => {
        const resp = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=8`);
        const data = await resp.json();
        setData(data);
        setLoading(false);
    };

    useEffect(() => {
        fetchData();
        const dataInterval = setInterval(() => fetchData(), 5 * 1000);
        return () => clearInterval(dataInterval);
    }, []);

    const renderItem = ({ item }) => {
        return (
            <Box px={5} py={2} rounded="md" bg="primary.300" my={2}>
                {item.title}
            </Box>
        );
    };

    return (
        <NativeBaseProvider>
            <Center flex={1}>
                {loading && <Box>Loading..</Box>}
                {data && (
                    <FlatList
                        data={data}
                        renderItem={renderItem}
                        keyExtractor={(item) => item.id.toString()}
                    />
                )}
            </Center>
        </NativeBaseProvider>
    );
}