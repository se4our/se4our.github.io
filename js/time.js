window.addEventListener("load", function () {
    class Time {
        constructor (year, day, month, hours, min, sec) {
            this.year = year;
            this.day = day;
            this.month = month;
            this.hours = hours;
            this.min = min;
            this.sec = sec;
        }
        next() {
            if (this.hours === 23 && this.min === 59 && this.sec === 59) {
                if (this.month % 2 === 0 && this.month !== 2 && this.day !== 30) this.day = this.day + 1;
                if (this.month % 2 === 1 && this.day !== 31) this.day = this.day + 1;
                if (this.month % 2 === 0 && this.month !== 2 && this.day === 30 && this.month !== 12) {
                    this.day = 1;
                    this.month = this.month + 1;
                }
                if (this.month % 2 === 1 && this.day === 31 && this.month !== 12) {
                    this.day = 1;
                    this.month = this.month + 1;
                }
                if (this.month % 2 === 0 && this.month !== 2 && this.day === 30 && this.month === 12) {
                    this.day = 1;
                    this.month = 1;
                    this.year = this.year + 1;
                }
                if (this.month % 2 === 1 && this.day === 30 && this.month === 12) {
                    this.day = 1;
                    this.month = 1;
                    this.year = this.year + 1;
                }
                if (this.month === 2 && this.year % 4 === 1 && this.day !== 28) this.day = this.day + 1;
                if (this.month === 2 && this.year % 4 === 0 && this.day !== 29) this.day = this.day + 1;
                if (this.month === 2 && this.year % 4 === 1 && this.day === 28) {
                    this.day = 1;
                    this.month = this.month + 1;
                }
                if (this.month === 2 && this.year % 4 === 0 && this.day === 29) {
                    this.day = 1;
                    this.month = this.month + 1;
                }
            }
            else {
                if (this.hours === 23 && this.min === 59 && this.sec !== 59) this.sec = this.sec + 1;
                if (this.hours === 23 && this.min !== 59 && this.sec === 59) {
                    this.sec = 0;
                    this.min = this.min + 1;
                }
                if (this.hours !== 23 && this.min === 59 && this.sec === 59) {
                    this.sec = 0;
                    this.min = 0;
                    this.hours = this.hours + 1;
                }
            }
        }
    }
    let date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let hours = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();
    let time = new Time(day, month, year, hours, min, sec);
});