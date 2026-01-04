'use client';

import { Box, Container, Group, Stack, Text, Title, Image } from '@mantine/core';
import { motion } from 'framer-motion';

// App Store & Google Play Store Badges
function AppStoreBadge() {
  return (
    <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}>
      <Box component="a" href="#" style={{ display: 'block' }}>
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg"
          alt="App Store"
          h={44}
          w="auto"
        />
      </Box>
    </motion.div>
  );
}

function PlayStoreBadge() {
  return (
    <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}>
      <Box component="a" href="#" style={{ display: 'block' }}>
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
          alt="Google Play"
          h={44}
          w="auto"
        />
      </Box>
    </motion.div>
  );
}

// Visual Component - Revenue Dashboard Style
function RevenueVisual() {
  return (
    <Box style={{ position: 'relative', width: '100%', maxWidth: 400 }}>
      {/* Main Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <Box
          style={{
            background: 'linear-gradient(135deg, #FF6B8A 0%, #FF8E9E 100%)',
            borderRadius: 24,
            padding: 28,
            color: 'white',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* Settlement Amount */}
          <Stack gap="xs" mb="xl">
            <Group gap="xs" align="center">
              <Box
                style={{
                  width: 32,
                  height: 32,
                  borderRadius: 8,
                  background: 'rgba(255,255,255,0.2)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Text size="sm">💰</Text>
              </Box>
              <Text size="sm" fw={500} style={{ opacity: 0.9 }}>
                이번 달 정산 금액
              </Text>
            </Group>
            <Title order={2} fw={800} style={{ fontSize: 32 }}>
              23,560,100 원
            </Title>
          </Stack>

          {/* Growth Rate Card */}
          <Box
            style={{
              background: 'white',
              borderRadius: 16,
              padding: 20,
              color: '#1a1a2e',
            }}
          >
            <Group justify="space-between" align="flex-start">
              <Stack gap={4}>
                <Text size="sm" c="gray.6" fw={500}>
                  수익 상승률
                </Text>
                <Group gap="xs" align="baseline">
                  <Text size="xl" fw={800} c="pink">
                    +250%
                  </Text>
                  <Text size="xs" c="gray.5">
                    지난달 대비
                  </Text>
                </Group>
              </Stack>
              {/* Mini Chart Bars */}
              <Group gap={4} align="flex-end" style={{ height: 50 }}>
                {[30, 45, 35, 60, 80].map((height, i) => (
                  <motion.div
                    key={i}
                    initial={{ height: 0 }}
                    whileInView={{ height: `${height}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 * i }}
                    style={{
                      width: 12,
                      borderRadius: 4,
                      background:
                        i === 4
                          ? 'linear-gradient(180deg, #FF6B8A 0%, #FF8E9E 100%)'
                          : '#e9ecef',
                    }}
                  />
                ))}
              </Group>
            </Group>
          </Box>
        </Box>
      </motion.div>

      {/* Floating Coin Icon */}
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          position: 'absolute',
          top: -15,
          right: 20,
          width: 50,
          height: 50,
          background: 'white',
          borderRadius: 12,
          boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Text size="xl">🪙</Text>
      </motion.div>
    </Box>
  );
}

export function CreatorSection() {
  return (
    <Box
      component="section"
      py={{ base: 80, sm: 120 }}
      style={{
        background: '#ffffff',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <Container size="lg">
        {/* Mobile Layout */}
        <Stack gap={40} align="center" hiddenFrom="md">
          <RevenueVisual />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Stack gap="xl" align="center">
              <Stack gap="md" align="center">
                <Text
                  c="#FF6B8A"
                  fw={700}
                  size="sm"
                  style={{ letterSpacing: 2 }}
                >
                  FOR CREATORS
                </Text>
                <Title
                  order={2}
                  fz={28}
                  fw={800}
                  ta="center"
                  style={{ lineHeight: 1.3 }}
                >
                  즐거운 팬 소통만으로
                  <br />
                  <Text span inherit c="#FF6B8A">
                    자연스러운 수익
                  </Text>
                  을 만들어보세요
                </Title>
              </Stack>

              <Stack gap="sm">
                <Group gap="xs" align="flex-start" justify="center">
                  <Text>🔥</Text>
                  <Text size="sm" c="gray.7" ta="center" style={{ lineHeight: 1.6, flex: 1 }}>
                    MAJU는 합리적인 요금 정책으로 팬들에게 절대 부담을 주지 않아요.
                  </Text>
                </Group>
                <Group gap="xs" align="flex-start" justify="center">
                  <Text>🔥</Text>
                  <Text size="sm" c="gray.7" ta="center" style={{ lineHeight: 1.6, flex: 1 }}>
                    팬들과 1:1 영상통화로 특별한 시간을 공유하고, 진정한 소통을 경험하세요.
                  </Text>
                </Group>
                <Group gap="xs" align="flex-start" justify="center">
                  <Text>🔥</Text>
                  <Text size="sm" c="gray.7" ta="center" style={{ lineHeight: 1.6, flex: 1 }}>
                    팬들과 즐겁게 소통하는 것만으로도 매월 안정적인 수익을 가져갈 수 있어요.
                  </Text>
                </Group>
              </Stack>

              <Text size="md" fw={600} c="dark.9" ta="center">
                크리에이터, 셀럽이라면 지금 바로 이용할 수 있어요.
              </Text>

              <Group gap="md" justify="center">
                <PlayStoreBadge />
                <AppStoreBadge />
              </Group>
            </Stack>
          </motion.div>
        </Stack>

        {/* Desktop Layout */}
        <Group justify="space-between" align="center" gap={60} visibleFrom="md">
          {/* Text Side */}
          <Box style={{ flex: 1, maxWidth: 520 }}>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Stack gap="xl">
                <Stack gap="md">
                  <Text
                    c="#FF6B8A"
                    fw={700}
                    size="sm"
                    style={{ letterSpacing: 2 }}
                  >
                    FOR CREATORS
                  </Text>
                  <Title
                    order={2}
                    fz={{ base: 28, sm: 38 }}
                    fw={800}
                    style={{ lineHeight: 1.3 }}
                  >
                    즐거운 팬 소통만으로
                    <br />
                    <Text span inherit c="#FF6B8A">
                      자연스러운 수익
                    </Text>
                    을 만들어보세요
                  </Title>
                </Stack>

                <Stack gap="sm">
                  <Group gap="xs" align="flex-start">
                    <Text>🔥</Text>
                    <Text size="md" c="gray.7" style={{ lineHeight: 1.6 }}>
                      MAJU는 합리적인 요금 정책으로 팬들에게 절대 부담을
                      주지 않아요.
                    </Text>
                  </Group>
                  <Group gap="xs" align="flex-start">
                    <Text>🔥</Text>
                    <Text size="md" c="gray.7" style={{ lineHeight: 1.6 }}>
                      팬들과 1:1 영상통화로 특별한 시간을 공유하고, 진정한 소통을 경험하세요.
                    </Text>
                  </Group>
                  <Group gap="xs" align="flex-start">
                    <Text>🔥</Text>
                    <Text size="md" c="gray.7" style={{ lineHeight: 1.6 }}>
                      팬들과 즐겁게 소통하는 것만으로도 매월 안정적인 수익을
                      가져갈 수 있어요.
                    </Text>
                  </Group>
                </Stack>

                <Text size="lg" fw={600} c="dark.9">
                  크리에이터, 셀럽이라면 지금 바로 이용할 수 있어요.
                </Text>

                <Group gap="md">
                  <PlayStoreBadge />
                  <AppStoreBadge />
                </Group>
              </Stack>
            </motion.div>
          </Box>

          {/* Visual Side */}
          <Box style={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
            <RevenueVisual />
          </Box>
        </Group>
      </Container>
    </Box>
  );
}
