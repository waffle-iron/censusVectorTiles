export default {
  "version": 8,
  "name": "Klokantech Basic",
  "metadata": {
    "mapbox:autocomposite": false,
    "mapbox:type": "template",
    "maputnik:renderer": "mbgljs"
  },
  "center": [
    8.54806714892635,
    47.37180823552663
  ],
  "zoom": 12.241790506353492,
  "bearing": 0,
  "pitch": 0,
  "sources": {
    "openmaptiles": {
      "attribution": "<a href='http://openmaptiles.org/'>©OpenMapTiles</a> <a href='www.openstreetmap.org/copyright' >©OpenStreetMap contributors</a>",
      "type": "vector",
      "tiles": [
        "https://tiles.red-meteor.com/mbtiles/united_states_of_america/{z}/{x}/{y}.pbf"
      ],
      "minzoom": 0,
      "maxzoom": 13,
    }
  },
  "glyphs": "https://free.tilehosting.com/fonts/{fontstack}/{range}.pbf?key=igsf1AR2UOc8hfBlRsM2",
  "layers": [

    {
      "id": "background",
      "type": "background",
      "paint": {
        "background-color": "hsl(47, 26%, 88%)"
      }
    },
    {
      "id": "landuse-residential",
      "type": "fill",
      "source": "openmaptiles",
      "source-layer": "landuse",
      "filter": [
            "all",
            [
              "==",
              "$type",
              "Polygon"
            ],
            [
              "==",
              "class",
              "residential"
            ]
          ],
      "layout": {
        "visibility": "visible"
      },
      "paint": {
        "fill-color": "hsl(47, 13%, 86%)",
        "fill-opacity": 0.7
      }
    }, {
      "id": "landcover_grass",
      "type": "fill",
      "source": "openmaptiles",
      "source-layer": "landcover",
      "filter": [
            "==",
            "class",
            "grass"
          ],
      "paint": {
        "fill-color": "hsl(82, 46%, 72%)",
        "fill-opacity": 0.45
      }
    }, {
      "id": "park",
      "type": "fill",
      "source": "openmaptiles",
      "source-layer": "park",
      "paint": {
        "fill-color": "rgba(192, 216, 151, 0.53)",
        "fill-opacity": 1
      }
    }, {
      "id": "landcover_wood",
      "type": "fill",
      "source": "openmaptiles",
      "source-layer": "landcover",
      "filter": [
            "==",
            "class",
            "wood"
          ],
      "paint": {
        "fill-color": "hsl(82, 46%, 72%)",
        "fill-opacity": {
          "base": 1,
          "stops": [
                [
                  8,
                  0.6
                ],
                [
                  22,
                  1
                ]
              ]
        }
      }
    }, {
      "id": "water",
      "type": "fill",
      "source": "openmaptiles",
      "source-layer": "water",
      "filter": [
            "==",
            "$type",
            "Polygon"
          ],
      "paint": {
        "fill-color": "hsl(205, 56%, 73%)"
      }
    }, {
      "id": "landuse",
      "type": "fill",
      "source": "openmaptiles",
      "source-layer": "landuse",
      "filter": [
            "==",
            "class",
            "agriculture"
          ],
      "layout": {
        "visibility": "visible"
      },
      "paint": {
        "fill-color": "#eae0d0"
      }
    }, {
      "id": "landuse_overlay_national_park",
      "type": "fill",
      "source": "openmaptiles",
      "source-layer": "landcover",
      "filter": [
            "==",
            "class",
            "national_park"
          ],
      "paint": {
        "fill-color": "#E1EBB0",
        "fill-opacity": {
          "base": 1,
          "stops": [
                [
                  5,
                  0
                ],
                [
                  9,
                  0.75
                ]
              ]
        }
      }
    }, {
      "id": "park_outline",
      "type": "line",
      "source": "openmaptiles",
      "source-layer": "park",
      "layout": {},
      "paint": {
        "line-color": "rgba(159, 183, 118, 0.69)",
        "line-dasharray": [
              0.5,
              1
            ]
      }
    }, {
      "id": "waterway",
      "type": "line",
      "source": "openmaptiles",
      "source-layer": "waterway",
      "filter": [
            "==",
            "$type",
            "LineString"
          ],
      "paint": {
        "line-color": "hsl(205, 56%, 73%)",
        "line-width": {
          "base": 1.4,
          "stops": [
                [
                  8,
                  1
                ],
                [
                  20,
                  8
                ]
              ]
        },
        "line-opacity": 1
      }
    }, {
      "id": "building",
      "type": "fill",
      "source": "openmaptiles",
      "source-layer": "building",
      "paint": {
        "fill-color": "hsl(39, 41%, 86%)",
        "fill-outline-color": "hsl(36, 45%, 80%)",
        "fill-opacity": {
          "base": 1,
          "stops": [
                [
                  13,
                  0.6
                ],
                [
                  14,
                  1
                ]
              ]
        }
      }
    }, {
      "id": "road_path",
      "type": "line",
      "source": "openmaptiles",
      "source-layer": "transportation",
      "filter": [
            "all",
            [
              "==",
              "$type",
              "LineString"
            ],
            [
              "in",
              "class",
              "path",
              "track"
            ]
          ],
      "layout": {
        "line-cap": "square",
        "line-join": "bevel"
      },
      "paint": {
        "line-color": "hsl(0, 0%, 97%)",
        "line-dasharray": [
              1,
              1
            ],
        "line-width": {
          "base": 1.55,
          "stops": [
                [
                  4,
                  0.25
                ],
                [
                  20,
                  10
                ]
              ]
        }
      }
    }, {
      "id": "road_minor",
      "type": "line",
      "source": "openmaptiles",
      "source-layer": "transportation",
      "filter": [
            "all",
            [
              "==",
              "$type",
              "LineString"
            ],
            [
              "in",
              "class",
              "minor",
              "service"
            ]
          ],
      "layout": {
        "line-cap": "round",
        "line-join": "round"
      },
      "paint": {
        "line-color": "hsl(0, 0%, 97%)",
        "line-width": {
          "base": 1.55,
          "stops": [
                [
                  4,
                  0.25
                ],
                [
                  20,
                  30
                ]
              ]
        }
      }
    }, {
      "id": "road_trunk_primary",
      "type": "line",
      "source": "openmaptiles",
      "source-layer": "transportation",
      "filter": [
            "all",
            [
              "==",
              "$type",
              "LineString"
            ],
            [
              "in",
              "class",
              "trunk",
              "primary"
            ]
          ],
      "layout": {
        "line-cap": "round",
        "line-join": "round"
      },
      "paint": {
        "line-color": "#fff",
        "line-width": {
          "base": 1.4,
          "stops": [
                [
                  6,
                  0.5
                ],
                [
                  20,
                  30
                ]
              ]
        }
      }
    }, {
      "id": "road_secondary_tertiary",
      "type": "line",
      "source": "openmaptiles",
      "source-layer": "transportation",
      "filter": [
            "all",
            [
              "==",
              "$type",
              "LineString"
            ],
            [
              "in",
              "class",
              "secondary",
              "tertiary"
            ]
          ],
      "layout": {
        "line-cap": "round",
        "line-join": "round"
      },
      "paint": {
        "line-color": "#fff",
        "line-width": {
          "base": 1.4,
          "stops": [
                [
                  6,
                  0.5
                ],
                [
                  20,
                  20
                ]
              ]
        }
      }
    }, {
      "id": "road_major_motorway",
      "type": "line",
      "source": "openmaptiles",
      "source-layer": "transportation",
      "filter": [
            "all",
            [
              "==",
              "$type",
              "LineString"
            ],
            [
              "==",
              "class",
              "motorway"
            ]
          ],
      "layout": {
        "line-cap": "round",
        "line-join": "round"
      },
      "paint": {
        "line-color": "hsl(0, 0%, 100%)",
        "line-width": {
          "base": 1.4,
          "stops": [
                [
                  8,
                  1
                ],
                [
                  16,
                  10
                ]
              ]
        },
        "line-offset": 0
      }
    }, {
      "id": "admin_sub",
      "type": "line",
      "source": "openmaptiles",
      "source-layer": "boundary",
      "filter": [
            "in",
            "admin_level",
            4,
            6,
            8
          ],
      "layout": {
        "visibility": "visible"
      },
      "paint": {
        "line-color": "rgb(50, 50, 50)",
        "line-opacity": 0.8,
        "line-width": 1.5,
        "line-dasharray": [
              2,
              1
            ]
      }
    }, {
      "id": "admin_country",
      "type": "line",
      "source": "openmaptiles",
      "source-layer": "boundary",
      "filter": [
            "all",
            [
              "<=",
              "admin_level",
              2
            ],
            [
              "==",
              "$type",
              "LineString"
            ]
          ],
      "layout": {
        "line-cap": "round",
        "line-join": "round"
      },
      "paint": {
        "line-color": "hsla(0, 8%, 22%, 0.51)",
        "line-width": {
          "base": 1.3,
          "stops": [
                [
                  3,
                  0.5
                ],
                [
                  22,
                  15
                ]
              ]
        }
      }
    }, {
      "id": "poi_label",
      "type": "symbol",
      "source": "openmaptiles",
      "source-layer": "poi",
      "minzoom": 5,
      "filter": [
            "all",
            [
              "==",
              "$type",
              "Point"
            ],
            [
              "==",
              "rank",
              1
            ]
          ],
      "layout": {
        "text-size": 11,
        "text-font": [
              "Klokantech Noto Sans Regular",
              "Klokantech Noto Sans CJK Regular"
            ],
        "visibility": "visible",
        "text-offset": [
              0,
              0.5
            ],
        "icon-size": 1,
        "text-anchor": "top",
        "text-field": "{name}",
        "text-max-width": 8
      },
      "paint": {
        "text-color": "#666",
        "text-halo-width": 1,
        "text-halo-color": "rgba(255,255,255,0.75)",
        "text-halo-blur": 1
      }
    }, {
      "id": "road_major_label",
      "type": "symbol",
      "source": "openmaptiles",
      "source-layer": "transportation_name",
      "filter": [
            "==",
            "$type",
            "LineString"
          ],
      "layout": {
        "symbol-placement": "line",
        "text-field": "{name}",
        "text-font": [
              "Klokantech Noto Sans Regular",
              "Klokantech Noto Sans CJK Regular"
            ],
        "text-transform": "uppercase",
        "text-letter-spacing": 0.1,
        "text-size": {
          "base": 1.4,
          "stops": [
                [
                  10,
                  8
                ],
                [
                  20,
                  14
                ]
              ]
        },
        "text-rotation-alignment": "map"
      },
      "paint": {
        "text-color": "#000",
        "text-halo-color": "hsl(0, 0%, 100%)",
        "text-halo-width": 2
      }
    }, {
      "id": "place_label_other",
      "type": "symbol",
      "source": "openmaptiles",
      "source-layer": "place",
      "minzoom": 8,
      "filter": [
            "all",
            [
              "==",
              "$type",
              "Point"
            ],
            [
              "!=",
              "class",
              "city"
            ]
          ],
      "layout": {
        "text-field": "{name_en}",
        "text-font": [
              "Klokantech Noto Sans Regular",
              "Klokantech Noto Sans CJK Regular"
            ],
        "text-max-width": 6,
        "text-size": {
          "stops": [
                [
                  6,
                  10
                ],
                [
                  12,
                  14
                ]
              ]
        },
        "visibility": "visible",
        "text-anchor": "center"
      },
      "paint": {
        "text-color": "hsl(0, 10%, 25%)",
        "text-halo-color": "hsl(0, 0%, 100%)",
        "text-halo-blur": 0,
        "text-halo-width": 2
      }
    }, {
      "id": "place_label_city",
      "type": "symbol",
      "source": "openmaptiles",
      "source-layer": "place",
      "maxzoom": 16,
      "filter": [
            "all",
            [
              "==",
              "$type",
              "Point"
            ],
            [
              "==",
              "class",
              "city"
            ]
          ],
      "layout": {
        "text-field": "{name_en}",
        "text-font": [
              "Klokantech Noto Sans Regular",
              "Klokantech Noto Sans CJK Regular"
            ],
        "text-max-width": 10,
        "text-size": {
          "stops": [
                [
                  3,
                  12
                ],
                [
                  8,
                  16
                ]
              ]
        }
      },
      "paint": {
        "text-color": "hsl(0, 0%, 0%)",
        "text-halo-color": "hsla(0, 0%, 100%, 0.75)",
        "text-halo-blur": 0,
        "text-halo-width": 2
      }
    }, {
      "id": "country_label",
      "type": "symbol",
      "source": "openmaptiles",
      "source-layer": "place",
      "maxzoom": 12,
      "filter": [
            "all",
            [
              "==",
              "$type",
              "Point"
            ],
            [
              "==",
              "class",
              "country"
            ]
          ],
      "layout": {
        "text-field": "{name}",
        "text-font": [
              "Klokantech Noto Sans Bold",
              "Klokantech Noto Sans CJK Bold"
            ],
        "text-max-width": 10,
        "text-size": {
          "stops": [
                [
                  3,
                  12
                ],
                [
                  8,
                  22
                ]
              ]
        }
      },
      "paint": {
        "text-color": "hsl(0, 0%, 13%)",
        "text-halo-color": "rgba(255,255,255,0.75)",
        "text-halo-width": 2,
        "text-halo-blur": 0
      }
    }
  ],
  "id": "ciwf4zbsv007y2pmt2rspc1dc"
}