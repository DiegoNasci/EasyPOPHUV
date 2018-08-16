<template lang="pug">
div.flex.flex-center
  div.maximo-pop
    div.q-ml-lg.q-mr-lg
      h4.text-center
        b|Manuseio e Acondicionamento
    div.q-mr-md.q-ml-md
      table.text-center
        tr
          td
            |Grupo
          td
            |Símbolo de Identificação
          td
            |Cor da Embalagem
        tr
          td
            |Grupo A
          td
            img.tabelaimagem(src='statics/images/rb.png' alt='Risco Biologico')
          td
            |Saco Branco Leitoso
        tr
          td
            |Grupo B
          td
            img.tabelaimagem(src='statics/images/rq.png' alt='Risco Químico')
          td
            |Embalagem original ou embalagem específica
        tr
          td
            |Grupo D
          td
            img.tabelaimagem(src='statics/images/rc.png' alt='Risco Comum')
          td
            |Saco Azul ou preto
        tr
          td
            |Grupo E
          td
            img.tabelaimagem(src='statics/images/rpc.png' alt='Risco Perfurocortante')
          td
            |Embalagem rígida, resistente à punctura, ruptura e vazamento, com tampa e identificada.
        tr.q-pt-md.q-ml-md
          td(colspan="3")
            |Obs: O Hospital Universitário de Vassouras não produz resíduos do Grupo C.
    div.q-ml-lg.q-mr-lg.q-pt-lg
      div.q-mb-md
        |► Grupo A - Resíduos Infectantes
        br
        |Os resíduos infectantes gerados no HUV, somente são manuseados por funcionários que receberam treinamento para esse tipo de resíduos (conforme POP de Coleta e Transporte de Resíduos no Anexo 2) e para o uso de EPIs como luva, botas, óculos, avental (conforme descrito no POP específico para cada EPI no anexo 1) que são obrigatórios. As substituições de funcionários para execução das atividades desse grupo somente ocorrem por motivos de faltas ou férias. Todos os resíduos desse grupo são acondicionados nos sacos plásticos brancos, amarrados e identificados com o símbolo de substância infectante (seguindo a padronização descrita na NBR7500 de 02/2003), e posteriormente encaminhados para o depósito externo. No caso de Laboratório de Análises Patológicas, os fetos e as peças anatômicas chegam ao setor dentro do frasco do polipropileno com formol (concentração de 10%).
      div.q-mb-md
        |► Grupo B - Resíduos Químicos
        br
        |Os resíduos desse grupo e gerador pelo setor de Radiologia e pelo Centro Oncológico. Os resíduos gerados na radiologia são provenientes da máquina de revelação que possui duas saídas para descarte de resíduos. Nessas saídas, foram acopladas duas mangueiras através das quais os resíduos são coletados e acondicionados em bombonas de polietileno de 20 litros. Todos os técnicos da radiologia passaram pelo treinamento sobre descarte de produtos químicos (conforme descrito no POP Descarte de Resíduos Químicos no anexo 2).
      div.q-mb-md
        |► Grupo C - Resíduos Radioativos
        br
        |Não ocorre manuseio de resíduos desse grupo no HUV.
      div.q-mb-md
        |► Grupo D – Resíduos Comuns
        br
        |Os resíduos comuns gerados no HUV são acondicionados em sacos plásticos pretos (conforme descritos na NBR 7500) e são manuseados apenas pela equipe da zeladoria.
      div.q-mb-md
        |► Grupo E - Resíduos Perfucortantes
        br
        |Os resíduos desse grupo somente são manuseados por funcionários altamente qualificados devido ao alto risco de acidentes. Os perfurocortantes gerados são armazenados em caixa de papelão descarpack e em embalagens de polietileno que seguem os padrões descritos na NBR13853 e são retiradas logo que se atinge o limite de segurança. A preocupação com a segurança dos nossos trabalhadores é constante, especialmente no manuseio dos resíduos desse grupo dentro do HUSF, visto que constantemente, são submetidos á treinamento pela equipe da Comissão de Controle de Infecção Hospitalar (CCIH) e orientações dos membros da CIPA.

</template>
<style scoped>
.tabelaimagem {
  width:128px;
  height:128px;
}

table, th, td {
    border: 1px solid black;
}
th, td {
  width: 260px;
}
</style>
<script>
export default {
}
</script>
