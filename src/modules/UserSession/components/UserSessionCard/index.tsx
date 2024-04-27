import { Avatar, Card, Flex, Grid, Skeleton, Text } from "@mantine/core";
import { IconChevronRight } from '@tabler/icons-react';
import { useUserSessionQuerty } from "../../queries/useUserSessionQuery";
import { useAuthContext } from "../../providers/AuthProvider";

export function UserSessionCard() {
    const { data: user, isError, isLoading } = useUserSessionQuerty()
    const { isDeveloper } = useAuthContext()
    const color = isDeveloper ? 'blue' : 'red'
    
  return (
    <Card>
        {
            isError && <Text c='red'>Error</Text>
        }

        {
            isLoading && (
                <Skeleton w='100%' h={100}></Skeleton>
            )
        }

        {
            user && (
                <Grid>
                    <Grid.Col span={{ base: 10 }}>
                        <Flex gap={8}>
                            <Avatar />
                            <Flex direction='column'>
                                <Text size="sm" fw={500}>{user?.name}</Text>
                                <Text c={color} size="xs">{user?.role}</Text>
                            </Flex>
                        </Flex>
                    </Grid.Col>
                    <Grid.Col span={{ base: 2 }}>
                        <Flex h='100%' align='center' justify='center'>
                            <IconChevronRight size='20' />
                        </Flex>
                    </Grid.Col>
                </Grid>
            )
        }
    </Card>
  );
}