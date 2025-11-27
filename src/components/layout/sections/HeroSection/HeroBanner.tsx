import { Button } from "@/components/Button";
import { Icon } from "@/components/Icon";
import { Image, type ImageSource } from "@/components/Image";
import "@/scss/components/layout/sections/HeroSection/_HeroBanner.scss"

interface HeroBannerProps {
	/** Source for banner image */
	"img-src"?: string;
	/** Sources for banner image */
	"img-sources"?: ImageSource[]
	/** width attribute value of img tag */
	"img-width"?: string | number;
	/** height attribute value of img tag */
	"img-height"?: string | number;
}

/** Hero section banner component */
export function HeroBanner(props: HeroBannerProps) {
	return (
		<div class="hero-banner">
			<div class="hero-banner-image-wrapper">
				<Image
					src={props["img-src"]}
					sources={props["img-sources"]}
					fetchpriority={"high"}
					class="hero-banner-image"
					width={props["img-width"]}
					height={props["img-height"]}
				/>
			</div>

			<div class="hero-banner-body">
				<h1 class="hero-banner-header">Become a Student</h1>

				<p class="hero-banner-paragraph">
					We believe the future lies in the power of learning, which is why we care about the success of every student – in education, in career and in life.
				</p>

				<div class="hero-banner-buttons">
					<Button color="accent" animate-icon={true} class="banner-button apply-button">
						<span>Apply today</span>
						<Icon icon="arrow-right" size="md" />
					</Button>
					<Button color="neutral" class="banner-button">
						Find a program
					</Button>
				</div>
			</div>
		</div>
	)
}
