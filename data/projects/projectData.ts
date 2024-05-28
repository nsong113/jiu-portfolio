import { StaticImageData } from "next/image";
// import todoList from "../../public/images/projects/todolist.png";

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
  serviceUrl: string;
  images: number;
  imageUrl: string;
}

export const projects: Project[] = [
  {
    title: "LLM UI TASK (llm 생산성 툴)",
    intro: "maal_70b엔진을 붙여 만든 on-premise LLM 생산성 툴",
    description:
      "16개의 task를 한글, 영문으로 나뉘어 유저가 사용할 수 있습니다. 편의를 위해 example을 만들어 놓았습니다. - 정기적 유지 보수 진행중",
    points: [
      "socket통신을 사용해 실시간 양방향 통신 구현",
      "반응형 완벽 적용",
      "stream 응답 데이터를 받아와서 렌더링",
      "기여도: 70%",
      "recoil을 사용하여 전역 상태 관리",
      "백엔드 개발자, ai 엔진 개발자, 프롬프트엔지니어, data scientist, 기획자와 협업 경험",
      "Bitbucket과 Jira를 사용해 Gitflow, 커밋 컨벤션, PR 컨벤션 등 협업 가이드 라인을 생성 및 정기적인 스프린트 진행.",
    ],
    startDate: "2024-03-07",
    endDate: "2024-05-26",

    featured: true,
    stacks: ["react", "tailwind", "typescript", "recoil", "socket.io"],
    githubUrl: "",
    docsUrl: "",
    serviceUrl: "https://maum.ai/maum-gpt/llm-task",
    images: 1,
    imageUrl: "llmtaskui",
  },

  {
    title: "호주향 마음ai 홈페이지 런칭",
    intro: "마음ai의 호주 진출을 위한 새로운 홈페이지 런칭",
    description: "호주향 메인 홈페이지 - 정기적 유지 보수 진행중",
    points: [
      "safari, chrome, firefox, edge 등 다양한 브라우저에서 테스트",
      "반응형 완벽 적용",
      "tailwindcss를 사용한 스타일링",
      "vite를 사용한 프로젝트 초기 세팅",
      "디자이너와 디자인 가이드 작성 및 공통 컴포넌트 분리.",
      "영문, 독일어 다국어 지원",
      "사용자의 이메일과 문의 내역을 받으면 관리자에게 메일로 전송되는 기능",
      "기여도: 100%",
    ],
    startDate: "2024-02-15",
    endDate: "2024-02-31",

    featured: true,
    stacks: ["react", "typescript", "tailwind", "vite"],
    githubUrl: "",
    docsUrl: "",
    serviceUrl: "https://anz.maum.ai/",
    images: 1,
    imageUrl: "anz",
  },
  {
    title: "Nine Cloud",
    intro: "gpt 기반 AI 감정 솔루션 그림일기 서비스",
    description:
      "하루의 자신을 되돌아보며 감정 상태를 체크하고 글로 기록하고 그림일기로 나타내면 ai가 감정을 분석하고 해결책을 제시합니다.",
    points: [
      "글 작성 페이지 (슬라이드 바, react-quill)",
      "그림그리기 기능 (canvas)",
      "gpt open api 연결 및 prompt 작성 - 3.5 turbo",
      "커뮤니티 페이지 (infinite-scroll)",
      "모달 (react-portal)",
      "2주간의 유저테스트 진행 및 피드백 반영",
      "코드 최적화: 라이트하우스 기준 34점 -> 98점 상승 ",
      "기여도: 60%",
    ],
    startDate: "2024-02-15",
    endDate: "2024-02-31",

    featured: true,
    stacks: ["react", "typescript", "styledComponents", "recoil"],
    githubUrl: "https://github.com/final-project-hh99/front",
    docsUrl: "",
    serviceUrl: "",
    images: 1,
    imageUrl: "anz",
  },
  //   {
  //     title: "Todo List",
  //     intro: "리엑트 기초 todoList 프로젝트",
  //     description:
  //       "제목과 내용을 입력하고 계획을 추가하면 리스트에 추가되며, 완료 버튼을 누르면 done으로 이동하고 삭제 버튼을 누르면 삭제됩니다.",
  //     points: [
  //       "RTK를 사용한 상태관리",
  //       "기본 퍼블리싱과 삭제 취소 구현",
  //       "header와 footer 컴포넌트 분리",
  //     ],
  //     startDate: "2023-10-29",
  //     endDate: "2023-10-30",
  //     featured: true,
  //     stacks: ["react", "styledComponents", "redux", "vercel"],
  //     githubUrl: "https://github.com/nsong113/todoList",
  //     docsUrl: "",
  //     serviceUrl: "https://todo-list-ver2.vercel.app",
  //     images: 1,
  //     imageUrl: "todoList",
  //   },
];
