var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_2Tiendasdeautoservicioydepartamentales_1 = new ol.format.GeoJSON();
var features_2Tiendasdeautoservicioydepartamentales_1 = format_2Tiendasdeautoservicioydepartamentales_1.readFeatures(json_2Tiendasdeautoservicioydepartamentales_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2Tiendasdeautoservicioydepartamentales_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2Tiendasdeautoservicioydepartamentales_1.addFeatures(features_2Tiendasdeautoservicioydepartamentales_1);
var lyr_2Tiendasdeautoservicioydepartamentales_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_2Tiendasdeautoservicioydepartamentales_1, 
                style: style_2Tiendasdeautoservicioydepartamentales_1,
                interactive: true,
                title: '<img src="styles/legend/2Tiendasdeautoservicioydepartamentales_1.png" /> 2 Tiendas de autoservicio y departamentales'
            });
var format_2Mercadosytianguis_2 = new ol.format.GeoJSON();
var features_2Mercadosytianguis_2 = format_2Mercadosytianguis_2.readFeatures(json_2Mercadosytianguis_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2Mercadosytianguis_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2Mercadosytianguis_2.addFeatures(features_2Mercadosytianguis_2);
var lyr_2Mercadosytianguis_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_2Mercadosytianguis_2, 
                style: style_2Mercadosytianguis_2,
                interactive: true,
                title: '<img src="styles/legend/2Mercadosytianguis_2.png" /> 2 Mercados y tianguis'
            });
var format_2InstitucionesEducativas_3 = new ol.format.GeoJSON();
var features_2InstitucionesEducativas_3 = format_2InstitucionesEducativas_3.readFeatures(json_2InstitucionesEducativas_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2InstitucionesEducativas_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2InstitucionesEducativas_3.addFeatures(features_2InstitucionesEducativas_3);
var lyr_2InstitucionesEducativas_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_2InstitucionesEducativas_3, 
                style: style_2InstitucionesEducativas_3,
                interactive: true,
                title: '<img src="styles/legend/2InstitucionesEducativas_3.png" /> 2 Instituciones Educativas'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_2Tiendasdeautoservicioydepartamentales_1.setVisible(true);lyr_2Mercadosytianguis_2.setVisible(true);lyr_2InstitucionesEducativas_3.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_2Tiendasdeautoservicioydepartamentales_1,lyr_2Mercadosytianguis_2,lyr_2InstitucionesEducativas_3];
lyr_2Tiendasdeautoservicioydepartamentales_1.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_2Mercadosytianguis_2.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_2InstitucionesEducativas_3.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_2Tiendasdeautoservicioydepartamentales_1.set('fieldImages', {'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_2Mercadosytianguis_2.set('fieldImages', {'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_2InstitucionesEducativas_3.set('fieldImages', {'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_2Tiendasdeautoservicioydepartamentales_1.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_2Mercadosytianguis_2.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_2InstitucionesEducativas_3.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_2InstitucionesEducativas_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});