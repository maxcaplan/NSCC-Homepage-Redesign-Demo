import '@/scss/components/layout/sections/HeroSection/_index.scss';
import { HeroBanner } from './HeroBanner';
import { HeroCarousel } from './HeroCarousel';

export function HeroSection() {
	return (
		<section id="hero" class="section">
			<div class="container">
				<HeroBanner
					img-sources={[
						{
							srcset: "/images/banner/banner-large.jpg",
							media: "large",
							width: 947,
							height: 364,
						},
						{
							srcset: "/images/banner/banner-medium.jpg",
							media: "medium",
							width: 1275,
							height: 490,
						},
						{
							srcset: "/images/banner/banner-small.jpg",
							media: "small",
							width: 490,
							height: 490
						}
					]}
					img-src="/images/banner/banner-medium.jpg"
					img-width={1275}
					img-height={490}
				/>

				<HeroCarousel img-srcs={[]} />
			</div>
		</section>
	)
}
