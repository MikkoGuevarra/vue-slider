var app = new Vue({
    el : '#root',
    data: {
        index: 0,
        images: [
            'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRP_R1stInxAtu-UPCTSYAyPZOqp_Bx78cOjQ&usqp=CAU',
            'https://eskipaper.com/images/cool-car-wallpaper-7.jpg',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSXlIfojJ-EdvqO0YsZOTqCenQNDPK0ukSJwg&usqp=CAU',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcThwpG4N2BYXE8zDXyTb7oo48wht07qj6T9bA&usqp=CAU'
        ]

    },
    methods: {
        nextImg() {
            this.index += 1;
            if (this.index >= this.images.length) {
                this.index = 0;

            }
        },
        prevImg() {
            this.index -= 1;
            if (this.index < 0) {
                this.index = this.images.length -1;

            }
        }
    }
});
