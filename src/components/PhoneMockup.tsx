'use client';

import { Box, Stack, Text, ThemeIcon } from '@mantine/core';
import { IconVideo, IconUser, IconHeart } from '@tabler/icons-react';
import { motion } from 'framer-motion';

export function PhoneMockup() {
  return (
    <Box
      component={motion.div}
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      style={{
        position: 'relative',
        width: 300,
        height: 600,
        background: '#0a0a0a',
        borderRadius: 48,
        padding: 12,
        boxShadow: '0 50px 100px -20px rgba(0, 0, 0, 0.5), 0 30px 60px -30px rgba(0, 0, 0, 0.6), inset 0 0 0 2px rgba(255, 255, 255, 0.1)',
      }}
    >
      {/* 노치 */}
      <Box
        style={{
          position: 'absolute',
          top: 16,
          left: '50%',
          transform: 'translateX(-50%)',
          width: 96,
          height: 28,
          background: '#000',
          borderRadius: 14,
          zIndex: 10,
        }}
      />

      {/* 스크린 */}
      <Box
        style={{
          width: '100%',
          height: '100%',
          background: 'linear-gradient(180deg, #2a1a2e 0%, #1a1a2e 50%, #0f0f1a 100%)',
          borderRadius: 36,
          overflow: 'hidden',
          position: 'relative',
        }}
      >
        {/* 앱 UI */}
        <Stack gap={0} h="100%">
          {/* 상단 바 */}
          <Box
            px="md"
            py="lg"
            style={{
              background: 'linear-gradient(180deg, rgba(0,0,0,0.4) 0%, transparent 100%)',
            }}
          >
            <Text size="sm" fw={700} c="white" ta="center" mt={4}>
              MAJU
            </Text>
          </Box>

          {/* 메인 콘텐츠 - 영상통화 UI */}
          <Box
            style={{
              flex: 1,
              position: 'relative',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {/* 배경 블러 효과 */}
            <Box
              style={{
                position: 'absolute',
                inset: 0,
                background: 'radial-gradient(circle at 50% 30%, rgba(243, 240, 255, 0.1) 0%, transparent 70%)',
              }}
            />

            {/* 상대방 프로필 */}
            <Stack align="center" gap="md" style={{ position: 'relative', zIndex: 1 }}>
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <Box
                  style={{
                    width: 140,
                    height: 140,
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, #FFCCD8 0%, #b197fc 100%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 0 60px rgba(177, 151, 252, 0.3)',
                    border: '4px solid rgba(255, 255, 255, 0.2)',
                  }}
                >
                  <IconUser size={70} color="white" stroke={1.5} />
                </Box>
              </motion.div>
              <Stack gap={4} align="center">
                <Text size="xl" fw={700} c="white">
                  Karina
                </Text>
                <Text size="sm" c="gray.4">
                  00:42
                </Text>
              </Stack>
            </Stack>

            {/* 작은 내 화면 */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              style={{
                position: 'absolute',
                bottom: 24,
                right: 20,
                width: 90,
                height: 120,
                borderRadius: 16,
                background: 'linear-gradient(135deg, #2a2a3e 0%, #1a1a2e 100%)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
                zIndex: 2,
              }}
            >
              <IconUser size={32} color="#b197fc" stroke={1.5} />
            </motion.div>
          </Box>

          {/* 하단 컨트롤 */}
          <Box
            px="xl"
            pb={40}
            pt="xl"
            style={{
              background: 'linear-gradient(0deg, rgba(0,0,0,0.8) 0%, transparent 100%)',
            }}
          >
            <Stack gap="xs" align="center">
              <Box
                style={{
                  display: 'flex',
                  gap: 32,
                  justifyContent: 'center',
                }}
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <ThemeIcon
                    size={60}
                    radius="xl"
                    variant="filled"
                    color="gray.8"
                    style={{ backdropFilter: 'blur(10px)', border: '1px solid rgba(255,255,255,0.1)' }}
                  >
                    <IconVideo size={28} />
                  </ThemeIcon>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <ThemeIcon
                    size={60}
                    radius="xl"
                    variant="gradient"
                    gradient={{ from: 'pink', to: 'violet', deg: 45 }}
                    style={{
                      boxShadow: '0 0 30px rgba(245, 181, 200, 0.4)',
                    }}
                  >
                    <IconHeart size={28} fill="white" />
                  </ThemeIcon>
                </motion.div>
              </Box>
            </Stack>
          </Box>
        </Stack>
      </Box>
    </Box>
  );
}
