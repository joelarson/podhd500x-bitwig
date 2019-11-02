import taktil from 'taktil';

import { controls } from './controls';
import { views } from './views';

// 1. set bitwig api version
host.loadAPI(4);

// 2. define controller script
host.defineController(
    'Line 6', // vendor
    'POD HD500X', // name
    '1.0.0', // version
    'd1452190-064c-11e8-b80e-7106774f2db9', // uuid
    '' // author
);

// 3. setup and discover midi controllers
host.defineMidiPorts(1, 1); // number of midi inputs, outputs
// host.addDeviceNameBasedDiscoveryPair(['Input Name'], ['Output Name']);

// 4. register controls to the session
taktil.registerControls(controls);

// 5. register views to the session
taktil.registerViews(views);

// 6. on init, activate view to trigger initial render
taktil.on('init', () => taktil.activateView('BASE'));
