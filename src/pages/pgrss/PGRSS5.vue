<template lang="pug">
div.flex.flex-center
  div.maximo-pop
    div.q-ml-lg.q-mr-lg
      h4.text-center
        b|Destinação Final Adequada
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
        |Todos os resíduos infectantes passam por autoclavagem na Vertec Ambiental LTDA-EPP e depois encaminhados para disposição final no aterro sanitário da Central de Tratamento de Resíduos Nova Iguaçu S.A, no Município de Nova Iguaçu-RJ. As peças anatômicas, placentas e fetos, depois de manipulados no Laboratório de Anatomia Patológica, são encaminhados para sepultamento em cova rasa no Cemitério Municipal de Vassouras.
      div.q-mb-md
        |► Grupo B (Químicos)
        br
        |O resíduo químico fixador é encaminhado para empresa Futura Soluções Ambientais LTDA-EPP, que procede ao seu tratamento e disposição final, em conformidade com a legislação; o revelador é neutralizado em laboratórios da Universidade Severino Sombra, sendo descartado em rede de esgoto após o processo. Os resíduos de medicamentos e resíduos quimioterápicos são encaminhados para incineração na empresa Haztec Tecnologia e Planejamento ambiental S/A (LO INEA IN001192), no Município de Belford Roxo-RJ e a sua disposição final é feita pela empresa Bayer S/A (LO INEA IN001000) no aterro industrial no Município de Belford Roxo-RJ.
      div.q-mb-md
        |► Grupo C (Radioativos)
        br
        |Não ocorre manuseio de resíduos desse grupo no HUV.
      div.q-mb-md
        |► Grupo D (Comuns)
        br
        |Os resíduos úmidos ou materiais recicláveis úmidos são destinados para o Aterro Sanitário da Prefeitura Municipal de Vassouras. Os resíduos recicláveis são destinados para doação.
      div.q-mb-md
        |► Grupo E (Perfurocortantes)
        br
        |Todos os resíduos perfurocortantes são submetidos ao tratamento por autoclavagem na empresa Vertec Ambiental LTDA-EPP (LO 06/2013, Secretaria Municipal do Meio Ambiente de Vassouras) e posteriormente são encaminhados para o aterro sanitário da Central de Tratamento de Resíduos Nova Iguaçu S.A. Todos os resíduos desse grupo saem do HUV obrigatoriamente com o manifesto de resíduos.

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
