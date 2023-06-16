///////////// Creating the Earth ////////////

var earthGeometry  = new THREE.SphereGeometry(5, 32, 32);
var earthMaterial  = new THREE.MeshPhongMaterial({
    map: loader.load("textures/earthmap1k.jpg"),
    bumpMap: loader.load("textures/earthbump1k.jpg"),
    bumpScale: 0.05,
    specularMap: loader.load("textures/earthspec1k.jpg"),
    specular: new THREE.Color('grey')
});
var earthMesh = new THREE.Mesh(earthGeometry, earthMaterial);
// Earth inclined 7 Deg
earthMesh.rotation.z = 7 * (Math.PI / 180);	
earthMesh.castShadow = true;
earthMesh.receiveShadow = true;

////////////// Creating the Earth ////////				

////////////// Creating Earth Cloud Layer /////////////				

// Creating the destination canvas
// create destination canvas
var canvasResult	= document.createElement('canvas')
canvasResult.width	= 1024
canvasResult.height	= 512
var contextResult	= canvasResult.getContext('2d')		

// load earthcloudmap
var imageMap	= new Image();
imageMap.addEventListener("load", function() {
    
    // create dataMap ImageData for earthcloudmap
    var canvasMap	= document.createElement('canvas')
    canvasMap.width	= imageMap.width
    canvasMap.height= imageMap.height
    var contextMap	= canvasMap.getContext('2d')
    contextMap.drawImage(imageMap, 0, 0)
    var dataMap	= contextMap.getImageData(0, 0, canvasMap.width, canvasMap.height)

    // load earthcloudmaptrans
    var imageTrans	= new Image();
    imageTrans.addEventListener("load", function(){
        // create dataTrans ImageData for earthcloudmaptrans
        var canvasTrans		= document.createElement('canvas')
        canvasTrans.width	= imageTrans.width
        canvasTrans.height	= imageTrans.height
        var contextTrans	= canvasTrans.getContext('2d')
        contextTrans.drawImage(imageTrans, 0, 0)
        var dataTrans		= contextTrans.getImageData(0, 0, canvasTrans.width, canvasTrans.height)
        // merge dataMap + dataTrans into dataResult
        var dataResult		= contextMap.createImageData(canvasMap.width, canvasMap.height)
        for(var y = 0, offset = 0; y < imageMap.height; y++){
            for(var x = 0; x < imageMap.width; x++, offset += 4){
                dataResult.data[offset+0]	= dataMap.data[offset+0]
                dataResult.data[offset+1]	= dataMap.data[offset+1]
                dataResult.data[offset+2]	= dataMap.data[offset+2]
                dataResult.data[offset+3]	= 255 - dataTrans.data[offset+0]
            }
        }
        // update texture with result
        contextResult.putImageData(dataResult,0,0)	
        cloudMaterial.map.needsUpdate = true;
    })
    imageTrans.src	= 'textures/earthcloudmaptrans.jpg';
}, false);
imageMap.src	= 'textures/earthcloudmap.jpg';

var cloudGeometry	= new THREE.SphereGeometry(5.15, 32, 32)
var cloudMaterial	= new THREE.MeshPhongMaterial({
    map		: new THREE.Texture(canvasResult),
    side		: THREE.DoubleSide,
    transparent	: true,
    opacity		: 0.8,
})
var cloudMesh	= new THREE.Mesh(cloudGeometry, cloudMaterial)

earthMesh.add(cloudMesh);	
////////////// Creating Earth Cloud Layer /////////////				