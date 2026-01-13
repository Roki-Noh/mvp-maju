'use client';

import { Box, Container, Stack, Text, Title, Button } from '@mantine/core';
import { IconMail } from '@tabler/icons-react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export default function HelpPage() {
  return (
    <Box bg="#0a0a12" mih="100vh">
      <Header />

      <Container size="sm" py={120}>
        <Stack gap="xl" align="center" ta="center">
          <Stack gap="md">
            <Title order={1} c="white" size="2.5rem">
              고객센터
            </Title>
            <Text c="gray.5" size="md">
              MAJU 이용 중 궁금한 점이나 불편한 점이 있으시면<br />
              언제든지 문의해 주세요.
            </Text>
          </Stack>

          <Box
            p="xl"
            w="100%"
            style={{
              background: 'rgba(255, 255, 255, 0.03)',
              borderRadius: 16,
              border: '1px solid rgba(255, 255, 255, 0.08)',
            }}
          >
            <Stack gap="lg" align="center">
              <Stack gap="xs" align="center">
                <Text c="gray.4" size="sm">
                  운영시간: 평일 10:00 - 18:00 (주말/공휴일 휴무)
                </Text>
                <Text c="gray.4" size="sm">
                  문의 후 영업일 기준 1~2일 내 답변드립니다.
                </Text>
              </Stack>

              <Button
                component="a"
                href="mailto:majuboda.app@gmail.com?subject=[MAJU] 문의하기"
                size="lg"
                leftSection={<IconMail size={20} />}
                variant="gradient"
                gradient={{ from: 'violet', to: 'grape', deg: 135 }}
                radius="xl"
                px={40}
              >
                이메일로 문의하기
              </Button>

              <Text c="gray.6" size="xs">
                majuboda.app@gmail.com
              </Text>
            </Stack>
          </Box>
        </Stack>
      </Container>

      <Footer />
    </Box>
  );
}
