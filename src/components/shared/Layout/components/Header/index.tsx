import { AppShell, Burger, Group } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

export default function Header() {
    const [opened, { toggle }] = useDisclosure()
    
    return (
        <AppShell.Header>
            <Group h="100%" px="md">
            <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
            </Group>
        </AppShell.Header>
    )
}