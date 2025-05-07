// saga common heading
gsap.set('.saga-common span', { width: 0 })
gsap.set('.saga-common-color span', { width: 0 })

gsap.timeline({
    scrollTrigger:{
      trigger: '.saga-common span',
      scrub:0.3,
      start:"top 40%",
      end:"top 20%",
      //markers:true
    }
 })

 gsap.timeline({
  scrollTrigger:{
    trigger: '.saga-common-color span',
    scrub:0.3,
    start:"top 40%",
    end:"top 20%",
    //markers:true
  }
})
.to('.saga-common span', {
  width:'100%', 
  duration:1, ease:'none',
  stagger:1
})
.to('.saga-common-color span', {
  width:'100%', 
  duration:1, ease:'none',
  stagger:1
})



// =====career popup =========

// document.addEventListener("DOMContentLoaded", function () {
//   // Get all elements with class openPopupButton
//   var openPopupButtons = document.querySelectorAll('[class^="openPopupBtn"]');
//   // Add click event listeners to each openPopupButton
//   openPopupButtons.forEach(function (button) {
//       button.addEventListener('click', function () {
//           // Extract the index from the class name
//           var index = button.className.split('_')[1];
//           // Show the corresponding popup
//           var popup = document.getElementById('careerPopup_' + index);
//           if (popup) {
//               popup.style.display = 'block';
//           }
//       });
//   });
//   // Get all elements with class closePopupButton
//   var closePopupButtons = document.querySelectorAll('[class^="closePopupButton"]');
//   // Add click event listeners to each closePopupButton
//   closePopupButtons.forEach(function (button) {
//       button.addEventListener('click', function () {
//           // Extract the index from the class name
//           var index = button.className.split('_')[1];
//           // Hide the corresponding popup
//           var popup = document.getElementById('careerPopup_' + index);
//           if (popup) {
//               popup.style.display = 'none';
//           }
//       });
//   });
// });


// reatiners tabs

// $(document).ready(function () {
//   // Show content of the first tab by default
//   $(".validator-tabs-content").eq(0).show();
//   // Add 'active' class to the first tab
//   $("#rt-tabs li").eq(0).addClass("active");
//   // Show the span within the first tab
//   $("#rt-tabs li").eq(0).find("h6 span").show();
  
//   $("#rt-tabs li").click(function () {
//       var number = $(this).index();
//       $("#rt-tabs li").removeClass("active");
//       $(".validator-tabs-content").hide().eq(number).fadeIn("slow");
//       $("#rt-tabs li").eq(number).addClass("active");
      
//       // Toggle visibility of span within the clicked tab
//       $("#rt-tabs h6 span").hide(); // Hide all spans
//       $(this).find("h6 span").show(); // Show span within the clicked tab
//   });
// });

// // retainers mobile tab

// $(document).ready(function () {
//   // 1st tab
//   $(".validator-tabs-content-mb").eq(0).show();
//   $("#rt-tabs-mb li").eq(0).addClass("active");
//   $("#rt-tabs-mb li").click(function () {
//       var number = $(this).index();
//       $("#rt-tabs-mb li").removeClass("active");
//       $(".validator-tabs-content-mb").hide().eq(number).fadeIn("slow");
//       $("#rt-tabs-mb li").eq(number).addClass("active");
//   });
// });



// document.addEventListener("DOMContentLoaded", function () {
//   document.getElementById('navBtnN').addEventListener('click',()=>{
//     document.querySelector('.navbar_wrapper').classList.toggle('navbar_transform');
//     $('.menuLoaderBar').toggleClass('active deactive');
//     document.querySelector('.page_body').classList.toggle('disableScroll');
//   })
// });

// document.addEventListener("DOMContentLoaded", function () {
//   // Variable to track the current opacity state
//   let isOpacityOne = false;
//   let isFirst = true;

//   document.getElementById('navBtnN').addEventListener('click', () => {
//     document.querySelector('.navbar_wrapper').classList.toggle('navbar_transform');

//     if(!isFirst){
//       if($('.menuLoaderBar').hasClass('deactive')){
//         $('.menuLoaderBar').toggleClass('active').removeClass('deactive');
//       }
//       else{
//         $('.menuLoaderBar').toggleClass('active').addClass('deactive');
//       }
//     }
//     else{
//       $('.menuLoaderBar').toggleClass('active');
//       isFirst = false;
//     }
    
//     // Toggle overflow:hidden on body to prevent scrollinggg
//     document.body.classList.toggle('no-scroll');

//     // Check the current opacity state
//     if (!isOpacityOne) {
//       // If opacity is not 1, set it to 1 after a delay
//       setTimeout(() => {
//         $('.ninja-wrapper-content').css('opacity', '1');
//       }, 1200); // Delay in milliseconds (3 seconds)
//       isOpacityOne = true;
//     } else {
//       // If opacity is already 1, remove opacity
//       $('.ninja-wrapper-content').css('opacity', '');
//       isOpacityOne = false;
//     }
//   });
// });

// document.addEventListener("DOMContentLoaded", function () {
//   // Variable to track the current opacity state
//   let isOpacityOne = false;
//   let isFirst = true;
  
//   document.getElementById('navBtnN').addEventListener('click', () => {
//     //document.querySelector('.wen-menu-closeBtn').style.display = 'block';

//     //document.querySelector('.web-nav').style.display = 'none';
//     document.querySelector('.wen-menu-closeBtn').classList.toggle('web-menu-closeBtn');
//     document.querySelector('.web-nav-cl').classList.toggle('web-nav-toggle');

//     document.querySelector('.navbar_wrapper').classList.toggle('navbar_transform');
//     if(!isFirst){
//       if($('.menuLoaderBar').hasClass('deactive')){
//         $('.menuLoaderBar').toggleClass('active').removeClass('deactive');
//       }
//       else{
//         $('.menuLoaderBar').toggleClass('active').addClass('deactive');
//       }
//     }
//     else{
//       $('.menuLoaderBar').toggleClass('active');
//       isFirst = false;
//     }
    
//     // Toggle overflow:hidden on body to prevent scrolling
//     document.body.classList.toggle('no-scroll');

//     // Check the current opacity state
//     if (!isOpacityOne) {
//       // If opacity is not 1, set it to 1 after a delay
//       setTimeout(() => {
//         $('.ninja-wrapper-content').css('opacity', '1');
//       }, 1200); // Delay in milliseconds (3 seconds)
//       isOpacityOne = true;
//     } else {
//       // If opacity is already 1, remove opacity
//       $('.ninja-wrapper-content').css('opacity', '');
//       isOpacityOne = false;
//     }
//   });
// });




// // ===============tool trade techno ==============
// $(document).ready(function() {
//   $('.stt-list li').click(function() {
//     // Reset active class and opacity for all list items and tool pics
//     $('.stt-list li').removeClass('active');
//     $('.service-tool-pic').css('opacity', '0.1');

//     // Activate the clicked list item
//     $(this).addClass('active');

//     // If the clicked list item is "All", set opacity to 1 for all tool pics
//     if ($(this).hasClass('alls')) {
//       $('.service-tool-pic').css('opacity', '1');
//     } else {
//       // Get the corresponding class and set opacity to 1 for the related tool pics
//       var className = $(this).attr('class').split(' ')[0];
//       $('.service-tool-pic.' + className).css('opacity', '1');
//     }
//   });
// });

// // ===========banner aniomation=========
// document.addEventListener('DOMContentLoaded', function() {
//   var animationSpan = document.querySelector('.nib-h-animation');
//   var texts = ["Shap", "Craft", "Design", "Mold",];
//   var index = 0;

//   function updateText() {
//     var newText = document.createElement('span');
//     newText.textContent = texts[index];
//     animationSpan.innerHTML = '';
//     animationSpan.appendChild(newText);

//     index = (index + 1) % texts.length;
//     setTimeout(updateText, 3000);
//   }

//   // Initial text is "shap"
//   updateText();
// });

// ==========product case study ===========


// document.addEventListener("DOMContentLoaded", function() {
//   var tabs = document.querySelectorAll(".cs_tab");
  
//   function activateTab(tabId) {
//       // Deactivate all tabs
//       tabs.forEach(function(tab) {
//           tab.classList.remove("active");
//       });
      
//       // Activate the specified tab
//       var tab = document.querySelector(".cs_tab[data-id='" + tabId + "']");
//       if (tab) {
//           tab.classList.add("active");
//       }
//   }
  
//   function getOffsetTop(element) {
//       var offsetTop = 0;
//       while (element) {
//           offsetTop += element.offsetTop;
//           element = element.offsetParent;
//       }
//       return offsetTop;
//   }
  
//   window.addEventListener("scroll", function() {
//       var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      
//       tabs.forEach(function(tab) {
//           var tabId = tab.getAttribute("data-id");
//           var targetSection = document.getElementById(tabId);
//           if (targetSection) {
//               var targetOffsetTop = getOffsetTop(targetSection);
//               if (scrollTop >= targetOffsetTop) {
//                   activateTab(tabId);
//               }
//           }
//       });
//   });
// });

// document.addEventListener("DOMContentLoaded", function() {
//   var tabs = document.querySelectorAll(".cs_tab");

//   function activateTab(tabId) {
//       // Deactivate all tabs
//       tabs.forEach(function(tab) {
//           tab.classList.remove("active");
//       });

//       // Activate the specified tab if not in mobile view
//       if (!isMobileView()) {
//           var tab = document.querySelector(".cs_tab[data-id='" + tabId + "']");
//           if (tab) {
//               tab.classList.add("active");
//           }
//       }
//   }

//   function getOffsetTop(element) {
//       var offsetTop = 0;
//       while (element) {
//           offsetTop += element.offsetTop;
//           element = element.offsetParent;
//       }
//       return offsetTop;
//   }

//   function scrollToTarget(targetSection) {
//       var targetOffsetTop = getOffsetTop(targetSection);
//       window.scrollTo({
//           top: targetOffsetTop,
//           behavior: "smooth" // Smooth scrolling animation
//       });
//   }

//   function isMobileView() {
//       return window.innerWidth < 768; // Adjust as needed for your mobile view breakpoint
//   }

//   // Scroll to the target section when a tab is clicked in mobile view
//   tabs.forEach(function(tab) {
//       tab.addEventListener("click", function() {
//           var tabId = this.getAttribute("data-id");
//           var targetSection = document.getElementById(tabId);
//           if (targetSection) {
//               scrollToTarget(targetSection);
//               if (!isMobileView()) {
//                   activateTab(tabId);
//               }
//           }
//       });
//   });

//   window.addEventListener("scroll", function() {
//       var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

//       tabs.forEach(function(tab) {
//           var tabId = tab.getAttribute("data-id");
//           var targetSection = document.getElementById(tabId);
//           if (targetSection) {
//               var targetOffsetTop = getOffsetTop(targetSection);
//               if (scrollTop >= targetOffsetTop) {
//                   activateTab(tabId);
//               }
//           }
//       });
//   });
// });


// navbar
// image dragable

// jQuery(document).ready(function($){
//   var dragging = false,
//       scrolling = false,
//       resizing = false;
//   //cache jQuery objects
//   var imageComparisonContainers = $('.cd-image-container');
//   //check if the .cd-image-container is in the viewport
//   //if yes, animate it
//   checkPosition(imageComparisonContainers);
//   $(window).on('scroll', function(){
//       if( !scrolling) {
//           scrolling =  true;
//           ( !window.requestAnimationFrame )
//               ? setTimeout(function(){checkPosition(imageComparisonContainers);}, 100)
//               : requestAnimationFrame(function(){checkPosition(imageComparisonContainers);});
//       }
//   });
//   //make the .cd-handle element draggable and modify .cd-resize-img width according to its position
//   imageComparisonContainers.each(function(){
//       var actual = $(this);
//       drags(actual.find('.cd-handle'), actual.find('.cd-resize-img'), actual, actual.find('.cd-image-label[data-type="original"]'), actual.find('.cd-image-label[data-type="modified"]'));
//   });
//   //upadate images label visibility
//   $(window).on('resize', function(){
//       if( !resizing) {
//           resizing =  true;
//           ( !window.requestAnimationFrame )
//               ? setTimeout(function(){checkLabel(imageComparisonContainers);}, 100)
//               : requestAnimationFrame(function(){checkLabel(imageComparisonContainers);});
//       }
//   });
//   function checkPosition(container) {
//       container.each(function(){
//           var actualContainer = $(this);
//           if( $(window).scrollTop() + $(window).height()*0.5 > actualContainer.offset().top) {
//               actualContainer.addClass('is-visible');
//           }
//       });
//       scrolling = false;
//   }
//   function checkLabel(container) {
//       container.each(function(){
//           var actual = $(this);
//           updateLabel(actual.find('.cd-image-label[data-type="modified"]'), actual.find('.cd-resize-img'), 'left');
//           updateLabel(actual.find('.cd-image-label[data-type="original"]'), actual.find('.cd-resize-img'), 'right');
//       });
//       resizing = false;
//   }
//   //draggable funtionality - credits to http://css-tricks.com/snippets/jquery/draggable-without-jquery-ui/
//   function drags(dragElement, resizeElement, container, labelContainer, labelResizeElement) {
//       dragElement.on("mousedown vmousedown", function(e) {
//           dragElement.addClass('draggable');
//           resizeElement.addClass('resizable');
//           var dragWidth = dragElement.outerWidth(),
//               xPosition = dragElement.offset().left + dragWidth - e.pageX,
//               containerOffset = container.offset().left,
//               containerWidth = container.outerWidth(),
//               minLeft = containerOffset + 10,
//               maxLeft = containerOffset + containerWidth - dragWidth - 10;
//           dragElement.parents().on("mousemove vmousemove", function(e) {
//               if( !dragging) {
//                   dragging =  true;
//                   ( !window.requestAnimationFrame )
//                       ? setTimeout(function(){animateDraggedHandle(e, xPosition, dragWidth, minLeft, maxLeft, containerOffset, containerWidth, resizeElement, labelContainer, labelResizeElement);}, 100)
//                       : requestAnimationFrame(function(){animateDraggedHandle(e, xPosition, dragWidth, minLeft, maxLeft, containerOffset, containerWidth, resizeElement, labelContainer, labelResizeElement);});
//               }
//           }).on("mouseup vmouseup", function(e){
//               dragElement.removeClass('draggable');
//               resizeElement.removeClass('resizable');
//           });
//           e.preventDefault();
//       }).on("mouseup vmouseup", function(e) {
//           dragElement.removeClass('draggable');
//           resizeElement.removeClass('resizable');
//       });
//   }
//   function animateDraggedHandle(e, xPosition, dragWidth, minLeft, maxLeft, containerOffset, containerWidth, resizeElement, labelContainer, labelResizeElement) {
//       var leftValue = e.pageX + xPosition - dragWidth;
//       //constrain the draggable element to move inside his container
//       if(leftValue < minLeft ) {
//           leftValue = minLeft;
//       } else if ( leftValue > maxLeft) {
//           leftValue = maxLeft;
//       }
//       var widthValue = (leftValue + dragWidth/2 - containerOffset)*100/containerWidth+'%';
//       $('.draggable').css('left', widthValue).on("mouseup vmouseup", function() {
//           $(this).removeClass('draggable');
//           resizeElement.removeClass('resizable');
//       });
//       $('.resizable').css('width', widthValue);
//       updateLabel(labelResizeElement, resizeElement, 'left');
//       updateLabel(labelContainer, resizeElement, 'right');
//       dragging =  false;
//   }
//   function updateLabel(label, resizeElement, position) {
//       if(position == 'left') {
//           ( label.offset().left + label.outerWidth() < resizeElement.offset().left + resizeElement.outerWidth() ) ? label.removeClass('is-hidden') : label.addClass('is-hidden') ;
//       } else {
//           ( label.offset().left > resizeElement.offset().left + resizeElement.outerWidth() ) ? label.removeClass('is-hidden') : label.addClass('is-hidden') ;
//       }
//   }
// });




// jQuery(document).ready(function($) {
//     var dragging = false,
//       scrolling = false,
//       resizing = false;
//     //cache jQuery objects
//     var imageComparisonContainers = $('.cd-image-container');
//     //check if the .cd-image-container is in the viewport
//     //if yes, animate it
//     checkPosition(imageComparisonContainers);
//     $(window).on('scroll', function() {
//       if (!scrolling) {
//         scrolling = true;
//         (!window.requestAnimationFrame) ?
//         setTimeout(function() {
//           checkPosition(imageComparisonContainers);
//         }, 100):
//           requestAnimationFrame(function() {
//             checkPosition(imageComparisonContainers);
//           });
//       }
//     });
//     //make the .cd-handle element draggable and modify .cd-resize-img width according to its position
//     imageComparisonContainers.each(function() {
//       var actual = $(this);
//       drags(actual.find('.cd-handle'), actual.find('.cd-resize-img , .cd-resize-img-mobile-1'), actual, actual.find('.cd-image-label[data-type="original"]'), actual.find('.cd-image-label[data-type="modified"]'));
//     });
//     //upadate images label visibility
//     $(window).on('resize', function() {
//       if (!resizing) {
//         resizing = true;
//         (!window.requestAnimationFrame) ?
//         setTimeout(function() {
//           checkLabel(imageComparisonContainers);
//         }, 100):
//           requestAnimationFrame(function() {
//             checkLabel(imageComparisonContainers);
//           });
//       }
//     });
  
//     function checkPosition(container) {
//       container.each(function() {
//         var actualContainer = $(this);
//         if ($(window).scrollTop() + $(window).height() * 0.5 > actualContainer.offset().top) {
//           actualContainer.addClass('is-visible');
//         }
//       });
//       scrolling = false;
//     }
  
//     function checkLabel(container) {
//       container.each(function() {
//         var actual = $(this);
//         updateLabel(actual.find('.cd-image-label[data-type="modified"]'), actual.find('.cd-resize-img , .cd-resize-img-mobile-1'), 'left');
//         updateLabel(actual.find('.cd-image-label[data-type="original"]'), actual.find('.cd-resize-img ,cd-resize-img-mobile-1'), 'right');
//       });
//       resizing = false;
//     }
  
//     //draggable functionality
//     function drags(dragElement, resizeElement, container, labelContainer, labelResizeElement) {
//       dragElement.on("mousedown vmousedown touchstart", function(e) {
//         e.preventDefault(); // Prevent default browser behavior for touch events
//         dragElement.addClass('draggable');
//         resizeElement.addClass('resizable');
//         var dragWidth = dragElement.outerWidth(),
//           xPosition = dragElement.offset().left + dragWidth - (e.pageX || e.originalEvent.touches[0].pageX),
//           containerOffset = container.offset().left,
//           containerWidth = container.outerWidth(),
//           minLeft = containerOffset + 10,
//           maxLeft = containerOffset + containerWidth - dragWidth - 10;
  
//         $(document).on("mousemove vmousemove touchmove", function(e) {
//           if (!dragging) {
//             dragging = true;
//             (!window.requestAnimationFrame) ?
//             setTimeout(function() {
//               animateDraggedHandle(e, xPosition, dragWidth, minLeft, maxLeft, containerOffset, containerWidth, resizeElement, labelContainer, labelResizeElement);
//             }, 100):
//               requestAnimationFrame(function() {
//                 animateDraggedHandle(e, xPosition, dragWidth, minLeft, maxLeft, containerOffset, containerWidth, resizeElement, labelContainer, labelResizeElement);
//               });
//           }
//         }).on("mouseup vmouseup touchend", function() {
//           dragElement.removeClass('draggable');
//           resizeElement.removeClass('resizable');
//         });
//       }).on("mouseup vmouseup touchend", function() {
//         dragElement.removeClass('draggable');
//         resizeElement.removeClass('resizable');
//       });
//     }
  
//     function animateDraggedHandle(e, xPosition, dragWidth, minLeft, maxLeft, containerOffset, containerWidth, resizeElement, labelContainer, labelResizeElement) {
//       var leftValue = (e.pageX || e.originalEvent.touches[0].pageX) + xPosition - dragWidth;
//       //constrain the draggable element to move inside his container
//       if (leftValue < minLeft) {
//         leftValue = minLeft;
//       } else if (leftValue > maxLeft) {
//         leftValue = maxLeft;
//       }
//       var widthValue = (leftValue + dragWidth / 2 - containerOffset) * 100 / containerWidth + '%';
//       $('.draggable').css('left', widthValue).on("mouseup vmouseup touchend", function() {
//         $(this).removeClass('draggable');
//         resizeElement.removeClass('resizable');
//       });
//       $('.resizable').css('width', widthValue);
//       updateLabel(labelResizeElement, resizeElement, 'left');
//       updateLabel(labelContainer, resizeElement, 'right');
//       dragging = false;
//     }
  
//     function updateLabel(label, resizeElement, position) {
//       if (position == 'left') {
//         (label.offset().left + label.outerWidth() < resizeElement.offset().left + resizeElement.outerWidth()) ? label.removeClass('is-hidden'): label.addClass('is-hidden');
//       } else {
//         (label.offset().left > resizeElement.offset().left + resizeElement.outerWidth()) ? label.removeClass('is-hidden'): label.addClass('is-hidden');
//       }
//     }
//   });
  











// // mobile


// $("#slider").on("input change", (e)=>{
//     const sliderPos = e.target.value;
 
//     $('.foreground-img').css('width', `${sliderPos}%`)

//     $('.slider-button').css('left', `calc(${sliderPos}% - 18px)`)
//   });


// sites

// (function(){
//   init();

//   var g_containerInViewport;
//   function init(){
//       setStickyContainersSize();
//       bindEvents();
//   }

//   function bindEvents(){
//       window.addEventListener("wheel", wheelHandler);        
//   }

//   function setStickyContainersSize(){
//       document.querySelectorAll('.sticky-container').forEach(function(container){
//           const stikyContainerHeight = container.querySelector('.sites').scrollWidth;
//           container.setAttribute('style', 'height: ' + stikyContainerHeight + 'px');
//       });
//   }

//   function isElementInViewport (el) {
//       const rect = el.getBoundingClientRect();
//       return rect.top <= 0 && rect.bottom > document.documentElement.clientHeight;
//   }

//   function wheelHandler(evt){
      
//       const containerInViewPort = Array.from(document.querySelectorAll('.sticky-container')).filter(function(container){
//           return isElementInViewport(container);
//       })[0];

//       if(!containerInViewPort){
//           return;
//       }

//       var isPlaceHolderBelowTop = containerInViewPort.offsetTop < document.documentElement.scrollTop;
//       var isPlaceHolderBelowBottom = containerInViewPort.offsetTop + containerInViewPort.offsetHeight > document.documentElement.scrollTop;
//       let g_canScrollHorizontally = isPlaceHolderBelowTop && isPlaceHolderBelowBottom;

//       if(g_canScrollHorizontally){
//           containerInViewPort.querySelector('.sites').scrollLeft += evt.deltaY;
//       }
//   }
// })();



// (function(){
//   init();

//   var g_containerInViewport;
//   var touchStartY; // Variable to store initial touch position
//   var lastScrollTop = 0; // Variable to store the last scroll position

//   function init(){
//       setStickyContainersSize();
//       bindEvents();
//   }

//   function bindEvents(){
//       window.addEventListener("wheel", wheelHandler);
//       window.addEventListener("touchstart", touchStartHandler); // Listen for touchstart event
//       window.addEventListener("touchmove", touchMoveHandler); // Listen for touchmove event
//   }

//   function setStickyContainersSize(){
//       document.querySelectorAll('.sticky-container').forEach(function(container){
//           const stikyContainerHeight = container.querySelector('.sites').scrollWidth;
//           container.setAttribute('style', 'height: ' + stikyContainerHeight + 'px');
//       });
//   }

//   function isElementInViewport (el) {
//       const rect = el.getBoundingClientRect();
//       return rect.top <= 0 && rect.bottom > document.documentElement.clientHeight;
//   }

//   function wheelHandler(evt){
      
//       const containerInViewPort = Array.from(document.querySelectorAll('.sticky-container')).filter(function(container){
//           return isElementInViewport(container);
//       })[0];

//       if(!containerInViewPort){
//           return;
//       }

//       var isPlaceHolderBelowTop = containerInViewPort.offsetTop < document.documentElement.scrollTop;
//       var isPlaceHolderBelowBottom = containerInViewPort.offsetTop + containerInViewPort.offsetHeight > document.documentElement.scrollTop;
//       let g_canScrollHorizontally = isPlaceHolderBelowTop && isPlaceHolderBelowBottom;

//       if(g_canScrollHorizontally){
//           containerInViewPort.querySelector('.sites').scrollLeft += evt.deltaY;
//       }
//   }

//   // Touch start event handler
//   function touchStartHandler(evt){
//       touchStartY = evt.touches[0].clientY; // Store initial touch position
//       lastScrollTop = document.documentElement.scrollTop || document.body.scrollTop;
//   }

//   // Touch move event handler
//   function touchMoveHandler(evt){
//       const containerInViewPort = Array.from(document.querySelectorAll('.sticky-container')).filter(function(container){
//           return isElementInViewport(container);
//       })[0];

//       if(!containerInViewPort){
//           return;
//       }

//       var isPlaceHolderBelowTop = containerInViewPort.offsetTop < document.documentElement.scrollTop;
//       var isPlaceHolderBelowBottom = containerInViewPort.offsetTop + containerInViewPort.offsetHeight > document.documentElement.scrollTop;
//       let g_canScrollHorizontally = isPlaceHolderBelowTop && isPlaceHolderBelowBottom;

//       // Calculate the difference in touch positions
//       const deltaY = evt.touches[0].clientY - touchStartY;
//       const currentScrollTop = document.documentElement.scrollTop || document.body.scrollTop;

//       if (!g_canScrollHorizontally && Math.abs(deltaY) > 10) {
//           // If the movement is predominantly vertical and not horizontal scrolling is allowed
//           evt.preventDefault(); // Prevent the default vertical scrolling behavior
//           window.scrollTo(0, lastScrollTop - deltaY); // Scroll the window vertically
//       } else if(g_canScrollHorizontally) {
//           // If horizontal scrolling is allowed
//           // Adjust the scrolling amount based on touch movement
//           containerInViewPort.querySelector('.sites').scrollLeft -= (evt.touches[0].clientY - touchStartY) * 2; // Multiply by 2 for faster scroll speed
//       }
      
//       // Update touchStartY for next iteration
//       touchStartY = evt.touches[0].clientY;
//       lastScrollTop = currentScrollTop;
//   }
// })();




// $('.reveiw-carousel').owlCarousel({
//    margin: 0,
//    loop: true,
//    nav: false,
//    dots: false,
//    autoWidth: true,
//    responsive: {
//      0: {
//        items: 2,
//        autoWidth: true
//      },
//      600: {
//        items: 2,
//        autoWidth: false
//      }
//    }
// });

// //  about crousel

// $('.stratgies-reveiw-carousel').owlCarousel({
//   margin: 30,
//   loop: true,
//   nav: false,
//   dots: false,
//   responsive: {
//     0: {
//       items: 1,
//     }
//   }
// });


// $('.ninja-crd-carousel').owlCarousel({
//   margin: 20,
//   loop: true,
//   nav: false,
//   dots: false,
//   autoWidth: true,
//   responsive: {
//     0: {
//       items: 2,
//       autoWidth: true
//     },
//     600: {
//       items: 3,
//       autoWidth: false
//     },
//     1000:{
//       items:4
//     }
//   }
// });


// // marquee

// // video tab

// $(document).ready(function () {
//     $(".tabs-content").eq(0).show();
//     $("#tabs li").eq(0).addClass("active");
//     $("#tabs li").click(function () {
//         var number = $(this).index();
//         $("#tabs li").removeClass("active");
//         $(".tabs-content").hide().eq(number).fadeIn("slow");
//         $("#tabs li").eq(number).addClass("active");
//     });
// });




            
// // video player
// function videoPlay($wrapper) {
//     var $iframe = $wrapper.find(".js-videoIframe");
//     var src = $iframe.data("src");
//     $wrapper.addClass("videoWrapperActive");
//     $iframe.attr("src", src);
//     $(".home-video-close").removeClass("is-hidden");
//  }
 
//  function videoStop($wrapper) {
//     if (!$wrapper) {
//        var $wrapper = $(".js-videoWrapper");
//        var $iframe = $(".js-videoIframe");
//     } else {
//        var $iframe = $wrapper.find(".js-videoIframe");
//     }
//     $wrapper.removeClass("videoWrapperActive");d
//     $iframe.attr("src", "");
//     $(".home-video-close").addClass("is-hidden");
//  }
 
//  function touchVideo() {
//     var isVisible = $("#js-pointer-detector").is(":visible");

//     if (isVisible === true) {

//        $(".videoWrapper").addClass("videoWrapperActive");
   
//        var source = $(".js-videoIframe").data("src");
   
//        $(".js-videoIframe").attr("src", source);
//     } else {
//     }
//  }
 

//  $(document).on("click", ".js-videoPoster", function(ev) {
//     ev.preventDefault();
//     var $poster = $(this);
//     var $wrapper = $poster.closest(".js-videoWrapper");
//     videoPlay($wrapper);
//  });
 
//  $(document).ready(function() {
//     touchVideo();
//  });
 

// //  =============autoplay video===============
// // document.querySelector("#volume-switcher").onchange = function() {
// //   document.querySelector("#theplayer").muted = !this.checked;
// // }  

// // ==========back to top ============
// // Wait for the document to be ready
// document.addEventListener("DOMContentLoaded", function() {
//   // Get the button element
//   var backToTopBtn = document.getElementById("back-to-top-btn");

//   // Show or hide the button based on the user's scroll position
//   window.addEventListener("scroll", function() {
//       if (window.pageYOffset > 100) {
//           backToTopBtn.style.display = "block";
//       } else {
//           backToTopBtn.style.display = "none";
//       }
//   });

//   // Scroll to the top when the button is clicked
//   backToTopBtn.addEventListener("click", function() {
//       window.scrollTo({
//           top: 0,
//           behavior: "smooth"
//       });
//   });
// });



// // project listing page load more load less

// function expandListings() {
//   document.querySelector('.all_listings').style.height = '100%';
//   document.getElementById('loadMoreBtn').style.display = 'none';
//   document.getElementById('showLessBtn').style.display = 'block';
// }

// function collapseListings() {
//   document.querySelector('.all_listings').style.height = '2700px'; // Default height
//   document.getElementById('loadMoreBtn').style.display = 'block';
//   document.getElementById('showLessBtn').style.display = 'none';
// }

// // retainers mobile 

// // 1 section
// // 1
// function expandretainers(){
//   document.querySelector('.nrft-btn').style.height = '100%';
//   document.getElementById('loadMoreBtn').style.display = 'none';
//   document.getElementById('showLessBtn').style.display = 'block';
// }

// function collapseretainers(){
//   document.querySelector('.nrft-btn').style.height = '250px';
//   document.getElementById('loadMoreBtn').style.display = 'block';
//   document.getElementById('showLessBtn').style.display = 'none';
// }
// // 2
// function expandretainers1(){
//   document.querySelector('.nrft-btn1').style.height = '100%';
//   document.getElementById('loadMoreBtn1').style.display = 'none';
//   document.getElementById('showLessBtn1').style.display = 'block';
// }

// function collapseretainers1(){
//   document.querySelector('.nrft-btn1').style.height = '250px';
//   document.getElementById('loadMoreBtn1').style.display = 'block';
//   document.getElementById('showLessBtn1').style.display = 'none';
// }
// // 3
// function expandretainers2(){
//   document.querySelector('.nrft-btn2').style.height = '100%';
//   document.getElementById('loadMoreBtn2').style.display = 'none';
//   document.getElementById('showLessBtn2').style.display = 'block';
// }

// function collapseretainers2(){
//   document.querySelector('.nrft-btn2').style.height = '250px';
//   document.getElementById('loadMoreBtn2').style.display = 'block';
//   document.getElementById('showLessBtn2').style.display = 'none';
// }

// // 2 section
// // 1
// function expandretainers11(){
//   document.querySelector('.nrft-btn11').style.height = '100%';
//   document.getElementById('loadMoreBtn11').style.display = 'none';
//   document.getElementById('showLessBtn11').style.display = 'block';
// }

// function collapseretainers11(){
//   document.querySelector('.nrft-btn11').style.height = '250px';
//   document.getElementById('loadMoreBtn11').style.display = 'block';
//   document.getElementById('showLessBtn11').style.display = 'none';
// }
// // 2
// function expandretainers22(){
//   document.querySelector('.nrft-btn22').style.height = '100%';
//   document.getElementById('loadMoreBtn22').style.display = 'none';
//   document.getElementById('showLessBtn22').style.display = 'block';
// }

// function collapseretainers22(){
//   document.querySelector('.nrft-btn22').style.height = '250px';
//   document.getElementById('loadMoreBtn22').style.display = 'block';
//   document.getElementById('showLessBtn22').style.display = 'none';
// }
// // 3
// function expandretainers33(){
//   document.querySelector('.nrft-btn33').style.height = '100%';
//   document.getElementById('loadMoreBtn33').style.display = 'none';
//   document.getElementById('showLessBtn33').style.display = 'block';
// }

// function collapseretainers33(){
//   document.querySelector('.nrft-btn33').style.height = '250px';
//   document.getElementById('loadMoreBtn33').style.display = 'block';
//   document.getElementById('showLessBtn33').style.display = 'none';
// }

// // 3 section
// // 1
// function expandretainers111(){
//   document.querySelector('.nrft-btn111').style.height = '100%';
//   document.getElementById('loadMoreBtn111').style.display = 'none';
//   document.getElementById('showLessBtn111').style.display = 'block';
// }

// function collapseretainers111(){
//   document.querySelector('.nrft-btn111').style.height = '250px';
//   document.getElementById('loadMoreBtn111').style.display = 'block';
//   document.getElementById('showLessBtn111').style.display = 'none';
// }
// // 2
// function expandretainers222(){
//   document.querySelector('.nrft-btn222').style.height = '100%';
//   document.getElementById('loadMoreBtn222').style.display = 'none';
//   document.getElementById('showLessBtn222').style.display = 'block';
// }

// function collapseretainers222(){
//   document.querySelector('.nrft-btn222').style.height = '250px';
//   document.getElementById('loadMoreBtn222').style.display = 'block';
//   document.getElementById('showLessBtn222').style.display = 'none';
// }
// // 3
// function expandretainers333(){
//   document.querySelector('.nrft-btn333').style.height = '100%';
//   document.getElementById('loadMoreBtn333').style.display = 'none';
//   document.getElementById('showLessBtn333').style.display = 'block';
// }

// function collapseretainers333(){
//   document.querySelector('.nrft-btn333').style.height = '250px';
//   document.getElementById('loadMoreBtn333').style.display = 'block';
//   document.getElementById('showLessBtn333').style.display = 'none';
// }






// // retainers mobile end

// // =========work-emp-crous==========

// var owl = $('.testimonial-carousel');
//  owl.owlCarousel({
//    margin: 60,
//    loop: true,
//    nav: false,
//    dots: false,
//    responsive: {
//   0:{
//     items: 1,
//     autoWidth: true,
//   },
//      600: {
//        items: 1,
//        autoWidth: true,
//        center: true
//      },
//      1000: {
//        items: 2,
//        autoWidth: true,
//        center: true
//      }
//    }
// })


// saga common heading
gsap.set('.saga-common span', { width: 0 })
gsap.set('.saga-common-color span', { width: 0 })

gsap.timeline({
    scrollTrigger:{
      trigger: '.saga-common span',
      scrub:0.3,
      start:"top 40%",
      end:"top 20%",
      //markers:true
    }
 })

 gsap.timeline({
  scrollTrigger:{
    trigger: '.saga-common-color span',
    scrub:0.3,
    start:"top 40%",
    end:"top 20%",
    //markers:true
  }
})
.to('.saga-common span', {
  width:'100%', 
  duration:1, ease:'none',
  stagger:1
})
.to('.saga-common-color span', {
  width:'100%', 
  duration:1, ease:'none',
  stagger:1
})




// // 4 section home page animation
// document.addEventListener("DOMContentLoaded", function() {
//   const textHolders = document.querySelectorAll(".text-holder");
//   const imageHolders = document.querySelectorAll(".image-holder");

//   function revealImages() {
//     textHolders.forEach((textHolder, index) => {
//       const textHolderRect = textHolder.getBoundingClientRect();
//       const windowHeight = window.innerHeight;
//       const threshold = windowHeight * 0.5; // Adjust threshold as needed

//       if (textHolderRect.top < threshold && textHolderRect.bottom > threshold) {
//         imageHolders.forEach((imageHolder, idx) => {
//           if (idx === index) {
//             imageHolder.classList.add("visible");
//           } else {
//             imageHolder.classList.remove("visible");
//           }
//         });
//       }
//     });
//   }

//   window.addEventListener("scroll", revealImages);
//   window.addEventListener("resize", revealImages);
//   revealImages(); // Call once initially to handle initial state
  
// });


// // beafore after img

// const handle = document.querySelector(".cd-handle");

//   handle.addEventListener("mousedown", function(event) {
//     const startX = event.clientX;

//     function handleMouseMove(event) {
//       const deltaX = event.clientX - startX;

//       if (deltaX < 0) {
//         handle.classList.remove("right");
//         handle.classList.add("left");
//       } else {
//         handle.classList.remove("left");
//         handle.classList.add("right");
//       }
//     }

//     function handleMouseUp() {
//       document.removeEventListener("mousemove", handleMouseMove);
//       document.removeEventListener("mouseup", handleMouseUp);
//     }

//     document.addEventListener("mousemove", handleMouseMove);
//     document.addEventListener("mouseup", handleMouseUp);
//   });



// var pagePositon = 0,
//   sectionsSeclector = ".section-rd",
//   $scrollItems = $(sectionsSeclector),
//   offsetTolorence = 30,
//   pageMaxPosition = $scrollItems.length - 1;

// $scrollItems.each(function (index, ele) {
//   $(ele).attr("debog", index).data("pos", index);
// });

// $(window).bind("scroll", upPos);

// window.addEventListener("wheel", function (event) {
//   if (event.deltaY < 0) {
//     if (pagePositon - 1 >= 0) {
//       pagePositon--;
//       $("html, body")
//         .stop()
//         .animate(
//           {
//             scrollTop: $scrollItems.eq(pagePositon).offset().top
//           },
//           500
//         );
//       return false;
//     }
//   } else if (event.deltaY > 0) {
//     if (pagePositon + 1 <= pageMaxPosition) {
//       pagePositon++;
//       $("html, body")
//         .stop()
//         .animate(
//           {
//             scrollTop: $scrollItems.eq(pagePositon).offset().top
//           },
//           500
//         );
//     }
//   }
// })

// function upPos() {
//   var fromTop = $(this).scrollTop();
//   var $cur = null;
//   $scrollItems.each(function (index, ele) {
//     if ($(ele).offset().top < fromTop + offsetTolorence) $cur = $(ele);
//   });
//   if ($cur != null && pagePositon != $cur.data("pos")) {
//     pagePositon = $cur.data("pos");
//   }
// }



// ==============form============

// function highlightItem(event) {
//   const listItem = event.target;
//   if (listItem.tagName === 'LI') {
//       listItem.classList.toggle('selected');
//   }
// }


// function highlightItem(event) {
//   const listItem = event.target;
//   if (listItem.tagName === 'LI') {
//       listItem.classList.toggle('selected');
//       const labels = document.querySelectorAll('.required');
//       labels.forEach(label => {
//           label.innerHTML = label.innerText.includes('*') ? label.innerText.slice(0, -2) : label.innerText + ' *';
//       });
//   }
// }


// ==========listing nakul==========


// document.addEventListener("DOMContentLoaded", function () {

// });

// var current_page = window.location.pathname.split(".").shift();
// if(current_page == '/project-listing'){
// let tabsMenu = $('#tabsMenu');
// var topOffset = tabsMenu.offset().top;

// let tabsOffset = tabsMenu.offset().top;
// let challengeTab = $('#challengeTab');
// let challengeBtn = document.querySelector('[data-id="challengeTab"]');
// let overviewBtn = document.querySelector('[data-id="overviewTab"]');

// let solutionTab = $('#solutionTab');
// let solutionBtn = document.querySelector('[data-id="solutionTab"]');

// let outcomeTab = $('#outcomeTab');
// let outcomeBtn = document.querySelector('[data-id="outcomeTab"]');

// $(window).scroll(function() {
//     var window_top = $(window).scrollTop() + 80;

//     if (window_top > tabsOffset && window_top < outcomeTab.offset().top) {
//         if (!$('#tabsMenu').is('.stickyCS')) {
//             $('#tabsMenu').addClass('stickyCS');
//         }
//     }
//     else if(window_top > outcomeTab.offset().top + 200) {
//         let translateYValue = - window_top + 3820;
//         $('#tabsMenu').removeClass('stickyCS');
//         // $('.stickyCS').css('transform', 'translateY(' + translateYValue + 'px)');

//     }
//     else{
//         $('#tabsMenu').removeClass('stickyCS');
//     }
//     if(window_top+500 > challengeTab.offset().top && window_top < 2400){
//         tabsMenu.children().removeClass('active');
//         challengeBtn.classList.add('active');
//         // console.log("challenge:" + window_top, challengeTab.offset().top, challengeTab.outerHeight());
//     }
//     else if(window_top+500 > solutionTab.offset().top && window_top < 3250){
//         tabsMenu.children().removeClass('active');
//         solutionBtn.classList.add('active');
//         // console.log("solution:" + window_top, solutionTab.offset().top, solutionTab.outerHeight());
//     }
//     else if(window_top+1500 > outcomeTab.offset().top && window_top < 4250){
//         tabsMenu.children().removeClass('active');
//         outcomeBtn.classList.add('active');
//         // console.log("outcome:" + window_top, outcomeTab.offset().top, outcomeTab.outerHeight());
//     }
//     else{
//         tabsMenu.children().removeClass('active');
//         overviewBtn.classList.add('active');
//     }
// });



// mouse wheel service

// var container = document.getElementById('scroll-container');

// container.addEventListener('wheel', function (e) {
//   // Check if the shift key is pressed to scroll horizontally
//   if (e.shiftKey) {
//     // Adjust the scrollLeft property for horizontal scrolling
//     container.scrollLeft += e.deltaY;
    
//     // Prevent the default vertical scrolling behavior
//     e.preventDefault();
//   }
// });


// }





// service ===========

// function toggleForm() {
//   var form = document.getElementById('service-form');
//   form.style.height = form.clientHeight === 0 ? '100%' : '0';
// }







// // =============== worm movement diagonaly========
// const ninjaL = document.querySelector('.ninja-n');
// const ninjaLImg = document.querySelector('.ninja-o-img');
// let offsetX = 0;
// let offsetY = 0;

// document.addEventListener('mousemove', (event) => {
//     const { clientX, clientY } = event;
//     const { left, top, width, height } = ninjaL.getBoundingClientRect();
//     const maxX = width - ninjaLImg.clientWidth;
//     const maxY = height - ninjaLImg.clientHeight;

//     offsetX = Math.max(0, Math.min(clientX - left, maxX));
//     offsetX = Math.min(0, Math.max(clientX - width, maxX));
//     offsetY = Math.max(0, Math.min(clientY - top, maxY));

//     updatePosition();
// });

// document.addEventListener('mouseleave', () => {
//     offsetX = 0;
//     offsetY = 0;
//     updatePosition();
// });

// function updatePosition() {
//     ninjaLImg.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
// }

// // =============
// let animate = gsap.timeline();

// animate.from('.ninja-b-img svg', {
//   y: -500,
//   duration: 0.3,
// });
// // animate.from('.ninja-b',{
// //   y:-500,
// //   duration:0.2,
// //   opacity:0,
// // })

// animate.from('.ninja-c', {
//   duration:0.2,
//   opacity:0,
// });
// animate.from('.ninja-d', {
//   duration:0.2,
//   opacity:0,
// });
// animate.from('.ninja-f', {
//   duration:0.2,
//   opacity:0,
// });

// animate.from('.ninja-g',{
//   // x:500,
//   duration:0.2,
//   opacity:0,
// })

// animate.from('.ninja-h',{
//   y:500,
//   duration:0.4,
//   opacity:0,
// })
// animate.from('.ninja-h',{
//   y:-5,
//   duration:1,
// })

// animate.from('.ninja-k',{
//   duration:0.2,
//   opacity:0,
// })
// animate.from('.ninja-i',{
//   y:500,
//   duration:0.4,
//   opacity:0,
// })
// animate.to('.ninja-h',{
//   y:0,
//   ease:"back",
//   duration:1,
// })
// animate.from('.ninja-i',{
//   y:-5,
//   duration:1.5,
// })

// animate.from('.ninja-j',{
//   y:500,
//   duration:0.4,
//   scale:3,
//   rotation:360,
//   opacity:0,
// })
// animate.from('.ninja-l',{
//   duration:0.2,
//   opacity:0,
// })
// animate.to('.ninja-i',{ 
//   y:0,
//   ease:"back",
//   duration:1,
// })
// animate.from('.ninja-p',{
//   y:-500,
//   duration:0.2,
//   opacity:0,
// })
// animate.from('.ninja-o',{
//   y:500,
//   duration:0.2,
//   opacity:0,
// })
// animate.from('.ninja-n',{
//   duration:0.2,
//   opacity:0,
// })
// animate.from('.ninja-m',{
//   duration:0.3,
//   opacity:0,
// })
// animate.from('.ninja-e', {
//   duration:0.3,
//   opacity:0,
// });
// animate.to('.ninja-b-flower', {
//   y: -700,
//   duration: 1,
// });

// animate.from('.ninja-o-img', {
//   // y: 100,
//   duration: 1,
//   opacity:0,
// });



// // Set the initial height of .anything-text (adjust this value accordingly)
// var anythingText = document.querySelector('.anything-text');
// anythingText.style.height = '240px'; // Set an initial height or whatever value is suitable
// anythingText.style.overflow = 'hidden'
// // Remove height after 7.2 seconds
// setTimeout(function() {
//   anythingText.style.height = 'unset';
//   anythingText.style.overflow = 'unset'
// }, 7200); // 8000 milliseconds = 7.2 seconds

// gsap.set('.wrap-container span', { width: 0 })

// gsap.timeline({
//     scrollTrigger:{
//       trigger: '.wrap-container span',
//       scrub:0.3,
//       start:"top 40%",
//       end:"top 20%",
//       //markers:true
//     }
//  })
//   .to('.wrap-container span', {
//   width:'100%', 
//   duration:1, ease:'none',
//   stagger:1
// })


// =====1======

// let better = gsap.timeline({ repeat: -1 });

// better.from('.ninja-bcr-img-1', {
//   duration: 1,
//   opacity: 0,
// });
// better.from('.ninja-bcr-img-2', {
//   duration: 1,
//   opacity: 0,
// });
// better.from('.ninja-bcr-img-3', {
//   duration: 1,
//   opacity: 0,
// });
// better.from('.ninja-bcr-img-4', {
//   duration: 1,
//   opacity: 0,
// });
// better.from('.ninja-bcr-img-5', {
//   duration: 1,
//   opacity: 0,
// });

// gsap.registerPlugin(ScrollTrigger);
//    // Animation for '.nbi1 img'
//    let nbi1Animation = gsap.timeline({
//     scrollTrigger: {
//         trigger: '.ninja-bcr',
//         start:"top 0%",
//         end:"bottom 0%",
//         scrub: true,
//         toggleActions: 'play none none reverse',
//     },
// });

// nbi1Animation.from('.nbi1 img', {
//     opacity: 0,
//     duration: 5,
//     stagger: {
//       each: 10,
//     },
// });

// grayscale = gsap.timeline({
//   scrollTrigger: {
//     trigger: '.ninja-brand-aware',
//     start: 'top center',
//     end: 'bottom center',
//     scrub: 1,
//     toggleActions: 'play none none reverse',
//   },
// });
// grayscale.from('.nba-img img', { // Use 'to' for grayscale effect
//   filter: "grayscale(1)",
//   duration: 2,
//   stagger: {
//     each: 10,
//   },
// });










// $(document).ready(function(){
//   var myDivReached = false;

//   // Function to check div position on scroll
//   $(window).scroll(function() {
//     // Check if the div with ID "myDiv" is in view and not already reached
//     if ($("#myDiv").offset().top - $(window).scrollTop() <= $(window).height() && !myDivReached) {
//       // If yes, set myDivReached to true and calculate 50px further
//       // myDivReached = true;
//       var divTopPosition = $("#myDiv").offset().top;
//       var scrollDistance = divTopPosition + 500 - $(window).scrollTop();
//       if (scrollDistance <= 0) {
//         // If scrolled 50px further, trigger an action (for example, alert)
//         // console.log("Scrolled 50 pixels further than myDiv!");
//         grayscale = gsap.timeline({
//           scrollTrigger: {
//             trigger: '.ninja-brand-aware',
//             start: "top+=100 center", 
//             start: 'bottom top', // Change 'bottom 0%' to 'bottom top' to only trigger when scrolling from bottom to top
//             end: 'top top',
//             scrub: 1,
//             toggleActions: 'play none none reverse',
//             // toggleActions: 'play reverse',
//           },
//         });
//         grayscale.to('.nba-img img', { // Use 'to' for grayscale effect
//           filter: "grayscale(0)",
//           duration: 2,
//           stagger: {
//             each: -10,
//           },
//         });
//         // You can perform any other action here
//       } 
//       // else {
//       //   console.log('not reached')
//       // }
//     }
//   });
// });














// /// Get the element by its ID
// var element = document.getElementById('better-rates-th');
// var positionFromTop;
// window.addEventListener('scroll', function() {
//   // Calculate position from top of the document (including potential element margins)
//    positionFromTop = element.getBoundingClientRect().top -
//                        document.body.scrollTop - document.documentElement.scrollTop;
// });
// window.addEventListener('scroll', function() {
//   if (positionFromTop < -6200) {
//     grayscale = gsap.timeline({
//       scrollTrigger: {
//         trigger: '.ninja-brand-aware',
//         start: 'top 0%',
//         end: 'bottom 0%',
//         scrub: 1,
//         toggleActions: 'play none none reverse',
//         // toggleActions: 'play none none',
//       },
//     });
//     grayscale.to('.nba-img img', { // Use 'to' for grayscale effect
//       filter: "grayscale(0)",
//       duration: 5,
//       stagger: {
//         each: 5,
//       },
//     });
//   }
// });

// shark tank
// let sharktank = gsap.timeline({
//   scrollTrigger: {
//       trigger: '.nsci',
//       start: 'top center',
//       end: 'bottom center',
//       scrub: 1,
//       toggleActions: 'play none none reverse',
//   },
// });

// sharktank.from('.nsci', { // 'to' instead of 'from'
//  scale: (0), 
//   duration: 1,
//   stagger: {
//     each: 1,
//   },
// });

// // shark tank
// gsap.set('.wrap span', { width: 0 })

// gsap.timeline({
//     scrollTrigger:{
//       trigger: '.wrap span',
//       scrub:0.3,
//       start:"top 40%",
//       end:"top 20%",
//       //markers:true
//     }
//  })
//   .to('.wrap span', {
//   width:'100%', 
//   duration:1, ease:'none',
//   stagger:1
// })


// 4 animation
  // Animation for '.nbi1 img'

//   var element = document.getElementById('better-rates-th');
// var positionFromTop;
// window.addEventListener('scroll', function() {
//   // Calculate position from top of the document (including potential element margins)
//    positionFromTop = element.getBoundingClientRect().top -
//                        document.body.scrollTop - document.documentElement.scrollTop;
// });
// window.addEventListener('scroll', function() {
//   if (positionFromTop < -10200) {
//   let content = gsap.timeline({
//     scrollTrigger: {
//         trigger: '.nce-img-single',
//         start: 'top 0%',
//         end: 'bottom 0%',
//         scrub: 0.3,
//         toggleActions: 'play none none reverse',
//     },
// });

// content.to('.nce-img-single img', {
//     opacity: 1,
//     duration: 1,
//     stagger: {
//       each: 0.3,
//     },
// });
//  }
// });

// $(document).ready(function(){
//   var myDivReached = false;

//   // Function to check div position on scroll
//   $(window).scroll(function() {
//     // Check if the div with ID "myDiv" is in view and not already reached
//     if ($("#myDivs").offset().top - $(window).scrollTop() <= $(window).height() && !myDivReached) {
//       // If yes, set myDivReached to true and calculate 50px further
//       // myDivReached = true;
//       var divTopPosition = $("#myDivs").offset().top;
//       var scrollDistance = divTopPosition + 3500 - $(window).scrollTop();
//       if (scrollDistance <= 0) {
//         // If scrolled 50px further, trigger an action (for example, alert)
//         // console.log("Scrolled 50 pixels further than myDiv!");
//           let content = gsap.timeline({
//     scrollTrigger: {
//         trigger: '.nce-img-single',
//         start: 'top 0%',
//         end: 'bottom 0%',
//         scrub: 0.3,
//         toggleActions: 'play none none reverse',
//     },
// });

// content.to('.nce-img-single img', {
//     opacity: 1,
//     duration: 1,
//     stagger: {
//       each: 0.3,
//     },
// });
//         // You can perform any other action here
//       }
//       // else{
//       //   console.log('not reached2')
//       // }
//     }
//   });
// });


// // ========2=========


//   $(document).ready(function(){
//     var myDivReached = false;
  
//     // Function to check div position on scroll
//     $(window).scroll(function() {
//       // Check if the div with ID "myDiv" is in view and not already reached
//       if ($("#myDivss").offset().top - $(window).scrollTop() <= $(window).height() && !myDivReached) {
//         // If yes, set myDivReached to true and calculate the scroll distance based on the screen size
//         // myDivReached = true;
//         var divTopPosition = $("#myDivss").offset().top;
//         var scrollDistance;
        
//         // Check if screen size is smaller than a certain breakpoint (e.g., for mobile screens)
//         if ($(window).width() <= 768) {
//           scrollDistance = divTopPosition + 2000 - $(window).scrollTop(); // Adjust the scroll distance for mobile screens
//         } else {
//           scrollDistance = divTopPosition + 2800 - $(window).scrollTop(); // Default scroll distance for larger screens
//         }
  
//         if (scrollDistance <= 0) {
//           // If scrolled further, trigger an action
//           // console.log("Scrolled further than myDiv!");
          
//           const rotateAnimation = gsap.to('.npl-img-analog', {
//             rotation: 180,
//             duration: 1,
//             paused: true
//           });
  
//           const fadeInOpacity = gsap.to('.npl-img-ch', {
//             opacity: 1,
//             duration: 1,
//             paused: true
//           });
  
//           // Create ScrollTriggerss
//           ScrollTrigger.create({
//             trigger: '.npl-img-analog',
//             start: 'top center',
//             end: 'bottom center',
//             onEnter: () => {
//               rotateAnimation.play();
//             },
//             onLeaveBack: () => {
//               rotateAnimation.reverse();
//             }
//           });
  
//           ScrollTrigger.create({
//             trigger: '.npl-img-ch',
//             start: 'top center',
//             end: 'bottom center',
//             onEnter: () => {
//               fadeInOpacity.play();
//             },
//             onLeaveBack: () => {
//               fadeInOpacity.reverse();
//             }
//           });
  
//           // You can perform any other action here
//         }
//         //  else {
//         //   console.log('not reached1')
//         // }
//       }
//     });
//   });
  




//   // form validation

//   function validateForm() {
//     var email = document.getElementById("email").value;
//     var phone = document.getElementById("phone").value;
//     var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     var phoneRegex = /^\d+$/;

//     // Check email format
//     if (!emailRegex.test(email)) {
//         document.getElementById("email").style.borderColor = "red";
//         return false;
//     }

//     // Check phone format
//     if (!phoneRegex.test(phone)) {
//         document.getElementById("phone").style.borderColor = "red";
//         return false;
//     }

//     return true; // Form is valid
// }

// // Reset border color on input focus
// document.getElementById("email").addEventListener("input", function() {
//     this.style.borderColor = "";
// });

// document.getElementById("phone").addEventListener("input", function() {
//     this.style.borderColor = "";
// });
