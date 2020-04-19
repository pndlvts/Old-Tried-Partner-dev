<template>
    <div class="docs">
        <section class="content">
            <div class="docs__wrapper">
                <div class="docs__container">
                    <div class="docs__row">
                        <div class="docs__list">
                            <div class="doc" v-for="doc in docs" v-bind:key="doc.id">
                                <div class="doc__image">
                                    <img v-bind:src=doc.image>
                                </div>
                                <div class="doc__name">
                                    {{ doc.name }}
                                </div>
                                <div class="doc__description">
                                    <p>
                                        {{ doc.description }}
                                    </p>
                                    <div class="doc__open">
                                        <btnComponent btnText="Смотреть" :btnLink=doc.link target="_blank"></btnComponent>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <footerComponent></footerComponent>
    </div>
</template>

<style lang="scss">
    @import "../assets/styles/helpers/_gui";
    @import "../assets/styles/helpers/_grid";
    .doc{
        @include col();
        @include size-hd(3);
        @include size-xl(3);
        @include size-lg(3);
        @include size-md(5);
        @include size-sm(5);
        @include size-xs(12);
        padding: 10px;
        background: $white; 
        margin: 10px;
        border-radius: 5px;
        transition: .5s;
        img{
            filter: grayscale(1);
            transition: 0.5s;
        }
        &__sizeP{
            margin-top: 10px;
        }
        &__sizeInp:checked + label{
            background: $company;
            color: $white;
        }
        &__size{
            margin-left: 5px;
            display: inline-flex;
            justify-content: center;
            align-items: center;
            border: 1px solid $company;
            padding: 5px;
            border-radius: 5px;
            width: 20px;
            height: 20px;
            cursor: pointer;
        }
        &__open{
            border: none;
            font-weight: bold;
            padding-top: 10px;
        }
        &__image{
            text-align: center;
            img{
                width: auto;
                max-height: 250px;
                border-radius: 5px;
                max-width: 100%;
            }
        }
        &__name{
            text-align: center;
            font-weight: bold;
            font-size: 16px;
        }
        &____description{
            text-align: center;
            margin-top: 20px;
        }
    }
    .doc:hover{
        box-shadow: 0px 4px 9px 0px rgba(0,0,0,0.75);
        transition: .5s;
        img{
            filter: grayscale(0);
            transition: 0.5s;
        }
    }
    .docs{
        padding-top: 75px;
        background-color: $white;
        &__list{
            padding-left: 30px;
            display: flex;
            flex-wrap: wrap;
            margin-left: auto;
            margin-right: auto;
            width: 100%;
        }
        &__wrapper{
                    min-height: calc(100vh - 200px);

        }
        &__container{
            @include container();
        }
        &__row{
            @include row-flex();
            justify-content: center;
            padding-top: 60px;
        }
    }

     @include to-md(){
        .docs{
            &__list{
                padding-left: 18px;
            }
        }
    }
    @include to-sm(){
        .docs{
            &__list{
                padding-left: 12px;
            }
        }
    }
    @include to-xs(){
        .docs{
            &__list{
                padding-left: 0px;
            }
        }
    }
</style>

<script>
    import footerComponent from '../components/footer.vue';
    import btnComponent from '../components/btnComponent.vue';
    import docs from '../../public/productsData/data/docs.json';
    export default {
        metaInfo: {
        title: 'Old Tried Partner',
        titleTemplate: "%s - Документы"
        },
        name: 'Products',
        data() {
            return{
            docs: docs,
        }
        },
        components: {
            footerComponent,
            btnComponent
        }
    }
</script>