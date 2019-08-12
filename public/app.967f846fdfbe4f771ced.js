!function(e){var t={};function i(n){if(t[n])return t[n].exports;var a=t[n]={i:n,l:!1,exports:{}};return e[n].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=e,i.c=t,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)i.d(n,a,function(t){return e[t]}.bind(null,a));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i(i.s=1)}([function(e,t,i){"use strict";i.d(t,"a",function(){return a});i(3);function n(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var a=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,i,a;return t=e,(i=[{key:"init",value:function(){this.ambientLightColor=16777215,this.backgroundColor="#ffffff",this.spotLightColor=16777215,this.gridSize=14,this.col=this.gridSize,this.row=this.gridSize,this.shapes=[],this.gui=new dat.GUI,this.angle=0,this.velocity=.05,this.amplitude=-1,this.frequency=0,this.waveLength=300,this.scene=new THREE.Scene,this.camera=new THREE.PerspectiveCamera(30,window.innerWidth/window.innerHeight,1,1e3),this.camera.position.set(-20.19,23.52,-18.76),this.addRenderer(),this.controls=new THREE.OrbitControls(this.camera,this.renderer.domElement),this.addAmbientLight(),this.addSpotLight(),this.addGrid(),this.addTowerMaterials(),this.addCenterTower(),this.addTowers(),this.addGUIControls(),this.animate(),window.addEventListener("resize",this.onResize.bind(this))}},{key:"addTowerMaterials",value:function(){this.topMaterialProps={color:"#1affa0",emissive:"#000000"},this.insideMaterialProps={color:"#1535cd",emissive:"#3e1d1d"},this.topMaterial=new THREE.MeshStandardMaterial(this.topMaterialProps),this.insideMaterial=new THREE.MeshStandardMaterial(this.insideMaterialProps)}},{key:"addCenterTower",value:function(){var e=[this.insideMaterial,this.insideMaterial,this.topMaterial,this.insideMaterial,this.insideMaterial,this.insideMaterial],t=new THREE.BoxGeometry(1,1,1),i=new THREE.Mesh(t,e);i.position.y=.5;var n=new THREE.Object3D;n.size=1,n.add(i),this.shapes.push(n),this.scene.add(n)}},{key:"addTowers",value:function(){for(var e={steps:1,depth:1,bevelEnabled:!1},t=[this.topMaterial,this.insideMaterial],i=1;i<4;i++)this.shapes.push(this.createSet(e,t,i,i>1?i-1:0)),this.scene.add(this.shapes[i])}},{key:"hexToRgbTreeJs",value:function(e){var t=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);return t?{r:parseInt(t[1],16)/255,g:parseInt(t[2],16)/255,b:parseInt(t[3],16)/255}:null}},{key:"createSet",value:function(e,t){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:0;this.floorShape=this.createShape(i,a),this.createHole(this.floorShape,i,n);var r=new THREE.ExtrudeGeometry(this.floorShape,e),o=this.createRectangle(r,t);o.position.set(0,0,0),o.position.y=1;var s=new THREE.Object3D;return s.size=i,s.add(o)}},{key:"createShape",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,i=e;t&&(i=t);var n=[new THREE.Vector2(-i,i),new THREE.Vector2(-i,-i),new THREE.Vector2(i,-i),new THREE.Vector2(i,i)],a=new THREE.Shape(n);return a.autoClose=!0,a}},{key:"createHole",value:function(e,t){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,n=new THREE.Path,a=.5*t;i&&(a=i),n.moveTo(-a,-a),n.lineTo(a,-a),n.lineTo(a,a),n.lineTo(-a,a),n.autoClose=!1,e.holes.push(n)}},{key:"createRectangle",value:function(e,t){var i=new THREE.Mesh(e,t);return i.needsUpdate=!0,i.rotation.set(.5*Math.PI,0,0),i}},{key:"addGUIControls",value:function(){var e=this;this.gui.addFolder("Background").addColor(this,"backgroundColor").onChange(function(e){document.body.style.backgroundColor=e});var t=this.gui.addFolder("Top Material");t.addColor(this.topMaterialProps,"color").onChange(function(t){e.topMaterial.color=e.hexToRgbTreeJs(t)}),t.addColor(this.topMaterialProps,"emissive").onChange(function(t){e.topMaterial.emissive=e.hexToRgbTreeJs(t)});var i=this.gui.addFolder("Inside Material");i.addColor(this.insideMaterialProps,"color").onChange(function(t){e.insideMaterial.color=e.hexToRgbTreeJs(t)}),i.addColor(this.insideMaterialProps,"emissive").onChange(function(t){e.insideMaterial.emissive=e.hexToRgbTreeJs(t)});var n=this.gui.addFolder("Wave");n.add(this,"amplitude",-1,0),n.add(this,"velocity",0,.2),n.add(this,"waveLength",150,500)}},{key:"addRenderer",value:function(){this.renderer=new THREE.WebGLRenderer({antialias:!0,alpha:!0}),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=THREE.PCFSoftShadowMap,this.renderer.setSize(window.innerWidth,window.innerHeight),document.body.appendChild(this.renderer.domElement)}},{key:"addAmbientLight",value:function(){var e=new THREE.AmbientLight(this.ambientLightColor,1);this.scene.add(e)}},{key:"addSpotLight",value:function(){this.spotLight=new THREE.SpotLight(this.spotLightColor),this.spotLight.position.set(-100,200,100),this.spotLight.castShadow=!0,this.scene.add(this.spotLight)}},{key:"drawWave",value:function(){for(var e=0;e<this.shapes.length;e++){var t=this.distance(this.shapes[e].position.x+e,this.shapes[e].position.z+e,.5*this.row,.5*this.col),i=this.map(t,0,this.waveLength,-100,100),n=this.angle+i;this.shapes[e].scale.y=this.map(Math.sin(n),-1,-this.amplitude,0,20/this.shapes[e].size*.3)}this.angle-=this.velocity}},{key:"distance",value:function(e,t,i,n){return Math.sqrt(Math.pow(e-i,2)+Math.pow(t-n,2))}},{key:"map",value:function(e,t,i,n,a){return(e-t)/(i-t)*(a-n)+n}},{key:"addGrid",value:function(){var e=this.gridSize,t=this.gridSize,i=new THREE.GridHelper(e,t);i.position.set(0,0,0),i.material.opacity=.3,i.material.transparent=!0,this.scene.add(i)}},{key:"animate",value:function(){this.drawWave(),this.controls.update(),this.renderer.render(this.scene,this.camera),requestAnimationFrame(this.animate.bind(this))}},{key:"onResize",value:function(){var e=window.innerWidth,t=window.innerHeight;this.camera.aspect=e/t,this.camera.updateProjectionMatrix(),this.renderer.setSize(e,t)}}])&&n(t.prototype,i),a&&n(t,a),e}()},function(e,t,i){"use strict";i.r(t),function(e){var t=i(0),n=new t.a;n.init()}.call(this,i(2)(e))},function(e,t){e.exports=function(e){if(!e.webpackPolyfill){var t=Object.create(e);t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),Object.defineProperty(t,"exports",{enumerable:!0}),t.webpackPolyfill=1}return t}},function(e,t,i){}]);