'use client';

import { ActionIcon, Anchor, Box, Container, Divider, Group, Image, Stack, Text, Title } from '@mantine/core';
import { IconBrandInstagram, IconBrandTwitter, IconBrandYoutube } from '@tabler/icons-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <Box component="footer" pt={80} pb={40} bg="#0f0f1a">
      <Container size="lg">
        <Stack gap={60}>
          <Group justify="space-between" align="flex-start" wrap="wrap" gap={40}>
            {/* Brand Column */}
            <Stack gap="md" style={{ maxWidth: 300 }}>
              <Title order={3} c="white" style={{ fontFamily: 'Pretendard Variable' }}>MAJU</Title>
              <Text size="sm" c="gray.5" style={{ lineHeight: 1.6 }}>
                꿈꾸던 만남이 현실이 되는 곳.<br />
                프리미엄 1:1 라이브톡 플랫폼 MAJU에서<br />
                특별한 순간을 경험해보세요.
              </Text>
              <Group gap="sm">
                <ActionIcon variant="subtle" color="gray" size="lg" radius="xl">
                  <IconBrandInstagram size={20} />
                </ActionIcon>
                <ActionIcon variant="subtle" color="gray" size="lg" radius="xl">
                  <IconBrandTwitter size={20} />
                </ActionIcon>
                <ActionIcon variant="subtle" color="gray" size="lg" radius="xl">
                  <IconBrandYoutube size={20} />
                </ActionIcon>
              </Group>
            </Stack>

            {/* Links Columns */}
            <Group gap={60} align="flex-start" wrap="wrap">
              <Stack gap="md">
                <Text size="sm" fw={700} c="white">서비스</Text>
                <Stack gap="xs">
                  <Anchor href="#" size="sm" c="gray.5" underline="hover">브랜드 소개</Anchor>
                  <Anchor href="#" size="sm" c="gray.5" underline="hover">호스트 지원</Anchor>
                  <Anchor href="#" size="sm" c="gray.5" underline="hover">제휴 문의</Anchor>
                </Stack>
              </Stack>

              <Stack gap="md">
                <Text size="sm" fw={700} c="white">고객지원</Text>
                <Stack gap="xs">
                  <Anchor href="#" size="sm" c="gray.5" underline="hover">공지사항</Anchor>
                  <Anchor href="#" size="sm" c="gray.5" underline="hover">자주 묻는 질문</Anchor>
                  <Anchor href="mailto:support@maju.app" size="sm" c="gray.5" underline="hover">1:1 문의하기</Anchor>
                </Stack>
              </Stack>

              <Stack gap="md">
                <Text size="sm" fw={700} c="white">정책</Text>
                <Stack gap="xs">
                  <Anchor href="#" size="sm" c="gray.5" underline="hover">이용약관</Anchor>
                  <Anchor href="#" size="sm" c="gray.5" fw={700} underline="hover">개인정보처리방침</Anchor>
                  <Anchor href="#" size="sm" c="gray.5" underline="hover">운영정책</Anchor>
                </Stack>
              </Stack>
            </Group>
          </Group>

          <Divider color="white" opacity={0.1} />

          <Group justify="space-between" align="center" wrap="wrap" gap="md">
            <Text size="xs" c="gray.6">
              &copy; {currentYear} MAJU Inc. All rights reserved.
            </Text>
            <Group gap="xl">
              <Text size="xs" c="gray.7">사업자등록번호: 123-45-67890</Text>
              <Text size="xs" c="gray.7">통신판매업신고: 2024-서울강남-00000</Text>
            </Group>
          </Group>
        </Stack>
      </Container>
    </Box>
  );
}
