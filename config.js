/**
 * Wedding Invitation Configuration
 *
 * 이 파일에서 청첩장의 모든 정보를 수정할 수 있습니다.
 * 이미지는 설정이 필요 없습니다. 아래 폴더에 순번 파일명으로 넣으면 자동 감지됩니다.
 *
 * 이미지 폴더 구조 (파일명 규칙):
 *   images/hero/1.jpg      - 메인 사진 (1장, 필수)
 *   images/story/1.jpg, 2.jpg, ...  - 스토리 사진들 (순번, 자동 감지)
 *   images/gallery/1.jpg, 2.jpg, ... - 갤러리 사진들 (순번, 자동 감지)
 *   images/location/1.jpg  - 약도/지도 이미지 (1장)
 *   images/og/1.jpg        - 카카오톡 공유 썸네일 (1장)
 */

const CONFIG = {
  // ── 초대장 열기 ──
  useCurtain: true,  // 초대장 열기 화면 사용 여부 (true: 사용, false: 바로 본문 표시)

  // ── 메인 (히어로) ──
  groom: {
    name: "김덕하",
    nameEn: "Groom",
    father: "김용학",
    mother: "김정애",
    fatherDeceased: false,
    motherDeceased: false
  },

  bride: {
    name: "이유설",
    nameEn: "Bride",
    father: "이현구",
    mother: "박도연",
    fatherDeceased: false,
    motherDeceased: false
  },

  wedding: {
    date: "2026-12-13",
    time: "12:30",
    venue: "브라이드 밸리",
    hall: "단독홀 B1층",
    address: "서울특별시 강남구 강남대로 262",
    tel: "02-2058-0406",
    mapLinks: {
      kakao: "https://kko.to/Z1P06sAnjk",
      naver: "https://naver.me/FDnCdx7B"
    }
  },

  // ── 인사말 ──
  greeting: {
    title: "소중한 분들을 초대합니다",
    content: "서로 다른 길을 걸어온 두 사람이\n이제 같은 길을 함께 걸어가려 합니다.\n\n저희의 새로운 시작을\n축복해 주시면 감사하겠습니다."
  },

  // ── 우리의 이야기 ──
  story: {
    title: "우리의 이야기",
    content: "한 해를 마무리하는 12월\n저희는 사랑이라는 결실로\n새로운 시작을 알립니다.\n\n오셔서 이 특별한 날을 축복해 주신다면\n저희에게 큰 힘과 기쁨이 될 것 입니다.\n\n연말의 설렘과 따뜻한 기억을\n함께 나누고 싶습니다."
  },

  // ── 오시는 길 ──
  // (mapLinks는 wedding 객체 내에 포함)

  // ── 마음 전하실 곳 ──
  accounts: {
    groom: [
      { role: "신랑", name: "김덕하", bank: "신한은행", number: "110-263-290840" },
      { role: "아버지", name: "김용학", bank: "농협은행", number: "000-000-000000" }
    ],
    bride: [
      { role: "신부", name: "이유설", bank: "우리은행", number: "1002-456-610083" },
      { role: "어머니", name: "박도연", bank: "우리은행", number: "1002-601-416632" }
    ]
  },

  // ── 링크 공유 시 나타나는 문구 ──
  meta: {
    title: "김덕하 ♥ 이유설 결혼합니다",
    description: "2026년 12월 13일, 소중한 분들을 초대합니다."
  }
};
