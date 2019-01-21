<!DOCTYPE html>
<html lang="">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Design Arte Tecnologia</title>
    <script src="libraries/p5.min.js"></script>
    <script src="libraries/addons/p5.dom.min.js"></script>
    <script src="libraries/addons/p5.sound.min.js"></script>
    <script src="javascript/sketch.js"></script>
    <script src="libraries/addons/p5.dom.js"></script>

    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
    <link rel="stylesheet" href="css/style.css">

    <link rel="shortcut icon" href="imagens/icon.png">

    <link href="https://fonts.googleapis.com/css?family=Jockey+One" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Roboto+Mono" rel="stylesheet">
</head>

  <body>
    <header>
        <?php include('header.html'); ?>
    </header>

    <main class="locais">
        <!-- Button trigger modal -->
        <object class="letra-logo-direita" data="imagens/darq.svg"></object>
        <button id="darq" type="button" class="btn btn-primary letra-logo-direita" data-toggle="modal" data-target="#exampleModalCenterDarq"></button>

        <!-- Modal -->
        <div class="modal fade" id="exampleModalCenterDarq" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitleDarq" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title jockey" id="exampleModalCenterTitleDarq">Departamento de Arquitetura</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body roboto">
                        <img src="imagens/darq.jpg" alt="DARQ">
                        <div>
                            Universidade de Coimbra<br>
                            R. Colégio Novo, 3000-143 Coimbra
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="bot btn btn-secondary" data-dismiss="modal">Fechar</button>
                        <button type="button" class="bot btn btn-primary"><a href="https://www.google.com/maps/place/Departamento+de+Arquitectura/@40.209508,-8.4254727,17z/data=!3m1!4b1!4m5!3m4!1s0xd22f90bdb46aa95:0xb005070b2bc33a21!8m2!3d40.209508!4d-8.423284" target="_blank">Direções</a></button>
                    </div>
                </div>
            </div>
        </div>

        <object class="letra-logo-fundo" data="imagens/dei.svg"></object>
        <button id="dei" type="button" class="btn btn-primary letra-logo-fundo" data-toggle="modal" data-target="#exampleModalCenterDei"></button>

        <!-- Modal -->
        <div class="modal fade" id="exampleModalCenterDei" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitleDei" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title jockey" id="exampleModalCenterTitleDei">Departamento de Engenharia Informática</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body roboto">
                        <img src="imagens/dei.jpg" alt="DEI">
                        <div>
                            Universidade de Coimbra, Pólo II<br>
                            Pinhal de Marrocos, 3030-290 Coimbra
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="bot btn btn-secondary" data-dismiss="modal">Fechar</button>
                        <button type="button" class="bot btn btn-primary"><a href="https://www.google.com/maps/place/DEI+-+Departamento+de+Engenharia+Inform%C3%A1tica+-+FCTUC/@40.1863787,-8.4182919,17z/data=!3m1!4b1!4m5!3m4!1s0xd22f9952aaf6517:0xd3822ec1d359eb52!8m2!3d40.1863787!4d-8.4161032" target="_blank">Direções</a></button>
                    </div>
                </div>
            </div>
        </div>

        <object class="letra-logo-esquerda" data="imagens/labchimico.svg"></object>
        <button id="lab" type="button" class="btn btn-primary letra-logo-esquerda" data-toggle="modal" data-target="#exampleModalCenterLab"></button>

        <!-- Modal -->
        <div class="modal fade" id="exampleModalCenterLab" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitleLab" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title jockey" id="exampleModalCenterTitleLab">Laboratório Chimico</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body roboto">
                        <img src="imagens/chimico.jpg" alt="LAB. CHIMICO">
                        <div>
                            Museu da Ciência, 3000-272 Coimbra<br>
                            <a href="http://www.museudaciencia.org/" target="_blank">museudaciencia.org</a><br>
                            239 854 350
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="bot btn btn-secondary" data-dismiss="modal">Fechar</button>
                        <button type="button" class="bot btn btn-primary"><a href="https://www.google.com/maps/place/Laborat%C3%B3rio+Ch%C3%ADmico,+3000-272+Coimbra/@40.2100646,-8.4257537,17z/data=!3m1!4b1!4m5!3m4!1s0xd22f90be401315b:0x9643f5a09bd091b1!8m2!3d40.2100646!4d-8.423565" target="_blank">Direções</a></button>
                    </div>
                </div>
            </div>
        </div>
    </main>

    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous"></script>
    <script src="javascript/botoes.js"></script>
  </body>
</html>
