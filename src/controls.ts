import taktil from 'taktil';

export const controls = {
    FS1: new taktil.ControlChange({ channel: 0, control: 0x33 }),
    FS2: new taktil.ControlChange({ channel: 0, control: 0x34 }),
    FS3: new taktil.ControlChange({ channel: 0, control: 0x35 }),
    FS4: new taktil.ControlChange({ channel: 0, control: 0x36 }),
    FS5: new taktil.ControlChange({ channel: 0, control: 0x37 }),
    FS6: new taktil.ControlChange({ channel: 0, control: 0x38 }),
    FS7: new taktil.ControlChange({ channel: 0, control: 0x39 }),
    FS8: new taktil.ControlChange({ channel: 0, control: 0x3a }),
    LOOPER: new taktil.ControlChange({ channel: 0, control: 0x3b }),
    TAP: new taktil.ControlChange({ channel: 0, control: 0x3c }),
    TOE: new taktil.ControlChange({ channel: 0, control: 0x3d }),
    EXP: new taktil.ControlChange({ channel: 0, control: 0x02 }),
};
