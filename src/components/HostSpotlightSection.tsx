'use client';

import { Avatar, Badge, Box, Button, Card, Container, Grid, Group, Stack, Text, Title } from '@mantine/core';
import { IconStarFilled, IconVideo } from '@tabler/icons-react';
import { motion } from 'framer-motion';

const hosts = [
    {
        name: 'Karina',
        role: 'K-POP Idol',
        image: 'https://images.unsplash.com/photo-1618397746666-63f9ed12b07c?q=80&w=500&auto=format&fit=crop', // Placeholder
        tags: ['Live', 'Trending'],
        rating: 4.9,
        description: '무대 뒤의 이야기, 저와 함께 나눠요 💖',
    },
    {
        name: 'Chef Gordon',
        role: 'Michelin Chef',
        image: 'https://images.unsplash.com/photo-1583394293214-28ded15ee548?q=80&w=500&auto=format&fit=crop', // Placeholder
        tags: ['Expert'],
        rating: 5.0,
        description: '요리의 비밀, 1:1로 전수해 드립니다.',
    },
    {
        name: 'Elena Design',
        role: 'Art Director',
        image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=500&auto=format&fit=crop', // Placeholder
        tags: ['Popular'],
        rating: 4.8,
        description: '포트폴리오 리뷰부터 커리어 상담까지.',
    },
    {
        name: 'Dr. Strange',
        role: 'Psychiatrist',
        image: 'https://images.unsplash.com/photo-1537368910025-bc005fbede68?q=80&w=500&auto=format&fit=crop', // Placeholder
        tags: ['Counseling'],
        rating: 4.9,
        description: '마음의 짐, 잠시 내려놓고 이야기해요.',
    },
];

export function HostSpotlightSection() {
    return (
        <Box
            component="section"
            py={{ base: 60, sm: 100 }}
            style={{
                background: '#0f0f1a',
                position: 'relative',
                overflow: 'hidden',
            }}
        >
            <Container size="lg" style={{ position: 'relative', zIndex: 1 }}>
                <Stack gap={60}>
                    <Stack align="center" gap="md">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                        >
                            <Text
                                size="sm"
                                fw={700}
                                style={{
                                    color: '#b197fc',
                                    letterSpacing: 3,
                                    textTransform: 'uppercase',
                                }}
                            >
                                Top Hosts
                            </Text>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            <Title
                                order={2}
                                ta="center"
                                fz={{ base: 28, sm: 36, md: 42 }}
                                fw={800}
                                c="white"
                                style={{ letterSpacing: -0.5 }}
                            >
                                지금 가장 핫한
                                <br />
                                <Text
                                    component="span"
                                    inherit
                                    variant="gradient"
                                    gradient={{ from: 'pink', to: 'violet', deg: 45 }}
                                >
                                    셀럽들을 만나보세요
                                </Text>
                            </Title>
                        </motion.div>
                    </Stack>

                    <Grid gutter={{ base: 20, md: 30 }}>
                        {hosts.map((host, index) => (
                            <Grid.Col key={host.name} span={{ base: 12, sm: 6, lg: 3 }}>
                                <motion.div
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    whileHover={{ y: -8 }}
                                >
                                    <Card
                                        radius="xl"
                                        p="lg"
                                        style={{
                                            background: 'rgba(255, 255, 255, 0.05)',
                                            backdropFilter: 'blur(10px)',
                                            border: '1px solid rgba(255, 255, 255, 0.1)',
                                            overflow: 'visible',
                                        }}
                                    >
                                        <Card.Section>
                                            <Box
                                                style={{
                                                    height: 240,
                                                    position: 'relative',
                                                    overflow: 'hidden',
                                                    borderRadius: '24px 24px 0 0',
                                                }}
                                            >
                                                <Box
                                                    component="img"
                                                    src={host.image}
                                                    alt={host.name}
                                                    style={{
                                                        width: '100%',
                                                        height: '100%',
                                                        objectFit: 'cover',
                                                    }}
                                                />
                                                <Box
                                                    style={{
                                                        position: 'absolute',
                                                        top: 12,
                                                        right: 12,
                                                    }}
                                                >
                                                    {host.tags.map((tag) => (
                                                        <Badge
                                                            key={tag}
                                                            variant={tag === 'Live' ? 'filled' : 'light'}
                                                            color={tag === 'Live' ? 'red' : 'violet'}
                                                            size="sm"
                                                            ml={4}
                                                        >
                                                            {tag}
                                                        </Badge>
                                                    ))}
                                                </Box>
                                            </Box>
                                        </Card.Section>

                                        <Stack mt="md" gap="xs">
                                            <Group justify="space-between" align="center">
                                                <Text fw={700} c="white" size="lg">
                                                    {host.name}
                                                </Text>
                                                <Group gap={4}>
                                                    <IconStarFilled size={14} color="#FFD700" />
                                                    <Text size="sm" c="gray.4" fw={600}>
                                                        {host.rating}
                                                    </Text>
                                                </Group>
                                            </Group>
                                            <Text size="sm" c="#b197fc" fw={600}>
                                                {host.role}
                                            </Text>
                                            <Text size="sm" c="gray.5" lineClamp={2} style={{ minHeight: 42 }}>
                                                {host.description}
                                            </Text>
                                            <Button
                                                fullWidth
                                                radius="xl"
                                                mt="xs"
                                                variant="gradient"
                                                gradient={{ from: 'rgba(255,255,255,0.1)', to: 'rgba(255,255,255,0)' }}
                                                style={{
                                                    border: '1px solid rgba(255,255,255,0.2)',
                                                }}
                                                rightSection={<IconVideo size={16} />}
                                            >
                                                프로필 보기
                                            </Button>
                                        </Stack>
                                    </Card>
                                </motion.div>
                            </Grid.Col>
                        ))}
                    </Grid>
                </Stack>
            </Container>
        </Box>
    );
}
