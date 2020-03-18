<template>
    <footer class="footer">
        <div class="footer__wrapper">
            <div class="footer__container">
                <div class="footer__row">
                <div class="footer__block">
                    <h2 class="footer__title">Контакты</h2>
                    <div class="footer__block-content"><span class="footer__text">ИП Лазарев Олег Анатольевич</span></div>
                    <div class="footer__block-content"><span class="footer__text">Россия, Краснодарский край, г. Краснодар, ул. Российская 97, 350901</span></div>
                    <div class="footer__block-content"><span class="footer__text">E-mail: </span><a href="mailto:lazarevcosmeticrus@mail.ru" class="footer__link">lazarevcosmeticrus@mail.ru</a></div>
                    <div class="footer__block-content"><span class="footer__text">Тел.: </span><a href="tel:89952005218" class="footer__link">8 (995) 200-52-18</a></div>
                    <div class="footer__block-content"><span class="footer__text">Тел.: </span><a href="tel:89086923218" class="footer__link">8 (908) 692-32-18</a></div>
                </div>

                <div class="footer__block">
                    <h2 class="footer__title footer__title-drop" data-drop="help" @click="drop">Помощь</h2>
                    <div class="footer__dropdown" data-list="help">
                        <div class="footer__block-content"><a href="#!" class="footer__link">Как заказать</a></div>
                        <div class="footer__block-content"><a href="#!" class="footer__link">Доставка</a></div>
                        <div class="footer__block-content"><a href="#!" class="footer__link">Документы</a></div>
                        <div class="footer__block-content"><a href="#!" class="footer__link">Оплата</a></div>
                    </div>
                </div>
                
                <div class="footer__logo">
                    <img src="../assets/media/logo.svg">
                </div>
                </div>
                <div class="footer__row">
                <div class="footer__copyright">© 2019-2020 ИП Лазарев О. А.</div>
                </div>
                <div class="footer__creator">Создание сайта (SPA) – <a href="https://vk.com/pndlvts">Панделов Тимофей</a></div>
            </div>
        </div>
    </footer>
</template>

<style lang="scss" scoped>
    @import "../assets/styles/helpers/_gui";
    @import "../assets/styles/helpers/_grid";
    .footer{
        margin-top: 0px;
        min-height: 100px;
        background: $company;
        text-align: left;
        padding-top: 50px;
        padding-bottom: 50px;
        &__container{
            @include container();
        }
        &__row{
            @include row-flex();
            justify-content: space-between;
        }
        &__title{
            color: $white;
            margin-bottom: 20px;
        }
        &__text{
            color: $white;
        }
        &__link, &__link:active, &__link:hover, &__link:visited{
            color: $white;
        }
        &__logo{
            @include col();
            @include size-hd(3);
            @include size-xl(3);
            @include size-lg(3);
            @include size-md(3);
            @include size-sm(3);
            @include size-xs(12);
            text-align: right;
            img{
                width: 150px;
                height: 150px;
            }
        }
        &__creator{
            display: none;
            margin-top: 20px;
            color: $white;
            text-align: center;
            a{
                color: $white;
                text-decoration: underline;
                text-decoration-style: dashed;
                text-decoration-color: $white;
            }
        }
        &__copyright{
            @include col();
            @include size(12);
            margin-top: 20px;
            text-align: left;
            color: $white
        }
        &__block{
        @include col();
        @include size-hd(3);
        @include size-xl(3);
        @include size-lg(3);
        @include size-md(3);
        @include size-sm(3);
        @include size-xs(12);
    }
    &__block-content{
        margin-bottom: 5px;
    }
    }
    @include to-sm(){
        .footer{
            &__logo {
                display: none;
            }

            &__dropdown {
                height: 0;
                overflow: hidden;
                transform-origin: top;
                transition: .5s;
            }
            &__dropdown_active {
                height: 100%;
                transform-origin: top;
                transition: .5s;
            }
            &__title-drop{
                position: relative;
                cursor: pointer;
            }
            &__title-drop_active::after{
                transform: rotate(180deg);
            }
            &__title-drop::after {
                content: "";
                position: absolute;
                right: 0;
                top: 25%;
                display: inline-block;
                width: 0;
                height: 0;
                border: 5px solid transparent;
                border-top-color: $white;
                border-bottom: 0;
                transition: 0.5s;
            }
            }
    }
</style>

<script scoped>
export default {
  name: 'footerComponent',
  methods: {
      drop: function(event){
          let drop = event.target;
          let dataDrop = event.target.dataset.drop;
          let dataList = document.querySelector("div[data-list='" + dataDrop + "']");
          drop.classList.toggle("footer__title-drop_active");
          dataList.classList.toggle("footer__dropdown_active")
      }
  }
}
</script>