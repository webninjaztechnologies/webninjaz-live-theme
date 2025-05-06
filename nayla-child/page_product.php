<?php // Template Name: Products TPL ?>
<?php get_header(); ?>

<main id="primary" class="site-main section" data-barba="container">
<?php
ob_start();
$html = ob_get_clean();
$html = preg_replace('/<picture[^>]*>.*?<img[^>]+>(.*?)<\/picture>/is', '$1', $html);
?>
<!-- <main> -->
    <section>
        <div class="saga-common-heading-bg">
            <div class="container">
                <div class="saga-cbg">
                    <div class="saga-common ">
                        <div class="saga-container saga-common-color">
                            <div>Products <span>Products</span></div>
                            <!-- <div>Gaps <span>Gaps</span></div> -->
                        </div>
                        <p>At WebNinjaz, we don’t just build websites — we build digital products that solve real-world problems. Each SaaS product below is conceptualized, designed, and developed in-house with one goal: to make life simpler, smoother, and smarter.</p>
                    </div>
                    <!-- <div class="saga-common-color">
                        <div>Connect <span>Connect</span></div>
                        <div>Here <span>Here</span></div>
                    </div> -->
                </div>
            </div>
        </div>
    </section>
    <section>
        <div class="services-heading-bg">
            <div class="container">
                <div class="about-saga-bg">
                    <div class="about-saga as-pl">
                        <h2>Innovate with</h2>
                        <div class="about-color-saga-mob">
                            <h2>Our Products</h2>
                        </div>
                        <p>At WebNinjaz, we don’t just build websites — we build digital products that solve real-world problems. Each SaaS product below is conceptualized, designed, and developed in-house with one goal: to make life simpler, smoother, and smarter.</p>
                    </div>
                    <div class="about-color-saga">
                        <h2>Our Products</h2>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section>
        <div class="ninja-innovate-product-bg">
            <div class="container blogpost">
                <?php
                    $args = array(
                        'post_type' => 'webninjaz_product',
                        'posts_per_page' => -1,
                    );
                    $query = new WP_Query($args);
                    if ($query->have_posts()) {
                        $post_count = 0; // Counter to keep track of postsdfd hjshdfj387jds837bhdjs378bdsfjhsfb hdjsfgjs
                        $index = 0;
                        while ($query->have_posts()) {
                            $query->the_post();
                            $post_terms = get_the_terms(get_the_ID(), 'product_type');
                        
                            // Check if it's the first post in a pair
                            if ($post_count % 2 == 0) {
                                echo '<div class="ninja-innovate-product">';
                            }
                            ?>
                            <?php if($index % 2 == 0) {?>
                                <?php 
                                if ($post_count % 2 == 0) { ?>
                                    <!-- HTML for first post in the pair -->
                                    <a href="<?php echo get_permalink(); ?>">

                                    <div class="nipb-img nipb-img-hr nipb-ih-1">
                                    <?php
$thumbnail_id = get_post_thumbnail_id( get_the_ID() );
if ( $thumbnail_id ) :
    $img_url = wp_get_attachment_image_url( $thumbnail_id, 'full', false );
?>
    <img src="<?php echo esc_url( $img_url ); ?>" alt="<?php the_title_attribute(); ?>">
<?php endif; ?>

                                       <?php
                                        if ($post_terms && !is_wp_error($post_terms)) {
                                            foreach ($post_terms as $term) { ?>
                                            <h4> <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none">
                                               <circle cx="5" cy="5" r="5" fill="#DFF36B" />
                                               </svg> <?php echo $term->name; ?>
                                            </h4>
                                             <?php  }
                                        }
                                        ?>
                                            <h2>
                                                <?php the_title(); ?>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 27 27" fill="none">
                                                   <path
                                                    d="M25.2383 0.111916C24.55 0.111916 24.0911 0.340445 23.6322 0.797506L0.688318 23.6506C-0.229439 24.5647 -0.229439 25.4003 0.688318 26.3144C1.60607 27.2285 2.44496 27.2285 3.36272 26.3144L26.3066 3.46132C27.2244 2.5472 27.2244 1.71163 26.3066 0.797506C25.8478 0.340445 25.9266 0.111916 25.2383 0.111916Z"
                                                    fill="white" />
                                                    <path
                                                    d="M24.7017 0.004673H4.05221C2.67557 0.004673 1.75781 -0.152443 1.75781 1.21874C1.75781 2.58993 2.67557 3.50405 4.05221 3.50405H23.4828V22.8578C23.4828 24.2289 24.4006 25.1431 25.7772 25.1431C27.1539 25.1431 26.9961 24.2289 26.9961 22.8578V2.28998C26.9961 0.918795 26.0784 0.004673 24.7017 0.004673Z"
                                                   fill="white" />
                                                </svg>
                                            </h2>
                                        <h6><?php the_content();?></h6>
                                        <p><?php echo get_the_date('Y'); ?></p>
                                    </div>
                                    </a>

                                <?php }
                                else { ?>
                                    <!-- HTML for second post in the pair -->
                                    <a href="<?php echo get_permalink(); ?>">

                                    <div class="nipb-img nipb-img-hr  nipb-ih-2">
                                        <img src="<?php echo get_the_post_thumbnail_url(get_the_ID(), 'full'); ?>">
                                        <?php
                                        if ($post_terms && !is_wp_error($post_terms)) {
                                            foreach ($post_terms as $term) { ?>
                                                <h4> <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none">
                                                   <circle cx="5" cy="5" r="5" fill="#DFF36B" />
                                                    </svg> <?php echo $term->name; ?>
                                                </h4>
                                            <?php   }
                                        }  ?>
                                            <h2><?php the_title(); ?>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 27 27" fill="none">
                                               <path
                                                  d="M25.2383 0.111916C24.55 0.111916 24.0911 0.340445 23.6322 0.797506L0.688318 23.6506C-0.229439 24.5647 -0.229439 25.4003 0.688318 26.3144C1.60607 27.2285 2.44496 27.2285 3.36272 26.3144L26.3066 3.46132C27.2244 2.5472 27.2244 1.71163 26.3066 0.797506C25.8478 0.340445 25.9266 0.111916 25.2383 0.111916Z"
                                                   fill="white" />
                                               <path
                                                d="M24.7017 0.004673H4.05221C2.67557 0.004673 1.75781 -0.152443 1.75781 1.21874C1.75781 2.58993 2.67557 3.50405 4.05221 3.50405H23.4828V22.8578C23.4828 24.2289 24.4006 25.1431 25.7772 25.1431C27.1539 25.1431 26.9961 24.2289 26.9961 22.8578V2.28998C26.9961 0.918795 26.0784 0.004673 24.7017 0.004673Z"
                                                fill="white" />
                                            </svg>
                                            </h2>
                                        <h6><?php the_content();?></h6>
                                        <p><?php echo get_the_date('Y'); ?></p>
                                    </div>
                                    </a>

                                    <?php $index++ ; ?>
                                <?php } ?>
                            <?php } 
                            else {?>
                                 <?php
                                if ($post_count % 2 == 0) { ?>
                                    <!-- HTML for first post in the pair -->
                                    <a href="<?php echo get_permalink(); ?>">

                                    <div class="nipb-img nipb-img-hr nipb-ih-2">
                                        <img src="<?php echo get_the_post_thumbnail_url(get_the_ID(), 'full'); ?>" alt="">
                                        <?php
                                           if ($post_terms && !is_wp_error($post_terms)) {
                                                foreach ($post_terms as $term) { ?>
                                                    <h4> <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none">
                                                        <circle cx="5" cy="5" r="5" fill="#DFF36B" />
                                                       </svg> <?php echo $term->name; ?>
                                                    </h4>
                                                <?php  }
                                            }
                                        ?>
                                        <h2>
                                            <?php the_title(); ?>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 27 27" fill="none">
                                                <path
                                                   d="M25.2383 0.111916C24.55 0.111916 24.0911 0.340445 23.6322 0.797506L0.688318 23.6506C-0.229439 24.5647 -0.229439 25.4003 0.688318 26.3144C1.60607 27.2285 2.44496 27.2285 3.36272 26.3144L26.3066 3.46132C27.2244 2.5472 27.2244 1.71163 26.3066 0.797506C25.8478 0.340445 25.9266 0.111916 25.2383 0.111916Z"
                                                     fill="white" />
                                                <path
                                                    d="M24.7017 0.004673H4.05221C2.67557 0.004673 1.75781 -0.152443 1.75781 1.21874C1.75781 2.58993 2.67557 3.50405 4.05221 3.50405H23.4828V22.8578C23.4828 24.2289 24.4006 25.1431 25.7772 25.1431C27.1539 25.1431 26.9961 24.2289 26.9961 22.8578V2.28998C26.9961 0.918795 26.0784 0.004673 24.7017 0.004673Z"
                                                    fill="white" />
                                            </svg>
                                        </h2>
                                        <h6><?php the_content();?></h6>
                                        <p><?php echo get_the_date('Y'); ?></p>
                                     </div>
                                     </a>

                                <?php }
                                else { ?>
                                    <!-- HTML for second post in the pair -->
                                    <a href="<?php echo get_permalink(); ?>">

                                    <div class="nipb-img nipb-img-hr  nipb-ih-1">
                                       <img src="<?php echo get_the_post_thumbnail_url(get_the_ID(), 'full'); ?>">
                                       <?php
                                            if ($post_terms && !is_wp_error($post_terms)) {
                                               foreach ($post_terms as $term) { ?>
                                                <h4> <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none">
                                                   <circle cx="5" cy="5" r="5" fill="#DFF36B" />
                                                    </svg> <?php echo $term->name; ?>
                                                </h4>
                                                 <?php   }
                                            }  ?>
                                            <h2><?php the_title(); ?>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 27 27" fill="none">
                                                  <path
                                                    d="M25.2383 0.111916C24.55 0.111916 24.0911 0.340445 23.6322 0.797506L0.688318 23.6506C-0.229439 24.5647 -0.229439 25.4003 0.688318 26.3144C1.60607 27.2285 2.44496 27.2285 3.36272 26.3144L26.3066 3.46132C27.2244 2.5472 27.2244 1.71163 26.3066 0.797506C25.8478 0.340445 25.9266 0.111916 25.2383 0.111916Z"
                                                   fill="white" />
                                                  <path
                                                   d="M24.7017 0.004673H4.05221C2.67557 0.004673 1.75781 -0.152443 1.75781 1.21874C1.75781 2.58993 2.67557 3.50405 4.05221 3.50405H23.4828V22.8578C23.4828 24.2289 24.4006 25.1431 25.7772 25.1431C27.1539 25.1431 26.9961 24.2289 26.9961 22.8578V2.28998C26.9961 0.918795 26.0784 0.004673 24.7017 0.004673Z"
                                                    fill="white" />
                                                </svg>
                                            </h2>
                                            <h6><?php the_content();?></h6>
                                            <p><?php echo get_the_date('Y'); ?></p>
                                        </div>
                                        </a>

                                    <?php $index++ ; ?>
                                <?php } ?>
                            <?php } ?>
                            <?php
                            // Check if it's the second post in a pair or the last post
                            if ($post_count % 2 == 1 || $post_count == $query->post_count - 1) {
                                echo '</div>'; // Close the main div if it's the second post in a pair or the last post
                            }
                            // Increment post count
                            $post_count++;
                        }
                        wp_reset_postdata();
                    }
                ?>
            </div>
        </div>
        <!-- ===back to top======== -->
        <!-- <button id="back-to-top-btn" title="Back to Top">&#8593;</button> -->
    </section>
</main>

<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.3/gsap.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/gsap@3.9.1/dist/ScrollTrigger.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.8/ScrollMagic.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.8/plugins/animation.gsap.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.min.js"></script>
<script src="https://wordpress-1078893-4332601.cloudwaysapps.com/wp-content/themes/moderwebninjaz/assets/js/script.js"></script>
<script type="text/javascript" src="https://wordpress-1078893-4332601.cloudwaysapps.com/wp-content/themes/moderwebninjaz/assets/js/product.js"
    id="product-script-js"></script>
<script type="text/javascript" src="https://wordpress-1078893-4332601.cloudwaysapps.com/wp-content/themes/moderwebninjaz/assets/js/my_script.js"
    id="my-custom-script-js"></script>
<?php get_footer();?>