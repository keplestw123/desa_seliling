ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:4326").setExtent([109.695490, -7.660257, 109.721078, -7.641129]);
var wms_layers = [];

var format_Sawah_0 = new ol.format.GeoJSON();
var features_Sawah_0 = format_Sawah_0.readFeatures(json_Sawah_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Sawah_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sawah_0.addFeatures(features_Sawah_0);
var lyr_Sawah_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Sawah_0, 
                style: style_Sawah_0,
                popuplayertitle: "Sawah",
                interactive: true,
                title: '<img src="styles/legend/Sawah_0.png" /> Sawah'
            });
var format_Hutan_1 = new ol.format.GeoJSON();
var features_Hutan_1 = format_Hutan_1.readFeatures(json_Hutan_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Hutan_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Hutan_1.addFeatures(features_Hutan_1);
var lyr_Hutan_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Hutan_1, 
                style: style_Hutan_1,
                popuplayertitle: "Hutan",
                interactive: true,
                title: '<img src="styles/legend/Hutan_1.png" /> Hutan'
            });
var format_RT_2 = new ol.format.GeoJSON();
var features_RT_2 = format_RT_2.readFeatures(json_RT_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_RT_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RT_2.addFeatures(features_RT_2);
var lyr_RT_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RT_2, 
                style: style_RT_2,
                popuplayertitle: "RT",
                interactive: true,
    title: 'RT<br />\
    <img src="styles/legend/RT_2_0.png" /> RT01/RW01<br />\
    <img src="styles/legend/RT_2_1.png" /> RT01/RW010<br />\
    <img src="styles/legend/RT_2_2.png" /> RT01/RW02<br />\
    <img src="styles/legend/RT_2_3.png" /> RT01/RW03<br />\
    <img src="styles/legend/RT_2_4.png" /> RT01/RW04<br />\
    <img src="styles/legend/RT_2_5.png" /> RT01/RW05<br />\
    <img src="styles/legend/RT_2_6.png" /> RT01/RW06<br />\
    <img src="styles/legend/RT_2_7.png" /> RT01/RW07<br />\
    <img src="styles/legend/RT_2_8.png" /> RT01/RW08<br />\
    <img src="styles/legend/RT_2_9.png" /> RT01/RW09<br />\
    <img src="styles/legend/RT_2_10.png" /> RT02/RW01<br />\
    <img src="styles/legend/RT_2_11.png" /> RT02/RW02<br />\
    <img src="styles/legend/RT_2_12.png" /> RT02/RW03<br />\
    <img src="styles/legend/RT_2_13.png" /> RT02/RW05<br />\
    <img src="styles/legend/RT_2_14.png" /> RT02/RW06<br />\
    <img src="styles/legend/RT_2_15.png" /> RT02/RW07<br />\
    <img src="styles/legend/RT_2_16.png" /> RT02/RW08<br />\
    <img src="styles/legend/RT_2_17.png" /> RT02/RW09<br />\
    <img src="styles/legend/RT_2_18.png" /> RT02/RW10<br />\
    <img src="styles/legend/RT_2_19.png" /> RT03/RW07<br />\
    <img src="styles/legend/RT_2_20.png" /> <br />'
        });
var format_RW_3 = new ol.format.GeoJSON();
var features_RW_3 = format_RW_3.readFeatures(json_RW_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_RW_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RW_3.addFeatures(features_RW_3);
var lyr_RW_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RW_3, 
                style: style_RW_3,
                popuplayertitle: "RW",
                interactive: true,
    title: 'RW<br />\
    <img src="styles/legend/RW_3_0.png" /> RW1<br />\
    <img src="styles/legend/RW_3_1.png" /> RW10<br />\
    <img src="styles/legend/RW_3_2.png" /> RW2<br />\
    <img src="styles/legend/RW_3_3.png" /> RW3<br />\
    <img src="styles/legend/RW_3_4.png" /> RW4<br />\
    <img src="styles/legend/RW_3_5.png" /> RW5<br />\
    <img src="styles/legend/RW_3_6.png" /> RW6<br />\
    <img src="styles/legend/RW_3_7.png" /> RW7<br />\
    <img src="styles/legend/RW_3_8.png" /> RW8<br />\
    <img src="styles/legend/RW_3_9.png" /> RW9<br />'
        });
var format_Dusun_4 = new ol.format.GeoJSON();
var features_Dusun_4 = format_Dusun_4.readFeatures(json_Dusun_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Dusun_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Dusun_4.addFeatures(features_Dusun_4);
var lyr_Dusun_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Dusun_4, 
                style: style_Dusun_4,
                popuplayertitle: "Dusun",
                interactive: true,
    title: 'Dusun<br />\
    <img src="styles/legend/Dusun_4_0.png" /> Dusun Dukuh<br />\
    <img src="styles/legend/Dusun_4_1.png" /> Dusun Jiwanalan<br />\
    <img src="styles/legend/Dusun_4_2.png" /> Dusun Kragapitan<br />\
    <img src="styles/legend/Dusun_4_3.png" /> Dusun Pegandulan<br />'
        });
var format_kali_5 = new ol.format.GeoJSON();
var features_kali_5 = format_kali_5.readFeatures(json_kali_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_kali_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_kali_5.addFeatures(features_kali_5);
var lyr_kali_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_kali_5, 
                style: style_kali_5,
                popuplayertitle: "kali",
                interactive: true,
    title: 'kali<br />\
    <img src="styles/legend/kali_5_0.png" /> kalen<br />\
    <img src="styles/legend/kali_5_1.png" /> Kalen<br />\
    <img src="styles/legend/kali_5_2.png" /> kalen kedungdawa<br />\
    <img src="styles/legend/kali_5_3.png" /> Kalen kedungdawa<br />\
    <img src="styles/legend/kali_5_4.png" /> Kali Jiwanalan<br />\
    <img src="styles/legend/kali_5_5.png" /> Kali Nduwur<br />\
    <img src="styles/legend/kali_5_6.png" /> Soloran<br />\
    <img src="styles/legend/kali_5_7.png" /> <br />'
        });
var format_Bangunan_6 = new ol.format.GeoJSON();
var features_Bangunan_6 = format_Bangunan_6.readFeatures(json_Bangunan_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Bangunan_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bangunan_6.addFeatures(features_Bangunan_6);
var lyr_Bangunan_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Bangunan_6, 
                style: style_Bangunan_6,
                popuplayertitle: "Bangunan",
                interactive: true,
                title: '<img src="styles/legend/Bangunan_6.png" /> Bangunan'
            });
var format_JlDesaSeliling_7 = new ol.format.GeoJSON();
var features_JlDesaSeliling_7 = format_JlDesaSeliling_7.readFeatures(json_JlDesaSeliling_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_JlDesaSeliling_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JlDesaSeliling_7.addFeatures(features_JlDesaSeliling_7);
var lyr_JlDesaSeliling_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JlDesaSeliling_7, 
                style: style_JlDesaSeliling_7,
                popuplayertitle: "Jl. Desa Seliling",
                interactive: true,
    title: 'Jl. Desa Seliling<br />\
    <img src="styles/legend/JlDesaSeliling_7_0.png" /> jl kandang ayam ngera<br />\
    <img src="styles/legend/JlDesaSeliling_7_1.png" /> jl. ds beji<br />\
    <img src="styles/legend/JlDesaSeliling_7_2.png" /> Jl. ds beji<br />\
    <img src="styles/legend/JlDesaSeliling_7_3.png" /> jl. ds jiwanalan<br />\
    <img src="styles/legend/JlDesaSeliling_7_4.png" /> jl. ds kaliputih<br />\
    <img src="styles/legend/JlDesaSeliling_7_5.png" /> jl. ds nduku<br />\
    <img src="styles/legend/JlDesaSeliling_7_6.png" /> jl. ds ndukuh<br />\
    <img src="styles/legend/JlDesaSeliling_7_7.png" /> jl. ds ngera<br />\
    <img src="styles/legend/JlDesaSeliling_7_8.png" /> jl. ds suroturunan<br />\
    <img src="styles/legend/JlDesaSeliling_7_9.png" /> jl. kali nduwur<br />\
    <img src="styles/legend/JlDesaSeliling_7_10.png" /> jl. karang kembang<br />\
    <img src="styles/legend/JlDesaSeliling_7_11.png" /> jl. kragapitan<br />\
    <img src="styles/legend/JlDesaSeliling_7_12.png" /> Jl. kragapitan<br />\
    <img src="styles/legend/JlDesaSeliling_7_13.png" /> jl. pegandulan<br />\
    <img src="styles/legend/JlDesaSeliling_7_14.png" /> jl. Pemandian Timur<br />\
    <img src="styles/legend/JlDesaSeliling_7_15.png" /> jl. sekolah smk<br />\
    <img src="styles/legend/JlDesaSeliling_7_16.png" /> jl. siwedung<br />\
    <img src="styles/legend/JlDesaSeliling_7_17.png" /> jl. soka<br />\
    <img src="styles/legend/JlDesaSeliling_7_18.png" /> jln. ds sawangan<br />\
    <img src="styles/legend/JlDesaSeliling_7_19.png" /> jln. sekolah smk<br />\
    <img src="styles/legend/JlDesaSeliling_7_20.png" /> kragapitan<br />\
    <img src="styles/legend/JlDesaSeliling_7_21.png" /> <br />'
        });
var format_Poin_8 = new ol.format.GeoJSON();
var features_Poin_8 = format_Poin_8.readFeatures(json_Poin_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Poin_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Poin_8.addFeatures(features_Poin_8);
var lyr_Poin_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Poin_8, 
                style: style_Poin_8,
                popuplayertitle: "Poin",
                interactive: true,
                title: '<img src="styles/legend/Poin_8.png" /> Poin'
            });
var format_geometrifix_9 = new ol.format.GeoJSON();
var features_geometrifix_9 = format_geometrifix_9.readFeatures(json_geometrifix_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_geometrifix_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_geometrifix_9.addFeatures(features_geometrifix_9);
var lyr_geometrifix_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_geometrifix_9, 
                style: style_geometrifix_9,
                popuplayertitle: "geometri fix",
                interactive: true,
                title: '<img src="styles/legend/geometrifix_9.png" /> geometri fix'
            });

lyr_Sawah_0.setVisible(true);lyr_Hutan_1.setVisible(true);lyr_RT_2.setVisible(true);lyr_RW_3.setVisible(true);lyr_Dusun_4.setVisible(true);lyr_kali_5.setVisible(true);lyr_Bangunan_6.setVisible(true);lyr_JlDesaSeliling_7.setVisible(true);lyr_Poin_8.setVisible(true);lyr_geometrifix_9.setVisible(true);
var layersList = [lyr_Sawah_0,lyr_Hutan_1,lyr_RT_2,lyr_RW_3,lyr_Dusun_4,lyr_kali_5,lyr_Bangunan_6,lyr_JlDesaSeliling_7,lyr_Poin_8,lyr_geometrifix_9];
lyr_Sawah_0.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', });
lyr_Hutan_1.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', });
lyr_RT_2.set('fieldAliases', {'id': 'id', 'nama': 'nama', });
lyr_RW_3.set('fieldAliases', {'id': 'id', 'RW': 'RW', });
lyr_Dusun_4.set('fieldAliases', {'id': 'id', 'nama': 'nama', });
lyr_kali_5.set('fieldAliases', {'id': 'id', 'nama': 'nama', });
lyr_Bangunan_6.set('fieldAliases', {'osm_id': 'osm_id', 'osm_type': 'osm_type', 'health_fac': 'health_fac', 'depth': 'depth', 'office': 'office', 'railway': 'railway', 'operator_t': 'operator_t', 'blockage': 'blockage', 'roof_mater': 'roof_mater', 'rooms': 'rooms', 'tourism': 'tourism', 'amenity': 'amenity', 'name': 'name', 'staff_coun': 'staff_coun', 'public_tra': 'public_tra', 'width': 'width', 'access': 'access', 'bridge': 'bridge', 'smoothness': 'smoothness', 'beds': 'beds', 'covered': 'covered', 'landuse': 'landuse', 'staff_co_1': 'staff_co_1', 'diameter': 'diameter', 'access_roo': 'access_roo', 'building_m': 'building_m', 'healthcare': 'healthcare', 'opening_ho': 'opening_ho', 'government': 'government', 'isced_leve': 'isced_leve', 'status': 'status', 'aeroway': 'aeroway', 'toilets_di': 'toilets_di', 'waterway': 'waterway', 'parking': 'parking', 'tunnel': 'tunnel', 'building': 'building', 'operator': 'operator', 'barrier': 'barrier', 'capacity': 'capacity', 'man_made': 'man_made', 'health_f_1': 'health_f_1', 'water': 'water', 'highway': 'highway', 'surface': 'surface', 'pump': 'pump', 'natural': 'natural', 'oneway': 'oneway', 'addr_stree': 'addr_stree', 'toilets_ha': 'toilets_ha', 'health_f_2': 'health_f_2', 'layer': 'layer', 'military': 'military', 'shop': 'shop', 'medical_sy': 'medical_sy', 'addr_house': 'addr_house', });
lyr_JlDesaSeliling_7.set('fieldAliases', {'id': 'id', 'nama jalan': 'nama jalan', 'lebar': 'lebar', });
lyr_Poin_8.set('fieldAliases', {'id': 'id', 'kategori': 'kategori', 'nama': 'nama', });
lyr_geometrifix_9.set('fieldAliases', {'KDPPUM': 'KDPPUM', 'NAMOBJ': 'NAMOBJ', 'REMARK': 'REMARK', 'KDPBPS': 'KDPBPS', 'FCODE': 'FCODE', 'LUASWH': 'LUASWH', 'UUPP': 'UUPP', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDBBPS': 'KDBBPS', 'KDBPUM': 'KDBPUM', 'WADMKD': 'WADMKD', 'WIADKD': 'WIADKD', 'WADMKC': 'WADMKC', 'WIADKC': 'WIADKC', 'WADMKK': 'WADMKK', 'WIADKK': 'WIADKK', 'WADMPR': 'WADMPR', 'WIADPR': 'WIADPR', 'TIPADM': 'TIPADM', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_Sawah_0.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', });
lyr_Hutan_1.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', });
lyr_RT_2.set('fieldImages', {'id': 'TextEdit', 'nama': 'TextEdit', });
lyr_RW_3.set('fieldImages', {'id': 'TextEdit', 'RW': 'TextEdit', });
lyr_Dusun_4.set('fieldImages', {'id': 'TextEdit', 'nama': 'TextEdit', });
lyr_kali_5.set('fieldImages', {'id': 'TextEdit', 'nama': 'TextEdit', });
lyr_Bangunan_6.set('fieldImages', {'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'health_fac': 'TextEdit', 'depth': 'TextEdit', 'office': 'TextEdit', 'railway': 'TextEdit', 'operator_t': 'TextEdit', 'blockage': 'TextEdit', 'roof_mater': 'TextEdit', 'rooms': 'TextEdit', 'tourism': 'TextEdit', 'amenity': 'TextEdit', 'name': 'TextEdit', 'staff_coun': 'TextEdit', 'public_tra': 'TextEdit', 'width': 'TextEdit', 'access': 'TextEdit', 'bridge': 'TextEdit', 'smoothness': 'TextEdit', 'beds': 'TextEdit', 'covered': 'TextEdit', 'landuse': 'TextEdit', 'staff_co_1': 'TextEdit', 'diameter': 'TextEdit', 'access_roo': 'TextEdit', 'building_m': 'TextEdit', 'healthcare': 'TextEdit', 'opening_ho': 'TextEdit', 'government': 'TextEdit', 'isced_leve': 'TextEdit', 'status': 'TextEdit', 'aeroway': 'TextEdit', 'toilets_di': 'TextEdit', 'waterway': 'TextEdit', 'parking': 'TextEdit', 'tunnel': 'TextEdit', 'building': 'TextEdit', 'operator': 'TextEdit', 'barrier': 'TextEdit', 'capacity': 'TextEdit', 'man_made': 'TextEdit', 'health_f_1': 'TextEdit', 'water': 'TextEdit', 'highway': 'TextEdit', 'surface': 'TextEdit', 'pump': 'TextEdit', 'natural': 'TextEdit', 'oneway': 'TextEdit', 'addr_stree': 'TextEdit', 'toilets_ha': 'TextEdit', 'health_f_2': 'TextEdit', 'layer': 'TextEdit', 'military': 'TextEdit', 'shop': 'TextEdit', 'medical_sy': 'TextEdit', 'addr_house': 'TextEdit', });
lyr_JlDesaSeliling_7.set('fieldImages', {'id': 'TextEdit', 'nama jalan': 'TextEdit', 'lebar': 'TextEdit', });
lyr_Poin_8.set('fieldImages', {'id': 'TextEdit', 'kategori': 'TextEdit', 'nama': 'TextEdit', });
lyr_geometrifix_9.set('fieldImages', {'KDPPUM': 'TextEdit', 'NAMOBJ': 'TextEdit', 'REMARK': 'TextEdit', 'KDPBPS': 'TextEdit', 'FCODE': 'TextEdit', 'LUASWH': 'TextEdit', 'UUPP': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'KDEBPS': 'TextEdit', 'KDEPUM': 'TextEdit', 'KDCBPS': 'TextEdit', 'KDCPUM': 'TextEdit', 'KDBBPS': 'TextEdit', 'KDBPUM': 'TextEdit', 'WADMKD': 'TextEdit', 'WIADKD': 'TextEdit', 'WADMKC': 'TextEdit', 'WIADKC': 'TextEdit', 'WADMKK': 'TextEdit', 'WIADKK': 'TextEdit', 'WADMPR': 'TextEdit', 'WIADPR': 'TextEdit', 'TIPADM': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_Sawah_0.set('fieldLabels', {'id': 'header label - visible with data', 'Nama': 'header label - visible with data', });
lyr_Hutan_1.set('fieldLabels', {'id': 'header label - visible with data', 'Nama': 'header label - visible with data', });
lyr_RT_2.set('fieldLabels', {'id': 'header label - visible with data', 'nama': 'header label - visible with data', });
lyr_RW_3.set('fieldLabels', {'id': 'header label - visible with data', 'RW': 'header label - visible with data', });
lyr_Dusun_4.set('fieldLabels', {'id': 'header label - visible with data', 'nama': 'header label - visible with data', });
lyr_kali_5.set('fieldLabels', {'id': 'header label - visible with data', 'nama': 'header label - visible with data', });
lyr_Bangunan_6.set('fieldLabels', {'osm_id': 'header label - visible with data', 'osm_type': 'header label - visible with data', 'health_fac': 'header label - visible with data', 'depth': 'header label - visible with data', 'office': 'header label - visible with data', 'railway': 'header label - visible with data', 'operator_t': 'header label - visible with data', 'blockage': 'header label - visible with data', 'roof_mater': 'header label - visible with data', 'rooms': 'header label - visible with data', 'tourism': 'header label - visible with data', 'amenity': 'header label - visible with data', 'name': 'header label - visible with data', 'staff_coun': 'header label - visible with data', 'public_tra': 'header label - visible with data', 'width': 'header label - visible with data', 'access': 'header label - visible with data', 'bridge': 'header label - visible with data', 'smoothness': 'header label - visible with data', 'beds': 'header label - visible with data', 'covered': 'header label - visible with data', 'landuse': 'header label - visible with data', 'staff_co_1': 'header label - visible with data', 'diameter': 'header label - visible with data', 'access_roo': 'header label - visible with data', 'building_m': 'header label - visible with data', 'healthcare': 'header label - visible with data', 'opening_ho': 'header label - visible with data', 'government': 'header label - visible with data', 'isced_leve': 'header label - visible with data', 'status': 'header label - visible with data', 'aeroway': 'header label - visible with data', 'toilets_di': 'header label - visible with data', 'waterway': 'header label - visible with data', 'parking': 'header label - visible with data', 'tunnel': 'header label - visible with data', 'building': 'header label - visible with data', 'operator': 'header label - visible with data', 'barrier': 'header label - visible with data', 'capacity': 'header label - visible with data', 'man_made': 'header label - visible with data', 'health_f_1': 'header label - visible with data', 'water': 'header label - visible with data', 'highway': 'header label - visible with data', 'surface': 'header label - visible with data', 'pump': 'header label - visible with data', 'natural': 'header label - visible with data', 'oneway': 'header label - visible with data', 'addr_stree': 'header label - visible with data', 'toilets_ha': 'header label - visible with data', 'health_f_2': 'header label - visible with data', 'layer': 'header label - visible with data', 'military': 'header label - visible with data', 'shop': 'header label - visible with data', 'medical_sy': 'header label - visible with data', 'addr_house': 'header label - visible with data', });
lyr_JlDesaSeliling_7.set('fieldLabels', {'id': 'header label - visible with data', 'nama jalan': 'header label - visible with data', 'lebar': 'header label - visible with data', });
lyr_Poin_8.set('fieldLabels', {'id': 'header label - visible with data', 'kategori': 'header label - visible with data', 'nama': 'header label - visible with data', });
lyr_geometrifix_9.set('fieldLabels', {'KDPPUM': 'header label - visible with data', 'NAMOBJ': 'header label - visible with data', 'REMARK': 'header label - visible with data', 'KDPBPS': 'header label - visible with data', 'FCODE': 'header label - visible with data', 'LUASWH': 'header label - visible with data', 'UUPP': 'header label - visible with data', 'SRS_ID': 'header label - visible with data', 'LCODE': 'header label - visible with data', 'METADATA': 'header label - visible with data', 'KDEBPS': 'header label - visible with data', 'KDEPUM': 'header label - visible with data', 'KDCBPS': 'header label - visible with data', 'KDCPUM': 'header label - visible with data', 'KDBBPS': 'header label - visible with data', 'KDBPUM': 'header label - visible with data', 'WADMKD': 'header label - visible with data', 'WIADKD': 'header label - visible with data', 'WADMKC': 'header label - visible with data', 'WIADKC': 'header label - visible with data', 'WADMKK': 'header label - visible with data', 'WIADKK': 'header label - visible with data', 'WADMPR': 'header label - visible with data', 'WIADPR': 'header label - visible with data', 'TIPADM': 'header label - visible with data', 'SHAPE_Leng': 'header label - visible with data', 'SHAPE_Area': 'header label - visible with data', });
lyr_geometrifix_9.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});