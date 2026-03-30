<high_level_design>
**1. Brand & Art Direction Overview**

Bold, rebellious youth brand with strong attitude-driven design. Uses vibrant, high-contrast color schemes with electric purple as the dominant brand color. Features playful, cartoonish mascot characters and graffiti-style typography mixed with clean modern fonts. Emphasizes transparency and authenticity with an irreverent, no-BS tone. Design feels fresh, energetic, and anti-establishment while maintaining professional credibility through clean layouts and structured information hierarchy.

**2. Color Palette**

| Token | HEX / RGB | Usage | Notes |
|-------|-----------|-------|-------|
| Primary Purple | #7B3AF0 | Main brand color, backgrounds, CTAs | Electric violet, high energy |
| Secondary Purple | #9B59F3 | Accent elements, gradients | Lighter purple variant |
| Deep Purple | #4A1A8A | Dark sections, text overlays | Darker brand variant |
| Bright Yellow | #FFD700 | Warning strips, accent elements | High contrast with purple |
| Mint Green | #7FFFD4 | Section headers, positive messaging | Fresh, clean contrast |
| White | #FFFFFF | Text, backgrounds, cards | Clean contrast |
| Black | #000000 | Text, CTA buttons | High contrast readability |
| Dark Navy | #1A1A2E | Large typography, section headers | Bold text color |
| Orange | #FF6B35 | Icons, accent elements | Energy and warmth |

**3. Typography Scale**

- **Display Headlines**: Bold, condensed sans-serif (Black weight) - 72px-120px
- **Section Headers**: Bold sans-serif - 48px-64px  
- **Subheadings**: Semi-bold sans-serif - 24px-32px
- **Body Text**: Regular sans-serif - 16px-18px
- **Small Text**: Regular sans-serif - 14px
- **Button Text**: Bold sans-serif - 16px-18px
- **Brand Logo**: Custom stylized font with playful character

**4. Spacing & Layout Grid**

- **Container Max-Width**: 1200px
- **Section Padding**: 80px-120px vertical
- **Element Spacing**: 24px, 32px, 48px, 64px increments
- **Grid**: Flexible layout with full-width sections
- **Cards**: 24px padding, 16px border radius
- **Buttons**: 16px vertical, 32px horizontal padding

**5. Visual Effects & Treatments**

- **Shadows**: Subtle box-shadow: 0 8px 32px rgba(0,0,0,0.1)
- **Border Radius**: 16px for cards, 8px for buttons
- **Gradients**: Linear purple gradients on hero sections
- **Animations**: Smooth hover transitions (0.3s ease)
- **Overlays**: Semi-transparent color overlays on images
- **Pattern Elements**: Decorative doodles and abstract shapes
- **Warning Tape**: Yellow caution tape design element

**6. Component Styles**

- **Navigation**: Clean horizontal nav with purple branding, cart icon
- **Hero Section**: Full-width with purple gradient background, large product imagery
- **Feature Cards**: White cards with colored backgrounds, icon + text layout
- **Product Cards**: Clean white cards with product imagery, pricing, and CTA buttons
- **Testimonial Cards**: White rounded cards with quotes and attribution
- **CTA Buttons**: Black buttons with white text, rounded corners
- **Icon Set**: Custom illustrated icons in brand colors
- **Form Elements**: Clean inputs with subtle styling

**7. Site Sections**

1. **Navigation Header** - Logo, menu items (Shop, Blog), cart icon
2. **Hero Section** - Large headline "FU*K REGULAR SODA", product imagery, brand tagline
3. **Scrolling Tagline** - Moving text "India's First Prebiotic Soda"
4. **Value Proposition** - "WE ARE HERE TO MAKE SODA HEALTHIER" with feature icons
5. **Character Animation Section** - "SIP THIS NOT THAT" with mascot characters
6. **Features Grid** - 6 feature cards explaining product benefits with icons
7. **Product Showcase** - Individual product sections with detailed information
8. **Testimonials** - Customer review cards with quotes and attribution
9. **Brand Story** - "Two Brothers On A Journey" section with founder photo
10. **Transparency Section** - Lab report download with scientific imagery
11. **Footer** - Links, payment methods, social media, contact information
</high_level_design>

<theme>
light
</theme>

<sections>
<clone_section>
    <file_path>src/components/sections/navigation.tsx</file_path>
    <design_instructions>
    Clone the navigation header section with purple branding and modern navigation layout. Create a clean header with "Purple Pandaa" logo placement on the left, center navigation menu items for "Services", "Portfolio", and "Blog", and a cart/contact icon on the right. Use the same purple gradient background (#8B5CF6 to #7C3AED) with white text, maintaining the sleek typography and responsive design patterns. Include mobile hamburger menu functionality and smooth hover transitions.
    </design_instructions>
    <assets>["https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/646419b2-2ffb-45de-9b9a-3a4bb37e17fc-drinkmisfits-com/assets/images/logo-1.png?"]</assets>
  </clone_section>

  <clone_section>
    <file_path>src/components/sections/hero-section.tsx</file_path>
    <design_instructions>
    Clone the bold hero section with large typography and vibrant purple gradient background. Create a powerful headline reading "FU*K REGULAR AGENCIES" in large white bold letters, followed by "Social Media Agency" subtitle. Include animated character illustrations and decorative elements floating around the text. Add a scrolling text banner below showing "Purple Pandaa's First Creative Agency" repeatedly. Use the same purple gradient background (#8B5CF6 to #A855F7) with dynamic visual elements and purple decorative graphics scattered throughout.
    </design_instructions>
    <assets>["https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/646419b2-2ffb-45de-9b9a-3a4bb37e17fc-drinkmisfits-com/assets/images/sliderbg-desktop-2.png?", "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/646419b2-2ffb-45de-9b9a-3a4bb37e17fc-drinkmisfits-com/assets/images/sliderbg-mobile-3.png?", "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/646419b2-2ffb-45de-9b9a-3a4bb37e17fc-drinkmisfits-com/assets/images/mango-4.png?", "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/646419b2-2ffb-45de-9b9a-3a4bb37e17fc-drinkmisfits-com/assets/images/soda-2-5.png?"]</assets>
  </clone_section>

  <clone_section>
    <file_path>src/components/sections/lifestyle-banner.tsx</file_path>
    <design_instructions>
    Clone the lifestyle banner section featuring a vibrant street art backdrop with diverse young people in casual wear. Create a curved wave overlay at the bottom and include a scrolling text banner reading "Purple Pandaa's First Creative Agency" repeatedly. The section should have the same retro aesthetic with colorful murals and urban styling, showcasing the modern creative vibe of the agency with cool, trendy people representing the target demographic.
    </design_instructions>
    <assets>["https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/646419b2-2ffb-45de-9b9a-3a4bb37e17fc-drinkmisfits-com/assets/images/radio2-6.jpg?", "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/646419b2-2ffb-45de-9b9a-3a4bb37e17fc-drinkmisfits-com/assets/images/radio-mobile-7.png?", "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/646419b2-2ffb-45de-9b9a-3a4bb37e17fc-drinkmisfits-com/assets/svgs/wave-1.svg?"]</assets>
  </clone_section>

  <clone_section>
    <file_path>src/components/sections/mission-statement.tsx</file_path>
    <design_instructions>
    Clone the mission statement section with large turquoise text reading "WE ARE HERE TO MAKE SOCIAL MEDIA STRATEGIC AND RESULTS-DRIVEN." followed by a smaller dark subtitle "P.S. WITHOUT HIDING ANYTHING :)". Include four circular purple icons with white symbols representing key service areas: "High Quality" (brain icon), "Organic Content" (network icon), "Performance Marketing" (graph icon), and "Portfolio Management" (shield icon). Each icon should have descriptive text below in the same layout and styling.
    </design_instructions>
    <assets>["https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/646419b2-2ffb-45de-9b9a-3a4bb37e17fc-drinkmisfits-com/assets/svgs/low-sugar-icon-2.svg?", "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/646419b2-2ffb-45de-9b9a-3a4bb37e17fc-drinkmisfits-com/assets/svgs/fibers-icon-3.svg?", "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/646419b2-2ffb-45de-9b9a-3a4bb37e17fc-drinkmisfits-com/assets/svgs/calorie-icon-4.svg?", "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/646419b2-2ffb-45de-9b9a-3a4bb37e17fc-drinkmisfits-com/assets/svgs/preservative-icon-5.svg?"]</assets>
  </clone_section>

  <clone_section>
    <file_path>src/components/sections/animated-characters.tsx</file_path>
    <design_instructions>
    Clone the animated character section with repeating "CHOOSE PURPLE NOT BLAND" text in large black letters on yellow background. Include two animated character illustrations - a quirky monkey-like character with goggles and a stylized girl character. These should float and move around the text with the same playful, rebellious energy as the original Misfits characters, representing the creative and unconventional nature of Purple Pandaa agency.
    </design_instructions>
    <assets>["https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/646419b2-2ffb-45de-9b9a-3a4bb37e17fc-drinkmisfits-com/assets/svgs/monkey-6.svg?", "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/646419b2-2ffb-45de-9b9a-3a4bb37e17fc-drinkmisfits-com/assets/svgs/face-2-7.svg?", "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/646419b2-2ffb-45de-9b9a-3a4bb37e17fc-drinkmisfits-com/assets/svgs/money-full-8.svg?", "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/646419b2-2ffb-45de-9b9a-3a4bb37e17fc-drinkmisfits-com/assets/svgs/mango-girl-9.svg?"]</assets>
  </clone_section>

  <clone_section>
    <file_path>src/components/sections/agency-differentiators.tsx</file_path>
    <design_instructions>
    Clone the differentiators section with the heading "What makes us a 'Purple Pandaa' in the social media industry?" followed by descriptive text about providing strategic function through social media services. Create six purple gradient cards arranged vertically, each highlighting a key differentiator: "HIGH QUALITY CONTENT", "ORGANIC REACH EXPERTS", "PERFORMANCE MARKETING", "NO HIDDEN COSTS", "100% RESULTS FOCUSED", and "100% TRANSPARENT". Each card should have white text, matching icons, and detailed descriptions of the agency's unique value propositions.
    </design_instructions>
    <assets>["https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/646419b2-2ffb-45de-9b9a-3a4bb37e17fc-drinkmisfits-com/assets/images/1-8.png?", "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/646419b2-2ffb-45de-9b9a-3a4bb37e17fc-drinkmisfits-com/assets/images/2-9.png?", "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/646419b2-2ffb-45de-9b9a-3a4bb37e17fc-drinkmisfits-com/assets/images/3-10.png?", "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/646419b2-2ffb-45de-9b9a-3a4bb37e17fc-drinkmisfits-com/assets/images/4-11.png?", "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/646419b2-2ffb-45de-9b9a-3a4bb37e17fc-drinkmisfits-com/assets/images/5-12.png?", "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/646419b2-2ffb-45de-9b9a-3a4bb37e17fc-drinkmisfits-com/assets/images/6-13.png?"]</assets>
  </clone_section>

  <clone_section>
    <file_path>src/components/sections/services-showcase.tsx</file_path>
    <design_instructions>
    Clone the services showcase section with decorative warning tape banners and service cards. Create three main service cards with creative character designs: "Content Creation Expert" (grape character equivalent), "Portfolio Manager" (mango character equivalent), and "Performance Marketing" (third character). Each card should have a light purple background, large bold service titles, character illustrations, detailed service descriptions, pricing information, and "GET STARTED" buttons. Include collapsible nutrition/service details sections.
    </design_instructions>
    <assets>["https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/646419b2-2ffb-45de-9b9a-3a4bb37e17fc-drinkmisfits-com/assets/svgs/strip-1-10.svg?", "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/646419b2-2ffb-45de-9b9a-3a4bb37e17fc-drinkmisfits-com/assets/svgs/strip-2-11.svg?", "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/646419b2-2ffb-45de-9b9a-3a4bb37e17fc-drinkmisfits-com/assets/images/can-14.png?", "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/646419b2-2ffb-45de-9b9a-3a4bb37e17fc-drinkmisfits-com/assets/images/can-15.png?", "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/646419b2-2ffb-45de-9b9a-3a4bb37e17fc-drinkmisfits-com/assets/images/can-mango-17.png?", "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/646419b2-2ffb-45de-9b9a-3a4bb37e17fc-drinkmisfits-com/assets/images/grape-16.png?", "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/646419b2-2ffb-45de-9b9a-3a4bb37e17fc-drinkmisfits-com/assets/images/mango-bg-18.png?"]</assets>
  </clone_section>

  <clone_section>
    <file_path>src/components/sections/testimonials.tsx</file_path>
    <design_instructions>
    Clone the testimonials section with purple gradient background and white testimonial cards. Create a horizontal scrolling carousel with customer testimonials praising Purple Pandaa's social media services. Include client photos, names, job titles, and detailed reviews about the agency's effectiveness, creativity, and results. Add a central image of a person holding a device/portfolio showcasing the agency's work, with "NO B.S. HONEST REVIEWS" text overlay.
    </design_instructions>
    <assets>["https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/646419b2-2ffb-45de-9b9a-3a4bb37e17fc-drinkmisfits-com/assets/images/testi-19.png?"]</assets>
  </clone_section>

  <clone_section>
    <file_path>src/components/sections/about-story.tsx</file_path>
    <design_instructions>
    Clone the about section with "Two Partners On A Journey..." heading and the story of Purple Pandaa's founding. Include a photo of two business partners with playful purple decorative doodles around them (hearts, crowns, lightning bolts, etc.). Replace the soda origin story with a narrative about how the founders started Purple Pandaa to fill the gap in strategic, results-driven social media marketing, emphasizing their mission to provide transparency and real results in an industry full of empty promises.
    </design_instructions>
    <assets>["https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/646419b2-2ffb-45de-9b9a-3a4bb37e17fc-drinkmisfits-com/assets/images/brothers-20.png?"]</assets>
  </clone_section>

  <clone_section>
    <file_path>src/components/sections/underdog-brand.tsx</file_path>
    <design_instructions>
    Clone the underdog brand section with large turquoise text reading "AN UNDERDOG AGENCY THAT'S ACTUALLY BETTER THAN THE MARKET GIANTS" followed by "(YOU KNOW WHO)" in black text. Use the same bold typography and color scheme to position Purple Pandaa as a challenger brand that delivers superior results compared to larger, established agencies.
    </design_instructions>
    <assets>[]</assets>
  </clone_section>

  <clone_section>
    <file_path>src/components/sections/transparency-section.tsx</file_path>
    <design_instructions>
    Clone the transparency section with "We got nothing to hide." heading and content about radical transparency in showing real results and case studies. Include a lab beaker/scientific imagery to represent data-driven approach, a yellow starburst with "We believe in results, not in promises" text, and a "DOWNLOAD OUR CASE STUDIES" button. Replace the lab report concept with case studies and performance reports demonstrating the agency's successful campaigns and ROI metrics.
    </design_instructions>
    <assets>["https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/646419b2-2ffb-45de-9b9a-3a4bb37e17fc-drinkmisfits-com/assets/images/report-21.png?", "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/646419b2-2ffb-45de-9b9a-3a4bb37e17fc-drinkmisfits-com/assets/svgs/star-12.svg?", "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/646419b2-2ffb-45de-9b9a-3a4bb37e17fc-drinkmisfits-com/assets/images/lab-27.jpg?"]</assets>
  </clone_section>

  <clone_section>
    <file_path>src/components/sections/final-cta.tsx</file_path>
    <design_instructions>
    Clone the final call-to-action section with a large image of a person wearing sunglasses holding a Purple Pandaa branded item, with "LEVEL UP YOUR BRAND!" text overlay. Use the same outdoor/forest background setting but adapt the messaging for social media agency services. Include the curved purple wave overlay at the bottom leading into the footer section.
    </design_instructions>
    <assets>["https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/646419b2-2ffb-45de-9b9a-3a4bb37e17fc-drinkmisfits-com/assets/images/man-with-drink-23.jpg?", "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/646419b2-2ffb-45de-9b9a-3a4bb37e17fc-drinkmisfits-com/assets/images/mwd-m-22.jpg?"]</assets>
  </clone_section>

  <clone_section>
    <file_path>src/components/sections/footer.tsx</file_path>
    <design_instructions>
    Clone the footer section with purple gradient background and white text. Include social media links, agency service links (Services, About Us, Contact Us, Client Portal), help/legal links (Privacy Policy, Terms and Conditions, Service Agreement), and accepted payment methods. Add Purple Pandaa logo and "Made with ❤ in 🇮🇳" footer text. Include contact information and social media icons for Instagram, Twitter/X, and LinkedIn.
    </design_instructions>
    <assets>["https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/646419b2-2ffb-45de-9b9a-3a4bb37e17fc-drinkmisfits-com/assets/images/footer-24.png?", "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/646419b2-2ffb-45de-9b9a-3a4bb37e17fc-drinkmisfits-com/assets/images/pay2-25.png?", "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/646419b2-2ffb-45de-9b9a-3a4bb37e17fc-drinkmisfits-com/assets/images/payment-26.png?"]</assets>
  </clone_section>

  <clone_section>
    <file_path>src/components/sections/sticky-cta.tsx</file_path>
    <design_instructions>
    Clone the sticky call-to-action button that appears at the bottom of the screen reading "LET'S WORK TOGETHER!!" with the same bold styling and positioning as the original "TAKE MY MONEY!!" button. Use the same black background with white text and ensure it remains fixed at the bottom of the viewport during scrolling.
    </design_instructions>
    <assets>[]</assets>
  </clone_section>
</sections>