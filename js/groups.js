var earthMoonGroup = new THREE.Group();

earthMoonGroup.add( earthMesh );
earthMoonGroup.add( moonMesh );
scene.add(earthMoonGroup);

earthMoonGroup.position.x = -60;

solarSystemGroup = new THREE.Group();
solarSystemGroup.add(earthMoonGroup);
solarSystemGroup.add(sunLight);

scene.add(solarSystemGroup);