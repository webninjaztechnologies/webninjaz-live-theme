<?php
/**
 * Template part for displaying posts
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package Nayla
 */



$classes = [];
$date = true;
$category = true;
$excerpt = true;
$thumb = true;
$read = 'Read Article';
$style = 'classic';

$classes[] = 'single-blog-post';

    if (has_post_thumbnail()) {
        $classes[] = 'has-thumbnail' ;
    } else {
        
         $classes[] = 'no-thumbnail' ;
    };

if (class_exists('Redux')) {
    $option = get_option('pe-redux');
    $date = $option['show_post_date'];
    $category = $option['show_post_cat'];
    $excerpt = $option['show_post_excerpt'];
    $thumb = $option['show_post_thumbnail'];
    $read = $option['read_more_text'];
    
    if ($option['post_background'] == false) {
        
         $classes[] = 'no-background' ;
    }
    
    $style = $option['single_post_style'];
    $classes[] = $style;
    
    
     
};


?>

<article id="post-<?php the_ID(); ?>" <?php post_class($classes); ?>>

    <!-- Single Post--><?php if (is_singular()) { ?>

    <div class="section single-post-page">

        <div class="wrapper single-post-header">

            <div class="post-title-wrap c-col-8 sm-12 no-margin">

                <h1 class="post-title text-h2"><?php the_title() ?></h1>

            </div>

            <?php if ($style === 'classic') { ?>

            <div class="post-meta c-col-12">

                <div class="post-date"><?php nayla_posted_on(); ?></div>

                <div class="post-categories"><?php 		// Hide category and tag text for pages.
		if ( 'post' === get_post_type() ) {
			/* translators: used between list items, there is a space after the comma */
			$categories_list = get_the_category_list( esc_html__( ', ', 'nayla' ) );
			if ( $categories_list ) {
				/* translators: 1: list of categories. */
				printf( '<span class="cat-links">' . esc_html__( '%1$s', 'nayla' ) . '</span>', $categories_list ); // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
			}

		} ?></div>

            </div>

            <?php nayla_post_thumbnail();    } ?>

        </div>

        <div class="wrapper">
            <?php if ($style === 'split') { ?>

            <div class="c-col-6 sm-12 entry-meta">

                <div class="entry-meta-wrap">
                    <h5 class="post-title-sub"><?php the_title() ?></h5>


                    <?php if ($option['single-post-thumbnail']) { ?>

                    <div class="post-featured-image">

                        <?php nayla_post_thumbnail(); ?>
                    </div>

                    <?php } ?>

                    <div class="post-meta">

                        <?php if ($option['single-post-author']) { ?>

                        <div class="post-author">

                            <span class="post-met-title"><?php echo esc_html('POSTED BY' , 'nayla') ?></span>

                            <span class="author-name"><?php nayla_posted_by() ?></span>

                        </div>
                        <?php } ?>

                        <?php if ($option['single-post-cat']) { ?>

                        <div class="post-categories">

                            <span class="post-met-title"><?php echo esc_html('POSTED AT' , 'nayla') ?></span>

                            <?php 		// Hide category and tag text for pages.
		if ( 'post' === get_post_type() ) {
			/* translators: used between list items, there is a space after the comma */
			$categories_list = get_the_category_list( esc_html__( ', ', 'nayla' ) );
			if ( $categories_list ) {
				/* translators: 1: list of categories. */
				printf( '<span class="cat-links">' . esc_html__( '%1$s', 'nayla' ) . '</span>', $categories_list ); // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
			}

		} ?>
                        </div>
                        <?php } ?>

                        <?php if ($option['single-post-date']) { ?>

                        <div class="post-date">
                            <span class="post-met-title"><?php echo esc_html('POSTED ON' , 'nayla') ?></span>
                            <?php nayla_posted_on(); ?>
                        </div>
                        <?php } ?>

                    </div>

                </div>

            </div>

            <div class="c-col-6 entry-content">

                <?php } else { ?>

                <div class="c-col-12 entry-content">


                    <?php }
		the_content(
			sprintf(
				wp_kses(
					/* translators: %s: Name of current post. Only visible to screen readers */
					__( 'Continue reading<span class="screen-reader-text"> "%s"</span>', 'nayla' ),
					array(
						'span' => array(
							'class' => array(),
						),
					)
				),
				wp_kses_post( get_the_title() )
			)
		);

		wp_link_pages(
			array(
				'before' => '<div class="page-links">' . esc_html__( 'Pages:', 'nayla' ),
				'after'  => '</div>',
			)
		);
		?>

                </div>

                <?php  $next_post = get_next_post();
                                                 
                    if ($next_post) { ?>

                <div class="c-col-12 next-post-wrap">

                    <!-- Single Blog Post -->
                    <div class="single-blog-post post_horizontal">

                        <?php if (has_post_thumbnail($next_post->ID)) { ?>

                        <a class="cursor-text" href="<?php echo get_the_permalink($next_post->ID); ?>">


                            <!-- Blog Post Image -->
                            <div class="single-post-image">

                                <img src="<?php echo esc_url(get_the_post_thumbnail_url($next_post->ID)) ?>" >

                            </div>
                            <!--/ Blog Post Image -->

                        </a>

                        <?php } ?>

                        <!-- Post Details -->
                        <div class="post-details">

                            <!-- Meta -->
                            <div class="post-meta">

                                <div class="post-date"><?php nayla_posted_on($next_post->ID); ?></div>

                            </div>
                            <!--/ Meta -->

                            <!-- Title -->
                            <div class="post-title text-h3"><?php echo get_the_title($next_post->ID) ?></div>
                            <!--/ Title -->

                            <!-- Button -->
                            <div class="post-button text-h6">

                                <a href="<?php echo get_the_permalink($next_post->ID); ?>"><?php echo esc_html('Read Next Post' , 'nayla') ?></a>

                            </div>
                            <!--/ Button -->

                        </div>
                        <!--/ Post Details -->

                    </div>
                    <!--/ Single Blog Post -->

                </div>

                <?php } 
			// If comments are open or we have at least one comment, load up the comment template.
			if ( comments_open() || get_comments_number() ) : ?>

                <div class="c-col-12 nayla-post-comments">

                    <?php comments_template(); ?>

                </div>

                <?php endif; ?>


            </div>

        </div>



        <!-- Archive Post--><?php } else { ?>

        <?php if($thumb) { nayla_post_thumbnail(); }?>


        <!-- Post Details -->
        <div class="post-details">
            
            
             <?php if ($date || $category) { ?>
            
            <!-- Meta -->
            <div class="post-meta">


                <?php if ($date) { ?>
                <div class="post-date"><?php nayla_posted_on(); ?></div>

                <?php } ?>


                <?php if ($category) { ?>
                <div class="post-categories"><?php 		// Hide category and tag text for pages.
		if ( 'post' === get_post_type() ) {
			/* translators: used between list items, there is a space after the comma */
			$categories_list = get_the_category_list( esc_html__( ', ', 'nayla' ) );
			if ( $categories_list ) {
				/* translators: 1: list of categories. */
				printf( '<span class="cat-links">' . esc_html__( '%1$s', 'nayla' ) . '</span>', $categories_list ); // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
			}

		} ?></div>

                <?php } ?>

            </div>
            <!--/ Meta -->
            
            <?php } ?>
            
            <!-- Title -->
            <a href="<?php echo esc_url( get_permalink() ) ?>">
                <div class="post-title text-h4 entry-title"><?php the_title() ?></div>
            </a>
            <!--/ Title -->

            <?php if ($excerpt) { ?>
            <div class="post-excerpt">
                <?php the_excerpt() ?>
            </div>
            <?php } ?>

            <!-- Button -->
            <div class="post-button text-h6">

                <a href="<?php echo esc_url( get_permalink() ) ?>"><?php echo esc_html($read) ?></a>

            </div>
            <!--/ Button -->

        </div>
        <!--/ Post Details -->

        <?php  }  ?>



</article><!-- #post-<?php the_ID(); ?> -->
