"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FeatureCardEight from '@/components/sections/feature/FeatureCardEight';
import FooterSimple from '@/components/sections/footer/FooterSimple';
import HeroSplitTestimonial from '@/components/sections/hero/HeroSplitTestimonial';
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import TestimonialCardFive from '@/components/sections/testimonial/TestimonialCardFive';
import TextAbout from '@/components/sections/about/TextAbout';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="text-shift"
        defaultTextAnimation="entrance-slide"
        borderRadius="soft"
        contentWidth="mediumSmall"
        sizing="largeSizeMediumTitles"
        background="aurora"
        cardStyle="gradient-radial"
        primaryButtonStyle="shadow"
        secondaryButtonStyle="layered"
        headingFontWeight="bold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleCentered
      navItems={[
        {
          name: "Home",          id: "hero"},
        {
          name: "Services",          id: "services"},
        {
          name: "About",          id: "about"},
        {
          name: "Contact",          id: "contact"},
      ]}
      brandName="Sun Automotive"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroSplitTestimonial
      useInvertedBackground={false}
      background={{
        variant: "gradient-bars"}}
      title="Honest Work. Expert Hands. Every Time."
      description="Webster's Most Trusted Auto Shop. Join hundreds of satisfied neighbors who trust their vehicles to our expert team. Rated 4.9 stars by 92+ happy clients."
      testimonials={[
        {
          name: "Sarah Miller",          handle: "@smiller",          testimonial: "Truly the most honest shop I've ever found in Webster.",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/serious-blond-woman-auto-mechanic-her-young-colleague-are-posing-photographer_613910-17068.jpg?_wi=1",          imageAlt: "luxury car dark garage professional"},
        {
          name: "James R.",          handle: "@jr",          testimonial: "Fair pricing and expert care, every single time.",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/two-bearded-brutal-mechanics-repair-car-lift-garage-repairing-car-suspension-service-station_613910-6641.jpg?_wi=1",          imageAlt: "luxury car dark garage professional"},
        {
          name: "Mark Stevens",          handle: "@mstevens",          testimonial: "They diagnosed my issue in minutes. Absolutely professional.",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/set-mechanical-tools-professional-car-mechanic-using-different-tools-working_146671-19065.jpg?_wi=1",          imageAlt: "luxury car dark garage professional"},
        {
          name: "Elena P.",          handle: "@elena_p",          testimonial: "The best experience I've had with an auto shop in years.",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/man-doing-repairs-car-engine_23-2148254112.jpg?_wi=1",          imageAlt: "luxury car dark garage professional"},
        {
          name: "David W.",          handle: "@dwalker",          testimonial: "Transparent, quick, and very thorough. Highly recommended.",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-man-woman-talking_23-2150171273.jpg?_wi=1",          imageAlt: "luxury car dark garage professional"},
      ]}
      buttons={[
        { text: "Book an Appointment", href: "#contact" },
        { text: "Call (585) 265-3020", href: "tel:5852653020" },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/serious-blond-woman-auto-mechanic-her-young-colleague-are-posing-photographer_613910-17068.jpg?_wi=2"
      imageAlt="Sun Automotive luxury service"
      mediaAnimation="blur-reveal"
      avatars={[
        { src: "http://img.b2bpic.net/free-photo/portrait-beautiful-woman-looking-camera_23-2148304959.jpg", alt: "Customer portrait 1"},
        { src: "http://img.b2bpic.net/free-photo/portrait-beautiful-young-business-woman_158595-4750.jpg", alt: "Customer portrait 2"},
        { src: "http://img.b2bpic.net/free-photo/portrait-stylish-woman-posing-fashionable-outfit_23-2149021814.jpg", alt: "Customer portrait 3"},
        { src: "http://img.b2bpic.net/free-photo/portrait-salesman-car-dealership_23-2148130114.jpg", alt: "Customer portrait 4"},
        { src: "http://img.b2bpic.net/free-photo/man-buying-car-showroom_1303-14589.jpg", alt: "Customer portrait 5"},
      ]}
      marqueeItems={[
        { type: "text", text: "Quality Diagnostics"},
        { type: "text", text: "NYS Inspection Experts"},
        { type: "text", text: "Full Engine Service"},
        { type: "text", text: "Trusted Webster Local"},
        { type: "text", text: "Premium Care"},
      ]}
    />
  </div>

  <div id="trust" data-section="trust">
      <SocialProofOne
      textboxLayout="default"
      useInvertedBackground={true}
      names={[
        "⭐ 4.9/5 Rating",        "92 Google Reviews",        "10+ Years Serving Webster",        "Transparent Pricing",        "Master Technicians",        "Expert Diagnostics",        "Honest Advice"]}
      title="Why Neighbors Trust Us"
      description="Excellence verified by years of local service."
    />
  </div>

  <div id="about" data-section="about">
      <TextAbout
      useInvertedBackground={false}
      title="Not Your Average Mechanic"
      buttons={[
        {
          text: "Learn About Our Mission",          href: "#"},
      ]}
    />
  </div>

  <div id="services" data-section="services">
      <FeatureCardEight
      textboxLayout="default"
      useInvertedBackground={true}
      features={[
        {
          title: "NYS Inspections",          description: "Quick, compliant, and reliable state inspections.",          imageSrc: "http://img.b2bpic.net/free-photo/set-mechanical-tools-professional-car-mechanic-using-different-tools-working_146671-19065.jpg?_wi=2"},
        {
          title: "Engine Repair",          description: "Advanced diagnostics and expert engine replacement.",          imageSrc: "http://img.b2bpic.net/free-photo/man-doing-repairs-car-engine_23-2148254112.jpg?_wi=2"},
        {
          title: "Brake Service",          description: "High-performance brake maintenance and repair.",          imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-man-woman-talking_23-2150171273.jpg?_wi=2"},
      ]}
      title="Premium Automotive Services"
      description="Comprehensive maintenance and repair services tailored to your vehicle's needs."
    />
  </div>

  <div id="reviews" data-section="reviews">
      <TestimonialCardFive
      textboxLayout="default"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "1",          name: "Sarah Johnson",          date: "Oct 2023",          title: "Loyal Customer",          quote: "Amazing customer service, no bull, honest work.",          tag: "Verified",          avatarSrc: "http://img.b2bpic.net/free-photo/happy-customer-car-mechanic-shaking-hands-while-greeting-auto-repair-shop_637285-7698.jpg",          imageSrc: "http://img.b2bpic.net/free-photo/serious-blond-woman-auto-mechanic-her-young-colleague-are-posing-photographer_613910-17068.jpg?_wi=3",          imageAlt: "happy car owner professional portrait"},
        {
          id: "2",          name: "Mark Stevens",          date: "Nov 2023",          title: "Car Enthusiast",          quote: "I trust him. His prices are fair.",          tag: "Verified",          avatarSrc: "http://img.b2bpic.net/free-photo/portrait-young-female-dentist-dentistry-concept-dental-treatment_169016-66975.jpg",          imageSrc: "http://img.b2bpic.net/free-photo/two-bearded-brutal-mechanics-repair-car-lift-garage-repairing-car-suspension-service-station_613910-6641.jpg?_wi=2",          imageAlt: "happy car owner professional portrait"},
        {
          id: "3",          name: "Emily Rodriguez",          date: "Jan 2024",          title: "Frequent Driver",          quote: "You won't find a more honest, genuine, polite, caring guy around.",          tag: "Verified",          avatarSrc: "http://img.b2bpic.net/free-photo/business-man-sharing-idea-with-colleague_23-2148336895.jpg",          imageSrc: "http://img.b2bpic.net/free-photo/set-mechanical-tools-professional-car-mechanic-using-different-tools-working_146671-19065.jpg?_wi=3",          imageAlt: "happy car owner professional portrait"},
        {
          id: "4",          name: "David Kim",          date: "Feb 2024",          title: "Client",          quote: "Simply the best service experience in Webster.",          tag: "Verified",          avatarSrc: "http://img.b2bpic.net/free-photo/portrait-smiling-mature-businessman-with-crossed-arms_23-2147956339.jpg",          imageSrc: "http://img.b2bpic.net/free-photo/man-doing-repairs-car-engine_23-2148254112.jpg?_wi=3",          imageAlt: "happy car owner professional portrait"},
        {
          id: "5",          name: "Jessica Lee",          date: "Mar 2024",          title: "Customer",          quote: "Professional, fast, and fair pricing.",          tag: "Verified",          avatarSrc: "http://img.b2bpic.net/free-photo/alone-specialist-handsome-daydreaming-collar_1262-870.jpg",          imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-man-woman-talking_23-2150171273.jpg?_wi=3",          imageAlt: "happy car owner professional portrait"},
      ]}
      title="Client Success Stories"
      description="Hear directly from those who trust our hands."
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactSplitForm
      useInvertedBackground={true}
      title="Visit Us in Webster"
      description="Stop in or give us a call at (585) 265-3020. Located at 92 E Main St, Webster, NY 14580."
      inputs={[
        {
          name: "name",          type: "text",          placeholder: "Your Name",          required: true,
        },
        {
          name: "email",          type: "email",          placeholder: "Your Email",          required: true,
        },
      ]}
      textarea={{
        name: "message",        placeholder: "How can we help with your vehicle?",        rows: 4,
        required: true,
      }}
      imageSrc="http://img.b2bpic.net/free-photo/stylish-elegant-couple-car-salon_1157-22679.jpg"
      onSubmit={(data) => {
         const mailtoLink = `mailto:appointments@sunautomotive.com?subject=Booking Request from ${data.name}&body=Message: ${data.message}%0A%0AEmail: ${data.email}`;
         window.location.href = mailtoLink;
         alert("Thank you! Your request has been initiated.");
      }}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterSimple
      columns={[
        {
          title: "Sun Automotive",          items: [
            {
              label: "92 E Main St, Webster, NY 14580",              href: "#"},
            {
              label: "(585) 265-3020",              href: "tel:5852653020"},
          ],
        },
        {
          title: "Hours",          items: [
            {
              label: "Mon–Wed & Fri: 8:15 AM - 6 PM",              href: "#"},
            {
              label: "Closed: Sat–Sun",              href: "#"},
          ],
        },
      ]}
      bottomLeftText="© 2024 Sun Automotive. All rights reserved."
      bottomRightText="Crafted with precision."
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}