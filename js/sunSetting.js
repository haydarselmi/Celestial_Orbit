////////////////////////// Creating the Sun ////////////////////////////

var uniforms = {

    "fogDensity": { value: 0},
    "fogColor": { value: new THREE.Vector3( 0, 0, 0 ) },
    "time": { value: 1.0 },
    "uvScale": { value: new THREE.Vector2( 3.0, 1.0 ) },
    "texture1": { value: loader.load( 'textures/cloud.png' ) },
    "texture2": { value: loader.load( 'textures/lavatile.jpg' ) }

};

uniforms[ "texture1" ].value.wrapS = uniforms[ "texture1" ].value.wrapT = THREE.RepeatWrapping;
uniforms[ "texture2" ].value.wrapS = uniforms[ "texture2" ].value.wrapT = THREE.RepeatWrapping;

const lavaMaterial = new THREE.ShaderMaterial( {

    uniforms: uniforms,
    vertexShader: document.getElementById( 'vertexShader' ).textContent,
    fragmentShader: document.getElementById( 'fragmentShader' ).textContent

} );

var sunGeometry = new THREE.SphereGeometry(20, 32, 32);
// var sunMaterial = new THREE.MeshBasicMaterial({
//     map: loader.load("textures/2k_sun.jpg"),
// });
var sunMesh = new THREE.Mesh(sunGeometry, lavaMaterial);
scene.add(sunMesh);
////////////////////////// Creating the Sun ////////////////////////////

///////////////////////// Adding the sunLight /////////////////////////

const sunLight = new THREE.PointLight(0xffffff, 2, 0);
sunLight.intensity = 0.7;
sunLight.castShadow = true;
sunLight.shadow.mapSize.width = 512; // default
sunLight.shadow.mapSize.height = 512; // default
sunLight.shadow.camera.near = 0.5; // default
sunLight.shadow.camera.far = 500; // default

scene.add(sunLight);

///////////////////////// Adding the sunLight /////////////////////////