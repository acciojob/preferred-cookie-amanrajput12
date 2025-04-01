//your JS code here. If required.

window.addEventListener("DOMContentLoaded", () => {
      let fontsize="";
	   let fontcolor="";
	let cookies = document.cookie.split(";"); // Splitting all cookies
    for (let i = 0; i < cookies.length; i++) {
        let cookiePair = cookies[i].split("="); 
        let key = cookiePair[0].trim(); // Trim spaces to avoid mismatch
        if (key ==="fontsize") {
            // alert(cookiePair[1]);
			fontsize=cookiePair[1];
        }
		else if(key=="fontcolor"){
			fontcolor=cookiePair[1];
		}
    }
       
 if(fontcolor && fontsize){
	 // alert("after getting from cookie")
	 // alert(fontsize);
  document.querySelector("body").style.color=fontcolor;
  document.querySelector("body").style.fontSize=fontcolor;
 }	
});




let fontsize =document.querySelector("#fontsize");
let  fontcolor = document.querySelector("#fontcolor");

document.querySelector("input[type='submit']").addEventListener("click",()=>{

// alert("hello")	

	// alert(fontsize.value);
// alert(fontcolor.value)

	document.cookie =`fontsize=${fontsize.value}px`;
	document.cookie =`fontcolor=${fontcolor.value}`;
})
