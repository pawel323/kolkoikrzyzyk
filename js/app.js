function powitanie(){
    var tytul = "<h1>Kółko i krzyżyk</h1>";
    var opis = "<p>Gra strategiczna dla dwóch graczy. Gracze zajmują pola naprzemian, aby zająć trzy pola w jednej linii. Pole może być zajęte tylko przez jednego gracza przez cały czas trwania gry.</p>";
    var start = "<button id=\"Start\">Rozpocznij</button>";
    document.getElementById('app').innerHTML = tytul + opis + start;
    document.getElementById("Start").addEventListener("click",gamemode);
};
window.onload = powitanie;

function gamemode(){
    var opcje = "<p>Wybierz tryb gry</p>";
    var solo = "<div id=\"b1\"><button id=\"Solo\">Graj z systemem</button></div>";
    var multi = "<div id=\"b2\"><button id=\"Multi\">Graj z drugą osobą</button></div>";
    document.getElementById('app').innerHTML = opcje + solo + multi;
    document.getElementById("Solo").addEventListener("click",modesolo);
    document.getElementById("Multi").addEventListener("click",modemulti);
};


function modesolo(){
var komunikat = "<p>Kto zaczyna grę?</p>";
var playerfirst = "<div id=\"b1\"><button id=\"Zaczynam\">Zaczynam</button></div>";
var systemfirst = "<div id=\"b2\"><button id=\"NieZaczynam\">Oddaję pierwszą kolejkę</button></div>";
document.getElementById('app').innerHTML = komunikat + playerfirst + systemfirst;
document.getElementById("Zaczynam").addEventListener("click",startGameByPl);
document.getElementById("NieZaczynam").addEventListener("click",startGameBySys);

function startGameByPl(){

var gametable, info;
var result;
info = "<p>Powodzenia</p>";
gametable = "<p><table id=\"game\">"+
"\<tbody\>"+
    "\<tr\>"+
        "\<td\ id=\"1\">\</td\>"+
        "\<td\ id=\"2\">\</td\>"+
        "\<td\ id=\"3\">\</td\>"+
    "\</tr\>"+
    "\<tr\>"+
        "\<td\ id=\"4\">\</td\>"+
        "\<td\ id=\"5\">\</td\>"+
        "\<td\ id=\"6\">\</td\>"+
    "\</tr\>"+
    "\<tr\>"+
        "\<td\ id=\"7\">\</td\>"+
        "\<td\ id=\"8\">\</td\>"+
        "\<td\ id=\"9\">\</td\>"+
    "\</tr\>"+
"\</tbody\>"+
"\</table\></p>";


document.getElementById('app').innerHTML = info + gametable;
gra();

function gra(){
var table = document.getElementById('game');
if (table != null) 
{
    for (var i = 0; i < table.rows.length; i++) 
    {
        for (var j = 0; j < table.rows[i].cells.length; j++)
        table.rows[i].cells[j].onclick = function () 
        {

            tableText(this);
        };
    }
}
}

function tableText(tableCell){
    tableCell.innerHTML= "X";
    
    var polagry = [];
    if(document.getElementById('1').innerText != 'X' && document.getElementById('1').innerText != 'O')
    polagry.push(document.getElementById('1'));
    else 
    document.getElementById('1').style.pointerEvents = 'none';
    if(document.getElementById('2').innerText != 'X' && document.getElementById('2').innerText != 'O')
    polagry.push(document.getElementById('2'));
    else 
    document.getElementById('2').style.pointerEvents = 'none';
    if(document.getElementById('3').innerText != 'X' && document.getElementById('3').innerText != 'O')
    polagry.push(document.getElementById('3'));
    else 
    document.getElementById('3').style.pointerEvents = 'none';
    if(document.getElementById('4').innerText != 'X' && document.getElementById('4').innerText != 'O')
    polagry.push(document.getElementById('4'));
    else 
    document.getElementById('4').style.pointerEvents = 'none';
    if(document.getElementById('5').innerText != 'X' && document.getElementById('5').innerText != 'O')
    polagry.push(document.getElementById('5'));
    else 
    document.getElementById('5').style.pointerEvents = 'none';
    if(document.getElementById('6').innerText != 'X' && document.getElementById('6').innerText != 'O')
    polagry.push(document.getElementById('6'));
    else 
    document.getElementById('6').style.pointerEvents = 'none';
    if(document.getElementById('7').innerText != 'X' && document.getElementById('7').innerText != 'O')
    polagry.push(document.getElementById('7'));
    else 
    document.getElementById('7').style.pointerEvents = 'none';
    if(document.getElementById('8').innerText != 'X' && document.getElementById('8').innerText != 'O')
    polagry.push(document.getElementById('8'));
    else 
    document.getElementById('8').style.pointerEvents = 'none';
    if(document.getElementById('9').innerText != 'X' && document.getElementById('9').innerText != 'O')
    polagry.push(document.getElementById('9'));
    else 
    document.getElementById('9').style.pointerEvents = 'none';
    
    check();
    if (result === false)
    setTimeout(syschar(polagry),1000);
   
    
}

function syschar(polagry){
    if(polagry.length === 0)
    info = "Nie ma zwycięzcy";

//if(document.getElementById('1').innerText === "X")

var los = polagry[Math.floor(Math.random()*polagry.length)];
los.innerText = "O";
los.style.pointerEvents = 'none';
check();
}

function check(){

    if      (document.getElementById('1').innerText === 'X' && document.getElementById('2').innerText === 'X' && document.getElementById('3').innerText === 'X'){
        setTimeout(goodfinalinfo,200);
        result = true;
      
    }
    else if (document.getElementById('1').innerText === 'O' && document.getElementById('2').innerText === 'O' && document.getElementById('3').innerText === 'O'){
      setTimeout(badfinalinfo,200);
      result = true;
    }
    else if (document.getElementById('4').innerText === 'X' && document.getElementById('5').innerText === 'X' && document.getElementById('6').innerText === 'X'){
        setTimeout(goodfinalinfo,200);
        result = true;
    }
    else if (document.getElementById('4').innerText === 'O' && document.getElementById('5').innerText === 'O' && document.getElementById('6').innerText === 'O'){
        setTimeout(badfinalinfo,200);
        result = true;
    }
    else if (document.getElementById('7').innerText === 'X' && document.getElementById('8').innerText === 'X' && document.getElementById('9').innerText === 'X'){
        setTimeout(goodfinalinfo,200);
        result = true;
    }
    else if (document.getElementById('7').innerText === 'O' && document.getElementById('8').innerText === 'O' && document.getElementById('9').innerText === 'O'){
        setTimeout(badfinalinfo,200);
        result = true;
    }
    else if (document.getElementById('1').innerText === 'X' && document.getElementById('4').innerText === 'X' && document.getElementById('7').innerText === 'X'){
        setTimeout(goodfinalinfo,200);
        result = true;
    }
    else if (document.getElementById('1').innerText === 'O' && document.getElementById('4').innerText === 'O' && document.getElementById('7').innerText === 'O'){
        setTimeout(badfinalinfo,200);
        result = true;
    }
    else if (document.getElementById('2').innerText === 'X' && document.getElementById('5').innerText === 'X' && document.getElementById('8').innerText === 'X'){
        setTimeout(goodfinalinfo,200);
        result = true;
    }
    else if (document.getElementById('2').innerText === 'O' && document.getElementById('5').innerText === 'O' && document.getElementById('8').innerText === 'O'){
        setTimeout(badfinalinfo,200);
        result = true;
    }
    else if (document.getElementById('3').innerText === 'X' && document.getElementById('6').innerText === 'X' && document.getElementById('9').innerText === 'X'){
        setTimeout(goodfinalinfo,200);
        result = true;
    }
    else if (document.getElementById('3').innerText === 'O' && document.getElementById('6').innerText === 'O' && document.getElementById('9').innerText === 'O'){
        setTimeout(badfinalinfo,200);
        result = true;
    }
    else if (document.getElementById('1').innerText === 'X' && document.getElementById('5').innerText === 'X' && document.getElementById('9').innerText === 'X'){
        setTimeout(goodfinalinfo,200);
        result = true;
    }
    else if (document.getElementById('1').innerText === 'O' && document.getElementById('5').innerText === 'O' && document.getElementById('9').innerText === 'O'){
        setTimeout(badfinalinfo,200);
        result = true;
    }  
    else if (document.getElementById('3').innerText === 'X' && document.getElementById('5').innerText === 'X' && document.getElementById('7').innerText === 'X'){
        setTimeout(goodfinalinfo,200);
        result = true;
    }
    else if (document.getElementById('3').innerText === 'O' && document.getElementById('5').innerText === 'O' && document.getElementById('7').innerText === 'O'){
        setTimeout(badfinalinfo,200);
        result = true;
    }
  
    else if (document.getElementById('1').innerText != '' && document.getElementById('2').innerText != '' && document.getElementById('3').innerText != '' && document.getElementById('4').innerText != '' && 
    document.getElementById('5').innerText != '' && document.getElementById('6').innerText != '' && document.getElementById('7').innerText != '' && document.getElementById('8').innerText != '' &&
    document.getElementById('9').innerText != '')
    {
        result = true;
      setTimeout(draw,200);

    
    }
    else
    result = false;
    

}

function goodfinalinfo(){
    var msg, bt1, bt2, bt3;
    msg = "<p>Wygrałeś</p>";
    bt1 = "<div id=\"b1\"><button id=\"Ponownie\">Zagraj jeszcze raz</button></div>";
    bt2 = "<div id=\"b1\"><button id=\"System\">System zaczyna</button></div>";
    bt3 = "<div id=\"b1\"><button id=\"Multi\">Gram z drugą osobą</button></div>";
    document.getElementById('app').innerHTML = msg + bt1 + bt2 + bt3;
    document.getElementById('Ponownie').addEventListener('click',startGameByPl);
    document.getElementById('System').addEventListener('click',startGameBySys);
    document.getElementById('Multi').addEventListener('click',modemulti);
}

function badfinalinfo(){
    var msg, bt1, bt2, bt3;
    msg = "<p>Przegrałeś</p>";
    bt1 = "<div id=\"b1\"><button id=\"Ponownie\">Zagraj jeszcze raz</button></div>";
    bt2 = "<div id=\"b1\"><button id=\"System\">System zaczyna</button></div>";
    bt3 = "<div id=\"b1\"><button id=\"Multi\">Gram z drugą osobą</button></div>";
    document.getElementById('app').innerHTML = msg + bt1 + bt2 + bt3;
    document.getElementById('Ponownie').addEventListener('click',startGameByPl);
    document.getElementById('System').addEventListener('click',startGameBySys);
    document.getElementById('Multi').addEventListener('click',modemulti);
}

function draw(){
    var msg, bt1, bt2, bt3;
    msg = "<p>Nie ma zwycięzcy</p>";
    bt1 = "<div id=\"b1\"><button id=\"Ponownie\">Zagraj jeszcze raz</button></div>";
    bt2 = "<div id=\"b1\"><button id=\"System\">System zaczyna</button></div>";
    bt3 = "<div id=\"b1\"><button id=\"Multi\">Gram z drugą osobą</button></div>";
    document.getElementById('app').innerHTML = msg + bt1 + bt2 + bt3;
    document.getElementById('Ponownie').addEventListener('click',startGameByPl);
    document.getElementById('System').addEventListener('click',startGameBySys);
    document.getElementById('Multi').addEventListener('click',modemulti);
}

};



function startGameBySys(){
    var gametable2, info2;
    var result2;
    info2 = "<p>Powodzenia</p>";
    gametable2 = "<p><table id=\"game\">"+
    "\<tbody\>"+
        "\<tr\>"+
            "\<td\ id=\"1\">\</td\>"+
            "\<td\ id=\"2\">\</td\>"+
            "\<td\ id=\"3\">\</td\>"+
        "\</tr\>"+
        "\<tr\>"+
            "\<td\ id=\"4\">\</td\>"+
            "\<td\ id=\"5\">\</td\>"+
            "\<td\ id=\"6\">\</td\>"+
        "\</tr\>"+
        "\<tr\>"+
            "\<td\ id=\"7\">\</td\>"+
            "\<td\ id=\"8\">\</td\>"+
            "\<td\ id=\"9\">\</td\>"+
        "\</tr\>"+
    "\</tbody\>"+
    "\</table\></p>";
    
    
    document.getElementById('app').innerHTML = info2 + gametable2;
    syscharfirst();

    function syscharfirst(){
        var polagry = [];
        if(document.getElementById('1').innerText != 'X' && document.getElementById('1').innerText != 'O')
        polagry.push(document.getElementById('1'));
        else 
        document.getElementById('1').style.pointerEvents = 'none';
        if(document.getElementById('2').innerText != 'X' && document.getElementById('2').innerText != 'O')
        polagry.push(document.getElementById('2'));
        else 
        document.getElementById('2').style.pointerEvents = 'none';
        if(document.getElementById('3').innerText != 'X' && document.getElementById('3').innerText != 'O')
        polagry.push(document.getElementById('3'));
        else 
        document.getElementById('3').style.pointerEvents = 'none';
        if(document.getElementById('4').innerText != 'X' && document.getElementById('4').innerText != 'O')
        polagry.push(document.getElementById('4'));
        else 
        document.getElementById('4').style.pointerEvents = 'none';
        if(document.getElementById('5').innerText != 'X' && document.getElementById('5').innerText != 'O')
        polagry.push(document.getElementById('5'));
        else 
        document.getElementById('5').style.pointerEvents = 'none';
        if(document.getElementById('6').innerText != 'X' && document.getElementById('6').innerText != 'O')
        polagry.push(document.getElementById('6'));
        else 
        document.getElementById('6').style.pointerEvents = 'none';
        if(document.getElementById('7').innerText != 'X' && document.getElementById('7').innerText != 'O')
        polagry.push(document.getElementById('7'));
        else 
        document.getElementById('7').style.pointerEvents = 'none';
        if(document.getElementById('8').innerText != 'X' && document.getElementById('8').innerText != 'O')
        polagry.push(document.getElementById('8'));
        else 
        document.getElementById('8').style.pointerEvents = 'none';
        if(document.getElementById('9').innerText != 'X' && document.getElementById('9').innerText != 'O')
        polagry.push(document.getElementById('9'));
        else 
        document.getElementById('9').style.pointerEvents = 'none';
        if(polagry.length === 0)
        info = "Nie ma zwycięzcy";
    var los = polagry[Math.floor(Math.random()*polagry.length)];
    los.innerText = "O";
    los.style.pointerEvents = 'none';
    gra();
   
    }

    function gra(){
        var table = document.getElementById('game');
        if (table != null) 
        {
            for (var i = 0; i < table.rows.length; i++) 
            {
                for (var j = 0; j < table.rows[i].cells.length; j++)
                table.rows[i].cells[j].onclick = function () 
                {
        
                    tableText(this);
                };
            }
        }
    }

    function tableText(tableCell){
        tableCell.innerHTML= "X";
        var polagry = [];
    if(document.getElementById('1').innerText != 'X' && document.getElementById('1').innerText != 'O')
    polagry.push(document.getElementById('1'));
    else 
    document.getElementById('1').style.pointerEvents = 'none';
    if(document.getElementById('2').innerText != 'X' && document.getElementById('2').innerText != 'O')
    polagry.push(document.getElementById('2'));
    else 
    document.getElementById('2').style.pointerEvents = 'none';
    if(document.getElementById('3').innerText != 'X' && document.getElementById('3').innerText != 'O')
    polagry.push(document.getElementById('3'));
    else 
    document.getElementById('3').style.pointerEvents = 'none';
    if(document.getElementById('4').innerText != 'X' && document.getElementById('4').innerText != 'O')
    polagry.push(document.getElementById('4'));
    else 
    document.getElementById('4').style.pointerEvents = 'none';
    if(document.getElementById('5').innerText != 'X' && document.getElementById('5').innerText != 'O')
    polagry.push(document.getElementById('5'));
    else 
    document.getElementById('5').style.pointerEvents = 'none';
    if(document.getElementById('6').innerText != 'X' && document.getElementById('6').innerText != 'O')
    polagry.push(document.getElementById('6'));
    else 
    document.getElementById('6').style.pointerEvents = 'none';
    if(document.getElementById('7').innerText != 'X' && document.getElementById('7').innerText != 'O')
    polagry.push(document.getElementById('7'));
    else 
    document.getElementById('7').style.pointerEvents = 'none';
    if(document.getElementById('8').innerText != 'X' && document.getElementById('8').innerText != 'O')
    polagry.push(document.getElementById('8'));
    else 
    document.getElementById('8').style.pointerEvents = 'none';
    if(document.getElementById('9').innerText != 'X' && document.getElementById('9').innerText != 'O')
    polagry.push(document.getElementById('9'));
    else 
    document.getElementById('9').style.pointerEvents = 'none';
    
    check2();
    if (result2 === false)
    setTimeout(syschar2(polagry),1000);
    }

    function check2(){

        if      (document.getElementById('1').innerText === 'X' && document.getElementById('2').innerText === 'X' && document.getElementById('3').innerText === 'X'){
            setTimeout(goodfinalinfo,200);
            result2 = true;
          
        }
        else if (document.getElementById('1').innerText === 'O' && document.getElementById('2').innerText === 'O' && document.getElementById('3').innerText === 'O'){
          setTimeout(badfinalinfo,200);
          result2 = true;
        }
        else if (document.getElementById('4').innerText === 'X' && document.getElementById('5').innerText === 'X' && document.getElementById('6').innerText === 'X'){
            setTimeout(goodfinalinfo,200);
            result2 = true;
        }
        else if (document.getElementById('4').innerText === 'O' && document.getElementById('5').innerText === 'O' && document.getElementById('6').innerText === 'O'){
            setTimeout(badfinalinfo,200);
            result2 = true;
        }
        else if (document.getElementById('7').innerText === 'X' && document.getElementById('8').innerText === 'X' && document.getElementById('9').innerText === 'X'){
            setTimeout(goodfinalinfo,200);
            result2 = true;
        }
        else if (document.getElementById('7').innerText === 'O' && document.getElementById('8').innerText === 'O' && document.getElementById('9').innerText === 'O'){
            setTimeout(badfinalinfo,200);
            result2 = true;
        }
        else if (document.getElementById('1').innerText === 'X' && document.getElementById('4').innerText === 'X' && document.getElementById('7').innerText === 'X'){
            setTimeout(goodfinalinfo,200);
            result2 = true;
        }
        else if (document.getElementById('1').innerText === 'O' && document.getElementById('4').innerText === 'O' && document.getElementById('7').innerText === 'O'){
            setTimeout(badfinalinfo,200);
            result2 = true;
        }
        else if (document.getElementById('2').innerText === 'X' && document.getElementById('5').innerText === 'X' && document.getElementById('8').innerText === 'X'){
            setTimeout(goodfinalinfo,200);
            result2 = true;
        }
        else if (document.getElementById('2').innerText === 'O' && document.getElementById('5').innerText === 'O' && document.getElementById('8').innerText === 'O'){
            setTimeout(badfinalinfo,200);
            result2 = true;
        }
        else if (document.getElementById('3').innerText === 'X' && document.getElementById('6').innerText === 'X' && document.getElementById('9').innerText === 'X'){
            setTimeout(goodfinalinfo,200);
            result2 = true;
        }
        else if (document.getElementById('3').innerText === 'O' && document.getElementById('6').innerText === 'O' && document.getElementById('9').innerText === 'O'){
            setTimeout(badfinalinfo,200);
            result2 = true;
        }
        else if (document.getElementById('1').innerText === 'X' && document.getElementById('5').innerText === 'X' && document.getElementById('9').innerText === 'X'){
            setTimeout(goodfinalinfo,200);
            result2 = true;
        }
        else if (document.getElementById('1').innerText === 'O' && document.getElementById('5').innerText === 'O' && document.getElementById('9').innerText === 'O'){
            setTimeout(badfinalinfo,200);
            result2 = true;
        }  
        else if (document.getElementById('3').innerText === 'X' && document.getElementById('5').innerText === 'X' && document.getElementById('7').innerText === 'X'){
            setTimeout(goodfinalinfo,200);
            result2 = true;
        }
        else if (document.getElementById('3').innerText === 'O' && document.getElementById('5').innerText === 'O' && document.getElementById('7').innerText === 'O'){
            setTimeout(badfinalinfo,200);
            result2 = true;
        }
      
        else if (document.getElementById('1').innerText != '' && document.getElementById('2').innerText != '' && document.getElementById('3').innerText != '' && document.getElementById('4').innerText != '' && 
        document.getElementById('5').innerText != '' && document.getElementById('6').innerText != '' && document.getElementById('7').innerText != '' && document.getElementById('8').innerText != '' &&
        document.getElementById('9').innerText != '')
        {
            result2 = true;
          setTimeout(draw,100);
    
        
        }
        else
        result2 = false;
        
    
    }
    function syschar2(polagry){
        if(polagry.length === 0)
        info = "Nie ma zwycięzcy";
    var los = polagry[Math.floor(Math.random()*polagry.length)];
    los.innerText = "O";
    los.style.pointerEvents = 'none';
    check2();
    }

    function goodfinalinfo(){
        var msg, bt1, bt2, bt3;
        msg = "<p>Wygrałeś</p>";
        bt1 = "<div id=\"b1\"><button id=\"Ponownie\">Zagraj jeszcze raz</button></div>";
        bt2 = "<div id=\"b1\"><button id=\"Ja\">Chcę zacząć</button></div>";
        bt3 = "<div id=\"b1\"><button id=\"Multi\">Gram z drugą osobą</button></div>";
        document.getElementById('app').innerHTML = msg + bt1 + bt2 + bt3;
        document.getElementById('Ponownie').addEventListener('click',startGameBySys);
        document.getElementById('Ja').addEventListener('click',startGameByPl);
        document.getElementById('Multi').addEventListener('click',modemulti);
        
    }
    
    function badfinalinfo(){
        var msg, bt1, bt2, bt3;
        msg = "<p>Przegrałeś</p>";
        bt1 = "<div id=\"b1\"><button id=\"Ponownie\">Zagraj jeszcze raz</button></div>";
        bt2 = "<div id=\"b1\"><button id=\"Ja\">Chcę zacząć</button></div>";
        bt3 = "<div id=\"b1\"><button id=\"Multi\">Gram z drugą osobą</button></div>";
        document.getElementById('app').innerHTML = msg + bt1 + bt2 + bt3;
        document.getElementById('Ponownie').addEventListener('click',startGameBySys);
        document.getElementById('Ja').addEventListener('click',startGameByPl);
        document.getElementById('Multi').addEventListener('click',modemulti);
    }
    
    function draw(){
        var msg, bt1, bt2, bt3;
        msg = "<p>Nie ma zwycięzcy</p>";
        bt1 = "<div id=\"b1\"><button id=\"Ponownie\">Zagraj jeszcze raz</button></div>";
        bt2 = "<div id=\"b1\"><button id=\"Ja\">Chcę zacząć</button></div>";
        bt3 = "<div id=\"b1\"><button id=\"Multi\">Gram z drugą osobą</button></div>";
        document.getElementById('app').innerHTML = msg + bt1 + bt2 + bt3;
        document.getElementById('Ponownie').addEventListener('click',startGameBySys);
        document.getElementById('Ja').addEventListener('click',startGameByPl);
        document.getElementById('Multi').addEventListener('click',modemulti);
    }
    

};












};

function modemulti(){
    var gametable, info, info2, licznik;
    licznik = 0;
    info = "<p>Gracz 1: X</p>";
    info2 = "<p>Gracz 2: O</p>";
    gametable = "<p><table id=\"game\">"+
    "\<tbody\>"+
        "\<tr\>"+
            "\<td\ id=\"1\">\</td\>"+
            "\<td\ id=\"2\">\</td\>"+
            "\<td\ id=\"3\">\</td\>"+
        "\</tr\>"+
        "\<tr\>"+
            "\<td\ id=\"4\">\</td\>"+
            "\<td\ id=\"5\">\</td\>"+
            "\<td\ id=\"6\">\</td\>"+
        "\</tr\>"+
        "\<tr\>"+
            "\<td\ id=\"7\">\</td\>"+
            "\<td\ id=\"8\">\</td\>"+
            "\<td\ id=\"9\">\</td\>"+
        "\</tr\>"+
    "\</tbody\>"+
    "\</table\></p>";
    
    
    document.getElementById('app').innerHTML = info + info2 + gametable;
    gra();

    function gra(){
        var table = document.getElementById('game');
        if (table != null) 
        {
            for (var i = 0; i < table.rows.length; i++) 
            {
                for (var j = 0; j < table.rows[i].cells.length; j++)
                table.rows[i].cells[j].onclick = function () 
                {
                    
                    tableText(this);
                };
            }
        }
    }

    function tableText(tableCell){
        licznik++;
        if (licznik%2 != 0)
        tableCell.innerHTML = "X";
        else
        tableCell.innerHTML = "O";

        if(tableCell === document.getElementById('1'))
        document.getElementById('1').style.pointerEvents = 'none';
        if(tableCell === document.getElementById('2'))
        document.getElementById('2').style.pointerEvents = 'none';
        if(tableCell === document.getElementById('3'))
        document.getElementById('3').style.pointerEvents = 'none';
        if(tableCell === document.getElementById('4'))
        document.getElementById('4').style.pointerEvents = 'none';
        if(tableCell === document.getElementById('5'))
        document.getElementById('5').style.pointerEvents = 'none';
        if(tableCell === document.getElementById('6'))
        document.getElementById('6').style.pointerEvents = 'none';
        if(tableCell === document.getElementById('7'))
        document.getElementById('7').style.pointerEvents = 'none';
        if(tableCell === document.getElementById('8'))
        document.getElementById('8').style.pointerEvents = 'none';
        if(tableCell === document.getElementById('9'))
        document.getElementById('9').style.pointerEvents = 'none';

        checkmulti();
        
    }

    function checkmulti(){

        if      (document.getElementById('1').innerText === 'X' && document.getElementById('2').innerText === 'X' && document.getElementById('3').innerText === 'X'){
            goodfinalinfom();
            
          
        }
        else if (document.getElementById('1').innerText === 'O' && document.getElementById('2').innerText === 'O' && document.getElementById('3').innerText === 'O'){
          badfinalinfom();
          
        }
        else if (document.getElementById('4').innerText === 'X' && document.getElementById('5').innerText === 'X' && document.getElementById('6').innerText === 'X'){
            goodfinalinfom();
            
        }
        else if (document.getElementById('4').innerText === 'O' && document.getElementById('5').innerText === 'O' && document.getElementById('6').innerText === 'O'){
            badfinalinfom();
        }
        else if (document.getElementById('7').innerText === 'X' && document.getElementById('8').innerText === 'X' && document.getElementById('9').innerText === 'X'){
            goodfinalinfom();
            
        }
        else if (document.getElementById('7').innerText === 'O' && document.getElementById('8').innerText === 'O' && document.getElementById('9').innerText === 'O'){
            badfinalinfom();
        }
        else if (document.getElementById('1').innerText === 'X' && document.getElementById('4').innerText === 'X' && document.getElementById('7').innerText === 'X'){
            goodfinalinfom();
            
        }
        else if (document.getElementById('1').innerText === 'O' && document.getElementById('4').innerText === 'O' && document.getElementById('7').innerText === 'O'){
            badfinalinfom();
        }
        else if (document.getElementById('2').innerText === 'X' && document.getElementById('5').innerText === 'X' && document.getElementById('8').innerText === 'X'){
            goodfinalinfom();
            
        }
        else if (document.getElementById('2').innerText === 'O' && document.getElementById('5').innerText === 'O' && document.getElementById('8').innerText === 'O'){
            badfinalinfom();
        }
        else if (document.getElementById('3').innerText === 'X' && document.getElementById('6').innerText === 'X' && document.getElementById('9').innerText === 'X'){
            goodfinalinfom();
            
        }
        else if (document.getElementById('3').innerText === 'O' && document.getElementById('6').innerText === 'O' && document.getElementById('9').innerText === 'O'){
            badfinalinfom();
        }
        else if (document.getElementById('1').innerText === 'X' && document.getElementById('5').innerText === 'X' && document.getElementById('9').innerText === 'X'){
            goodfinalinfom();
            
        }
        else if (document.getElementById('1').innerText === 'O' && document.getElementById('5').innerText === 'O' && document.getElementById('9').innerText === 'O'){
            badfinalinfom();
        }  
        else if (document.getElementById('3').innerText === 'X' && document.getElementById('5').innerText === 'X' && document.getElementById('7').innerText === 'X'){
            goodfinalinfom();
            
        }
        else if (document.getElementById('3').innerText === 'O' && document.getElementById('5').innerText === 'O' && document.getElementById('7').innerText === 'O'){
            badfinalinfom();
        }
      
        else if (document.getElementById('1').innerText != '' && document.getElementById('2').innerText != '' && document.getElementById('3').innerText != '' && document.getElementById('4').innerText != '' && 
        document.getElementById('5').innerText != '' && document.getElementById('6').innerText != '' && document.getElementById('7').innerText != '' && document.getElementById('8').innerText != '' &&
        document.getElementById('9').innerText != '')
        {
           drawm();
    
        
        }
       
        function goodfinalinfom(){
            var msg, bt1, bt2;
            msg = "<p>Wygrał Gracz 1</p>";
            bt1 = "<div id=\"b1\"><button id=\"Ponownie\">Zagraj jeszcze raz</button></div>";
            bt2 = "<div id=\"b1\"><button id=\"Ja\">Zagraj solo</button></div>";
            document.getElementById('app').innerHTML = msg + bt1 + bt2;
            document.getElementById('Ponownie').addEventListener('click',modemulti);
            document.getElementById('Ja').addEventListener('click',modesolo);
        }
        
        function badfinalinfom(){
            var msg, bt1, bt2;
            msg = "<p>Wygrał Gracz 2</p>";
            bt1 = "<div id=\"b1\"><button id=\"Ponownie\">Zagraj jeszcze raz</button></div>";
            bt2 = "<div id=\"b1\"><button id=\"Ja\">Zagraj solo</button></div>";
            document.getElementById('app').innerHTML = msg + bt1 + bt2;
            document.getElementById('Ponownie').addEventListener('click',modemulti);
            document.getElementById('Ja').addEventListener('click',modesolo);
        }
        
        function drawm(){
            var msg, bt1, bt2;
            msg = "<p>Nie ma zwycięzcy</p>";
            bt1 = "<div id=\"b1\"><button id=\"Ponownie\">Zagraj jeszcze raz</button></div>";
            bt2 = "<div id=\"b1\"><button id=\"Ja\">Zagraj solo</button></div>";
            document.getElementById('app').innerHTML = msg + bt1 + bt2;
            document.getElementById('Ponownie').addEventListener('click',modemulti);
            document.getElementById('Ja').addEventListener('click',modesolo);
        }
    
    }
};


