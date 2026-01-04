'use client';

import { Box, Button, Container, Group, Stack, Text, Title } from '@mantine/core';
import { IconDownload, IconArrowRight } from '@tabler/icons-react';
import { motion } from 'framer-motion';

export function CTASection() {
  return (
    <Box
      component="section"
      py={{ base: 80, sm: 120 }}
      style={{
        background: 'linear-gradient(135deg, #FFCCD8 0%, #b197fc 50%, #7048e8 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* 배경 장식 */}
      <Box
        style={{
          position: 'absolute',
          top: -100,
          right: -100,
          width: 500,
          height: 500,
          borderRadius: '50%',
          background: 'rgba(255, 255, 255, 0.1)',
          filter: 'blur(80px)',
        }}
      />
      <Box
        style={{
          position: 'absolute',
          bottom: -50,
          left: -50,
          width: 400,
          height: 400,
          borderRadius: '50%',
          background: 'rgba(255, 255, 255, 0.08)',
          filter: 'blur(60px)',
        }}
      />

      <Container size="md" style={{ position: 'relative', zIndex: 1 }}>
        <Stack align="center" gap="xl">
          <Stack align="center" gap="lg">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Title
                order={2}
                ta="center"
                fz={{ base: 32, sm: 42, md: 56 }}
                fw={900}
                c="white"
                style={{ letterSpacing: -1, lineHeight: 1.1 }}
              >
                더 이상 멀리서
                <br />
                바라보지 마세요
              </Title>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Text
                size="lg"
                ta="center"
                c="white"
                style={{ opacity: 0.9, maxWidth: 500 }}
                fz={{ base: 'md', sm: 'xl' }}
              >
                지금 MAJU에서 꿈꾸던 만남을 현실로 마주해 보세요!
                <br />
                특별한 순간이 당신을 기다리고 있습니다.
              </Text>
            </motion.div>
          </Stack>

          <Group gap="md" mt="md">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                component="a"
                href="#download"
                size="xl"
                radius="xl"
                variant="white"
                color="pink"
                leftSection={<IconDownload size={22} />}
                style={{
                  fontWeight: 700,
                  fontSize: 18,
                  padding: '0 36px',
                  height: 60,
                  boxShadow: '0 8px 30px rgba(0, 0, 0, 0.2)',
                  transition: 'box-shadow 0.3s ease',
                  color: '#7048e8',
                }}
              >
                앱 다운로드
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                component="a"
                href="#features"
                size="xl"
                radius="xl"
                variant="outline"
                color="white"
                rightSection={<IconArrowRight size={20} />}
                style={{
                  fontWeight: 600,
                  fontSize: 18,
                  padding: '0 32px',
                  height: 60,
                  borderWidth: 2,
                  transition: 'background 0.3s ease',
                }}
              >
                더 알아보기
              </Button>
            </motion.div>
          </Group>
        </Stack>
      </Container>
    </Box>
  );
}
