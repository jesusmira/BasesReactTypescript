
export type CounterAction = 
| { type: 'IncreaseBy', payload:{ value: number } }
| { type: 'reset' }

// export const doReset = ():CounterAction => {
//     return {
//         type:'reset'
//     }
// }
export const doReset = ():CounterAction => ({
        type: 'reset'
})

//Todo: hacer el doIncreaseBy

export const doIncreaseBy = ( value: number ):CounterAction => ({
        type: 'IncreaseBy',
        payload: { value }
})