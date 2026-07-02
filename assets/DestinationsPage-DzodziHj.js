const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-BpfYvFc7.js","assets/rolldown-runtime-Cyuzqnbw.js","assets/vendor-lenis-DIx8pWKM.js","assets/vendor-cobe-DZEoYHiu.js","assets/vendor-CFXIwl6n.js","assets/vendor-framer-B94rnuNZ.js","assets/vendor-gsap-B2JeSRMT.js","assets/index-QHrOtV1F.css"])))=>i.map(i=>d[i]);
import{a as e}from"./rolldown-runtime-Cyuzqnbw.js";import{A as t,Bt as n,Ht as r,k as i}from"./vendor-CFXIwl6n.js";import{i as a}from"./vendor-framer-B94rnuNZ.js";import{r as o}from"./index-BpfYvFc7.js";var s=e(r(),1),c=n();function l(){let[e,n]=(0,s.useState)(`All`),[r,l]=(0,s.useState)(null),[u,d]=(0,s.useState)([]);(0,s.useEffect)(()=>{o(async()=>{let{db:e}=await import(`./index-BpfYvFc7.js`).then(e=>e.n);return{db:e}},__vite__mapDeps([0,1,2,3,4,5,6,7])).then(({db:e})=>{d(e.getDestinations());let t=()=>d(e.getDestinations());return window.addEventListener(`travinno-db-update`,t),()=>window.removeEventListener(`travinno-db-update`,t)})},[]),(0,s.useEffect)(()=>{window.scrollTo(0,0),window.lenis&&window.lenis.scrollTo(0,{immediate:!0})},[r]),(0,s.useEffect)(()=>{let e=()=>{let e=window.location.hash.match(/^#destination-([^?#/]+)/);if(e){let t=e[1],n=u.find(e=>e.id===t);if(n){l(n);return}}l(null)};return window.addEventListener(`hashchange`,e),e(),()=>window.removeEventListener(`hashchange`,e)},[u]);let f=[`All`,`Middle East`,`Southeast Asia`,`East Africa`],p=e===`All`?u:u.filter(t=>t.region===e);return(0,c.jsxs)(`div`,{style:{backgroundColor:`#050505`,color:`#F5F2EC`,width:`100%`,minHeight:`100vh`,position:`relative`,overflowX:`hidden`,boxSizing:`border-box`},children:[(0,c.jsx)(`style`,{children:`
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
          font-size: clamp(0.92rem, 1.4vw, 1.08rem);
          line-height: 1.8;
          color: rgba(245, 242, 236, 0.75);
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
      `}),r?(0,c.jsxs)(`div`,{className:`destination-detail-page`,children:[(0,c.jsxs)(`div`,{className:`destination-detail-hero`,children:[(0,c.jsx)(`img`,{src:r.image&&(r.image.startsWith(`data:`)||r.image.startsWith(`http`))?r.image:`/TRAVINNO/${r.image}`,alt:r.name}),(0,c.jsxs)(`div`,{className:`destination-detail-hero-overlay`,children:[(0,c.jsx)(`div`,{className:`destination-detail-hero-content`,style:{marginBottom:`auto`},children:(0,c.jsxs)(`button`,{onClick:()=>{l(null),window.location.hash=`destinations`},className:`back-nav-btn`,children:[(0,c.jsx)(t,{size:16}),`Back to Destinations`]})}),(0,c.jsxs)(`div`,{className:`destination-detail-hero-content`,children:[(0,c.jsxs)(`div`,{className:`destination-detail-meta`,children:[(0,c.jsx)(`span`,{style:{color:`#C1121F`,fontWeight:600,textTransform:`uppercase`,letterSpacing:`0.05em`},children:r.region}),(0,c.jsx)(`span`,{style:{width:`4px`,height:`4px`,backgroundColor:`rgba(245, 242, 236, 0.3)`,borderRadius:`50%`}}),(0,c.jsx)(`span`,{children:`Custom Itinerary`})]}),(0,c.jsx)(`h1`,{className:`destination-detail-title`,children:r.name}),(0,c.jsx)(`p`,{style:{color:`rgba(245, 242, 236, 0.7)`,fontSize:`0.95rem`,margin:`4px 0 0 0`,fontWeight:300},children:r.tagline})]})]})]}),(0,c.jsxs)(`div`,{className:`destination-detail-body`,children:[(0,c.jsx)(`p`,{className:`destination-detail-desc`,style:{marginBottom:`64px`},children:r.description}),(0,c.jsx)(`div`,{style:{display:`flex`,justifyContent:`center`},children:(0,c.jsxs)(`a`,{href:`#contact`,style:{backgroundColor:`#C1121F`,color:`#FFFFFF`,fontFamily:`var(--font-sans)`,fontSize:`0.82rem`,fontWeight:600,letterSpacing:`1.5px`,textTransform:`uppercase`,textDecoration:`none`,padding:`12px 32px`,borderRadius:`100px`,boxShadow:`0 8px 24px rgba(193, 18, 31, 0.25)`,transition:`all 0.3s ease`,display:`flex`,alignItems:`center`,gap:`8px`},onMouseEnter:e=>{e.currentTarget.style.backgroundColor=`#a00f19`,e.currentTarget.style.boxShadow=`0 8px 28px rgba(193, 18, 31, 0.45)`,e.currentTarget.style.transform=`translateY(-2px)`},onMouseLeave:e=>{e.currentTarget.style.backgroundColor=`#C1121F`,e.currentTarget.style.boxShadow=`0 8px 24px rgba(193, 18, 31, 0.25)`,e.currentTarget.style.transform=`translateY(0px)`},children:[`Inquire About This Journey `,(0,c.jsx)(i,{size:14})]})})]})]}):(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(`div`,{style:{position:`absolute`,inset:0,backgroundColor:`#050505`,zIndex:0,pointerEvents:`none`}}),(0,c.jsx)(`div`,{style:{position:`absolute`,inset:0,backgroundImage:`
                linear-gradient(rgba(245, 242, 236, 0.04) 1px, transparent 1px),
                linear-gradient(90deg, rgba(245, 242, 236, 0.04) 1px, transparent 1px)
              `,backgroundSize:`100px 100px, 100px 100px, 100px 100px`,backgroundRepeat:`repeat, repeat, repeat`,zIndex:2,pointerEvents:`none`}}),(0,c.jsx)(`div`,{className:`hero-artwork-container`,style:{position:`absolute`,right:0,top:0,width:`54%`,height:`580px`,pointerEvents:`none`,zIndex:1,overflow:`hidden`,WebkitMaskImage:`linear-gradient(to right, transparent 0%, black 70%)`,maskImage:`linear-gradient(to right, transparent 0%, black 70%)`},children:(0,c.jsx)(a.div,{animate:{y:[0,-3,0]},transition:{duration:6,ease:`easeInOut`,repeat:1/0},style:{width:`100%`,height:`100%`,position:`relative`},children:(0,c.jsx)(`img`,{src:`/TRAVINNO/images/destinations_hero.png`,alt:`Global Destinations map compass`,style:{width:`100%`,height:`100%`,objectFit:`cover`,opacity:.38,filter:`grayscale(100%) contrast(80%) brightness(65%)`,transition:`opacity 0.5s ease`,WebkitMaskImage:`linear-gradient(to bottom, black 82%, transparent 100%)`,maskImage:`linear-gradient(to bottom, black 82%, transparent 100%)`}})})}),(0,c.jsxs)(`div`,{className:`destinations-container`,children:[(0,c.jsx)(`section`,{style:{marginBottom:`40px`,position:`relative`},children:(0,c.jsxs)(`div`,{style:{maxWidth:`640px`,position:`relative`,zIndex:3},children:[(0,c.jsxs)(a.span,{initial:{opacity:0,y:12},animate:{opacity:1,y:0},transition:{duration:.8,ease:[.16,1,.3,1]},style:{display:`inline-flex`,alignItems:`center`,gap:`6px`,padding:`4px 12px`,border:`1px solid rgba(193, 18, 31, 0.18)`,borderRadius:`100px`,fontFamily:`var(--font-sans)`,fontSize:`0.72rem`,fontWeight:500,letterSpacing:`0.05em`,color:`rgba(245, 242, 236, 0.85)`,marginBottom:`16px`,background:`rgba(193, 18, 31, 0.05)`,backdropFilter:`blur(4px)`,WebkitBackdropFilter:`blur(4px)`},children:[(0,c.jsx)(`span`,{style:{width:`6px`,height:`6px`,backgroundColor:`#C1121F`,borderRadius:`50%`,display:`inline-block`}}),`Explore`]}),(0,c.jsxs)(a.h1,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.8,ease:[.16,1,.3,1],delay:.1},style:{fontFamily:`var(--font-heading)`,fontSize:`clamp(2.2rem, 5vw, 3.8rem)`,fontWeight:450,lineHeight:1.15,color:`#F5F2EC`,margin:`0 0 16px 0`,letterSpacing:`-0.5px`},children:[`Our Extraordinary `,(0,c.jsx)(`br`,{}),(0,c.jsx)(`span`,{style:{fontFamily:`'Allura', cursive`,fontSize:`1.25em`,fontWeight:400,letterSpacing:`0.02em`,lineHeight:`1.2`,display:`inline-block`,marginTop:`-4px`,paddingBottom:`0px`,background:`linear-gradient(to bottom, #F5F2EC 10%, #D64550 50%, #C1121F 90%)`,WebkitBackgroundClip:`text`,WebkitTextFillColor:`transparent`,backgroundClip:`text`},children:`Destinations`})]}),(0,c.jsx)(a.p,{initial:{opacity:0,y:10},animate:{opacity:.75,y:0},transition:{duration:.8,ease:[.16,1,.3,1],delay:.2},style:{fontFamily:`var(--font-sans)`,fontSize:`clamp(1rem, 1.8vw, 1.2rem)`,lineHeight:1.65,color:`#F5F2EC`,margin:0,maxWidth:`680px`,fontWeight:300},children:`A curated collection of the world's most remarkable luxury destinations, bespoke itineraries, and elite travel experiences.`})]})}),(0,c.jsxs)(`section`,{style:{position:`relative`},children:[(0,c.jsx)(`div`,{className:`filter-tabs-container`,children:f.map(t=>(0,c.jsx)(`button`,{className:`filter-tab ${e===t?`active`:``}`,onClick:()=>n(t),children:t},t))}),(0,c.jsx)(`div`,{className:`destinations-grid`,children:p.map((e,t)=>(0,c.jsxs)(a.div,{initial:{opacity:0,y:24},whileInView:{opacity:1,y:0},viewport:{once:!0,margin:`-40px`},transition:{duration:.8,ease:[.16,1,.3,1],delay:t*.06},className:`destination-editorial-card`,onClick:()=>{l(e),window.location.hash=`destination-${e.id}`},children:[(0,c.jsx)(`div`,{className:`destination-img-wrapper`,children:(0,c.jsx)(`img`,{src:e.image&&(e.image.startsWith(`data:`)||e.image.startsWith(`http`))?e.image:`/TRAVINNO/${e.image}`,alt:e.name})}),(0,c.jsxs)(`div`,{className:`destination-content-block`,children:[(0,c.jsxs)(`div`,{children:[(0,c.jsx)(`div`,{className:`destination-meta-line`,children:(0,c.jsx)(`span`,{className:`destination-region-badge`,children:e.region})}),(0,c.jsx)(`h3`,{className:`destination-card-title`,children:e.name}),(0,c.jsx)(`p`,{className:`destination-card-tagline`,children:e.tagline})]}),(0,c.jsxs)(`div`,{className:`destination-card-footer`,children:[(0,c.jsx)(`span`,{children:`Explore Bespoke Journeys`}),(0,c.jsx)(`div`,{className:`destination-card-arrow`,children:(0,c.jsx)(i,{size:14})})]})]})]},e.id))})]})]})]})]})}export{l as default};