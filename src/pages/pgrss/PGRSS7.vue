<template lang="pug">
div.flex.flex-center
  div.maximo-pop
    div.q-ml-lg.q-mr-lg
      h4.text-center
        b|Origem de Geração e Fluxo dos resíduos
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
        |► Grupo A (Infectantes) – Fluxo de seta na cor lilás
        br
        |Os resíduos infectantes são gerados em todos os serviços, exceto nos administrativos. Os fluxos internos dos resíduos estão descritos na planta de Lay-out. Entretanto, alguns setores como o hemocentro, por questão de segurança, passam os resíduos gerados desse grupo por um processo de descontaminação através do uso de uma autoclave no próprio setor para posteriormente serem encaminhados ao depósito externo. No caso das peças anatômicas, placentas e fetos, depois de manipulados no Laboratório de Anatomia Patológica, são encaminhados para o armazenamento no frigorífico.
      div.q-mb-md
        |► Grupo B (Químicos) – Fluxo de seta na cor vermelha
        br
        |A maior quantidade de resíduos gerados desse grupo está no estado físico líquido e é gerado no setor de radiologia, conforme descrito na planta de Lay-out. Os resíduos sólidos desse grupo são constituídos basicamente de medicamentos vencidos, lâmpadas e pilhas e baterias, gerados em diferentes setores.
      div.q-mb-md
        |► Grupo C (Radioativos)
        br
        |Não ocorre geração de resíduos desse grupo no HUV.
      div.q-mb-md
        |► Grupo D (Comuns) – Fluxo de seta na cor azul
        br
        |Os resíduos comuns são gerados em todos os setores do HUV excluindo o resíduo orgânico, que é gerado somente no refeitório e nos apartamentos com as sobras de refeição dos pacientes. Os materiais recicláveis secos gerados em praticamente todos os setores do HUV são armazenados no depósito externo para posteriormente serem doados para coleta seletiva.enquanto os materiais úmidos são encaminhados para o aterro sanitário do município. Os fluxos desses resíduos estão descritos na planta Lay-out.
      div.q-mb-md
        |► Grupo E (Perfurocortantes) – Fluxo de seta na cor verde
        br
        |Os resíduos desse grupo são gerados em quase todos os setores do hospital, exceto nas salas administrativas. Seguem o fluxo descrito na planta Lay-out.
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
