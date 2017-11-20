<?php get_header(); ?>

<?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>
<div class="row">
	<div class="large-8 large-centered columns">
		<h1><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h1>
		<p><em><?php the_time('l, F jS, Y'); ?></em></p>
		<hr>
		<?php the_content(); ?>
	</div>
</div>
<?php endwhile; else: ?>
	<p><?php _e('Sorry, there are no posts.'); ?></p>
<?php endif; ?>

<?php get_footer(); ?>