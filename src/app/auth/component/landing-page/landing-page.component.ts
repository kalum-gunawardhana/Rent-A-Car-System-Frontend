import { Component } from '@angular/core';
import { HeroSectionComponent } from "./hero-section/hero-section.component";
import { FeaturesSectionComponent } from "./features-section/features-section.component";
import { CarListSectionComponent } from "./car-list-section/car-list-section.component";
import { TestimonialSectionComponent } from "./testimonial-section/testimonial-section.component";
import { NewsletterSectionComponent } from "./newsletter-section/newsletter-section.component";
import { FooterSectionComponent } from "./footer-section/footer-section.component";

@Component({
  selector: 'app-landing-page',
  imports: [HeroSectionComponent, FeaturesSectionComponent, CarListSectionComponent, TestimonialSectionComponent, NewsletterSectionComponent, FooterSectionComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})
export class LandingPageComponent {

}
