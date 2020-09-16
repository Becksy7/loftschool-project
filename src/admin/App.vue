<template>
  <div class="wrapper">
    <div class="page-container">
      <header-component title="Панель администрирования">
       <avatar src="https://picsum.photos/300/300" title="Владимир Астаханов"/>
      </header-component>
      <navigation/>
      <main class="main">
        <div class="container main__container">
          <div class="main__caption">
            <h1 class="main__title">Блок «Обо мне»</h1>
            <div class="main__caption-btn">
              <iconed-btn type="iconed" title="Добавить группу" />
            </div>
          </div>
          <div class="cards">
            <div class="cards__list">
              <div class="cards__item">
                <category empty/>
              </div>
              <div class="cards__item">
                <category/>
              </div>
              <div class="cards__item">
                <category/>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>

  <!--
      main.main
        .main__container.container

          .cards
            .cards__list
              .cards__item
                .card
                  .card__container
                    .card__header
                      .card__input
                        input(type="text" placeholder="Название новой группы").form-input.form-input--lg
                      .card__btns
                        button.form-btn.form-btn--done
                        button.form-btn.form-btn--cancel
                    .card__content
                      .skills
                        .skills__list
                          .skills__item
                            | Git
                            | 100 %
                    .card__footer
                      .card__footer-inputs
                        .card__input
                          input(type="text" placeholder="Новый навык").form-input
                        .card__input
                          input(type="text" placeholder="100 %").form-input.form-input--sm
                      .card__btns
                        button.add-button
                          span.add-button__icon +
-->
</template>
<script>
import avatar from "./components/avatar";
import headerComponent from "./components/header/header";
import navigation from "./components/navigation/navigation";
import iconedBtn from "./components/button/button";
import category from "./components/category";
export default {
  components: {
    avatar,
    headerComponent,
    navigation,
    iconedBtn,
    category
  }
}
</script>
<style lang="postcss">
  @import "normalize.css";
  @import "../styles/mixins.pcss";
  @import "../styles/layout/base.pcss";
</style>
<style lang="postcss" scoped src="./admin.pcss"></style>