import { Viewer } from '@photo-sphere-viewer/core';
import { VirtualTourPlugin } from '@photo-sphere-viewer/virtual-tour-plugin';
import { MapPlugin } from '@photo-sphere-viewer/map-plugin';
import '@photo-sphere-viewer/core/index.css';
import '@photo-sphere-viewer/virtual-tour-plugin/index.css';
import '@photo-sphere-viewer/map-plugin/index.css';

import './index.css';

import salon from './assets/salon.jpg';
import couloir from './assets/pano1.jpg';
import plan from './assets/north_plan.png';

const baseUrl = 'https://photo-sphere-viewer-data.netlify.app/assets';

const nodes = [
  {
    id: 'salon',
    panorama: salon,
    gps: [
      0, 0
    ],
    links: [
      {
        nodeId: 'couloir',
        gps: [
          0, 1
        ]
      }
    ],
    map: { x: 486, y: 333},
  },
  {
    id: 'couloir',
    panorama: couloir,
    gps: [
      0, 1
    ],
    links: [
      {
        nodeId: 'salon',
        gps: [
          0, 0
        ]
      }
    ],
    map: { x: 203, y: 578},
  }
];

const viewer = new Viewer({
  container: 'viewer',
  loadingImg: baseUrl + '/loader.gif',
  plugins: [
    [
      MapPlugin,
      {
        rotation: '30deg',
        shape: 'square',
        static: true
      }
    ],
    [
      VirtualTourPlugin,
      {
        map: {
          imageUrl: plan,
        },
        nodes,
        positionMode: 'gps'
      }
    ]
  ]
});

window.viewer = viewer;