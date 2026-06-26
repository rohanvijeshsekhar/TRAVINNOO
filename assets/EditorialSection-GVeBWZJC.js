import{a as e}from"./rolldown-runtime-Cyuzqnbw.js";import{_t as t,yt as n}from"./vendor-BeahlPft.js";import{i as r,t as i}from"./vendor-framer-B2K9iibk.js";import{t as a}from"./vendor-cobe-DSj07kWh.js";var o=e(n(),1),s=t();function c({to:e,suffix:t=``,duration:n=1.8}){let[r,a]=(0,o.useState)(0),c=(0,o.useRef)(null),l=i(c,{once:!0,margin:`-50px`});return(0,o.useEffect)(()=>{if(!l)return;let t=null,r=i=>{t||=i;let o=Math.min((i-t)/(n*1e3),1),s=o*(2-o);a(Math.floor(s*e)),o<1&&window.requestAnimationFrame(r)};window.requestAnimationFrame(r)},[l,e,n]),(0,s.jsxs)(`span`,{ref:c,style:{color:`inherit`},children:[r,t]})}function l(){let e={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.12,delayChildren:.05}}},t={hidden:{opacity:0,y:30},visible:{opacity:1,y:0,transition:{duration:.85,ease:[.16,1,.3,1]}}};return(0,s.jsxs)(`section`,{className:`editorial-section`,children:[(0,s.jsx)(`style`,{children:`
        .editorial-section {
          position: relative;
          background-color: #0B0B0B;
          background-image: linear-gradient(to bottom, #050505 0%, #0B0B0B 120px, #0B0B0B calc(100% - 120px), #050505 100%);
          padding: 90px 0;
          overflow: hidden;
          width: 100%;
        }


        /* Standardized subtle check grid (7% opacity, 50px size, layered bottom fade) */
        .editorial-grid-bg {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-image: 
            linear-gradient(to bottom, #050505 0%, transparent 20%, transparent 80%, #050505 100%),
            linear-gradient(rgba(247, 245, 242, 0.07) 1px, transparent 1px),
            linear-gradient(90deg, rgba(247, 245, 242, 0.07) 1px, transparent 1px);
          background-size: 100% 100%, 50px 50px, 50px 50px;
          background-repeat: no-repeat, repeat, repeat;
          pointer-events: none;
          z-index: 0;
        }

        .editorial-container {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 50px;
          display: grid;
          grid-template-columns: 45% 55%;
          grid-template-areas:
            "left-header right-text"
            "left-globe right-text";
          gap: 20px 0;
          position: relative;
          z-index: 2;
          align-items: start;
        }

        .editorial-left-header {
          grid-area: left-header;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          text-align: left;
          position: relative;
          top: 35px;
          z-index: 10;
          padding-right: 45px;
        }

        .editorial-left-globe {
          grid-area: left-globe;
          position: relative;
          width: 100%;
          height: 420px; /* Spacing wrapper for globe bleed */
          margin-top: 10px;
          padding-right: 45px;
        }

        .editorial-right-text {
          grid-area: right-text;
          padding-top: 130px;
          padding-left: 45px;
          position: relative;
          display: flex;
          justify-content: flex-start;
          align-items: flex-start;
          text-align: left;
        }


        .editorial-badge {
          align-self: flex-start;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 6px 16px;
          border: 1px solid rgba(193, 18, 31, 0.25);
          border-radius: 100px;
          font-family: var(--font-sans);
          font-size: 0.72rem;
          font-weight: 500;
          letter-spacing: 0.05em;
          text-transform: none;
          color: rgba(255, 255, 255, 0.85);
          margin-bottom: 12px;
          background: rgba(193, 18, 31, 0.05);
          backdrop-filter: blur(4px);
        }

        .editorial-badge .red-dot {
          width: 6px;
          height: 6px;
          background-color: #C1121F;
          border-radius: 50%;
          display: inline-block;
        }

        /* Heading size reduced by 35% and placed in the upper-left corner */
        .editorial-heading {
          font-family: var(--font-heading);
          font-size: clamp(2rem, 3.8vw, 3.2rem);
          font-weight: 500;
          line-height: 1.15;
          letter-spacing: 0.02em;
          color: var(--text-warm-white);
          margin: 0;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          text-align: left;
        }

        /* Premium custom text gradient for 'Are' */
        .gradient-text {
          background: linear-gradient(to bottom, var(--text-warm-white) 15%, #FF6B6B 65%, #C1121F 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          display: inline-block;
        }

        .purpose-text {
          font-family: 'Allura', cursive;
          font-size: 1.35em;
          font-weight: 400;
          letter-spacing: 0.02em;
          line-height: 1;
          display: inline-block;
          text-transform: none;
          vertical-align: middle;
        }

        /* Radial backdrop glow behind globe shifted to match the globe canvas */
        .editorial-radial-glow {
          position: absolute;
          top: -40px;
          left: -40px;
          width: 480px;
          height: 480px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(193, 18, 31, 0.03) 0%, rgba(193, 18, 31, 0) 70%);
          filter: blur(55px);
          pointer-events: none;
          z-index: 0;
        }

        /* Globe Canvas shifted to the left and bleeding off-screen */
        .editorial-globe-canvas {
          position: absolute;
          width: 480px !important;
          height: 480px !important;
          left: -40px;
          top: -40px;
          pointer-events: none;
          z-index: 1;
        }

        /* Statistics Grid overlaying globe lines shifted to align with left-shifted globe */
        .editorial-stats {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
          position: absolute;
          bottom: 10px;
          left: -40px;
          width: 100%;
          z-index: 5;
        }

        .editorial-stat-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }

        .editorial-stat-number {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 120px;
          height: 48px;
          background: rgba(255, 255, 255, 0.03);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 100px;
          box-shadow: inset 0 1px 1px rgba(255, 255, 255, 0.1), 0 8px 32px rgba(0, 0, 0, 0.2);
          
          /* Text styling */
          font-family: var(--font-sans);
          font-size: clamp(1.4rem, 2.5vw, 1.8rem);
          font-weight: 700;
          line-height: 1;
          letter-spacing: -0.01em;
          margin-bottom: 12px;
          align-self: center;
          
          /* Off-white glass gradient text color */
          background-image: linear-gradient(180deg, #FFFFFF 40%, rgba(255, 255, 255, 0.65) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .editorial-stat-label {
          font-size: 0.75rem;
          font-weight: 400;
          color: rgba(255, 255, 255, 0.65);
          line-height: 1.4;
          letter-spacing: 0.02em;
          font-family: var(--font-sans);
          text-align: center;
        }

        /* Right Column text layout (width limited to 620px) */
        .editorial-text-wrapper {
          width: 100%;
          max-width: 620px;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          text-align: left;
        }

        /* Paragraph text scaled to exactly 16px, line-height 1.8, white/grey text */
        .editorial-paragraph {
          font-size: 16px;
          line-height: 1.8;
          letter-spacing: -0.02em;
          color: rgba(255, 255, 255, 0.82);
          font-weight: 400;
          font-family: var(--font-sans);
          text-align: left;
          margin: 0 0 12px 0;
        }

        .editorial-paragraph:last-child {
          margin-bottom: 0;
        }

        /* Subtle accent gradient highlight on key phrases (less than 10% of paragraph text) */
        .highlight-gradient {
          background: linear-gradient(135deg, #FF6B6B 0%, #C1121F 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          display: inline-block;
          font-weight: 500;
        }

        /* Bold white highlight */
        .highlight-bold {
          color: #FFFFFF;
          font-weight: 600;
        }

        /* Responsive Layout Rules matching spec */
        @media (max-width: 1024px) {
          .editorial-section {
            padding: 70px 0;
          }
          .editorial-container {
            gap: 20px 0;
            padding: 0 35px;
          }
          .editorial-left-header {
            padding-right: 25px;
          }
          .editorial-left-globe {
            padding-right: 25px;
          }
          .editorial-right-text {
            padding-left: 25px;
          }
        }

        @media (max-width: 768px) {
          .editorial-section {
            padding: 50px 0;
          }
          .editorial-container {
            grid-template-columns: 1fr;
            grid-template-areas:
              "left-header"
              "left-globe"
              "right-text";
            row-gap: 25px;
            column-gap: 0px;
            padding: 0 25px;
          }
          .editorial-left-globe {
            margin-top: -25px !important;
            height: auto !important;
            padding-right: 0;
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 20px;
          }
          .editorial-globe-canvas {
            position: relative !important;
            width: 280px !important;
            height: 280px !important;
            left: auto !important;
            top: auto !important;
            transform: none !important;
            margin: 0 auto;
          }
          .editorial-right-text {
            padding-top: 0;
            padding-left: 0;
            border-left: none;
          }
          .editorial-stats {
            position: relative !important;
            bottom: auto !important;
            left: auto !important;
            margin-top: 0 !important;
            width: 100%;
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 12px;
          }
          .editorial-stat-number {
            width: 85px;
            height: 38px;
            font-size: 1.15rem;
            margin-bottom: 8px;
          }
          .editorial-left-header {
            top: 0;
            padding-right: 0;
          }
        }
      `}),(0,s.jsx)(`div`,{className:`editorial-grid-bg`}),(0,s.jsx)(`div`,{className:`section-blend-overlay blend-to-05`}),(0,s.jsx)(`div`,{className:`section-glow-crimson`,style:{top:`15%`,left:`10%`,opacity:.08,position:`absolute`}}),(0,s.jsxs)(r.div,{className:`editorial-container`,variants:e,initial:`hidden`,whileInView:`visible`,viewport:{once:!0,margin:`-120px`},children:[(0,s.jsxs)(`div`,{className:`editorial-left-header`,children:[(0,s.jsxs)(r.span,{className:`editorial-badge`,variants:t,children:[(0,s.jsx)(`span`,{className:`red-dot`}),` Our Story`]}),(0,s.jsxs)(r.h2,{className:`editorial-heading`,variants:t,children:[(0,s.jsx)(`span`,{children:`Crafted`}),(0,s.jsxs)(`span`,{children:[`With `,(0,s.jsx)(`span`,{className:`gradient-text purpose-text`,children:`Purpose`})]})]})]}),(0,s.jsxs)(`div`,{className:`editorial-left-globe`,children:[(0,s.jsx)(`div`,{className:`editorial-radial-glow`}),(0,s.jsx)(a,{className:`editorial-globe-canvas`}),(0,s.jsxs)(r.div,{className:`editorial-stats`,variants:e,children:[(0,s.jsxs)(r.div,{className:`editorial-stat-item`,variants:t,children:[(0,s.jsx)(`span`,{className:`editorial-stat-number`,children:(0,s.jsx)(c,{to:20,suffix:`+`})}),(0,s.jsxs)(`span`,{className:`editorial-stat-label`,children:[`Years of`,(0,s.jsx)(`br`,{}),`Excellence`]})]}),(0,s.jsxs)(r.div,{className:`editorial-stat-item`,variants:t,children:[(0,s.jsx)(`span`,{className:`editorial-stat-number`,children:(0,s.jsx)(c,{to:150,suffix:`K+`})}),(0,s.jsxs)(`span`,{className:`editorial-stat-label`,children:[`Happy`,(0,s.jsx)(`br`,{}),`Travellers`]})]}),(0,s.jsxs)(r.div,{className:`editorial-stat-item`,variants:t,children:[(0,s.jsx)(`span`,{className:`editorial-stat-number`,children:(0,s.jsx)(c,{to:70,suffix:`+`})}),(0,s.jsxs)(`span`,{className:`editorial-stat-label`,children:[`Travel`,(0,s.jsx)(`br`,{}),`Professionals`]})]})]})]}),(0,s.jsx)(`div`,{className:`editorial-right-text`,children:(0,s.jsxs)(r.div,{className:`editorial-text-wrapper`,variants:e,children:[(0,s.jsxs)(r.p,{className:`editorial-paragraph`,variants:t,children:[`Travinno was founded with a `,(0,s.jsx)(`span`,{className:`highlight-gradient`,children:`simple belief`}),` — that every journey should be seamless, meaningful and unforgettable.`]}),(0,s.jsx)(r.p,{className:`editorial-paragraph`,variants:t,children:`Today, we are a trusted Destination Management Company delivering exceptional travel experiences through local expertise, operational excellence and trusted partnerships.`}),(0,s.jsxs)(r.p,{className:`editorial-paragraph`,variants:t,children:[`From leisure to corporate, from events to luxury escapes, our team brings `,(0,s.jsx)(`span`,{className:`highlight-bold`,children:`unmatched local knowledge`}),` and global standards to every journey.`]}),(0,s.jsxs)(r.p,{className:`editorial-paragraph`,variants:t,children:[`Our mission is simple — to deliver `,(0,s.jsx)(`span`,{className:`highlight-gradient`,children:`extraordinary experiences`}),` that inspire and connect people to the world in the most authentic way.`]})]})})]})]})}export{l as default};