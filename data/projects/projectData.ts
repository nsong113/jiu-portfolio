import { StaticImageData } from "next/image";

import llmtaskui from "../../public/images/projects/llmtaskui.png";
import llmtaskuiDetail from "../../public/images/projects/llmtaskuiDetail.png";
import anz from "../../public/images/projects/anz.png";
import nineCloud from "../../public/images/projects/nineCloud.png";
import contactUs from "../../public/images/projects/contactUS.png";
import contactUsEn from "../../public/images/projects/contactUSEn.png";
import onPremiseLLM from "../../public/images/projects/onPremiseLLM.png";
import barricade from "../../public/images/projects/barricade.png";
import maumAI from "../../public/images/projects/maumAI.png";

interface Project {
  title: string;
  intro: string;
  description: string;
  points: string[];
  contribution?: {
    detail?: string[];
    title: string;
  }[];
  troubleShooting?: {
    detail?: string[];
    title: string;
  }[];
  review?: {
    detail?: string[];
    title: string;
  }[];
  startDate: string;
  endDate: string;

  featured: boolean;
  stacks: string[];
  githubUrl: string;
  docsUrl: string;
  serviceUrl?: string;
  images: number;
  imageUrl: StaticImageData;
}

export const projects: Project[] = [
  {
    title: "[마음AI] Contact Us 기능 고도화",
    intro:
      "중복된 문의 폼을 하나로 통합하고 반응형 및 다국어 지원을 강화한 리팩토링 작업",
    description:
      "기존의 Contact Us와 ModalInquiry 컴포넌트 내 반복된 UI 요소를 재사용 가능한 AgreementSection으로 분리하고, 폼 유효성 검증 로직을 통합했습니다.",
    points: [
      "기여도: 100%",
      "Formik + Yup을 활용한 입력 검증 통합",
      "SCSS / Tailwind 기반 모바일 및 데스크탑 모두 고려한 유연한 폼 레이아웃 설계",
      "언어별 문의 유형 대응을 위한 구조 분리 및 추상화",
      "PC/모바일 구분 없이 작동되는 UI 설계",
    ],
    startDate: "2025-04",
    endDate: "2025-04",
    featured: false,
    stacks: ["React", "Formik", "Yup", "SCSS", "Typescript"],
    githubUrl: "",
    docsUrl: "",
    serviceUrl: "https://maum.ai/",
    images: 0,
    imageUrl: contactUs,
  },
  {
    title: "[마음AI] Onpremise-LLM",
    intro: "네트워크 없이 폐쇄망 환경에서도 동작하는 LLM/RAG 기반 생산성 도구",
    description:
      "CES2025에 출품된 RAG 기반 LLM 챗봇과 템플릿 툴을 개발하고, Docker 기반 배포를 통해 실제 데모 환경에서도 서비스가 가능하도록 구현했습니다.",
    points: [
      "기여도: 50%",
      "RAG 기반 챗봇 및 템플릿 기능 UI 개발",
      "챗봇과 사용자 간의 실시간 상호작용 처리 로직 구현",
      "Docker 환경에서의 FE 소스 이미지 빌드 및 배포",
      "mac mini에 탑재해 CES2025 전시",
    ],
    startDate: "2024-10",
    endDate: "진행중",
    featured: true,
    stacks: ["React", "Typescript", "Socket.io", "Docker"],
    githubUrl: "",
    docsUrl: "",
    serviceUrl: "",
    images: 1,
    imageUrl: onPremiseLLM,
  },
  {
    title: "[마음AI] AI 바리케이트",
    intro: "다국어 음성 인식을 통해 공항 내 위치 안내 서비스를 제공하는 시스템",
    description:
      "음성 활동 감지 및 텍스트-음성 동기화 로직을 통해 발화자의 의도와 언어를 분석해 공항 정보를 제공하는 AI 음성 안내 솔루션입니다.",
    points: [
      "기여도: 100%",
      "Voice Activity Detection(VAD) 로직 구현",
      "텍스트-음성 동기화 인터페이스 설계",
      "5개 국어 대응 처리",
      "일본 하네다 공항 전시 경험",
    ],
    startDate: "2024-10",
    endDate: "2024-11",
    featured: false,
    stacks: ["React", "Typescript"],
    githubUrl: "",
    docsUrl: "",
    serviceUrl: "",
    images: 1,
    imageUrl: barricade,
  },
  {
    title: "[마음AI] 홈페이지 유지보수",
    intro: "기업 홈페이지의 접근성 개선 및 기능 추가 작업",
    description:
      "웹 접근성과 SEO를 고려한 개선 작업을 지속하며, LLM Task UI 빌더 리팩토링, 다국어 대응, QA 대응을 진행했습니다.",
    points: [
      "기여도: 70% , 메인 페이지 및 핵심 기능 위주 작업 담당",
      "웹 접근성 점수 96점, SEO 점수 100점 달성",
      "LLM Task UI 리팩토링 및 성능 최적화",
      "글로벌 사용자 대응을 위한 다국어 및 반응형 구조 개선",
      "QA 시트 기반 정기 개선 및 버그 수정",
    ],
    startDate: "2024-02",
    endDate: "진행중",
    featured: true,
    stacks: ["React", "Typescript", "Tailwind", "Recoil", "Socket.io"],
    githubUrl: "",
    docsUrl: "https://nsong113.tistory.com/129",
    serviceUrl: "https://maum.ai/",
    images: 1,
    imageUrl: maumAI,
  },
  {
    title: "[마음AI] LLM UI TASK (LLM 생산성 툴)",
    intro: "maal_70b엔진을 붙여 만든 on-premise LLM 생산성 툴",
    description:
      "16개의 task를 한글, 영문으로 나뉘어 유저가 사용할 수 있습니다. 편의를 위해 example을 만들어 놓았습니다.",
    points: [
      "기여도: 70%",
      "실시간 메시지 송수신을 위한 socket 기반 인터페이스 구축",
      "다양한 해상도에서 최적화된 UI 구현",
      "stream 응답 데이터를 받아와서 렌더링",
      "다양한 task간 상태 공유를 위해 recoil 전역 상태 구조 설계",
      "백엔드 개발자, ai 엔진 개발자, 프롬프트엔지니어, data scientist, 기획자와 협업 경험",
    ],
    startDate: "2024-03",
    endDate: "2024-05",

    featured: true,
    stacks: ["React", "Tailwind", "Typescript", "Recoil", "Socket.io"],
    githubUrl: "",
    docsUrl: "",
    serviceUrl: "",
    images: 1,
    imageUrl: llmtaskui,
  },
  {
    title: "[팀프로젝트] Nine Cloud",
    intro: "gpt 기반 AI 감정 솔루션 그림일기 서비스",
    description:
      "하루의 자신을 되돌아보며 감정 상태를 체크하고 글로 기록하고 그림일기로 나타내면 ai가 감정을 분석하고 해결책을 제시합니다.",
    points: [
      "기여도: 60%",
      "글 작성 페이지 (슬라이드 바, react-quill)",
      "그림그리기 기능 (canvas)",
      "gpt open api 연결 및 prompt 작성 - 3.5 turbo",
      "커뮤니티 페이지 (infinite-scroll)",
      "모달 (react-portal)",
      "2주간의 유저테스트 진행 및 피드백 반영",
      "코드 최적화: 라이트하우스 기준 34점 -> 98점 상승 ",
    ],
    startDate: "2023-12",
    endDate: "2024-02",

    featured: true,
    stacks: ["React", "Typescript", "StyledComponents", "Recoil"],
    githubUrl: "https://github.com/final-project-hh99/front",
    docsUrl: "https://nsong113.tistory.com/77",
    serviceUrl: "",
    images: 1,
    imageUrl: nineCloud,
  },
];
