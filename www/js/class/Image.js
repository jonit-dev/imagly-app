images_list = [];

class Image {
    constructor(newImageData) {
        this.url = newImageData.url;
        this.caption = newImageData.caption;
        this.time = newImageData.time;
        images_list.push(this);
        Image.instances++;
    }


    static getImageList() {
        return images_list;
    }


    static numberOfImages() {
        return Image.instances;
    }
}

Image.instances = 0;