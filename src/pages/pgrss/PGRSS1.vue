<template lang="pug">
div.flex.flex-center
  div.maximo-pop
    div.q-ml-lg.q-mr-lg
      h4.text-center
        b|Armazenamento Externo
    div.q-mr-md.q-ml-md
      div
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
        |O atual dimensionamento do abrigo externo atende completamente o quantitativo de resíduos gerados. O piso e as paredes do abrigo são revestidos por material liso, impermeável, lavável e de fácil higienização.
      div.q-mb-md
        |► Grupo A (Infectantes)
        br
        |Os resíduos são armazenados em containeres, em área específica, no abrigo externo de resíduos, de acordo com as exigências legais. O abrigo tem acesso restrito, apenas o chefe da zeladoria possui a chave que abre esse depósito e os funcionários designados por ele para execução dessa atividade.
      div.q-mb-md
        |► Grupo B (Químicos)
        br
        |Esses resíduos possuem um abrigo separado dos demais resíduos. Fixador e revelador são armazenados em abrigo externo específicos, com acesso restrito, enquanto os medicamentos vencidos são armazenados num arquivo no Setor de Gestão e Planejamento Ambiental.
      div.q-mb-md
        |► Grupo C (Radioativos)
        br
        |Não ocorre manuseio de resíduos desse grupo no HUV.
      div.q-mb-md
        |► Grupo D (Comuns)
        br
        |Os resíduos recicláveis são armazenados no depósito externo próprio, separado de acordo com o tipo de material; os não recicláveis são armazenados em containeres, em área separada, no abrigo externo de resíduos.
      div.q-mb-md
        |► Grupo E (Perfurocortantes)
        br
        |As caixas de papelão descarpack e as embalagens de 5 litros de polietileno são armazenadas separadamente em área própria no abrigo externo de resíduos.

</template>
<script>
export default {
}
</script>

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
