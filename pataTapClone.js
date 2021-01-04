// **  this code is for a line  **

// // Create a Paper.js Path to draw a line into it:
// var path = new Path();
// // Give the stroke a color
// path.strokeColor = 'red';
// var start = new Point(0, 0);
// // Move to start and draw a line from there
// path.moveTo(start);
// // Note the plus operator on Point objects.
// // PaperScript does that for us, and much more!
// path.lineTo(start + [ 100000, 50000 ]);

//for text to disappear
var text = new PointText ({
    point: view.center,
    content: 'Press any key from A-Z and turn up speakers',
    justification: 'center',
    fontSize: 15,
    fillColor: 'white'
});

//empty array of circles
var circles = [];

function onKeyDown(event) {
    async: true;
	if(keyData[event.key]) {
        // When a key is pressed, set the content of the text item:
    text.visible = false;

    //maximum point for the device 
    var maxPoint = new Point(view.size.width, view.size.height);
    //for genertaing random points
    var randomPoint = Point.random();
    var point = maxPoint * randomPoint;

    // copied code of ** circle **
    circle = new Path.Circle(new Point(point, point), 500);
    //for random color
    circle.fillColor = Color.random();
    keyData[event.key].sound.play();
    circles.push(circle);
    console.log(circles.length);
    } else {
        alert("only A-Z");
    }
}

//function for the animation of circles
function onFrame(event) {
    for(var i=0;i<circles.length;i++) {
        circles[i].fillColor.hue += 1;
        circles[i].scale(0.9);
    }
}

//sounds for keys

keyData = {
    a: {
        sound: new Howl({
            src: ['Sounds/bubbles.mp3']
        })
    },
    b: {
        sound: new Howl({
            src: ['Sounds/clay.mp3']
        })
    },
    c: {
        sound: new Howl({
            src: ['Sounds/squiggle.mp3']
        })
    },
    d: {
        sound: new Howl({
            src: ['Sounds/strike.mp3']
        })
    },
    e: {
        sound: new Howl({
            src: ['Sounds/suspension.mp3']
        })
    },
    f: {
        sound: new Howl({
            src: ['Sounds/timer.mp3']
        })
    },
    g: {
        sound: new Howl({
            src: ['Sounds/ufo.mp3']
        })
    },
    h: {
        sound: new Howl({
            src: ['Sounds/veil.mp3']
        })
    },
    i: {
        sound: new Howl({
            src: ['Sounds/moon.mp3']
        })
    },
    j: {
        sound: new Howl({
            src: ['Sounds/glimmer.mp3']
        })
    },
    k: {
        sound: new Howl({
            src: ['Sounds/flash-3.mp3']
        })
    },
    l: {
        sound: new Howl({
            src: ['Sounds/flash-2.mp3']
        })
    },
    m: {
        sound: new Howl({
            src: ['Sounds/flash-1.mp3']
        })
    },
    n: {
        sound: new Howl({
            src: ['Sounds/dotted-spiral.mp3']
        })
    },
    o: {
        sound: new Howl({
            src: ['Sounds/confetti.mp3']
        })
    },
    p: {
        sound: new Howl({
            src: ['Sounds/corona.mp3']
        })
    },
    q: {
        sound: new Howl({
            src: ['Sounds/wipe.mp3']
        })
    },
    r: {
        sound: new Howl({
            src: ['Sounds/zig-zag.mp3']
        })
    },
    s: {
        sound: new Howl({
            src: ['Sounds/splits.mp3']
        })
    },
    t: {
        sound: new Howl({
            src: ['Sounds/prism-3.mp3']
        })
    },
    u: {
        sound: new Howl({
            src: ['Sounds/prism-2.mp3']
        })
    },
    v: {
        sound: new Howl({
            src: ['Sounds/prism-1.mp3']
        })
    },
    w: {
        sound: new Howl({
            src: ['Sounds/piston-3.mp3']
        })
    },
    x: {
        sound: new Howl({
            src: ['Sounds/piston-2.mp3']
        })
    },
    y: {
        sound: new Howl({
            src: ['Sounds/piston-1.mp3']
        })
    },
    z: {
        sound: new Howl({
            src: ['Sounds/pinwheel.mp3']
        })
    }
}