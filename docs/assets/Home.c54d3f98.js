import{d as T,u as g,r as _,o as n,c as i,a as s,w as m,v as p,b as S,n as x,e as y,f as $,g as u,h as k,i as b,j as w,t as c,F as V,k as A,l as C}from"./index.e13435cd.js";const f=T("task",{state:()=>({tasks:[]}),actions:{setTask(e){this.tasks.push(e)},updateTask(e,o){},deleteTask(e){},addTask(e){this.tasks.push(e)}},persist:{enabled:!0,strategies:[{key:"task",storage:localStorage}]}}),E={class:"mt-5"},M=["onSubmit"],B={class:"field"},N=s("label",{class:"label"},"Titulo",-1),D={class:"control"},F={class:"control"},H=s("div",{class:"control"},[s("button",{type:"submit",class:"mt-2 button is-info"},"Enviar")],-1),I={__name:"AddTask",setup(e){f();const o=g(),a=_(""),l=_(""),v=o.id;o.user.email;const r=async()=>{await x(v,l.value,a.value)};return(h,t)=>(n(),i("div",E,[s("form",{onSubmit:S(r,["prevent"])},[s("div",B,[N,s("div",D,[m(s("input",{"onUpdate:modelValue":t[0]||(t[0]=d=>l.value=d),class:"input",type:"text",placeholder:"titulo"},null,512),[[p,l.value]])])]),s("div",F,[m(s("textarea",{"onUpdate:modelValue":t[1]||(t[1]=d=>a.value=d),class:"textarea",placeholder:"Escribe un post"},null,512),[[p,a.value]])]),H],40,M)]))}},L={class:"section"},P={class:"container"},U={key:0,class:"message is-danger"},j={class:"message-body"},q=s("br",null,null,-1),z={key:1},G={class:"title"},J={class:"section"},K=s("button",null,"Eliminar",-1),O=s("button",null,"Marcar como hecho",-1),R={__name:"Home",setup(e){const o=g();f();const a=_(""),l=async()=>{a.value=await C(),console.log(a.value)};return y(()=>{l()}),(v,r)=>{const h=$("router-link");return n(),i("div",L,[s("div",P,[u(o).isAuth?(n(),i("div",z,[s("div",G," Hola "+c(u(o).user.email),1),s("button",{onClick:r[0]||(r[0]=t=>u(o).logout()),class:"button is-danger"},"Cerrar Sesi\xF3n"),s("div",null,[b(I)]),(n(!0),i(V,null,A(a.value.data,t=>(n(),i("div",J,[s("div",null,c(t.title)+" - "+c(t.created_at),1),s("div",null,c(t.description),1),K,O]))),256))])):(n(),i("article",U,[s("div",j,[k(" Iniciar sesion en la APP "),q,b(h,{to:{name:"login"}},{default:w(()=>[k(" Ir a Login ")]),_:1})])]))])])}}};export{R as default};