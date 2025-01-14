import { Viewer } from '@photo-sphere-viewer/core';
import { VirtualTourPlugin } from '@photo-sphere-viewer/virtual-tour-plugin';
import '@photo-sphere-viewer/core/index.css';
import '@photo-sphere-viewer/virtual-tour-plugin/index.css';

const baseUrl = 'https://photo-sphere-viewer-data.netlify.app/assets';

const nodes = [
  {
    id: 'salon',
    panorama: '/pano3.jpg',
    gps: [
      0, 0
    ],
    links: [
      {
        nodeId: 'couloir',
        gps: [
          0, 1
        ],
        // position: {
        //   textureX: 1000,
        //   textureY: 200,
        // }
      }
    ]
  },
  {
    id: 'couloir',
    panorama: '/pano1.jpg',
    gps: [
      0, 1
    ],
    links: [
      {
        nodeId: 'salon',
        gps: [
          0, 0
        ],
        // position: {
        //   textureX: 100,
        //   textureY: 20,
        // }
      }
    ]
  }
];

const viewer = new Viewer({
  container: 'viewer',
  loadingImg: baseUrl + '/loader.gif',
  plugins: [
    [
      VirtualTourPlugin,
      {
        nodes,
        positionMode: 'gps'
      }
    ]
  ]
});

window.viewer = viewer;