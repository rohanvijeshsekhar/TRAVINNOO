const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-CyIOUweT.js","assets/rolldown-runtime-Cyuzqnbw.js","assets/vendor-lenis-DIx8pWKM.js","assets/vendor-cobe-DZEoYHiu.js","assets/vendor-CFXIwl6n.js","assets/vendor-framer-B94rnuNZ.js","assets/vendor-gsap-B2JeSRMT.js","assets/index-QHrOtV1F.css"])))=>i.map(i=>d[i]);
import{a as e}from"./rolldown-runtime-Cyuzqnbw.js";import{Bt as t,E as n,Ht as r,S as i,d as a,i as o,k as s,n as c}from"./vendor-CFXIwl6n.js";import{a as l,i as u}from"./vendor-framer-B94rnuNZ.js";import{r as d}from"./index-CyIOUweT.js";var f=e(r(),1),p=t();function m(){let[e,t]=(0,f.useState)([]);(0,f.useEffect)(()=>{d(async()=>{let{db:e}=await import(`./index-CyIOUweT.js`).then(e=>e.n);return{db:e}},__vite__mapDeps([0,1,2,3,4,5,6,7])).then(({db:e})=>{t(e.getCareers());let n=()=>t(e.getCareers());return window.addEventListener(`travinno-db-update`,n),()=>window.removeEventListener(`travinno-db-update`,n)})},[]);let[r,m]=(0,f.useState)(null),[h,g]=(0,f.useState)(!1),[_,v]=(0,f.useState)(null),[y,b]=(0,f.useState)(!1),[x,S]=(0,f.useState)({fullName:``,email:``,phone:``,coverLetter:``}),[C,w]=(0,f.useState)({}),T=e.filter(e=>e.status===`Open`);(0,f.useEffect)(()=>(h?document.body.style.overflow=`hidden`:document.body.style.overflow=``,()=>{document.body.style.overflow=``}),[h]),(0,f.useEffect)(()=>{let e=e=>{e.key===`Escape`&&h&&D()};return window.addEventListener(`keydown`,e),()=>window.removeEventListener(`keydown`,e)},[h]);let E=(e=null)=>{m(e),g(!0),b(!1),v(null),S({fullName:``,email:``,phone:``,coverLetter:``}),w({})},D=()=>{g(!1),m(null)},O=e=>{let t=e.target.files[0];t&&(t.size>5*1024*1024?(w(e=>({...e,file:`File exceeds the maximum size limit of 5MB.`})),v(null)):(v(t),w(e=>{let t={...e};return delete t.file,t})))},k=(e,t)=>{S(n=>({...n,[e]:t})),C[e]&&w(t=>{let n={...t};return delete n[e],n})};return(0,p.jsxs)(`div`,{style:{backgroundColor:`#050505`,color:`#F5F2EC`,width:`100%`,minHeight:`100vh`,position:`relative`,overflowX:`hidden`,boxSizing:`border-box`},children:[(0,p.jsx)(`style`,{children:`
        /* Local Careers Section styling to keep index.css lean */
        .careers-container {
          position: relative; 
          z-index: 2; 
          max-width: 1200px; 
          margin: 0 auto; 
          padding: 160px 24px 120px 24px; 
          box-sizing: border-box;
        }

        .job-card-grid {
          display: flex;
          flex-direction: column;
          gap: 24px;
          margin-top: 20px;
        }

        .premium-job-card {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 32px;
          background: linear-gradient(180deg, rgba(16, 16, 20, 0.7) 0%, rgba(10, 10, 12, 0.9) 100%);
          border: 1px solid rgba(245, 242, 236, 0.09);
          border-radius: 18px;
          padding: 36px 40px;
          box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.03), 0 12px 30px rgba(0, 0, 0, 0.45);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          box-sizing: border-box;
        }

        .premium-job-card:hover {
          border-color: rgba(193, 18, 31, 0.65);
          background: linear-gradient(180deg, rgba(24, 24, 30, 0.85) 0%, rgba(15, 15, 18, 0.98) 100%);
          transform: translateY(-6px);
          box-shadow: 
            inset 0 1px 0 rgba(255, 255, 255, 0.08), 
            0 20px 40px -10px rgba(193, 18, 31, 0.22), 
            0 30px 60px -15px rgba(0, 0, 0, 0.85);
        }

        .job-card-info {
          flex: 0 0 300px;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .job-card-meta {
          display: flex;
          align-items: center;
          gap: 16px;
          color: rgba(245, 242, 236, 0.45);
          font-family: var(--font-sans);
          font-size: 0.72rem;
          font-weight: 500;
          letter-spacing: 1px;
          text-transform: uppercase;
        }

        .meta-item {
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .meta-item svg {
          stroke-width: 2px;
        }

        .job-card-title {
          font-family: var(--font-heading);
          font-size: 1.45rem;
          font-weight: 500;
          color: #F5F2EC;
          margin: 4px 0 0 0;
          letter-spacing: -0.2px;
        }

        .job-card-desc {
          flex: 1;
          font-family: var(--font-sans);
          font-size: 0.94rem;
          line-height: 1.65;
          color: rgba(245, 242, 236, 0.65);
          font-weight: 300;
          max-width: 480px;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .job-card-action {
          flex: 0 0 auto;
        }

        .premium-apply-btn {
          background: transparent;
          border: 1px solid rgba(245, 242, 236, 0.15);
          padding: 12px 28px;
          border-radius: 100px;
          font-family: var(--font-sans);
          font-size: 0.8rem;
          font-weight: 600;
          color: #F5F2EC;
          letter-spacing: 1px;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 8px;
          transition: all 0.3s ease;
        }

        .premium-job-card:hover .premium-apply-btn {
          background-color: #C1121F;
          border-color: #C1121F;
          color: #F5F2EC;
          box-shadow: 0 4px 16px rgba(193, 18, 31, 0.25);
        }

        /* Form Inputs */
        .premium-input-field {
          background-color: rgba(255, 255, 255, 0.015) !important;
          border: 1px solid rgba(245, 242, 236, 0.08) !important;
          border-radius: 14px !important;
          color: #F5F2EC !important;
          font-family: var(--font-sans) !important;
          font-size: 0.98rem !important;
          padding: 16px 20px !important;
          width: 100% !important;
          box-sizing: border-box !important;
          transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1) !important;
          outline: none !important;
        }

        .premium-input-field:focus {
          border-color: #C1121F !important;
          background-color: rgba(245, 242, 236, 0.02) !important;
          box-shadow: 0 0 16px rgba(193, 18, 31, 0.12) !important;
        }

        .premium-input-field::placeholder {
          color: rgba(245, 242, 236, 0.25) !important;
        }

        /* File Upload */
        .premium-file-upload {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 12px;
          padding: 24px 20px;
          background: rgba(255, 255, 255, 0.012);
          border: 1px dashed rgba(245, 242, 236, 0.15);
          border-radius: 14px;
          cursor: pointer;
          transition: all 0.3s ease;
          text-align: center;
        }

        .premium-file-upload:hover {
          border-color: #C1121F;
          background-color: rgba(245, 242, 236, 0.015);
        }

        /* Glassmorphic Form Submit Button */
        .glassy-submit-btn {
          background: rgba(255, 255, 255, 0.03);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          border: 1px solid rgba(245, 242, 236, 0.1);
          padding: 16px 36px;
          border-radius: 100px;
          font-family: var(--font-sans);
          font-size: 0.85rem;
          font-weight: 600;
          color: #F5F2EC;
          letter-spacing: 1.5px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
          transition: all 0.3s ease;
          width: 100%;
        }

        .glassy-submit-btn:hover {
          background-color: rgba(193, 18, 31, 0.1);
          border-color: #C1121F;
          box-shadow: 0 6px 24px rgba(193, 18, 31, 0.25);
          transform: translateY(-1px);
        }

        /* Modal Overlay and Window */
        .modal-overlay {
          position: fixed;
          inset: 0;
          background-color: rgba(5, 5, 5, 0.85);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 9999;
          padding: 20px;
        }

        .modal-content {
          background-color: #0c0c0e;
          border: 1px solid rgba(245, 242, 236, 0.08);
          border-radius: 20px;
          max-width: 600px;
          width: 100%;
          max-height: 90vh;
          overflow-y: auto;
          position: relative;
          padding: 40px;
          box-shadow: 0 24px 60px rgba(0, 0, 0, 0.8);
          box-sizing: border-box;
        }

        .modal-close-btn {
          position: absolute;
          top: 24px;
          right: 24px;
          background: transparent;
          border: none;
          color: rgba(245, 242, 236, 0.4);
          cursor: pointer;
          padding: 4px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.25s ease;
        }

        .modal-close-btn:hover {
          color: #F5F2EC;
          transform: scale(1.1);
        }

        @media (max-width: 991px) {
          .premium-job-card {
            flex-direction: column;
            align-items: flex-start;
            gap: 24px;
            padding: 30px;
          }
          .job-card-info {
            flex: none;
            width: 100%;
          }
          .job-card-desc {
            max-width: 100%;
          }
          .job-card-action {
            width: 100%;
          }
          .premium-apply-btn {
            width: 100%;
            justify-content: center;
          }
        }
        
        @media (max-width: 576px) {
          .modal-content {
            padding: 32px 24px;
          }
        }

        @media (max-width: 991px) {
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
      `}),(0,p.jsx)(`div`,{style:{position:`absolute`,inset:0,backgroundColor:`#050505`,zIndex:0,pointerEvents:`none`}}),(0,p.jsx)(`div`,{style:{position:`absolute`,inset:0,backgroundImage:`
            linear-gradient(rgba(245, 242, 236, 0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(245, 242, 236, 0.04) 1px, transparent 1px)
          `,backgroundSize:`50px 50px, 50px 50px`,backgroundRepeat:`repeat, repeat`,zIndex:2,pointerEvents:`none`}}),(0,p.jsx)(`div`,{className:`hero-artwork-container`,style:{position:`absolute`,right:0,top:0,width:`54%`,height:`580px`,pointerEvents:`none`,zIndex:1,overflow:`hidden`,WebkitMaskImage:`linear-gradient(to right, transparent 0%, black 70%)`,maskImage:`linear-gradient(to right, transparent 0%, black 70%)`},children:(0,p.jsx)(u.div,{animate:{y:[0,-3,0]},transition:{duration:6,ease:`easeInOut`,repeat:1/0},style:{width:`100%`,height:`100%`,position:`relative`},children:(0,p.jsx)(`img`,{src:`/TRAVINNO/images/careers_hero.png`,alt:`Executive Workspace Editorial`,style:{width:`100%`,height:`100%`,objectFit:`cover`,opacity:.38,filter:`contrast(80%) brightness(65%)`,transition:`opacity 0.5s ease`,WebkitMaskImage:`linear-gradient(to bottom, black 82%, transparent 100%)`,maskImage:`linear-gradient(to bottom, black 82%, transparent 100%)`}})})}),(0,p.jsxs)(`div`,{className:`careers-container`,children:[(0,p.jsx)(`section`,{style:{marginBottom:`24px`,position:`relative`},children:(0,p.jsxs)(`div`,{style:{maxWidth:`640px`,position:`relative`,zIndex:3},children:[(0,p.jsxs)(u.span,{initial:{opacity:0,y:12},animate:{opacity:1,y:0},transition:{duration:.8,ease:[.16,1,.3,1]},style:{display:`inline-flex`,alignItems:`center`,gap:`6px`,padding:`4px 12px`,border:`1px solid rgba(193, 18, 31, 0.18)`,borderRadius:`100px`,fontFamily:`var(--font-sans)`,fontSize:`0.72rem`,fontWeight:500,letterSpacing:`0.05em`,color:`rgba(245, 242, 236, 0.85)`,marginBottom:`16px`,background:`rgba(193, 18, 31, 0.05)`,backdropFilter:`blur(4px)`,WebkitBackdropFilter:`blur(4px)`},children:[(0,p.jsx)(`span`,{style:{width:`6px`,height:`6px`,backgroundColor:`#C1121F`,borderRadius:`50%`,display:`inline-block`}}),`Careers`]}),(0,p.jsxs)(u.h1,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.8,ease:[.16,1,.3,1],delay:.1},style:{fontFamily:`var(--font-heading)`,fontSize:`clamp(2.2rem, 5vw, 3.8rem)`,fontWeight:450,lineHeight:1.15,color:`#F5F2EC`,margin:`0 0 16px 0`,letterSpacing:`-0.5px`},children:[`Build Extraordinary `,(0,p.jsx)(`br`,{}),(0,p.jsx)(`span`,{style:{fontFamily:`'Allura', cursive`,fontSize:`1.25em`,fontWeight:400,letterSpacing:`0.02em`,lineHeight:`1.2`,display:`inline-block`,marginTop:`-4px`,paddingBottom:`0px`,background:`linear-gradient(to bottom, #F5F2EC 20%, #E8A7A7 60%, #C1121F 100%)`,WebkitBackgroundClip:`text`,WebkitTextFillColor:`transparent`,backgroundClip:`text`},children:`Journeys With Us`})]}),(0,p.jsx)(u.p,{initial:{opacity:0,y:10},animate:{opacity:.75,y:0},transition:{duration:.8,ease:[.16,1,.3,1],delay:.2},style:{fontFamily:`var(--font-sans)`,fontSize:`clamp(1rem, 1.8vw, 1.2rem)`,lineHeight:1.65,color:`#F5F2EC`,margin:0,maxWidth:`680px`,fontWeight:300},children:`Join a passionate team creating exceptional travel experiences across global destinations. At Travinno, every role contributes to unforgettable journeys.`})]})}),(0,p.jsxs)(`section`,{style:{position:`relative`},children:[(0,p.jsxs)(u.div,{initial:{opacity:0,y:15},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.8,ease:[.16,1,.3,1]},style:{display:`inline-flex`,alignItems:`center`,gap:`6px`,padding:`4px 12px`,border:`1px solid rgba(193, 18, 31, 0.18)`,borderRadius:`100px`,fontFamily:`var(--font-sans)`,fontSize:`0.72rem`,fontWeight:500,letterSpacing:`0.05em`,color:`rgba(245, 242, 236, 0.85)`,marginBottom:`16px`,background:`rgba(193, 18, 31, 0.05)`,backdropFilter:`blur(4px)`,WebkitBackdropFilter:`blur(4px)`},children:[(0,p.jsx)(`span`,{style:{width:`6px`,height:`6px`,backgroundColor:`#C1121F`,borderRadius:`50%`,display:`inline-block`}}),`Available Opportunities`]}),T.length>0?(0,p.jsx)(`div`,{className:`job-card-grid`,children:T.map((e,t)=>(0,p.jsxs)(u.div,{className:`premium-job-card`,initial:{opacity:0,y:25},whileInView:{opacity:1,y:0},viewport:{once:!0,margin:`-50px`},transition:{duration:.8,ease:[.16,1,.3,1],delay:t*.05},children:[(0,p.jsxs)(`div`,{className:`job-card-info`,children:[(0,p.jsxs)(`div`,{className:`job-card-meta`,children:[(0,p.jsxs)(`div`,{className:`meta-item`,children:[(0,p.jsx)(a,{size:13,style:{color:`#C1121F`}}),(0,p.jsx)(`span`,{children:e.location})]}),(0,p.jsx)(`span`,{children:`•`}),(0,p.jsxs)(`div`,{className:`meta-item`,children:[(0,p.jsx)(n,{size:13,style:{color:`rgba(245, 242, 236, 0.5)`}}),(0,p.jsx)(`span`,{children:e.type})]})]}),(0,p.jsx)(`h3`,{className:`job-card-title`,children:e.title})]}),(0,p.jsx)(`p`,{className:`job-card-desc`,children:e.description}),(0,p.jsx)(`div`,{className:`job-card-action`,children:(0,p.jsxs)(`button`,{onClick:()=>E(e),className:`premium-apply-btn`,children:[`Apply Now `,(0,p.jsx)(s,{size:13})]})})]},e.id))}):(0,p.jsxs)(u.div,{initial:{opacity:0,scale:.98},whileInView:{opacity:1,scale:1},viewport:{once:!0},transition:{duration:.8,ease:[.16,1,.3,1]},style:{textAlign:`center`,padding:`80px 40px`,border:`1px solid rgba(245, 242, 236, 0.06)`,borderRadius:`20px`,background:`rgba(255, 255, 255, 0.005)`},children:[(0,p.jsx)(`h3`,{style:{fontFamily:`var(--font-heading)`,fontSize:`1.8rem`,fontWeight:500,margin:`0 0 12px 0`,color:`#F5F2EC`},children:`No Current Openings`}),(0,p.jsx)(`p`,{style:{fontFamily:`var(--font-sans)`,fontSize:`0.96rem`,color:`rgba(245, 242, 236, 0.55)`,margin:`0 0 32px 0`,fontWeight:300},children:`We’re always looking for exceptional talent. Check back soon for future opportunities.`}),(0,p.jsxs)(`button`,{onClick:()=>E(null),className:`premium-apply-btn`,style:{margin:`0 auto`},children:[`Send Your Resume `,(0,p.jsx)(s,{size:13})]})]})]})]}),(0,p.jsx)(l,{children:h&&(0,p.jsx)(`div`,{className:`modal-overlay`,onClick:D,children:(0,p.jsxs)(u.div,{className:`modal-content`,initial:{opacity:0,scale:.95,y:20},animate:{opacity:1,scale:1,y:0},exit:{opacity:0,scale:.95,y:15},transition:{duration:.4,ease:[.16,1,.3,1]},onClick:e=>e.stopPropagation(),children:[(0,p.jsx)(`button`,{className:`modal-close-btn`,onClick:D,"aria-label":`Close Modal`,children:(0,p.jsx)(c,{size:20})}),y?(0,p.jsxs)(u.div,{initial:{opacity:0,scale:.97},animate:{opacity:1,scale:1},style:{textAlign:`center`,padding:`30px 10px`,display:`flex`,flexDirection:`column`,alignItems:`center`,gap:`20px`},children:[(0,p.jsx)(i,{size:56,style:{color:`#C1121F`}}),(0,p.jsxs)(`div`,{children:[(0,p.jsx)(`h2`,{style:{fontFamily:`var(--font-heading)`,fontSize:`1.8rem`,fontWeight:500,color:`#F5F2EC`,margin:`0 0 10px 0`},children:`Application Received`}),(0,p.jsx)(`p`,{style:{fontFamily:`var(--font-sans)`,fontSize:`0.94rem`,color:`rgba(245, 242, 236, 0.65)`,lineHeight:1.6,maxWidth:`380px`,margin:`0 auto`,fontWeight:300},children:`Thank you for applying. A member of our luxury coordination team will review your CV and be in touch soon.`})]}),(0,p.jsx)(`button`,{onClick:D,className:`premium-apply-btn`,style:{marginTop:`12px`},children:`Close Window`})]}):(0,p.jsxs)(p.Fragment,{children:[(0,p.jsxs)(`div`,{style:{marginBottom:`32px`},children:[(0,p.jsx)(`h2`,{style:{fontFamily:`var(--font-heading)`,fontSize:`2rem`,fontWeight:500,color:`#F5F2EC`,margin:`0 0 8px 0`},children:`Submit Your Application`}),(0,p.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`2px`},children:[(0,p.jsx)(`span`,{style:{fontFamily:`var(--font-sans)`,fontSize:`0.75rem`,fontWeight:600,letterSpacing:`1px`,color:`rgba(245, 242, 236, 0.45)`,textTransform:`uppercase`},children:`Applying for`}),(0,p.jsx)(`span`,{style:{fontFamily:`var(--font-sans)`,fontSize:`1.05rem`,fontWeight:500,color:`#C1121F`},children:r?r.title:`General Application`})]})]}),(0,p.jsxs)(`form`,{onSubmit:e=>{e.preventDefault();let t={};if(x.fullName.trim()||(t.fullName=`Full Name is required.`),x.email.trim()?/\S+@\S+\.\S+/.test(x.email)||(t.email=`Invalid email formatting.`):t.email=`Email Address is required.`,x.phone.trim()||(t.phone=`Phone Number is required.`),_||(t.file=`Please upload your CV/Resume.`),Object.keys(t).length>0){w(t);return}d(async()=>{let{db:e}=await import(`./index-CyIOUweT.js`).then(e=>e.n);return{db:e}},__vite__mapDeps([0,1,2,3,4,5,6,7])).then(({db:e})=>{let t={id:`app_`+Date.now(),jobTitle:r?r.title:`General Inquiry`,fullName:x.fullName,email:x.email,phone:x.phone,coverLetter:x.coverLetter||``,fileName:_?_.name:`resume.pdf`,date:new Date().toLocaleDateString(`en-US`,{year:`numeric`,month:`long`,day:`numeric`})},n=e.getApplications();e.saveApplications([...n,t],`New job application from ${t.fullName} for ${t.jobTitle}`)}),b(!0)},style:{display:`flex`,flexDirection:`column`,gap:`24px`},children:[(0,p.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`8px`},children:[(0,p.jsx)(`label`,{style:{fontFamily:`var(--font-sans)`,fontSize:`0.72rem`,fontWeight:600,letterSpacing:`1.5px`,color:`rgba(245, 242, 236, 0.45)`,textTransform:`uppercase`},children:`Position Applied For`}),(0,p.jsx)(`input`,{type:`text`,className:`premium-input-field`,value:r?r.title:`General Application`,disabled:!0,style:{opacity:.6,cursor:`not-allowed`,backgroundColor:`rgba(255, 255, 255, 0.005) !important`}})]}),(0,p.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`8px`},children:[(0,p.jsx)(`label`,{style:{fontFamily:`var(--font-sans)`,fontSize:`0.72rem`,fontWeight:600,letterSpacing:`1.5px`,color:`rgba(245, 242, 236, 0.45)`,textTransform:`uppercase`},children:`Full Name *`}),(0,p.jsx)(`input`,{type:`text`,placeholder:`e.g. Alexander Mercer`,className:`premium-input-field`,value:x.fullName,onChange:e=>k(`fullName`,e.target.value)}),C.fullName&&(0,p.jsx)(`span`,{style:{color:`#C1121F`,fontSize:`0.75rem`,fontFamily:`var(--font-sans)`},children:C.fullName})]}),(0,p.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`8px`},children:[(0,p.jsx)(`label`,{style:{fontFamily:`var(--font-sans)`,fontSize:`0.72rem`,fontWeight:600,letterSpacing:`1.5px`,color:`rgba(245, 242, 236, 0.45)`,textTransform:`uppercase`},children:`Email Address *`}),(0,p.jsx)(`input`,{type:`email`,placeholder:`alexander@mercer.com`,className:`premium-input-field`,value:x.email,onChange:e=>k(`email`,e.target.value)}),C.email&&(0,p.jsx)(`span`,{style:{color:`#C1121F`,fontSize:`0.75rem`,fontFamily:`var(--font-sans)`},children:C.email})]}),(0,p.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`8px`},children:[(0,p.jsx)(`label`,{style:{fontFamily:`var(--font-sans)`,fontSize:`0.72rem`,fontWeight:600,letterSpacing:`1.5px`,color:`rgba(245, 242, 236, 0.45)`,textTransform:`uppercase`},children:`Phone Number *`}),(0,p.jsx)(`input`,{type:`tel`,placeholder:`+971 50 123 4567`,className:`premium-input-field`,value:x.phone,onChange:e=>k(`phone`,e.target.value)}),C.phone&&(0,p.jsx)(`span`,{style:{color:`#C1121F`,fontSize:`0.75rem`,fontFamily:`var(--font-sans)`},children:C.phone})]}),(0,p.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`8px`},children:[(0,p.jsx)(`label`,{style:{fontFamily:`var(--font-sans)`,fontSize:`0.72rem`,fontWeight:600,letterSpacing:`1.5px`,color:`rgba(245, 242, 236, 0.45)`,textTransform:`uppercase`},children:`Upload CV / Resume *`}),(0,p.jsxs)(`label`,{className:`premium-file-upload`,children:[(0,p.jsx)(`input`,{type:`file`,accept:`.pdf,.doc,.docx`,style:{display:`none`},onChange:O}),(0,p.jsx)(o,{size:18,style:{color:_?`#C1121F`:`rgba(245, 242, 236, 0.4)`}}),(0,p.jsx)(`span`,{style:{fontSize:`0.86rem`,color:_?`#F5F2EC`:`rgba(245, 242, 236, 0.6)`,fontWeight:500},children:_?_.name:`Select PDF, DOC, or DOCX`}),(0,p.jsx)(`span`,{style:{fontSize:`0.72rem`,color:`rgba(245, 242, 236, 0.3)`},children:`Max file size 5MB`})]}),C.file&&(0,p.jsx)(`span`,{style:{color:`#C1121F`,fontSize:`0.75rem`,fontFamily:`var(--font-sans)`,marginTop:`4px`},children:C.file})]}),(0,p.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`8px`},children:[(0,p.jsx)(`label`,{style:{fontFamily:`var(--font-sans)`,fontSize:`0.72rem`,fontWeight:600,letterSpacing:`1.5px`,color:`rgba(245, 242, 236, 0.45)`,textTransform:`uppercase`},children:`Cover Letter (Optional)`}),(0,p.jsx)(`textarea`,{rows:4,placeholder:`Tell us why you want to design luxury travel experiences with us...`,className:`premium-input-field`,style:{resize:`vertical`,minHeight:`100px`},value:x.coverLetter,onChange:e=>k(`coverLetter`,e.target.value)})]}),(0,p.jsx)(`button`,{type:`submit`,className:`glassy-submit-btn`,style:{marginTop:`8px`},children:`Submit Application`})]})]})]})})})]})}export{m as default};