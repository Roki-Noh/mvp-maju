'use client';

import { Box, Container, Group, Stack, Text, Title, ThemeIcon, Badge } from '@mantine/core';
import { IconCheck } from '@tabler/icons-react';
import { motion } from 'framer-motion';
import Lottie from 'lottie-react';
import { useEffect, useState } from 'react';

// Lottie animation wrapper component
function LottieVisual({ src, height = 280 }: { src: string; height?: number }) {
  const [animationData, setAnimationData] = useState(null);

  useEffect(() => {
    fetch(src)
      .then(res => res.json())
      .then(data => setAnimationData(data))
      .catch(err => console.error('Failed to load Lottie animation:', err));
  }, [src]);

  if (!animationData) {
    return (
      <Box style={{
        width: '100%',
        height,
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
    <Box style={{
      width: '100%',
      height,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <Lottie
        animationData={animationData}
        loop
        autoplay
        style={{ width: '100%', maxWidth: 300, height: '100%' }}
      />
    </Box>
  );
}

// Video Call Visual - Lottie animation
function VideoCallVisual() {
  return <LottieVisual src="/animations/video-call.json" height={320} />;
}

// Coin Visual - Lottie animation
function CoinVisual() {
  return <LottieVisual src="/animations/coins.json" height={320} />;
}

// Privacy Visual - Lottie animation
function PrivacyVisual() {
  return <LottieVisual src="/animations/security.json" height={320} />;
}

const features = [
  {
    title: '원하는 셀럽과\n1:1 프라이빗\n영상통화',
    description: '좋아하는 인플루언서, 셀럽, 전문가와 오직 둘만의 프라이빗 영상통화를 즐기세요. FHD 고화질로 선명하게, 마치 바로 옆에 있는 것처럼.',
    visual: VideoCallVisual,
    tags: ['1:1 Video Call', 'HD Quality'],
  },
  {
    title: '코인으로 간편하게\n통화 요청',
    description: '복잡한 절차 없이 코인만 있으면 OK. 원하는 상대에게 통화를 요청하고, 수락되면 바로 연결됩니다. 충전도 간편하게.',
    visual: CoinVisual,
    tags: ['Simple Payment', 'Coin System'],
  },
  {
    title: '안심하고 대화하는\n프라이버시 보호',
    description: '화면 캡쳐, 녹화 완벽 차단. 대화 내용은 서버에 저장되지 않습니다. 걱정 없이 오직 대화에만 집중하세요.',
    visual: PrivacyVisual,
    tags: ['Privacy', 'Secure'],
  },
];

export function FeaturesSection() {
  return (
    <Box
      component="section"
      py={{ base: 80, sm: 140 }}
      style={{ background: '#ffffff', overflow: 'hidden' }}
    >
      <Container size="lg">
        <Stack gap={100}>
          {/* Header */}
          <Stack align="center" mb={40}>
            <Text c="#b197fc" fw={700} size="sm" style={{ letterSpacing: 2 }}>FEATURES</Text>
            <Title ta="center" order={2} fz={{ base: 28, sm: 40 }}>
              MAJU만의 <br />
              <Text span inherit c="#b197fc">특별한 경험</Text>
            </Title>
          </Stack>

          {features.map((feature, index) => {
            const isEven = index % 2 === 0;
            return (
              <Group
                key={index}
                justify="space-between"
                align="center"
                gap={60}
                style={{
                  flexDirection: isEven ? 'row' : 'row-reverse',
                }}
              >
                {/* Text Side */}
                <Box style={{ flex: 1, maxWidth: 500 }}>
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                  >
                    <Stack gap="md">
                      <Group gap="xs">
                        {feature.tags.map(tag => (
                          <Badge key={tag} variant="dot" color="gray" size="sm">{tag}</Badge>
                        ))}
                      </Group>
                      <Title
                        order={2}
                        size={36}
                        style={{
                          lineHeight: 1.3,
                          whiteSpace: 'pre-line'
                        }}
                      >
                        {feature.title}
                      </Title>
                      <Text size="lg" c="gray.6" style={{ lineHeight: 1.7 }}>
                        {feature.description}
                      </Text>
                      <ThemeIcon
                        radius="xl"
                        size={40}
                        variant="light"
                        color="violet"
                        mt="md"
                      >
                        <IconCheck size={20} />
                      </ThemeIcon>
                    </Stack>
                  </motion.div>
                </Box>

                {/* Visual Side */}
                <Box style={{ flex: 1, minWidth: 300 }}>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    <feature.visual />
                  </motion.div>
                </Box>
              </Group>
            );
          })}
        </Stack>
      </Container>
    </Box>
  );
}
