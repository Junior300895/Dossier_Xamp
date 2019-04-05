(function(){
    //window.alert("Salut les gens")
    //console.log('Salut')

    var adeviner = Math.round(Math.random() * 10)
    var essai = window.prompt("Entrez un nombre")
    essai = parseInt(essai, 10)
    while(essai != adeviner){
        if(essai > adeviner){
            alert('Au dessus')
        }else {
            alert('En dessous')
        }
        essai = window.prompt("retentez un nombre")
    }
    console.log('Bravo vous avez trouvé le nombre')

    var obj = [{
        nom: 'junior'
    },
    {
        nom: 'seydou'
    }]
})()