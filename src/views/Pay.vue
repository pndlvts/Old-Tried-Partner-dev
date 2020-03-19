<template>
    <section class="pay">
        <div class="pay-content">
            <div class="pay-content__wrapper">
                <div class="pay-content__container">
                    <div class="pay-content__row">
                        <div class="pay-content__col">
                         Мы принимаем различные спопсобы оплаты. Для уточнения свяжитесь с нами.
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
    .pay-content{
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
    }
</style>
<script>
    import footerComponent from '../components/footer.vue';
    export default {
        metaInfo: {
        title: 'Old Tried Partner',
        titleTemplate: "%s - Оплата"
        },
        name: 'Pay',
        components: {
            footerComponent
        }
    }
</script>