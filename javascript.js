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
})
