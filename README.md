# 🐶React Practice Study

코딩애플 React 강좌 실습 프로젝트입니다. (Part 2)

## 📋실습 내용

- React Bootstrap을 활용한 Navbar 구성
- 이미지 그리드 레이아웃으로 강아지 목록 표시
- Bootstrap 반응형 그리드 시스템 (`col-md-4`) 적용
- 외부 데이터 파일(`data.js`) 분리 및 `useState` 상태 관리
- `Array.map()`을 활용한 동적 렌더링
- 이미지 경로를 `public/img/`로 이동하여 `process.env.PUBLIC_URL` 적용
- `react-router-dom`으로 SPA 라우팅 적용 (`/`, `/about`, `/detail`)
- Navbar 링크를 `as={Link}`로 교체하여 SPA 내부 이동 처리
- `BrowserRouter`에 `basename={process.env.PUBLIC_URL}` 설정으로 GitHub Pages 경로 대응

## 🔍주요 기능

| 기능 | 설명 |
|------|------|
| 네비게이션 바 | React Bootstrap Navbar, 다크 테마, `as={Link}`로 SPA 내부 라우팅 |
| 강아지 목록 | `map()`으로 동적 생성, 3열 그리드로 이미지·이름·나이·매니저 표시 |
| 페이지 라우팅 | `/` 메인, `/about`, `/detail` 경로로 SPA 페이지 분기 |

## 🧩컴포넌트 구조

| 컴포넌트 | 설명 |
|---------|------|
| `App` | 메인 컴포넌트, Navbar + 강아지 목록 렌더링 |
| `ListCard` | 강아지 카드 단위 컴포넌트 (이미지·이름·나이·매니저) |

## ⚙️기술 스택

- React 19
- Create React App
- React Bootstrap 2
- Bootstrap 5
- React Router DOM 6
- JavaScript (JSX)

## 🚀실행 방법

```bash
npm install
npm start
```

## 🌏배포

https://SJ-J.github.io/ReactStudy2

### 배포 방법

```bash
npm run deploy
```

> 코드 수정 후 커밋 & 푸시 완료 후 위 명령어 실행하여 GitHub Pages에 반영
