<template>
    <section class="contacts">
        <div class="content-cont">
        <div class="content-cont__wrapper">
            <div class="content-cont__map">
                    <div style="position:relative;overflow:hidden;"><a
                            href="https://yandex.ru/maps/org/old_tried_partner/83688762444/?utm_medium=mapframe&utm_source=maps"
                            style="color:#eee;font-size:12px;position:absolute;top:0px;">Old Tried Partner</a><a
                            href="https://yandex.ru/maps/35/krasnodar/category/auto_chemical_products/?utm_medium=mapframe&utm_source=maps"
                            style="color:#eee;font-size:12px;position:absolute;top:14px;">Автокосметика, автохимия в
                            Краснодаре</a><iframe src="https://yandex.ru/map-widget/v1/-/CKqfm83g" frameborder="0" allowfullscreen="true" style="position:relative;"></iframe>
                    </div>
                </div>
                <div class="content-cont__container">
                    <div class="content-cont__row">
                    <div class="content-cont__info">
                        <div class="content-cont__info-block">
                            <span class="content-cont__info-title">Адрес:</span>
                            <span class="content-cont__info-text"> Россия, Краснодарский край, г. Краснодар, ул.
                                Российская 97</span>
                        </div>
                        <div class="content-cont__info-block">
                            <span class="content-cont__info-title">E-mail:</span>
                            <span class="content-cont__info-text"><a href="mailto:lazarevcosmeticrus@mail.ru">
                                    lazarevcosmeticrus@mail.ru</a></span>
                        </div>
                        <div class="content-cont__info-block">
                            <span class="content-cont__info-title">Телефон:</span>
                            <span class="content-cont__info-text"><a href="tel:89952005218"> 8 (995)
                                    200-52-18</a></span>
                        </div>
                        <div class="content-cont__info-block">
                            <span class="content-cont__info-title">Телефон:</span>
                            <span class="content-cont__info-text"><a href="tel:89086923218"> 8 (908)
                                    692-32-18</a></span>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
        <footerComponent></footerComponent>
    </section>
</template>

<style lang="scss">
    @import "../assets/styles/helpers/_grid";
    @import "../assets/styles/helpers/_gui";
    .content-cont{
        padding-top: 75px;
        min-height: 100vh;
        &__container{
            @include container();
        }
        &__row{
            @include row-flex();
            height: 40vh;
            align-items: center;
            justify-content: center;
        }
        &__info-block{
            text-align: left;
            color: $company;
            font-size: 20px;
            a, a:visited, a:hover, a:active, button{
                color: $company
            }
        }
        &__info-title{
            font-weight: bold;
        }
    }
    iframe{
        width: 100vw;
        height: 60vh;
    }
    @include to-md(){
        .content-cont{
        &__info-block{
            font-size: 18px;
    }
    }
    }
</style>
<script>
    import footerComponent from '../components/footer.vue';
    export default {
        metaInfo: {
        title: 'Old Tried Partner',
        titleTemplate: "%s - Контакты"
        },
        name: 'Contacts',
        components: {
            footerComponent
        }
    }
</script>
