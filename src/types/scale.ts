export type ScaleSettings = { root: ScaleRoot; type: ScaleType }
export type KeySettings = { root: ScaleRoot; type: 'major' | 'minor' }

type ScaleRoot =
  | 'Ab'
  | 'A'
  | 'A#'
  | 'Bb'
  | 'B'
  | 'B#'
  | 'Cb'
  | 'C'
  | 'C#'
  | 'Db'
  | 'D'
  | 'D#'
  | 'Eb'
  | 'E'
  | 'E#'
  | 'Fb'
  | 'F'
  | 'F#'
  | 'Gb'
  | 'G'
  | 'G#'

// These scale names are compatible with Tonal
// https://github.com/tonaljs/tonal/tree/main/packages/scale-type
type ScaleType =
  | 'major pentatonic'
  | 'major'
  | 'minor'
  | 'major blues'
  | 'minor blues'
  | 'melodic minor'
  | 'harmonic minor'
  | 'bebop'
  | 'diminished'
  | 'dorian'
  | 'lydian'
  | 'mixolydian'
  | 'phrygian'
  | 'locrian'
  | 'ionian pentatonic'
  | 'mixolydian pentatonic'
  | 'ritusen'
  | 'egyptian'
  | 'neopolitan major pentatonic'
  | 'vietnamese 1'
  | 'pelog'
  | 'kumoijoshi'
  | 'hirajoshi'
  | 'iwato'
  | 'in-sen'
  | 'lydian pentatonic'
  | 'malkos raga'
  | 'locrian pentatonic'
  | 'minor pentatonic'
  | 'minor six pentatonic'
  | 'flat three pentatonic'
  | 'flat six pentatonic'
  | 'scriabin'
  | 'whole tone pentatonic'
  | 'lydian #5P pentatonic'
  | 'lydian dominant pentatonic'
  | 'minor #7M pentatonic'
  | 'super locrian pentatonic'
  | 'minor hexatonic'
  | 'augmented'
  | 'piongio'
  | 'prometheus neopolitan'
  | 'prometheus'
  | 'mystery #1'
  | 'six tone symmetric'
  | 'whole tone'
  | "messiaen's mode #5"
  | 'locrian major'
  | 'double harmonic lydian'
  | 'altered'
  | 'locrian #2'
  | 'mixolydian b6'
  | 'lydian dominant'
  | 'lydian augmented'
  | 'dorian b2'
  | 'ultralocrian'
  | 'locrian 6'
  | 'augmented heptatonic'
  | 'dorian #4'
  | 'lydian diminished'
  | 'leading whole tone'
  | 'lydian minor'
  | 'phrygian dominant'
  | 'balinese'
  | 'neopolitan major'
  | 'harmonic major'
  | 'double harmonic major'
  | 'hungarian minor'
  | 'hungarian major'
  | 'oriental'
  | 'flamenco'
  | 'todi raga'
  | 'persian'
  | 'enigmatic'
  | 'major augmented'
  | 'lydian #9'
  | "messiaen's mode #4"
  | 'purvi raga'
  | 'spanish heptatonic'
  | 'bebop minor'
  | 'bebop major'
  | 'bebop locrian'
  | 'minor bebop'
  | 'ichikosucho'
  | 'minor six diminished'
  | 'half-whole diminished'
  | 'kafi raga'
  | "messiaen's mode #6"
  | 'composite blues'
  | "messiaen's mode #3"
  | "messiaen's mode #7"
  | 'chromatic'
