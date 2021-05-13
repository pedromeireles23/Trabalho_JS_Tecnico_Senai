function detran() {

    var max = parseInt(document.getElementById("txtvelmax").value)
    var velcarro = parseInt(document.getElementById("txtvelcarro").value)
    var adv = max + 7;
    var leve = max * 1.2
    var media = max * 1.5
    if (velcarro> max && velcarro<=adv ){
        document.getElementById("resultado").innerHTML="<p> Velocidade permitida dentro da via"
        document.getElementById("resultado").style.color ="green"
    }
        else if (velcarro>adv && velcarro < leve) {
        
        document.getElementById("resultado").innerHTML = "<p> Advertência - Acima de 7km/h - Infração LEVE 3 pontos na carteira e multa de R$ 88,38"
        document.getElementById("resultado").style.color ="#ffa600"
    }
    else if (velcarro === leve) {
    
        document.getElementById("resultado").innerHTML="<p> Autuado.Infração MÉDIA 4 pontos na carteira e multa de R$ 130,16"
        document.getElementById("resultado").style.color ="#ffa600"
    }
    else if (velcarro > leve && velcarro <= media) {
     
        document.getElementById("resultado").innerHTML="<p> Autuado.Infração GRAVE 5 pontos na carteira e multa de R$ 195,23" 
        document.getElementById("resultado").style.color ="red"
    }
    else if (velcarro > media) {
        document.getElementById("resultado").innerHTML="<p> Autuado.Infração gravissima.Penalidade de suspesão do direito de dirigir. 7 pontos na carteira e multa de R$293,47"
        document.getElementById("resultado").style.color ="red"
    }
    else{
        document.getElementById("resultado").innerHTML="<p> Velocidade permitida dentro da via"
        document.getElementById("resultado").style.color ="green"
    }

}