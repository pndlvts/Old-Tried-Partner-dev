<template>
    <div class="products">
        <section class="content">
        <div class="products__wrapper">
        <tabs :options="{ useUrlFragment: false }">
        <div class="products__container">
        <div class="products__row">
        <tab name="Автошампуни">
            <div class="products__list">
            <div class="product" v-for="product in carShampoo" v-bind:key="product.id">
                <div class="product__image">
                    <img v-bind:src=product.image>
                </div>
                <div class="product__name">
                {{ product.name }}
                </div>
                <div class="product__description">
                <p>
                    {{ product.description }}
                </p>
                <p class="product__sizeP">
                    Объем:
                    <span v-for="(s, index) in product.size" :key="index">
                     <input class="product__sizeInp" type="radio" :id="product.id+'_'+index" :value="s.pr" :name="product.id" v-model="product.price"> 
                     <label class="product__size" :for="product.id+'_'+index">{{ s.sz }}</label>
                    </span>
                </p>
                <div class="product__price">
                    {{ product.price }}
                </div>
                </div>
            </div>
            </div>
        </tab>
        <tab name="Чернители">
            <div class="products__list">
            <div class="product" v-for="product in black" v-bind:key="product.id">
                <div class="product__image">
                    <img v-bind:src=product.image>
                </div>
                <div class="product__name">
                {{ product.name }}
                </div>
                <div class="product__description">
                <p>
                    {{ product.description }}
                </p>
                <p class="product__sizeP">
                    Объем:
                    <span v-for="(s, index) in product.size" :key="index">
                     <input class="product__sizeInp" type="radio" :id="product.id+'_'+index" :value="s.pr" :name="product.id" v-model="product.price"> 
                     <label class="product__size" :for="product.id+'_'+index">{{ s.sz }}</label>
                    </span>
                </p>
                <div class="product__price">
                    {{ product.price }}
                </div>
                </div>
            </div>
            </div>
        </tab>
        <tab name="Воск">
            <div class="products__list">
            <div class="product" v-for="product in vosk" v-bind:key="product.id">
                <div class="product__image">
                    <img v-bind:src=product.image>
                </div>
                <div class="product__name">
                {{ product.name }}
                </div>
                <div class="product__description">
                <p>
                    {{ product.description }}
                </p>
                <p class="product__sizeP">
                    Объем: 
                    <span v-for="(s, index) in product.size" :key="index">
                     <input class="product__sizeInp" type="radio" :id="product.id+'_'+index" :value="s.pr" :name="product.id" v-model="product.price"> 
                     <label class="product__size" :for="product.id+'_'+index">{{ s.sz }}</label>
                    </span>
                </p>
                <div class="product__price">
                    {{ product.price }}
                </div>
                </div>
            </div>
            </div>
        </tab>
        
        <tab name="Стеклоомывающая жидкость">
            <div class="products__list">
            <div class="product" v-for="product in glasswash" v-bind:key="product.id">
                <div class="product__image">
                    <img v-bind:src=product.image>
                </div>
                <div class="product__name">
                {{ product.name }}
                </div>
                <div class="product__description">
                <p>
                    {{ product.description }}
                </p>
                <p class="product__sizeP">
                    Объем: 
                    <span v-for="(s, index) in product.size" :key="index">
                     <input class="product__sizeInp" type="radio" :id="product.id+'_'+index" :value="s.pr" :name="product.id" v-model="product.price"> 
                     <label class="product__size" :for="product.id+'_'+index">{{ s.sz }}</label>
                    </span>
                </p>
                <div class="product__price">
                    {{ product.price }}
                </div>
                </div>
            </div>
            </div>
        </tab>

        </div>
        </div>
        </tabs>
        </div>
        </section>
        <footerComponent></footerComponent>
    </div>
</template>

<style lang="scss">
    @import "../assets/styles/helpers/_gui";
    @import "../assets/styles/helpers/_grid";
    .product{
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
            width: auto;
            height: 20px;
            cursor: pointer;
        }
        &__price{
            margin-top: 10px;
            font-weight: bold;
            border-top: 1px solid $gray;
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
    .product:hover{
        box-shadow: 0px 4px 9px 0px rgba(0,0,0,0.75);
        transition: .5s;
    }
    .products{
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
    .tabs-component{
    &__panel{
        width: 100%;
    }
    &__tabs{
        display: flex;
        flex-wrap: wrap;
        max-height: 65px;
        overflow-y: scroll;
        padding: 10px;
        justify-content: center;
        align-items: center;
        border: none;
        border-bottom: 1px solid $company;
        position: fixed;
        width: 100%;
        background: $white;
        z-index: 996;
    }
    &__tab{
        .tabs-component__tab-a, .tabs-component__tab-a:visited, .tabs-component__tab-a:active{
        color: $company;
        font-weight: bold;
        position: relative;
        transition: 0.5s;
        padding: 10px;
        display: block;
    };
        &__tab-a::after{
            content: "";
            left: 50%; 
            top: 100%;
            position: absolute;
            display: block;
            width: 0;
            height: 1px;
            background-color: $company;
            transition: 0.1s;
        }
        &__tab-a:hover::after{
            left: 0; 
            width: 100%;
            transition: 0.1s;
        }
    }
    &__tab:last-child{
        margin-right: 20px;
    }
    &__tabs .is-active{
        border-top: 1px solid $company;
        border-bottom: 1px solid $company;
        position: relative;
        display: block;
        overflow: hidden;
        .tabs-component__tab-a, .tabs-component__tab-a:hover, .tabs-component__tab-a:active, .tabs-component__tab-a:visited{color: $white;}
        background-color: $company;
    }
    &__tabs .is-active:hover{
         .tabs-component__tab-a{
             color: $company;
         }
    }
    &__tabs .is-active::before{
        content: " ";
        display: inline-block;
        position: absolute;
        width: 0%;
        height: 100%;
        left: 0;
        top:0;
        background: $white;
         transition: 0.2s;
    }
    &__tabs .is-active:hover::before{
        content: " ";
        display: inline-block;
        position: absolute;
        width:100%;
        height: 100%;
        left: 0px;
        top: 0;
        background: $white;
        transition: 0.2s;
    }
    }
     @include to-md(){
        .products{
            &__list{
                padding-left: 18px;
            }
        }
    }
    @include to-sm(){
        .products{
            &__list{
                padding-left: 12px;
            }
        }
    }
    @include to-xs(){
        .products{
            &__list{
                padding-left: 0px;
            }
        }
    }
</style>

<script>
    import footerComponent from '../components/footer.vue';
    import shampoo from '../../public/productsData/data/car-shampoo.json';
    import black from '../../public/productsData/data/black.json';
    import vosk from '../../public/productsData/data/vosk.json';
    import glasswash from '../../public/productsData/data/glasswash.json';
    export default {
        metaInfo: {
        title: 'Old Tried Partner',
        titleTemplate: "%s - Продукция"
        },
        name: 'Products',
        data() {
            return{
            carShampoo: shampoo,
            black: black,
            vosk: vosk,
            glasswash: glasswash
        }
        },
        components: {
            footerComponent
        }
    }
</script>