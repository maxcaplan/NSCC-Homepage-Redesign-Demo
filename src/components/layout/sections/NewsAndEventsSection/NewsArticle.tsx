import { Icon } from "@/components/Icon"
import "@/scss/components/layout/sections/NewsAndEventsSection/_NewsArticle.scss"
import { format_date, type DateObject } from "@/util/time_and_date"
import type { ComponentChildren } from "preact"

interface NewsArticleProps {
	title: string
	date: DateObject
	publisher: string
	"news-id"?: string
	children?: ComponentChildren
}

export function NewsArticle(props: NewsArticleProps) {
	return (
		<article
			aria-labelledby={props["news-id"]}
			class="news-article"
		>
			<div aria-hidden="true" class="news-article-header">
				<Icon icon="newspaper-solid" size="lg" /> NSCC in the News
			</div>

			<div class="news-article-body">
				<a href="#" class="news-article-title">
					<h3 id={props["news-id"]}>
						{props.title}
					</h3>

					<span class="title-icon-wrapper">
						<Icon icon="box-arrow-up-right" size="heading" />
					</span>
				</a>

				<div class="news-article-content">
					{props.children}
				</div>
			</div>

			<div class="news-article-footer">
				<span>
					{format_date(props.date)}
				</span>
				<b>
					&bull;
				</b>
				<span>
					{props.publisher}
				</span>
			</div>
		</article>
	)
}
