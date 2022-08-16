/* アドレスバー・ツールバーを除いた100vhの高さを取得 */
function setHeight() {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  }
  setHeight();
  window.addEventListener("resize", setHeight);
  
  /* スライダーの設定 */
  const verticalSlider = new Swiper(".vertical-slider", {
    direction: "vertical",
    slidesPerView: 2,
    speed: 600,
    mousewheel: true,
    SimulateTouch: true,
    grabCursor: true,

    
    breakpoints: {
      // when window width is <= 320px
      550: {
        slidesPerView: 1,
      }
    },


    pagination: {
      el: ".vertical-slider__pagination",
      type: "bullets",
      clickable: true,
    },
  });