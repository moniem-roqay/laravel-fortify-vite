import { createRouter, createWebHistory } from "vue-router";
import store from '@/stores'
import NotFound from '@/pages/NotFound'
import Guest from '@/layouts/Guest'
import Register from '@/pages/auth/Register'
import Login from '@/pages/auth/Login'
import TwoFactorChallenge from '@/pages/auth/TwoFactorChallenge'
import ForgotPassword from '@/pages/auth/ForgotPassword'
import ResetPassword from '@/pages/auth/ResetPassword'
import VerifyEmail from '@/pages/auth/VerifyEmail'

import Authenticated from '@/layouts/Authenticated'
import ConfirmPassword from '@/pages/auth/ConfirmPassword'
import Home from '@/pages/Home'
import User from '@/pages/User'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: Authenticated,
            meta: { requiresAuth: true },
            children: [
                { path: "/", name: 'Home', component: Home },
                { path: "/user", name: 'User', component: User },
                { path: "/confirm-password", name: 'ConfirmPassword', component: ConfirmPassword },
            ]
        },
        {
            path: '/auth',
            redirect: "/login",
            component: Guest,
            meta: { isGuest: true },
            children: [
                { path: "/register", name: 'Register', component: Register },
                { path: "/login", name: 'Login', component: Login },
                { path: "/verify-email", name: 'VerifyEmail', component: VerifyEmail },
                { path: "/two-factor-challenge", name: 'TwoFactorChallenge', component: TwoFactorChallenge },
                { path: "/forgot-password", name: 'ForgotPassword', component: ForgotPassword },
                { path: "/reset-password/:token", name: 'ResetPassword', component: ResetPassword }
            ]
        },
        {
            path: '/:pathMatch(.*)*',
            name: '404',
            component: NotFound,
        }
    ],
});

router.beforeEach((to, from, next) => {
    if(to.meta.requiresAuth && !store.getters.user) {
        next({name: "Login"})
    } else if(to.meta.isGuest && store.getters.user) {
        next({name: "Home"})
    } else {
        next();
    }
});

export default router;
