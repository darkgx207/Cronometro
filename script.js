    // Declarações
    let cont = document.getElementById('contador');
    let inter;
    let hour = 00;
    let min = 00;
    let sec = 00;
    let ligado = false;
    let paused = false;
    let vsec,vmin,vhour;


    // FUNÇÃO POR BOTÃO
    function timer() {
        paused = false;
        ligado = true;
        clearInterval(inter);
        inter = setInterval(contar,1000);
        onAndOFf();
        
    }

    function limpar() {
        ligado = false;
        paused = false;
        clearInterval(inter);
        hour=0;min=0;sec=0;
        hhmmss();
        cont.innerText = `${vhour}:${vmin}:${vsec}`;
        onAndOFf();
    }

    function parar() {
        ligado = false;
        paused = true;
        clearInterval(inter);
        onAndOFf();
    }

    // Verificador de Estado    
    function onAndOFf(){
        var botao = document.getElementById('start') ;
        var bstop = document.getElementById('stop');
        if(ligado===true) {botao.classList.add('ligado')}
        if(ligado===false) {botao.classList.remove('ligado')}
        if(paused===true) {bstop.classList.add('pausado')}
        if(paused===false) {bstop.classList.remove('pausado')}
    }

// Contador
    function contar() {
            hhmmss();
            sec++;
            cont.innerText = `${vhour}:${vmin}:${vsec}`;
    }

    function hhmmss() {
        if(sec === 60) { sec = 0; min++; }
        if(min===60) { sec = 0; min = 0; hour++; }

        if(sec<10){vsec = '0'+sec}
        if(sec>10){vsec = sec}

        if(min<10){vmin = '0'+min}
        if(min>10){vmin = min}

        if(hour<10){vhour = '0'+hour}
        if(hour>10){vhour = hour}
    }


    function _popup(e) {
        const clicked = document.querySelector('.button');
        clicked.addEventListener('click', (e)=> {
            document.querySelector('.popUp').classList.remove('show')});
    }
    function _close() {
        const clickx = document.querySelector('#xclose');
        document.addEventListener('click',(e) =>{
            if(e.target.id==='xclose'){
                document.querySelector('.popUp').classList.add('show');
            }
        })
    }
    _popup();
    _close()