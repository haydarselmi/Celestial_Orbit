var skySphereGeometry = new THREE.SphereGeometry(1000, 1000, 1000);
var SkySphereMaterial = new THREE.MeshBasicMaterial({
    map: loader.load("textures/2k_stars.jpg"),
    side: THREE.DoubleSide,
});
var skySphereMesh = new THREE.Mesh(skySphereGeometry, SkySphereMaterial);
scene.add(skySphereMesh);