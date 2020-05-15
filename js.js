//Muốn tạo 1 đối tượng hình tròn thì ta tạo lớp hình tròn trước:
function Circle (x,y,radius,) {                                             // Đây là cách tạo ra 1 lớp hình tròn
    this.x = x;
    this.y = y;
    this.radius = radius;                                                  // Tạo thuộc tính của đối tượng đó là radius

}
function painCircle () {
    let red = Math.floor(Math.random() * 254);
    let blue = Math.floor(Math.random() * 254);
    let green = Math.floor(Math.random() * 254);
    return  "rgb(" + red + " , " + blue + " , " + green + ")";

}
function veCircle () {
    let ctx = document.getElementById("myCanvas").getContext("2d");
    let radius = Math.floor(Math.random() * 200);
    let x = Math.floor(Math.random() * window.innerWidth);
    let y = Math.floor(Math.random() * window.innerHeight);
    let circle = new Circle(x,y,radius);
    let color = painCircle();
    ctx.beginPath();
    ctx.arc(circle.x,circle.y,circle.radius, 0, Math.PI *2);
    ctx.fillStyle = color;
    ctx.fill();
    ctx.closePath();
}
let moveColor;
function creatCircle() {
    for (let i = 0; i < 999; i++) {
        for (let j = 0; j < 999 ; j++) {
            moveColor = setTimeout(veCircle,50);
        }
    }
}
creatCircle()
