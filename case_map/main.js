window.app = {};
var sidebar = new ol.control.Sidebar({ element: 'sidebar', position: 'right' });

var projection = ol.proj.get('EPSG:3857');
var projectionExtent = projection.getExtent();
var size = ol.extent.getWidth(projectionExtent) / 256;
var resolutions = new Array(20);
var matrixIds = new Array(20);
var clickedCoordinate, populationLayer, gPopulation;
for (var z = 0; z < 20; ++z) {
    // generate resolutions and matrixIds arrays for this WMTS
    resolutions[z] = size / Math.pow(2, z);
    matrixIds[z] = z;
}

var baseLayer = new ol.layer.Tile({
    source: new ol.source.WMTS({
        matrixSet: 'EPSG:3857',
        format: 'image/png',
        url: 'http://wmts.nlsc.gov.tw/wmts',
        layer: 'EMAP',
        tileGrid: new ol.tilegrid.WMTS({
            origin: ol.extent.getTopLeft(projectionExtent),
            resolutions: resolutions,
            matrixIds: matrixIds
        }),
        style: 'default',
        wrapX: true,
        attributions: '<a href="http://maps.nlsc.gov.tw/" target="_blank">國土測繪圖資服務雲</a>'
    }),
    opacity: 0.3
});

var appView = new ol.View({
  center: ol.proj.fromLonLat([120.221115, 22.964407]),
  zoom: 14
});
var dataLayer = new ol.layer.Vector({
  source: new ol.source.Vector({
    url: '../data.json',
    format: new ol.format.GeoJSON()
  })
});

var map = new ol.Map({
  layers: [baseLayer, dataLayer],
  target: 'map',
  view: appView
});
map.addControl(sidebar);

var content = document.getElementById('sidebarContent');
map.on('singleclick', function(evt) {
  content.innerHTML = '';
  clickedCoordinate = evt.coordinate;

  map.forEachFeatureAtPixel(evt.pixel, function (feature, layer) {
    var message = '';
    var p = feature.getProperties();
    for(k in p) {
      if(k !== 'geometry') {
        message += k + ': ' + p[k] + '<br />';
      }
    }

    content.innerHTML += message + '<hr />';
  });

  sidebar.open('home');
});
{
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "Point",
        "coordinates": [
          120.54120361804962,
          23.71170209715129
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [
            120.53812980651855,
            23.716839484014912
          ],
          [
            120.53280830383301,
            23.713696173823276
          ],
          [
            120.53040504455566,
            23.709295412297898
          ],
          [
            120.52894592285156,
            23.70379425163918
          ],
          [
            120.52928924560545,
            23.701436540362085
          ],
          [
            120.53246498107909,
            23.699786117125562
          ],
          [
            120.53770065307617,
            23.69805707992298
          ],
          [
            120.54139137268066,
            23.69766411372828
          ],
          [
            120.54585456848146,
            23.699314563796268
          ],
          [
            120.5500602722168,
            23.700886401602094
          ],
          [
            120.55452346801758,
            23.70395143087651
          ],
          [
            120.55649757385254,
            23.709373998626962
          ],
          [
            120.55649757385254,
            23.713146086751546
          ],
          [
            120.55357933044432,
            23.715582169028668
          ],
          [
            120.54903030395506,
            23.71809678688007
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              120.54216384887695,
              23.724540273801217
            ],
            [
              120.55117607116699,
              23.724540273801217
            ],
            [
              120.55117607116699,
              23.730512001723035
            ],
            [
              120.54216384887695,
              23.730512001723035
            ],
            [
              120.54216384887695,
              23.724540273801217
            ]
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              120.53031921386719,
              23.726583264139887
            ],
            [
              120.52671432495116,
              23.7226544081496
            ],
            [
              120.53143501281738,
              23.719118336532556
            ],
            [
              120.53735733032227,
              23.722104358862914
            ],
            [
              120.53031921386719,
              23.726583264139887
            ]
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "Point",
        "coordinates": [
          120.5330228805542,
          23.728626222461276
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "Point",
        "coordinates": [
          120.50474166870117,
          23.719825558527255
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "Point",
        "coordinates": [
          120.51263809204102,
          23.733026331629294
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "Point",
        "coordinates": [
          120.50971984863283,
          23.704894502324912
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "Point",
        "coordinates": [
          120.53787231445311,
          23.74182610426267
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "Point",
        "coordinates": [
          120.52671432495116,
          23.74182610426267
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "Point",
        "coordinates": [
          120.49375534057616,
          23.73286918743129
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "Point",
        "coordinates": [
          120.51830291748047,
          23.718411110702377
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "Point",
        "coordinates": [
          120.53787231445311,
          23.733026331629294
        ]
      }
    }
  ]
}