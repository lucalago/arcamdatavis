mapboxgl.accessToken = 'pk.eyJ1IjoibHVjYWtsIiwiYSI6ImNraDRuaHVuNTA3aWUyc21sYzAwdmtmNGMifQ.U02bMlEy5L94bvhJgesVog';
var map = new mapboxgl.Map({
container: 'map',
style: 'mapbox://styles/mapbox/light-v10',
center: [12.338, 45.4385],
zoom: 17.4
});
 
var swatches = document.getElementById('swatches');
var layer = document.getElementById('layer');
var colors = [
'#ffffcc',
'#a1dab4',
'#41b6c4',
'#2c7fb8',
'#253494',
'#fed976',
'#feb24c',
'#fd8d3c',
'#f03b20',
'#bd0026'
];
 
colors.forEach(function (color) {
var swatch = document.createElement('button');
swatch.style.backgroundColor = color;
swatch.addEventListener('click', function () {
map.setPaintProperty(layer.value, 'fill-color', color);
});
swatches.appendChild(swatch);
});