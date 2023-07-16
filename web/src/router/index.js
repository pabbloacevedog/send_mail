import Vue from "vue";
import VueRouter from "vue-router";
import error from "./routes";
import Mail from "./mail";
const auxiliar = [];
const routes = auxiliar.concat(
	error,
	Mail,
);
Vue.use(VueRouter);
export default function (/* { store, ssrContext } */) {
	const Router = new VueRouter({
		scrollBehavior: () => ({ y: 0 }),
		routes,
		mode: process.env.VUE_ROUTER_MODE,
		base: process.env.VUE_ROUTER_BASE,
	});

	return Router;
}
