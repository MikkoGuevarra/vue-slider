var app = new Vue({
    el : '#root',
    data: {
        index: 0,
        images: [
            'https://wallpapercave.com/wp/wp2367468.jpg',
            'https://eskipaper.com/images/cool-car-wallpaper-7.jpg',
            'https://wallpaperaccess.com/full/339249.jpg',
            'https://wallpaperaccess.com/full/124131.jpg'
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
        },
        moveForward() {
            clock = setInterval(() => {
                this.nextImg()

            }, 4000)
        },
        clear() {
            clearInterval(clock)
        },
        //creo funzione con parametro 'index' in cui associa index corrente del click
        dotClick(index) {
            this.index = index;
        }

    },
    created() {
        this.moveForward();
    }
});
