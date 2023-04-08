
 
 
 document.getElementById("btn-next").addEventListener("click", () => {
    fadeOutQuote();
    setTimeout(fadeInQuote,1000);

 });

// function 
function fadeOutQuote() {
    document.getElementById("quote-container").style.opacity = 0;
}



function fadeInQuote() {
	fetch("https://api.quotable.io/random")
		.then((response) => response.json())
		.then((data) => {
			document.getElementById("quote-content").textContent = data.content;
			document.getElementById("author-name").textContent = data.author;
			document.getElementById("quote-container").style.opacity = 1;
		
		});
}




function myFunction() {
	
	var copyText = document.getElementById("quote-content");
  
	navigator.clipboard.writeText(copyText.textContent);


	alert("Quote copied successfully");
  }

