import{b as f,d as a,f as h,g as E,l as x,p as b,q as y,r as N,s as w,t as C,v as F,w as T,x as _}from"./chunk-KENTO3B6.js";import{b as g,j as A,l as k}from"./chunk-KS57CXJH.js";import{Ab as o,Cc as v,Hb as c,Sb as i,Ya as s,_b as S,ba as p,ob as u,yb as t,zb as e}from"./chunk-2D7E5OV6.js";var U=(()=>{let l=class l{constructor(n,r,m){this.fb=n,this.http=r,this.toaster=m,this.isSubmitted=!1,this.backendUrl=k.backendUrl}ngOnInit(){this.settingForm=this.fb.group({stripe_privateKey:[""],stripe_publishKey:[""],twilioSid:[""],twilioAuthToken:[""],twilioNumber:[""],node_email:["",[a.email]],node_emailPassword:[""],ride_stops:["",a.required],ride_approvalTime:["",a.required]}),this.getAllSettings()}getAllSettings(){this.http.get(`${this.backendUrl}/settings/getAllSettings`).subscribe({next:n=>{console.log("res setting",n),n.success&&(n.data&&this.settingForm.setValue(n.data),console.log("this.settingform value",this.settingForm.value))},error:n=>{console.log("GetallSetting",n),this.toaster.error(n.message,"Error")},complete:()=>{}})}submitSettings(){this.settingForm.invalid&&this.toaster.error("Invalid or Incomplete Form Fields ","Error"),console.log(this.settingForm.value),this.http.post(`${this.backendUrl}/settings/updateSetting`,this.settingForm.value).subscribe({next:n=>{console.log("SUBBMIT RES",n),n.success&&(this.toaster.success(n.message,"Success"),n.data&&this.settingForm.setValue(n.data))},error:n=>{console.log("updateSetting",n)},complete:()=>{}})}};l.\u0275fac=function(r){return new(r||l)(s(F),s(g),s(A))},l.\u0275cmp=p({type:l,selectors:[["app-settings"]],standalone:!0,features:[S],decls:84,vars:1,consts:[[3,"formGroup","ngSubmit"],[1,"mb-4"],[1,"mb-3","input-group"],[1,"input-group-prepend"],[1,"input-group-text"],["type","text","id","privateKey","formControlName","stripe_privateKey",1,"form-control"],["type","text","id","publishKey","formControlName","stripe_publishKey",1,"form-control"],["type","text","id","twilioSid","formControlName","twilioSid",1,"form-control"],["type","text","id","twilioAuthToken","formControlName","twilioAuthToken",1,"form-control"],["type","text","id","twilioNumber","formControlName","twilioNumber",1,"form-control"],["type","email","id","email","formControlName","node_email",1,"form-control"],["type","password","id","emailPassword","formControlName","node_emailPassword",1,"form-control"],["id","numberOfStops","formControlName","ride_stops",1,"form-select"],["value","1"],["value","2"],["value","3"],["value","4"],["value","5"],["id","requestTimeout","formControlName","ride_approvalTime",1,"with-scroll","form-select"],["value","10"],["value","20"],["value","30"],["value","45"],["value","60"],["value","90"],["value","120"],["type","submit",1,"btn","btn-primary"]],template:function(r,m){r&1&&(t(0,"form",0),c("ngSubmit",function(){return m.submitSettings()}),t(1,"div",1)(2,"h2"),i(3,"Stripe Settings"),e(),t(4,"div",2)(5,"div",3)(6,"span",4),i(7,"Private Key"),e()(),o(8,"input",5),e(),t(9,"div",2)(10,"div",3)(11,"span",4),i(12,"Publish Key"),e()(),o(13,"input",6),e()(),t(14,"div",1)(15,"h2"),i(16,"Twilio Settings"),e(),t(17,"div",2)(18,"div",3)(19,"span",4),i(20,"Twilio SID"),e()(),o(21,"input",7),e(),t(22,"div",2)(23,"div",3)(24,"span",4),i(25,"Twilio Auth Token"),e()(),o(26,"input",8),e(),t(27,"div",2)(28,"div",3)(29,"span",4),i(30,"Twilio Number"),e()(),o(31,"input",9),e()(),t(32,"div",1)(33,"h2"),i(34,"Nodemailer Settings"),e(),t(35,"div",2)(36,"div",3)(37,"span",4),i(38,"Email"),e()(),o(39,"input",10),e(),t(40,"div",2)(41,"div",3)(42,"span",4),i(43,"Email Password"),e()(),o(44,"input",11),e()(),t(45,"div",1)(46,"h2"),i(47,"Ride Settings"),e(),t(48,"div",2)(49,"div",3)(50,"span",4),i(51,"Number of Stops"),e()(),t(52,"select",12)(53,"option",13),i(54,"1 stop"),e(),t(55,"option",14),i(56,"2 stop"),e(),t(57,"option",15),i(58,"3 stop"),e(),t(59,"option",16),i(60,"4 stop"),e(),t(61,"option",17),i(62,"5 stop"),e()()(),t(63,"div",2)(64,"div",3)(65,"span",4),i(66,"Request Timeout"),e()(),t(67,"select",18)(68,"option",19),i(69,"10 seconds"),e(),t(70,"option",20),i(71,"20 seconds"),e(),t(72,"option",21),i(73,"30 seconds"),e(),t(74,"option",22),i(75,"45 seconds"),e(),t(76,"option",23),i(77,"60 seconds"),e(),t(78,"option",24),i(79,"90 seconds"),e(),t(80,"option",25),i(81,"120 seconds"),e()()()(),t(82,"button",26),i(83,"Submit"),e()()),r&2&&u("formGroup",m.settingForm)},dependencies:[T,x,w,C,f,N,h,E,_,b,y,v],styles:["label[_ngcontent-%COMP%]{font-weight:700;font-size:20px}"]});let d=l;return d})();export{U as SettingsComponent};
