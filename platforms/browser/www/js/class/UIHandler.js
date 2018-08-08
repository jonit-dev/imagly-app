class UIHandler {

    static renderCard(imageData) {

        let decorator = ` <div class="col-md-4">
                            <div class="card mb-4 shadow-sm">
                                <img class="card-img-top"
                                     src="media/${imageData.url}"
                                     alt="Card image cap">
                                <div class="card-body">
                           
                                    <p class="card-text">${imageData.caption}</p>
                                    <div class="d-flex justify-content-between align-items-center">
                                        <!--<div class="btn-group">-->
                                            <!--<button type="button" class="btn btn-sm btn-outline-secondary">View</button>-->
                                            <!--<button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>-->
                                        <!--</div>-->
                                        <small class="text-muted"></small>
                                    </div>
                                </div>
                            </div>
                        </div>`;

        // Prepend card to cards-list

        $(".cards-list").prepend(decorator);


    }


}