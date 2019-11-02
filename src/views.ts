import taktil from 'taktil';

import {
    PlayToggle,
    ClipLauncher,
    ClipLauncherScroll,
    LauncherOverdubToggle,
    UndoButton,
    TapTempoButton,
    TrackScroll,
} from './components';
import { controls } from './controls';
import { daw } from './daw';

class BaseView extends taktil.View {
    playButton = new PlayToggle(controls.FS2, { transport: daw.transport });
    launcherOverdubToggle = new LauncherOverdubToggle(controls.FS5, {
        launcherSlotBank: daw.launcherSlotBank,
        transport: daw.transport,
    });
    scrollLauncherBackwards = new ClipLauncherScroll(controls.FS7, {
        launcherSlotBank: daw.launcherSlotBank,
        direction: 'backwards',
        transport: daw.transport,
    });
    scrollLauncherForwards = new ClipLauncherScroll(controls.FS8, {
        launcherSlotBank: daw.launcherSlotBank,
        direction: 'forwards',
        transport: daw.transport,
    });
    clipLauncher = new ClipLauncher(controls.FS6, { launcherSlotBank: daw.launcherSlotBank });
    undoButton = new UndoButton(controls.FS1, { application: daw.application });
    tapTempoButton = new TapTempoButton(controls.TAP, { transport: daw.transport });
    prevTrackButton = new TrackScroll(controls.FS3, {
        cursorTrack: daw.cursorTrack,
        direction: 'backwards',
    });
    nextTrackButton = new TrackScroll(controls.FS4, {
        cursorTrack: daw.cursorTrack,
        direction: 'forwards',
    });
}

export const views = {
    BASE: BaseView,
};
