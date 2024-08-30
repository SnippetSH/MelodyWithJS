import * as Tone from "tone";

document.getElementById('play').addEventListener('click', async () => {
    console.log("아앙")
    await Tone.start()

    const drum = new Tone.MembraneSynth().toDestination();
    drum.triggerAttackRelease("C1", "8n")

    new Tone.Loop(t => {
        drum.triggerAttackRelease("C1", "8n", t)
        drum.triggerAttackRelease("C1", "8n", t + 0.5)
        drum.triggerAttackRelease("C1", "8n", t + 1)
        drum.triggerAttackRelease("C1", "8n", t + 1.5)
        drum.triggerAttackRelease("C1", "8n", t + 2)
    }, 2.5).start(0)
})

