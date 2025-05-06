// document.addEventListener('DOMContentLoaded', () => {
//     console.log('Product loaded');

//     let currentPage = 2; // Initialize current page counter
//     let loading = false; // Flag to prevent multiple simultaneous requests
//     let pageRequested = {}; // Object to track which pages have been requested

//     function isScrolledToHalf() {
//         return window.innerHeight + window.scrollY >= document.body.offsetHeight / 2;
//     }

//     let loadMorePosts = async () => {
//         if (loading || pageRequested[currentPage]) return; // Prevent multiple requests for the same page
//         loading = true;
//         try {
//             const response = await fetch(ajax_object.ajax_url, {
//                 method: "POST",
//                 headers: {
//                     "Content-Type": "application/x-www-form-urlencoded",
//                 },
//                 body: `action=show_products&nonce=${ajax_object.nonce}&page=${currentPage}`,
//             });
//             if (response.ok) {
//                 const htmlResponse = await response.json();
//                 console.log(htmlResponse);
//                 var blogpostContainer = document.querySelector('.blogpost');
//                 blogpostContainer.insertAdjacentHTML('beforeend', htmlResponse);
                
//                 if (htmlResponse.length == 0) {
//                     console.logg("lenth");
//                     currentPage = 1; // Reset to the first page if no more posts are available
//                     pageRequested = {}; // Reset the pageRequested object
//                 } else {
//                     pageRequested[currentPage] = true;
//                     currentPage++;
//                 }

//             } else {
//                 console.error("Error:", response.status);
//             }
//         } catch (error) {
//             console.error("Fetch error:", error);
//         } finally {
//             loading = false; 
//         }
//     }
//     window.addEventListener('scroll', () => {
//         if (isScrolledToHalf()) {
//             loadMorePosts();
//         }
//     });
// });



// // document.addEventListener('DOMContentLoaded', () => {
// //     // ... (rest of your code)
// //     let currentPage = 2; // Initialize current page counter
// //     let loading = false; // Flag to prevent multiple simultaneous requests
// //     let pageRequested = {}; // Object to track which pages have been requested
// //     let hasMorePosts = true; // Flag to indicate if there are more posts to load
// //     function isScrolledToHalf() {
// //       return window.innerHeight + window.scrollY >= document.body.offsetHeight / 3;
// //     }
// //     let loadMorePosts = async () => {
// //       if (loading || !hasMorePosts) return; // Prevent requests if loading or no more posts
// //       loading = true;
// //       try {
// //         const response = await fetch(ajax_object.ajax_url, {
// //           method: "POST",
// //           headers: {
// //             "Content-Type": "application/x-www-form-urlencoded",
// //           },
// //           body: `action=show_products&nonce=${ajax_object.nonce}&page=${currentPage}`,
// //         });
// //         if (response.ok) {
// //           const htmlResponse = await response.json();
// //           console.log(htmlResponse);
// //           var blogpostContainer = document.querySelector('.blogpost');
// //           blogpostContainer.insertAdjacentHTML('beforeend', htmlResponse);
// //           currentPage++;
// //           // Check for empty response and update flag accordingly
// //           hasMorePosts = htmlResponse !== '';
// //         } else {
// //           console.error("Error:", response.status);
// //         }
// //       } catch (error) {
// //         console.error("Fetch error:", error);
// //       } finally {
// //         loading = false;
// //       }
// //     };
// //     window.addEventListener('scroll', () => {
// //       if (isScrolledToHalf()) {
// //         loadMorePosts();
// //       }
// //     });
// //   });




// document.addEventListener('DOMContentLoaded', () => {


//     // Your condition to determine whether to hide the footer
//     var hideFooter = true;
//     // Function to hide the footer
//     // window.onload = function() {
//     //     if (hideFooter) {
//     //         document.querySelector('footer').style.display = 'none';
//     //         document.querySelector('.bg-1-quality').style.display = 'none';
//     //     }
//     // };


    
//     let currentPage = 3; // Initialize current page counter
//     let loading = false; // Flag to prevent multiple simultaneous requests
//     let pageRequested = {}; // Object to track which pages have been requested


//     function debounce(func, delay) {
//         let timeoutId;
//         return function() {
//             const context = this;
//             const args = arguments;
//             clearTimeout(timeoutId);
//             timeoutId = setTimeout(() => {
//                 func.apply(context, args);
//             }, delay);
//         };
//     }



//     function isScrolledToHalf() {
//         return window.innerHeight + window.scrollY >= document.body.offsetHeight / 2;
//     }

//     let loadMorePosts = async () => {
//         if (loading || pageRequested[currentPage]) return; // Prevent multiple requests for the same page
//         loading = true;

//         try {
//             const response = await fetch(ajax_object.ajax_url, {
//                 method: "POST",
//                 headers: {
//                     "Content-Type": "application/x-www-form-urlencoded",
//                 },
//                 body: `action=show_products&nonce=${ajax_object.nonce}&page=${currentPage}`,
//             });

//             if (response.ok) {
//                 console.log(response);
//                 const htmlResponse = await response.json();
//                 var blogpostContainer = document.querySelector('.blogpost');
//                 blogpostContainer.insertAdjacentHTML('beforeend', htmlResponse);

//                 if (Array.isArray(htmlResponse) && htmlResponse.length === 1 && htmlResponse[0] === null) {
//                     // Handle the case where htmlResponse is [null]
//                     console.log('else');
//                     currentPage = 1; 
//                     pageRequested = {}; 
//                 } else {
//                     console.log(htmlResponse);
//                     pageRequested[currentPage] = true;
//                     currentPage++;
//                 }
                
//                 // if (htmlResponse) {
//                 //     console.log(htmlResponse);
//                 //     pageRequested[currentPage] = true;
//                 //     currentPage++;
//                 // } else {
//                 //     console.log('else');
//                 //     currentPage = 1; 
//                 //     pageRequested = {}; 
//                 // }
                
                
//             } else {
//                 console.error("Error:", response.status);
//             }
//         } catch (error) {
//             console.error("Fetch error:", error);
//         } finally {
//             loading = false;
//         }
//     }


//     // Wrap the loadMorePosts function with debounce
// const debouncedLoadMorePosts = debounce(loadMorePosts, 300);
//     // window.addEventListener('scroll', () => {
//     //     if (isScrolledToHalf()) {
//     //         loadMorePosts();
//     //     }
//     // });
//     window.addEventListener('scroll', () => {
//         if (isScrolledToHalf()) {
//             debouncedLoadMorePosts();
//         }
//     });
// });