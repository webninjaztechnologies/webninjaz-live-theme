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

// css and js file enqueue start 6 may 
 
function child_theme_enqueue_styles_scripts() {
//   
  if(is_page('products')){
//     wp_enqueue_script('parent-custom-js', get_template_directory_uri() . '/js/product.js', [], null, true); 
	wp_enqueue_style('parent-style', get_stylesheet_directory_uri() . '/css/product-listing.css');
	     
	 }
   if (is_singular('webninjaz_product')) {
    wp_enqueue_style('webninjaz-style', get_stylesheet_directory_uri() . '/css/product-listing.css');
    wp_enqueue_style('style-n', get_stylesheet_directory_uri() . '/css/style-n.css');
    wp_enqueue_style('style', get_stylesheet_directory_uri() . '/css/style.css');
    wp_enqueue_style('bootstrap-css','https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css',array(),'4.6.2');

    wp_enqueue_script ( 'my-script', get_stylesheet_directory_uri() . '/js/my-script.js' );
    wp_enqueue_script ( 'script', get_stylesheet_directory_uri() . '/js/script.js' );
}
}
add_action('wp_enqueue_scripts', 'child_theme_enqueue_styles_scripts');

 
//   css and js file enqueue end 6 may 
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


//May 1
// Product cpt



// custom cpt- webninjaz_product1

function create_webninjaz_product_cpt() {

    $labels = array(

        'name' => _x( 'Webninjaz Products', 'webninjaz_product' ),

        'singular_name' => _x( 'Webninjaz Product', 'webninjaz_product' ),

        'add_new' => _x( 'Add New', 'webninjaz_product' ),

        'add_new_item' => _x( 'Add New Webninjaz Product', 'webninjaz_product' ),

        'edit_item' => _x( 'Edit Webninjaz Product', 'webninjaz_product' ),

        'new_item' => _x( 'New Webninjaz Product', 'webninjaz_product' ),

        'view_item' => _x( 'View Webninjaz Product', 'webninjaz_product' ),

        'search_items' => _x( 'Search Webninjaz Products', 'webninjaz_product' ),

        'not_found' => _x( 'No webninjaz products found', 'webninjaz_product' ),

        'not_found_in_trash' => _x( 'No webninjaz products found in Trash', 'webninjaz_product' ),

        'parent_item_colon' => _x( 'Parent Webninjaz Product:', 'webninjaz_product' ),

        'menu_name' => _x( 'Webninjaz Products', 'webninjaz_product' ),

    );



    $args = array(

        'labels' => $labels,

        'hierarchical' => false,

        'supports' => array( 'title', 'editor','thumbnail'),

        'public' => true,

        'show_ui' => true,

        'show_in_menu' => true,

        'show_in_nav_menus' => false,

        'publicly_queryable' => true,

        'exclude_from_search' => false,

        'has_archive' => true,

        'query_var' => true,

        'can_export' => true,

        'rewrite' => true,

        'capability_type' => 'post'

    );



    register_post_type( 'webninjaz_product', $args );

}

add_action( 'init', 'create_webninjaz_product_cpt' );





// product type taxonomy - for the webninjaz_product cpt 

function create_webninjaz_product_taxonomy() {

    $labels = array(

        'name' => _x( 'Product Types', 'product_type' ),

        'singular_name' => _x( 'Product Type', 'product_type' ),

        'search_items' => _x( 'Search Product Types', 'product_type' ),

        'all_items' => _x( 'All Product Types', 'product_type' ),

        'parent_item' => _x( 'Parent Product Type', 'product_type' ),

        'parent_item_colon' => _x( 'Parent Product Type:', 'product_type' ),

        'edit_item' => _x( 'Edit Product Type', 'product_type' ),

        'update_item' => _x( 'Update Product Type', 'product_type' ),

        'add_new_item' => _x( 'Add New Product Type', 'product_type' ),

        'new_item_name' => _x( 'New Product Type Name', 'product_type' ),

        'menu_name' => _x( 'Product Types', 'product_type' ),

    );



    $args = array(

        'hierarchical' => true,

        'labels' => $labels,

        'show_ui' => true,

        'show_admin_column' => true,

        'query_var' => true,

        'rewrite' => array( 'slug' => 'product-type' ),

    );



    register_taxonomy( 'product_type', array( 'webninjaz_product' ), $args );

}

add_action( 'init', 'create_webninjaz_product_taxonomy' );

 

function child_theme_remove_parent_gsap() {
  if (is_page('listing')) {
      wp_dequeue_script('gsap-js');       // The ID from the parent theme
      wp_deregister_script('gsap-js');
  }
}
add_action('wp_enqueue_scripts', 'child_theme_remove_parent_gsap', 100);

// disable imagify on wn-products
add_filter('imagify_allow_webp', function ($allow_webp) {
  if (is_page('products')) {
      return false;  
  }
  return $allow_webp;
});
add_filter( 'imagify_picture_tag_enabled', 'disable_imagify_picture_on_wn_products' );

function disable_imagify_picture_on_wn_products( $enabled ) {
  if ( is_page( 'products' ) || get_page_template_slug() === 'page_product.php' ) {
      return false;  
  }
  return $enabled;
}