<template lang="pug">
div.flex.flex-center
  div.maximo-pop
    div.q-ml-lg.q-mr-lg
      h4.text-center
        b|Coleta e Transporte Interno
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
        |► Grupo A (Infectantes)
        br
        |Os resíduos desse grupo são coletados pelos funcionários da zeladoria uniformizados e paramentados com todos os EPI’s necessários para efetuar o serviço. Dentro das dependências do HUV são utilizados carrinhos para auxiliar no transporte interno até os pontos de armazenamento temporário (sala de expurgo). Após encher em 75% da capacidade volumétrica dos carrinhos, os resíduos são levados até a saída do setor.  Esses carrinhos são proibidos de saírem das dependências internas do HUV e os resíduos são colocados em outro carrinho para serem transportados até o depósito externo. Foram definidos três horários de coleta de resíduos sem comprometer as atividades do HUV (conforme descrito no procedimento de coleta e transporte no anexo 2). A primeira coleta é realizada pontualmente ás 11:00 h (onze horas) da manhã e o funcionário da zeladoria tem no máximo 40 min (quarenta minutos) para retirar todos os resíduos. O segundo horário de coleta e o terceiro estão definidos para às 13:00h e às 18:00h, respectivamente. Esses resíduos são encaminhados para o depósito externo conforme descrito nas plantas de fluxos de resíduos.
      div.q-mb-md
        |► Grupo B (Químicos)
        br
        |Os resíduos químicos, fixador e revelador são coletados em bombonas de polietileno de 20 litros e transportados em carrinho pelos funcionários da Zeladoria, seguindo os horários e fluxo descritos no procedimento operacional padrão desses resíduos. Medicamentos vencidos são encaminhados por funcionários da Farmácia para o Setor de Gestão e Planejamento Ambiental.
      div.q-mb-md
        |► Grupo C (Radioativos)
        br
        |Não ocorre manuseio de resíduos desse grupo no HUV.
      div.q-mb-md
        |► Grupo D (Comuns)
        br
        |Os resíduos recicláveis secos são coletados e transportados num carrinho específico para resíduos comuns e encaminhados para o abrigo externo dos mesmos e posteriormente encaminhados para doação. Os resíduos recicláveis úmidos e os não recicláveis são coletados e encaminhados para a área de resíduos comuns no abrigo externo. A coleta é executada após ter sido finalizada a retirada dos resíduos biológicos, dentro do intervalo dos 40 minutos.
      div.q-mb-md
        |► Grupo E (Perfurocortantes)
        br
        |Os resíduos perfurocortantes somente são coletados e transportados por funcionários da zeladoria quando solicitados pelos responsáveis dos diversos setores do HUV. Essas atividades seguem os horários descritos no procedimento de coleta e transporte de resíduos perfurocortantes.

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
