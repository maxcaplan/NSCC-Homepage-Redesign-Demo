import { Button } from "@/components/Button";
import { Icon } from "@/components/Icon";
import { Image, type ImageSource } from "@/components/Image";
import "@/scss/components/layout/sections/HeroSection/_HeroBanner.scss"

interface HeroBannerProps {
	/** Source for banner image */
	"image-src"?: string;
	/** Sources for banner image */
	"image-sources"?: ImageSource[]
	/** width attribute value of img tag */
	"image-width"?: string | number;
	/** height attribute value of img tag */
	"image-height"?: string | number;
}

/** Hero section banner component */
export function HeroBanner(props: HeroBannerProps) {
	return (
		<div class="hero-banner">
			<div class="hero-banner-image-wrapper">
				<Image
					src={props["image-src"]}
					sources={props["image-sources"]}
					fetchpriority={"high"}
					class="hero-banner-image"
					width={props["image-width"]}
					height={props["image-height"]}
				/>
			</div>

			<div class="hero-banner-body">
				<h1
					id="hero-banner-title"
					class="hero-banner-header">
					Become a Student
				</h1>

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
