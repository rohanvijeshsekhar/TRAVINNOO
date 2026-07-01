import{a as e}from"./rolldown-runtime-Cyuzqnbw.js";import{Dt as t,_ as n,g as r,kt as i}from"./vendor-D2zT6KuG.js";import{i as a}from"./vendor-framer-DHttXlW5.js";var o=e(i(),1),s=t(),c=[{id:`dubai`,name:`Dubai`,region:`Middle East`,tagline:`Futuristic architectural marvels meet ancient desert sands.`,image:`images/destinations/dubai.webp`,description:`A global symbol of luxury, innovation, and dynamic urban living. Experience bespoke desert reserve safaris and private beachfront penthouses.`,experiences:[`Private Yacht Cruise past Palm Jumeirah`,`Ultra-luxury Desert Conservation Camp with private pool villas`,`Bespoke culinary experience with private Michelin-starred chefs`],itinerary:[{day:1,title:`Arrival & Skyline Check-in`,desc:`Chauffeur arrival to your beachfront penthouse. Evening cocktail reception overlooking the Dubai Marina.`},{day:2,title:`Private Desert Safari Expedition`,desc:`4x4 dunes exploration in the Conservation Reserve, followed by falconry demonstrations and a custom tented dinner.`},{day:3,title:`Bespoke Yacht Charter`,desc:`A full-day luxury catamaran cruise with private chef lunch and sunset harbor docking.`}]},{id:`kenya`,name:`Kenya`,region:`East Africa`,tagline:`Witness the majesty of the great wilderness.`,image:`images/destinations/kenya.webp`,description:`An untamed paradise of rolling savannahs, wildlife sanctuaries, and authentic tribal heritage. Designed for the slow safari connoisseur.`,experiences:[`Hot air balloon safari at sunrise over Maasai Mara`,`Walking safari guided by Maasai warriors`,`Stays in eco-luxury community-owned lodges`],itinerary:[{day:1,title:`Acacia Lodge Arrival`,desc:`Fly in by private charter to the Mara conservancy. Afternoon game drive followed by a sundowner drink.`},{day:2,title:`Sunrise Balloon Safari & Bush Breakfast`,desc:`Soar above the migrating herds, then land for a champagne breakfast in the open savannah.`},{day:3,title:`Cultural Expedition`,desc:`An intimate, respectful afternoon sharing stories and local history in a traditional Maasai homestead.`}]},{id:`bali`,name:`Bali`,region:`Southeast Asia`,tagline:`Immersive spiritual rituals in tropical sanctuaries.`,image:`images/destinations/bali.webp`,description:`Indonesia’s cultural gem, famous for its sacred temples, emerald rice terraces, and peaceful wellness retreats.`,experiences:[`Private purification ceremony at Tirta Empul`,`Guided mountain trekking through volcanic craters`,`Lush rainforest pool villas in Ubud`],itinerary:[{day:1,title:`Forest Sanctuary Check-in`,desc:`Arrive at your valley-facing pool villa in Ubud. Evening sound healing meditation session.`},{day:2,title:`Purification & Cultural History`,desc:`A private guide leads you through Tirta Empul water temple rituals and ancient carvings.`},{day:3,title:`Tropical Coastline Cruise`,desc:`Sail to the nearby Gili islands on a classic wooden yacht, snorkeling with sea turtles.`}]},{id:`thailand`,name:`Thailand`,region:`Southeast Asia`,tagline:`Sailing emerald coves and tasting vibrant cultures.`,image:`images/destinations/thailand.webp`,description:`A sensory blend of historical temples, vibrant culinary street culture, and remote tropical island escapes.`,experiences:[`Private catamaran cruise through Phang Nga Bay`,`Bespoke cooking masterclass with heritage chefs`,`Secluded beachfront pool retreats in Koh Samui`],itinerary:[{day:1,title:`Arrival in Phuket`,desc:`Luxury yacht transfer to your private island beach villa. Sunset dinner on the shore.`},{day:2,title:`Phang Nga Hongs Sea Caves`,desc:`Explore hidden sea caves and bays by private sea-kayak with a naturalist guide.`},{day:3,title:`Gastronomy Discovery`,desc:`A tailored tour through ancient food markets followed by a private cooking masterclass.`}]},{id:`singapore`,name:`Singapore`,region:`Southeast Asia`,tagline:`Exploring biophilic skyscrapers and smart architecture.`,image:`images/destinations/singapore.webp`,description:`A global metropolis that merges futuristic skyline gardens with green sustainability and rich colonial heritage.`,experiences:[`Private evening tour of Gardens by the Bay dome`,`Exclusive rooftop mixology sessions in Marina Bay`,`Bespoke heritage tours of Chinatown and Little India`],itinerary:[{day:1,title:`Sleek Sky-suite Check-in`,desc:`Arrive at your high-altitude suite. Evening champagne toast at Marina Bay Sands.`},{day:2,title:`Gardens & Future Architecture`,desc:`An private after-hours walkthrough of the Cloud Forest and Flower Dome biophilic spaces.`},{day:3,title:`Historical Heritage Trail`,desc:`Explore historic shophouses, tasting award-winning local dishes and modern fusion cuisine.`}]},{id:`vietnam`,name:`Vietnam`,region:`Southeast Asia`,tagline:`Intimate tea rituals and dynamic culinary paths.`,image:`images/destinations/vietnam.webp`,description:`A land of historical charm, towering green limestone karsts, and exceptional culinary balance.`,experiences:[`Private junk boat cruise in Halong Bay`,`Kaiseki-inspired royal cuisine tour in Hue`,`Traditional tea ceremony guided by master brewers`],itinerary:[{day:1,title:`Halong Bay Boarding`,desc:`Embark on a luxury classic wooden junk boat. Cruise past the towering karsts.`},{day:2,title:`Imperial Gastronomy in Hue`,desc:`Flight to Hue. Evening tasting of imperial multi-course banquets.`},{day:3,title:`Master Tea Ceremony`,desc:`Learn the slow art of traditional Vietnamese tea brewing in a silent pavilion.`}]},{id:`malaysia`,name:`Malaysia`,region:`Southeast Asia`,tagline:`Ancient rainforests meet dynamic culture.`,image:`images/destinations/malaysia.webp`,description:`A beautiful country of pristine ancient rainforests, historic colonial trading towns, and vibrant modern skylines.`,experiences:[`Helicopter charter over Langkawi archipelago`,`Guided rainforest night canopy walk in Taman Negara`,`Curated colonial history trail through Penang`],itinerary:[{day:1,title:`Penang Mansion Check-in`,desc:`Check in to a restored heritage mansion. Traditional Peranakan dinner experience.`},{day:2,title:`Rainforest Canopy Walk`,desc:`Private transfer to the prehistoric jungle. Guided trek spotting rare birdlife and flora.`},{day:3,title:`Langkawi Archipelago flight`,desc:`Helicopter tour over the 99 islands of Langkawi, docking at a quiet beach resort.`}]}];function l(){let[e,t]=(0,o.useState)(`All`),[i,l]=(0,o.useState)(null);(0,o.useEffect)(()=>{window.scrollTo(0,0),window.lenis&&window.lenis.scrollTo(0,{immediate:!0})},[i]),(0,o.useEffect)(()=>{let e=()=>{let e=window.location.hash.match(/^#destination-([^?#/]+)/);if(e){let t=e[1],n=c.find(e=>e.id===t);if(n){l(n);return}}l(null)};return window.addEventListener(`hashchange`,e),e(),()=>window.removeEventListener(`hashchange`,e)},[]);let u=[`All`,`Middle East`,`Southeast Asia`,`East Africa`],d=e===`All`?c:c.filter(t=>t.region===e);return(0,s.jsxs)(`div`,{style:{backgroundColor:`#050505`,color:`#F5F2EC`,width:`100%`,minHeight:`100vh`,position:`relative`,overflowX:`hidden`,boxSizing:`border-box`},children:[(0,s.jsx)(`style`,{children:`
        .destinations-container {
          position: relative;
          z-index: 3;
          max-width: 1200px;
          margin: 0 auto;
          padding: 160px 24px 120px 24px;
          box-sizing: border-box;
        }

        /* Regions filter tabs */
        .filter-tabs-container {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          margin-bottom: 32px;
          position: relative;
          z-index: 5;
        }

        .filter-tab {
          padding: 8px 20px;
          border: 1px solid rgba(245, 242, 236, 0.15);
          background: rgba(255, 255, 255, 0.02);
          color: rgba(245, 242, 236, 0.7);
          border-radius: 100px;
          font-family: var(--font-sans);
          font-size: 0.78rem;
          font-weight: 500;
          letter-spacing: 0.5px;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          outline: none;
        }

        .filter-tab:hover {
          border-color: rgba(193, 18, 31, 0.4);
          color: #F5F2EC;
          background: rgba(193, 18, 31, 0.05);
        }

        .filter-tab.active {
          border-color: #C1121F;
          background: #C1121F;
          color: #FFFFFF;
          box-shadow: 0 4px 15px rgba(193, 18, 31, 0.25);
        }

        /* Destinations card grid */
        .destinations-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 28px;
          margin-top: 10px;
        }

        .destination-editorial-card {
          display: flex;
          flex-direction: column;
          background: linear-gradient(180deg, rgba(16, 16, 20, 0.75) 0%, rgba(10, 10, 12, 0.95) 100%);
          border: 1px solid rgba(245, 242, 236, 0.08);
          border-radius: 24px;
          overflow: hidden;
          box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.03), 0 12px 30px rgba(0, 0, 0, 0.5);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          transition: all 0.45s cubic-bezier(0.16, 1, 0.3, 1);
          cursor: pointer;
          box-sizing: border-box;
          aspect-ratio: 1 / 1.15;
          position: relative;
        }

        .destination-editorial-card::before {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at 10% 20%, rgba(193, 18, 31, 0.02) 0%, transparent 40%);
          pointer-events: none;
          z-index: 0;
        }

        .destination-editorial-card:hover {
          border-color: rgba(193, 18, 31, 0.65);
          background: linear-gradient(180deg, rgba(24, 24, 30, 0.85) 0%, rgba(15, 15, 18, 0.98) 100%);
          transform: translateY(-6px);
          box-shadow: 
            inset 0 1px 0 rgba(255, 255, 255, 0.05),
            0 20px 40px rgba(0, 0, 0, 0.65),
            0 0 40px rgba(193, 18, 31, 0.06);
        }

        .destination-img-wrapper {
          width: 100%;
          height: 52%;
          overflow: hidden;
          position: relative;
          border-bottom: 1px solid rgba(245, 242, 236, 0.06);
        }

        .destination-img-wrapper img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          filter: grayscale(100%) contrast(90%) brightness(70%);
          transition: transform 0.65s cubic-bezier(0.16, 1, 0.3, 1), filter 0.4s ease;
        }

        .destination-editorial-card:hover .destination-img-wrapper img {
          transform: scale(1.08);
          filter: grayscale(100%) contrast(100%) brightness(85%);
        }

        .destination-content-block {
          padding: 22px 24px;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          box-sizing: border-box;
          z-index: 1;
        }

        .destination-meta-line {
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-family: var(--font-sans);
          font-size: 0.68rem;
          color: rgba(245, 242, 236, 0.45);
          margin-bottom: 6px;
        }

        .destination-region-badge {
          color: #C1121F;
          font-weight: 600;
          letter-spacing: 0.05em;
          text-transform: uppercase;
        }

        .destination-card-title {
          font-family: var(--font-heading);
          font-size: 1.25rem;
          font-weight: 450;
          color: #F5F2EC;
          margin: 0 0 6px 0;
          line-height: 1.3;
          letter-spacing: -0.2px;
          transition: color 0.3s ease;
        }

        .destination-editorial-card:hover .destination-card-title {
          color: #FFFFFF;
        }

        .destination-card-tagline {
          font-family: var(--font-sans);
          font-size: 0.82rem;
          line-height: 1.45;
          color: rgba(245, 242, 236, 0.6);
          margin: 0;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
          font-weight: 300;
        }

        .destination-card-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-top: 12px;
          font-size: 0.68rem;
          color: rgba(245, 242, 236, 0.4);
          font-family: var(--font-sans);
        }

        .destination-card-arrow {
          display: flex;
          align-items: center;
          color: rgba(245, 242, 236, 0.6);
          transition: all 0.3s ease;
        }

        .destination-editorial-card:hover .destination-card-arrow {
          color: #C1121F;
          transform: translateX(4px);
        }

        /* EDITORIAL DETAIL VIEW STYLING */
        .destination-detail-page {
          position: relative;
          z-index: 3;
          width: 100%;
          box-sizing: border-box;
        }

        .destination-detail-hero {
          width: 100%;
          height: 33.3vh;
          min-height: 320px;
          position: relative;
          overflow: hidden;
          border-bottom: 1px solid rgba(245, 242, 236, 0.08);
        }

        .destination-detail-hero img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          filter: grayscale(100%) contrast(95%) brightness(60%);
        }

        .destination-detail-hero-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, rgba(5, 5, 5, 0.35) 0%, rgba(5, 5, 5, 0.95) 100%);
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding: 100px 24px 32px 24px;
          box-sizing: border-box;
          z-index: 2;
        }

        .destination-detail-hero-content {
          max-width: 900px;
          margin: 0 auto;
          width: 100%;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .destination-detail-meta {
          display: flex;
          align-items: center;
          gap: 16px;
          font-family: var(--font-sans);
          font-size: 0.75rem;
          font-weight: 500;
          color: rgba(245, 242, 236, 0.65);
        }

        .destination-detail-title {
          font-family: var(--font-heading);
          font-size: clamp(2rem, 5vw, 3rem);
          font-weight: 450;
          line-height: 1.2;
          color: #F5F2EC;
          margin: 0;
          letter-spacing: -0.4px;
        }

        .back-nav-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: none;
          border: none;
          color: rgba(245, 242, 236, 0.6);
          font-family: var(--font-sans);
          font-size: 0.82rem;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.3s ease;
          padding: 0;
          width: fit-content;
        }

        .back-nav-btn:hover {
          color: #C1121F;
          transform: translateX(-4px);
        }

        .destination-detail-body {
          max-width: 900px;
          margin: 0 auto;
          padding: 56px 24px 140px 24px;
          box-sizing: border-box;
          font-family: var(--font-sans);
        }

        .destination-detail-desc {
          font-size: clamp(1.05rem, 1.8vw, 1.25rem);
          line-height: 1.75;
          color: rgba(245, 242, 236, 0.8);
          font-weight: 300;
          margin-bottom: 48px;
          border-left: 2px solid #C1121F;
          padding-left: 24px;
        }

        .detail-sections-grid {
          display: grid;
          grid-template-columns: 1fr 1.1fr;
          gap: 48px;
        }

        .detail-section-title {
          font-family: var(--font-heading);
          font-size: 1.35rem;
          font-weight: 450;
          color: #F5F2EC;
          margin: 0 0 24px 0;
          border-bottom: 1px solid rgba(245, 242, 236, 0.08);
          padding-bottom: 10px;
          letter-spacing: -0.2px;
        }

        .experiences-list {
          display: flex;
          flex-direction: column;
          gap: 18px;
        }

        .experience-item {
          display: flex;
          gap: 12px;
          align-items: flex-start;
          font-size: 0.95rem;
          line-height: 1.55;
          color: rgba(245, 242, 236, 0.7);
        }

        .itinerary-list {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .itinerary-day-card {
          background: rgba(255, 255, 255, 0.015);
          border: 1px solid rgba(245, 242, 236, 0.05);
          border-radius: 16px;
          padding: 16px 20px;
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .itinerary-day-num {
          font-size: 0.7rem;
          font-weight: 600;
          color: #C1121F;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .itinerary-day-title {
          font-family: var(--font-heading);
          font-size: 1rem;
          font-weight: 450;
          color: #F5F2EC;
          margin: 0;
        }

        .itinerary-day-desc {
          font-size: 0.82rem;
          line-height: 1.5;
          color: rgba(245, 242, 236, 0.55);
          margin: 6px 0 0 0;
          font-weight: 300;
        }

        @media (max-width: 991px) {
          .destinations-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .hero-artwork-container {
            width: 100% !important;
            height: 520px !important;
            right: 0 !important;
            top: 0 !important;
            transform: none !important;
            mask-image: linear-gradient(to bottom, transparent 0%, black 20%, black 80%, transparent 100%) !important;
            -webkit-mask-image: linear-gradient(to bottom, transparent 0%, black 20%, black 80%, transparent 100%) !important;
          }
          .hero-artwork-container img {
            opacity: 0.45 !important;
            border-radius: 0px !important;
          }
        }

        @media (max-width: 768px) {
          .detail-sections-grid {
            grid-template-columns: 1fr;
            gap: 36px;
          }
          .destination-detail-body {
            padding: 40px 20px 80px 20px;
          }
        }

        @media (max-width: 600px) {
          .destinations-grid {
            grid-template-columns: 1fr;
          }
        }
      `}),i?(0,s.jsxs)(`div`,{className:`destination-detail-page`,children:[(0,s.jsxs)(`div`,{className:`destination-detail-hero`,children:[(0,s.jsx)(`img`,{src:`/TRAVINNO/${i.image}`,alt:i.name}),(0,s.jsxs)(`div`,{className:`destination-detail-hero-overlay`,children:[(0,s.jsx)(`div`,{className:`destination-detail-hero-content`,style:{marginBottom:`auto`},children:(0,s.jsxs)(`button`,{onClick:()=>{l(null),window.location.hash=`destinations`},className:`back-nav-btn`,children:[(0,s.jsx)(n,{size:16}),`Back to Destinations`]})}),(0,s.jsxs)(`div`,{className:`destination-detail-hero-content`,children:[(0,s.jsxs)(`div`,{className:`destination-detail-meta`,children:[(0,s.jsx)(`span`,{style:{color:`#C1121F`,fontWeight:600,textTransform:`uppercase`,letterSpacing:`0.05em`},children:i.region}),(0,s.jsx)(`span`,{style:{width:`4px`,height:`4px`,backgroundColor:`rgba(245, 242, 236, 0.3)`,borderRadius:`50%`}}),(0,s.jsx)(`span`,{children:`Custom Itinerary`})]}),(0,s.jsx)(`h1`,{className:`destination-detail-title`,children:i.name}),(0,s.jsx)(`p`,{style:{color:`rgba(245, 242, 236, 0.7)`,fontSize:`0.95rem`,margin:`4px 0 0 0`,fontWeight:300},children:i.tagline})]})]})]}),(0,s.jsxs)(`div`,{className:`destination-detail-body`,children:[(0,s.jsx)(`p`,{className:`destination-detail-desc`,style:{marginBottom:`64px`},children:i.description}),(0,s.jsx)(`div`,{style:{display:`flex`,justifyContent:`center`},children:(0,s.jsxs)(`a`,{href:`#contact`,style:{backgroundColor:`#C1121F`,color:`#FFFFFF`,fontFamily:`var(--font-sans)`,fontSize:`0.82rem`,fontWeight:600,letterSpacing:`1.5px`,textTransform:`uppercase`,textDecoration:`none`,padding:`12px 32px`,borderRadius:`100px`,boxShadow:`0 8px 24px rgba(193, 18, 31, 0.25)`,transition:`all 0.3s ease`,display:`flex`,alignItems:`center`,gap:`8px`},onMouseEnter:e=>{e.currentTarget.style.backgroundColor=`#a00f19`,e.currentTarget.style.boxShadow=`0 8px 28px rgba(193, 18, 31, 0.45)`,e.currentTarget.style.transform=`translateY(-2px)`},onMouseLeave:e=>{e.currentTarget.style.backgroundColor=`#C1121F`,e.currentTarget.style.boxShadow=`0 8px 24px rgba(193, 18, 31, 0.25)`,e.currentTarget.style.transform=`translateY(0px)`},children:[`Inquire About This Journey `,(0,s.jsx)(r,{size:14})]})})]})]}):(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(`div`,{style:{position:`absolute`,inset:0,backgroundColor:`#050505`,zIndex:0,pointerEvents:`none`}}),(0,s.jsx)(`div`,{style:{position:`absolute`,inset:0,backgroundImage:`
                linear-gradient(rgba(245, 242, 236, 0.04) 1px, transparent 1px),
                linear-gradient(90deg, rgba(245, 242, 236, 0.04) 1px, transparent 1px)
              `,backgroundSize:`100px 100px, 100px 100px, 100px 100px`,backgroundRepeat:`repeat, repeat, repeat`,zIndex:2,pointerEvents:`none`}}),(0,s.jsx)(`div`,{className:`hero-artwork-container`,style:{position:`absolute`,right:0,top:0,width:`54%`,height:`580px`,pointerEvents:`none`,zIndex:1,overflow:`hidden`,WebkitMaskImage:`linear-gradient(to right, transparent 0%, black 70%)`,maskImage:`linear-gradient(to right, transparent 0%, black 70%)`},children:(0,s.jsx)(a.div,{animate:{y:[0,-3,0]},transition:{duration:6,ease:`easeInOut`,repeat:1/0},style:{width:`100%`,height:`100%`,position:`relative`},children:(0,s.jsx)(`img`,{src:`/TRAVINNO/images/destinations_hero.png`,alt:`Global Destinations map compass`,style:{width:`100%`,height:`100%`,objectFit:`cover`,opacity:.38,filter:`grayscale(100%) contrast(80%) brightness(65%)`,transition:`opacity 0.5s ease`,WebkitMaskImage:`linear-gradient(to bottom, black 82%, transparent 100%)`,maskImage:`linear-gradient(to bottom, black 82%, transparent 100%)`}})})}),(0,s.jsxs)(`div`,{className:`destinations-container`,children:[(0,s.jsx)(`section`,{style:{marginBottom:`40px`,position:`relative`},children:(0,s.jsxs)(`div`,{style:{maxWidth:`640px`,position:`relative`,zIndex:3},children:[(0,s.jsxs)(a.span,{initial:{opacity:0,y:12},animate:{opacity:1,y:0},transition:{duration:.8,ease:[.16,1,.3,1]},style:{display:`inline-flex`,alignItems:`center`,gap:`6px`,padding:`4px 12px`,border:`1px solid rgba(193, 18, 31, 0.18)`,borderRadius:`100px`,fontFamily:`var(--font-sans)`,fontSize:`0.72rem`,fontWeight:500,letterSpacing:`0.05em`,color:`rgba(245, 242, 236, 0.85)`,marginBottom:`16px`,background:`rgba(193, 18, 31, 0.05)`,backdropFilter:`blur(4px)`,WebkitBackdropFilter:`blur(4px)`},children:[(0,s.jsx)(`span`,{style:{width:`6px`,height:`6px`,backgroundColor:`#C1121F`,borderRadius:`50%`,display:`inline-block`}}),`Explore`]}),(0,s.jsxs)(a.h1,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.8,ease:[.16,1,.3,1],delay:.1},style:{fontFamily:`var(--font-heading)`,fontSize:`clamp(2.2rem, 5vw, 3.8rem)`,fontWeight:450,lineHeight:1.15,color:`#F5F2EC`,margin:`0 0 16px 0`,letterSpacing:`-0.5px`},children:[`Our Extraordinary `,(0,s.jsx)(`br`,{}),(0,s.jsx)(`span`,{style:{fontFamily:`'Allura', cursive`,fontSize:`1.25em`,fontWeight:400,letterSpacing:`0.02em`,lineHeight:`1.2`,display:`inline-block`,marginTop:`-4px`,paddingBottom:`0px`,background:`linear-gradient(to bottom, #F5F2EC 20%, #E8A7A7 60%, #C1121F 100%)`,WebkitBackgroundClip:`text`,WebkitTextFillColor:`transparent`,backgroundClip:`text`},children:`Destinations`})]}),(0,s.jsx)(a.p,{initial:{opacity:0,y:10},animate:{opacity:.75,y:0},transition:{duration:.8,ease:[.16,1,.3,1],delay:.2},style:{fontFamily:`var(--font-sans)`,fontSize:`clamp(1rem, 1.8vw, 1.2rem)`,lineHeight:1.65,color:`#F5F2EC`,margin:0,maxWidth:`680px`,fontWeight:300},children:`A curated collection of the world's most remarkable luxury destinations, bespoke itineraries, and elite travel experiences.`})]})}),(0,s.jsxs)(`section`,{style:{position:`relative`},children:[(0,s.jsx)(`div`,{className:`filter-tabs-container`,children:u.map(n=>(0,s.jsx)(`button`,{className:`filter-tab ${e===n?`active`:``}`,onClick:()=>t(n),children:n},n))}),(0,s.jsx)(`div`,{className:`destinations-grid`,children:d.map((e,t)=>(0,s.jsxs)(a.div,{initial:{opacity:0,y:24},whileInView:{opacity:1,y:0},viewport:{once:!0,margin:`-40px`},transition:{duration:.8,ease:[.16,1,.3,1],delay:t*.06},className:`destination-editorial-card`,onClick:()=>{l(e),window.location.hash=`destination-${e.id}`},children:[(0,s.jsx)(`div`,{className:`destination-img-wrapper`,children:(0,s.jsx)(`img`,{src:`/TRAVINNO/${e.image}`,alt:e.name})}),(0,s.jsxs)(`div`,{className:`destination-content-block`,children:[(0,s.jsxs)(`div`,{children:[(0,s.jsx)(`div`,{className:`destination-meta-line`,children:(0,s.jsx)(`span`,{className:`destination-region-badge`,children:e.region})}),(0,s.jsx)(`h3`,{className:`destination-card-title`,children:e.name}),(0,s.jsx)(`p`,{className:`destination-card-tagline`,children:e.tagline})]}),(0,s.jsxs)(`div`,{className:`destination-card-footer`,children:[(0,s.jsx)(`span`,{children:`Explore Bespoke Journeys`}),(0,s.jsx)(`div`,{className:`destination-card-arrow`,children:(0,s.jsx)(r,{size:14})})]})]})]},e.id))})]})]})]})]})}export{l as default};