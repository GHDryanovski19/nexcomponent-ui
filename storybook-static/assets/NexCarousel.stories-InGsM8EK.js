import{r as d,R as e}from"./index-CDs2tPxN.js";import{F as u,f as _,a as y}from"./index-DFXOujFz.js";import{N as c}from"./NexCard-CqjxkdrD.js";import"./index-27BIJqHF.js";import"./NexSeparator-fHD59kFZ.js";const h=({children:a,navButtons:N=!1,navigationPosition:i="bottom",line:b,interval:r})=>{const[s,l]=d.useState(0),m=()=>{l(t=>t===a.length-1?0:t+1)},v=()=>{l(t=>t===0?a.length-1:t-1)},C=t=>{l(t)};return d.useEffect(()=>{let t=null;return r&&r>0&&(t=setInterval(()=>{m()},r*1e3)),()=>{t&&clearInterval(t)}},[r]),e.createElement("div",{className:`nex-carousel nex-carousel-dots-${i}`},e.createElement("div",{className:"nex-slides",style:{transform:`translateX(-${s*100}%)`}},a.map((t,n)=>e.createElement("div",{className:"nex-slide",key:n},t))),b&&e.createElement("div",{className:"nex-carousel-line",style:{width:`${(s+1)/a.length*100}%`}}),N&&e.createElement(e.Fragment,null,e.createElement(u,{icon:_,className:"nex-carousel-nav-button nex-prev",onClick:v}),e.createElement(u,{icon:y,className:"nex-carousel-nav-button nex-next",onClick:m})),e.createElement("div",{className:`nex-carousel-dots ${i}`},a.map((t,n)=>e.createElement("div",{className:`nex-carousel-dot ${n===s?"active":""}`,key:n,onClick:()=>C(n)}))))},x=h;h.__docgenInfo={description:"",methods:[],displayName:"NexCarousel",props:{children:{required:!0,tsType:{name:"Array",elements:[{name:"ReactReactNode",raw:"React.ReactNode"}],raw:"React.ReactNode[]"},description:""},navButtons:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},navigationPosition:{required:!1,tsType:{name:"union",raw:"'top' | 'bottom'",elements:[{name:"literal",value:"'top'"},{name:"literal",value:"'bottom'"}]},description:"",defaultValue:{value:"'bottom'",computed:!1}},line:{required:!1,tsType:{name:"boolean"},description:""},interval:{required:!1,tsType:{name:"number"},description:""}}};const R={title:"NexComponent/NexCarousel",component:x,tags:["autodocs"]},E=a=>e.createElement("div",{style:{margin:"10px"}},e.createElement(x,{...a},e.createElement(c,{title:"Full Featured Card",image:"https://png.pngtree.com/thumb_back/fh260/background/20230412/pngtree-colorful-abstract-ocean-waves-background-image_2357907.jpg",content:"This card has it all - image, content, actions, and footer."}),e.createElement(c,{title:"Full Featured Card",image:"https://img.freepik.com/free-photo/abstract-multi-colored-wave-pattern-shiny-flowing-modern-generated-by-ai_188544-15588.jpg",content:"This card has it all - image, content, actions, and footer."}),e.createElement(c,{title:"Full Featured Card",image:"https://t3.ftcdn.net/jpg/06/33/38/46/360_F_633384696_Jz7VVSzl9kIAgXgd0KtuA33x6Y3j2uLD.jpg",content:"This card has it all - image, content, actions, and footer."}))),o=E.bind({});var p,g,f;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`args => <div style={{
  margin: '10px'
}}>\r
        <NexCarousel {...args}>\r
            <NexCard title='Full Featured Card' image='https://png.pngtree.com/thumb_back/fh260/background/20230412/pngtree-colorful-abstract-ocean-waves-background-image_2357907.jpg' content='This card has it all - image, content, actions, and footer.' />\r
            <NexCard title='Full Featured Card' image='https://img.freepik.com/free-photo/abstract-multi-colored-wave-pattern-shiny-flowing-modern-generated-by-ai_188544-15588.jpg' content='This card has it all - image, content, actions, and footer.' />\r
            <NexCard title='Full Featured Card' image='https://t3.ftcdn.net/jpg/06/33/38/46/360_F_633384696_Jz7VVSzl9kIAgXgd0KtuA33x6Y3j2uLD.jpg' content='This card has it all - image, content, actions, and footer.' />\r
        </NexCarousel>\r
    </div>`,...(f=(g=o.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};const I=["Default"];export{o as Default,I as __namedExportsOrder,R as default};