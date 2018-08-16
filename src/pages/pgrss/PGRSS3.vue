<template lang="pug">
div.flex.flex-center
  div.maximo-pop
    div.q-ml-lg.q-mr-lg
      h4.text-center
        b|Coleta e Transporte Externo
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
        |Todos os resíduos deste grupo que saem do depósito externo são coletados e transportados pela empresa Eco4life Soluções Ambientais LTDA ME (LO INEA IN015921).
      div.q-mb-md
        |► Grupo B (Químicos)
        br
        |A coleta e o transporte do resíduo químico fixador são feito pela empresa Futura Soluções Ambientais LTDA-EPP (licença INEA 012257); e o revelador pela nossa instituição. Os resíduos quimioterápicos e de medicamentos são coletados e transportados pela Eco4life Soluções Ambientais LTDA ME.
      div.q-mb-md
        |► Grupo C (Radioativos)
        br
        |Não ocorre manuseio de resíduos desse grupo no HUV.
      div.q-mb-md
        |► Grupo D (Comuns)
        br
        |Os resíduos ou materiais recicláveis úmidos são coletados e transportados pelos serviços de limpeza municipal da Prefeitura Municipal de Vassouras. Os resíduos recicláveis são coletados pelos funcionários da universidade utilizando um veículo próprio.
      div.q-mb-md
        |► Grupo E (Perfurocortantes)
        br
        |Perfurocortantes são coletados e transportados pela empresa Eco4life Soluções Ambientais LTDA ME e são encaminhados juntamente com os resíduos do Grupo A.

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
