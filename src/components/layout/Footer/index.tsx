import { Icon } from "@/components/Icon";
import { Logo } from "@/components/Logo";
import "@/scss/components/layout/_Footer.scss";

export function Footer() {
	return (
		<footer id="page-footer">
			<div class="page-section footer-top">
				<div class="container">
					<div class="footer-blurb">
						<Logo href="#" label="Scroll to top" />

						<p>
							NSCC offers more than 140 programs at 14 campuses across Nova Scotia with inclusive and flexible access to education and specialized, industry-driven training.
						</p>
					</div>

					<div class="footer-about-nav">
						<h4>About</h4>

						<div class="footer-nav-links">
							<a href="#">
								Jobs
							</a>
							<a href="#">
								Media
							</a>
							<a href="#">
								Foundation
							</a>
							<a href="#">
								Alumni
							</a>
						</div>
					</div>

					<div class="footer-contact-nav">
						<h4>Contact</h4>

						<div class="footer-nav-links">
							<a href="#">
								Employee directory
							</a>
							<a href="#">
								Contact
							</a>
						</div>
					</div>

					<div class="footer-social-links">
						<a
							aria-label="NSCC Facebook page"
							title="NSCC Facebook page"
							href="https://www.facebook.com/NovaScotiaCommunityCollege"
							target="_blank"
						>
							<Icon icon="facebook-square-solid" size="xl" />
						</a>

						<a
							aria-label="NSCC Instagram page"
							title="NSCC Instagram page"
							href="https://www.instagram.com/novascotiacommunitycollege/"
							target="_blank"
						>
							<Icon icon="instagram-square-solid" size="xl" />
						</a>

						<a
							aria-label="NSCC Linkedin page"
							title="NSCC Linkedin page"
							href="https://ca.linkedin.com/school/nova-scotia-community-college/"
							target="_blank"
						>
							<Icon icon="linkedin-square-solid" size="xl" />
						</a>

						<a
							aria-label="NSCC Youtube page"
							title="NSCC Youtube page"
							href="https://www.youtube.com/user/nsccweb"
							target="_blank"
						>
							<Icon icon="youtube-square-solid" size="xl" />
						</a>

						<a
							aria-label="NSCC TikTok page"
							title="NSCC TikTok page"
							href="https://www.tiktok.com/@nsccofficial"
							target="_blank"
						>
							<Icon icon="tiktok-square-solid" size="xl" />
						</a>
					</div>
				</div>
			</div>

			<div class="page-section footer-bottom">
				<div class="container ">
					<div class="footer-bottom-nav">
						<span>|</span>

						<a
							aria-label="nscc.ca privacy policy"
							title="nscc.ca privacy policy"
							href="#"
						>
							Privacy
						</a>

						<span>|</span>

						<a
							aria-label="nscc.ca disclaimer"
							title="nscc.ca disclaimer"
							href="#"
						>
							Disclaimer
						</a>

						<span>|</span>

						<a
							aria-label="nscc.ca sitemap"
							title="nscc.ca sitemap"
							href="#"
						>
							Sitemap
						</a>
					</div>

					<p class="footer-copyright">
						&copy; 2025 NSCC - Nova Scotia Community College
					</p>

					<p class="footer-google-terms">
						This site is protected by reCAPTCHA and the <a href="#">Google Privacy Policy</a> and <a href="#">Google Terms of Service</a> apply.
					</p>
				</div>
			</div>
		</footer>
	)
}
