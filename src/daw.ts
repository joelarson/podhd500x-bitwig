import taktil from 'taktil';

interface Daw {
    application: API.Application;
    transport: API.Transport;
    cursorTrack: API.CursorTrack;
    launcherSlotBank: API.ClipLauncherSlotBank;
    // cursorClip: API.Clip;
}

export const daw = {} as Daw;

taktil.on('init', () => {
    daw.application = host.createApplication();
    daw.transport = host.createTransport();
    daw.transport.isClipLauncherOverdubEnabled().markInterested();
    daw.transport.isPlaying().markInterested();

    daw.cursorTrack = host.createArrangerCursorTrack(0, 1);

    daw.launcherSlotBank = daw.cursorTrack.clipLauncherSlotBank();

    // daw.cursorClip = host.createArrangerCursorClip(0, 0);
    // ...setup all of your "init time only" bitwig api stuff here
});

declare const a: API.ClipLauncherSlot;
