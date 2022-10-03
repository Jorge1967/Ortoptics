<!DOCTYPE HTML>
<html>

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
  <link rel="stylesheet" href="css/menu.css">
  <link rel="stylesheet" href="css/menu2.css">
  <meta name="theme-color" content="#800080">
  <script type="text/javascript">
    var opc_px = "";
  </script>
  <script type='text/javascript' src='js/opcion.js'></script>
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css">
</head>

<body>
  <div class="color_inicio">
  </div>
  <label for="myCheck">
    <input type="checkbox" id="myCheck" onclick="Buttontoggle()" checked />
    <div>
      <span class="on">Slow</span>
      <span class="off">Fast</span>
    </div>
  </label>
  <center>
    <h2 style="position: absolute; margin-top: 0.7%;margin-left:26%;">Right-Left:</h2>
    <input type="checkbox" id="switch" class="checkbox" onclick="RightLeft()" checked />
    <label for="switch" class="toggle">
      <p>ON&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;OFF</p>
    </label>
  </center>
  <div id="selector">
    <h2 style="position: absolute;margin-top:-2.5%;margin-left:51%;">Stimulus:&nbsp;</h2>
    <select id="tipo" name="tipo" id="subseccion1" style="font-size:1.25em;font-style:italic;font-weight:bold;width:200px;height:37px;text-align:left;position:absolute;margin-top:-3%;margin-left:59.5%;" onchange="ShowMenu(this)">
      <option selected value='1'>Circle</option>
      <option value='2'>1º fusion[face]</option>
      <option value='3'>Sun</option>
      <option value='4'>2º Fusion [Cross]</option>
      <option value='5'>House</option>
      <option value='6'>Car</option>
      <option value='7'>Stereo</option>
    </select>
  </div>
  <div>
    <button class="menu-button" onclick="botonOPC()">MENU</button>
  </div>
  <center>
    <div id="teclado">
      <img id='cir_I'  src="img/cirR.png" class="imgR">
      <img id='cir_D'  src="img/cirA.png" class="imgA">
      <img id='cirN'   src="img/cirN.png" class="imgN" >
      <img id='imgA1'  src="img/face.png" class="imgA" style="display:none">
      <img id='imgA2'  src="img/solA.png" class="imgA" style="display:none">
      <img id='imgR2'  src="img/solR.png" class="imgR" style="display:none">
      <img id='xleft'  src="img/left.png" class="imgX" style="display:none">
      <img id='xright' src="img/right.png" class="imgX" style="display:none">
      <img id='crossI'  src="img/crossR.png" class="imgR" style="display:none">
      <img id='crossD'  src="img/crossA.png" class="imgA" style="display:none">
      <img id='houseI'  src="img/houseR.png" class="imgR" style="display:none">
      <img id='houseD'  src="img/houseA.png" class="imgA" style="display:none">
      <img id='carI'  src="img/carR.png" class="imgR" style="display:none">
      <img id='carD'  src="img/carA.png" class="imgA" style="display:none">
      <img id='stereoI'  src="img/stereoR.png" class="imgR" style="display:none">
      <img id='stereoD'  src="img/stereoA.png" class="imgA" style="display:none">
    </div>
  </center>
  <button class="footer" id="footer" style="z-index: 9999999;">
    <img src="img/Arriba.png" id='A_1' style="width:25px;height:35px;cursor:pointer;bottom:38px;" onclick="up()"/>
    <img src="img/Abajo.png" id='A_2' style="width:25px;height:35px;cursor:pointer;bottom:38px;" onclick="down()"/>
    <img src="img/I1.png" id='I_1' style="width:40px;height:40px;cursor:pointer;bottom:40px;" onclick="left1()"/>
    <img src="img/home.png" id='home' style="width:40px;height:40px;cursor:pointer;bottom:40px;" onclick="home()"/>
    <img src="img/D1.png" id='D_1' style="width:40px; height:40px;cursor:pointer;bottom:40px;right:100px;" onclick="right1()"/>
  </button>
  <div class="welcomeScreen" style="color:black;" id="panta">
    <h2>¡Bienvenidos!</h2>
    <div></div>
    <p style="color:black;font-weight:normal;">
      Esta es una versión del <b>PC Ortoptics</b> para personas con ambliopía, preparada para ser usada con anteojos, sobre de los que ya usa, pero con vidrios de color rojo y azul/cian (anáglifos).
    </p>
    <p></p>
    <p style="color:black;font-weight:normal;">
      Si se cuenta con teclado, los Graficos pueden moverse con 
      <i class='fa fa-arrow-left'></i>
      <i class="fa fa-arrow-right"></i>
      <i class="fa fa-arrow-down"></i>
      <i class="fa fa-arrow-up"></i> y tambien usando el 
      <i class="fa fa-mouse-pointer fa-1x"></i> .
    </p>
    <p style="color:black;font-weight:normal;">
      Inspirado en el Dr. Mario Cerrella y su <a href="https://dresiribarren.com.ar/visual-training-2/" target="_blank">Visual Training</a>, un grupo de oftalmólogos, ortoptistas y programadores, decidimos desarrollar este y otros juegos online que permitan tratar el "Ojo Vago".
    </p>
    <p style="color:black;font-weight:normal;">
      Para poder continuar con esta tarea, necesitamos de tu ayuda. Si te interesa, podés realizar una donación, entrando al siguiente <a href="https://dresiribarren.com.ar/investigacion/" target="_blank">vínculo</a>.
    </p>
    <p style="color:black;font-weight:normal;">
      El código fuente de este juego puede encontrarse en <a href="https://github.com/Jorge1967/Ortoptics" style="white-space: nowrap;"><i class="fa fa-github"></i> GitHub</a>.
    </p>
    <button class="swal-button" onclick="boton()">OK</button>
  </div>
  <div id="menuOpc" style="display:none;">
    <ul class="menuScreen">
      <div class="swal-title">Config</div>
      <div class="swal-content">
        <div style="display:flex;justify-content:space-around;" class="grafico">
          <button class="graficopc0" id="_R10">
            <img src="img/cirR.png" class="imgrafico" style="opacity:1;" onclick="opcgrafico('10')" />
          </button>
          <button class="graficopc1" id="_R20">
            <img src="img/cirR.png" class="imgrafico" style="opacity:.8;" onclick="opcgrafico('20')" />
          </button>
          <button class="graficopc1" id="_R30">
            <img src="img/cirR.png" class="imgrafico" style="opacity:0.6;" onclick="opcgrafico('30')" />
          </button>
          <button class="graficopc1" id="_R40">
            <img src="img/cirR.png" class="imgrafico" style="opacity:0.4;" onclick="opcgrafico('40')" />
          </button>
          <button class="graficopc1" id="_R50">
            <img src="img/cirR.png" class="imgrafico" style="opacity:.2;" onclick="opcgrafico('50')" />
            </canvas>
          </button>
        </div>
        <br>
        <div style="display:flex;margin:-5px 0px;justify-content:space-around;">
          <div style="width:59px;font-size:14px;font-weight:700;">100</div>
          <div style="width:59px;font-size:14px;font-weight:700;">80</div>
          <div style="width:59px;font-size:14px;font-weight:700;">60</div>
          <div style="width:59px;font-size:14px;font-weight:700;">40</div>
          <div style="width:59px;font-size:14px;font-weight:700;">20</div>
        </div>
        <br>
        <div style="display:flex;justify-content:space-around;" class="grafico">
          <button class="graficopc0" id="_A11">
            <img src="img/cirA.png" class="imgrafico" style="opacity:1;" onclick="opcgrafico('11')" />
          </button>
          <button class="graficopc1" id="_A21">
            <img src="img/cirA.png" class="imgrafico" style="opacity:.8;" onclick="opcgrafico('21')" />
          </button>
          <button class="graficopc1" id="_A31">
            <img src="img/cirA.png" class="imgrafico" style="opacity:0.6;" onclick="opcgrafico('31')" />
          </button>
          <button class="graficopc1" id="_A41">
            <img src="img/cirA.png" class="imgrafico" style="opacity:0.4;" onclick="opcgrafico('41')" />
          </button>
          <button class="graficopc1" id="_A51">
            <img src="img/cirA.png" class="imgrafico" style="opacity:.2;" onclick="opcgrafico('51')" />
            </canvas>
          </button>
        </div>
      </div>
      <img src="img/ok.png" class="imgok" onclick="opcOK()" />
    </ul>
  </div>
</body>
</html>

<div class="swal-modal" role="dialog" aria-modal="true">
