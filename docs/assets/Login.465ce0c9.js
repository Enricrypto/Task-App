import{f as _,g as i,o as p,c as h,a as s,h as m,i as n,v as c,l as v}from"./index.c32942d2.js";import{u as f}from"./auth.930b05a9.js";const b={class:"section"},w={class:"container"},g=s("h2",null,"Log into your account",-1),y=s("br",null,null,-1),S=["onSubmit"],x={class:"field"},k=s("label",{class:"label"},"Email",-1),B={class:"control"},V={class:"field"},E=s("label",{class:"label"},"Password",-1),L={class:"control"},M=s("div",{class:"field"},[s("div",{class:"control"},[s("input",{class:"button is-link is-fullwidth",type:"submit",placeholder:"Text input"})])],-1),D={__name:"Login",setup(T){const r=_(),u=f(),t=i(""),l=i(""),d=async()=>{try{const o=await v(t.value,l.value);if(o.user){const e=o.user.id;u.login(t.value,l.value,e),r.push({name:"home"})}else alert("usuario o contrase\xF1a invalida")}catch(o){console.log(o.error_description||o.message)}};return(o,e)=>(p(),h("div",b,[s("div",w,[g,y,s("form",{onSubmit:m(d,["prevent"])},[s("div",x,[k,s("div",B,[n(s("input",{"onUpdate:modelValue":e[0]||(e[0]=a=>t.value=a),class:"input",type:"email",placeholder:"email"},null,512),[[c,t.value]])])]),s("div",V,[E,s("div",L,[n(s("input",{"onUpdate:modelValue":e[1]||(e[1]=a=>l.value=a),class:"input",type:"password",placeholder:"password"},null,512),[[c,l.value]])])]),M],40,S)])]))}};export{D as default};
