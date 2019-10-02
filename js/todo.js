$(document)
    .ready(function () {

        function generateUUID() {
            /*jshint bitwise:false */
            var i,
                random;
            var uuid = '';

            for (i = 0; i < 32; i++) {
                random = Math.random() * 16 | 0;
                if (i === 8 || i === 12 || i === 16 || i === 20) {
                    uuid += '-';
                }
                uuid += (i === 12
                    ? 4
                    : (i === 16
                        ? (random & 3 | 8)
                        : random)).toString(16);
            }
            return uuid;
        }
          
        $(document).on('click','#button',function(){
            var mylist = $('input[type="text"].input-text').val();
            var newInList = '<li id =' + generateUUID() + ' class="">'; 
            var inputName = '<input name="done-todo" type="checkbox" class="done-todo" > '+mylist+' </input> </li>' ;
            $("ol").append(newInList + inputName);
            $('input[type="text"].input-text').val(""); 
         });

         $(document).on('click','input[name="done-todo"]',function(){
            $('input[name="done-todo"]').click(function() {  
                        if ($(this).is(':checked')) {
                        $(this).parent().css( { "color": "gray", "text-decoration": "line-through" } );
                        $(this).parent().addClass( "checked" );
                 }else {
                        $(this).parent().css( { "color": "black", "text-decoration": "none" } );
                        $(this).parent().removeClass( "checked" );
                 };
                })
         });

    });