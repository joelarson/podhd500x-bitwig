import taktil from 'taktil';

interface PlayToggleParams {
    transport: API.Transport;
}

export class PlayToggle extends taktil.Button<PlayToggleParams> {
    onInit() {
        this.params.transport
            .isPlaying()
            .addValueObserver(isPlaying => this.setState({ on: isPlaying }));
    }

    onPress() {
        this.state.on ? this.params.transport.stop() : this.params.transport.play();
    }
}

interface LauncherOverdubToggleState extends taktil.ButtonState {
    isRecording: boolean;
}

export class LauncherOverdubToggle extends taktil.Button<
    { launcherSlotBank: API.ClipLauncherSlotBank; transport: API.Transport },
    LauncherOverdubToggleState
> {
    onInit() {
        this.params.launcherSlotBank.addIsRecordingObserver(
            (i, isRecording) => i === 0 && this.setState({ isRecording })
        );
    }
    onPress() {
        if (this.state.isRecording) {
            this.params.launcherSlotBank.deleteClip(0);
            this.params.launcherSlotBank.launch(0);
        } else {
            this.params.transport.isClipLauncherOverdubEnabled().toggle();
        }
    }
}

export class ClipLauncher extends taktil.Button<{ launcherSlotBank: API.ClipLauncherSlotBank }> {
    onPress() {
        this.params.launcherSlotBank.launch(0);
    }
}

export class ClipLauncherScroll extends taktil.Button<{
    launcherSlotBank: API.ClipLauncherSlotBank;
    transport: API.Transport;
    direction: 'forwards' | 'backwards';
}> {
    onPress() {
        const { launcherSlotBank, direction, transport } = this.params;
        direction === 'forwards'
            ? launcherSlotBank.scrollForwards()
            : launcherSlotBank.scrollBackwards();
        launcherSlotBank.select(0);
        if (transport.isPlaying().get()) launcherSlotBank.launch(0);
    }
}

export class UndoButton extends taktil.Button<{ application: API.Application }> {
    onPress() {
        this.params.application.undo();
    }
}

export class TapTempoButton extends taktil.Button<{ transport: API.Transport }> {
    onPress() {
        this.params.transport.tapTempo();
    }
}

export class TrackScroll extends taktil.Button<{
    cursorTrack: API.CursorTrack;
    direction: 'forwards' | 'backwards';
}> {
    onPress() {
        const { cursorTrack, direction } = this.params;
        direction === 'forwards' ? cursorTrack.selectNext() : cursorTrack.selectPrevious();
        cursorTrack.clipLauncherSlotBank().select(0);
    }
}
