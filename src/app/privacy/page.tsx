'use client';

import { Box, Container, Stack, Text, Title, Divider, Anchor } from '@mantine/core';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export default function PrivacyPage() {
  return (
    <Box bg="#0a0a12" mih="100vh">
      <Header />

      <Container size="md" py={120}>
        <Stack gap="xl">
          <Stack gap="md" ta="center" mb="xl">
            <Title order={1} c="white" size="2.5rem">
              개인정보 처리방침
            </Title>
            <Text c="gray.5" size="sm">
              시행일: 2026년 01월 03일
            </Text>
          </Stack>

          <Box
            p="xl"
            style={{
              background: 'rgba(255, 255, 255, 0.03)',
              borderRadius: 16,
              border: '1px solid rgba(255, 255, 255, 0.08)',
            }}
          >
            <Stack gap="xl">
              <Text c="gray.4" style={{ lineHeight: 1.8 }}>
                주식회사 비잇 (이하 "회사"라 함)은 "회사"의 '마주(MAJU)' 서비스(이하 "서비스"라 함)를 이용하는 사용자(이하 "사용자"이라 함)의 개인정보를 보호하고 이와 관련한 고충을 신속하고 원활하게 처리할 수 있도록 하기 위하여 개인정보보호법에 따라 다음과 같이 개인정보 처리방침을 수립·공개합니다.
              </Text>
              <Text c="gray.4" style={{ lineHeight: 1.8 }}>
                회사는 본 개인정보처리방침을 사이트 첫 화면에 공개함으로써 이용자가 언제든지 쉽게 확인할 수 있도록 하고 있습니다.
              </Text>
              <Text c="gray.4" style={{ lineHeight: 1.8 }}>
                본 개인정보처리방침은 관계 법령 및 회사의 내부 방침에 따라 변경될 수 있으며, 개정 시 버전 관리를 통하여 개정사항을 쉽게 확인할 수 있도록 하고 있습니다.
              </Text>

              <Divider color="white" opacity={0.1} />

              {/* 제1조 */}
              <Stack gap="md">
                <Title order={3} c="white" size="lg">
                  제1조 (개인정보의 수집 및 이용목적)
                </Title>
                <Text c="gray.4" style={{ lineHeight: 1.8 }}>
                  회사는 다음의 목적을 위해 이용자 개인정보를 처리합니다. 처리하고 있는 개인정보는 다음의 목적 이외의 용도로는 이용되지 않으며, 이용 목적이 변경되는 경우에는 개인정보 보호법 제18조에 따라 별도의 동의를 받는 등 필요한 조치를 이행할 예정입니다.
                </Text>
                <Stack gap="xs" pl="md">
                  <Text c="gray.4" style={{ lineHeight: 1.8 }}>
                    1. 회원가입 및 관리: 이용자 식별, 고객확인, 이용자 정보 관리, 각종 고지사항 전달
                  </Text>
                  <Text c="gray.4" style={{ lineHeight: 1.8 }}>
                    2. 재화 또는 서비스 제공: 부정 이용 방지, 서비스 이용 통계・분석, 신규 서비스 및 맞춤형 서비스 제공 등
                  </Text>
                  <Text c="gray.4" style={{ lineHeight: 1.8 }}>
                    3. 이벤트 정보 안내: 각종 이벤트 및 광고성 정보 제공
                  </Text>
                  <Text c="gray.4" style={{ lineHeight: 1.8 }}>
                    4. 고충 처리: 고객 상담처리, 피해구제 등
                  </Text>
                </Stack>
              </Stack>

              <Divider color="white" opacity={0.1} />

              {/* 제2조 */}
              <Stack gap="md">
                <Title order={3} c="white" size="lg">
                  제2조 (개인정보의 처리 및 보유기간)
                </Title>
                <Text c="gray.4" style={{ lineHeight: 1.8 }}>
                  ① 회사는 법령에 따른 개인정보 처리·보유기간 또는 이용자로부터 개인정보의 수집 시에 동의받은 개인정보 처리·보유기간 내에서 개인정보를 처리·보유합니다.
                </Text>
                <Text c="gray.4" style={{ lineHeight: 1.8 }}>
                  ② 각각의 개인정보 처리 및 보유기간은 다음과 같습니다.
                </Text>
                <Stack gap="xs" pl="md">
                  <Text c="gray.4" style={{ lineHeight: 1.8 }}>
                    1. 회원 가입 및 관리: 탈퇴 시까지
                  </Text>
                  <Text c="gray.4" style={{ lineHeight: 1.8 }}>
                    2. 재화 또는 서비스 제공: 재화 또는 서비스 공급완료 및 관련 비용결제·정산 완료시까지. 단, 부정이용방지 및 민원처리, 소송대응 목적으로 서비스 이용과정에서 생성된 이용기록 및 행위정보는 회원 탈퇴 후 5년간 보유
                  </Text>
                  <Text c="gray.4" style={{ lineHeight: 1.8 }}>
                    3. 이벤트 정보 안내: 해당 이벤트 종료시까지
                  </Text>
                  <Text c="gray.4" style={{ lineHeight: 1.8 }}>
                    4. 고충 처리: 회원 탈퇴 후 5년 또는 관계 법령에 정해진 보관기간 중 장기인 것의 종기까지
                  </Text>
                </Stack>
              </Stack>

              <Divider color="white" opacity={0.1} />

              {/* 제3조 */}
              <Stack gap="md">
                <Title order={3} c="white" size="lg">
                  제3조 (개인정보의 제3자 제공)
                </Title>
                <Text c="gray.4" style={{ lineHeight: 1.8 }}>
                  회사는 이용자의 개인정보를 명시한 범위 내에서만 처리하며, 정보주체의 동의 또는 법률의 특별한 규정이 있는 경우에만 제3자에게 제공합니다.
                </Text>
              </Stack>

              <Divider color="white" opacity={0.1} />

              {/* 제4조 */}
              <Stack gap="md">
                <Title order={3} c="white" size="lg">
                  제4조 (개인정보처리의 위탁)
                </Title>
                <Text c="gray.4" style={{ lineHeight: 1.8 }}>
                  회사는 서비스 제공을 위해 필요한 업무 중 일부를 외부 업체(케이원피에스, 헥토파이낸셜 등)에 위탁하고 있습니다.
                </Text>
              </Stack>

              <Divider color="white" opacity={0.1} />

              {/* 제5조 */}
              <Stack gap="md">
                <Title order={3} c="white" size="lg">
                  제5조 (개인정보의 국외이전)
                </Title>
                <Text c="gray.4" style={{ lineHeight: 1.8 }}>
                  회사는 서비스 운영 및 데이터 저장 등을 위해 Google, AWS, Zendesk 등의 국외 수탁업체에 개인정보를 이전하고 있습니다.
                </Text>
              </Stack>

              <Divider color="white" opacity={0.1} />

              {/* 제6조 */}
              <Stack gap="md">
                <Title order={3} c="white" size="lg">
                  제6조 (이용자 및 법정대리인의 권리·의무와 행사방법)
                </Title>
                <Text c="gray.4" style={{ lineHeight: 1.8 }}>
                  이용자는 언제든지 개인정보 열람·정정·삭제·처리정지 요구 등의 권리를 행사할 수 있습니다.
                </Text>
              </Stack>

              <Divider color="white" opacity={0.1} />

              {/* 제7조 */}
              <Stack gap="md">
                <Title order={3} c="white" size="lg">
                  제7조 (처리하는 개인정보의 항목)
                </Title>
                <Text c="gray.4" style={{ lineHeight: 1.8 }}>
                  회사는 가입 시 이름, 휴대전화번호, 이메일, 생년월일, 성별 등을 수집하며 서비스 이용 과정에서 기기정보, IP주소 등이 자동 생성될 수 있습니다.
                </Text>
              </Stack>

              <Divider color="white" opacity={0.1} />

              {/* 제8조 */}
              <Stack gap="md">
                <Title order={3} c="white" size="lg">
                  제8조 (개인정보의 안전성 확보 조치)
                </Title>
                <Text c="gray.4" style={{ lineHeight: 1.8 }}>
                  회사는 내부관리계획 수립, 개인정보의 암호화, 해킹 대비 기술적 대책 등 안전성 확보에 필요한 조치를 하고 있습니다.
                </Text>
              </Stack>

              <Divider color="white" opacity={0.1} />

              {/* 제9조 */}
              <Stack gap="md">
                <Title order={3} c="white" size="lg">
                  제9조 (개인정보 자동수집 장치의 설치·운영 및 거부)
                </Title>
                <Text c="gray.4" style={{ lineHeight: 1.8 }}>
                  회사는 이용자의 편의를 위해 '쿠키(cookie)'를 사용하며, 이용자는 브라우저 설정을 통해 이를 거부할 수 있습니다.
                </Text>
              </Stack>

              <Divider color="white" opacity={0.1} />

              {/* 제10조 */}
              <Stack gap="md">
                <Title order={3} c="white" size="lg">
                  제10조 (행태정보의 관리)
                </Title>
                <Text c="gray.4" style={{ lineHeight: 1.8 }}>
                  회사는 서비스 개선 및 분석을 위해 방문 기록 등 행태정보를 수집합니다.
                </Text>
                <Text c="gray.4" style={{ lineHeight: 1.8 }}>
                  피해구제 접수 이메일:{' '}
                  <Anchor href="mailto:majuboda.app@gmail.com" c="violet.4">
                    majuboda.app@gmail.com
                  </Anchor>
                </Text>
              </Stack>

              <Divider color="white" opacity={0.1} />

              {/* 제11조 */}
              <Stack gap="md">
                <Title order={3} c="white" size="lg">
                  제11조 (개인정보 보호 책임자 및 담당 부서)
                </Title>
                <Stack gap="xs" pl="md">
                  <Text c="gray.4" style={{ lineHeight: 1.8 }}>
                    개인정보 보호 책임자: 주식회사 비잇 (
                    <Anchor href="mailto:majuboda.app@gmail.com" c="violet.4">
                      majuboda.app@gmail.com
                    </Anchor>
                    )
                  </Text>
                  <Text c="gray.4" style={{ lineHeight: 1.8 }}>
                    개인정보 열람청구 접수 부서: 운영팀 (
                    <Anchor href="mailto:majuboda.app@gmail.com" c="violet.4">
                      majuboda.app@gmail.com
                    </Anchor>
                    )
                  </Text>
                </Stack>
              </Stack>

              <Divider color="white" opacity={0.1} />

              {/* 제12조 */}
              <Stack gap="md">
                <Title order={3} c="white" size="lg">
                  제12조 (권익침해 구제방법)
                </Title>
                <Text c="gray.4" style={{ lineHeight: 1.8 }}>
                  개인정보 침해 상담은 개인정보분쟁조정위원회, 대검찰청 사이버범죄수사단 등을 통해 하실 수 있습니다.
                </Text>
              </Stack>

              <Divider color="white" opacity={0.1} />

              {/* 제13조 */}
              <Stack gap="md">
                <Title order={3} c="white" size="lg">
                  제13조 (개인정보 처리방침 변경)
                </Title>
                <Text c="gray.4" style={{ lineHeight: 1.8 }}>
                  본 방침은 시행일로부터 적용되며 변경 시 7일 전부터 고지합니다.
                </Text>
              </Stack>

              <Divider color="white" opacity={0.1} />

              {/* 부칙 */}
              <Stack gap="md">
                <Title order={3} c="white" size="lg">
                  부칙
                </Title>
                <Text c="gray.4" style={{ lineHeight: 1.8 }}>
                  본 개인정보처리방침은 2026년 01월 03일부터 적용됩니다.
                </Text>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Container>

      <Footer />
    </Box>
  );
}
