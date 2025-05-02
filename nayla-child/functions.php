<?php
/**
 * Theme functions file
 */

/**
 * Enqueue parent theme styles first
 * Replaces previous method using @import
 * <http://codex.wordpress.org/Child_Themes>
 */

add_action( 'wp_enqueue_scripts', 'enqueue_parent_theme_style', 99 );

function enqueue_parent_theme_style() {
	wp_enqueue_style( 'nayla-parent-style', get_template_directory_uri().'/style.css' );
}

/**
 * Add your custom functions below
 */

function custom_redirect_urls() {
    // Get the current URL
    $current_url = home_url($_SERVER['REQUEST_URI']);

    // Array of URLs to redirect
    $redirect_urls = array(
        home_url('/portfolio/uxunleashed/') => 'https://uppababy.com/',
		home_url('/portfolio/nyc-street-life/') => 'https://www.stonelam.com/',
		home_url('/portfolio/los-coyotes/') => 'https://peppersquare.com/',
		home_url('/portfolio/austeria/') => 'https://savvyaccounting.co.uk/',
		home_url('/portfolio/immersive-realities/') => 'https://www.letsflycheaper.com/',
		home_url('/portfolio/en-vogue/') => 'https://tdmgrowthpartners.com/',
		home_url('/portfolio/percent/') => 'https://stonexindia.com/',
		home_url('/portfolio/vibrant-horizons/') => 'https://kabukipower.com/',
		home_url('/portfolio/lifes-stories/') => 'https://lovebeautyandplanet.in/',
		home_url('/portfolio/mayless-trailer/') => 'https://www.vayda.com/',
		home_url('/portfolio/style-scape/') => 'https://www.bose.com/home',
		home_url('/portfolio/taller-alvarado/') => 'https://www.adobe.com/',
		home_url('/portfolio/ink-sense/') => 'https://geniuslitter.com/',
		home_url('/portfolio/beach-brown/') => 'https://www.alphapaw.com/',
		home_url('/portfolio/synchronicity/') => 'https://brandefenders.com/',
		home_url('/portfolio/curology/') => 'https://www.expedia.co.in/',
		home_url('/portfolio/genius-litter-2/') => 'https://geniuslitter.com/',
		home_url('/portfolio/stonex-2/') => 'https://stonexindia.com/',
		home_url('/portfolio/stone-lam-2/') => 'https://www.stonelam.com/',
		home_url('/portfolio/lets-fly-cheaper-2/') => 'https://www.letsflycheaper.com/',
		home_url('/portfolio/lets-fly-cheaper/') => 'https://www.letsflycheaper.com/',
		home_url('/portfolio/savvy-accounting-2/') => 'https://savvyaccounting.co.uk/',
		home_url('/portfolio/savvy-accounting/') => 'https://savvyaccounting.co.uk/',
		home_url('/portfolio/pepper-square/') => 'https://peppersquare.com/',
		home_url('/portfolio/stone-lam/') => 'https://www.stonelam.com/',
		home_url('/portfolio/kabuki-power-2/') => 'https://kabukipower.com/',
		home_url('/portfolio/tdm-growth-partners/') => 'https://tdmgrowthpartners.com/',
		home_url('/portfolio/alpha-paw-2/') => 'https://www.alphapaw.com/',
		home_url('/portfolio/stonex/') => 'https://stonexindia.com/',
		home_url('/portfolio/genius-litter/') => 'https://geniuslitter.com/',
        home_url('/portfolio/uppababy/') => 'https://uppababy.com/',
        home_url('/portfolio/hindustan-unilever-limited-2/') => 'https://lovebeautyandplanet.in/',
        // Add more URLs as needed 
    );

    // Check if the current URL is in the redirect array
    if (array_key_exists($current_url, $redirect_urls)) {
        // Redirect to the new URL
        wp_redirect($redirect_urls[$current_url], 301);
        exit;
    }
}
add_action('template_redirect', 'custom_redirect_urls');

 
function custom_js_script() {
    ?>
    <script>
		
		document.addEventListener('DOMContentLoaded', function () {
			
			// 	On Load
			setTimeout(function() {
					var links = document.querySelectorAll('.client-projct-links .client a');

					if (links.length > 0) {
						links.forEach(function(link) {
							link.setAttribute('target', '_blank');
						});
						console.log('Target _blank added to', links.length, 'links');
					} else {
						console.log('No links found matching the selector.');
					}
				}, 1000);
			
			
			// 	When I click on About Menu
			let aboutPage = document.querySelector("#menu-item-5049");
			aboutPage.addEventListener('click', function(){
				
				setTimeout(function() {
					var links = document.querySelectorAll('.client-projct-links .client a');

					if (links.length > 0) {
						links.forEach(function(link) {
							link.setAttribute('target', '_blank');
						});
						console.log('Target _blank added to', links.length, 'links');
					} else {
						console.log('No links found matching the selector.');
					}
				}, 3000);
				
			});
			
			
		});
	</script>
    <?php
}
add_action('wp_footer', 'custom_js_script');
