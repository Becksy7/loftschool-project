<template lang="pug">
  .wrapper
    .page-container
      header.header
        .header__container.container
          .avatar
            .avatar__logo
            span.avatar__name Владимир Астаханов
          .header__title
            span.header__title-text Панель администрирования
          .header__logout
            button.header-button Выйти
      nav.nav
        .nav__container.container
          .nav__list
            .nav__item.nav__item--active
              a(href="#").nav__link Обо мне
            .nav__item
              a(href="#").nav__link Работы
            .nav__item
              a(href="#").nav__link Отзывы
      main.main
        .main__container.container
          .main__caption
            h1.main__title Блок «Обо мне»
            .main__caption-btn
              button.add-button.add-button--sm
                span.add-button__icon +
                span.add-button__title Добавить группу
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



</template>

<style lang="postcss">
  @import "./admin.pcss";
</style>
