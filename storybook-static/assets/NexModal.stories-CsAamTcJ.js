import{r,R as e}from"./index-CDs2tPxN.js";import{N as s}from"./NexButton-DLodcaQ-.js";import{C as x}from"./CSSTransition-BNtILy1J.js";import"./inheritsLoose-Co2FXOuK.js";import"./index-B-yFm4aN.js";const i=({setOpenModal:a})=>{const[o,n]=r.useState(!1);r.useEffect(()=>{const u=setTimeout(()=>{n(!0)},10);return()=>clearTimeout(u)},[]);const p=()=>{a(!1)};return e.createElement("div",{className:"nex-modal-wrapper"},e.createElement(x,{in:o,classNames:"fade",timeout:300,mountOnEnter:!0,unmountOnExit:!0},e.createElement("div",{className:"nex-modal-inner-wrapper"},e.createElement("div",{className:"nex-modal-body"},e.createElement("p",null,"The next page looks amazing. Hope you want to go there!")),e.createElement("div",{className:"nex-modal-footer"},e.createElement(s,{onClick:()=>{a(!1)},text:"Cancel",type:"danger"}),e.createElement(s,{onClick:p,text:"Continue",type:"primary"})))))},d=i;i.__docgenInfo={description:"",methods:[],displayName:"NexModal",props:{setOpenModal:{required:!0,tsType:{name:"ReactDispatch",raw:"React.Dispatch<React.SetStateAction<boolean>>",elements:[{name:"ReactSetStateAction",raw:"React.SetStateAction<boolean>",elements:[{name:"boolean"}]}]},description:""}}};const y={title:"NexComponent/NexModal",component:d,tags:["autodocs"]},M=a=>{const[o,n]=r.useState(!1);return e.createElement("div",{style:{margin:"20px"}},e.createElement(s,{onClick:()=>n(!0),text:"Open Modal",type:"warning"}),o?e.createElement(d,{...a,setOpenModal:n}):"")},t=M.bind({});t.args={};var l,c,m;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`args => {
  const [openModal, setOpenModal] = useState(false);
  return <div style={{
    margin: '20px'
  }}>\r
      <NexButton onClick={() => setOpenModal(true)} text='Open Modal' type='warning'></NexButton>\r
      {openModal ? <NexModal {...args} setOpenModal={setOpenModal} /> : ''}\r
    </div>;
}`,...(m=(c=t.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};const C=["Default"];export{t as Default,C as __namedExportsOrder,y as default};