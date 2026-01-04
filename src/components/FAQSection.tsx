'use client';

import { Accordion, Box, Container, Stack, Text, Title } from '@mantine/core';
import { motion } from 'framer-motion';

const faqs = [
    {
        question: 'MAJU 코인은 어떻게 충전하나요?',
        answer: '마이페이지 > 지갑 관리에서 신용카드, 카카오페이, 휴대폰 결제 등 다양한 수단으로 코인을 간편하게 충전하실 수 있습니다.',
    },
    {
        question: '통화 연결이 안 되면 환불되나요?',
        answer: '상대방이 통화 요청을 거절하거나 응답하지 않아 연결이 성립되지 않은 경우, 사용된 코인은 100% 자동 환불됩니다. 통화가 연결된 이후에는 실제 통화 시간만큼 코인이 차감됩니다.',
    },
    {
        question: '영상통화 화질은 어떤가요?',
        answer: 'MAJU는 WebRTC 기반의 최신 기술을 사용하여 FHD(1080p)급 고화질 영상통화를 지원합니다. 다만, 네트워크 환경에 따라 화질이 자동으로 조정될 수 있습니다.',
    },
    {
        question: '프라이빗 통화 내용은 녹화되나요?',
        answer: '절대 녹화되지 않습니다. MAJU는 프라이버시를 최우선으로 생각합니다. 모든 통화 내용은 종단간 암호화(End-to-End Encryption)되어 전송되며, 서버에 저장되지 않습니다.',
    },
    {
        question: '통화 시간은 어떻게 정해지나요?',
        answer: '통화 시간은 보유한 코인에 따라 자유롭게 조절됩니다. 최소 1분부터 시작하며, 코인이 소진되면 자동으로 종료됩니다. 통화 중에도 코인을 추가 충전할 수 있습니다.',
    },
];

export function FAQSection() {
    return (
        <Box
            component="section"
            py={{ base: 80, sm: 120 }}
            style={{
                background: '#f8f9fa',
                position: 'relative',
            }}
        >
            <Container size="md">
                <Stack gap={60}>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <Stack align="center" gap="sm">
                            <Text
                                size="sm"
                                fw={700}
                                style={{
                                    color: '#b197fc',
                                    letterSpacing: 3,
                                    textTransform: 'uppercase',
                                }}
                            >
                                FAQ
                            </Text>
                            <Title
                                order={2}
                                ta="center"
                                fz={{ base: 28, sm: 36, md: 42 }}
                                fw={800}
                                c="dark.9"
                                style={{ letterSpacing: -0.5 }}
                            >
                                자주 묻는 질문
                            </Title>
                        </Stack>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <Accordion
                            variant="separated"
                            radius="lg"
                            styles={{
                                item: {
                                    backgroundColor: 'white',
                                    border: '1px solid #e9ecef',
                                    marginBottom: 16,
                                    boxShadow: '0 2px 8px rgba(0,0,0,0.03)',
                                },
                                control: {
                                    padding: '16px 24px',
                                    fontWeight: 600,
                                    fontSize: 18,
                                },
                                content: {
                                    padding: '0 24px 24px 24px',
                                    color: '#495057',
                                    lineHeight: 1.6,
                                },
                            }}
                        >
                            {faqs.map((faq) => (
                                <Accordion.Item key={faq.question} value={faq.question}>
                                    <Accordion.Control>{faq.question}</Accordion.Control>
                                    <Accordion.Panel>{faq.answer}</Accordion.Panel>
                                </Accordion.Item>
                            ))}
                        </Accordion>
                    </motion.div>
                </Stack>
            </Container>
        </Box>
    );
}
