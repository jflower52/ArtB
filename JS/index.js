// SWIPER 초기화
const swiper = new Swiper(".mySwiper", {
  direction: "horizontal",
  loop: true,

  // 반응형 설정
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
  },

  // 자동 재생
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },

  // 페이드 효과
  effect: "fade",
  fadeEffect: {
    crossFade: true,
  },

  // 페이지네이션
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },

  // 네비게이션 버튼
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // 키보드, 마우스휠 제어
  keyboard: {
    enabled: true,
  },

  // 추가 옵션들
  grabCursor: true,
  speed: 800, // 전환 속도(ms)
});

// 스크롤 시 헤더 스타일 변경
const header = document.getElementById("menu");
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    header.style.boxShadow = "0 5px 15px rgba(0, 0, 0, 0.1)";
    header.style.height = "60px";
  } else {
    header.style.boxShadow = "0 2px 10px rgba(0, 0, 0, 0.1)";
    header.style.height = "70px";
  }
});

// 이미지 로딩 최적화
document.addEventListener("DOMContentLoaded", () => {
  const images = document.querySelectorAll("img");

  // 이미지 지연 로딩
  if ("loading" in HTMLImageElement.prototype) {
    images.forEach((img) => {
      if (img.dataset.src) {
        img.src = img.dataset.src;
      }
    });
  } else {
    // Intersection Observer 폴백
    let lazyImageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          let lazyImage = entry.target;
          if (lazyImage.dataset.src) {
            lazyImage.src = lazyImage.dataset.src;
          }
          lazyImageObserver.unobserve(lazyImage);
        }
      });
    });

    images.forEach((img) => {
      if (img.dataset.src) {
        lazyImageObserver.observe(img);
      }
    });
  }

  // 섹션 애니메이션
  const sections = document.querySelectorAll("section");
  const sectionObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("section-visible");
        }
      });
    },
    { threshold: 0.1 }
  );

  sections.forEach((section) => {
    section.classList.add("section-hidden");
    sectionObserver.observe(section);
  });
});

// 더미 데이터 업데이트 함수 (실제 데이터로 대체 필요)
function updateDummyContent() {
  // 웹툰 제목과 작가명 설정
  const swiperSlides = document.querySelectorAll(".swiper-slide");
  const webtoonTitles = ["타이틀 1", "타이틀 2", "타이틀 3", "타이틀 4", "타이틀 5"];
  const webtoonAuthors = ["설명 1", "설명 2", "설명 3", "설명 4", "설명 5"];

  swiperSlides.forEach((slide, index) => {
    const titleElement = slide.querySelector("h3");
    const authorElement = slide.querySelector("p");

    if (titleElement && index < webtoonTitles.length) {
      titleElement.textContent = webtoonTitles[index];
    }

    if (authorElement && index < webtoonAuthors.length) {
      authorElement.textContent = webtoonAuthors[index];
    }
  });

  // 인기 웹툰 데이터 설정
  const popularWebtoons = [
    { title: "인기 웹툰 1", author: "작가 1" },
    { title: "인기 웹툰 2", author: "작가 2" },
    { title: "인기 웹툰 3", author: "작가 3" },
    { title: "인기 웹툰 4", author: "작가 4" },
    { title: "인기 웹툰 5", author: "작가 5" },
  ];

  const popularWebtoonItems = document.querySelectorAll("#popular-webtoon .webtoon-info");
  popularWebtoonItems.forEach((item, index) => {
    if (index < popularWebtoons.length) {
      const titleLink = item.querySelector("a:first-child");
      const authorLink = item.querySelector("a:last-child");

      if (titleLink) titleLink.textContent = popularWebtoons[index].title;
      if (authorLink) authorLink.textContent = popularWebtoons[index].author;
    }
  });

  // 공지사항 데이터 설정
  const notifications = [
    { title: "아트비 서비스 점검 안내", date: "2025.03.20" },
    { title: "3월 인기 작가 이벤트 안내", date: "2025.03.15" },
    { title: "신규 기능 업데이트 소식", date: "2025.03.10" },
    { title: "웹툰 공모전 개최 안내", date: "2025.03.05" },
    { title: "아트비 모바일 앱 출시 안내", date: "2025.03.01" },
  ];

  const notificationItems = document.querySelectorAll(".notification ul li");
  notificationItems.forEach((item, index) => {
    if (index < notifications.length) {
      const titleSpan = item.querySelector("span:first-child");
      const dateSpan = item.querySelector(".date");

      if (titleSpan) titleSpan.textContent = notifications[index].title;
      if (dateSpan) dateSpan.textContent = notifications[index].date;
    }
  });

  // 모바일 앱 설명 업데이트
  const appDescription = document.querySelector(".mobileApp p");
  if (appDescription) {
    appDescription.innerHTML =
      "아트비 모바일 앱으로 <strong>언제 어디서나</strong> 좋아하는 웹툰과 아티스트를 만나보세요. 앱 전용 할인 및 이벤트도 제공됩니다!";
  }
}

// 콘텐츠 업데이트 실행
document.addEventListener("DOMContentLoaded", updateDummyContent);
