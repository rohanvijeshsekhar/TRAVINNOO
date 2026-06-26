import{a as e}from"./rolldown-runtime-Cyuzqnbw.js";import{_t as t,yt as n}from"./vendor-BeahlPft.js";import{n as r,t as i}from"./vendor-gsap-B2JeSRMT.js";var a=e(n(),1),o=t(),s=[{title:`Dubai`,region:`Middle East`,countryName:`United Arab Emirates`,heading:`Modern Skylines & Desert Safaris`,description:`Experience a world where futuristic glass skyscrapers rise directly from ancient desert sands, curating the ultimate heights of luxury leisure and private safaris.`,highlights:[`Luxury Travel`,`MICE`,`Corporate`,`Leisure`,`Adventure`],image:`https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1200&auto=format&fit=crop`},{title:`Malaysia`,region:`Southeast Asia`,countryName:`Malaysia`,heading:`Vibrant Cultures & Rainforest Escapes`,description:`Discover a rich tapestry of history, modern capital luxury, and pristine ancient rainforest canopies home to unique biodiversity.`,highlights:[`Luxury Travel`,`MICE`,`Corporate`,`Leisure`,`Adventure`],image:`https://images.unsplash.com/photo-1563245372-f21724e3856d?q=80&w=1200&auto=format&fit=crop`},{title:`Thailand`,region:`Southeast Asia`,countryName:`Thailand`,heading:`Golden Temples & Tropical Islands`,description:`Immerse yourself in the warm hospitality of golden temple cities and white sand archipelago islands with tailored beachfront luxury.`,highlights:[`Luxury Travel`,`MICE`,`Corporate`,`Leisure`,`Adventure`],image:`https://images.unsplash.com/photo-1504214208698-ea1916a2195a?q=80&w=1200&auto=format&fit=crop`},{title:`Singapore`,region:`Southeast Asia`,countryName:`Singapore`,heading:`Futuristic Gardens & Cosmopolitan Charm`,description:`Walk through the world's most advanced architectural nature displays, leading Michelin-starred dining, and premium lifestyle ports.`,highlights:[`Luxury Travel`,`MICE`,`Corporate`,`Leisure`,`Adventure`],image:`https://images.unsplash.com/photo-1525625293386-3f8f99389edd?q=80&w=1200&auto=format&fit=crop`},{title:`Bali`,region:`Southeast Asia`,countryName:`Bali`,heading:`Sacred Temples & Pristine Beaches`,description:`Reconnect in the spiritual capital of volcanic lake vistas, iconic terraced valleys, and private pool luxury villas.`,highlights:[`Luxury Travel`,`MICE`,`Corporate`,`Leisure`,`Adventure`],image:`https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=1200&auto=format&fit=crop`},{title:`Kenya`,region:`East Africa`,countryName:`Kenya`,heading:`Untamed Wildlife & Savannah Reserves`,description:`Witness the great wilderness migration on the plains of Masai Mara, pairing raw nature with five-star luxury tented camp reserves.`,highlights:[`Luxury Travel`,`MICE`,`Corporate`,`Leisure`,`Adventure`],image:`https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=1200&auto=format&fit=crop`},{title:`Vietnam`,region:`Southeast Asia`,countryName:`Vietnam`,heading:`Historic Cities & Dramatic Karst Bays`,description:`Cruise the emerald waters of Ha Long Bay and explore French colonial cities, combining rich historic heritage with luxury maritime travel.`,highlights:[`Luxury Travel`,`MICE`,`Corporate`,`Leisure`,`Adventure`],image:`https://images.unsplash.com/photo-1528127269322-539801943592?q=80&w=1200&auto=format&fit=crop`}],c=e=>({Dubai:`Luxury travel in Dubai with Travinno Trusted DMC`,Kenya:`Kenya safari destination managed by Travinno Trusted DMC`,Thailand:`Premium Thailand holiday experiences by Travinno Trusted DMC`,Vietnam:`Bespoke Vietnam tours and luxury cruises with Travinno Trusted DMC`,Singapore:`Singapore destination management services by Travinno Trusted DMC`,Malaysia:`Destination management services in Malaysia with Travinno Trusted DMC`,Bali:`Luxury holidays in Bali by Travinno Trusted DMC`})[e]||`Premium travel experiences in ${e} by Travinno Trusted DMC`;function l(){let e=(0,a.useRef)(null),t=(0,a.useRef)([]);(0,a.useRef)([]),(0,a.useRef)([]);let n=(0,a.useRef)([]),l=(0,a.useRef)(0),[u,d]=(0,a.useState)(0),[f,p]=(0,a.useState)(!1);return(0,a.useEffect)(()=>{s.forEach(e=>{let t=new Image;t.src=e.image})},[]),(0,a.useEffect)(()=>{let e=()=>{p(window.innerWidth<1024)};return e(),window.addEventListener(`resize`,e),()=>window.removeEventListener(`resize`,e)},[]),(0,a.useEffect)(()=>{r.registerPlugin(i);let n=e.current;if(!n)return;let a=t.current,o=r.context(()=>{a.forEach((e,t)=>{e&&(t===0?r.set(e,{y:`0px`,opacity:1,scale:1}):r.set(e,{y:`100vh`,opacity:1,scale:1}))});let e=r.timeline({scrollTrigger:{trigger:n,start:`top top`,end:`+=1400vh`,pin:!0,anticipatePin:1,scrub:1.5,invalidateOnRefresh:!0,onUpdate:e=>{let t=e.progress*5.8,n=0;n=t<.5?0:t<1.3?1:t<2.1?2:t<2.9?3:t<3.7?4:t<4.5?5:6,n!==l.current&&(l.current=n,d(n))}}}),t=window.innerWidth<1024;for(let n=1;n<7;n++){let r=(n-1)*.8;a[n-1]&&(t?e.to(a[n-1],{opacity:1,duration:1},r):e.to(a[n-1],{y:`-30px`,scale:.97,duration:1,ease:`power1.inOut`},r)),a[n]&&e.fromTo(a[n],{y:`100vh`,scale:1},{y:`0px`,scale:1,duration:1,ease:`power1.inOut`,force3D:!0},r)}e.to({},{duration:.8})},e);return setTimeout(()=>{i.refresh()},100),()=>{o.revert(),l.current=0}},[]),(0,o.jsxs)(`div`,{ref:e,className:`destinations-stack-section`,style:{position:`relative`,height:`100vh`,backgroundColor:`transparent`,width:`100%`,boxSizing:`border-box`},children:[(0,o.jsx)(`style`,{children:`
        .destinations-sticky-viewport {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          overflow: hidden;
          background-color: transparent;
          display: flex;
          justify-content: center;
          align-items: center;
          box-sizing: border-box;
          padding: 0;
        }

        .destinations-grid-bg {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-image: 
            linear-gradient(rgba(255, 255, 255, 0.015) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.015) 1px, transparent 1px);
          background-size: 50px 50px;
          pointer-events: none;
          z-index: 0;
          mask-image: radial-gradient(circle at 50% 50%, black 40%, transparent 95%);
          -webkit-mask-image: radial-gradient(circle at 50% 50%, black 40%, transparent 95%);
        }

        .destinations-cards-container {
          position: relative;
          width: 92%;
          height: 72vh; /* Reduced height by 15-20% for a wider cinematic feel */
          max-height: 720px;
          min-height: 520px;
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 2;
        }

        /* Redesigned Card Styling matching the editorial reference */
        .destination-card {
          position: absolute;
          width: 100%;
          height: 100%;
          background: #050505;
          border: 1px solid #181818;
          border-radius: 32px; /* Rounded corners: 32px */
          box-sizing: border-box;
          padding: 0; /* Removed overall padding so image can touch edges */
          display: flex;
          align-items: center;
          justify-content: space-between;
          overflow: hidden; /* Clip image corners automatically */
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.7);
          will-change: transform, opacity;
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
          transform: translate3d(0, 0, 0);
          transform-style: preserve-3d;
        }

        /* LEFT SIDE (45%) */
        .card-left-panel {
          width: 45%;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          box-sizing: border-box;
          padding: 40px 0 40px 48px; /* Reduced vertical padding */
          z-index: 5;
        }

        .left-panel-content {
          max-width: 85%; /* Content width limited to 85% */
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        /* RIGHT SIDE (55%) */
        .card-right-panel {
          width: 55%;
          height: 100%;
          position: relative;
          overflow: hidden;
          box-sizing: border-box;
          z-index: 2;
        }

        .destination-image-wrapper {
          width: 100%;
          height: 100%;
          position: relative;
          overflow: hidden;
        }

        .destination-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          opacity: 1;
          transition: transform 0.6s cubic-bezier(0.25, 1, 0.5, 1);
        }

        /* Subtle image hover zoom */
        .destination-card:hover .destination-img {
          transform: scale(1.03);
        }

        /* Typography & Spacing hierarchy */
        .dest-number-label {
          font-family: var(--font-sans);
          font-size: 0.75rem;
          font-weight: 600;
          color: rgba(255, 255, 255, 0.35);
          letter-spacing: 2px;
          text-transform: uppercase;
          margin-bottom: 12px; /* Tighter layout spacing */
        }

        .dest-number-label .red-accent {
          color: #C1121F;
          font-weight: 700;
        }

        .dest-meta-container {
          display: flex;
          flex-direction: column;
          gap: 10px;
          margin-bottom: 12px; /* Tighter layout spacing */
        }

        .dest-region-label {
          font-family: var(--font-sans);
          font-size: 0.8rem;
          font-weight: 500;
          color: rgba(255, 255, 255, 0.4);
          text-transform: uppercase;
          letter-spacing: 1.5px;
        }

        .dest-country-heading {
          margin: 0;
          display: flex;
          align-items: center;
          gap: 10px;
          line-height: 1;
        }

        .dest-country-name-script {
          font-family: 'Allura', cursive;
          background: linear-gradient(to bottom, #F5F2EC 20%, #E8A7A7 60%, #C1121F 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          display: inline-block;
          font-size: 2.2rem;
          font-weight: 400;
          letter-spacing: 0.02em;
          line-height: 1;
          text-transform: none;
        }

        .dest-flag-span {
          font-size: 1.5rem;
          vertical-align: middle;
        }

        .dest-editorial-heading {
          font-family: var(--font-heading); /* Canela */
          font-size: clamp(2rem, 2.8vw, 3rem); /* Slightly smaller for cinematic ratio */
          font-weight: 500;
          line-height: 1.15;
          color: #F5F2EC;
          margin: 0 0 16px 0; /* Tighter layout spacing */
          letter-spacing: 0.01em;
        }

        .dest-editorial-description {
          font-family: var(--font-sans);
          font-size: 0.92rem;
          line-height: 1.6;
          color: rgba(245, 242, 236, 0.7);
          margin: 0 0 20px 0; /* Tighter layout spacing */
          font-weight: 400;
        }

        /* Feature Pills Styling */
        .dest-feature-pills-container {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-bottom: 24px; /* Tighter layout spacing */
        }

        .dest-feature-pill {
          display: inline-block;
          padding: 6px 14px;
          border: 1px solid #1c1c1c;
          background-color: #0d0d0d;
          color: rgba(245, 242, 236, 0.8);
          font-family: var(--font-sans);
          font-size: 0.72rem;
          font-weight: 500;
          border-radius: 100px;
          cursor: default;
          transition: border-color 0.25s cubic-bezier(0.25, 1, 0.5, 1);
        }

        .dest-feature-pill:hover {
          border-color: #C1121F;
        }

        /* Explore Button Styling */
        .dest-button-container {
          display: flex;
        }

        .dest-explore-button {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 12px 28px;
          border: 1px solid #282828;
          background-color: #000000;
          color: #F5F2EC;
          font-family: var(--font-sans);
          font-size: 0.78rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 1px;
          border-radius: 100px;
          cursor: pointer;
          text-decoration: none;
          transition: all 0.3s cubic-bezier(0.25, 1, 0.5, 1);
        }

        .dest-explore-button .btn-arrow {
          transition: transform 0.3s ease;
        }

        .dest-explore-button:hover {
          border-color: #C1121F;
          box-shadow: 0 0 15px rgba(193, 18, 31, 0.25);
          color: #FFFFFF;
        }

        .dest-explore-button:hover .btn-arrow {
          transform: translateX(4px);
        }

        /* Responsive Mobile Layout (Tablet and Mobile stack) */
        @media (max-width: 1023px) {
          .destinations-section {
            padding-top: 40px !important;
          }

          .destinations-cards-wrapper {
            margin-top: -70px !important;
          }

          .destinations-stack-section {
            height: 100vh !important;
            height: 100dvh !important;
            padding: 0 !important;
          }

          .destinations-sticky-viewport {
            position: absolute !important;
            height: 100% !important;
            overflow: hidden !important;
            display: flex !important;
            justify-content: center !important;
            align-items: flex-start !important;
            padding-top: 96px !important;
            box-sizing: border-box !important;
          }

          .destinations-cards-container {
            width: 90% !important;
            height: 75vh !important;
            height: 75dvh !important;
            max-height: 640px !important;
            min-height: 480px !important;
            display: flex !important;
            justify-content: center !important;
            align-items: center !important;
            position: relative !important;
            gap: 0 !important;
            padding: 0 !important;
            box-sizing: border-box !important;
          }

          .destination-card {
            position: absolute !important;
            width: 100% !important;
            height: 100% !important;
            flex-direction: column-reverse !important;
            border-radius: 24px !important;
            box-shadow: 0 15px 40px rgba(0, 0, 0, 0.7) !important;
            will-change: transform, opacity;
            backface-visibility: hidden;
            -webkit-backface-visibility: hidden;
            transform: translate3d(0, 0, 0);
            transform-style: preserve-3d;
          }

          .card-left-panel {
            width: 100% !important;
            height: 60% !important;
            padding: 24px 20px !important;
            justify-content: flex-start !important;
            z-index: 5;
          }

          .left-panel-content {
            max-width: 100% !important;
          }

          .card-right-panel {
            width: 100% !important;
            height: 40% !important;
            border-radius: 0;
          }

          .destination-image-wrapper {
            border-radius: 0;
          }

          .dest-editorial-heading {
            font-size: 1.35rem !important;
            margin-bottom: 8px !important;
            line-height: 1.2 !important;
          }

          .dest-country-heading {
            font-size: 1.25rem !important;
          }

          .dest-country-name-script {
            font-size: 1.75rem !important;
          }

          .dest-editorial-description {
            font-size: 0.82rem !important;
            line-height: 1.45 !important;
            margin-bottom: 8px !important;
            display: -webkit-box !important;
            -webkit-line-clamp: 2 !important;
            -webkit-box-orient: vertical !important;
            overflow: hidden !important;
          }

          .dest-feature-pills-container {
            margin-bottom: 12px !important;
            gap: 6px !important;
          }

          .dest-feature-pill {
            padding: 4px 10px !important;
            font-size: 0.65rem !important;
          }

          .dest-explore-button {
            padding: 8px 20px !important;
            font-size: 0.72rem !important;
          }
          
          .dest-number-label {
            margin-bottom: 6px !important;
          }
          
          .dest-meta-container {
            margin-bottom: 6px !important;
            gap: 4px !important;
          }
        }
      `}),(0,o.jsxs)(`div`,{className:`destinations-sticky-viewport`,children:[(0,o.jsx)(`div`,{className:`destinations-grid-bg`}),(0,o.jsx)(`div`,{className:`destinations-cards-container`,children:s.map((e,r)=>(0,o.jsxs)(`div`,{ref:e=>{t.current[r]=e},className:`destination-card`,style:{zIndex:r+1},children:[(0,o.jsx)(`div`,{className:`card-left-panel`,children:(0,o.jsxs)(`div`,{className:`left-panel-content`,children:[(0,o.jsxs)(`div`,{className:`dest-meta-container`,children:[(0,o.jsx)(`span`,{className:`dest-region-label`,children:e.region}),(0,o.jsx)(`h4`,{className:`dest-country-heading`,children:(0,o.jsx)(`span`,{className:`dest-country-name-script`,children:e.countryName})})]}),(0,o.jsx)(`h3`,{className:`dest-editorial-heading`,children:e.heading}),(0,o.jsx)(`p`,{className:`dest-editorial-description`,children:e.description}),(0,o.jsx)(`div`,{className:`dest-feature-pills-container`,children:e.highlights.map((e,t)=>(0,o.jsx)(`span`,{className:`dest-feature-pill`,children:e},`high-${t}`))}),(0,o.jsx)(`div`,{className:`dest-button-container`,children:(0,o.jsxs)(`a`,{href:`#contact`,className:`dest-explore-button`,children:[`Explore Destination `,(0,o.jsx)(`span`,{className:`btn-arrow`,children:`→`})]})})]})}),(0,o.jsx)(`div`,{className:`card-right-panel`,children:(0,o.jsx)(`div`,{className:`destination-image-wrapper`,children:(0,o.jsx)(`img`,{ref:e=>{n.current[r]=e},src:e.image,alt:c(e.title),className:`destination-img`})})})]},`dest-card-${r}`))})]})]})}var u=()=>(0,o.jsx)(`div`,{className:`w-full h-min-screen`,children:(0,o.jsx)(l,{})});export{u as DemoOne};