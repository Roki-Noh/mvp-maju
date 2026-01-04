'use client';

import { Box, Container, Group, Stack, Text, Title, ThemeIcon, List } from '@mantine/core';
import { IconCheck } from '@tabler/icons-react';
import { motion } from 'framer-motion';
import Lottie from 'lottie-react';
import { useEffect, useState } from 'react';

function SecurityVisual() {
    const [animationData, setAnimationData] = useState(null);

    useEffect(() => {
        fetch('/animations/security.json')
            .then(res => res.json())
            .then(data => setAnimationData(data))
            .catch(err => console.error('Failed to load Lottie animation:', err));
    }, []);

    if (!animationData) {
        return (
            <Box style={{
                width: 300,
                height: 300,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'linear-gradient(135deg, #f5f7fa 0%, #e4e8ec 100%)',
                borderRadius: 24
            }}>
                <Text c="gray.5">Loading...</Text>
            </Box>
        );
    }

    return (
        <Box style={{ position: 'relative', width: 300, height: 300 }}>
            <Lottie
                animationData={animationData}
                loop
                autoplay
                style={{ width: '100%', height: '100%' }}
            />
        </Box>
    );
}

export function SecuritySection() {
    return (
        <Box
            component="section"
            py={{ base: 80, sm: 120 }}
            style={{
                background: '#f8f9fa',
                position: 'relative',
                overflow: 'hidden',
            }}
        >
            <Container size="lg">
                <Group justify="center" gap={80} align="center" style={{ flexDirection: 'row-reverse' }}>
                    {/* Visual Side */}
                    <Box style={{ flex: 1, minWidth: 320, display: 'flex', justifyContent: 'center' }}>
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <SecurityVisual />
                        </motion.div>
                    </Box>

                    {/* Text Side */}
                    <Box style={{ flex: 1 }}>
                        <Stack gap="xl">
                            <Stack gap="xs">
                                <Text c="blue" fw={700} style={{ letterSpacing: 1.5 }}>SECURITY FIRST</Text>
                                <Title order={2} size={42} style={{ lineHeight: 1.2, color: '#1a1a2e' }}>
                                    철저한 기술적 보안으로 <br />
                                    지켜지는 <Text span c="blue">프라이버시</Text>
                                </Title>
                            </Stack>

                            <Text size="lg" c="gray.7" style={{ lineHeight: 1.6 }}>
                                MAJU는 회원님의 안전을 최우선으로 생각합니다. <br />
                                독자적인 캡쳐 방지 기술과 종단간 암호화로 <br />
                                걱정 없이 오직 대화에만 집중하세요.
                            </Text>

                            <List
                                spacing="md"
                                size="lg"
                                center
                                icon={
                                    <ThemeIcon color="blue" size={24} radius="xl">
                                        <IconCheck size={14} />
                                    </ThemeIcon>
                                }
                            >
                                <List.Item>화면 캡쳐 및 녹화 원천 차단</List.Item>
                                <List.Item>개인 정보가 남지 않는 안심 번호</List.Item>
                                <List.Item>대화 내용 서버 자동 삭제 (휘발성)</List.Item>
                            </List>
                        </Stack>
                    </Box>
                </Group>
            </Container>
        </Box>
    );
}
