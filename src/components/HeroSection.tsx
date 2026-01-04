'use client';

import { Box, Container, Group, Stack, Text, Title, Image } from '@mantine/core';
import { motion } from 'framer-motion';
import { PhoneMockup } from './PhoneMockup';
import { IconSparkles } from '@tabler/icons-react';

// App Store & Google Play Store Badges
function AppStoreBadge() {
  return (
    <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}>
      <Box
        component="a"
        href="#"
        style={{ display: 'block' }}
      >
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg"
          alt="App Store"
          h={50}
          w="auto"
        />
      </Box>
    </motion.div>
  );
}

function PlayStoreBadge() {
  return (
    <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}>
      <Box
        component="a"
        href="#"
        style={{ display: 'block' }}
      >
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
          alt="Google Play"
          h={50}
          w="auto"
        />
      </Box>
    </motion.div>
  );
}

export function HeroSection() {
  return (
    <Box
      component="section"
      style={{
        minHeight: '100vh',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background gradient + pattern */}
      <Box
        style={{
          position: 'absolute',
          inset: 0,
          background: `
            radial-gradient(ellipse at 30% 20%, rgba(245, 181, 200, 0.4) 0%, transparent 50%),
            radial-gradient(ellipse at 70% 80%, rgba(232, 154, 175, 0.3) 0%, transparent 50%),
            linear-gradient(180deg, #0f0f1a 0%, #1a1a2e 50%, #2a1a2e 100%)
          `,
          zIndex: 0,
        }}
      />

      {/* Animated blobs for dynamic feel */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        style={{
          position: 'absolute',
          top: '20%',
          left: '10%',
          width: '500px',
          height: '500px',
          background: 'radial-gradient(circle, rgba(177, 151, 252, 0.2) 0%, transparent 70%)',
          borderRadius: '50%',
          filter: 'blur(60px)',
          zIndex: 0,
        }}
      />

      <Container size="xl" style={{ position: 'relative', zIndex: 1 }}>
        <Box
          style={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            paddingTop: 100,
            paddingBottom: 60,
          }}
        >
          <Group
            justify="space-between"
            align="center"
            gap={60}
            wrap="wrap"
            style={{ width: '100%' }}
          >
            {/* Text content - Mobile */}
            <Stack
              gap="xl"
              align="center"
              hiddenFrom="md"
              style={{
                maxWidth: 600,
                flex: 1,
              }}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Group gap="xs" justify="center">
                  <IconSparkles size={20} color="#b197fc" />
                  <Text
                    fw={700}
                    style={{
                      letterSpacing: 2,
                      textTransform: 'uppercase',
                      color: '#b197fc',
                    }}
                  >
                    Premium Social Platform
                  </Text>
                </Group>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <Title
                  order={1}
                  ta="center"
                  style={{
                    fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                    fontWeight: 800,
                    lineHeight: 1.1,
                    color: 'white',
                    letterSpacing: -1,
                  }}
                >
                  내가 원하던<br />
                  <Text
                    component="span"
                    inherit
                    variant="gradient"
                    gradient={{ from: 'pink', to: 'violet', deg: 45 }}
                  >
                    그 사람
                  </Text>과 마주하는 시간
                </Title>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Text
                  size="xl"
                  c="gray.3"
                  ta="center"
                  style={{ lineHeight: 1.6, maxWidth: 500 }}
                >
                  셀럽, 인플루언서, 전문가와 1:1 프라이빗 영상통화.<br />
                  꿈꿔왔던 만남이 MAJU에서 현실이 됩니다.
                </Text>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <Group gap="md" justify="center">
                  <AppStoreBadge />
                  <PlayStoreBadge />
                </Group>
              </motion.div>
            </Stack>

            {/* Text content - Desktop */}
            <Stack
              gap="xl"
              align="flex-start"
              visibleFrom="md"
              style={{
                maxWidth: 600,
                flex: 1,
              }}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Group gap="xs">
                  <IconSparkles size={20} color="#b197fc" />
                  <Text
                    fw={700}
                    style={{
                      letterSpacing: 2,
                      textTransform: 'uppercase',
                      color: '#b197fc',
                    }}
                  >
                    Premium Social Platform
                  </Text>
                </Group>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <Title
                  order={1}
                  style={{
                    fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                    fontWeight: 800,
                    lineHeight: 1.1,
                    color: 'white',
                    letterSpacing: -1,
                  }}
                >
                  내가 원하던<br />
                  <Text
                    component="span"
                    inherit
                    variant="gradient"
                    gradient={{ from: 'pink', to: 'violet', deg: 45 }}
                  >
                    그 사람
                  </Text>과 마주하는 시간
                </Title>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Text
                  size="xl"
                  c="gray.3"
                  style={{ lineHeight: 1.6, maxWidth: 500 }}
                >
                  셀럽, 인플루언서, 전문가와 1:1 프라이빗 영상통화.<br />
                  꿈꿔왔던 만남이 MAJU에서 현실이 됩니다.
                </Text>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <Group gap="md">
                  <AppStoreBadge />
                  <PlayStoreBadge />
                </Group>
              </motion.div>
            </Stack>

            {/* Phone Mockup */}
            <Box
              style={{
                flex: 1,
                display: 'flex',
                justifyContent: 'center',
                minWidth: 300,
              }}
            >
              <PhoneMockup />
            </Box>
          </Group>
        </Box>
      </Container>
    </Box>
  );
}
