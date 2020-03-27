<template>
  <v-app dark>
    <!-- Navigation -->
    <v-navigation-drawer v-model="drawer" clipped fixed app>
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
          color="primary"
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <!-- //Navigation// -->

    <!-- TopBar -->
    <v-app-bar clipped-left fixed app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />

      <!-- logo component -->

      <Logo />

      <!-- logo component -->

      <!-- <v-toolbar-title v-text="title" /> -->

      <v-spacer />

      <v-btn icon>
        <v-tooltip bottom>
          <template v-slot:activator="{ on }">
            <span v-on="on">
              <v-icon>mdi-exit-to-app</v-icon>
            </span>
          </template>
          <span>Log Out</span>
        </v-tooltip>
      </v-btn>
    </v-app-bar>
    <!-- //TopBar// -->

    <!-- Content -->
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
    <!-- //Content// -->

    <!-- Footer -->

    <v-footer inset app>
      <span class="caption">
        Copyright © Remit {{ new Date().getFullYear() }}
        <v-icon small>mdi-flash</v-icon>by Forfit . All rights reserved.
      </span>
      <v-spacer></v-spacer>
      <div>
        <v-layout id="term">
          <a
            v-for="(link, i) in importantLinks"
            :key="i"
            :href="link.href"
            class="caption mx-3"
            target="_blank"
            color="white"
            >{{ link.text }}</a
          >
        </v-layout>
      </div>
    </v-footer>

    <!-- //Footer// -->
  </v-app>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: { Logo },

  data() {
    return {
      title: 'logo',
      drawer: null,

      //  Sidebar Navigations
      items: [
        {
          icon: 'mdi-equalizer',
          title: 'Dashboard',
          to: '/dashboard'
        },

        {
          icon: 'mdi-repeat',
          title: 'Transactions',
          to: '/transactions'
        },

        {
          icon: 'mdi-reply',
          title: 'Refund',
          to: '/refund'
        },

        {
          icon: 'mdi-check-all',
          title: 'Settlement',
          to: '/settlement'
        },

        {
          icon: 'mdi-file-document',
          title: 'Report',
          to: '/report'
        },

        {
          icon: 'mdi-account-network',
          title: 'Vendor',
          to: '/vendor'
        },

        {
          icon: 'mdi-wrench',
          title: 'Settings',
          to: '/settings'
        },

        {
          icon: 'mdi-message-text',
          title: 'Dispute',
          to: '/dispute'
        }
      ],

      //  important Links
      importantLinks: [
        {
          text: 'Terms',
          href: 'http://forfit.in/terms'
        },
        {
          text: 'Privacy',
          href: 'http://forfit.in/privacy'
        }
      ]
    }
  }
}
</script>
