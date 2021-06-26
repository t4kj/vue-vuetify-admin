<template>
  <v-app>
    <v-main>
      <!--表单区域-->
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="4">
            <v-card class="elevation-12 rounded-lg mt-n16">
              <p class="text-h5 text-center py-3">
                <v-tooltip bottom>
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn
                      icon
                      class="float-left ml-3"
                      @click="changeTheme"
                      v-on="on"
                      v-bind="attrs"
                    >
                      <v-icon>mdi-theme-light-dark</v-icon>
                    </v-btn>
                  </template>
                  <span>{{ $t("$vuetify.message.account.changeTheme") }}</span>
                </v-tooltip>
                {{ $t("$vuetify.message.account.title") }}
                <v-tooltip bottom>
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn
                      icon
                      class="float-right mr-3"
                      @click="changeLang"
                      v-on="on"
                      v-bind="attrs"
                    >
                      <v-icon>mdi-translate</v-icon>
                    </v-btn>
                  </template>
                  <span>{{ $t("$vuetify.message.account.changeLang") }}</span>
                </v-tooltip>
              </p>
              <v-card-text>
                <!--表单-->
                <ValidationObserver ref="loginForm" v-slot="{ handleSubmit }">
                  <v-form @submit.prevent="handleSubmit(login)">
                    <!--账号-->
                    <ValidationProvider
                      v-slot="{ valid, errors }"
                      :name="
                        $vuetify.lang.t('$vuetify.message.account.username')
                      "
                      rules="required|min:4|max:16"
                    >
                      <v-text-field
                        :label="
                          $vuetify.lang.t('$vuetify.message.account.username')
                        "
                        :hint="
                          $vuetify.lang.t(
                            '$vuetify.message.account.usernameTips'
                          )
                        "
                        name="username"
                        prepend-icon="mdi-account"
                        type="text"
                        counter
                        clearable
                        v-model="username"
                        :success="valid"
                        :error-messages="errors"
                      ></v-text-field>
                    </ValidationProvider>
                    <!--密码-->
                    <ValidationProvider
                      v-slot="{ valid, errors }"
                      :name="
                        $vuetify.lang.t('$vuetify.message.account.password')
                      "
                      rules="required|min:6|max:28"
                    >
                      <v-text-field
                        :label="
                          $vuetify.lang.t('$vuetify.message.account.password')
                        "
                        :hint="
                          $vuetify.lang.t(
                            '$vuetify.message.account.passwordTips'
                          )
                        "
                        name="password"
                        prepend-icon="mdi-lock"
                        :type="showPassword ? 'text' : 'password'"
                        counter
                        clearable
                        :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                        @click:append="showPassword = !showPassword"
                        v-model="password"
                        :success="valid"
                        :error-messages="errors"
                      ></v-text-field>
                    </ValidationProvider>
                    <v-row>
                      <v-col cols="8">
                        <!--验证码-->
                        <ValidationProvider
                          v-slot="{ valid, errors }"
                          :name="
                            $vuetify.lang.t('$vuetify.message.account.code')
                          "
                          rules="required|min:4|max:4"
                        >
                          <v-text-field
                            :label="
                              $vuetify.lang.t('$vuetify.message.account.code')
                            "
                            :hint="
                              $vuetify.lang.t(
                                '$vuetify.message.account.codeTips'
                              )
                            "
                            name="code"
                            prepend-icon="mdi-codepen"
                            type="text"
                            counter
                            clearable
                            v-model="code"
                            :success="valid"
                            :error-messages="errors"
                          ></v-text-field>
                        </ValidationProvider>
                      </v-col>
                      <v-col cols="4">
                        <!--验证码图片-->
                        <VerificationCode />
                      </v-col>
                    </v-row>
                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <!--登录按钮-->
                      <v-btn
                        class="mr-2 text-subtitle-1"
                        type="submit"
                        block
                        height="50"
                        >{{
                          $vuetify.lang.t("$vuetify.message.account.login")
                        }}</v-btn
                      >
                    </v-card-actions>
                  </v-form>
                </ValidationObserver>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import { ValidationObserver, ValidationProvider } from "vee-validate";
import VerificationCode from "@/components/common/VerificationCode";
import "@/assets/js/ribbon";
export default {
  name: "login",
  components: {
    ValidationObserver,
    ValidationProvider,
    VerificationCode,
  },
  data() {
    return {
      username: "",
      password: "",
      code: "",
      showPassword: false,
    };
  },
  methods: {
    // 更改语言
    changeLang() {
      if (this.$i18n.locale === "zh") {
        this.$vuetify.theme.isDark = true;
        this.$i18n.locale = "en";
        sessionStorage.setItem("i18nLocale", "en");
      } else {
        this.$i18n.locale = "zh";
        sessionStorage.setItem("i18nLocale", "zh");
      }
    },
    // 更改主题
    changeTheme() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
      sessionStorage.setItem("theme", JSON.stringify(this.$vuetify.theme.dark));
    },
  },
};
</script>

<style>
.v-card {
  opacity: 0.8;
}
.theme--light.v-application {
  background-color: transparent;
}
.theme--dark.v-application {
  background-color: transparent;
}
</style>
