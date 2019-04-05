var httpRequest = new XMLHttpRequest();

var links = document.querySelectorAll('.meteo')
for(var i =0; i < links.length; i++){
    var link = links[i]
    link.addEventListener('click', function(e){
        e.preventDefault()
        httpRequest.onreadystatechange = function() {
            if (httpRequest.readyState === 4){
                
                document.getElementById('info_meteo').innerHTML = httpRequest.responseText
            }
        }
        
        
        httpRequest.open('GET',this.getAttribute('href'),true)
        httpRequest.send() 
    })
}


