function init() {
    let scene = new THREE.Scene();

    let box = getBox(1,1,1, 0x777700);
    let plane = getPlane(3, 0xffff00);

    plane.name = "plane-1";
    plane.rotation.x = Math.PI/2;

    plane.add(box);
    scene.add(plane);

    let camera = new THREE.PerspectiveCamera(
        45,
        window.innerWidth / window.innerHeight,
        1,
        1000
    );

    camera.position.x = 1;
    camera.position.y = 2;
    camera.position.z = 5;

    camera.lookAt(new THREE.Vector3(0,0,0));

    let renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.querySelector('#webgl').appendChild(renderer.domElement);
    update(renderer, scene, camera);

    return scene;
}

function getBox(w, h, d, c) {

    let geometry = new THREE.BoxGeometry(w, h, d);
    let material = new THREE.MeshBasicMaterial({
        color: c
    });

    let mesh = new THREE.Mesh( geometry, material );
    return mesh;
}

function getPlane(size, c) {
    let geometry = new THREE.PlaneGeometry(size, size);
    let material = new THREE.MeshBasicMaterial({
        color: c,
        side: THREE.DoubleSide
    });

    let mesh = new THREE.Mesh( geometry, material );

    return mesh;
}

function update(renderer, scene, camera) {
    renderer.render(scene, camera);

    let plane = scene.getObjectByName('plane-1');
    plane.rotation.x += 0.05;
    plane.rotation.y -= 0.02;
    plane.rotation.z += 0.03;

    requestAnimationFrame( function() {
        update(renderer, scene, camera)
    });
}

let scene = init();
