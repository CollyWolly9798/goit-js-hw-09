import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */const a=document.querySelector(".feedback-form"),s="feedback-form-state";let e={email:"",message:""};const o=()=>{localStorage.setItem(s,JSON.stringify(e))},r=()=>{const t=localStorage.getItem(s);t&&(e=JSON.parse(t),a.elements.email.value=e.email||"",a.elements.message.value=e.message||"")};a.addEventListener("input",t=>{const{name:l,value:m}=t.target;e[l]=m.trim(),o()});a.addEventListener("submit",t=>{if(t.preventDefault(),!e.email||!e.message){alert("Please fill all fields");return}console.log("Submitted Data:",e),localStorage.removeItem(s),e={email:"",message:""},a.reset()});r();
//# sourceMappingURL=2-form.js.map
