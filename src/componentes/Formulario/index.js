import Botao from '../Botao'
import CampoTexto from '../CampoTexto/CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import './Formulario.css'
import { useState } from 'react';


const Formulario = (props) => {


    const [nome, setNickname] = useState ('')
    const [rankingmmr, setRanking] = useState ('')
    const [imagem, setImagem] = useState ('')
    const [time, setTime] = useState('')

    const aoSalvar= (evento) => {
        evento.preventDefault()
        props.aoColaboradorCadastrado({
            nome,
            rankingmmr,
            imagem,
            time

        })
    }


    return (
        <section className='formulario'>
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card de player</h2>

                <CampoTexto 
                obrigatorio={true}
                label="Nome"
                placeholder="Digite seu Nome"
                valor={nome}
                aoAlterado={valor => setNickname(valor)}
                />
                <CampoTexto
                obrigatorio={true}
                label="Ranking "
                placeholder="Digite seu Ranking"
                valor={rankingmmr}
                aoAlterado={valor => setRanking(valor)}
                /> 
                <CampoTexto
                label="Imagem"
                placeholder="Digite o endereço da imagem"
                valor={imagem}
                aoAlterado={valor => setImagem(valor)}
                />
                <ListaSuspensa
                 obrigatorio={true
                 } label="Time"
                  itens={props.times}
                  valor={time}
                  aoAlterado={valor => setTime(valor)}
                  />
                <Botao>
                    Criar card
                </Botao>
            </form>
        </section>
    )
        
    

}

export default Formulario