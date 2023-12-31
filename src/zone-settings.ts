import { nanoid } from 'nanoid'

export const DEFAULT_VELOCITY = 100

export type QuantizeSettings = { root: boolean; voices: boolean }
export type ZoneOrderSettings = {
  leftToRight: boolean
  topToBottom: boolean
  reverse: boolean
}

const defaultOrderSettings: ZoneOrderSettings = {
  leftToRight: true,
  topToBottom: true,
  reverse: false,
}

type Common = {
  id: string
  color: string
  name: string
}
/* 

  Note Zone Settings

*/
export type Voice = { offset: number; velocity: number }
export type NoteZone = Common & {
  zoneType: 'note'
  channel: number
  octave: number
  velocity: number
  hold: boolean
  translate: number
  muteZones: string[]
  voices: Voice[]
  root: number
  scale: number[]
  order: ZoneOrderSettings
}

const defaultNoteZone: Omit<NoteZone, 'id'> = {
  name: 'Note Zone',
  color: '#333',
  zoneType: 'note',
  channel: 1,
  octave: 4,
  velocity: DEFAULT_VELOCITY,
  hold: false,
  translate: 0,
  muteZones: [],
  voices: [{ offset: 0, velocity: DEFAULT_VELOCITY }],
  root: 0,
  scale: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], // chromatic
  order: defaultOrderSettings,
}

export const getDefaultNoteZone = (
  overrides?: Partial<NoteZone>
): NoteZone => ({
  id: nanoid(),
  ...defaultNoteZone,
  ...overrides,
})

export type Zone = NoteZone

export const isNoteZone = (zone: Zone): zone is NoteZone =>
  zone.zoneType === 'note'
