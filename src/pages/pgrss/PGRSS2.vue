<template lang="pug">
div.flex.flex-center
  div.maximo-pop
    div.q-ml-lg.q-mr-lg
      h4.text-center
        b|Característica e Quantidade de Resíduos Gerado
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
        |► Grupo A - Resíduos Biológicos
        br
        |Todos os resíduos infectantes gerados no hospital passam por um processo de autoclavagem para descontaminação. Entretanto, os resíduos do Hemocentro e do Laboratório de Análises Clínicas são autoclavados no próprio local, antes de serem encaminhados para o abrigo de resíduos.  A tabela 1 apresenta as características e a quantidade dos resíduos gerados por mês, além das fontes geradoras dentro do hospital.
      div.q-mb-md
        h5.flex.flex-center
          |Tabela 1
        div.text-center.justify-center
          table.text-center
            tr
              td
                |Local de geração
              td
                |Característica do resíduo
              td
                |Quantidade (kg/mês)
            tr
              td
                |Clínica Médica
                |Apartamentos
                |Clínica Cirúrgica
                |Ginecologia e Obstetrícia
                |Pediatria
                |UTI Adulto
                |UI Neonatal
                |Ambulatório
                |Emergência
                |Centro Cirúrgico
              td
                |Algodão, gaze, atadura, fita adesiva de autoclave, micropore, esparadrapo scalp / jelcos, fita glicemica, seringas, equipos: soro / bomba e microgotas, polifix, sondas, giletes, prestobarba, drenos, compressas, urofix, luvas, jontex, fios de sutura, tubo orotraqueal, ampolas, fraldas, absorventes, papel pardo, filme pvc, bolsa de colostomia, bolsa de sangue, luvas.
              td
                |3900
            tr
              td
                |Odontologia
              td
                |Gaze, algodão, toalha de papel, folhas de papel, luvas de látex, caixas de papelão, ponteiras de aspirador, embalagens plásticas tubetes de anestesia, fio dental, restos radiculares, tecido oral, dentes, seringas, curativos em geral
              td
                |290
            tr
              td
                |Hemocentro e Laboratório de Análises Clínicas
              td
                |Algodão, gaze, esparadrapo, cateter nasal tipo de óculos, equipo de soro, seringas, equipo de soro, bolsas de sangue, papel, plásticos, copos plásticos, swabs c/ microorganismos, restos de materiais biológicos
              td
                |600
            tr
              td
                |Hemodiálise
              td
                |Algodão, gaze, esparadrapo, cateter nasal tipo óculos, seringas equipo de soro, bolsas de sangue
              td
                |250
            tr
              td
                |Laboratório de Anatomia Patológica
              td
                |Gaze, algodão, esparadrapo, seringa, peças de materiais biológicos, peças anatômicas, placentas, fetos
              td
                |90
        div.q-mb-md
          |► Grupo B - Resíduos Químicos
          br
          |A quantidade de resíduos químicos gerados no HUV é pequena. São geradas lâmpadas fluorescentes em todos os setores; pilhas, baterias, e termômetros em alguns setores, conforme descritos na tabela 2. No setor de radiologia são gerados efluentes fixador e revelador e no serviço de oncologia geram-se resíduos soldos quimioterápicos. Medicamentos vencidos são provenientes da farmácia.
        div.q-mb-md
          h5.flex.flex-center
            |Tabela 2
          table.text-center
            tr
              td
                |Local de Geração
              td
                |Características
              td
                |Quantidade
            tr
              td
                |Laboratório de Análises Clínicas
              td
                |Termômetro
                |Pilha
                |Bateria
              td
                |40 kg/mês
            tr
              td
                |Hemocentro
              td
                |Cartões em geral
                |Kits para sorologia
              td
                |1 kg/mês
            tr
              td
                |Radiologia
              td
                |Solução de revelador e de fixador
              td
                |90 l/mês
            tr
              td
                |Farmácia
              td
                |Medicamento vencido
              td
                |5 kg/mês
            tr
              td
                |Laboratório de Anatomia Patológica
              td
                |Formol, álcool etílico, xilol, pilhas, baterias
              td
                |20 l/mês
            tr
              td
                |Oncologia
              td
                |Resíduos Quimioterápicos
              td
                |80 kg/mês
        div.q-mb-md
          |► Grupo C - Resíduos Radioativos
          br
          |Não ocorre geração de resíduos desse grupo no HUV.
        div.q-mb-md
          |► Grupo D - Resíduos Comuns
        div.q-mb-md
          h5.flex.flex-center
            |Tabela 3
          table.text-center
            tr
              td
                |Local de Geração
              td
                |Características
              td
                |Quantidade (Kg/mês)
            tr
              td
                |Clínica Médica
                |Apartamentos
                |Clínica Cirúrgica
                |Ginecologia e Obstetrícia
                |Pediatria
                |UTI Adulto
                |UI Neonatal
                |Ambulatório
                |Emergência
                |Centro Cirúrgico
              td
                |Frasco de álcool 70%, Papel impresso, Papel toalha, Copos descartáveis, Resíduos alimentares, vidros, pedaços de pano, embalagens plásticas
              td
                |1800
            tr
              td
                |Nutrição
              td
                |Sobras de alimentos, Esponja de aço, fita crepe, papel higiênico, louças, papel, copos plásticos, latas, embalagens plásticas, garrafas de vidro e plásticas, bombonas de água
              td
                |1790
            tr
              td
                |Hemodiálise
              td
                |Papel toalha, copos descartáveis, papelão, frasco de soro fisiológico, embalagens de agulhas para fistolas, dializadores e outras embalagens, caixas de luvas.
              td
                |180
            tr
              td
                |Laboratório de Análises Clínicas
              td
                |Papel plástico, vidro, potes plásticos, copos plásticos, papéis em geral
              td
                |30
            tr
              td
                |Laboratório de Anatomia Patológica
              td
                |Papel plástico, vidro, potes plásticos, copos plásticos
              td
                |60
            tr
              td
                |Farmácia
              td
                |Papel toalha, copos descartáveis, papelão
                |Embalagens plásticas, Embalagens de vidro
              td
                |60
            tr
              td
                |Lavanderia
              td
                |Papéis em geral, plástico, vidro, potes plásticos, copos descartáveis, tecidos
              td
                |180
            tr
              td
                |Raios-X
              td
                |Papel toalha, copos descartáveis, resíduos alimentares
              td
                |90
            tr
              td
                |Administração
              td
                |Papéis em geral, plásticos, papel higiênico e papel toalha, copos descartáveis, papelão, embalagens
              td
                |90
        div.q-mt-xl
          |► Grupo E – Resíduos Perfurocortantes:
        div.q-mb-md
          h5.flex.flex-center
            |Tabela 4
          table.text-center
            tr
              td
                |Local de geração
              td
                |Características
              td
                |Quantidade (kg/mês)
            tr
              td
                |Clínica Médica
                |Apartamentos
                |Clínica Cirúrgica
                |Ginecologia e Obstetrícia
                |Pediatria
                |UTI Adulto
                |UI Neonatal
                |Ambulatório
                |Emergência
                |Centro Cirúrgico
              td
                |Agulhas, lâmina, bisturi, equipo (soro e bomba), gilete, prestobarba
              td
                |300
            tr
              td
                |Odontologia
              td
                |Tubetes de Anestesia, seringas
              td
                |120
            tr
              td
                |Hemocentro
              td
                |Equipo de soro, seringas
              td
                |180
            tr
              td
                |Farmácia
              td
                |Bisnagas, ampolas
              td
                |35
            tr
              td
                |Laboratório de Anatomia Patológica
              td
                |Material perfurocortante, gazes, algodão esparadrapo, seringas, swabs com microrganismos, restos de materiais biológicos
              td
                |30
            tr
              td
                |Laboratório de Análises
              td
                |Seringas
              td
                |250
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
  data: () => ({
    columns: [
      {
        name: 'desc',
        required: true,
        label: 'Name',
        align: 'left',
        field: 'name',
        sortable: true
      },
      {
        name: 'calories',
        required: true,
        label: 'Calories',
        align: 'left',
        field: 'calories',
        sortable: true
      },
      {
        name: 'fat',
        required: true,
        label: 'fat',
        align: 'left',
        field: 'fat',
        sortable: true
      }
    ],
    tableData: [
      {
        name: 'Frozen Yogurt',
        calories: 159,
        fat: 6.0,
        carbs: 24,
        protein: 4.0,
        sodium: 87,
        calcium: '14%',
        iron: '1%'
      }
    ],
    visibleColumns: ['desc', 'fat', 'carbs', 'protein', 'sodium', 'calcium', 'iron'],
    separator: 'horizontal'
  })
}
</script>
