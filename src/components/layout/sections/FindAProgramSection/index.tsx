import "@/scss/components/layout/sections/FindAProgramSection/_index.scss"
import { InfoCard } from "./InfoCard"
import { Tabs } from "@/components/Tabs"
import { Tab } from "@/components/Tabs/Tab"
import { TabPanel } from "@/components/Tabs/TabPanel"
import { Button } from "@/components/Button"
import { Icon } from "@/components/Icon"
import { FormField } from "@/components/FormField"

export function FindAProgramSection() {
	return (
		<section
			id="find-a-program-section"
			class="page-section"
			aria-labelledby="find-a-program"
		>
			<div class="container">
				<div>
					<div class="page-section-heading">
						<h2 id="find-a-program">
							Find a Program
						</h2>
						<p>
							Search over 140+ certificate and diploma programs.
						</p>
					</div>

					<InfoCard class="program-info-card-large" />
				</div>

				<div>
					<Tabs>
						<Tab active>Programs</Tab>
						<Tab>Continuing Education</Tab>

						<TabPanel active>
							<div class="panel-buttons">
								<Button href="#" color="secondary" animate-icon>
									View all programs
									<Icon icon="chevron-right" />
								</Button>

								<Button href="#" color="secondary" animate-icon>
									View online programs
									<Icon icon="chevron-right" />
								</Button>
							</div>

							<form class="panel-form">
								<div class="panel-form-header">
									<h3>Program Search</h3>
									<p>Fill in 1 (one) or more fields to search for a program</p>
								</div>

								<FormField
									type="text"
									label="Keyword"
									name="keyword"
									input-id="program-keyword"
									placeholder="Programming..."
								/>

								<FormField
									type="select"
									label="Area of interest"
									name="interest"
									input-id="program-interest"
									placeholder="Select area of interest..."
								>
									<option value="A01">Academic Upgrading and Skills Development</option>
									<option value="B05">Building and Manufacturing</option>
									<option value="B01">Business</option>
									<option value="C05">Creative Industries</option>
									<option value="E02">Education</option>
									<option value="E01">Engineering Technologies</option>
									<option value="E05">Environment, Sustainability and Natural Resources&nbsp;</option>
									<option value="H05">Health and Wellness</option>
									<option value="I05">IT and Data Analytics</option>
									<option value="L01">Language and Cultural Studies</option>
									<option value="M05">Marine</option>
									<option value="S05">Social and Community Supports</option>
									<option value="S10">Surveying, Mapping, and Geomatics</option>
									<option value="C01">Tourism and culinary</option>
									<option value="T10">Transportation</option>
								</FormField>

								<FormField
									type="select"
									label="Campus"
									name="campus"
									input-id="program-campus"
									placeholder="Select campus..."
								>
									<option value="AKERL">Akerley Campus</option>
									<option value="ANNAP">Annapolis Valley Campus</option>
									<option value="BURRI">Burridge Campus</option>
									<option value="CUMBE">Cumberland Campus</option>
									<option value="VIRTL">eCampus</option>
									<option value="INSTI">Institute of Technology Campus</option>
									<option value="WATER">Ivany Campus</option>
									<option value="KINGS">Kingstec Campus</option>
									<option value="LUNEN">Lunenburg Campus</option>
									<option value="PICTO">Pictou Campus</option>
									<option value="SHELB">Shelburne Campus</option>
									<option value="STRAT">Strait Area Campus</option>
									<option value="SYDNE">Sydney Waterfront Campus</option>
									<option value="TRURO">Truro Campus</option>
								</FormField>

								<hr />

								<div class="panel-form-footer">
									<Button type="submit" color="primary" animate-icon>
										Search <Icon icon="arrow-right" />
									</Button>

									<Button href="#" color="light">
										Advanced search
									</Button>
								</div>
							</form>
						</TabPanel>

						<TabPanel>
							<div class="panel-buttons">
								<Button href="#" color="secondary" animate-icon>
									View all courses
									<Icon icon="chevron-right" />
								</Button>
							</div>

							<form class="panel-form">
								<div class="panel-form-header">
									<h3>Continuing Education Search</h3>
									<p>Fill in 1 (one) or more fields to search for a course</p>
								</div>

								<FormField
									type="text"
									label="Keyword"
									name="keyword"
									input-id="continuing-keyword"
									placeholder="Programming..."
								/>

								<FormField
									type="select"
									label="Category"
									name="category"
									input-id="continuing-category"
									placeholder="Select category..."
								>
									<option value="ACADUPGRD">Academic Upgrading</option>
									<option value="CARPROFDEV">Career and Professional Development</option>
									<option value="GENINTERES">Personal Interest</option>
								</FormField>

								<FormField
									type="select"
									label="Campus"
									name="campus"
									input-id="continuing-campus"
									placeholder="Select campus..."
								>
									<option value="AKERL">Akerley Campus</option>
									<option value="ANNAP">Annapolis Valley Campus</option>
									<option value="BURRI">Burridge Campus</option>
									<option value="CUMBE">Cumberland Campus</option>
									<option value="VIRTL">eCampus</option>
									<option value="INSTI">Institute of Technology Campus</option>
									<option value="WATER">Ivany Campus</option>
									<option value="KINGS">Kingstec Campus</option>
									<option value="LUNEN">Lunenburg Campus</option>
									<option value="PICTO">Pictou Campus</option>
									<option value="SHELB">Shelburne Campus</option>
									<option value="STRAT">Strait Area Campus</option>
									<option value="SYDNE">Sydney Waterfront Campus</option>
									<option value="TRURO">Truro Campus</option>
								</FormField>

								<hr />

								<div class="panel-form-footer">
									<Button type="submit" color="primary" animate-icon>
										Search <Icon icon="arrow-right" />
									</Button>
								</div>
							</form>
						</TabPanel>
					</Tabs>

					<InfoCard />
				</div>
			</div>
		</section>
	)
}
