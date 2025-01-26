# **포카앨범 프로젝트**

## **소개**

- 포카앨범 프로젝트는 사용자가 포토카드 앨범을 정리하고 관리할 수 있도록 돕는 웹 애플리케이션입니다.
- 사용자는 포토카드를 조회, 다운로드, 삭제할 수 있으며, 앨범의 통계를 확인할 수 있습니다.

## **기능**

1. **포토카드 관리**

   - 포토카드 추가: 사용자가 원하는 포토카드를 다운로드하여 홈 화면에서 볼 수 있습니다.
   - 포토카드 삭제: 잘못 추가된 포토카드를 삭제할 수 있습니다.

2. **포토카드 조회**

   - Carousel을 활용하여 다운받은 포토카드를 시각화한 모습으로 볼 수 있습니다.
   - 포토카드를 최신 발매일 순(기본), 앨범 이름 순으로 정렬할 수 있습니다.

3. **데이터 저장 및 유지**

   - 로컬 스토리지를 활용하여 브라우저를 종료해도 기존 데이터를 유지합니다.
   - Zustand persist 함수를 활용하여 로컬 스토리지 데이터를 스토어와 동기화합니다.

## **기술 스택**

- **Frontend:** React, Vite
- **State Management:** Zustand
- **Data Fetching:** @tanstack/react-query
- **Styling:** tailwindcss

## **설치 및 실행**

### **필수 요구사항**

- Node.js 최소 18 버전 이상
- 패키지 매니저: npm, yarn, pnpm 등

### **설치 과정**

1. 프로젝트를 clone 혹은 main branch에서 pull 받습니다.

   ```bash
   git clone [프로젝트 URL]
   ```

2. 프로젝트 폴더로 이동 후 패키지를 설치합니다.

   ```bash
   cd [프로젝트 폴더]
   yarn (or npm install)
   ```

3. Vite 개발 서버를 실행합니다.

   ```bash
   yarn dev (or npm start)
   ```

4. 브라우저에서 `http://localhost:5173`으로 접속합니다. (--host 옵션을 통한 ip 주소를 통한 접속도 지원됩니다.)

## **폴더 구조**

```plaintext
src/
├── assets/           # icon, css 파일
├── components/       # 재사용 가능한 UI 컴포넌트
├── pages/            # 각 페이지 컴포넌트
├── store/            # Zustand를 활용한 상태 관리
├── repository/       # API 객체 생성 & API 호출 부분
└── utils/            # 유틸리티 함수
```

---
