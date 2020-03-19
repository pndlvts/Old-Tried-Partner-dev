<template>
    <section class="delivery">
        <div class="delivery-content">
            <div class="delivery-content__wrapper">
                <div class="order-content__container">
                    <div class="delivery-content__row">
                        <div class="order-content__col">
                         Для обсуждения возможности доставки позвоните нам по телефону <a href="tel:89952005218" class="delivery-content__link">8 (995) 200-52-18</a>
                         или <a href="tel:89086923218" class="delivery-content__link">8 (908) 692-32-18</a>. Также Вы можете написать нам на почту
                         <a href="mailto:lazarevcosmeticrus@mail.ru" class="delivery-content__link">lazarevcosmeticrus@mail.ru</a>
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
    .delivery-content{
        text-align: left;
        padding-top: 75px;
        min-height: calc(100vh - 200px);
        color: $company;
        &__container{
            @include container();
        }
        &__row{
            @include row-flex();
        }
        &__col{
            @include col();
            @include size(12);
        }
        &__link, &__link:visited, &__link:active, &__link:hover{
            color: $company;
        }
    }
</style>
<script>
    import footerComponent from '../components/footer.vue';
    export default {
        metaInfo: {
        title: 'Old Tried Partner',
        titleTemplate: "%s - Доставка"
        },
        name: 'Delivery',
        components: {
            footerComponent
        }
    }
</script>