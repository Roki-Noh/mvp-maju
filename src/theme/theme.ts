'use client';

import { createTheme, MantineColorsTuple } from '@mantine/core';

const pink: MantineColorsTuple = [
  '#FFF0F3',
  '#FFE0E8',
  '#FFCCD8',
  '#F5B5C8',
  '#E89AAF',
  '#DB7F96',
  '#C86480',
  '#B54A6A',
  '#A23054',
  '#8F163E',
  '#FFF0F3',
];

const violet: MantineColorsTuple = [
  '#f3f0ff',
  '#e5dbff',
  '#d0bfff',
  '#b197fc',
  '#9775fa',
  '#845ef7',
  '#7950f2',
  '#7048e8',
  '#6741d9',
  '#5f3dc4',
];

export const theme = createTheme({
  primaryColor: 'pink',
  colors: {
    pink,
    violet,
    dark: [
      '#C1C2C5',
      '#A6A7AB',
      '#909296',
      '#5c5f66',
      '#373A40',
      '#2C2E33',
      '#25262B',
      '#1A1B1E',
      '#141517',
      '#101113',
    ],
  },
  fontFamily: '"Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif',
  headings: {
    fontFamily: '"Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif',
    fontWeight: '700',
  },
  defaultRadius: 'md',
  components: {
    Button: {
      defaultProps: {
        radius: 'xl',
        variant: 'gradient',
        gradient: { from: 'pink', to: 'violet', deg: 45 },
      },
    },
  },
});
