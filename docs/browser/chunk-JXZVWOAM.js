import{a as de}from"./chunk-FD33MELW.js";import{b as q,d as b,f as Q,g as W,h as Y,j as Z,k as J,l as X,n as ee,p as te,q as ie,r as re,s as se,t as oe,v as ae,w as ne,x as le}from"./chunk-KENTO3B6.js";import{b as E,j as ce,l as A}from"./chunk-KS57CXJH.js";import{Ab as p,Cc as H,Eb as F,Hb as h,Jb as f,Mb as k,Ob as B,Pb as O,Qb as L,Sb as a,Tb as _,Ua as N,Ub as V,Vb as w,Wb as R,Xa as c,Xb as j,Ya as x,Yb as G,_b as $,ba as D,e as y,ea as v,fa as C,la as U,mb as g,nb as M,ob as m,tb as P,va as I,wb as S,xb as T,yb as s,yc as z,zb as r,zc as K}from"./chunk-2D7E5OV6.js";var ue=(()=>{let l=class l{constructor(t){this.http=t,this.backendUrl=A.backendUrl,this.newserverurl=this.backendUrl+"/users/"}get_allusers(t){return this.http.post(`${this.newserverurl}get_users`,t)}saveUser(t){return this.http.post(`${this.newserverurl}save_user`,t)}updateUser(t){return this.http.post(`${this.newserverurl}update_user`,t)}deleteUser(t){return this.http.post(`${this.newserverurl}delete_user`,{_id:t})}getDefaultCardDetails(t){return this.http.post(`${this.newserverurl}get_defaultcard`,{customerid:t})}addCardToCustomer(t,e){return this.http.post(`${this.newserverurl}add_card`,{customerid:t,tokenid:e})}setDefaultCard(t,e){return this.http.post(`${this.newserverurl}set_defaultcard`,{customerid:t,cardId:e})}deleteSourceCard(t,e){return this.http.post(`${this.newserverurl}delete_card`,{customerid:t,cardid:e})}};l.\u0275fac=function(e){return new(e||l)(I(E))},l.\u0275prov=U({token:l,factory:l.\u0275fac,providedIn:"root"});let n=l;return n})();var _e=["closeButton"],me=(n,l)=>l._id;function be(n,l){n&1&&(s(0,"div",48),a(1,"User Name is required"),r())}function ve(n,l){n&1&&(s(0,"div",48),a(1,"Please enter a valid email address"),r())}function Ce(n,l){if(n&1&&(s(0,"option",49),a(1),r()),n&2){let d=l.$implicit;m("value",d._id),c(),w("",d.countryid.ccallcode," (",d.countryid.ccode,")")}}function xe(n,l){n&1&&(s(0,"div",48),a(1,"Please select country code"),r())}function Ee(n,l){n&1&&(s(0,"div",48),a(1,"Please enter a 10 digit phone number"),r())}function Ae(n,l){n&1&&(s(0,"div",48),a(1,"File size exceeds 5MB"),r())}function ye(n,l){n&1&&(s(0,"div",48),a(1,"Invalid file type. Only PNG and JPEG allowed."),r())}function Pe(n,l){n&1&&(s(0,"div",48),a(1,"Please select image file "),r())}function Se(n,l){n&1&&(s(0,"button",50),a(1,"Submit"),r())}function Te(n,l){n&1&&(s(0,"button",51),a(1,"Update"),r())}function Fe(n,l){if(n&1){let d=F();s(0,"tr")(1,"td"),a(2),r(),s(3,"td"),a(4),r(),s(5,"td"),p(6,"img",52),r(),s(7,"td"),a(8),r(),s(9,"td"),a(10),r(),s(11,"td"),a(12),r(),s(13,"td")(14,"button",53),h("click",function(){let i=v(d).$implicit,o=f();return C(o.customerid(i))}),a(15,"Cards"),r()(),s(16,"td")(17,"button",54),h("click",function(){let i=v(d).$implicit,o=f();return C(o.editUser(i))}),a(18,"Edit"),r()(),s(19,"td")(20,"button",55),h("click",function(){let i=v(d).$implicit,o=f();return C(o.deleteUser(i))}),a(21,"Delete"),r()()()}if(n&2){let d=l.$implicit,t=f();M("id",d._id),c(2),_(d.user_no),c(2),_(d.uname),c(2),m("src",t.backendUrl+"/uploads/allusers/"+d.uimage,N),c(2),_(d.uemail),c(2),_(d.ccode.ccallcode),c(2),_(d.uphone)}}function ke(n,l){if(n&1){let d=F();s(0,"tr",34)(1,"td",34)(2,"input",59),h("change",function(){let i=v(d).$implicit,o=f(2);return C(o.onSelectCard(i.id))}),r()(),s(3,"td",34)(4,"label",60),a(5),r()(),s(6,"td",34)(7,"button",55),h("click",function(){let i=v(d).$implicit,o=f(2);return C(o.ondelete(i.id))}),p(8,"i",61),r()()()}if(n&2){let d=l.$implicit;c(2),k("id","card",d.id,""),m("value",d.id)("formControlName","selectedCard"),c(2),k("for","card",d.id,""),c(),w("",d.card.brand," xxxx xxxx xxxx ",d.card.last4,"")}}function we(n,l){if(n&1&&(s(0,"table",56)(1,"thead")(2,"tr")(3,"th"),a(4,"default"),r(),s(5,"th",57),a(6,"Name"),r(),s(7,"th"),a(8,"Action"),r()()(),s(9,"tbody"),g(10,ke,9,6,"tr",58),r()()),n&2){let d=f();c(10),m("ngForOf",d.cardDetails)}}function De(n,l){n&1&&(s(0,"h2"),a(1,"Loading....."),r())}var Re=(()=>{let l=class l{get backendUrl(){return this.mybackendUrl}constructor(t,e,i,o,u){this.formBuilder=t,this.http=e,this.toaster=i,this.getservice=o,this.userservice=u,this.defaultccode="select code",this.currentPage=1,this.sortcol="uname",this.searchTerm="",this.sortval=0,this.previousval="",this.dataPerPage=3,this.updateBtnStatus=!1,this.flag=!1,this.isimageupdated=!1,this.state="Normal",this.maxFileSize=5*1024*1024,this.allowedFileTypes=["image/jpeg","image/jpg","image/png"],this.fileSizeError=!1,this.fileTypeError=!1,this.loadpage=!1,this.handler=null,this.mybackendUrl=A.backendUrl,this.isAddCountryModalOpen=!1,this.cardDetails=[],this.stripe_publickey="pk_test_51PKFnuA9DbTl3x7cOh2yVgk4GLO2FUV8ozgk38gVI0vdDjx1gUWw4LiGMgnxAQsz90osPzQP1xkANmZzmnNRemG800RuF9gNST"}ngOnInit(){this.loadStripe(),this.userForm=this.formBuilder.group({uname:["",b.required],uemail:["",[b.required,b.pattern(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)]],ccode:["",b.required],uphone:["",[b.required,b.pattern(/^[1-9]{1}[0-9]{9}$/)]],uimage:[""]}),this.cardForm=this.formBuilder.group({selectedCard:new Z("")}),console.log("1 this.loadpage",this.loadpage),this.fetch_table_data({searchTerm:"",currentPage:this.currentPage,sortcol:this.sortcol,sortval:this.sortval,dataPerPage:this.dataPerPage}),console.log("2 this.loadpage",this.loadpage),console.log("3 this.loadpage",this.loadpage),this.get_country_callcodes()}get_country_callcodes(){this.getservice.getZonedCountries().subscribe({next:t=>{console.warn(t),t.success===!0&&(this.allcodes=t.data,this.toaster.success("country code received","success"))},error:t=>{console.log("get_country_callcodes() error",t)},complete:()=>{console.log("COMPLETED get_country_callcodes()")}})}onFileChange(t){console.log("FILE CHANGE EVENT");let e=t.target.files[0];if(!this.allowedFileTypes.includes(e.type)){this.fileTypeError=!0;return}if(e){if(e.size>this.maxFileSize){this.fileSizeError=!0;return}this.fileSizeError=!1,this.fileTypeError=!1,this.isimageupdated=!0,this.selected_image=e}else console.log("IMAGE SELECCT NAHI KIYAHAI BHAI-----------------------")}onFileInputClick(){this.isimageupdated=!1,console.log("--------------ONFILE CLICK------------"),this.selected_image=null}markFormGroupTouched(t){Object.values(t.controls).forEach(e=>{e.markAsTouched(),e instanceof Y&&this.markFormGroupTouched(e)})}submitUserProfile(){this.markFormGroupTouched(this.userForm);let t=this.userForm.get("uname").value;if(this.userForm.get("uname").setValue(t.trim()),this.userForm.invalid){this.toaster.error("Please complete the form","Invalid Form");return}if(this.formData=new FormData,this.flag===!0){console.log(" inside flag true"),this.formData.append("_id",this.selected_user._id),this.selected_image&&this.formData.append("uimage",this.selected_image),this.formData.append("uname",this.userForm.get("uname").value),this.formData.append("ccode",this.userForm.get("ccode").value),this.formData.append("uphone",this.userForm.get("uphone").value),this.formData.append("uemail",this.userForm.get("uemail").value),console.log(this.formData),console.log(this.selected_user._id),console.log(this.userForm.value),this.update_data(this.formData);return}if(console.warn("this.userForm.valid",this.userForm.valid),this.userForm.valid&&this.isimageupdated){if(console.warn("---------->>><<<<<<<--------------------"),console.log(this.userForm.value),!this.selected_image){this.toaster.warning("Please select the User Profile");return}this.formData.append("uimage",this.selected_image),this.formData.append("uname",this.userForm.get("uname").value),this.formData.append("ccode",this.userForm.get("ccode").value),this.formData.append("uphone",this.userForm.get("uphone").value),this.formData.append("uemail",this.userForm.get("uemail").value),this.formData.append("dataPerPage",this.dataPerPage.toString()),this.formData.append("currentPage",this.currentPage.toString()),console.log(this.formData),this.submit_data(this.formData);return}}update_data(t){this.userservice.updateUser(t).subscribe({next:e=>{console.warn(e),e.success===!0&&(this.toaster.success(e.message,"Success"),this.userForm.reset({uimage:""}),console.log("Updated res inside store_user"),this.allusers[this.index]=e.data,this.updateBtnStatus=!1,this.flag=!1,this.isimageupdated=!1)},error:e=>{if(console.log("DUPLICATE ERROR ",e),e.error.message==="Phone number already exists"){this.toaster.error(e.error.message,"Duplicate input");return}if(e.status===401){e.error.error.duplicateKeyDetails.uphone&&this.toaster.error("Duplicate Phone number","Invalid number"),e.error.error.duplicateKeyDetails.uemail&&this.toaster.error("Duplicate Email id ","Invalid email");return}if(e.status===404){this.toaster.error(e.error.message,"Failed to update"),this.userForm.get("ccode").enable(),this.userForm.reset(),this.defaultccode="select code",this.userForm.get("ccode").setValue(""),this.selected_image=null;return}console.log("USER SUBMIT ",e),this.toaster.error(e.message,"Error")},complete:()=>{console.log("SUBMITTED COMPLETED"),this.userForm.get("ccode").enable(),this.userForm.reset(),this.defaultccode="select code",this.userForm.get("ccode").setValue(""),this.selected_image=null}})}submit_data(t){this.userservice.saveUser(t).subscribe({next:e=>{if(console.warn(e),e.success===!0){if(this.toaster.success(e.message,"Success"),this.userForm.reset({uimage:""}),this.flag===!0)console.log("Updated res inside store_user"),this.allusers[this.index]=e.data,this.updateBtnStatus=!1,this.flag=!1;else{let{currentPage:i,totalCount:o}=e;i===this.currentPage?(console.log("PUSH save inside store_user"),this.allusers.push(e.data),this.searchTerm="",this.sortval=0):this.allusers=e.data,this.check_btn_status(i,o)}this.isimageupdated=!1}},error:e=>{if(console.log("DUPLICATE ERROR ",e),e.error.message==="Phone number already exists"){this.toaster.error(e.error.message,"Duplicate input");return}if(e.status===401){e.error.error.duplicateKeyDetails.uphone&&this.toaster.error("Duplicate Phone number","Invalid number"),e.error.error.duplicateKeyDetails.uemail&&this.toaster.error("Duplicate Email id ","Invalid email");return}if(e.status===404){this.toaster.error(e.error.message,"Failed to update"),this.userForm.get("ccode").enable(),this.userForm.reset(),this.defaultccode="select code",this.userForm.get("ccode").setValue(""),this.selected_image=null;return}console.log("USER SUBMIT ",e),this.toaster.error(e.message,"Error")},complete:()=>{console.log("SUBMITTED COMPLETED"),this.userForm.get("ccode").enable(),this.userForm.reset(),this.defaultccode="select code",this.userForm.get("ccode").setValue(""),this.selected_image=null}})}clearmyForm(){this.userForm.get("ccode").enable(),this.userForm.reset(),this.defaultccode="select code",this.userForm.get("ccode").setValue(""),this.selected_image=null}fetch_table_data(t){return y(this,null,function*(){this.userservice.get_allusers(t).subscribe({next:e=>{if(console.warn(e),e.success===!0){if(this.allusers=e.data,console.log("-------------------------------------------------------------------------------------"),console.log("(res.data.length === 0 && this.loadpage)",this.loadpage),console.log("-------------------------------------------------------------------------------------"),e.data.length===0&&this.loadpage){console.log("--------------->>>>>>>>>>>res.data",e.data),this.toaster.warning("No matching data found","No matching");return}console.warn("i am fetch table data-- >>>");let{currentPage:i,totalCount:o}=e;console.log(i),this.check_btn_status(i,o),this.loadpage=!0}},error:e=>{console.log("FETCH TABLE ERR",e),this.toaster.error(e.error.message,e.statusText)},complete:()=>{console.log("COMPLETED FETCH DATA TABLE")}})})}deleteUser(t){if(console.log("kuchbhi--------------------"),confirm(`Are you sure you want to delete User have email ${t.uemail}`)!==!0)return;console.log("kuchbhi--------------------"),this.index=this.allusers.findIndex(u=>u._id===t._id),console.log({_id:t._id,currentNumber:1,searchTerm:this.searchTerm,sortcol:this.sortcol,sortval:this.sortval,dataPerPage:this.dataPerPage});let i=this.currentPage*this.dataPerPage-1;console.log(i);let o;console.log("this.isNextButtonEnable",this.isNextButtonEnable),this.isNextButtonEnable?o={_id:t._id,currentNumber:i,searchTerm:this.searchTerm,sortcol:this.sortcol,sortval:this.sortval,dataPerPage:this.dataPerPage}:o={_id:t._id},console.log("deletedata",o),this.userservice.deleteUser(o).subscribe({next:u=>{if(console.log(u),u.success===!0){this.toaster.success(u.message,"Success"),this.allusers.splice(this.index,1),this.allusers.length===0&&this.PrevBtn(),u.data.length!==0&&(this.allusers.push(u.data),this.check_btn_status(this.currentPage,u.totalCount));return}else{this.toaster.error("Something went wrong","Error");return}},error:u=>{console.log("DELETE ERR",u),this.toaster.error(u.message,"Error")},complete:()=>{console.log("COMPLETED DELETE ROUTE")}})}editUser(t){this.userForm.get("ccode").disable(),this.flag=!0,this.updateBtnStatus=!0,this.isimageupdated=!0,this.selected_user=t,console.warn(this.selected_user),this.index=this.allusers.findIndex(e=>e._id===t._id),console.warn(this.index,"_id us ",this.selected_user._id),console.log(this.selected_user.ccode.ccallcode,"--------------------------------"),console.log("Edit pricing is clicked here"),this.userForm.patchValue({ccode:this.selected_user.ccode._id,uname:this.selected_user.uname,uphone:this.selected_user.uphone,uemail:this.selected_user.uemail})}searchBtn_clicked(){let t=this.searchTerm;console.log("SEARCHBTN CLICKED");let e=/^[a-zA-Z0-9 ]*$/;if(console.log(e.test(t),"----------------------------------------------"),!e.test(t)){this.toaster.error("Please enter alphabet or letters only","Invalid input");return}this.currentPage=1,console.warn(t),t==""&&this.fetch_table_data({searchTerm:"",currentPage:this.currentPage,sortcol:this.sortcol,sortval:this.sortval,dataPerPage:this.dataPerPage}),t!==this.previousval&&(console.warn(" LLAAALALALALALALALALAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"),this.fetch_table_data({searchTerm:this.searchTerm,currentPage:this.currentPage,sortcol:this.sortcol,sortval:this.sortval,dataPerPage:this.dataPerPage}))}NextBtn(){this.currentPage<this.mytotalCount/this.dataPerPage?(this.currentPage++,this.fetch_table_data({searchTerm:this.searchTerm,currentPage:this.currentPage,sortcol:this.sortcol,sortval:this.sortval,dataPerPage:this.dataPerPage}),console.log("NEXT BTN CLICKED")):this.toaster.warning("No data available to show","You are already on Last Page")}PrevBtn(){this.currentPage>1?(this.currentPage--,this.fetch_table_data({searchTerm:this.searchTerm,currentPage:this.currentPage,sortcol:this.sortcol,sortval:this.sortval,dataPerPage:this.dataPerPage})):this.toaster.warning("No previous record available","You are already on First Page"),console.log("PRIVIOUS BTN CLICKED")}check_btn_status(t,e){this.currentPage=t,this.mytotalCount=e,this.isPrevButtonEnable=t!==1,this.isNextButtonEnable=t*this.dataPerPage<e}toggleState(t){return y(this,null,function*(){t===this.sortcol?(this.sortval===0?(this.state="Ascending",this.sortval=1):this.sortval===1?(this.state="Descending",this.sortval=-1):this.sortval===-1&&(this.sortval=0,this.state="Normal"),console.log("----IF----"+this.sortcol+" "+this.sortval)):(this.sortval=1,this.sortcol=t,this.state="Ascending",console.log("*--ELSE----*"+this.sortcol+" "+this.sortval)),console.warn("sortcol",this.sortcol,this.sortval),this.currentPage=1,this.fetch_table_data({searchTerm:this.searchTerm,currentPage:this.currentPage,sortcol:this.sortcol,sortval:this.sortval,dataPerPage:this.dataPerPage})})}closeModal(){this.closeButton&&this.closeButton.nativeElement&&this.closeButton.nativeElement.click()}customerid(t){this.isAddCountryModalOpen=!1,this.defaultemail=t.uemail,this.cardDetails=[],console.log(t),this.selected_customerid=t.customerid;let e={customerid:this.selected_customerid};this.userservice.getDefaultCardDetails(t.customerid).subscribe({next:i=>{if(console.log("GET CARD DETAILS",i),i.success===!0){if(this.cardDetails=i.cardDetails,this.default_card=i.default_card,this.cardForm.get("selectedCard").setValue(this.default_card),console.log("NO CARD ADDEWD ",this.default_card),this.cardDetails.length!==0&&this.default_card!==null){this.isAddCountryModalOpen=!0,console.log("KYA KUCH BHI--------------------------------"),console.log(this.isAddCountryModalOpen,"if(this.cardDetails.length === 0 ){---------------------------");return}this.default_card==="not found"&&(this.isAddCountryModalOpen=!0)}},error:i=>{console.log("----------ERROR-------get_default_carddetails--------------------"),console.log(i)},complete:()=>{}}),console.log(this.selected_customerid,"-----------------------")}submit(){console.log("SUBMIT CLICKEDD"),console.log(this.selected_customerid,"-----------------------");var t=window.StripeCheckout.configure({email:this.defaultemail,key:this.stripe_publickey,locale:"auto",token:e=>{e&&(this.selected_tokenid=e.id,console.log("this.selected_tokenid",this.selected_tokenid),console.log("called send card details "),this.send_carddetails(),console.log("called send card details "))}});t.open({name:"Card Details",panelLabel:"Add Card"})}send_carddetails(){console.log("send_carddetails(){"),console.log(this.selected_customerid);let t={customerid:this.selected_customerid,tokenid:this.selected_tokenid};console.log(t),this.userservice.addCardToCustomer(this.selected_customerid,this.selected_tokenid).subscribe({next:e=>{if(console.log("Response from addcardToCustomer",e),e.success===!0){let i=e.data,o={id:i.id,card:{brand:i.brand,last4:i.last4}};this.cardDetails.push(o),console.log("this.cardDetails.length",this.cardDetails.length),this.cardDetails.length===1&&this.cardForm.get("selectedCard").setValue(i.id)}},error:e=>{console.log("Update catd details",e),this.toaster.error("Something went wrong","Error")},complete:()=>{console.log("Token Created!!")}})}loadStripe(){if(!window.document.getElementById("stripe-script")){var t=window.document.createElement("script");t.id="stripe-script",t.type="text/javascript",t.src="https://checkout.stripe.com/checkout.js",t.onload=()=>{this.handler=window.StripeCheckout.configure({key:this.stripe_publickey,locale:"auto",token:function(e){console.log(e),alert("Payment Success!!")}})},window.document.body.appendChild(t)}}onSelectCard(t){console.warn("selected card id is ",t),console.warn("selected customer id is ",this.selected_customerid);let e={customerid:this.selected_customerid,cardId:t};this.userservice.setDefaultCard(this.selected_customerid,t).subscribe({next:i=>{console.log("set default card ",i),i.success===!0&&(this.toaster.success(i.message,"Success"),this.cardForm.get("selectedCard").setValue(t))},error:i=>{console.log("set default card error",i),this.toaster.error("Something went wrong server error","Error")},complete:()=>{console.log("Completed set default card")}})}ondelete(t){alert("Are you sure you want to Delete this Card !"),console.log(this.selected_customerid);let e=this.cardDetails.findIndex(o=>o.id===t),i={customerid:this.selected_customerid,cardid:t};this.userservice.deleteSourceCard(this.selected_customerid,t).subscribe({next:o=>{if(console.log("Delete response",o),o.success===!0){o.default_cardId!==null&&this.cardForm.get("selectedCard").setValue(o.default_cardId);let u=this.cardDetails.findIndex(he=>he.id===t);this.cardDetails.splice(u,1)}},error:o=>{console.log("delete card from user ",o),this.toaster.error("Something went wrong","Error")},complete:()=>{}})}};l.\u0275fac=function(e){return new(e||l)(x(ae),x(E),x(ce),x(de),x(ue))},l.\u0275cmp=D({type:l,selectors:[["app-users"]],viewQuery:function(e,i){if(e&1&&B(_e,5),e&2){let o;O(o=L())&&(i.closeButton=o.first)}},standalone:!0,features:[$],decls:98,vars:18,consts:[[1,"container-fluid"],[1,"mt-1",3,"formGroup","ngSubmit"],[1,"form-group"],["for","username"],["type","text","id","username","placeholder","ABC","formControlName","uname",1,"form-control"],["class","text-danger",4,"ngIf"],["for","email"],["type","email","id","email","placeholder","abc123@xyz.com","formControlName","uemail",1,"form-control"],["for","phone"],[1,"input-group"],["formControlName","ccode",1,"custom-select"],["value","",3,"disabled"],["type","text","id","phone","formControlName","uphone",1,"form-control","mx-3"],["for","image",1,""],["type","file","id","uimage","accept","image/jpeg,image/png","formControlName","uimage",1,"form-control",3,"click","change"],["uimage",""],["type","submit","class","form-control btn btn-primary my-2"],["type","button",1,"form-control","btn","btn-dark","mt-2",3,"click"],[1,"row","mx-3","my-2"],["id","searchbar","type","text","placeholder","Search..",1,"border","col-md-7","mr-3",2,"background-color","#e0dfdf",3,"ngModel","ngModelChange"],["type","button",1,"btn","btn-info","col-md-2",3,"click"],[1,"btn","col-md-2"],[1,"table-responsive"],["id","userDataTable",1,"table","table-bordered","table-striped","table-hover","align-middle",2,"width","100%","text-align","center","font-size","18px"],[1,"thead-dark"],[1,"text-center"],["scope","col",3,"click"],[1,"bi","bi-funnel"],[2,"width","120px"],["scope","col"],[1,"align-middle","border"],[1,"d-flex","justify-content-center","gap-3"],["type","button",1,"btn","btn-dark",3,"disabled","click"],[1,"fs-3"],[1,""],["id","addCardModal","tabindex","-1","aria-labelledby","addCardModalLabel","aria-hidden","true",1,"modal","fade"],["addCardModal",""],[1,"modal-dialog"],[1,"modal-content"],[1,"modal-header"],["type","button","data-bs-dismiss","modal","aria-label","Close",1,"btn-close"],[1,"modal-body"],[1,"btn","btn-primary","mx-auto","form-control",3,"click"],[3,"formGroup"],["class","table","style","text-align: start;"],[1,"modal-footer"],["type","button","data-bs-dismiss","modal",1,"btn","btn-secondary"],["closeButton",""],[1,"text-danger"],[3,"value"],["type","submit",1,"form-control","btn","btn-primary","my-2"],["type","submit",1,"form-control","btn","btn-success","my-2"],["alt","Vehicle Image","width","80","height","80",1,"",2,"border-radius","50%",3,"src"],["type","button","data-bs-toggle","modal","data-bs-target","#addCardModal",1,"btn","btn-dark",3,"click"],["type","button",1,"btn","btn-success",3,"click"],["type","button",1,"btn","btn-danger",3,"click"],[1,"table",2,"text-align","start"],[2,"text-align","center"],["class"," ",4,"ngFor","ngForOf"],["type","radio",1,"mr-2",3,"id","value","formControlName","change"],[1,"fs-5","fw-bold",3,"for"],[1,"bi","bi-trash"]],template:function(e,i){e&1&&(s(0,"div",0)(1,"form",1),h("ngSubmit",function(){return i.submitUserProfile()}),s(2,"div",2)(3,"label",3),a(4,"Username:"),r(),p(5,"input",4),g(6,be,2,0,"div",5),r(),s(7,"div",2)(8,"label",6),a(9,"Email:"),r(),p(10,"input",7),g(11,ve,2,0,"div",5),r(),s(12,"div",2)(13,"label",8),a(14,"Phone:"),r(),s(15,"div",9)(16,"select",10)(17,"option",11),a(18),r(),S(19,Ce,2,3,"option",49,me),r(),p(21,"input",12),r(),g(22,xe,2,0,"div",5)(23,Ee,2,0,"div",5),r(),s(24,"div",2)(25,"label",13),a(26,"User Profile:"),r(),s(27,"input",14,15),h("click",function(){return i.onFileInputClick()})("change",function(u){return i.onFileChange(u)}),r(),g(29,Ae,2,0,"div",5)(30,ye,2,0,"div",5),r(),g(31,Pe,2,0,"div",5)(32,Se,2,0,"button",16)(33,Te,2,0),s(34,"button",17),h("click",function(){return i.clearmyForm()}),a(35,"Clear"),r()()(),s(36,"div",18)(37,"input",19),G("ngModelChange",function(u){return j(i.searchTerm,u)||(i.searchTerm=u),u}),r(),s(38,"button",20),h("click",function(){return i.searchBtn_clicked()}),a(39,"Search"),r(),s(40,"div",21),a(41),r()(),s(42,"div",0)(43,"div",22)(44,"table",23)(45,"thead",24)(46,"tr",25)(47,"th"),a(48,"Sr no."),r(),s(49,"th",26),h("click",function(){return i.toggleState("uname")}),a(50,"Name \xA0"),p(51,"i",27),r(),s(52,"th",28),a(53,"Profile image"),r(),s(54,"th",26),h("click",function(){return i.toggleState("uemail")}),a(55,"Email \xA0"),p(56,"i",27),r(),s(57,"th",29),a(58,"Country code"),r(),s(59,"th",26),h("click",function(){return i.toggleState("uphone")}),a(60,"Phone Number \xA0"),p(61,"i",27),r(),s(62,"th",29),a(63,"Payment"),r(),s(64,"th",29),a(65,"Edit Action"),r(),s(66,"th",29),a(67,"Delete Action"),r()()(),s(68,"tbody",30),S(69,Fe,22,7,"tr",null,me),r()()()(),s(71,"div",31)(72,"button",32),h("click",function(){return i.PrevBtn()}),a(73,"Prev"),r(),s(74,"span",33),a(75),r(),s(76,"button",32),h("click",function(){return i.NextBtn()}),a(77,"Next"),r()(),p(78,"br")(79,"br")(80,"br"),s(81,"div",34)(82,"div",35,36)(84,"div",37)(85,"div",38)(86,"div",39),p(87,"button",40),r(),s(88,"div",41)(89,"button",42),h("click",function(){return i.submit()}),a(90,"Add new Card"),r(),s(91,"form",43),g(92,we,11,1,"table",44)(93,De,2,0),r()(),s(94,"div",45)(95,"button",46,47),a(97,"Close"),r()()()()()()),e&2&&(c(),m("formGroup",i.userForm),c(5),m("ngIf",i.userForm.get("uname").invalid&&i.userForm.get("uname").touched),c(5),m("ngIf",i.userForm.get("uemail").invalid&&i.userForm.get("uemail").touched),c(6),m("disabled",!0),c(),_(i.defaultccode),c(),T(i.allcodes),c(3),m("ngIf",i.userForm.get("ccode").invalid&&i.userForm.get("ccode").touched),c(),m("ngIf",i.userForm.get("uphone").invalid&&i.userForm.get("uphone").touched),c(6),m("ngIf",i.fileSizeError),c(),m("ngIf",i.fileTypeError),c(),m("ngIf",!i.isimageupdated&&i.userForm.get("uimage").touched),c(),P(32,i.updateBtnStatus?33:32),c(5),R("ngModel",i.searchTerm),c(4),V("Sort: ",i.state,""),c(28),T(i.allusers),c(3),m("disabled",!i.isPrevButtonEnable),c(3),_(i.currentPage),c(),m("disabled",!i.isNextButtonEnable),c(15),m("formGroup",i.cardForm),c(),P(92,i.isAddCountryModalOpen?92:93))},dependencies:[ne,X,se,oe,q,re,ee,Q,W,J,le,te,ie,H,z,K],styles:["h1[_ngcontent-%COMP%]{text-align:center;color:#333;margin-bottom:20px}.card-container[_ngcontent-%COMP%]{display:flex;flex-wrap:nowrap;justify-content:space-between;margin:0 auto}.card-option[_ngcontent-%COMP%]{background-color:#b1f07e;border:5px solid #ced4da;border-radius:50%;padding:20px 15px 10px;width:100%;box-shadow:0 0 10px #0000001a}.card-option[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{cursor:pointer}.card-name[_ngcontent-%COMP%]{font-weight:700;font-size:1.2em;color:#1e80e9}@media (max-width: 768px){.card-container[_ngcontent-%COMP%]{flex-direction:column}.card-option[_ngcontent-%COMP%]{width:100%}}.modal-dialog[_ngcontent-%COMP%]{justify-content:center;align-items:center;display:flex}th[_ngcontent-%COMP%], td[_ngcontent-%COMP%]{vertical-align:middle}"]});let n=l;return n})();export{Re as UsersComponent};
