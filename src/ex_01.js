import * as THREE from 'three'
import { WEBGL } from './webgl'
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls.js'

if (WEBGL.isWebGLAvailable()) {
//////

    ///scene
  const scene = new THREE.Scene();
	// scene.background = new THREE.Color( 0xffffff );
  // scene.fog = new THREE.Fog( 0xffffff, 2000, 3500 );
    //camera
  const camera = new THREE.PerspectiveCamera( 50, window.innerWidth / window.innerHeight, 1, 10 );
	camera.position.z = 2;
    //renderer
	const renderer = new THREE.WebGLRenderer();
	renderer.setPixelRatio( window.devicePixelRatio );
	renderer.setSize( window.innerWidth, window.innerHeight );
	document.body.appendChild( renderer.domElement );

		// geometry
  const geometry = new THREE.InstancedBufferGeometry();
	
  const vector = new THREE.Vector4();

  const instances = 50000;

	const positions = [];
	const offsets = [];
	const colors = [];
	const orientationsStart = [];
	const orientationsEnd = [];
	
  positions.push( 0.025, - 0.025, 0 );
	positions.push( - 0.025, 0.025, 0 );
	positions.push( 0, 0, 0.025 );

	// instanced attributes

	for ( let i = 0; i < instances; i ++ ) {
			// offsets
		offsets.push( Math.random() - 0.5, Math.random() - 0.5, Math.random() - 0.5 );
			// colors
		colors.push( Math.random(), Math.random(), Math.random(), Math.random() );
			// orientation start
		vector.set( Math.random() * 2 - 1, Math.random() * 2 - 1, Math.random() * 2 - 1, Math.random() * 2 - 1 );
		vector.normalize();

		orientationsStart.push( vector.x, vector.y, vector.z, vector.w );

			// orientation end
		vector.set( Math.random() * 2 - 1, Math.random() * 2 - 1, Math.random() * 2 - 1, Math.random() * 2 - 1 );
		vector.normalize();

		orientationsEnd.push( vector.x, vector.y, vector.z, vector.w );
  };

	// geometry.instanceCount = instances; // set so its initalized for dat.GUI, will be set in first draw otherwise
	geometry.setAttribute( 'position', new THREE.Float32BufferAttribute( positions, 3 ) );
	geometry.setAttribute( 'offset', new THREE.InstancedBufferAttribute( new Float32Array( offsets ), 3 ) );
	geometry.setAttribute( 'color', new THREE.InstancedBufferAttribute( new Float32Array( colors ), 4 ) );
	geometry.setAttribute( 'orientationStart', new THREE.InstancedBufferAttribute( new Float32Array( orientationsStart ), 4 ) );
	geometry.setAttribute( 'orientationEnd', new THREE.InstancedBufferAttribute( new Float32Array( orientationsEnd ), 4 ) );

	// material
    
	const material = new THREE.RawShaderMaterial( {
    uniforms: {
      'time': { value: 1.0 },
			'sineTime': { value: 1.0 }
    },
		vertexShader: document.getElementById( 'vertexShader' ).textContent,
		fragmentShader: document.getElementById( 'fragmentShader' ).textContent,
		side: THREE.DoubleSide,
		forceSinglePass: true,
		transparent: true
  } );

	const mesh = new THREE.Mesh( geometry, material );
	scene.add( mesh );

  function animate() {
		requestAnimationFrame( animate );
		
    render();
	}

	function render() {

		const time = performance.now();
		
    const object = scene.children[ 0 ];
		
    object.rotation.y = time * 0.0005;
		object.material.uniforms[ 'time' ].value = time * 0.005;
		object.material.uniforms[ 'sineTime' ].value = Math.sin( object.material.uniforms[ 'time' ].value * 0.05 );

    renderer.render( scene, camera );
	}


	animate();

	function onWindowResize() {
		camera.aspect = window.innerWidth / window.innerHeight;
		camera.updateProjectionMatrix();
		renderer.setSize( window.innerWidth, window.innerHeight );
	};
  window.addEventListener( 'resize', onWindowResize );

//   //orbitcontrols
//   const controls = new OrbitControls(camera, renderer.domElement);
//   controls.minDistance = 20;
//   controls.maxDistance = 100;
//   controls.minPolarAngle = 1;
//   controls.maxPolarAngle = Math.PI / 1.5;
//   controls.update();

} else {
  var warning = WEBGL.getWebGLErrorMessage()
  document.body.appendChild(warning)
}
