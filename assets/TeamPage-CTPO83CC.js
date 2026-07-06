const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-D-b7X6Ku.js","assets/rolldown-runtime-Cyuzqnbw.js","assets/vendor-lenis-DIx8pWKM.js","assets/vendor-cobe-KWRXQVKK.js","assets/vendor-Dk_29YtV.js","assets/vendor-framer-CBDgK_Qs.js","assets/vendor-gsap-B2JeSRMT.js","assets/index-Cd9KivIE.css"])))=>i.map(i=>d[i]);
import{a as e}from"./rolldown-runtime-Cyuzqnbw.js";import{B as t,O as n,Qt as r,T as i,Xt as a,_ as o,c as s,i as c,r as l,w as u,z as d}from"./vendor-Dk_29YtV.js";import{i as f}from"./vendor-framer-CBDgK_Qs.js";import{r as p}from"./index-D-b7X6Ku.js";var m=e(r(),1),h=a(),g=`images/team_hero.png`,_=[`Dubai`,`Thailand`,`India`,`Kenya`,`Malaysia`,`Vietnam`,`Singapore`],v={duration:.8,ease:[.16,1,.3,1]},y={Dubai:{tagline:`Oasis of Luxury`},Thailand:{tagline:`Tropical Horizons`},India:{tagline:`Heritage & Grandeur`},Kenya:{tagline:`Untamed Wilderness`},Malaysia:{tagline:`Rainforest Horizons`},Vietnam:{tagline:`Emerald Estuaries`},Singapore:{tagline:`Garden City Innovation`}},b=e=>{let r=1.3,a=`#C1121F`;switch(e){case`Dubai`:return(0,h.jsx)(n,{size:20,strokeWidth:r,color:a});case`Thailand`:return(0,h.jsx)(o,{size:20,strokeWidth:r,color:a});case`India`:return(0,h.jsx)(i,{size:20,strokeWidth:r,color:a});case`Kenya`:return(0,h.jsx)(l,{size:20,strokeWidth:r,color:a});case`Malaysia`:return(0,h.jsx)(t,{size:20,strokeWidth:r,color:a});case`Vietnam`:return(0,h.jsx)(d,{size:20,strokeWidth:r,color:a});case`Singapore`:return(0,h.jsx)(u,{size:20,strokeWidth:r,color:a});default:return(0,h.jsx)(n,{size:20,strokeWidth:r,color:a})}};function x(){let[e,t]=(0,m.useState)([]),[n,r]=(0,m.useState)([]);(0,m.useEffect)(()=>{r(Array.from({length:25}).map((e,t)=>({id:t,top:`${Math.random()*100}%`,left:`${Math.random()*100}%`,size:Math.random()*2+1,delay:`${Math.random()*8}s`,duration:`${6+Math.random()*8}s`,driftX:(Math.random()-.5)*40,driftY:(Math.random()-.5)*40})))},[]),(0,m.useEffect)(()=>{p(async()=>{let{db:e}=await import(`./index-D-b7X6Ku.js`).then(e=>e.n);return{db:e}},__vite__mapDeps([0,1,2,3,4,5,6,7])).then(({db:e})=>{t(e.getTeam());let n=()=>t(e.getTeam());return window.addEventListener(`travinno-db-update`,n),()=>window.removeEventListener(`travinno-db-update`,n)})},[]);let a=e=>e?e.startsWith(`data:`)||e.startsWith(`http`)?e:`/TRAVINNOO/${e}`:``,o=[...e].sort((e,t)=>(e.order||0)-(t.order||0)),l=o.find(e=>e.isLeader),d=o.filter(e=>!e.isLeader);return(0,h.jsxs)(`div`,{style:{backgroundColor:`#050505`,color:`#F5F2EC`,width:`100%`,minHeight:`100vh`,position:`relative`,overflowX:`hidden`,boxSizing:`border-box`,fontFamily:`var(--font-sans)`},children:[(0,h.jsx)(`style`,{children:`
        /* Optimize scroll-fade rendering layers */
        .team-hero-fade {
          will-change: auto;
        }

        /* Float animation for Managing Director */
        @keyframes mdFloat {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
          100% { transform: translateY(0px); }
        }

        .md-featured-img {
          animation: mdFloat 6s ease-in-out infinite;
          max-width: 100%;
          height: auto;
          max-height: 520px;
          object-fit: contain;
        }

        /* Editorial split grid for MD */
        .md-section-grid {
          display: grid;
          grid-template-columns: 1fr 1.2fr;
          gap: 80px;
          align-items: center;
        }

        /* Grid layout for Team members */
        .team-members-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 60px 40px;
          margin-top: 40px;
        }

        .team-member-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          cursor: pointer;
          box-sizing: border-box;
        }

        .team-member-img-wrap {
          width: 100%;
          height: 350px;
          display: flex;
          justify-content: center;
          align-items: flex-end;
          position: relative;
          overflow: visible;
          margin-bottom: 24px;
        }

        .team-member-img {
          height: 100%;
          width: auto;
          max-width: 100%;
          object-fit: contain;
          transition: transform 0.5s cubic-bezier(0.16, 1, 0.3, 1), filter 0.5s cubic-bezier(0.16, 1, 0.3, 1);
          will-change: transform, filter;
        }

        .team-member-name {
          font-family: var(--font-sans);
          font-size: 1.1rem;
          font-weight: 500;
          color: #FFFFFF;
          margin: 0 0 6px 0;
          transition: color 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .team-member-title {
          font-family: var(--font-sans);
          font-size: 0.8rem;
          font-weight: 500;
          color: rgba(245, 242, 236, 0.5);
          letter-spacing: 1px;
          text-transform: uppercase;
          margin: 0;
          transition: color 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }

        /* Hover States for Team Members */
        .team-member-item:hover .team-member-img {
          transform: scale(1.05) translateY(-8px);
          filter: drop-shadow(0 15px 25px rgba(193, 18, 31, 0.35));
        }

        .team-member-item:hover .team-member-name {
          color: #C1121F;
        }

        .team-member-item:hover .team-member-title {
          color: rgba(245, 242, 236, 0.9);
        }

        .glass-box {
          width: 260px;
          height: 150px;
          padding: 20px 24px;
          background: rgba(255, 255, 255, 0.01);
          backdrop-filter: blur(2px);
          -webkit-backdrop-filter: blur(2px);
          border: 1px solid rgba(255, 255, 255, 0.06);
          border-radius: 20px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.2), inset 0 -3px 8px rgba(193, 18, 31, 0.03);
          transition: all 0.35s cubic-bezier(0.25, 1, 0.5, 1);
          cursor: pointer;
          position: relative;
          box-sizing: border-box;
        }

        .glass-box:hover {
          background: rgba(255, 255, 255, 0.05);
          border-color: rgba(193, 18, 31, 0.45);
          transform: translateY(-8px) scale(1.03);
          backdrop-filter: blur(4px);
          -webkit-backdrop-filter: blur(4px);
          box-shadow: 0 16px 40px rgba(0, 0, 0, 0.4), inset 0 -4px 15px rgba(193, 18, 31, 0.2), 0 0 15px rgba(193, 18, 31, 0.15);
        }

        .glass-box-icon-container {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: rgba(193, 18, 31, 0.05);
          border: 1px solid rgba(193, 18, 31, 0.15);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 14px;
          transition: all 0.35s ease;
        }

        .glass-box:hover .glass-box-icon-container {
          background: rgba(193, 18, 31, 0.1);
          border-color: rgba(193, 18, 31, 0.3);
          transform: scale(1.05);
        }

        /* Glassmorphism Feature Bar */
        .feature-bar {
          width: 90%;
          max-width: 1100px;
          margin: 0 auto 80px auto;
          padding: 20px 32px;
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.01) 100%);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 16px;
          box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37), 0 0 20px rgba(193, 18, 31, 0.15);
          display: flex;
          justify-content: space-between;
          align-items: center;
          position: relative;
          z-index: 10;
          transition: all 0.4s cubic-bezier(0.25, 1, 0.5, 1);
          cursor: pointer;
        }

        .feature-bar:hover {
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.03) 100%);
          border-color: rgba(255, 255, 255, 0.25);
          transform: translateY(-4px);
          box-shadow: 0 12px 40px rgba(0, 0, 0, 0.5), 0 0 25px rgba(193, 18, 31, 0.25);
        }

        .feature-item {
          display: flex;
          align-items: center;
          gap: 12px;
          flex: 1;
          justify-content: center;
        }

        .feature-divider {
          width: 1px;
          height: 24px;
          background-color: rgba(255, 255, 255, 0.15);
        }

        @media (max-width: 768px) {
          .feature-bar {
            padding: 16px 20px;
            gap: 12px;
            flex-wrap: wrap;
            justify-content: center;
          }
          .feature-item {
            flex: 1 1 45%;
            justify-content: flex-start;
            padding: 8px;
          }
          .feature-divider {
            display: none;
          }
        }

        @media (max-width: 480px) {
          .feature-item {
            flex: 1 1 100%;
          }
        }

        /* Media Queries for Grid and Split */
        @media (max-width: 991px) {
          .hero-artwork-container {
            width: 100% !important;
            height: 480px !important;
            right: 0 !important;
            top: 0 !important;
            mask-image: linear-gradient(to bottom, transparent 0%, black 20%, black 80%, transparent 100%) !important;
            -webkit-mask-image: linear-gradient(to bottom, transparent 0%, black 20%, black 80%, transparent 100%) !important;
          }
          .hero-artwork-container img {
            opacity: 0.45 !important;
          }
          .md-section-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          .team-members-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 40px 30px;
          }
        }

        @media (max-width: 600px) {
          .team-members-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }
        }
      `}),(0,h.jsx)(`div`,{style:{position:`absolute`,inset:0,backgroundColor:`#050505`,zIndex:0,pointerEvents:`none`}}),(0,h.jsx)(`div`,{style:{position:`absolute`,inset:0,backgroundImage:`
            linear-gradient(rgba(245, 242, 236, 0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(245, 242, 236, 0.04) 1px, transparent 1px)
          `,backgroundSize:`50px 50px, 50px 50px`,backgroundRepeat:`repeat, repeat`,zIndex:2,pointerEvents:`none`}}),(0,h.jsx)(`div`,{className:`hero-artwork-container`,style:{position:`absolute`,right:0,top:0,width:`54%`,height:`580px`,pointerEvents:`none`,zIndex:1,overflow:`hidden`,WebkitMaskImage:`linear-gradient(to right, transparent 0%, black 70%)`,maskImage:`linear-gradient(to right, transparent 0%, black 70%)`},children:(0,h.jsx)(f.div,{animate:{y:[0,-3,0]},transition:{duration:6,ease:`easeInOut`,repeat:1/0},style:{width:`100%`,height:`100%`,position:`relative`},children:(0,h.jsx)(`img`,{src:a(g),alt:`The Team Behind Every Journey`,style:{width:`100%`,height:`100%`,objectFit:`cover`,opacity:.38,filter:`contrast(80%) brightness(65%)`,transition:`opacity 0.5s ease`,WebkitMaskImage:`linear-gradient(to bottom, black 82%, transparent 100%)`,maskImage:`linear-gradient(to bottom, black 82%, transparent 100%)`}})})}),(0,h.jsxs)(`div`,{className:`team-hero-fade`,style:{position:`relative`,zIndex:2,maxWidth:`1200px`,margin:`0 auto`,padding:`160px 24px 80px 24px`,boxSizing:`border-box`},children:[(0,h.jsx)(`section`,{style:{marginBottom:`70px`,position:`relative`},children:(0,h.jsxs)(`div`,{style:{maxWidth:`640px`,position:`relative`,zIndex:3},children:[(0,h.jsxs)(f.span,{initial:{opacity:0,y:12},animate:{opacity:1,y:0},transition:v,style:{display:`inline-flex`,alignItems:`center`,gap:`6px`,padding:`4px 12px`,border:`1px solid rgba(193, 18, 31, 0.18)`,borderRadius:`100px`,fontFamily:`var(--font-sans)`,fontSize:`0.72rem`,fontWeight:500,letterSpacing:`0.05em`,color:`rgba(245, 242, 236, 0.85)`,marginBottom:`16px`,background:`rgba(193, 18, 31, 0.05)`,backdropFilter:`blur(4px)`,WebkitBackdropFilter:`blur(4px)`},children:[(0,h.jsx)(`span`,{style:{width:`6px`,height:`6px`,backgroundColor:`#C1121F`,borderRadius:`50%`,display:`inline-block`}}),`TEAM`]}),(0,h.jsxs)(f.h1,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.8,ease:[.16,1,.3,1],delay:.1},style:{fontFamily:`var(--font-heading)`,fontSize:`clamp(2.2rem, 5vw, 3.8rem)`,fontWeight:450,lineHeight:1.15,color:`#F5F2EC`,margin:`0 0 16px 0`,letterSpacing:`-0.5px`},children:[`The People Behind `,(0,h.jsx)(`br`,{}),(0,h.jsx)(`span`,{style:{fontFamily:`'Allura', cursive`,fontSize:`1.25em`,fontWeight:400,letterSpacing:`0.02em`,lineHeight:`1.2`,display:`inline-block`,marginTop:`-4px`,paddingBottom:`0px`,background:`linear-gradient(to bottom, #F5F2EC 20%, #E8A7A7 60%, #C1121F 100%)`,WebkitBackgroundClip:`text`,WebkitTextFillColor:`transparent`,backgroundClip:`text`},children:`Every Journey`})]}),(0,h.jsx)(f.p,{initial:{opacity:0,y:10},animate:{opacity:.75,y:0},transition:{duration:.8,ease:[.16,1,.3,1],delay:.2},style:{fontFamily:`var(--font-sans)`,fontSize:`clamp(1rem, 1.8vw, 1.2rem)`,lineHeight:1.65,color:`#F5F2EC`,margin:0,maxWidth:`680px`,fontWeight:300},children:`Behind every unforgettable journey is a passionate team of travel specialists, destination experts, and professionals committed to delivering exceptional experiences.`})]})}),(0,h.jsxs)(`div`,{className:`feature-bar`,children:[(0,h.jsxs)(`div`,{className:`feature-item`,children:[(0,h.jsx)(u,{size:20,strokeWidth:1.5,color:`#C1121F`}),(0,h.jsx)(`span`,{style:{fontFamily:`var(--font-sans)`,fontSize:`0.9rem`,fontWeight:500,color:`#FFFFFF`,letterSpacing:`0.5px`},children:`Global Reach`})]}),(0,h.jsx)(`div`,{className:`feature-divider`}),(0,h.jsxs)(`div`,{className:`feature-item`,children:[(0,h.jsx)(c,{size:20,strokeWidth:1.5,color:`#C1121F`}),(0,h.jsx)(`span`,{style:{fontFamily:`var(--font-sans)`,fontSize:`0.9rem`,fontWeight:500,color:`#FFFFFF`,letterSpacing:`0.5px`},children:`Expert Team`})]}),(0,h.jsx)(`div`,{className:`feature-divider`}),(0,h.jsxs)(`div`,{className:`feature-item`,children:[(0,h.jsx)(i,{size:20,strokeWidth:1.5,color:`#C1121F`}),(0,h.jsx)(`span`,{style:{fontFamily:`var(--font-sans)`,fontSize:`0.9rem`,fontWeight:500,color:`#FFFFFF`,letterSpacing:`0.5px`},children:`Premium Service`})]}),(0,h.jsx)(`div`,{className:`feature-divider`}),(0,h.jsxs)(`div`,{className:`feature-item`,children:[(0,h.jsx)(s,{size:20,strokeWidth:1.5,color:`#C1121F`}),(0,h.jsx)(`span`,{style:{fontFamily:`var(--font-sans)`,fontSize:`0.9rem`,fontWeight:500,color:`#FFFFFF`,letterSpacing:`0.5px`},children:`Trusted by Clients`})]})]}),l&&(0,h.jsx)(`section`,{style:{marginBottom:`140px`,position:`relative`},children:(0,h.jsxs)(`div`,{className:`md-section-grid`,children:[(0,h.jsx)(`div`,{style:{display:`flex`,justifyContent:`center`,alignItems:`center`},children:(0,h.jsx)(`img`,{src:a(l.image),alt:`${l.name} - Managing Director`,className:`md-featured-img`})}),(0,h.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`24px`},children:[(0,h.jsxs)(`div`,{children:[(0,h.jsx)(`span`,{style:{fontFamily:`var(--font-sans)`,fontSize:`0.75rem`,fontWeight:600,color:`#C1121F`,letterSpacing:`2px`,textTransform:`uppercase`,display:`block`,marginBottom:`8px`},children:l.position||`Managing Director`}),(0,h.jsx)(`h2`,{style:{fontFamily:`var(--font-heading)`,fontSize:`clamp(1.8rem, 4vw, 2.8rem)`,fontWeight:450,color:`#F5F2EC`,margin:0,letterSpacing:`-0.5px`},children:l.name})]}),(0,h.jsx)(`div`,{style:{fontFamily:`var(--font-sans)`,fontSize:`1.05rem`,lineHeight:1.8,color:`rgba(245, 242, 236, 0.7)`,fontWeight:300,display:`flex`,flexDirection:`column`,gap:`16px`},children:l.bio?l.bio.split(`

`).map((e,t)=>(0,h.jsx)(`p`,{style:{margin:0},children:e},t)):(0,h.jsx)(`p`,{style:{margin:0},children:`No personal message configured.`})}),l.signature&&(0,h.jsx)(`div`,{style:{marginTop:`20px`},children:(0,h.jsx)(`span`,{style:{fontFamily:`'Allura', cursive`,fontSize:`2.5rem`,color:`#F5F2EC`,display:`inline-block`,background:`linear-gradient(to right, #F5F2EC 30%, #E8A7A7 70%, #C1121F 100%)`,WebkitBackgroundClip:`text`,WebkitTextFillColor:`transparent`,backgroundClip:`text`,transform:`rotate(-4deg)`},children:l.signature})})]})]})}),(0,h.jsxs)(`section`,{style:{marginBottom:`140px`,position:`relative`},children:[(0,h.jsxs)(`h2`,{style:{fontFamily:`var(--font-heading)`,fontSize:`clamp(1.8rem, 4vw, 2.8rem)`,fontWeight:450,color:`#F5F2EC`,marginBottom:`40px`,letterSpacing:`-0.5px`},children:[`Our `,(0,h.jsx)(`span`,{className:`journey-allura-text`,style:{marginLeft:`6px`},children:`Specialists`})]}),(0,h.jsx)(`div`,{className:`team-members-grid`,children:d.map(e=>(0,h.jsxs)(`div`,{className:`team-member-item`,children:[(0,h.jsx)(`div`,{className:`team-member-img-wrap`,children:e.image?(0,h.jsx)(`img`,{src:a(e.image),alt:`${e.name} - ${e.position}`,className:`team-member-img`}):(0,h.jsx)(`div`,{style:{width:`80px`,height:`80px`,borderRadius:`50%`,backgroundColor:`rgba(255,255,255,0.05)`,display:`flex`,justifyContent:`center`,alignItems:`center`}})}),(0,h.jsx)(`h4`,{className:`team-member-name`,children:e.name}),(0,h.jsx)(`p`,{className:`team-member-title`,children:e.position})]},e.id))})]}),(0,h.jsxs)(`section`,{style:{backgroundColor:`#050505`,padding:`120px 0`,borderTop:`1px solid rgba(255, 255, 255, 0.05)`,position:`relative`,overflow:`hidden`,marginBottom:`0px`},children:[(0,h.jsx)(`div`,{style:{position:`absolute`,top:`50%`,left:`50%`,transform:`translate(-50%, -50%)`,width:`600px`,height:`600px`,borderRadius:`50%`,background:`radial-gradient(circle, rgba(193, 18, 31, 0.08) 0%, rgba(0, 0, 0, 0) 70%)`,filter:`blur(60px)`,zIndex:1,pointerEvents:`none`}}),(0,h.jsx)(`div`,{style:{position:`absolute`,inset:0,pointerEvents:`none`,zIndex:1,overflow:`hidden`,opacity:.1},children:(0,h.jsxs)(`svg`,{viewBox:`0 0 1440 600`,fill:`none`,stroke:`#F5F2EC`,strokeWidth:`1`,style:{width:`100%`,height:`100%`},children:[(0,h.jsxs)(`g`,{transform:`translate(1200, 120)`,children:[(0,h.jsx)(`circle`,{cx:`0`,cy:`0`,r:`80`,strokeDasharray:`3,3`}),(0,h.jsx)(`circle`,{cx:`0`,cy:`0`,r:`10`}),(0,h.jsx)(`path`,{d:`M 0,-110 L 10,-20 L 0,0 L -10,-20 Z`,fill:`#F5F2EC`}),(0,h.jsx)(`path`,{d:`M 0,110 L 10,20 L 0,0 L -10,20 Z`}),(0,h.jsx)(`path`,{d:`M 110,0 L 20,10 L 0,0 L 20,-10 Z`,fill:`#F5F2EC`}),(0,h.jsx)(`path`,{d:`M -110,0 L -20,10 L 0,0 L -20,-10 Z`})]}),(0,h.jsxs)(`g`,{transform:`translate(100, 80)`,children:[(0,h.jsx)(`path`,{d:`M 150,120 L 320,100 L 480,220 L 680,180 L 850,300 L 1050,220`,strokeWidth:`0.75`,strokeDasharray:`5,5`}),(0,h.jsx)(`path`,{d:`M 320,100 L 520,320 L 680,180 M 480,220 L 520,320 M 850,300 L 900,450`,strokeWidth:`0.75`,strokeDasharray:`5,5`}),(0,h.jsx)(`path`,{d:`M 150,120 Q 350,50 680,180`,strokeWidth:`1`,strokeDasharray:`2,2`}),(0,h.jsx)(`path`,{d:`M 480,220 Q 700,100 1050,220`,strokeWidth:`1`,strokeDasharray:`2,2`}),(0,h.jsx)(`path`,{d:`M 520,320 Q 700,400 850,300`,strokeWidth:`1`,strokeDasharray:`2,2`}),(0,h.jsx)(`circle`,{cx:`150`,cy:`120`,r:`4`,fill:`#F5F2EC`}),(0,h.jsx)(`circle`,{cx:`320`,cy:`100`,r:`4`,fill:`#F5F2EC`}),(0,h.jsx)(`circle`,{cx:`480`,cy:`220`,r:`4`,fill:`#F5F2EC`}),(0,h.jsx)(`circle`,{cx:`680`,cy:`180`,r:`4`,fill:`#F5F2EC`}),(0,h.jsx)(`circle`,{cx:`850`,cy:`300`,r:`4`,fill:`#F5F2EC`}),(0,h.jsx)(`circle`,{cx:`1050`,cy:`220`,r:`4`,fill:`#F5F2EC`}),(0,h.jsx)(`circle`,{cx:`520`,cy:`320`,r:`4`,fill:`#F5F2EC`}),(0,h.jsx)(`circle`,{cx:`900`,cy:`450`,r:`4`,fill:`#F5F2EC`}),(0,h.jsx)(`line`,{x1:`0`,y1:`150`,x2:`1200`,y2:`150`,strokeDasharray:`10,10`,strokeWidth:`0.5`}),(0,h.jsx)(`line`,{x1:`0`,y1:`300`,x2:`1200`,y2:`300`,strokeDasharray:`10,10`,strokeWidth:`0.5`}),(0,h.jsx)(`line`,{x1:`400`,y1:`0`,x2:`400`,y2:`500`,strokeDasharray:`10,10`,strokeWidth:`0.5`}),(0,h.jsx)(`line`,{x1:`800`,y1:`0`,x2:`800`,y2:`500`,strokeDasharray:`10,10`,strokeWidth:`0.5`}),(0,h.jsx)(`text`,{x:`20`,y:`140`,fill:`#F5F2EC`,fontSize:`10`,fontFamily:`monospace`,children:`N 25° 15' 47" / E 55° 17' 52"`}),(0,h.jsx)(`text`,{x:`820`,y:`290`,fill:`#F5F2EC`,fontSize:`10`,fontFamily:`monospace`,children:`N 1° 21' 53" / E 103° 49' 11"`})]})]})}),(0,h.jsx)(`div`,{style:{position:`absolute`,left:`2%`,top:`55%`,transform:`translateY(-50%)`,width:`260px`,height:`260px`,opacity:.1,pointerEvents:`none`,zIndex:1},children:(0,h.jsxs)(`svg`,{viewBox:`0 0 200 200`,fill:`none`,stroke:`#F5F2EC`,strokeWidth:`0.8`,children:[(0,h.jsx)(`circle`,{cx:`100`,cy:`100`,r:`90`,strokeDasharray:`3,3`}),(0,h.jsx)(`circle`,{cx:`100`,cy:`100`,r:`70`}),(0,h.jsx)(`circle`,{cx:`100`,cy:`100`,r:`50`}),(0,h.jsx)(`circle`,{cx:`100`,cy:`100`,r:`15`}),(0,h.jsx)(`path`,{d:`M 100,10 L 100,190 M 10,100 L 190,100`}),(0,h.jsx)(`path`,{d:`M 36.36,36.36 L 163.64,163.64 M 36.36,163.64 L 163.64,36.36`,strokeDasharray:`2,2`}),(0,h.jsx)(`polygon`,{points:`100,20 105,80 95,80`,fill:`#F5F2EC`}),(0,h.jsx)(`polygon`,{points:`100,180 105,120 95,120`}),(0,h.jsx)(`polygon`,{points:`20,100 80,105 80,95`,fill:`#F5F2EC`}),(0,h.jsx)(`polygon`,{points:`180,100 120,105 120,95`}),(0,h.jsx)(`text`,{x:`96`,y:`16`,fill:`#F5F2EC`,fontSize:`8`,fontFamily:`sans-serif`,fontWeight:`bold`,children:`N`}),(0,h.jsx)(`text`,{x:`97`,y:`191`,fill:`#F5F2EC`,fontSize:`8`,fontFamily:`sans-serif`,fontWeight:`bold`,children:`S`}),(0,h.jsx)(`text`,{x:`183`,y:`103`,fill:`#F5F2EC`,fontSize:`8`,fontFamily:`sans-serif`,fontWeight:`bold`,children:`E`}),(0,h.jsx)(`text`,{x:`10`,y:`103`,fill:`#F5F2EC`,fontSize:`8`,fontFamily:`sans-serif`,fontWeight:`bold`,children:`W`})]})}),(0,h.jsx)(`div`,{style:{position:`absolute`,right:`2%`,top:`55%`,transform:`translateY(-50%)`,width:`260px`,height:`260px`,opacity:.1,pointerEvents:`none`,zIndex:1},children:(0,h.jsxs)(`svg`,{viewBox:`0 0 200 200`,fill:`none`,stroke:`#F5F2EC`,strokeWidth:`0.8`,children:[(0,h.jsx)(`ellipse`,{cx:`100`,cy:`100`,rx:`90`,ry:`40`}),(0,h.jsx)(`ellipse`,{cx:`100`,cy:`100`,rx:`90`,ry:`15`}),(0,h.jsx)(`ellipse`,{cx:`100`,cy:`100`,rx:`90`,ry:`70`}),(0,h.jsx)(`ellipse`,{cx:`100`,cy:`100`,rx:`40`,ry:`90`}),(0,h.jsx)(`ellipse`,{cx:`100`,cy:`100`,rx:`15`,ry:`90`}),(0,h.jsx)(`ellipse`,{cx:`100`,cy:`100`,rx:`70`,ry:`90`}),(0,h.jsx)(`circle`,{cx:`100`,cy:`100`,r:`90`}),(0,h.jsx)(`path`,{d:`M 20,120 Q 90,20 180,100`,strokeWidth:`1`,strokeDasharray:`3,3`}),(0,h.jsx)(`path`,{d:`M 180,100 L 175,93 L 180,95 L 186,96 Z`,fill:`#F5F2EC`}),(0,h.jsx)(`circle`,{cx:`45`,cy:`55`,r:`2.5`,fill:`#F5F2EC`}),(0,h.jsx)(`circle`,{cx:`140`,cy:`45`,r:`2`,fill:`#F5F2EC`}),(0,h.jsx)(`circle`,{cx:`155`,cy:`140`,r:`2.5`,fill:`#F5F2EC`}),(0,h.jsx)(`circle`,{cx:`75`,cy:`165`,r:`2`,fill:`#F5F2EC`})]})}),(0,h.jsx)(`div`,{style:{position:`absolute`,left:`1%`,bottom:`0`,width:`350px`,height:`110px`,opacity:.1,pointerEvents:`none`,zIndex:1},children:(0,h.jsxs)(`svg`,{viewBox:`0 0 300 100`,fill:`none`,stroke:`#F5F2EC`,strokeWidth:`0.8`,style:{width:`100%`,height:`100%`},children:[(0,h.jsx)(`path`,{d:`M 10,100 L 25,50 L 28,50 L 32,25 L 36,50 L 39,50 L 54,100`}),(0,h.jsx)(`line`,{x1:`28`,y1:`60`,x2:`36`,y2:`60`}),(0,h.jsx)(`line`,{x1:`30`,y1:`75`,x2:`34`,y2:`75`}),(0,h.jsx)(`path`,{d:`M 70,100 L 70,80 L 78,80 L 78,72 C 78,60 92,60 92,72 L 92,80 L 100,80 L 100,100`}),(0,h.jsx)(`path`,{d:`M 64,100 L 64,65 L 66,65 L 66,100`}),(0,h.jsx)(`path`,{d:`M 106,100 L 106,65 L 108,65 L 108,100`}),(0,h.jsx)(`path`,{d:`M 125,100 C 160,90 185,50 160,10 L 150,10 L 150,100`}),(0,h.jsx)(`path`,{d:`M 150,25 C 165,35 170,55 150,65`}),(0,h.jsx)(`path`,{d:`M 150,5 C 190,15 180,100 180,100`}),(0,h.jsx)(`path`,{d:`M 210,100 L 215,80 L 217,80 L 217,55 L 219,55 L 219,10 L 221,10 L 221,55 L 223,55 L 223,80 L 225,80 L 230,100`}),(0,h.jsx)(`line`,{x1:`210`,y1:`100`,x2:`230`,y2:`100`}),(0,h.jsx)(`line`,{x1:`0`,y1:`100`,x2:`300`,y2:`100`,strokeWidth:`1`})]})}),(0,h.jsx)(`div`,{style:{position:`absolute`,right:`1%`,bottom:`0`,width:`350px`,height:`110px`,opacity:.1,pointerEvents:`none`,zIndex:1},children:(0,h.jsxs)(`svg`,{viewBox:`0 0 300 100`,fill:`none`,stroke:`#F5F2EC`,strokeWidth:`0.8`,style:{width:`100%`,height:`100%`},children:[(0,h.jsx)(`path`,{d:`M 20,100 L 25,50 L 35,50 L 40,100`}),(0,h.jsx)(`path`,{d:`M 48,100 L 53,50 L 63,50 L 68,100`}),(0,h.jsx)(`path`,{d:`M 76,100 L 81,50 L 91,50 L 96,100`}),(0,h.jsx)(`path`,{d:`M 18,48 C 50,43 75,43 102,48 L 98,54 C 75,49 50,49 22,54 Z`,fill:`rgba(245,242,236,0.03)`}),(0,h.jsx)(`path`,{d:`M 135,100 L 140,40 L 144,40 L 144,12 L 146,12 L 146,40 L 150,40 L 155,100`}),(0,h.jsx)(`path`,{d:`M 175,100 L 180,40 L 184,40 L 184,12 L 186,12 L 186,40 L 190,40 L 195,100`}),(0,h.jsx)(`path`,{d:`M 149,60 L 181,60 M 149,64 L 181,64`}),(0,h.jsx)(`path`,{d:`M 225,100 C 230,85 240,85 245,92 C 248,80 260,80 265,100`}),(0,h.jsx)(`path`,{d:`M 270,100 C 273,92 280,92 285,100`}),(0,h.jsx)(`line`,{x1:`0`,y1:`100`,x2:`300`,y2:`100`,strokeWidth:`1`})]})}),(0,h.jsxs)(`div`,{style:{position:`relative`,zIndex:2},children:[(0,h.jsxs)(`div`,{style:{textAlign:`center`,marginBottom:`60px`},children:[(0,h.jsx)(`span`,{style:{fontFamily:`var(--font-sans)`,fontSize:`0.72rem`,fontWeight:600,letterSpacing:`2.5px`,color:`rgba(255, 255, 255, 0.45)`,textTransform:`uppercase`,display:`block`,marginBottom:`12px`},children:`OUR GLOBAL PRESENCE`}),(0,h.jsxs)(`h2`,{style:{fontFamily:`var(--font-heading)`,fontSize:`clamp(2rem, 4vw, 3.2rem)`,fontWeight:450,color:`#F5F2EC`,margin:`0 0 16px 0`,letterSpacing:`-0.5px`},children:[`Where We Create `,(0,h.jsx)(`span`,{className:`journey-allura-text`,style:{marginLeft:`4px`},children:`Experiences`})]}),(0,h.jsx)(`p`,{style:{fontFamily:`var(--font-sans)`,fontSize:`0.98rem`,color:`rgba(245, 242, 236, 0.65)`,margin:0,fontWeight:300},children:`Providing bespoke hospitality and seamless destination management services across key global regions.`})]}),(0,h.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`24px`,alignItems:`center`,width:`100%`},children:[(0,h.jsx)(`div`,{style:{display:`flex`,justifyContent:`center`,gap:`24px`,width:`100%`,flexWrap:`wrap`},children:_.slice(0,4).map(e=>{let t=y[e]||{tagline:`Luxury Travel Partner`};return(0,h.jsxs)(`div`,{className:`glass-box`,children:[(0,h.jsx)(`div`,{className:`glass-box-icon-container`,children:b(e)}),(0,h.jsx)(`span`,{style:{fontFamily:`var(--font-sans)`,fontSize:`1.2rem`,fontWeight:500,letterSpacing:`1px`,color:`#FFFFFF`,marginBottom:`6px`},children:e}),(0,h.jsx)(`span`,{style:{fontFamily:`var(--font-sans)`,fontSize:`0.72rem`,fontWeight:400,color:`rgba(255, 255, 255, 0.45)`,letterSpacing:`0.5px`,textTransform:`uppercase`},children:t.tagline})]},e)})}),(0,h.jsx)(`div`,{style:{display:`flex`,justifyContent:`center`,gap:`24px`,width:`100%`,flexWrap:`wrap`},children:_.slice(4).map(e=>{let t=y[e]||{tagline:`Luxury Travel Partner`};return(0,h.jsxs)(`div`,{className:`glass-box`,children:[(0,h.jsx)(`div`,{className:`glass-box-icon-container`,children:b(e)}),(0,h.jsx)(`span`,{style:{fontFamily:`var(--font-sans)`,fontSize:`1.2rem`,fontWeight:500,letterSpacing:`1px`,color:`#FFFFFF`,marginBottom:`6px`},children:e}),(0,h.jsx)(`span`,{style:{fontFamily:`var(--font-sans)`,fontSize:`0.72rem`,fontWeight:400,color:`rgba(255, 255, 255, 0.45)`,letterSpacing:`0.5px`,textTransform:`uppercase`},children:t.tagline})]},e)})})]})]})]})]}),(0,h.jsxs)(`section`,{style:{position:`relative`,width:`100%`,minHeight:`50vh`,backgroundColor:`#050505`,overflow:`hidden`,display:`flex`,flexDirection:`column`,alignItems:`center`,justifyContent:`center`,textAlign:`center`,padding:`80px 24px`,boxSizing:`border-box`,borderTop:`1px solid rgba(255, 255, 255, 0.05)`},children:[(0,h.jsx)(`style`,{children:`
            @keyframes starMoveTeam {
              0% {
                opacity: 0.15;
                transform: translate(0, 0) scale(1);
              }
              50% {
                opacity: 0.8;
                transform: translate(calc(var(--drift-x) * 0.5), calc(var(--drift-y) * 0.5)) scale(1.3);
              }
              100% {
                opacity: 0.15;
                transform: translate(var(--drift-x), var(--drift-y)) scale(1);
              }
            }
            .animate-star-move-team {
              animation-name: starMoveTeam;
            }
          `}),(0,h.jsx)(`div`,{style:{position:`absolute`,top:0,left:0,width:`100%`,height:`100%`,overflow:`hidden`,pointerEvents:`none`,zIndex:1},children:n.map(e=>(0,h.jsx)(`span`,{className:`animate-star-move-team`,style:{position:`absolute`,top:e.top,left:e.left,width:`${e.size}px`,height:`${e.size}px`,backgroundColor:`#ffffff`,borderRadius:`50%`,boxShadow:`0 0 ${e.size*2}px #ffffff`,opacity:.15,animationDelay:e.delay,animationDuration:e.duration,animationIterationCount:`infinite`,animationTimingFunction:`ease-in-out`,"--drift-x":`${e.driftX}px`,"--drift-y":`${e.driftY}px`}},e.id))}),(0,h.jsx)(`div`,{style:{position:`absolute`,bottom:`10%`,left:`50%`,transform:`translateX(-50%)`,fontFamily:`var(--font-heading)`,fontSize:`clamp(5rem, 15vw, 15rem)`,fontWeight:900,letterSpacing:`0.05em`,color:`transparent`,WebkitTextStroke:`1px rgba(255, 255, 255, 0.08)`,pointerEvents:`none`,zIndex:1,userSelect:`none`},children:`TRAVINNO`}),(0,h.jsx)(`div`,{style:{position:`absolute`,bottom:0,left:0,width:`100%`,height:`300px`,background:`linear-gradient(to top, rgba(193, 18, 31, 0.28) 0%, rgba(193, 18, 31, 0.08) 50%, transparent 100%)`,pointerEvents:`none`,zIndex:2}}),(0,h.jsx)(`div`,{style:{position:`absolute`,bottom:`-120px`,left:`-10%`,width:`55%`,height:`280px`,background:`radial-gradient(circle, rgba(193, 18, 31, 0.45) 0%, transparent 70%)`,filter:`blur(80px)`,pointerEvents:`none`,zIndex:2}}),(0,h.jsx)(`div`,{style:{position:`absolute`,bottom:`-120px`,right:`-10%`,width:`55%`,height:`280px`,background:`radial-gradient(circle, rgba(193, 18, 31, 0.45) 0%, transparent 70%)`,filter:`blur(80px)`,pointerEvents:`none`,zIndex:2}}),(0,h.jsx)(`div`,{style:{position:`absolute`,bottom:`-100px`,left:`20%`,width:`60%`,height:`240px`,background:`radial-gradient(circle, rgba(193, 18, 31, 0.42) 0%, transparent 70%)`,filter:`blur(80px)`,pointerEvents:`none`,zIndex:2}}),(0,h.jsx)(`div`,{style:{position:`absolute`,bottom:0,left:0,width:`100%`,height:`140px`,background:`linear-gradient(to bottom, transparent 0%, #050505 100%)`,pointerEvents:`none`,zIndex:2}}),(0,h.jsxs)(`div`,{style:{position:`relative`,zIndex:3,maxWidth:`720px`,display:`flex`,flexDirection:`column`,alignItems:`center`},children:[(0,h.jsxs)(`span`,{style:{display:`inline-flex`,alignItems:`center`,gap:`6px`,padding:`4px 12px`,border:`1px solid rgba(193, 18, 31, 0.25)`,borderRadius:`100px`,fontFamily:`var(--font-sans)`,fontSize:`0.72rem`,fontWeight:500,letterSpacing:`0.05em`,color:`rgba(255, 255, 255, 0.85)`,marginBottom:`16px`,background:`rgba(193, 18, 31, 0.05)`,backdropFilter:`blur(4px)`,WebkitBackdropFilter:`blur(4px)`},children:[(0,h.jsx)(`span`,{style:{width:`6px`,height:`6px`,backgroundColor:`#C1121F`,borderRadius:`50%`,display:`inline-block`}}),`Explore active opportunities`]}),(0,h.jsxs)(`h2`,{style:{fontFamily:`var(--font-heading)`,fontSize:`clamp(2.2rem, 5vw, 3.8rem)`,fontWeight:500,lineHeight:1.15,letterSpacing:`0.02em`,color:`#F5F2EC`,margin:`0 0 16px 0`,display:`flex`,flexDirection:`column`,alignItems:`center`,textAlign:`center`},children:[(0,h.jsx)(`span`,{children:`Join Our Global`}),(0,h.jsx)(`span`,{className:`journey-allura-text`,style:{marginTop:`4px`},children:`Team Today`})]}),(0,h.jsx)(`p`,{style:{fontFamily:`var(--font-sans)`,fontSize:`1.02rem`,lineHeight:1.65,color:`rgba(255, 255, 255, 0.65)`,maxWidth:`560px`,margin:`0 auto 36px auto`,fontWeight:300},children:`We're always looking for passionate professionals who believe in designing exceptional travel experiences. Explore active roles across our global offices.`}),(0,h.jsxs)(`div`,{style:{display:`flex`,gap:`16px`,justifyContent:`center`,flexWrap:`wrap`},children:[(0,h.jsx)(`a`,{href:`#careers`,style:{fontFamily:`var(--font-sans)`,fontSize:`0.8rem`,fontWeight:600,letterSpacing:`1px`,color:`#000000`,backgroundColor:`#FFFFFF`,textDecoration:`none`,padding:`12px 32px`,borderRadius:`100px`,display:`inline-block`,transition:`all 0.3s ease`,boxShadow:`0 4px 15px rgba(255, 255, 255, 0.1)`},onMouseEnter:e=>{e.currentTarget.style.backgroundColor=`#C1121F`,e.currentTarget.style.color=`#FFFFFF`,e.currentTarget.style.boxShadow=`0 6px 20px rgba(193, 18, 31, 0.4)`},onMouseLeave:e=>{e.currentTarget.style.backgroundColor=`#FFFFFF`,e.currentTarget.style.color=`#000000`,e.currentTarget.style.boxShadow=`0 4px 15px rgba(255, 255, 255, 0.1)`},children:`Explore Careers`}),(0,h.jsx)(`a`,{href:`#contact`,style:{fontFamily:`var(--font-sans)`,fontSize:`0.8rem`,fontWeight:600,letterSpacing:`1px`,color:`#FFFFFF`,backgroundColor:`transparent`,border:`1px solid rgba(255, 255, 255, 0.2)`,textDecoration:`none`,padding:`12px 32px`,borderRadius:`100px`,display:`inline-block`,transition:`all 0.3s ease`},onMouseEnter:e=>{e.currentTarget.style.borderColor=`#FFFFFF`,e.currentTarget.style.backgroundColor=`rgba(255, 255, 255, 0.05)`},onMouseLeave:e=>{e.currentTarget.style.borderColor=`rgba(255, 255, 255, 0.2)`,e.currentTarget.style.backgroundColor=`transparent`},children:`Contact Us`})]})]})]})]})}export{x as default};