///////////////// Creating the Moon ////////////////
var moonGeometry  = new THREE.SphereGeometry(2, 32, 32);
var moonMaterial  = new THREE.MeshPhongMaterial({
    map: loader.load("textures/moonmap1k.jpg"),
    bumpMap: loader.load("textures/moonbump1k.jpg"),
    bumpScale: 0.002,
});
var moonMesh = new THREE.Mesh(moonGeometry, moonMaterial);
moonMesh.position.x = -12;
moonMesh.castShadow = true;
moonMesh.receiveShadow = true;
///////////////// Creating the Moon ////////////////

//////////////// Lightning the Moon ///////////////

var moonLight = new THREE.SpotLight(0x00ff00, 0.6);
moonLight.shadow.mapSize.width = 1024;
moonLight.shadow.mapSize.height = 1024;
moonLight.distance = 20;
moonLight.target = earthMesh;
moonLight.angle = Math.PI / 4;

moonMesh.add(moonLight);

// const moonLightHelper = new THREE.SpotLightHelper(moonLight);
// scene.add(moonLightHelper);

//////////////// Lightning the Moon ///////////////