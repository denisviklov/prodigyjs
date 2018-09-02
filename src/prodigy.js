class Oscillator {
  constructor(name, freq, waveForm, detune, audioCtx) {
    this.name = name
    this.freq = freq || 440 //value in Hertz
    this.waveForm = waveForm || 'square'
    this.detune = detune || 0
    this.audio = audioCtx
    this.oscillator = undefined    
  }

  create() {
    this.oscillator = this.audio.createOscillator()
    this.setup()
    return this
  }

  setup() {
    if(!this.oscillator) {
      throw 'Create oscillator first!'
    }

    this.oscillator.type = this.waveForm
    this.oscillator.frequency.setValueAtTime(this.freq, this.audio.currentTime)
  }

  setFreq(val) {
    this.oscillator.frequency.value = val
  }

  start() {
    this.oscillator.start()
  }

  stop() {
    this.oscillator.stop()
  }

  plug() {
    this.oscillator.connect(this.audio.destination)
  }
}


class Rack {
  constructor (audioCtx) {
    this.audioCtx = audioCtx || new (window.AudioContext || window.webkitAudioContext)()
    this.oscillators = []
  }

  getOsc(name) {
    for (var i = 0; i < this.oscillators.length; i++) {
      if(this.oscillators[i])
        return this.oscillators[i]
      throw 'Wrong oscillator name ' + name
    }
  }

  addOsc(name, freq, waveForm, detune) {
    let oscillator = new Oscillator(name, freq, waveForm, detune, this.audioCtx)
    this.oscillators.push(oscillator.create())
  }

  setOscFreq(name, val) {
    let oscillator = this.getOsc(name)
    oscillator.setFreq(val)
  }

  startSound() {
    for (var i = 0; i < this.oscillators.length; i++) {
      let oscillator = this.oscillators[i]
      oscillator.plug()
      oscillator.start()
    }
  }

  stopSound() {
    for (var i = 0; i < this.oscillators.length; i++) {
      let oscillator = this.oscillators[i]
      oscillator.stop()
    }
  }
}

//export default Rack;
//module.exports = Synth;