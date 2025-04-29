new p5(function(p) {
    p.setup = function() {
        let canvas = p.createCanvas(300, 300);
        canvas.parent('sketch1');
    }

    p.draw = function() {
        p.background(220);
        // Your p5.js code here
    }
});
