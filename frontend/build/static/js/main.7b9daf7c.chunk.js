(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{87:function(e,t,n){},88:function(e,t,n){},89:function(e,t,n){},90:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n(0),c=n.n(r),s=n(18),i=n.n(s),o=n(92),l=n(98),j=n(99),d=n(30),h=n(23),u=n(48),b=n(56),m=n(97),x=n(93),O=(n(68),n(6)),p=function(){Object(O.k)();var e=Object(r.useState)({}),t=Object(b.a)(e,2),n=t[0],c=t[1],s=function(e){return c(Object(h.a)({},e.target.name,e.target.value))};return Object(a.jsx)(o.a,{className:"mt-4",children:Object(a.jsxs)(m.a,{onSubmit:function(e){var t;fetch("/",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:(t=Object(u.a)({"form-name":"contact"},n),Object.keys(t).map((function(e){return encodeURIComponent(e)+"="+encodeURIComponent(t[e])})).join("&"))}).then((function(){return alert("Success!")})).catch((function(e){return alert(e)})),e.preventDefault()},"data-netlify":"true",children:[Object(a.jsx)(m.a.Label,{children:"Your Name: "}),Object(a.jsx)(m.a.Control,{type:"text",name:"name",value:n.name,onChange:s}),Object(a.jsx)(m.a.Label,{children:"Your Email: "}),Object(a.jsx)(m.a.Control,{type:"email",name:"email",value:n.email,onChange:s}),Object(a.jsx)(m.a.Label,{children:"Your Number: "}),Object(a.jsx)(m.a.Control,{type:"number",name:"phoneNumber",value:n.phoneNumber,onChange:s}),Object(a.jsx)(m.a.Label,{children:"Preffered Date of Service"}),Object(a.jsx)(m.a.Control,{required:!0,type:"date",name:"date",value:n.date,onChange:s}),Object(a.jsx)(m.a.Label,{children:"Kit Size: "}),Object(a.jsx)(m.a.Control,{type:"number",name:"kitSize",value:n.kitSize,onChange:s}),Object(a.jsx)(m.a.Label,{children:"What Service Would You Like"}),Object(a.jsxs)(m.a.Control,{defaultValue:n.package,required:!0,name:"Service Package",as:"select",onChange:s,children:[Object(a.jsx)("option",{children:"Tuning"}),Object(a.jsx)("option",{children:"Bronze Maintenance Package"}),Object(a.jsx)("option",{children:"Silver Maintenance Package"}),Object(a.jsx)("option",{children:"Gold Maintenance Package"}),Object(a.jsx)("option",{children:"Other"})]}),"Other"===n.package?Object(a.jsxs)(m.a.Group,{children:[Object(a.jsx)(m.a.Label,{className:"mt-3",children:"What would you like to tell us?"}),Object(a.jsx)(m.a.Control,{as:"textarea",rows:3,name:"inquiryText",value:n.inquiryText,onChange:s})]}):null,Object(a.jsx)(m.a.Label,{children:"Message: "}),Object(a.jsx)(m.a.Control,{as:"textarea",name:"message",value:n.message,onChange:s}),Object(a.jsx)(x.a,{type:"submit",block:!0,children:"Send"})]})})},g=function(){return Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)(l.a,{bg:"primary",variant:"primary",children:[Object(a.jsx)(d.LinkContainer,{to:"/",children:Object(a.jsx)(l.a.Brand,{className:"text-white",children:"DrumCare"})}),Object(a.jsx)(l.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(a.jsx)(l.a.Collapse,{id:"basic-navbar-nav",children:Object(a.jsxs)(j.a,{className:"ml-auto",children:[Object(a.jsx)(d.LinkContainer,{to:"/about",children:Object(a.jsx)(j.a.Link,{className:"text-white",children:"About"})}),Object(a.jsx)(d.LinkContainer,{to:"/form",children:Object(a.jsx)(j.a.Link,{className:"text-white",children:"Contact"})})]})})]})})},f=n(94),y=n(49),w=function(){return Object(a.jsx)("footer",{children:Object(a.jsx)(o.a,{children:Object(a.jsx)(f.a,{children:Object(a.jsx)(y.a,{children:Object(a.jsx)("h5",{className:"text-center py-3",children:"Copyright \xa9 2020 DrumCare"})})})})})},v=n(100),k=function(e){return Object(a.jsx)(o.a,{children:Object(a.jsx)(f.a,{children:Object(a.jsx)(y.a,{children:Object(a.jsx)(v.a,{className:"rounded bg-primary",children:Object(a.jsxs)(v.a.Body,{children:[Object(a.jsxs)(v.a.Title,{className:"text-center text-white",children:[Object(a.jsx)(v.a.Header,{children:Object(a.jsx)("h4",{className:"text-white",children:Object(a.jsx)("strong",{children:e.name})})}),Object(a.jsx)("br",{}),Object(a.jsx)(v.a.Subtitle,{className:"text-light",children:Object(a.jsx)("p",{children:Object(a.jsx)("strong",{children:e.subHeading})})})]}),Object(a.jsx)("ul",{className:"py-3 text-light",children:e.features.map((function(e,t){return Object(a.jsx)("li",{children:e},t)}))})]})})})})})},N=[{id:"1",title:"Tuning",description:"Your drum kit isn't trash! It probably just needs to be tuned. Tuning drums can be a difficult and time consuming process, so why not leave it to us! We\u2019ll get your kit sounding top notch so you can just focus on playing. "},{id:"2",title:"Head Replacement",description:"Drum heads get beaten and worn over time and need replacing. Depending on the amount of pounding you're giving your drum heads, we recommend changing them at least once a year. If you notice many dents or wear away of coating on your drum heads, its time for new heads! Our drum head replacement service saves you the hassle of finding new heads. Give us your drum sizes, preference of clear or coated and we\u2019ll bring them to you and replace your old ones!"},{id:"3",title:"Kit Installation",description:"Have a brand new drum kit and not sure where to start when it comes to setting it up? No worries, we will come set it up for you whereever you like and get it sounding rock star ready."}],C=[{id:1,name:"Bronze",subHeading:"Our bronze package is great for a quick health check and tuning:",features:["Drum kit health check","Removal of old drum heads","Installation of new drum heads","Tuning"]},{id:2,name:"Silver",subHeading:"Our most popular, the silver package includes a deep cleaning:",features:["Removal of old drum heads","Cleaning of drum shells, rims and lugs","Installation of new drum heads","Tuning"]},{id:3,name:"Gold",subHeading:"Our Gold package is for when you want your kit to sound brand new",features:["Drum kit health check","Installation of new drum heads and resonant heads","Removal of old drum heads and resonant heads","Cleaning of drum shells, rims and lugs","Tuning"]}],D=n(95),S=n(55);function T(e){var t=e.title,n=e.description;return Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)(D.a,{className:"serviceHolder",horizontal:!0,bg:"black",children:[Object(a.jsx)(S.a,{className:"serviceTitle",variant:"light",children:Object(a.jsx)("h5",{children:t})}),Object(a.jsx)(S.a,{className:"serviceDesc",variant:"light",children:n})]})})}var B=n(96),L=function(){return Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)(o.a,{children:[Object(a.jsx)(f.a,{children:Object(a.jsx)(y.a,{className:"text-center",children:Object(a.jsx)(B.a,{className:"bannerLogo",src:"/images/facebook_cover_photo_2.png",fluid:!0,rounded:!0})})}),Object(a.jsx)("hr",{}),Object(a.jsx)(f.a,{children:Object(a.jsxs)(y.a,{className:"text-center",children:[Object(a.jsx)("h4",{children:"Services"}),Object(a.jsx)("hr",{})]})}),Object(a.jsx)(f.a,{children:N.map((function(e,t){return Object(a.jsxs)("div",{children:[Object(a.jsx)(T,{title:e.title,description:e.description},t),Object(a.jsx)("br",{})]},t)}))}),Object(a.jsx)(f.a,{children:Object(a.jsxs)(y.a,{className:"text-center pt-3",children:[Object(a.jsx)("hr",{}),Object(a.jsx)("h4",{children:"Our maintenance packages offer a full drum kit refresh!"}),Object(a.jsx)("h4",{children:"Choose from one of our three packages below:"}),Object(a.jsx)("hr",{})]})}),Object(a.jsx)(f.a,{children:C.map((function(e,t){return Object(a.jsx)(y.a,{children:Object(a.jsx)(k,{name:e.name,subHeading:e.subHeading,features:e.features})},t)}))}),Object(a.jsx)("div",{className:"text-center py-3",children:Object(a.jsx)(x.a,{href:"/form",children:"Book Now"})})]})})},H=function(){return Object(a.jsx)("div",{children:Object(a.jsx)(L,{})})};n(87),n(88),n(89);function I(){return Object(a.jsxs)(o.a,{className:"py-2",children:[Object(a.jsxs)(f.a,{className:"text-center",children:[Object(a.jsx)(y.a,{className:"bg-primary py-3",children:Object(a.jsx)("h3",{className:"text-light",children:"About DrumCare"})}),Object(a.jsx)("hr",{})]}),Object(a.jsx)("br",{}),Object(a.jsx)(f.a,{children:Object(a.jsx)("p",{children:"Here at DrumCare we do just what our name says, care about drums. As professional drummers in the industry we know that one of the most important aspects to a fine playing drum kit is whether or not it is in tune."})}),Object(a.jsx)(f.a,{children:Object(a.jsxs)(y.a,{className:"text-center",children:[Object(a.jsx)("h3",{children:"Mission"}),Object(a.jsx)("hr",{})]})}),Object(a.jsx)(f.a,{children:Object(a.jsx)("p",{children:"Our mission is to make drum maintenance as easy as possible. Servicing schools, venues, parents, beginner drummers and drummers that would rather spend their time playing the drums than tuning them."})}),Object(a.jsx)("h5",{className:"py-2 text-center",children:"Meet the DrumCare team"}),Object(a.jsxs)(f.a,{className:"py-2",children:[Object(a.jsx)(y.a,{className:"py-3",children:Object(a.jsx)(v.a,{children:Object(a.jsxs)(v.a.Body,{className:"rounded bg-primary text-white",children:[Object(a.jsx)(B.a,{src:"/images/BB_Drums.jpg",fluid:!0,rounded:!0}),Object(a.jsx)(v.a.Title,{children:Object(a.jsx)(v.a.Header,{children:Object(a.jsx)("h3",{className:"text-white pt-3",children:"Brandi"})})}),Object(a.jsx)(v.a.Text,{children:"With a Bachelors Degree in Music Composition with a minor in Drums from MacEwan University, plus 7 years in instrument retail, Brandi knows the ins and outs of shell make, skin performance, and instrument longevity. When not wearing the DrumCare cape, Brandi enjoys long walks on the beach with a cup of coffee with cream."})]})})}),Object(a.jsx)(y.a,{className:"py-3",children:Object(a.jsx)(v.a,{children:Object(a.jsxs)(v.a.Body,{className:"rounded bg-primary text-white",children:[Object(a.jsx)(B.a,{src:"/images/JG_Drums.jpg",fluid:!0,rounded:!0}),Object(a.jsx)(v.a.Title,{children:Object(a.jsx)(v.a.Header,{children:Object(a.jsx)("h3",{className:"text-white pt-2",children:"Jon"})})}),Object(a.jsx)(v.a.Text,{children:"Drum Instructor by day, professional drummer by night with a Bachelors Degree in Drum Performance from MacEwan University, Jon knows the importance of a good sounding kit. Apart from flawlessly laying out fills in odd time signatures Jon enjoys long walks on the beach with a cup of black coffee."})]})})})]})]})}var M=function(){return Object(a.jsx)("div",{children:Object(a.jsx)("h1",{children:"Sent!"})})},z=n(19);var P=function(){return Object(a.jsxs)(z.BrowserRouter,{children:[Object(a.jsx)(g,{}),Object(a.jsx)("main",{className:"py-3",children:Object(a.jsxs)(o.a,{children:[Object(a.jsx)(O.d,{path:"/",component:H,exact:!0}),Object(a.jsx)(O.d,{path:"/form",component:p}),Object(a.jsx)(O.d,{path:"/about",component:I}),Object(a.jsx)(O.d,{path:"/sent",component:M})]})}),Object(a.jsx)(w,{})]})};i.a.render(Object(a.jsx)(c.a.StrictMode,{children:Object(a.jsx)(P,{})}),document.getElementById("root"))}},[[90,1,2]]]);
//# sourceMappingURL=main.7b9daf7c.chunk.js.map