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

//     if (window_top > tabsOffset && window_top - 100 < outcomeTab.offset().top) {
//         if (!$('#tabsMenu').is('.stickyCS')) {
//             $('#tabsMenu').addClass('stickyCS');
//         }
//         $('#tabsMenu').css('transform', 'unset');
//     }
//     else if(window_top > outcomeTab.offset().top) {
//         let translateYValue = - window_top + 3888;
//         $('#tabsMenu').css('transform', 'translateY(' + translateYValue + 'px)');
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



document.addEventListener('DOMContentLoaded', function() {
  var form = document.getElementById('enquiry-form');
  var servicesList = document.querySelector('.services-list');
  
  form.addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent the form from submitting normally

      // Get form data
      var formData = new FormData(form);


      // Get selected services
      var selectedServices = [];
      servicesList.querySelectorAll('li.selected').forEach(function(li) {
          selectedServices.push(li.getAttribute('data-service'));
      });


       // Add selected services to form data
       selectedServices.forEach(function(service) {
          formData.append('services[]', service);
      });


      formData.append('action', 'handle_enquiry_form_submission'); // Add action parameter

      // Send AJAX request
      var xhr = new XMLHttpRequest();
      xhr.open('POST', ajax_object.ajax_url, true); // AJAX URL provided by WordPress

      xhr.onload = function() {
          if (xhr.status >= 200 && xhr.status < 300) {
              // Request was successful
              console.log(xhr.responseText);
              if(JSON.parse(xhr.responseText).status == "success"){
                  document.querySelector('.contact-yes-ih').innerHTML = "Done";
              }
              if(JSON.parse(xhr.responseText).status == "success"){
                  document.querySelector('.ser-done').innerHTML = "Done";
              }
              // Handle success, such as displaying a success message or redirecting the user
          } else {
              // Request failed
              console.error(xhr.responseText);
              // Handle errors
          }
      };
      
      xhr.onerror = function() {
          // Network errors
          console.error('Request failed');
      };
      
      xhr.send(formData); // Send form data
  });
});




// =========hiring detail===========



document.addEventListener('DOMContentLoaded', function() {
  var form = document.getElementById('portfolioForm');
  // var servicesList = document.querySelector('.services-list');
  
  form.addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent the form from submitting normally

      // Get form data
      var formData = new FormData(form);




      formData.append('action', 'hiring_details'); // Add action parameter

      // Send AJAX request
      var xhr = new XMLHttpRequest();
      xhr.open('POST', ajax_object.ajax_url, true); // AJAX URL provided by WordPress

      xhr.onload = function() {
          if (xhr.status >= 200 && xhr.status < 300) {
              // Request was successful
              console.log(xhr.responseText);
              // if(JSON.parse(xhr.responseText).status == "success"){
              //     document.querySelector('.contact-yes-ih').innerHTML = "Done";
              // }
              // Handle success, such as displaying a success message or redirecting the user
          } else {
              // Request failed
              console.error(xhr.responseText);
              // Handle errors
          }
      };
      
      xhr.onerror = function() {
          // Network errors
          console.error('Request failed');
      };
      
      xhr.send(formData); // Send form data
  });
});