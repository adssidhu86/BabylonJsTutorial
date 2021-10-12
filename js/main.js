/// <reference path='./vendor/babylon.d.ts' />

//const { babylonjs } = ̥;


//get our canvas
const canvas = document.getElementById('renderCanvas');

//create a babylonjs engine 
const engine = new BABYLON.Engine(canvas, true);

function createScene(){
//create a scene 
const scene = new BABYLON.Scene(engine);


//create a camera 
//@param name= "camera1"
//const camera = new BABYLON.FreeCamera('camera',new BABYLON.Vector3(0,0,-10),scene);
const camera = new BABYLON.UniversalCamera('camera',,)
camera.attachControl(canvas,true);
//create a 

//const light = new BABYLON.HemisphericLight('light',new BABYLON.Vector3(0,1,0),scene);
//const light = new BABYLON.PointLight('light',new BABYLON.Vector3(0,5,0),scene);
const light = new BABYLON.DirectionalLight('light', new BABYLON.Vector3(5,-1,0),scene);

//create a box
const box =  BABYLON.MeshBuilder.CreateBox('box', {}, scene);
box.rotation.x =2;
box.rotation.x =0.5;
box.rotation.x =-0.7;

//create a sphere
const sphere =  BABYLON.MeshBuilder.CreateSphere('sphere',{
    segments : 35,
    diameter:2,
}, scene);
sphere.position = new BABYLON.Vector3(3,0,0);
sphere.scaling = new BABYLON.Vector3(0.5,0.5,0.5);
// create a plane 
const plane = BABYLON.MeshBuilder.CreatePlane('plane',{},scene);
plane.position= new BABYLON.Vector3(-3,0,0);

// create parametric shapes
// create a point 
const points = [
    new BABYLON.Vector3(2,0,0),
    new BABYLON.Vector3(2,1,1),
    new BABYLON.Vector3(2,1,0),
];

const lines = BABYLON.MeshBuilder.CreateLines('lines',{points},scene);

//create materials 
const material = new BABYLON.StandardMaterial('material',scene);
material.diffuseColor = new BABYLON.Color3(1,3,0);
material.emissiveColor =new BABYLON.Color3(0,1,0);
box.material= material;

const material2 = new BABYLON.StandardMaterial('material2',scene);
material2.diffuseTexture = new BABYLON.Texture('assets/images/dark_rock.png', scene);
sphere.material = material2;

return scene;
}




//create our scene 
const scene  = createScene();
engine.runRenderLoop(() => {
scene.render();
});