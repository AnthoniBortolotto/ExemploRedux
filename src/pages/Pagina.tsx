import { connect, MapDispatchToPropsNonObject } from 'react-redux'
import React, { Component } from 'react'
import { CHANGE_USER, CLEAN_USER, ReducerType } from '../atoms/actionTypes';
import store from '../organisms/store';
import { createStyles, withStyles, WithStyles } from '@material-ui/styles';
import { red } from '@material-ui/core/colors';
export interface PaginaProps extends WithStyles<typeof styles>{
    active: string;
    nomes: string[];
    selecionarUsuario: Function,
    limparUsuario: Function
}

export interface PaginaState {
}

const styles = (theme:any) => createStyles({
    textColor: {
        color: 'red'
    }
})

class Pagina extends React.Component<PaginaProps, PaginaState> {
    render() {
        console.log(this.props);
        const { classes } = this.props;
        return (<>
            <ul>
                {this.props.nomes.map((nome: string, index: number) => {
                   return(<li key={index} className={classes.textColor} onClick={() => this.props.selecionarUsuario(nome)}>{nome}</li>)
                })}
            </ul>
            <p>O usuário ativo é: {this.props.active}</p>
            <button onClick={() => this.props.limparUsuario()}>limpar</button></>);
    }
}
const mapStateToProps = (state: ReducerType) => {
    return {
        active: state.reducer.active,
        nomes: state.reducer.nomes
    }
}

const mapDispatchToProps = (dispatch:Function) => {
    console.log(typeof dispatch)
    return {
        selecionarUsuario: (usuario:string) => {dispatch({type:CHANGE_USER, payload:usuario})},
        limparUsuario: () => {dispatch({type: CLEAN_USER})}
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Pagina))
