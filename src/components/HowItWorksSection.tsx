'use client';

import { Box, Container, Grid, Stack, Text, Title } from '@mantine/core';
import { IconSearch, IconPhoneCall, IconHeart } from '@tabler/icons-react';
import { motion } from 'framer-motion';

const steps = [
  {
    number: '01',
    icon: IconSearch,
    title: '원하는 상대 찾기',
    description: '다양한 분야의 셀럽, 인플루언서, 전문가 중에서 대화하고 싶은 상대를 찾아보세요.',
  },
  {
    number: '02',
    icon: IconPhoneCall,
    title: '통화 요청하기',
    description: '코인을 사용하여 간편하게 통화를 요청하세요. 상대방이 수락하면 바로 연결됩니다.',
  },
  {
    number: '03',
    icon: IconHeart,
    title: '특별한 시간 즐기기',
    description: '오직 두 사람만의 프라이빗한 영상통화를 즐기세요. 꿈꾸던 만남이 현실이 됩니다.',
  },
];

export function HowItWorksSection() {
  return (
    <Box
      component="section"
      py={{ base: 60, sm: 120 }}
      style={{
        background: '#0f0f1a',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* 배경 장식 */}
      <Box
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '80%',
          height: '80%',
          background: 'radial-gradient(circle, rgba(177, 151, 252, 0.05) 0%, transparent 70%)',
          filter: 'blur(80px)',
          zIndex: 0,
        }}
      />

      <Container size="lg" style={{ position: 'relative', zIndex: 1 }}>
        <Stack gap={100}>
          {/* 섹션 헤더 */}
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
                How It Works
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
                fz={{ base: 32, sm: 40, md: 48 }}
                fw={800}
                c="white"
                style={{ letterSpacing: -0.5, lineHeight: 1.2 }}
              >
                간단한 3단계로
                <br />
                <Text
                  component="span"
                  inherit
                  variant="gradient"
                  gradient={{ from: 'pink', to: 'violet', deg: 45 }}
                >
                  특별한 만남 시작하기
                </Text>
              </Title>
            </motion.div>
          </Stack>

          {/* 단계들 */}
          <Grid gutter={{ base: 40, md: 60 }}>
            {steps.map((step, index) => (
              <Grid.Col key={step.number} span={{ base: 12, md: 4 }}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.2 }}
                >
                  <Stack
                    align="center"
                    gap="xl"
                    style={{
                      textAlign: 'center',
                      position: 'relative',
                    }}
                  >
                    {/* 연결선 (마지막 제외 & Desktop only) */}
                    {index < steps.length - 1 && (
                      <Box
                        visibleFrom="md"
                        style={{
                          position: 'absolute',
                          top: 40,
                          left: '60%',
                          width: '80%',
                          height: 2,
                          background: 'linear-gradient(90deg, rgba(177, 151, 252, 0.3) 0%, transparent 100%)',
                          zIndex: 0,
                        }}
                      />
                    )}

                    {/* 아이콘 원 */}
                    <Box
                      style={{
                        position: 'relative',
                        width: 120,
                        height: 120,
                        zIndex: 1,
                      }}
                    >
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        style={{ width: '100%', height: '100%' }}
                      >
                        <Box
                          style={{
                            width: '100%',
                            height: '100%',
                            borderRadius: '50%',
                            background: 'rgba(25, 25, 40, 0.6)',
                            border: '1px solid rgba(177, 151, 252, 0.3)',
                            backdropFilter: 'blur(10px)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            position: 'relative',
                            boxShadow: '0 0 30px rgba(177, 151, 252, 0.15)',
                          }}
                        >
                          <step.icon size={48} color="#b197fc" stroke={1.2} />

                          {/* 번호 뱃지 */}
                          <Box
                            style={{
                              position: 'absolute',
                              top: 0,
                              right: 0,
                              width: 36,
                              height: 36,
                              borderRadius: '50%',
                              background: 'linear-gradient(135deg, #FFCCD8 0%, #b197fc 100%)',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              boxShadow: '0 4px 10px rgba(0,0,0,0.3)',
                            }}
                          >
                            <Text size="xs" fw={800} c="white">
                              {step.number}
                            </Text>
                          </Box>
                        </Box>
                      </motion.div>
                    </Box>

                    {/* 텍스트 */}
                    <Stack gap="sm">
                      <Title order={3} fz={{ base: 20, sm: 24 }} fw={700} c="white">
                        {step.title}
                      </Title>
                      <Text
                        size="md"
                        style={{
                          color: 'rgba(255, 255, 255, 0.6)',
                          lineHeight: 1.6,
                          maxWidth: 280,
                          margin: '0 auto',
                        }}
                      >
                        {step.description}
                      </Text>
                    </Stack>
                  </Stack>
                </motion.div>
              </Grid.Col>
            ))}
          </Grid>
        </Stack>
      </Container>
    </Box>
  );
}
