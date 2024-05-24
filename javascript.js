$(document).ready(function(){
    $('#botheader').click(function() {
        $('#formulario').slideDown();
    })

})

$('#formulario').on("submit", function(e){
    e.preventDefault()
})
