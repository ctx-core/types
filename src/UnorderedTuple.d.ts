import type { NoRepetition } from './NoRepetition'
export type UnorderedTuple<
	MemberA extends any[] = any[]
> = NoRepetition<string, MemberA>
