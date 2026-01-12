'use client';

import { useState } from 'react';
import {
  Box,
  Container,
  Stack,
  Text,
  Title,
  TextInput,
  Textarea,
  Button,
  Alert,
  Checkbox,
} from '@mantine/core';
import { IconAlertCircle, IconCheck } from '@tabler/icons-react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export default function DeleteAccountPage() {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [reason, setReason] = useState('');
  const [confirmed, setConfirmed] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!email || !phone) {
      setError('이메일과 휴대전화번호를 입력해주세요.');
      return;
    }

    if (!confirmed) {
      setError('계정 삭제에 동의해주세요.');
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('https://formspree.io/f/majuboda.app@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          _subject: '[MAJU] 계정 삭제 요청',
          email,
          phone,
          reason: reason || '(사유 미기재)',
          requestType: '계정 삭제 요청',
          requestedAt: new Date().toISOString(),
        }),
      });

      if (response.ok) {
        setIsSubmitted(true);
      } else {
        // Formspree 설정이 안 되어 있어도 mailto로 대체
        window.location.href = `mailto:majuboda.app@gmail.com?subject=[MAJU] 계정 삭제 요청&body=이메일: ${email}%0A휴대전화번호: ${phone}%0A삭제 사유: ${reason || '(사유 미기재)'}`;
        setIsSubmitted(true);
      }
    } catch {
      // 에러 시 mailto로 대체
      window.location.href = `mailto:majuboda.app@gmail.com?subject=[MAJU] 계정 삭제 요청&body=이메일: ${email}%0A휴대전화번호: ${phone}%0A삭제 사유: ${reason || '(사유 미기재)'}`;
      setIsSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Box bg="#0a0a12" mih="100vh">
      <Header />

      <Container size="sm" py={120}>
        <Stack gap="xl">
          <Stack gap="md" ta="center" mb="xl">
            <Title order={1} c="white" size="2.5rem">
              계정 삭제 요청
            </Title>
            <Text c="gray.5" size="md">
              MAJU 계정 삭제를 요청하시면 운영팀에서 확인 후 처리해드립니다.
            </Text>
          </Stack>

          {isSubmitted ? (
            <Box
              p="xl"
              style={{
                background: 'rgba(255, 255, 255, 0.03)',
                borderRadius: 16,
                border: '1px solid rgba(255, 255, 255, 0.08)',
              }}
            >
              <Stack gap="md" align="center" ta="center">
                <Box
                  p="md"
                  style={{
                    background: 'rgba(34, 197, 94, 0.1)',
                    borderRadius: '50%',
                  }}
                >
                  <IconCheck size={48} color="#22c55e" />
                </Box>
                <Title order={3} c="white">
                  삭제 요청이 접수되었습니다
                </Title>
                <Text c="gray.4" style={{ lineHeight: 1.8 }}>
                  계정 삭제 요청이 정상적으로 접수되었습니다.<br />
                  운영팀에서 확인 후 영업일 기준 3~5일 내에<br />
                  입력하신 이메일로 처리 결과를 안내드립니다.
                </Text>
                <Button
                  component="a"
                  href="/"
                  variant="light"
                  color="violet"
                  mt="md"
                >
                  홈으로 돌아가기
                </Button>
              </Stack>
            </Box>
          ) : (
            <Box
              component="form"
              onSubmit={handleSubmit}
              p="xl"
              style={{
                background: 'rgba(255, 255, 255, 0.03)',
                borderRadius: 16,
                border: '1px solid rgba(255, 255, 255, 0.08)',
              }}
            >
              <Stack gap="lg">
                <Alert
                  icon={<IconAlertCircle size={16} />}
                  color="orange"
                  variant="light"
                >
                  <Text size="sm">
                    계정 삭제 시 모든 데이터(프로필, 결제 내역, 이용 기록 등)가 영구적으로 삭제되며 복구할 수 없습니다.
                    남은 코인이 있는 경우 환불 절차가 필요할 수 있습니다.
                  </Text>
                </Alert>

                {error && (
                  <Alert color="red" variant="light">
                    {error}
                  </Alert>
                )}

                <TextInput
                  label="가입 이메일"
                  placeholder="example@email.com"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  styles={{
                    label: { color: 'white', marginBottom: 8 },
                    input: {
                      backgroundColor: 'rgba(255, 255, 255, 0.05)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      color: 'white',
                      '&::placeholder': { color: 'rgba(255, 255, 255, 0.4)' },
                    },
                  }}
                />

                <TextInput
                  label="가입 휴대전화번호"
                  placeholder="010-0000-0000"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  styles={{
                    label: { color: 'white', marginBottom: 8 },
                    input: {
                      backgroundColor: 'rgba(255, 255, 255, 0.05)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      color: 'white',
                      '&::placeholder': { color: 'rgba(255, 255, 255, 0.4)' },
                    },
                  }}
                />

                <Textarea
                  label="삭제 사유 (선택)"
                  placeholder="계정 삭제를 원하시는 사유를 알려주세요."
                  minRows={3}
                  value={reason}
                  onChange={(e) => setReason(e.target.value)}
                  styles={{
                    label: { color: 'white', marginBottom: 8 },
                    input: {
                      backgroundColor: 'rgba(255, 255, 255, 0.05)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      color: 'white',
                      '&::placeholder': { color: 'rgba(255, 255, 255, 0.4)' },
                    },
                  }}
                />

                <Checkbox
                  label="위 내용을 확인하였으며, 계정 삭제에 동의합니다."
                  checked={confirmed}
                  onChange={(e) => setConfirmed(e.currentTarget.checked)}
                  styles={{
                    label: { color: 'rgba(255, 255, 255, 0.7)' },
                  }}
                />

                <Button
                  type="submit"
                  size="lg"
                  color="red"
                  fullWidth
                  loading={isSubmitting}
                  disabled={!confirmed}
                  mt="md"
                >
                  계정 삭제 요청
                </Button>

                <Text size="xs" c="gray.6" ta="center">
                  문의사항이 있으시면{' '}
                  <Text
                    component="a"
                    href="mailto:majuboda.app@gmail.com"
                    c="violet.4"
                    inherit
                  >
                    majuboda.app@gmail.com
                  </Text>
                  으로 연락해주세요.
                </Text>
              </Stack>
            </Box>
          )}
        </Stack>
      </Container>

      <Footer />
    </Box>
  );
}
