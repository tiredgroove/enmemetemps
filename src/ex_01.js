import * as THREE from 'three'
import { WEBGL } from './webgl'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls.js'

if (WEBGL.isWebGLAvailable()) {

  //scene
  const scene = new THREE.Scene();
  // scene.background = textureCube;
  scene.background = new THREE.Color(0xffffff);
  // scene fog
  // scene.fog = new THREE.FogExp2(0xffffff, 0.0025);


  //camera
  const camera = new THREE.PerspectiveCamera( 30, window.innerWidth / window.innerHeight, 0.1, 1000 );
  camera.position.z = 60;
  camera.position.x = 30;
  camera.position.y = 30;

  //renderer
	const renderer = new THREE.WebGLRenderer({ antialias: true });
	// renderer.setSize( window.innerWidth, window.innerHeight );
  renderer.setSize( window.innerWidth, window.innerHeight );
	//import
  renderer.outputEncoding = THREE.sRGBEncoding;
  document.body.appendChild( renderer.domElement );

  //orbitcontrols
  const controls = new OrbitControls(camera, renderer.domElement);
  controls.minDistance = 20;
  controls.maxDistance = 100;
  controls.minPolarAngle = 1;
  controls.maxPolarAngle = Math.PI / 1.5;
  controls.update();
  
  //skybox
  // const skyMatArray = []
  // const skyTexture_px = new THREE.TextureLoader().load('3dimg/skyboxex/px.png');
  // const skyTexture_nx = new THREE.TextureLoader().load('3dimg/skyboxex/nx.png');
  // const skyTexture_py = new THREE.TextureLoader().load('3dimg/skyboxex/py.png');
  // const skyTexture_ny = new THREE.TextureLoader().load('3dimg/skyboxex/ny.png');
  // const skyTexture_pz = new THREE.TextureLoader().load('3dimg/skyboxex/pz.png');
  // const skyTexture_nz = new THREE.TextureLoader().load('3dimg/skyboxex/nz.png');
  // skyMatArray.push(
  //   new THREE.MeshStandardMaterial({
  //     map: skyTexture_px,
  //   })
  // )
  // skyMatArray.push(
  //   new THREE.MeshStandardMaterial({
  //     map: skyTexture_nx,
  //   })
  // )
  // skyMatArray.push(
  //   new THREE.MeshStandardMaterial({
  //     map: skyTexture_py,
  //   })
  // )
  // skyMatArray.push(
  //   new THREE.MeshStandardMaterial({
  //     map: skyTexture_ny,
  //   })
  // )
  // skyMatArray.push(
  //   new THREE.MeshStandardMaterial({
  //     map: skyTexture_pz,
  //   })
  // )
  // skyMatArray.push(
  //   new THREE.MeshStandardMaterial({
  //     map: skyTexture_nz,
  //   })
  // )

  // for (let i = 0; i < 6; i++){
  //   skyMatArray[i].side = THREE.BackSide
  // }

  // const skyGeo = new THREE.BoxGeometry(500,500,500);
  // const sky = new THREE.Mesh(skyGeo, skyMatArray);
  // scene.add(sky);



  //import light
  // const lightsky = new THREE.PointLight(0xffffff, 1, 0);
  // lightsky.position.set(0, 0, 0);
  // scene.add(lightsky);

  const ambientLight = new THREE.AmbientLight( 0x000000, 1);
	scene.add( ambientLight );

/////////////////////////////////////////////
  //GLTF
  const loader = new GLTFLoader();
  loader.load('3dimg/feuilles.gltf',
  function( gltf ){
  gltf.scene.scale.set(2, 2, 2);
  gltf.scene.position.set(-5, -40, -10);
  const mesh = gltf.scene.children[0];
    const material = new THREE.MeshBasicMaterial({
    color: 0xf71b6c,
    // transparent: true,
    // opacity: 0.7,
  });
  mesh.material = material;
  scene.add( gltf.scene );

  function animate(){
  requestAnimationFrame(animate)
  //GLTF회전
  gltf.scene.rotation.y += 0.001;
  renderer.render(scene,camera);  
  }
  animate();
  });

  //GLTF01
  const loader01 = new GLTFLoader();
  loader01.load('3dimg/feuilles.gltf',
  function( gltf01 ){
  gltf01.scene.scale.set(2, 2, 2);
  gltf01.scene.position.set(5, -30, -20);
  const mesh01 = gltf01.scene.children[0];
  const material01 = new THREE.MeshBasicMaterial({
    color: 0xffed2b,
    // transparent: true,
    // opacity: 0.7,
  });
  mesh01.material = material01;
  scene.add( gltf01.scene );

  function animate(){
  requestAnimationFrame(animate)
  //GLTF회전
  gltf01.scene.rotation.y += 0.001;
  renderer.render(scene,camera);  
  }
  animate();
  });

  //GLTF02
  const loader02 = new GLTFLoader();
  loader02.load('3dimg/feuilles.gltf',
  function( gltf02 ){
  gltf02.scene.scale.set(2, 2, 2);
  gltf02.scene.position.set(10, -20, 0);
  const mesh02 = gltf02.scene.children[0];
  const material02 = new THREE.MeshBasicMaterial({
    color: 0x4fffe2,
    // transparent: true,
    // opacity: 0.7,    
  });
  mesh02.material = material02;
  scene.add( gltf02.scene );

  function animate(){
  requestAnimationFrame(animate)
  //GLTF회전
  gltf02.scene.rotation.y -= 0.001;
  renderer.render(scene,camera);  
  }
  animate();
  });

  //GLTF03
  const loader03 = new GLTFLoader();
  loader03.load('3dimg/feuilles.gltf',
  function( gltf03 ){
  gltf03.scene.scale.set(2.2, 2.2, 2.2);
  gltf03.scene.position.set(-15, -25, 5);
  const mesh03 = gltf03.scene.children[0];
  const material03 = new THREE.MeshBasicMaterial({
    color: 0x1543c2,
    // transparent: true,
    // opacity: 0.7,    
  });
  mesh03.material = material03;
  scene.add( gltf03.scene );

  function animate(){
  requestAnimationFrame(animate)
  //GLTF회전
  gltf03.scene.rotation.y -= 0.001;
  renderer.render(scene,camera);  
  }
  animate();
  });

  //GLTF04
  const loader04 = new GLTFLoader();
  loader04.load('3dimg/feuilles.gltf',
  function( gltf04 ){
  gltf04.scene.scale.set(3, 3, 3);
  gltf04.scene.position.set(-10, -30, -15);
  const mesh04 = gltf04.scene.children[0];
  const material04 = new THREE.MeshBasicMaterial({
    color: 0xfaf0d2,
    // transparent: true,
    // opacity: 0.7,    
  });
  mesh04.material = material04;
  scene.add( gltf04.scene );

  function animate(){
  requestAnimationFrame(animate)
  //GLTF회전
  gltf04.scene.rotation.y -= 0.001;
  renderer.render(scene,camera);  
  }
  animate();
  });

  //GLTF05
  const loader05 = new GLTFLoader();
  loader05.load('3dimg/feuilles.gltf',
  function( gltf05 ){
  gltf05.scene.scale.set(3, 3, 3);
  gltf05.scene.position.set(5, -30, -25);
  const mesh05 = gltf05.scene.children[0];
  const material05 = new THREE.MeshBasicMaterial({
    color: 0x4d9659,
    // transparent: true,
    // opacity: 0.7,    
  });
  mesh05.material = material05;
  scene.add( gltf05.scene );

  function animate(){
  requestAnimationFrame(animate)
  //GLTF회전
  gltf05.scene.rotation.y -= 0.001;
  renderer.render(scene,camera);  
  }
  animate();
  });
///////////////////////////////////////
  //animation
	function animate() {
	requestAnimationFrame( animate );

  controls.update();

  renderer.render( scene, camera );
	}

	animate();

  //반응형
  function onWindowResize(){
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  }
  window.addEventListener('resize', onWindowResize);


} else {
  var warning = WEBGL.getWebGLErrorMessage()
  document.body.appendChild(warning)
}
