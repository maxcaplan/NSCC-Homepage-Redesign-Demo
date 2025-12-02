import '@/scss/components/layout/sections/HeroSection/_index.scss';
import { HeroBanner } from './HeroBanner';
import { HeroCarousel } from './HeroCarousel';
import { HeroCarouselSlide } from './HeroCarouselSlide';
import { banner_image } from './banner_image';
import { slide_1_image, slide_2_image, slide_3_image, thumbnail_images } from './carousel_images';

/** Homepage hero section compontent */
export function HeroSection() {

	return (
		<section
			id="hero-section"
			class="page-section"
			aria-labelledby="hero-banner-title"
		>
			<div class="container">
				<HeroBanner
					image-sources={banner_image.sources}
					image-src={banner_image.src}
					image-width={banner_image.width}
					image-height={banner_image.height}
				/>

				<HeroCarousel
					thumbnails={thumbnail_images}
				>
					<HeroCarouselSlide
						title="Behavioural Interventions"
						{...slide_1_image}
					>
						<p>
							Make a meaningful impact in people’s lives. Apply behavioural science to support individuals of all ages in achieving their goals.
							<br />
							<a href="#">Learn about Behavioural Interventions</a>
						</p>
					</HeroCarouselSlide>

					<HeroCarouselSlide
						title="Transgender Awareness Week: November 13-19"
						{...slide_2_image}
					>
						<p>
							We support transgender, non-binary, and gender-diverse people and promote understanding of the challenges they and their families face daily.
							<br />
							<a href="#">Learn about Transgender Awareness Week</a>
						</p>
					</HeroCarouselSlide>

					<HeroCarouselSlide
						title="International Day of Persons with Disabilities"
						{...slide_3_image}
					>
						<p>
							We join others around the world in marking the International Day of Persons with Disabilities (IDPD) on December 3.
							<br />
							<a href="#">Learn More</a>
						</p>
					</HeroCarouselSlide>
				</HeroCarousel>
			</div>
		</section >
	)
}
