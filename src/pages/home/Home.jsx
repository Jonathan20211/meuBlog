import React from 'react'

import './home.css';

//import top from '../../assets/top.jpg'
import hardware2 from '../../assets/hardware2.jpg'

export default function Home() {
  return (
    <div className='home'>
      <div className='homeImg'>
        <img className='Img' src={hardware2} alt='historia' />
      </div>
      <div>
        <p className='homeHistoria'>HISTÓRIA</p>
        <div className='linha'></div>
      </div>
      <div className='homeTexto'>
        Meu nome é Jonathan da Silva, nasceu em Venda Nova do Imigrante, Espirito Santo, em maio de 1992.
        Nasci surdo, porém minha família não sabia. Aos 2 anos de idade foi quando começaram a perceber que eu não estava desenvolvendo
        a língua oral. Minha família interagia e falava oralmente bastante e foi aí que notaram
        que não estava desenvolvendo a linguagem. Me levaram ao médico, que diagnosticou
        a surdez, encaminhou minha família para buscar fonoaudiólogo e fazer o uso
        do aparelho auditivo também. O aparelho auditivo não me ajudou muito porque eu não ouvia
        palavaras, apenas barulhos do ambiente (por exemplo: carro, caminhão, bomba, portas, etc.).<br />
        Minha família não sabia sobre a língua sinais. Aos 04 anos me matricularam
        pela primeira vez na escola regular onde ensino era oralizado. Foi bem difícil,
        eu não sabia qual era meu nome e nem como falar. Eu fiquei bem triste
        porque tinha muitas dificuldades em aprender. E falar meu nome "Jonathan", era muito difícil.
        Minha mãe me ensinava em casa e não tinha muito sucesso. Fui conseguir oralizar
        meu nome com 5 anos e minha família ficou bem feliz. Os 07 anos idade, já no ensino
        fundamental, não acompalnhava os conteúdos pois não havia comunicação, nem com os professores
        e nem como colegas. A disiciplina que eu conseguia desenvolver um pouco era matemática, devido a ser exatas e a didática
        era mais visual, já as outras disciplinas não havia tanto sucesso. Só aos 14 anos idade que fui ter contato a primeira vez
        com a língua de sinais, comecei a aprender e ai muitas portas se abriram
        pra mim.
        <div className='linhaBaixo'></div>
      </div>      
    </div>
  )
}
