<template>
    <div id="app">
        <header class="header">
            <div class="header__wrapper">
                <div class="header__container">
                    <div class="header__row">
                        <nav class="main-navigation">
                            <div class="main-navigation__logo">
                                <router-link to="/"><img src="./assets/media/logo.svg" title="We are Old Tried Partner"
                                                         alt="logo"></router-link>
                            </div>
                            <div class="main-navigation__item">
                                <router-link class="main-navigation__link" to="/products">Продукция</router-link>
                            </div>
                            <div class="main-navigation__item">
                                <router-link class="main-navigation__link" to="/documents">Документы</router-link>
                            </div>
                            <div class="main-navigation__item">
                                <router-link class="main-navigation__link" to="/contacts">Контакты</router-link>
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
                        <div class="hamburger" v-on:click="toggleHamburger()">
                            <div class="hamburger__bar"></div>
                            <div class="hamburger__bar"></div>
                            <div class="hamburger__bar"></div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
        <div class="mobile-menu">
            <ul class="mobile-menu__list">
                <li class="mobile-menu__item" v-on:click="closeMobileMenu()">
                    <router-link class="mobile-menu__link" to="/">На главную</router-link>
                </li>
                <li class="mobile-menu__item" v-on:click="closeMobileMenu()">
                    <router-link class="mobile-menu__link" to="/products">Продукция</router-link>
                </li>
                <li class="mobile-menu__item" v-on:click="closeMobileMenu()">
                    <router-link class="mobile-menu__link" to="/documents">Документы</router-link>
                </li>
                <li class="mobile-menu__item" v-on:click="closeMobileMenu()">
                    <router-link class="mobile-menu__link" to="/contacts">Контакты</router-link>
                </li>
            </ul>
        </div>
        <router-view/>
    </div>
</template>

<style lang="scss">
    @import "assets/styles/main.scss";

    #app {
        font-family: 'PT Sans';
        text-align: center;
        font-size: 14px;
    }

    body {
        background-color: $gray;
    }

    .header {
        left: 0;
        top: 0;
        background: $company;
        width: 100%;
        position: fixed;
        min-height: 75px;
        height: auto;
        z-index: 998;

        &__container {
            @include container();
        }

        &__row {
            @include row-flex();
            display: flex;
            justify-content: space-between;
            padding-top: 10px;
            padding-bottom: 10px;
            position: relative;
        }
    }

    .main-navigation {
        @include col();
        @include size(5);
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

        &__item &__link {
            padding: 10px;
        }

        &__item .router-link-exact-active {
            color: $white;
            position: relative;
        }

        &__item .router-link-exact-active::before {
            content: "";
            display: block;
            width: 100%;
            height: 1px;
            position: absolute;
            left: 0;
            top: 0;
            background: $white;
        }

        &__item .router-link-exact-active::after {
            content: "";
            display: block;
            width: 100%;
            height: 1px;
            position: absolute;
            left: 0;
            top: 100%;
            background: $white;
        }

        &__logo {
            margin-right: 20px;
            img {
                width: 50px;
                height: 50px;
            }
        }
    }

    .phones {
        display: flex;
        align-items: center;
        @include col();
        @include size(5);
        justify-content: flex-end;
        &__phone,
        &__phone:visited,
        &__phone:hover,
        &__phone:active {
            color: $white;
            font-size: 12px;
            font-weight: normal;
        }
    }

    .hamburger {
        display: none;
    }

    .mobile-menu {
        transition: 0.5s;
        width: 100%;
        height: 0;
        transform: scaleY(0);
        transform-origin: top;
        position: fixed;
        z-index: 997;
    }

    @include to-sm() {
        .mobile-menu_active {
            width: 100%;
            height: 100vh;
            transform: scaleY(1);
            position: fixed;
            top: 0;
            overflow-y: scroll;
            z-index: 997;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        .mobile-menu {
            background-color: $company;

            &__list {
                width: 100%;
            }

            &__item:first-child {
                margin-top: 0;
            }

            &__item {
                display: block;
                margin-top: 10px;
            }

            &__link, &__link:active, &__link:hover, &__link:visited {
                color: $white;
                display: block;
            }
        }
        .phones {
            display: none;
        }
        .main-navigation {
            &__item {
                display: none;
            }
        }
        .hamburger {
            display: block;
            position: relative;
            z-index: 999;
            background: none;
            right: 0;
            height: 55px;
            width: 35px;
            cursor: pointer;

            &__bar {
                width: 100%;
                height: 1px;
                background-color: $white;
                position: absolute;
                transition: 0.5s;
            }

            &__bar:nth-child(1) {
                top: 25%;
                transform: rotate(0);
            }

            &__bar:nth-child(2) {
                top: 50%;
                transform-origin: right;
                transform: scaleX(1);
                transition: 0.2s;
            }

            &__bar:nth-child(3) {
                top: 75%;
                transform: rotate(0);
            }
        }
        .hamburger_active {
            .hamburger__bar:nth-child(1) {
                top: 50%;
                transform: rotate(45deg);
            }

            .hamburger__bar:nth-child(2) {
                top: 50%;
                transform: scaleX(0);
            }

            .hamburger__bar:nth-child(3) {
                top: 50%;
                transform: rotate(-45deg);
            }
        }
    }
</style>

<script>
    export default {
        name: 'app',
        methods: {
            toggleHamburger: function () {
                document.querySelector(".hamburger").classList.toggle("hamburger_active");
                document.querySelector(".mobile-menu").classList.toggle("mobile-menu_active");
            },
            closeMobileMenu: function () {
                document.querySelector(".hamburger").classList.remove("hamburger_active");
                document.querySelector(".mobile-menu").classList.remove("mobile-menu_active");
            }
        }
    }
</script>