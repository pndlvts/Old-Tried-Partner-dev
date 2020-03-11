<template>
    <div id="app">
        <header class="header">
            <div class="header__wrapper">
                <div class="header__container">
                    <div class="header__row">
                        <nav class="main-navigation">
                            <div class="main-navigation__logo">
                                <router-link to="/"><img src="./assets/media/logo.svg" title="We are Old Tried Partner" alt="logo"></router-link>
                            </div>
                            <div class="main-navigation__item">
                                <router-link to="/products">Продукция</router-link>
                            </div>
                            <div class="main-navigation__item">
                                <router-link to="/documents">Документы</router-link>
                            </div>
                            <div class="main-navigation__item">
                                <router-link to="/contacts">Контакты</router-link>
                            </div>
                            <div class="main-navigation__item">
                                <router-link to="/about">О нас</router-link>
                            </div>
                        </nav>
                        <div class="phones">
                            <ul class="phones__list">
                                <li class="phones__item">
                                    <a class="phones__phone" href="tel:89952005218">+7 (995) 200-52-18</a>
                                </li>
                                <li class="phones__item">
                                    <a class="phones__phone" href="tel:89952005218">+7 (908) 692-32-18</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </header>
        <router-view/>
    </div>
</template>

<style lang="scss">
    @import "assets/styles/main.scss";

    #app {
        font-family: 'PT Sans';
        text-align: center;
    }

    .header {
        background: $company;
        width: 100%;
        position: fixed;
        &__container {
            @include container();
        }

        &__row {
            @include row-flex();
            display: flex;
            justify-content: space-between;
            padding-top: 10px;
            padding-bottom: 10px;
        }
    }
    .main-navigation{
        display: flex;
        align-items: center;
        &__item {
            display: inline-block;
        }
        &__item a,
        a:visited,
        a:hover,
        a:active {
            font-weight: bold;
            color: $white;
        }
        &__item a{
            padding: 10px;
        }
        &__item a.router-link-exact-active {
            color: $white;
            position: relative;
        }
        &__item a.router-link-exact-active::before {
            content: "";
            display: block;
            width: 100%;
            height: 1px;
            position: absolute;
            left: 0;
            top: 0;
            background: $white;
        }

        &__item a.router-link-exact-active::after {
            content: "";
            display: block;
            width: 100%;
            height: 1px;
            position: absolute;
            left: 0;
            top: 100%;
            background: $white;
        }
        &__logo{
            img {
                width: 50px;
                height: 50px;
            }
        }
    }

    .phones {
        display: flex;
        align-items: center;
        &__phone, &__phone:visited, &__phone:hover, &__phone:active {
            color: $white;
            font-size: 12px;
            font-weight: normal;
        }
    }
    .home{
        padding-top: 76px;
    }

</style>
