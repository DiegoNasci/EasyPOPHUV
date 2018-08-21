<template>
  <q-layout view="lHh Lpr lFf">
    <q-layout-header>
      <q-toolbar
        color="huv"
        :inverted="$q.theme === 'ios'"
      >
        <q-btn
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
        >
          <q-icon name="fas fa-bars" />
        </q-btn>
        <q-toolbar-title>
          EASY POP HUV
        </q-toolbar-title>
        <q-icon name="fas fa-sign-out-alt" @click.native="home" color="white" class="flex right"></q-icon>
      </q-toolbar>
    </q-layout-header>

    <q-layout-drawer
      v-model="leftDrawerOpen"
      :content-class="$q.theme === 'mat' ? 'bg-grey-2' : null"
    >
    <div class="bg-huv">
      <div class="text-white text-bold q-display-1 q-pa-sm flex flex-center">
        Menu
      </div>
    </div>
      <q-list
        no-border
        link
        inset-delimiter
      >
        <q-list-header>Escolha uma das opções:</q-list-header>
        <q-item @click.native="$router.push('/main')">
          <q-item-side icon="fa fa-home" />
          <q-item-main label="Página Inicial"/>
        </q-item>
        <q-collapsible icon="fas fa-trash-alt" label="Plano de Gerenciamento de Resíduos (PGR)">
          <div>
            <q-item @click.native="$router.push('/main/PGRSS1')">
              <q-item-main label="Armazenamento Externo"/>
            </q-item>
          </div>
          <div>
            <q-item @click.native="$router.push('/main/PGRSS2')">
              <q-item-main label="Característica e Quantidade de Resíduos Gerado" />
            </q-item>
          </div>
          <div>
            <q-item @click.native="$router.push('/main/PGRSS3')">
              <q-item-main label="Coleta e Transporte Externo" />
            </q-item>
          </div>
          <div>
            <q-item @click.native="$router.push('/main/PGRSS4')">
              <q-item-main label="Coleta e Transporte Interno" />
            </q-item>
          </div>
          <div>
            <q-item @click.native="$router.push('/main/PGRSS5')">
              <q-item-main label="Destinação Final Adequada" />
            </q-item>
          </div>
          <div>
            <q-item @click.native="$router.push('/main/PGRSS6')">
              <q-item-main label="Manuseio e Acondicionamento" />
            </q-item>
          </div>
          <div>
            <q-item @click.native="$router.push('/main/PGRSS7')">
              <q-item-main label="Origem de Geração e Fluxo dos Resíduos" />
            </q-item>
          </div>
        </q-collapsible>
        <q-collapsible v-if="group === 'aluno' || group === 'colaborador'" icon="far fa-file-alt" label="Protocolo Operacional Padrão (POP)">
          <q-collapsible label="Higienização">
            <div>
              <q-item @click.native="$router.push('/main/hg/POP9')">
                <q-item-main label="Alojamento Conjunto e Ginecologia"/>
              </q-item>
            </div>
            <div>
              <q-item @click.native="$router.push('/main/hg/POP16')">
                <q-item-main label="Ambulatório" />
              </q-item>
            </div>
            <div>
              <q-item @click.native="$router.push('/main/hg/POP15')">
                <q-item-main label="Apartamentos" />
              </q-item>
            </div>
            <div>
              <q-item @click.native="$router.push('/main/hg/POP5')">
                <q-item-main label="Central de Material de Esterilização" />
              </q-item>
            </div>
            <div>
              <q-item @click.native="$router.push('/main/hg/POP4')">
                <q-item-main label="Centro Cirúrgico" />
              </q-item>
            </div>
            <div>
              <q-item @click.native="$router.push('/main/hg/POP20')">
                <q-item-main label="Centro Oncológico" />
              </q-item>
            </div>
            <div>
              <q-item @click.native="$router.push('/main/hg/POP8')">
                <q-item-main label="Clínica Médica e Clínica Cirúrgica" />
              </q-item>
            </div>
            <div>
              <q-item @click.native="$router.push('/main/hg/POP14')">
                <q-item-main label="Emergência" />
              </q-item>
            </div>
            <div>
              <q-item @click.native="$router.push('/main/hg/POP21')">
                <q-item-main label="Enfermaria Cardíaca" />
              </q-item>
            </div>
            <div>
              <q-item @click.native="$router.push('/main/hg/POP18')">
                <q-item-main label="Farmácia e Laboratório" />
              </q-item>
            </div>
            <div>
              <q-item @click.native="$router.push('/main/hg/POP19')">
                <q-item-main label="Hemocentro" />
              </q-item>
            </div>
            <div>
              <q-item @click.native="$router.push('/main/hg/POP11')">
                <q-item-main label="Hemodiálise" />
              </q-item>
            </div>
            <div>
              <q-item @click.native="$router.push('/main/hg/POP13')">
                <q-item-main label="Hemodinâmica" />
              </q-item>
            </div>
            <div>
              <q-item @click.native="$router.push('/main/hg/POP3')">
                <q-item-main label="Higienização das mãos" />
              </q-item>
            </div>
            <div>
              <q-item @click.native="$router.push('/main/hg/POP1')">
                <q-item-main label="Higienização do Ambiente Hospitalar" />
              </q-item>
            </div>
            <div>
              <q-item @click.native="$router.push('/main/hg/POP2')">
                <q-item-main label="Limpeza e Desinfecção de Superfícies, Mobiliários e Geladeiras" />
              </q-item>
            </div>
            <div>
              <q-item @click.native="$router.push('/main/hg/POP7')">
                <q-item-main label="Pediatria" />
              </q-item>
            </div>
            <div>
              <q-item @click.native="$router.push('/main/hg/POP12')">
                <q-item-main label="Serviço de Nutrição" />
              </q-item>
            </div>
            <div>
              <q-item @click.native="$router.push('/main/hg/POP17')">
                <q-item-main label="Setor de Radiologia" />
              </q-item>
            </div>
            <div>
              <q-item @click.native="$router.push('/main/hg/POP6')">
                <q-item-main label="UTI Adulto" />
              </q-item>
            </div>
            <div>
              <q-item @click.native="$router.push('/main/hg/POP10')">
                <q-item-main label="UTI Neonatal e UI" />
              </q-item>
            </div>
          </q-collapsible>
        </q-collapsible>
         <q-collapsible  v-if="group === 'aluno' || group === 'colaborador'" icon="fas fa-compass" label="Mapas para Gerenciamento de Resíduos (MGR)">
          <div>
            <q-item @click.native="$router.push('/main/MAPA1')">
              <q-item-main label="Mapa 1º Pavimento"/>
            </q-item>
          </div>
          <div>
            <q-item @click.native="$router.push('/main/MAPA2')">
              <q-item-main label="Mapa Térreo Externo" />
            </q-item>
          </div>
          <div>
            <q-item @click.native="$router.push('/main/MAPA3')">
              <q-item-main label="Mapa Térreo Interno" />
            </q-item>
          </div>
        </q-collapsible>
      </q-list>
    </q-layout-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { openURL } from 'quasar'
import { fire } from '../plugins/firebase'
export default {
  data () {
    return {
      leftDrawerOpen: this.$q.platform.is.desktop,
      group: ''
    }
  },
  created () {
    this.users = fire.auth().currentUser
    if (this.users) {
      this.group = this.users.group
    }
    console.log('Grupo: ' + this.group)
  },
  methods: {
    openURL,
    home () {
      this.$auth.signOut().then(() => {
        console.log('Logout Successfull')
        this.$router.push('/')
      })
    }
  }
}
</script>

<style>
.maximo-pop {
  max-width: 800px;
}
.bg-huv {
  background-color: rgb(13, 187, 138);
  color: white;
}
</style>
