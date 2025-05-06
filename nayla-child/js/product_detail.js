// document.addEventListener('DOMContentLoaded', () => {


//     // Your condition to determine whether to hide the footer
//     var hideFooter = true;
//     // Function to hide the footer
//     window.onload = function() {
//         if (hideFooter) {
//             document.querySelector('footer').style.display = 'none';
//             document.querySelector('.bg-1-quality').style.display = 'none';
//         }
//     };


    
//     let currentPage = 3; // Initialize current page counter
//     let loading = false; // Flag to prevent multiple simultaneous requests
//     let pageRequested = {}; // Object to track which pages have been requested
//     // let skipFirstPost = true;
//     // let isFirstPost = true;


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

//     var checkForPost = 1;

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
//                 body: `action=show_detail_products&nonce=${ajax_object.nonce}&page=${currentPage}&singlePostId=${deatilId.id}&checkPost=${checkForPost}`,
//                 // body: `action=show_detail_products&nonce=${ajax_object.nonce}&page=${currentPage}&first_id=${parseInt(detailpg.id)}`,
//             });

//             if (response.ok) {
//                 // console.log(response);
//                 const htmlResponse = await response.json();
//                 var productContainer = document.querySelector('.single-prd-detail');
//                 productContainer.insertAdjacentHTML('beforeend', htmlResponse);

//                 // document.querySelector('.hidden-post').style.display = 'none';
//                 // document.querySelector('.hidden-post1').style.display = 'none';

               

//                 if (Array.isArray(htmlResponse) && htmlResponse.length === 1 && htmlResponse[0] === null) {
//                     // Handle the case where htmlResponse is [null]
//                     // console.log('else');
//                     currentPage = 1; 
//                     pageRequested = {}; 
//                 } else {
//                     // console.log(htmlResponse);
//                     pageRequested[currentPage] = true;
//                     currentPage++;
//                     // skipFirstPost = false;
//                 }
                
//                 checkForPost ++;
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
//     window.addEventListener('scroll', () => {
//         if (isScrolledToHalf()) {
//             loadMorePosts();
//         }
//     });
//     window.addEventListener('scroll', () => {
//         if (isScrolledToHalf()) {
//             debouncedLoadMorePosts();
//         }
//     });
// });

