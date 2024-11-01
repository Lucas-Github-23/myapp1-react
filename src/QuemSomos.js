import React from 'react'

import Img from 'react-image'
import './QuemSomos.css'
import fabrica from './fabrica2.jpg'

function QuemSomos() {
    return (
        <div className='QuemSomos'>


            <h1>Quem Somos</h1>
            <h2>Sobre nós</h2>
            <p>
                Fundada em 2000, a Gela Boca nasceu com a crença que o sorvete tem o poder de proporcionar momentos simples de
                felicidade.
                Por isso a responsabilidade que carregamos vai muito além de entregar um produto que apenas alimente.

                A ideia de criar a Gela Boca surgiu no ano 2000 em Maringá, no norte do Paraná. No início a fábrica e a primeira
                loja dividiam
                o espaço de apenas 120m². Com o passar dos anos a empresa foi conquistando os moradores da Cidade Canção e
                evoluindo, os sabores
                de sorvete foram se multiplicando e junto com eles a demanda.

                Hoje contamos com 8.000m², que se dividem entre administração e fábrica, e mais de 100 lojas franqueadas em
                operação e outras
                10 lojas em implantação nos estados do Paraná, Mato Grosso do Sul, São Paulo e Santa Catarina. Mas, não
                pretendemos parar por
                aí, a Gela Boca ainda tem muito para progredir. Estamos diariamente em busca de novos conhecimentos para nos
                modernizar e
                conseguir elevar ainda mais a qualidade e variedade dos nossos produtos. Tudo isso para atender com todo cuidado
                todas
                as necessidades dos nossos clientes e conseguir que eles vivam a delícia da simplicidade.
            </p>

            <img src={fabrica}/>

            <h2>Fundador</h2>
            <p>
            Desde os 12 anos já trabalhava ao lado da família no balcão da sorveteria e de lá pra cá segue construindo uma
            das marcas mais promissoras do Brasil. A Gela Boca foi criada em 2000 e, em 2010, idealizado por Thiago Ramalho,
           iniciou seu plano de expansão por meio de franquias. A sorveteria nasceu para o sustento da família Ramalho e se
           tornou a realização dos sonhos e fonte de renda de diversas outras pessoas através do franchising.
           Em 2018, Thiago foi eleito o Jovem Empreendedor do Ano pelo Conselho Permanente do Jovem Empresário (COPEJEM) da
           ACIM.
           Conheça um pouco mais da história de Thiago Ramalho e sua família no vídeo produzido para a divulgação do
          prêmio. 
            </p>

        </div>

    )

}
export default QuemSomos;