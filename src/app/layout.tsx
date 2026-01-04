import '@mantine/core/styles.css';
import './globals.css';

import type { Metadata } from 'next';
import { ColorSchemeScript, MantineProvider, mantineHtmlProps } from '@mantine/core';
import { theme } from '@/theme/theme';

export const metadata: Metadata = {
  title: 'MAJU - 1:1 프리미엄 라이브톡',
  description: '내가 원하던 그 사람과 마주보는 시간. 다양한 분야의 셀럽, 인플루언서, 전문가와 1:1로 연결되는 프리미엄 영상통화 플랫폼',
  keywords: ['MAJU', '마주', '영상통화', '라이브톡', '셀럽', '인플루언서', '1:1 통화'],
  openGraph: {
    title: 'MAJU - 1:1 프리미엄 라이브톡',
    description: '내가 원하던 그 사람과 마주보는 시간',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" {...mantineHtmlProps}>
      <head>
        <ColorSchemeScript defaultColorScheme="light" />
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no" />
        <link rel="stylesheet" as="style" crossOrigin="anonymous" href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable.min.css" />
      </head>
      <body>
        <MantineProvider theme={theme} defaultColorScheme="light">
          {children}
        </MantineProvider>
      </body>
    </html>
  );
}
