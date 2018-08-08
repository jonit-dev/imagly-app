class FirebaseHandler {

    static initialize() {

        // Initialize Firebase
        var config = {
            apiKey: "AIzaSyAUyIO9c6RAf5QuJCoV5xTEoS9rx7f8jwQ",
            authDomain: "final-exam-wmdd-js.firebaseapp.com",
            databaseURL: "https://final-exam-wmdd-js.firebaseio.com",
            projectId: "final-exam-wmdd-js",
            storageBucket: "final-exam-wmdd-js.appspot.com",
            messagingSenderId: "414999390063"
        };
        firebase.initializeApp(config);

        return firebase.database();
    }

    static createImage(ImageData) {
        
        console.log(`Saving into database....`);
        console.log(ImageData);

        frbDb.ref('images/').push(ImageData);

    }

    static loadImages(type) {

        //refresh everything

        $(".cards-list").innerHTML = ""; //refresh container html
        images_list = [];


                frbDb.ref('images/').on('child_added', function (snapshot) {


                    let loadedImage = snapshot.val();

                    let loadedImageData = {
                        url: loadedImage.url,
                        caption: loadedImage.caption,
                        time: loadedImage.time
                    };

                    // Create data structure

                    let newImage = new Image(loadedImageData);


                    // Render it!

                    UIHandler.renderCard(loadedImageData);


                }, function (error) {
                    console.log('An error happened while trying to read your data.');
                    console.log(error.code);
                });

        }




}