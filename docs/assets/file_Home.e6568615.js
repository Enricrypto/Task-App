import{d as F,_ as I,u as V,r as m,o as k,c as v,a as s,w as $,v as S,b as G,p as N,e as A,f as w,i as C,t as T,g as f,h as n,j as L,k as x,l as z,m as J,n as O,F as E,q as P}from"./file_index.f2a0b1c1.js";import{g as U,n as R,d as W,s as B,u as K}from"./file_index.d8635c1f.js";const M=F("task",{state:()=>({tasks:[]}),actions:{async setTask(){const t=await U();this.tasks=await t},updateTask(t){this.tasks.filter(e=>e.id===t)},deleteTask(t){const e=this.tasks.findIndex(_=>_.id===t);return this.tasks.splice(e,1)},async addTask(t){const e=await U();this.tasks=await e}},persist:{enabled:!0,strategies:[{key:"task",storage:localStorage}]}});const D=t=>(N("data-v-fb6d2a80"),t=t(),A(),t),Q={class:"new-post mt-5"},X=["onSubmit"],Y={class:"field"},Z=D(()=>s("label",{class:"label"},"New Post",-1)),ss={class:"control"},ts={class:"control"},es=D(()=>s("div",{class:"control mt-3"},[s("button",{type:"submit",class:"mt-2 button is-info is-fullwidth"},"Send")],-1)),os={__name:"AddTask",setup(t){const e=M(),_=V(),a=m(""),c=m(""),h=_.id,g=async()=>{await R(h,c.value,a.value);const i={title:c.value,description:a.value,created_at:new Date};e.addTask(i),a.value="",c.value=""};return(i,d)=>(k(),v("div",Q,[s("form",{class:"add-task",onSubmit:G(g,["prevent"]),to:{name:"home"}},[s("div",Y,[Z,s("div",ss,[$(s("input",{"onUpdate:modelValue":d[0]||(d[0]=r=>c.value=r),class:"input",type:"text",placeholder:"Title"},null,512),[[S,c.value]])])]),s("div",ts,[$(s("textarea",{"onUpdate:modelValue":d[1]||(d[1]=r=>a.value=r),class:"textarea",placeholder:"Write your post"},null,512),[[S,a.value]])]),es],40,X)]))}},as=I(os,[["__scopeId","data-v-fb6d2a80"]]);const y=t=>(N("data-v-ce352c98"),t=t(),A(),t),ns={class:"card"},is={key:0,class:"container"},ds={key:0,class:"created-card"},ls={class:"media"},cs={class:"media-content"},rs={class:"title is-5"},_s={class:"props"},us={class:"created-card buttons"},ks={key:1},vs={class:"card-edit"},ps=y(()=>s("div",{class:"media"},[s("div",{class:"media-content"},[s("p",{class:"title is-4"},"Edit Note!")])],-1)),ms=["placeholder"],hs=y(()=>s("br",null,null,-1)),bs=["placeholder"],fs=y(()=>s("br",null,null,-1)),ys={class:"card-edit buttons"},gs={key:1,class:"card-done"},Ts={class:"media"},ws=y(()=>s("div",{class:"media-content"},[s("p",{class:"title is-4"},"Good Job!")],-1)),$s=y(()=>s("br",null,null,-1)),Ss={class:"done-icon"},Cs={class:"card-done buttons"},xs={__name:"Card",props:{task:Object},setup(t){const e=t,_=m(!1),a=M(),c=V(),h=async u=>{a.setTask(),await W(u),a.deleteTask(u)};let g,i=m(""),d=m(""),r=m(g);const b=u=>{_.value=!_.value},H=async u=>{i=!0,await B(u,i),a.setTask()},j=async u=>{i=!1,await B(u,i),a.setTask()},q=async u=>{await K(u,d.value,r.value),console.log(await a.setTask()),b()};return(u,o)=>{const p=w("fa");return k(),v("div",ns,[(C(i)?i.value=!t.task.isCreated:i=!t.task.isCreated)?(k(),v("div",is,[_.value?(k(),v("div",ks,[s("div",vs,[ps,$(s("input",{"onUpdate:modelValue":o[3]||(o[3]=l=>C(d)?d.value=l:d=l),type:"text",placeholder:e.task.title},null,8,ms),[[S,f(d)]]),hs,$(s("textarea",{"onUpdate:modelValue":o[4]||(o[4]=l=>C(r)?r.value=l:r=l),rows:"4",placeholder:e.task.description},null,8,bs),[[S,f(r)]]),fs,s("div",ys,[s("button",{onClick:o[5]||(o[5]=l=>q(e.task.id))},[n(p,{icon:"floppy-disk"})]),s("button",{onClick:o[6]||(o[6]=l=>b(e.task.id))},[n(p,{icon:"xmark"})])])])])):(k(),v("div",ds,[s("div",ls,[s("div",cs,[s("p",rs,T(f(c).user.email),1)])]),s("div",_s,[s("div",null,T(e.task.title),1),s("div",null,T(e.task.description),1),s("time",null,T(e.task.created_at),1)]),s("div",us,[s("button",{onClick:o[0]||(o[0]=l=>h(e.task.id))},[n(p,{icon:"trash"})]),s("button",{onClick:o[1]||(o[1]=l=>H(e.task.id))},[n(p,{icon:"check"})]),s("button",{onClick:o[2]||(o[2]=l=>b(e.task.id))},[n(p,{icon:"pen-to-square"})])])]))])):(k(),v("div",gs,[s("div",Ts,[ws,$s,s("div",Ss,[n(p,{icon:"circle-check"})])]),s("div",Cs,[s("button",{onClick:o[7]||(o[7]=l=>h(e.task.id))},[n(p,{icon:"trash"})]),s("button",{onClick:o[8]||(o[8]=l=>j(e.task.id))},[n(p,{icon:"rotate-left"})])])]))])}}},Is=I(xs,[["__scopeId","data-v-ce352c98"]]);const Vs=t=>(N("data-v-8c642c49"),t=t(),A(),t),Ns={class:"home-container"},As={class:"login-post"},Ms={class:"login"},Es={key:0,class:"message is-danger"},Us={class:"message-body"},Bs=Vs(()=>s("br",null,null,-1)),Ds={class:"columns is-multiline is-centered is-mobile"},Hs={class:"modal-content"},js={class:"columns is-multiline is-centered is-mobile"},qs={__name:"Home",setup(t){const e=V(),_=M();m(""),L(()=>{_.setTask()});const a=m(!1),c=h=>{a.value=!a.value};return(h,g)=>{const i=w("router-link"),d=w("fa"),r=w("router-view");return k(),v(E,null,[s("div",Ns,[s("section",As,[s("div",Ms,[f(e).isAuth?J("",!0):(k(),v("div",Es,[s("div",Us,[x(" Start your session "),Bs,n(i,{to:{name:"login"}},{default:z(()=>[x(" Go to Login ")]),_:1})])]))]),s("div",Ds,[s("button",{class:"add-message",onClick:c},[x("Create a Note "),n(d,{icon:"plus"})]),s("div",{class:O(["modal",{"is-active":a.value}])},[s("div",{onClick:c,class:"modal-background"}),s("div",Hs,[n(as)]),s("button",{onClick:c,class:"modal-close is-large","aria-label":"close"})],2)])]),s("div",js,[(k(!0),v(E,null,P(f(_).tasks,b=>(k(),v("div",{class:"cards column is-12-mobile is-6-tablet is-3-desktop is-3-widescreen",key:b.id},[n(Is,{task:b},null,8,["task"])]))),128))])]),n(r)],64)}}},Ls=I(qs,[["__scopeId","data-v-8c642c49"]]);export{Ls as default};
