'use client';

import { Box, Button, Container, Group, Image } from '@mantine/core';
import { useWindowScroll } from '@mantine/hooks';

export function Header() {
  const [scroll] = useWindowScroll();
  const isScrolled = scroll.y > 50;

  return (
    <Box
      component="header"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        backgroundColor: isScrolled ? 'rgba(255, 255, 255, 0.95)' : 'transparent',
        backdropFilter: isScrolled ? 'blur(10px)' : 'none',
        boxShadow: isScrolled ? '0 4px 20px rgba(0, 0, 0, 0.08)' : 'none',
        transition: 'all 0.3s ease',
      }}
    >
      <Container size="xl" py="md">
        <Group justify="space-between" align="center">
          {/* 로고 이미지 */}
          <Box
            style={{
              width: 'fit-content',
              backgroundColor: 'white',
              borderRadius: 8,
              padding: 6,
              boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
            }}
          >
            <Image
              src="/logo.png"
              alt="MAJU"
              h={48}
              w="auto"
              fit="contain"
            />
          </Box>

          {/* CTA 버튼 */}
          <Button
            component="a"
            href="#download"
            size="md"
            radius="xl"
            variant={isScrolled ? 'filled' : 'outline'}
            color={isScrolled ? 'pink' : 'white'}
            style={{
              fontWeight: 600,
              transition: 'all 0.3s ease',
              borderWidth: 2,
            }}
          >
            앱 다운로드
          </Button>
        </Group>
      </Container>
    </Box>
  );
}
