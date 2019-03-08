import Tone from 'tone';
class MusicScript {
    constructor() {
        //global
        this.tempo = 90;
        this.instrument = Tone.MonoSynth;
        this.title = "My awesome melody";
        this.instrumentProps = {
            "filterEnvelope" : {
                "attack"  : 0.06 ,
                "decay"  : 0.2 ,
                "sustain"  : 0.5 ,
                "release"  : 2 ,
                "baseFrequency"  : 300 ,
                "octaves"  : 2,
                "exponent"  : 2
            }
        };

        let row1 = [0,0,0,1];
        let row2 = [0,0,1];
        let row3 = [0,1];
        let row4 = [1];

        this.pattern = [row1,
                        row2,
                        row3,
                        row4];

        this.scale = ["F2", "E2", "D2", "C2"];
    }
}

export default MusicScript