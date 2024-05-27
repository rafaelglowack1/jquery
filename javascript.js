$(document).ready(function(){
    $('#botHeader').click(function() {
        $('#formulario').slideDown()
    })
    $('#canc').click(function(){
        $('#formulario').slideUp()

    })

})
 

$('#formulario').on("submit", function(e){
    e.preventDefault()
    const urlUsuario = $('#url').val()
    let linha = $('<li style=" display:none "> </li>')
        $(`<img src="${urlUsuario}" target="_blank" alt="dragão ">`).appendTo(linha)
    $(`
    <div class="texto" >
    <a href="${urlUsuario }"> tamanho real </a>
    </div>
    `).appendTo(linha)
    $(linha).appendTo('ul')
    $(linha).fadeIn(1000)
    $('#url').val('')


})
