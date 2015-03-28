var pageContent = document.querySelector(".contentViewport .content");
var pagecopy = pageContent.cloneNode(true);
var blurryContent = document.querySelector(".overlayViewport .content-wrapper");
var blurryContentViewport = document.querySelector(".overlayViewport");
blurryContent.appendChild(pagecopy);
window.onscroll = function() {
  console.log(window.pageYOffset);
  blurryContentViewport.scrollTop = window.pageYOffset;
};
