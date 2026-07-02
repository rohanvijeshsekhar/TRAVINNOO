const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-BpfYvFc7.js","assets/rolldown-runtime-Cyuzqnbw.js","assets/vendor-lenis-DIx8pWKM.js","assets/vendor-cobe-DZEoYHiu.js","assets/vendor-CFXIwl6n.js","assets/vendor-framer-B94rnuNZ.js","assets/vendor-gsap-B2JeSRMT.js","assets/index-QHrOtV1F.css"])))=>i.map(i=>d[i]);
import{a as e}from"./rolldown-runtime-Cyuzqnbw.js";import{A as t,Bt as n,C as r,Ht as i,k as a,w as o}from"./vendor-CFXIwl6n.js";import{i as s}from"./vendor-framer-B94rnuNZ.js";import{r as c}from"./index-BpfYvFc7.js";var l=e(i(),1),u=n();function d(){let[e,n]=(0,l.useState)(null),[i,d]=(0,l.useState)([]),f=(0,l.useRef)(null);return(0,l.useEffect)(()=>{c(async()=>{let{db:e}=await import(`./index-BpfYvFc7.js`).then(e=>e.n);return{db:e}},__vite__mapDeps([0,1,2,3,4,5,6,7])).then(({db:e})=>{d(e.getBlogs());let t=()=>d(e.getBlogs());return window.addEventListener(`travinno-db-update`,t),()=>window.removeEventListener(`travinno-db-update`,t)})},[]),(0,l.useEffect)(()=>{window.scrollTo(0,0),window.lenis&&window.lenis.scrollTo(0,{immediate:!0})},[e]),(0,l.useEffect)(()=>{let e=()=>{let e=window.location.hash.match(/^#blog-post-(\d+)/);if(e){let t=parseInt(e[1]),r=i.find(e=>e.id===t);if(r){n(r);return}}n(null)};return window.addEventListener(`hashchange`,e),e(),()=>window.removeEventListener(`hashchange`,e)},[i]),(0,u.jsxs)(`div`,{style:{backgroundColor:`#050505`,color:`#F5F2EC`,width:`100%`,minHeight:`100vh`,position:`relative`,overflowX:`hidden`,boxSizing:`border-box`},children:[(0,u.jsx)(`style`,{children:`
        .blog-container {
          position: relative;
          z-index: 3;
          max-width: 1200px;
          margin: 0 auto;
          padding: 160px 24px 120px 24px;
          box-sizing: border-box;
        }

        .carousel-viewport {
          display: flex;
          gap: 24px;
          overflow-x: auto;
          scroll-behavior: smooth;
          padding: 16px 4px 32px 4px;
          margin-top: 12px;
          scrollbar-width: none; /* Firefox */
          -ms-overflow-style: none;  /* IE/Edge */
        }
        .carousel-viewport::-webkit-scrollbar {
          display: none; /* Chrome/Safari */
        }

        .premium-square-card {
          flex: 0 0 calc(25% - 18px);
          min-width: 270px;
          display: flex;
          flex-direction: column;
          background: linear-gradient(180deg, rgba(16, 16, 20, 0.75) 0%, rgba(10, 10, 12, 0.95) 100%);
          border: 1px solid rgba(245, 242, 236, 0.08);
          border-radius: 20px;
          overflow: hidden;
          box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.03), 0 12px 30px rgba(0, 0, 0, 0.55);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          transition: all 0.45s cubic-bezier(0.16, 1, 0.3, 1);
          box-sizing: border-box;
          cursor: pointer;
          aspect-ratio: 1 / 1.12;
          position: relative;
        }

        .premium-square-card::before {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at 10% 20%, rgba(193, 18, 31, 0.02) 0%, transparent 40%);
          pointer-events: none;
          z-index: 0;
        }

        .premium-square-card:hover {
          border-color: rgba(193, 18, 31, 0.6);
          background: linear-gradient(180deg, rgba(24, 24, 30, 0.85) 0%, rgba(15, 15, 18, 0.98) 100%);
          transform: translateY(-6px);
          box-shadow: 
            inset 0 1px 0 rgba(255, 255, 255, 0.05),
            0 20px 40px rgba(0, 0, 0, 0.65),
            0 0 40px rgba(193, 18, 31, 0.06);
        }

        .card-image-wrapper {
          width: 100%;
          height: 48%;
          overflow: hidden;
          position: relative;
          border-bottom: 1px solid rgba(245, 242, 236, 0.06);
        }

        .card-image-wrapper img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          filter: grayscale(100%) contrast(90%) brightness(70%);
          transition: transform 0.65s cubic-bezier(0.16, 1, 0.3, 1), filter 0.4s ease;
        }

        .premium-square-card:hover .card-image-wrapper img {
          transform: scale(1.08);
          filter: grayscale(100%) contrast(100%) brightness(85%);
        }

        .card-info-content {
          padding: 18px 20px;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          box-sizing: border-box;
          z-index: 1;
        }

        .card-meta {
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-family: var(--font-sans);
          font-size: 0.68rem;
          color: rgba(245, 242, 236, 0.45);
          margin-bottom: 4px;
        }

        .card-category {
          color: #C1121F;
          font-weight: 600;
          letter-spacing: 0.05em;
          text-transform: uppercase;
        }

        .card-title {
          font-family: var(--font-heading);
          font-size: 1.08rem;
          font-weight: 450;
          color: #F5F2EC;
          margin: 0 0 8px 0;
          line-height: 1.35;
          letter-spacing: -0.1px;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
          transition: color 0.3s ease;
        }

        .premium-square-card:hover .card-title {
          color: #FFFFFF;
        }

        .card-desc {
          font-family: var(--font-sans);
          font-size: 0.8rem;
          line-height: 1.45;
          color: rgba(245, 242, 236, 0.6);
          margin: 0;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
          font-weight: 300;
        }

        .card-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-top: 10px;
          font-size: 0.68rem;
          color: rgba(245, 242, 236, 0.4);
          font-family: var(--font-sans);
        }

        .card-action-arrow {
          display: flex;
          align-items: center;
          color: rgba(245, 242, 236, 0.6);
          transition: all 0.3s ease;
        }

        .premium-square-card:hover .card-action-arrow {
          color: #C1121F;
          transform: translateX(4px);
        }

        .slider-control-btn {
          width: 38px;
          height: 38px;
          border-radius: 50%;
          border: 1px solid rgba(245, 242, 236, 0.12);
          background-color: rgba(10, 10, 12, 0.5);
          color: #F5F2EC;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s ease;
          outline: none;
        }

        .slider-control-btn:hover {
          border-color: #C1121F;
          color: #FFFFFF;
          background-color: rgba(193, 18, 31, 0.12);
        }

        /* EDITORIAL DETAIL VIEW STYLING */
        .editorial-detail-container {
          position: relative;
          z-index: 3;
          width: 100%;
          box-sizing: border-box;
        }

        .editorial-detail-hero {
          width: 100%;
          height: 33.3vh;
          min-height: 320px;
          position: relative;
          overflow: hidden;
          border-bottom: 1px solid rgba(245, 242, 236, 0.08);
        }

        .editorial-detail-hero img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          filter: grayscale(100%) contrast(95%) brightness(60%);
        }

        .editorial-detail-hero-overlay {
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

        .editorial-detail-hero-content {
          max-width: 800px;
          margin: 0 auto;
          width: 100%;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .editorial-detail-meta {
          display: flex;
          align-items: center;
          gap: 16px;
          font-family: var(--font-sans);
          font-size: 0.75rem;
          font-weight: 500;
          color: rgba(245, 242, 236, 0.65);
        }

        .editorial-detail-title {
          font-family: var(--font-heading);
          font-size: clamp(1.8rem, 4vw, 2.8rem);
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
          fontSize: 0.82rem;
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

        .editorial-body-content {
          max-width: 780px;
          margin: 0 auto;
          padding: 56px 24px 140px 24px;
          box-sizing: border-box;
          font-family: var(--font-sans);
          font-size: clamp(1rem, 1.6vw, 1.12rem);
          line-height: 1.85;
          color: rgba(245, 242, 236, 0.78);
          font-weight: 300;
        }

        .editorial-body-content p {
          margin-bottom: 28px;
        }

        .editorial-body-content .article-lead {
          font-size: clamp(1.15rem, 2vw, 1.35rem);
          line-height: 1.7;
          color: #F5F2EC;
          margin-bottom: 40px;
          font-weight: 300;
          border-left: 2px solid #C1121F;
          padding-left: 20px;
        }

        .editorial-body-content h2 {
          font-family: var(--font-heading);
          font-size: clamp(1.4rem, 2.5vw, 1.8rem);
          font-weight: 450;
          color: #F5F2EC;
          margin: 48px 0 20px 0;
          letter-spacing: -0.2px;
        }

        .editorial-body-content blockquote {
          margin: 40px 0;
          padding: 24px 32px;
          background: rgba(193, 18, 31, 0.03);
          border-left: 3px solid #C1121F;
          border-radius: 0 12px 12px 0;
          font-family: var(--font-heading);
          font-size: 1.3rem;
          font-style: italic;
          color: #FFFFFF;
          line-height: 1.6;
        }

        .editorial-body-content ul {
          margin: 24px 0 32px 0;
          padding-left: 24px;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .editorial-body-content li {
          margin-bottom: 4px;
        }

        .editorial-body-content strong {
          color: #F5F2EC;
          font-weight: 500;
        }

        @media (max-width: 1200px) {
          .premium-square-card {
            flex: 0 0 calc(33.333% - 16px);
          }
        }

        @media (max-width: 900px) {
          .premium-square-card {
            flex: 0 0 calc(50% - 12px);
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
          .carousel-viewport {
            scroll-snap-type: x mandatory;
            padding-left: 16px !important;
            padding-right: 16px !important;
            scroll-padding: 0 16px;
          }
          .premium-square-card {
            flex: 0 0 calc(100% - 32px) !important;
            min-width: unset !important;
            scroll-snap-align: center;
            scroll-snap-stop: always;
          }
        }
      `}),e?(0,u.jsxs)(`div`,{className:`editorial-detail-container`,children:[(0,u.jsxs)(`div`,{className:`editorial-detail-hero`,children:[(0,u.jsx)(`img`,{src:e.image&&(e.image.startsWith(`data:`)||e.image.startsWith(`http`))?e.image:`/TRAVINNO/${e.image}`,alt:e.title}),(0,u.jsxs)(`div`,{className:`editorial-detail-hero-overlay`,children:[(0,u.jsx)(`div`,{className:`editorial-detail-hero-content`,style:{marginBottom:`auto`},children:(0,u.jsxs)(`button`,{onClick:()=>{n(null),window.location.hash=`blog`},className:`back-nav-btn`,children:[(0,u.jsx)(t,{size:16}),`Back to Journal`]})}),(0,u.jsxs)(`div`,{className:`editorial-detail-hero-content`,children:[(0,u.jsxs)(`div`,{className:`editorial-detail-meta`,children:[(0,u.jsx)(`span`,{style:{color:`#C1121F`,fontWeight:600,textTransform:`uppercase`,letterSpacing:`0.05em`},children:e.category}),(0,u.jsx)(`span`,{style:{width:`4px`,height:`4px`,backgroundColor:`rgba(245, 242, 236, 0.3)`,borderRadius:`50%`}}),(0,u.jsx)(`span`,{children:e.date}),(0,u.jsx)(`span`,{style:{width:`4px`,height:`4px`,backgroundColor:`rgba(245, 242, 236, 0.3)`,borderRadius:`50%`}}),(0,u.jsx)(`span`,{children:e.readTime})]}),(0,u.jsx)(`h1`,{className:`editorial-detail-title`,children:e.title})]})]})]}),(0,u.jsx)(`div`,{className:`editorial-body-content`,children:typeof e.content==`string`?(0,u.jsx)(`div`,{dangerouslySetInnerHTML:{__html:e.content}}):e.content})]}):(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(`div`,{className:`hero-artwork-container`,style:{position:`absolute`,right:0,top:0,width:`54%`,height:`580px`,pointerEvents:`none`,zIndex:1,overflow:`hidden`,WebkitMaskImage:`linear-gradient(to right, transparent 0%, black 70%)`,maskImage:`linear-gradient(to right, transparent 0%, black 70%)`},children:(0,u.jsx)(s.div,{animate:{y:[0,-3,0]},transition:{duration:6,ease:`easeInOut`,repeat:1/0},style:{width:`100%`,height:`100%`,position:`relative`},children:(0,u.jsx)(`img`,{src:`/TRAVINNO/images/blog_hero.png`,alt:`Travel Planning Editorial`,style:{width:`100%`,height:`100%`,objectFit:`cover`,opacity:.38,filter:`grayscale(100%) contrast(80%) brightness(65%)`,transition:`opacity 0.5s ease`,WebkitMaskImage:`linear-gradient(to bottom, black 82%, transparent 100%)`,maskImage:`linear-gradient(to bottom, black 82%, transparent 100%)`}})})}),(0,u.jsxs)(`div`,{className:`blog-container`,children:[(0,u.jsx)(`section`,{style:{marginBottom:`48px`,position:`relative`},children:(0,u.jsxs)(`div`,{style:{maxWidth:`640px`,position:`relative`,zIndex:3},children:[(0,u.jsxs)(s.span,{initial:{opacity:0,y:12},animate:{opacity:1,y:0},transition:{duration:.8,ease:[.16,1,.3,1]},style:{display:`inline-flex`,alignItems:`center`,gap:`6px`,padding:`4px 12px`,border:`1px solid rgba(193, 18, 31, 0.18)`,borderRadius:`100px`,fontFamily:`var(--font-sans)`,fontSize:`0.72rem`,fontWeight:500,letterSpacing:`0.05em`,color:`rgba(245, 242, 236, 0.85)`,marginBottom:`16px`,background:`rgba(193, 18, 31, 0.05)`,backdropFilter:`blur(4px)`,WebkitBackdropFilter:`blur(4px)`},children:[(0,u.jsx)(`span`,{style:{width:`6px`,height:`6px`,backgroundColor:`#C1121F`,borderRadius:`50%`,display:`inline-block`}}),`BLOG`]}),(0,u.jsxs)(s.h1,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.8,ease:[.16,1,.3,1],delay:.1},style:{fontFamily:`var(--font-heading)`,fontSize:`clamp(2.2rem, 5vw, 3.8rem)`,fontWeight:450,lineHeight:1.15,color:`#F5F2EC`,margin:`0 0 16px 0`,letterSpacing:`-0.5px`},children:[`Travel Knowledge `,(0,u.jsx)(`br`,{}),(0,u.jsx)(`span`,{style:{fontFamily:`'Allura', cursive`,fontSize:`1.25em`,fontWeight:400,letterSpacing:`0.02em`,lineHeight:`1.2`,display:`inline-block`,marginTop:`-4px`,paddingBottom:`0px`,background:`linear-gradient(to bottom, #F5F2EC 20%, #E8A7A7 60%, #C1121F 100%)`,WebkitBackgroundClip:`text`,WebkitTextFillColor:`transparent`,backgroundClip:`text`},children:`& Storytelling`})]}),(0,u.jsx)(s.p,{initial:{opacity:0,y:10},animate:{opacity:.75,y:0},transition:{duration:.8,ease:[.16,1,.3,1],delay:.2},style:{fontFamily:`var(--font-sans)`,fontSize:`clamp(1rem, 1.8vw, 1.2rem)`,lineHeight:1.65,color:`#F5F2EC`,margin:0,maxWidth:`680px`,fontWeight:300},children:`Reflections, guides and perspectives on the art of luxury travel and destination planning.`})]})}),(0,u.jsxs)(`section`,{style:{position:`relative`},children:[(0,u.jsxs)(`div`,{style:{display:`flex`,justifyContent:`space-between`,alignItems:`center`,marginBottom:`16px`},children:[(0,u.jsxs)(s.div,{initial:{opacity:0,y:15},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.8,ease:[.16,1,.3,1]},style:{display:`inline-flex`,alignItems:`center`,gap:`6px`,padding:`4px 12px`,border:`1px solid rgba(193, 18, 31, 0.18)`,borderRadius:`100px`,fontFamily:`var(--font-sans)`,fontSize:`0.72rem`,fontWeight:500,letterSpacing:`0.05em`,color:`rgba(245, 242, 236, 0.85)`,background:`rgba(193, 18, 31, 0.05)`,backdropFilter:`blur(4px)`,WebkitBackdropFilter:`blur(4px)`},children:[(0,u.jsx)(`span`,{style:{width:`6px`,height:`6px`,backgroundColor:`#C1121F`,borderRadius:`50%`,display:`inline-block`}}),`Latest Editorial`]}),(0,u.jsxs)(`div`,{style:{display:`flex`,gap:`10px`,zIndex:10},children:[(0,u.jsx)(`button`,{onClick:()=>{f.current&&f.current.scrollBy({left:-340,behavior:`smooth`})},"aria-label":`Previous posts`,className:`slider-control-btn`,children:(0,u.jsx)(o,{size:18})}),(0,u.jsx)(`button`,{onClick:()=>{f.current&&f.current.scrollBy({left:340,behavior:`smooth`})},"aria-label":`Next posts`,className:`slider-control-btn`,children:(0,u.jsx)(r,{size:18})})]})]}),(0,u.jsxs)(`div`,{className:`carousel-viewport`,ref:f,children:[i.map((e,t)=>(0,u.jsxs)(s.div,{initial:{opacity:0,y:24},whileInView:{opacity:1,y:0},viewport:{once:!0,margin:`-40px`},transition:{duration:.8,ease:[.16,1,.3,1],delay:t*.08},className:`premium-square-card`,onClick:()=>{n(e),window.location.hash=`blog-post-${e.id}`},children:[(0,u.jsx)(`div`,{className:`card-image-wrapper`,children:(0,u.jsx)(`img`,{src:e.image&&(e.image.startsWith(`data:`)||e.image.startsWith(`http`))?e.image:`/TRAVINNO/${e.image}`,alt:e.title})}),(0,u.jsxs)(`div`,{className:`card-info-content`,children:[(0,u.jsxs)(`div`,{children:[(0,u.jsxs)(`div`,{className:`card-meta`,children:[(0,u.jsx)(`span`,{className:`card-category`,children:e.category}),(0,u.jsx)(`span`,{style:{fontSize:`0.7rem`},children:e.readTime})]}),(0,u.jsx)(`h3`,{className:`card-title`,children:e.title}),(0,u.jsx)(`p`,{className:`card-desc`,children:e.description})]}),(0,u.jsxs)(`div`,{className:`card-footer`,children:[(0,u.jsx)(`span`,{children:e.date}),(0,u.jsx)(`div`,{className:`card-action-arrow`,children:(0,u.jsx)(a,{size:14})})]})]})]},e.id)),(0,u.jsx)(`div`,{style:{flex:`0 0 24px`,width:`24px`,pointerEvents:`none`}})]})]})]})]})]})}export{d as default};