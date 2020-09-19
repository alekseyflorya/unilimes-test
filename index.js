
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );

renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.basicShadowMap;

document.body.appendChild( renderer.domElement );

controls = new THREE.OrbitControls (camera, renderer.domElement);

  controls.enableDamping = true;
  controls.dampingFactor = 0.25;
  controls.enableZoom = true;
  controls.autoRotate = true;

const animate = () => {
  controls.update();
  requestAnimationFrame( animate );
  cylinder.rotation.x += 0.01;
  cylinder.rotation.y += 0.01;
  renderer.render( scene, camera );
}

const renderCube = () => {
  scene.remove.apply(scene, scene.children);

  const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
  scene.add( ambientLight );

  const light = new THREE.SpotLight( 0xffffff, 0.8, 18 );
  light.position.set(-3, 6, -3);
  light.castShadow = true;
  light.shadow.camera.near = 0.1;
  light.shadow.camera.far = 25;

  scene.add( light );


  const geometry = new THREE.BoxGeometry();
  const material = new THREE.MeshPhongMaterial( { color: 0x00fa10 } );
  const cube = new THREE.Mesh( geometry, material );
  scene.add( cube );

  cube.castShadow = true;
  cube.receiveShadow = false;

  camera.position.z = 5;

  const animate = () => {
    controls.update();
    requestAnimationFrame(animate);
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    renderer.render( scene, camera );
  }

  animate();
};

const renderSphere = () => {
  scene.remove.apply(scene, scene.children);

  const geometry = new THREE.SphereBufferGeometry();
  const material = new THREE.MeshPhongMaterial( {color: 0x00ff00} );
  const sphere = new THREE.Mesh( geometry, material );

  const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
  scene.add( ambientLight );

  const light = new THREE.SpotLight( 0xffffff, 0.8, 18 );
  light.position.set(-3, 6, -3);
  light.castShadow = true;
  light.shadow.camera.near = 0.1;
  light.shadow.camera.far = 25;

  scene.add( light );

  sphere.castShadow = true;
  sphere.receiveShadow = false;

  scene.add( sphere );

  camera.position.z = 5;

  const animate = () => {
    controls.update();
    requestAnimationFrame( animate );
    sphere.rotation.x += 0.01;
    sphere.rotation.y += 0.01;
    renderer.render( scene, camera );
  }

  animate();
}

const renderCylinder = () => {
  scene.remove.apply(scene, scene.children);

  const ambientLight = new THREE.AmbientLight(0xffffff, 0.2);
  scene.add( ambientLight );

  const light = new THREE.SpotLight( 0xffffff, 0.8, 18 );
  light.position.set(-3, 6, -3);
  light.castShadow = true;
  light.shadow.camera.near = 0.1;
  light.shadow.camera.far = 25;

  scene.add( light );

  const geometry = new THREE.CylinderBufferGeometry(  );
  const material = new THREE.MeshPhongMaterial( {color: 0x00ff00} );
  const cylinder = new THREE.Mesh( geometry, material );

  cylinder.castShadow = true;
  cylinder.receiveShadow = false;

  scene.add( cylinder );

  camera.position.z = 5;

  const animate = () => {
    controls.update();
    requestAnimationFrame( animate );
    sphere.rotation.x += 0.01;
    sphere.rotation.y += 0.01;
    renderer.render( scene, camera );
  }

  animate();
}

const renderCubeBtn = document.querySelector('#cube');

renderCubeBtn.addEventListener('click', () => {
  renderCube();
});

renderSphereBtn = document.querySelector('#sphere');

renderSphereBtn.addEventListener('click', () => {
  renderSphere();
});

renderRingBtn = document.querySelector('#cylinder');

renderRingBtn.addEventListener('click', () => {
  renderCylinder();
});