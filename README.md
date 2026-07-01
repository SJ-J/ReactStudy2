# 🐯React Practice Study

코딩애플 React 강좌 실습 프로젝트입니다. (Part 2)

## 📋실습 내용

- React Bootstrap을 활용한 Navbar 구성
- 이미지 그리드 레이아웃으로 선수 목록 표시
- Bootstrap 반응형 그리드 시스템 (`col-md-4`) 적용
- 외부 데이터 파일(`data.js`) 분리 및 `useState` 상태 관리
- `Array.map()`을 활용한 동적 렌더링
- 이미지 경로를 `public/img/`로 이동하여 `process.env.PUBLIC_URL` 적용
- `react-router-dom`으로 SPA 라우팅 적용 (`/`, `/about`, `/event`, `/detail/:id`)
- Navbar 링크를 `as={Link}`로 교체하여 SPA 내부 이동 처리
- `BrowserRouter`에 `basename={process.env.PUBLIC_URL}` 설정으로 GitHub Pages 경로 대응
- `useNavigate` 훅으로 Navbar 메뉴 클릭 시 프로그래밍 방식 이동 처리
- 중첩 라우트(`<Route>` 안에 `<Route>`) + `<Outlet>`으로 서브 페이지 렌더링
- `/about/players` 서브 라우트 구성
- `/event/event1`, `/event/event2` 서브 라우트 구성
- `/detail/:id`로 URL 파라미터 적용, `useParams`로 id 추출해 상세 페이지 구현
- `path='*'`로 404 처리
- 페이지 컴포넌트를 `src/pages/` 디렉토리로 분리
- `ListCard` 이미지 클릭 시 `useNavigate`로 `/detail/:id` 페이지 이동
- `map()` key를 인덱스 대신 데이터 고유 id(`players.id`)로 변경

## 🔍주요 기능

| 기능 | 설명 |
|------|------|
| 네비게이션 바 | React Bootstrap Navbar, 다크 테마, `useNavigate`로 프로그래밍 이동 |
| 선수 목록 | `map()`으로 동적 생성, 3열 그리드로 이미지·이름·번호·포지션 표시 |
| 페이지 라우팅 | `/` 메인, `/about`, `/event`, `/detail/:id` SPA 분기 |
| 중첩 라우트 | About·Event 하위에 서브 라우트, `<Outlet>`으로 렌더링 |
| 상세 페이지 | URL 파라미터(`:id`) + `useParams`로 선택 선수 정보 표시 |
| 404 처리 | `path='*'`로 잘못된 경로 안내 |

## 🧩컴포넌트 구조

| 컴포넌트 | 파일 | 설명 |
|---------|------|------|
| `App` | `App.js` | 메인 컴포넌트, Navbar + Routes 구성 |
| `ListCard` | `App.js` | 선수 카드 단위 컴포넌트, 이미지 클릭 시 상세 페이지로 이동 |
| `About` | `App.js` | About 페이지, `<Outlet>`으로 서브 라우트 렌더링 |
| `Event` | `App.js` | Event 페이지, `<Outlet>`으로 서브 라우트 렌더링 |
| `Detail` | `pages/Detail.jsx` | 선수 상세 페이지, `useParams`로 id 기반 데이터 표시 |
| `Event1` | `pages/Event.jsx` | 이벤트1 서브 컴포넌트 |
| `Event2` | `pages/Event.jsx` | 이벤트2 서브 컴포넌트 |

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
