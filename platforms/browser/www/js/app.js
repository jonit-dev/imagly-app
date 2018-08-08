$(function () {


    /*#############################################################|
    |                        FIREBASE CONFIG
    *##############################################################*/

    frbDb = FirebaseHandler.initialize();



    /*#############################################################|
    |                        LOADING NEW IMAGES
    *##############################################################*/


    //Load once when app is initialized
    FirebaseHandler.loadImages('once');


    /*#############################################################|
    |                        INSERTING NEW IMAGES
    *##############################################################*/

    $("#imgly-form").on("submit", function (e) {

        e.preventDefault();

        const newImageData = {
            url: $("#imgly-url").val(),
            caption: $("#imgly-caption").val(),
            time: Date.now()
        };

        console.log(newImageData);


        /* UX =========================================== */

        $("#imgly-url").val("");
        $("#imgly-caption").val("");
        $("#imgly-url").focus();

        /* SAVING TO FIREBASE =========================================== */

        //the data structure will be create on firebase child_added event

        FirebaseHandler.createImage(newImageData);




    });


});