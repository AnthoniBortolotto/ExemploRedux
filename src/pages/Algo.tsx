import React, { Component } from 'react'
import { connect, useSelector } from 'react-redux'
import { ReducerType } from '../atoms/actionTypes'

export const Algo = () => {
    const nomes = useSelector((state:ReducerType) => state.reducer.nomes)
    return (
        <div>
            <p>{nomes}</p>
            <ul>
            {nomes.map((nome:string, index:number) =>{
                <li key={index}>{nome}</li>
            })} 
            </ul>
        </div>
    )
}

// const mapStateToProps = (state) => {
//     console.log(state);
//     return {
//         nomes: state.nomes
//     }
// }

// const mapDispatchToProps = {
    
// }

//export default connect(mapStateToProps, mapDispatchToProps)(Algo)
export default Algo