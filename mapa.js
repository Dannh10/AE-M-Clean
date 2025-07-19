const coordenadas = [21.100265, -101.690543]; 
const mapa = L.map('mapa').setView(coordenadas, 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(mapa);

const icono = L.divIcon({
    className: 'pulse-marker',
    html: '<div style="background-color: #0d6efd; width: 20px; height: 20px; border-radius: 50%; border: 3px solid white; box-shadow: 0 0 10px rgba(0,0,0,0.5);"></div>',
    iconSize: [24, 24]
});

L.marker(coordenadas, { icon: icono }).addTo(mapa)
    .bindPopup('<b>AE&M Clean</b><br>Aquí ofrecemos servicio')
    .openPopup();

L.circle(coordenadas, {
    color: '#0d6efd',
    fillColor: '#0d6efd',
    fillOpacity: 0.2,
    radius: 3000 
}).addTo(mapa);
