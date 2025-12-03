import { Image } from "@/components/Image"
import "@/scss/components/layout/sections/LandAcknowledgement/_index.scss"

import ImageLarge from "/images/land-acknowledgement/land-acknowledgement-large.jpg"
import ImageMedium from "/images/land-acknowledgement/land-acknowledgement-medium.jpg"
import ImageSmall from "/images/land-acknowledgement/land-acknowledgement-small.jpg"

/** Land acknowledgement page section component */
export function LandAcknowledgementSection() {
	return (
		<section
			id="land-acknowledgment-section"
			aria-labelledby="land-acknowledgement"
		>
			<div class="acknowledgement-image">
				<Image
					sources={[
						{
							srcset: ImageLarge,
							media: 'large',
							width: 800,
							height: 450,
						},
						{
							srcset: ImageMedium,
							media: 'medium',
							width: 600,
							height: 350,
						},
						{
							srcset: ImageSmall,
							media: 'small',
							width: 600,
							height: 200,
						},
					]}
					src={ImageLarge}
					width={800}
					height={450}
					loading="lazy"
				/>
			</div>

			<div class="acknowledgement-container">
				<div class="acknowledgement-body">
					<div class="page-section-heading">
						<h2
							id="land-acknowledgement"
						>
							Land Acknowledgement
						</h2>
					</div>

					<p>
						NSCC is located in Mi’kma’ki, the unceded territory and traditional homeland of the Mi’kmaq Nation. Our relationship is based on a series of peace and friendship treaties between the Mi’kmaq Nation and the Crown, dating back to 1725.
						<br />
						<br />
						As Treaty beneficiaries, we recognize that we are all Treaty People.
					</p>
				</div>
			</div>
		</section>
	)
}
