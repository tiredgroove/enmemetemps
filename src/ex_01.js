import * as THREE from 'three'
import { WEBGL } from './webgl'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls.js'

if (WEBGL.isWebGLAvailable()) {

  //background_skycube
  // const r = '3dimg/skyboxex/';
  // const urls = [
  //   r + 'px.png',
  //   r + 'nx.png',
  //   r + 'py.png',
  //   r + 'ny.png',
  //   r + 'pz.png',
  //   r + 'nz.png',
  // ];
  // const textureCube = new THREE.CubeTextureLoader().load(urls);
  // textureCube.mapping = THREE.CubeRefractionMapping;  
  //scene
  const scene = new THREE.Scene();
  // scene.background = textureCube;
  scene.background = new THREE.Color(0xffffff);
  // scene fog
  scene.fog = new THREE.FogExp2(0xB9A3E3, 0.005);


  //camera
  const camera = new THREE.PerspectiveCamera( 30, window.innerWidth / window.innerHeight, 0.1, 1000 );
  camera.position.z = 60;

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
  controls.maxDistance = 200;
  // controls.minPolarAngle = Math.PI / 6;
  // controls.maxPolarAngle = Math.PI / 1.5;
  controls.update();
  
  //skybox
  const skyMatArray = []
  const skyTexture_px = new THREE.TextureLoader().load('3dimg/skyboxex/px.png');
  const skyTexture_nx = new THREE.TextureLoader().load('3dimg/skyboxex/nx.png');
  const skyTexture_py = new THREE.TextureLoader().load('3dimg/skyboxex/py.png');
  const skyTexture_ny = new THREE.TextureLoader().load('3dimg/skyboxex/ny.png');
  const skyTexture_pz = new THREE.TextureLoader().load('3dimg/skyboxex/pz.png');
  const skyTexture_nz = new THREE.TextureLoader().load('3dimg/skyboxex/nz.png');
  skyMatArray.push(
    new THREE.MeshStandardMaterial({
      map: skyTexture_px,
    })
  )
  skyMatArray.push(
    new THREE.MeshStandardMaterial({
      map: skyTexture_nx,
    })
  )
  skyMatArray.push(
    new THREE.MeshStandardMaterial({
      map: skyTexture_py,
    })
  )
  skyMatArray.push(
    new THREE.MeshStandardMaterial({
      map: skyTexture_ny,
    })
  )
  skyMatArray.push(
    new THREE.MeshStandardMaterial({
      map: skyTexture_pz,
    })
  )
  skyMatArray.push(
    new THREE.MeshStandardMaterial({
      map: skyTexture_nz,
    })
  )

  for (let i = 0; i < 6; i++){
    skyMatArray[i].side = THREE.BackSide
  }

  const skyGeo = new THREE.BoxGeometry(500,500,500);
  // const skyMat = new THREE.MeshStandardMaterial({
  //   color: 0x333333,
  //   // map: skyTexture,
  // });
  // skyMat.side = THREE.BackSide;
  const sky = new THREE.Mesh(skyGeo, skyMatArray);
  scene.add(sky);



  //import light
  const lightsky = new THREE.PointLight(0xffffff, 1, 0);
  lightsky.position.set(0, 0, 0);
  scene.add(lightsky);


  const ambientLight = new THREE.AmbientLight( 0x000000 );
	scene.add( ambientLight );

	// const light1 = new THREE.PointLight( 0xffffff, 1, 0 );
	// light1.position.set( 0, 100, 0 );
	// scene.add( light1 );

	// const light2 = new THREE.PointLight( 0xffffff, 1, 0 );
	// light2.position.set( 100, 100, 100 );
	// scene.add( light2 );

	// const light3 = new THREE.PointLight( 0xffffff, 1, 0 );
	// light3.position.set( - 100, - 100, - 100 );
	// scene.add( light3 );

  //GLTF
  const loader = new GLTFLoader();
  loader.load('3dimg/feuilles.gltf',
  function( gltf ){
  //GLTFsize and position
  gltf.scene.scale.set(2, 2, 2);
  gltf.scene.position.set(0, -20, -10);
  //GLTFmaterial
  const mesh = gltf.scene.children[0];
  //GLTFconst material = new THREE.MeshPhysicalMaterial({
  const material = new THREE.MeshPhongMaterial({
    color: 0xcc7a85,    
    // envMap: textureCube,
    refractionRatio: 0.985,
    reflectivity: 0.9,
    emissive: 0xcc7a85,
    clearcoat: 0.3,
    roughness: 0.1,
    metalness: 0.5,    
  });
  mesh.material = material;
  //GLTF장면추가
  scene.add( gltf.scene );
  //GLTF내부에서 애니메이션
  function animate(){
  requestAnimationFrame(animate) //1초에 60번 실행됨.

  //GLTF회전
  gltf.scene.rotation.y += 0.001;
  renderer.render(scene,camera);  
  }
  animate();
  });

	//mesh
  const geometry01 = new THREE.TorusKnotGeometry( 5, 1 ,100 ,20 ,2 ,3 );
	const material01 = new THREE.MeshPhysicalMaterial( { 
    color: 0xcc7a85,
    emissive: 0xcc7a85,
    clearcoat: 0.3,
    roughness: 0.1,
    metalness: 0.5,
    reflectivity: 0.8,
    specular: 0xffffff,
  } );
	const obj01 = new THREE.Mesh( geometry01, material01 );
	obj01.position.x = 10;
  scene.add( obj01 );

	//mesh
  const geometry02 = new THREE.TorusKnotGeometry( 5, 1 ,100 ,20 ,2 ,3 );
	const material02 = new THREE.MeshPhysicalMaterial( { 
    color: 0xcc7a85,
    emissive: 0xcc7a85,
    clearcoat: 0.3,
    roughness: 0.1,
    metalness: 0.5,
    reflectivity: 0.7,
    specular: 0xffffff,

  } );
	const obj02 = new THREE.Mesh( geometry02, material02 );
	obj02.position.x = -10;
  scene.add( obj02 );
 
  //animation
	function animate() {
	requestAnimationFrame( animate );

	obj01.rotation.x += 0.001;
	obj01.rotation.y += 0.001;
	obj02.rotation.x += 0.001;
	obj02.rotation.y += 0.001;

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
