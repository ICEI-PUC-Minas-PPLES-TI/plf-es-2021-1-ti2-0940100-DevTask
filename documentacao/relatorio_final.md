# DEVTASK

<img src=".\imagens\logo.png" alt="DevTask" width="100" align="right" />

**Ana Clara Fonseca Campos, claracamposbh@hotmail.com**

**Joao Pedro Mayrink de Jesus, joaopmayrinkj@gmail.com**

**Jose Vitor da Silva Sousa, jvitosousa@gmail.com**

**Marlene Vasconcelos Moraes de Oliveira, marlenevmoliveira@gmail.com**

---

_Curso de Engenharia de Software, Unidade Praça da Liberdade_

_Instituto de Informática e Ciências Exatas – Pontifícia Universidade de Minas Gerais (PUC MINAS), Belo Horizonte – MG – Brasil_

---

_**Resumo*** <justify>DevTask é uma plataforma de desenvolvedores freelancers, no modo marketplace. A missão é conectar pessoas — físicas e/ou jurídicas — interessadas em serviços de software com os profissionais autônomos. O contato entre os desenvolvedores e clientes é direto via chat ou e-mail, além do suporte técnico em caso de dúvidas ou problemas.

---


## 1. Introdução

​	A inserção das novas tecnologias e inovações trouxe um mercado que atualiza-se constantemente. O que demoravam décadas para haver uma mudança tecnológica significativa, atualmente acontece em meses. Nesse contexto, as empresas e corporativas sentiram-se na necessidade do investimento em tecnologias e profissionais especializados na área. 

    1.1 Contextualização

​		Em março de 2020, a pandemia do Coronavírus (Covid-19) intensificou a aceleração da inserção de dispositivos tecnológicos, digitais e automatização de serviços. O isolamento social dessa época, fez com que muitas empresas adotassem o modelo *home office*, além do aumento de vagas na área de tecnologia das oportunidades ofertadas. 

    1.2 Problema

​	Em contrapartida, nota-se que estas são, majoritariamente, em cargos mais altos, como gerência, diretoria e desenvolvedores pleno e sênior, o que fazem outros níveis de profissionais, como estagiários e desenvolvedores júnior terem dificuldades de encontrar boas oportunidades ou oportunidades com nível de conhecimento exigido adequado para esses cargos. Consequentemente, os profissionais estagiários e desenvolvedores procuram outras alternativas para renda adicional, como o *freelancer*, que nem sempre é um mercado favorável para os iniciantes.

    1.3 Objetivo geral

​	Diante disso, o objetivo deste projeto é elaborar uma plataforma voltada para este público, e promover a conexão entre desenvolvedores que desejam participar de projetos de software e entidades que possuem demanda por serviços de *software*. Assim, os desenvolvedores participam com o atendimento a clientes diretamente e, consequentemente, adquirem conhecimento e diversidade de portfólio. 

        1.3.1 Objetivos específicos

Apresente também alguns (pelo menos 2) **objetivos específicos** dependendo de onde você vai querer 
concentrar a sua prática investigativa, ou como você vai aprofundar no seu trabalho.

    1.4 Justificativas

Mostre também as **justificativas** para o 
desenvolvimento do seu trabalho e, caso deseje, desta-que alguma contribuição do trabalho.


## 2. Participantes do processo

​	Os participantes do processo (também chamados de “*stakeholders*” são as partes interessadas no processo, independente do nível. Para abordar esse tópico, escolhemos a metodologia da Matriz de *Stakeholders*.

**2.1. Matriz de \*Stakeholders\***

​	A matriz de *stakeholders* consiste no mapeamento de todas as partes interessadas na solução, organizadas por níveis de enfoque. De acordo com as discussões, foram listados na matriz abaixo os diferentes perfis das partes interessadas, pessoas e organizações direta ou indiretamente afetadas pelo projeto consideradas as chaves para a tomada de decisões do projeto. 

 

<img src=".\imagens\mapa.png" alt="mapa" style="zoom:60%;"/>

 

**Figura 1 - Mapa de *Stakeholders***

​	Ao centro da Figura, temos os dois perfis a serem atendidos, “Dev iniciante” e “Cliente de Software”. Já no segundo nível temos as “Empresas de software”, não sendo o foco da solução, mas que também se beneficiam do processo. Os outros perfis no arco mais externo são os que podem ter algum contato com a plataforma de forma indireta, podendo também ser a fonte da maioria dos utilizadores principais.

 

**2.2. Personas**

 

| <img src=".\imagens\persona1.png" alt="img width=120px" style="zoom:40%;"/> | **João Pedro Mayrink**                                       |                                                              |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| **Idade:** 27  **Ocupação**:  Estudante de tecnologia.  **Formação Acadêmica:** Graduação incompleta. | **Redes:**  ●   Linkedin; <br> ●   Workana;                  |                                                              |
| **Motivação:**  ●   Ingressar no mercado de trabalho.        | **Frustração:**  ●   vagas de estágio com requisitos  complexo | **Hobbies:**  ●   Ver séries. <br/> ●   Estudar programação. |

 

| <img src=".\imagens\persona2.png" alt="img width=120px" style="zoom:40%;"/> | **Ana Clara Fonseca**                             |                                                      |
| ------------------------------------------------------------ | ------------------------------------------------- | ---------------------------------------------------- |
| **Idade:** 20  anos  **Ocupação**: Desenvolvedor full-stack.  **Formação Acadêmica:**   Engenheira de Software | **Redes:**  ●   ProgamaThor;  ●   Workana;        |                                                      |
| **Motivação:**  ●   Divulgação e renda extra.                | **Frustração:**  ●   Remuneração do seu trabalho. | **Hobbies:**  ●   Tocar violão;  ●   Andar de skate; |

 

| <img src=".\imagens\persona3.png" alt="img width=120px" style="zoom:40%;"/> | **Jose Vitor da Silva Sousa**                          |                                                        |
| ------------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| **Idade:** 45  anos  **Ocupação**: Gerente de Vendas  **Formação Acadêmica:** Cursando graduação | **Redes:**  ●   VintePila;  ●   Freelancer.com;        |                                                        |
| **Motivação:**  ●   Montar um site para curso trader.        | **Frustração:**  ●   Falta de profissionais autônomos. | **Hobbies:**  ●   Cuidar dos pets.  ●   Jogar futebol; |



**2.3 Histórias do usuário**

| Eu como …   [PERSONA]          | … quero/desejo …  [O QUE]                                | … para ....  [POR QUE]                       |
| ------------------------------ | -------------------------------------------------------- | -------------------------------------------- |
| Eu como estudante.             | Quero uma oportunidade  de aprimorar minhas habilidades. | Para ser remunerado.                         |
| Eu como desenvolvedor  junior. | Preciso de trabalhos  externos ao meu.                   | Para ter uma renda  extra.                   |
| Eu como estudante.             | Quero divulgar minhas  habilidades.                      | Para achar um estágio.                       |
| Eu como empresa de  software.  | Desejo buscar  funcionários.                             | Para achar novos  talentos.                  |
| Eu como cliente.               | Desejo achar um  profissional.                           | Desenvolver uma  aplicação para meu negócio. |



## 3. Modelagem do processo de negócio

## 3.1. Análise da situação atual

Apresente aqui os problemas existentes que viabilizam sua proposta. Apresente o modelo do sistema como ele funciona hoje. Caso sua proposta seja inovadora e não existam processos claramente definidos, _ **apresente como as tarefas que o seu sistema pretende implementar são executadas atualmente** _, mesmo que não se utilize tecnologia computacional.

## 3.2. Descrição Geral da proposta

Apresente aqui uma descrição da sua proposta abordando seus limites e suas ligações com as estratégias e objetivos do negócio. Apresente aqui as oportunidades de melhorias.

## 3.3. Processos

### 3.3.1 Processo 1 – NOME DO PROCESSO

Apresente aqui o nome e as oportunidades de melhorias para o processo 1. Em seguida, apresente o modelo do processo 1, descrito no padrão BPMN.

![Exemplo de um Modelo BPMN do PROCESSO 1](imagens/process.png "Modelo BPMN do Processo 1.")


### 3.3.2 Processo 2 – NOME DO PROCESSO

Apresente aqui o nome e as oportunidades de melhorias para o processo 2. Em seguida, apresente o modelo do processo 2, descrito no padrão BPMN.

![Exemplo de um Modelo BPMN do PROCESSO 2](imagens/call_process.png "Modelo BPMN do Processo 2.")

## 4. Projeto da Solução

### 4.1. Detalhamento das atividades

Descrever aqui cada uma das propriedades das atividades de cada um dos processos. Devem estar relacionadas com o modelo de processo apresentado anteriormente.

#### Processo 1 – NOME DO PROCESSO

**Nome da atividade 1**

| **Campo** | **Tipo** | **Restrições** | **Valor default** |
| --- | --- | --- | --- |
| [Nome do campo] | [Área de texto, Caixa de texto, Número, Data, Imagem, Seleção única, Múltipla escolha, Arquivo, Link, Tabela] |  |  |
| ***Exemplo:***  |    |     |
| login | Caixa de Texto | formato de e-mail |  |
| senha | Caixa de Texto | mínimo de 8 caracteres |   |

**Nome da atividade 2**

| **Campo** | **Tipo** | **Restrições** | **Valor default** |
| --- | --- | --- | --- |
| [Nome do campo] | [Área de texto, Caixa de texto, Número, Data, Imagem, Seleção única, Múltipla escolha, Arquivo, Link, Tabela] |  |  |
|    |    |     |

#### Processo 2 – NOME DO PROCESSO

**Nome da atividade 1**

| **Campo** | **Tipo** | **Restrições** | **Valor default** |
| --- | --- | --- | --- |
| [Nome do campo] | [Área de texto, Caixa de texto, Número, Data, Imagem, Seleção única, Múltipla escolha, Arquivo, Link, Tabela] |  |  |
|    |    |     |

**Nome da atividade 2**

| **Campo** | **Tipo** | **Restrições** | **Valor default** |
| --- | --- | --- | --- |
| [Nome do campo] | [Área de texto, Caixa de texto, Número, Data, Imagem, Seleção única, Múltipla escolha, Arquivo, Link, Tabela] |  |  |
|    |    |     |

### 4.2. Tecnologias

Descreva qual(is) tecnologias você vai usar para resolver o seu problema, ou seja implementar a sua solução. Liste todas as tecnologias envolvidas, linguagens a serem utilizadas, serviços web, frameworks, bibliotecas, IDEs de desenvolvimento, e ferramentas. Apresente também uma figura explicando como as tecnologias estão relacionadas ou como uma interação do usuário com o sistema vai ser conduzida, por onde ela passa até retornar uma resposta ao usuário.

## 5. Modelagem de dados

Apresente o modelo de dados. Defina o dicionário de dados com os respectivos formatos e significados.

### 5.1. Diagrama de Entidade-Relacionamento

Apresente aqui o Diagrama de Entidade-Relacionamento (DER) que contemple todos conceitos e atributos apresentados item anterior. Deve contemplar também o controle de acesso de usuários de acordo com os papeis definidos nos modelos do processo de negócio.

![Diagrama de Entidade Relacionamento de Exemplo](imagens/er_diagram.png "Diagrama de Entidade Relacionamento de Exemplo")


## 6. Indicadores de desempenho

Apresente aqui os principais indicadores de desempenho e algumas metas para o processo. Atenção: as informações necessárias para gerar os indicadores devem estar contempladas no diagrama de classe. Colocar no mínimo 5 indicadores.

Usar o seguinte modelo:

| **Indicador** | **Objetivos** | **Descrição** | **Cálculo** | **Fonte dados** | **Perspectiva** |
| --- | --- | --- | --- | --- | --- |
| Percentual reclamações | Avaliar quantitativamente as reclamações | Percentual de reclamações em relação ao total atendimento |   | Tabela reclamações | Aprendizado e Crescimento |
| Taxa de Requisições abertas | Melhorar a prestação de serviços medindo a porcentagem de requisições | Mede % de requisições atendidas na semana | \*100 | Tabela solicitações | Processos internos |
| Taxa de entrega de material | Manter controle sobre os materiais que estão sendo entregues | Mede % de material entregue dentro do mês |   | Tabela Pedidos | Clientes |

Obs.: todas as informações para gerar os indicadores devem estar no diagrama de classe **a ser proposto**

## 7.Sistema desenvolvido

Faça aqui uma breve descrição do software e coloque as principais telas com uma explicação de como usar cada uma.

## 8. Avaliação

Faça aqui sobre a avaliação do software. Indique se ele atendeu as expectativas e ele é viável. Para não ficar subjetivo, o ideal é fazer um questionário e pedir ao usuário do processo que faça a avaliação

## 9. Conclusão

Apresente aqui a conclusão do seu trabalho. Discussão dos resultados obtidos no trabalho, onde se verifica as observações pessoais de cada aluno. Poderá também apresentar sugestões de novas linhas de estudo.

# REFERÊNCIAS

Como um projeto de software não requer revisão bibliográfica, a inclusão das referências não é obrigatória. No entanto, caso você deseje incluir referências relacionadas às tecnologias, padrões, ou metodologias que serão usadas no seu trabalho, relacione-as de acordo com a ABNT.

Verifique no link abaixo como devem ser as referências no padrão ABNT:

http://www.pucminas.br/imagedb/documento/DOC\_DSC\_NOME\_ARQUI20160217102425.pdf


**[1.1]** - _ELMASRI, Ramez; NAVATHE, Sham. **Sistemas de banco de dados**. 7. ed. São Paulo: Pearson, c2019. E-book. ISBN 9788543025001._

**[1.2]** - _COPPIN, Ben. **Inteligência artificial**. Rio de Janeiro, RJ: LTC, c2010. E-book. ISBN 978-85-216-2936-8._

**[1.3]** - _CORMEN, Thomas H. et al. **Algoritmos: teoria e prática**. Rio de Janeiro, RJ: Elsevier, Campus, c2012. xvi, 926 p. ISBN 9788535236996._

**[1.4]** - _SUTHERLAND, Jeffrey Victor. **Scrum: a arte de fazer o dobro do trabalho na metade do tempo**. 2. ed. rev. São Paulo, SP: Leya, 2016. 236, [4] p. ISBN 9788544104514._

**[1.5]** - _RUSSELL, Stuart J.; NORVIG, Peter. **Inteligência artificial**. Rio de Janeiro: Elsevier, c2013. xxi, 988 p. ISBN 9788535237016._



# APÊNDICES

**Colocar link:**

Do código;

Dos artefatos;

Da apresentação final;

Do vídeo de apresentação.




