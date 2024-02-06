var APP_DATA = {
  "scenes": [
    {
      "id": "0-entrada",
      "name": "Entrada",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0.08181865876791505,
        "pitch": 0.0027232794866698384,
        "fov": 1.405674899209756
      },
      "linkHotspots": [
        {
          "yaw": 0.5587866610232997,
          "pitch": 0.16933522811942403,
          "rotation": 0.7853981633974483,
          "target": "1-cocina"
        },
        {
          "yaw": -0.16883521787547906,
          "pitch": 0.2738014541793863,
          "rotation": 6.283185307179586,
          "target": "2-cama"
        },
        {
          "yaw": -0.774208964525597,
          "pitch": 0.23988118453893748,
          "rotation": 5.497787143782138,
          "target": "3-bao"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-cocina",
      "name": "Cocina",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0.005496269703032297,
        "pitch": 0.20305353376712,
        "fov": 1.405674899209756
      },
      "linkHotspots": [
        {
          "yaw": 2.8328632301740493,
          "pitch": 0.5948614991546695,
          "rotation": 0,
          "target": "2-cama"
        },
        {
          "yaw": 1.3034450577239305,
          "pitch": 0.12041457030061586,
          "rotation": 5.497787143782138,
          "target": "0-entrada"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-cama",
      "name": "Cama",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.8035115051621009,
          "pitch": 0.1470865794561309,
          "rotation": 0.7853981633974483,
          "target": "0-entrada"
        },
        {
          "yaw": -1.7945655487002234,
          "pitch": 0.27077574490714085,
          "rotation": 5.497787143782138,
          "target": "1-cocina"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-bao",
      "name": "Baño",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0.0026851219261452286,
        "pitch": 0.1879152213784714,
        "fov": 1.405674899209756
      },
      "linkHotspots": [
        {
          "yaw": -1.4385843106439697,
          "pitch": 0.05036648968180302,
          "rotation": 0,
          "target": "0-entrada"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "SUITE 01",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
