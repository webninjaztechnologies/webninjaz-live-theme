<?php // Template Name: Blog Detail TPL ?>
<?php get_header(); ?>
<?php 
$detail_id = get_the_ID(); 

?>

    <script>
    var deatilId = <?php echo json_encode(array("id" => $detail_id)); ?>; 
    </script>
<main>
        <section>
            <div class="single-prd-detail">
            <div class="container">
                
                <div class="case_title">
                    <h1><?php the_title(); ?></h1>
                    <?php
                        $post_terms = get_the_terms(get_the_ID(), 'product_type');
                        if ($post_terms && !is_wp_error($post_terms)) {
                            foreach ($post_terms as $term) {
                                ?>
                                <p>  <?php echo $term->name; ?></p>
                                <?php
                            }
                        }
                    ?>
                </div>
                <div class="single_listing text-center caseStudy pdr-ninja">
                    <a href="" class="live_website"><h4>LIVE WEBSITE</h4> <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 23 23" fill="none"> <path d="M0.93934 19.9393C0.353553 20.5251 0.353553 21.4749 0.93934 22.0607C1.52513 22.6464 2.47487 22.6464 3.06066 22.0607L0.93934 19.9393ZM22.5 2C22.5 1.17157 21.8284 0.5 21 0.500001L7.5 0.500001C6.67157 0.500001 6 1.17157 6 2C6 2.82843 6.67157 3.5 7.5 3.5L19.5 3.5L19.5 15.5C19.5 16.3284 20.1716 17 21 17C21.8284 17 22.5 16.3284 22.5 15.5L22.5 2ZM3.06066 22.0607L22.0607 3.06066L19.9393 0.939341L0.93934 19.9393L3.06066 22.0607Z" fill="white"/> </svg></a>
                    <!-- <h2>uppababy</h2> -->
                    <?php
                        $product_tab_banner_image = CFS()->get( 'product_tab_banner_image' ); // Retrieve the image field value

                        if ( $product_tab_banner_image ) { // Check if the image field value exists
                      ?>
                       <img class="pdrn-img" src="<?php echo esc_url( $product_tab_banner_image ); ?>" alt="">
                    <?php
                         }
                    ?>

                    <div class="pdr-ninja-mbo">
                        <img src="<?php echo get_stylesheet_directory_uri(); ?>/assets/images/prd-mb-1.svg" alt="">
                    </div>
                    
                </div>

            <!-- </div> -->
        <!-- </section> -->

    



<!-- code added by vikas on 24rd apr 24 -->
<!-- <section> -->
    <?php $product_Description = CFS()->get('product_description', get_the_ID()); ?>
            <!-- <div class="container"> -->
                <div class="case_study_tabs">
                    <div class="row">
                        <div class="col-md-4">
                            <div id="tabsMenu" class="sticky-tabs">
                                <?php 
                                foreach ($product_Description as $key => $value) {
                                    $act = $key == 0 ? "active": "";
                                    echo '<div class="cs_tab '.$act.'" data-id="'.$key.'Tab">'.$value['product_tab_name'].'</div>';
                                }
                                ?>

                            </div>
                        </div>
                        <div class="col-md-8 ps-lg-5">  
                            <?php 
                                foreach ($product_Description as $key => $value) {
                                    $act = $key == 0 ? "active": "";
                                    echo '<div class="tab_content_cs" id="'.$key.'Tab">';
                                    echo '<h4>'.$value['product_tab_heading'].'</h4>';
                                   if(!empty($value['product_tab_paragraph'])){ echo '<p>'.$value['product_tab_paragraph'].'</p>'; }
                                   
                                   if(!empty($value['product_tab_list_points'])){
                                       foreach ($value['product_tab_list_points'][0]['product_tab_subheading_with_list'] as $key1 => $value1) {
                                           if(!empty($value1['product_tab_add_subheading'])){
                                               echo '<h5>'.$value1['product_tab_add_subheading'].'</h5>';
                                            }
                                            if(!empty($value1['product_tab_add_list'])){
                                                echo '<ul>';
                                                foreach ($value1['product_tab_add_list'] as $key_li => $li_value) {
                                                    echo ' <li> <p>'.$li_value['product_tab_list_item'].'</p> </li>';
                                                }
                                                echo '</ul>';
                                            }
                                        }
                                    }
                                    
                                    if(!empty($value['product_tab_image_for_desktop'])){ echo '<img class="uppababy-cs1-desktop" src="'.$value['product_tab_image_for_desktop'].'" alt="">';}
                                     if(!empty($value['product_tab_image_for_mobile'])){echo '<div class="uppababy-cs1-mobile">
                                             <img src="'.$value['product_tab_image_for_mobile'].'" alt="">
                                          </div>';}
                                    echo '</div>';
                                }
                            ?>
                        </div>
                    </div>
                </div>
            </div>
            </div>
              <!-- ===back to top======== -->
        <button id="back-to-top-btn" title="Back to Top">&#8593;</button>
        </section>

<!-- end by laksh 24 ap4 24 -->



    </main>

<?php get_footer(); ?>