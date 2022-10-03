window.onload=inicio;

function desplazar(objeto){
  var tecla = objeto.which;
  switch (tecla){
    case 37 :   // left
      left1(1);
      break;
    case 39 : // right
      right1(2);
      break;
    case 36 : // home
      home(2);
      break;
    case 38 : // up
      up();
      break;
    case 40 : // down
      down();
      break;
  }
}

function inicio() {
  img0 = document.getElementById('cirN');
  img3 = document.getElementById('xright');
  img4 = document.getElementById('xleft');
  bt0  = document.getElementById('bt1');
  const a1 = document.getElementById('A_1');
  const a2 = document.getElementById('A_2');
  const i1 = document.getElementById('I_1');
  const d1 = document.getElementById('D_1');
  document.getElementById('cirN').style.display='inline';
  fin = `${img0.offsetLeft}`;
  fim = `${img0.offsetTop}`;
  letraL = Number(fim)+110;
  letraR = Number(fim)+335;
  sumar1 = sumar2 = 0;
  correr = 5;
  JSx    = 1;
  y2     = y3 = 40;
  contar = kontar = 0;
  x1     = x2     = 139;
  finder = finizq = 0;
  lateral= 139;
  arriba = 40;
  Rojo   = 'cir_I';
  Azul   = 'cir_D'
  Negro  = 'cirN'
  tipo_graf  = 1;
  opagrafico = 1;
  vpWidth   = document.documentElement.clientWidth;
  a1.style.left = (vpWidth/2) - 120 + 'px';
  a2.style.left = (vpWidth/2) - 90 + 'px';
  i1.style.left = (vpWidth/2) - 50 + 'px';
  d1.style.left = (vpWidth/2) + 50 + 'px';
  img1 = document.getElementById(Rojo);
  img2 = document.getElementById(Azul);
  document.getElementById("A_1").style.display='';
  document.getElementById("A_2").style.display='';
  document.getElementById("I_1").style.display='';
  document.getElementById("D_1").style.display='';
  document.getElementById(Rojo).style.display='inline';      
  document.getElementById(Azul).style.display='inline';
  img3.style.top  = `${img3.offsetTop + letraL}px`;
  img4.style.top  = `${img4.offsetTop + letraR}px`;
  document.getElementById('xright').style.display='inline';
  document.getElementById('xleft').style.display='inline';
  document.onkeydown=desplazar;
}

function left1(e) {
  var x = `${img2.offsetLeft}`;
  document.getElementById(Negro).style.display='none';
  if (finizq<x2) {
    img1.style.left = `${img1.offsetLeft + correr}px`;
    img2.style.left = `${img2.offsetLeft - correr}px`;
    img3.style.left = `${img3.offsetLeft - correr}px`;
    img4.style.left = `${img4.offsetLeft + correr}px`;
    sumar1 = sumar1-1;
    finizq = finizq+1;
    finder = finder-1;
    if (sumar1<19) {
      sumar1 = 0;
    }
  }
}

function right1(e) {
  if ( finder<x1 ) {
    sumar1 = sumar1+1;
    finder = finder+1;
    x2     = x2+1;
    img1.style.left = `${img1.offsetLeft - correr}px`;
    img2.style.left = `${img2.offsetLeft + correr}px`;
    img3.style.left = `${img3.offsetLeft + correr}px`;
    img4.style.left = `${img4.offsetLeft - correr}px`;
  }
  document.getElementById(Negro).style.display='none';
}

function up() {
  if (contar<y2) {
    document.getElementById(Negro).style.display='none';
    sumar2 = sumar2+1;
    contar = contar+1;
    y3 = y3+1;
    img1.style.top = `${img1.offsetTop + correr}px`;
    img2.style.top = `${img2.offsetTop - correr}px`;
    img3.style.top = `${img3.offsetTop - correr}px`;
    img4.style.top = `${img4.offsetTop + correr}px`;
  }
}

function down() {
  document.getElementById(Negro).style.display='none';
  if ( kontar<y3 ) {
    img1.style.top = `${img1.offsetTop - correr}px`;
    img2.style.top = `${img2.offsetTop + correr}px`;
    img3.style.top = `${img3.offsetTop + correr}px`;
    img4.style.top = `${img4.offsetTop - correr}px`;
    sumar2 = sumar2-1;
    kontar = kontar+1;
    contar = contar-1;
  }
}

function home() {
  if (JSx == 2) {
    img1.style.top = "60px";
    img2.style.top = "230px";
  }else {
    img1.style.top  = `${fim}px`;
    img2.style.top  = `${fim}px`;
  }
  if(tipo_graf==1) {
    letraL = Number(fim)+50;
    letraR = Number(fim)+275;
  }
  img1.style.left = `${fin}px`;
  img2.style.left = `${fin}px`;
  img3.style.left = `${fin}px`;
  img4.style.left = `${fin}px`;
  img3.style.top  = `${letraL+60}px`;
  img4.style.top  = `${letraR+60}px`;
  if ( (sumar1>9) || (sumar2>9) ) {     
    document.getElementById(Rojo).style.display='inline';
    document.getElementById(Azul).style.display='inline';
  }
  sumar1 = sumar2 = contar = kontar = finder = finizq = 0;
  y2     = y3 = arriba;
  x1     = x2 = lateral;    
}

function Buttontoggle() {
  var checkBox = document.getElementById("myCheck");
  var opc = document.getElementById("opc");
  if (checkBox.checked == true){
    correr = 5;
    lateral= 139;
    arriba = 40;
  } else {
    correr = 10;
    lateral= 69;
    arriba = 20;
  }
  x1 = lateral;
  x2 = lateral;
  y2 = arriba;
  y3 = arriba;
}

function RightLeft() {
  var checkBox = document.getElementById("switch");
  var n = document.getElementById('xright');
  var m = document.getElementById('xleft');
  if (checkBox.checked == true){
    n.style.display = 'inline';
    m.style.display = 'inline';
  } else {
    n.style.display = 'none';
    m.style.display = 'none';
  }
}

function ShowMenu(x) {
  JSx = x[x.selectedIndex].value;
  tipo_graf = Number(JSx);
  document.getElementById(Rojo).style.display = "none";
  document.getElementById(Azul).style.display = "none";
  document.getElementById(Negro).style.display = "none";
  selector = document.getElementById('selector');
  letraL = 105;
  letraR = 325;
  if(tipo_graf==1) {
    Rojo    = 'cir_I';
    Azul    = 'cir_D'
    findown = 260;
  }else if(tipo_graf==2) {
    Rojo  = 'cir_I';
    Azul  = 'imgA1';
    findown = 430;
  }else if(tipo_graf==3) {
    Rojo    = 'imgR2';
    Azul    = 'imgA2';
    findown = 100;
  }else if(tipo_graf==4) {
    Rojo    = 'crossI';
    Azul    = 'crossD';
    findown = 100;
  }else if(tipo_graf==5) {
    Rojo    = 'houseI';
    Azul    = 'houseD';
    findown = 100;
  }else if(tipo_graf==6) {
    Rojo    = 'carI';
    Azul    = 'carD';
    findown = 100;
  }else if(tipo_graf==7) {
    Rojo    = 'stereoI';
    Azul    = 'stereoD';
    findown = 100;
  }
  img1 = document.getElementById(Rojo);
  img2 = document.getElementById(Azul);
  document.getElementById(Rojo).style.display = "inline";
  document.getElementById(Azul).style.display = "inline";
  footer = document.getElementById("footer");
  footer.focus();
  home();
}

function boton() {
  document.getElementById("panta").style.display = "none";
}

function botonOPC() {
  document.getElementById("menuOpc").style.display = "inline";
}

function opcgrafico(e) {
  ult = e.substr(-1);
  pri = e.substr(0,1);
  xid = ult=='0' ? '_R' : '_A';
  for (var i = 1; i < 6; i++) {
    nid = xid + i + ult;
    oElem = document.getElementById(nid);
    oElem.className = "graficopc1";
  }
  xid = xid+e;
  oElem = document.getElementById(xid);
  oElem.className = "graficopc0";
  if (pri=='1') {
    opagrafico = 1;
  }else if (pri=='2') {
    opagrafico = .8;
  }else if (pri=='3') {
    opagrafico = .6;
  }else if (pri=='4') {
    opagrafico = .4;
  }else {
    opagrafico = .2;
  }
  if (ult=='0') {
    validopcR();
  }else {
    validopcA();
  }
}

function validopcR(){
  document.getElementById('cir_I').style.opacity = opagrafico;
  document.getElementById('imgR2').style.opacity = opagrafico;
  document.getElementById('xleft').style.opacity = opagrafico;
  document.getElementById('crossI').style.opacity = opagrafico;
  document.getElementById('houseI').style.opacity = opagrafico;
  document.getElementById('carI').style.opacity = opagrafico;
  document.getElementById('stereoI').style.opacity = opagrafico;
}
function validopcA(){
  document.getElementById('cir_D').style.opacity = opagrafico;
  document.getElementById('imgA1').style.opacity = opagrafico;
  document.getElementById('imgA2').style.opacity = opagrafico;
  document.getElementById('xright').style.opacity = opagrafico;
  document.getElementById('crossD').style.opacity = opagrafico;
  document.getElementById('houseD').style.opacity = opagrafico;
  document.getElementById('carD').style.opacity = opagrafico;
  document.getElementById('stereoD').style.opacity = opagrafico;
}
function opcOK(){
  document.getElementById("menuOpc").style.display = "none";
}
