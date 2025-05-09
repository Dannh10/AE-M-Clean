const coordenadas = [21.100265, -101.690543];

const mapa = L.map('mapa').setView(coordenadas, 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; OpenStreetMap contributors'
}).addTo(mapa);

L.marker(coordenadas).addTo(mapa)
  .bindPopup('Aquí ofrecemos servicio')
  .openPopup();

L.circle(coordenadas, {
  color: 'blue',
  fillColor: '#3f8dfd',
  fillOpacity: 0.2,
  radius: 3000  
}).addTo(mapa);



