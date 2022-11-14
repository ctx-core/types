import type { NoRepetition } from './NoRepetition'
export type UnorderedTuple<MemberA = any[]> = NoRepetition<string, MemberA[]>
