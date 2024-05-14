# API01


### Link importante para projeto GP
#### https://www.bringit.com.br/blog/dicas-e-tutoriais-para-notebook/duvidas-frequentes/qual-o-tamanho-de-tela-de-notebook-em-cm/#:~:text=1680%20%E2%80%93%201050%20pixels%3A15.4%20polegadas,pixels%3A17%20e%2015.4%20polegadas.


style.css - linha 34
.icone-bacia{
    width: 60px;
    filter: invert(7%) sepia(64%) saturate(6913%) hue-rotate(232deg) brightness(113%) contrast(100%);
    /* filter: invert(100%) sepia(100%) saturate(0%) hue-rotate(264deg) brightness(107%) contrast(101%); */
    /* filter: invert(13%) sepia(93%) saturate(5154%) hue-rotate(243deg) brightness(70%) contrast(150%); */
    /* filter: invert(88%) sepia(34%) saturate(2619%) hue-rotate(139deg) brightness(85%) contrast(83%); */
}

image class icone-bacia - linha 195
 x="415" y="570"

 https://www.youtube.com/watch?v=yUkMcFOOb1o

 https://codepen.io/sosuke/pen/Pjoqqp

 http://petropet.uff.br/voce-conhece-as-principais-bacias-sedimentares/

max - 2560 {
.duvida{
        width: 80px;
        height: 80px;
    }
}

max - 1440 {
.duvida{
        width: 80px;
        height: 80px;
    }
}

max-1024 {
 .duvida{
        width: 60px;
        height: 60px;
    }
}

max - 820 {
.duvida{
        width: 65px;
        height: 65px;
    }
}

<script type="text/javascript" src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"></script>
<script type="text/javascript">
    function googleTranslateElementInit() {
        new google.translate.TranslateElement({
            pageLanguage: 'pt',
            includedLanguages: 'en',
            layout: google.translate.TranslateElement.InlineLayout.SIMPLE
        }, 'google_translate_element');
    }
</script>

<div id="google_translate_element"></div>

<script type="text/javascript" src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"></script>
<script type="text/javascript">
    function googleTranslateElementInit() {
        new google.translate.TranslateElement({
            pageLanguage: 'pt',
            includedLanguages: 'en',
            layout: google.translate.TranslateElement.InlineLayout.SIMPLE
        }, 'google_translate_element');
    }
</script>

<div id="google_translate_element"></div>

<!DOCTYPE html>
<html lang="pt">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tradutor de Idiomas</title>
</head>
<body>
    <h1>Meu Site</h1>
    
    <!-- Botão de alternância de idioma -->
    <label for="languageSwitch">Traduzir para Inglês:</label>
    <input type="checkbox" id="languageSwitch">

    <!-- Conteúdo do site -->
    <div id="content">
        <p>Bem-vindo ao meu site! Este é um exemplo de conteúdo em português.</p>
        <!-- Adicione mais conteúdo aqui -->
    </div>

    <!-- Script JavaScript -->
    <script src="script.js"></script>
</body>
</html>

// Função para alternar entre português e inglês
function toggleLanguage() {
    var languageSwitch = document.getElementById("languageSwitch");
    var content = document.getElementById("content");

    if (languageSwitch.checked) {
        // Traduzir para inglês
        content.innerHTML = content.innerHTML.replace(/Bem-vindo ao meu site! Este é um exemplo de conteúdo em português./g, "Welcome to my website! This is an example of content in English.");
        // Adicione mais substituições de texto conforme necessário para traduzir outros elementos do site
    } else {
        // Restaurar para português
        content.innerHTML = content.innerHTML.replace(/Welcome to my website! This is an example of content in English./g, "Bem-vindo ao meu site! Este é um exemplo de conteúdo em português.");
        // Adicione mais substituições de texto conforme necessário para restaurar outros elementos do site para o português
    }
}

// Adicionar evento de mudança para o botão de alternância de idioma
document.getElementById("languageSwitch").addEventListener("change", toggleLanguage);


site dsa - olhar

bugs

header1 - no cabeçalho, o item Nossas Atividades - o link foi desativado, mudar o conteúdo e consequentemente o link

barra de pesquisa - não está funcionando (por enquanto)

mapa - desativar função que faz poço aparecer clicando em uma parte específica do mapa

Botão switch Poços - aparece o poço, vc clica nele aparece o nome do poço e o símbolo indicando onde está, mas quando clica pra deixar de aparecer os poços, o símbolo e o nome do poço continua (além de que falta colocar as caractéristicas do mesmo pra aparecer no canto direito)

Botão Switch Campos não está aparecendo nenhum campo, ou ícone que indique onde está

Na filtragem - se colocar a opção mar, aparece o poço, e se após colocar a opção terra, continua aparecendo o poço no mar

Os elementos selecionados - ainda não aparece a quantidade selecionada pelos botão switch

Informações Elementos

Campos

       Campo Grande (nome do campo no centro)
Número do contrato - 48000.003737/97-16
Operador do Contrato - Petróleo Brasileiro S.A.
Estado - Espírito Santo
Bacia - Espírito Santo
Localização - TERRA 
Fluído principal - ÓLEO
Stiuação - Produção
Descoberta - 14/05/1975
Início da Produção - 31/08/1975
Previsão de Término de Produção - 
Data de atualização dados


Poços
	1-Shel-35A-RJS(nome do poço no centro)
Operador
Titularidade
Categoria
Tipo
Estado
Nome Bloco
Situação
Data início
Data término
Data conclusão
Data de atualização dados

Blocos Exploratórios
Nome do bloco(no centro também) PAR-T-215
Bacia - Paraná
Operador - Eneva S.A
Data de atualização dados

Bacia
nome da bacia(no centro) Paraná
Situação - Terrestre
Data de atualização dados -

.icone-bacia{

    display: none;
    filter: invert(15%) sepia(60%) saturate(4526%) hue-rotate(226deg) brightness(98%) contrast(124%);
    /* filter: invert(93%) sepia(13%) saturate(286%) hue-rotate(69deg) brightness(103%) contrast(95%); - CAMPOS */
}

#bacia-do-parana{
    filter: invert(96%) sepia(8%) saturate(2082%) hue-rotate(317deg) brightness(104%) contrast(92%);
}
