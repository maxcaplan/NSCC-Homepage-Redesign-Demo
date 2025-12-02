import "@/scss/components/layout/sections/FindAProgramSection/_InfoCard.scss"
import { Button } from "@/components/Button";
import { Icon } from "@/components/Icon";
import { append_classes } from "@/util/classes";

interface InfoCardProps {
	/** class attribute value for div element */
	class?: string
}

export function InfoCard(props: InfoCardProps) {
	return (
		<div class={append_classes("program-info-card", props.class)}>
			<div class="program-info-card-header">
				<h3>
					Information for:
				</h3>

				<Icon icon="info-circle-solid" size="lg" />
			</div>
			<div class="program-info-card-body">
				<Button href="#" color="accent" animate-icon >
					International students
					<Icon icon="chevron-right" size="md" />
				</Button>

				<Button href="#" color="accent" animate-icon >
					Employers and industry
					<Icon icon="chevron-right" size="md" />
				</Button>
			</div>
		</div>
	)
}
