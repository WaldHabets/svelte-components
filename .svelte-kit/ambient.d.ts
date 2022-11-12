
// this file is generated — do not edit it


/// <reference types="@sveltejs/kit" />

/**
 * Environment variables [loaded by Vite](https://vitejs.dev/guide/env-and-mode.html#env-files) from `.env` files and `process.env`. Like [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), this module cannot be imported into public-facing code. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env).
 * 
 * _Unlike_ [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), the values exported from this module are statically injected into your bundle at build time, enabling optimisations like dead code elimination.
 * 
 * ```ts
 * import { API_KEY } from '$env/static/private';
 * ```
 * 
 * Note that all environment variables referenced in your code should be declared (for example in an `.env` file), even if they don't have a value until the app is deployed:
 * 
 * ```
 * MY_FEATURE_FLAG=""
 * ```
 * 
 * You can override `.env` values from the command line like so:
 * 
 * ```bash
 * MY_FEATURE_FLAG="enabled" npm run dev
 * ```
 */
declare module '$env/static/private' {
	export const SHELL: string;
	export const npm_command: string;
	export const SESSION_MANAGER: string;
	export const npm_config_userconfig: string;
	export const COLORTERM: string;
	export const XDG_CONFIG_DIRS: string;
	export const npm_config_cache: string;
	export const LESS: string;
	export const XDG_MENU_PREFIX: string;
	export const MACHTYPE: string;
	export const G_BROKEN_FILENAMES: string;
	export const HOSTNAME: string;
	export const HISTSIZE: string;
	export const FROM_HEADER: string;
	export const MINICOM: string;
	export const NODE: string;
	export const JAVA_ROOT: string;
	export const JAVA_HOME: string;
	export const VDPAU_DRIVER: string;
	export const AUDIODRIVER: string;
	export const JRE_HOME: string;
	export const SSH_AUTH_SOCK: string;
	export const CPU: string;
	export const JAVA_BINDIR: string;
	export const COLOR: string;
	export const npm_config_local_prefix: string;
	export const LIBVA_DRIVER_NAME: string;
	export const DESKTOP_SESSION: string;
	export const npm_config_globalconfig: string;
	export const GPG_TTY: string;
	export const EDITOR: string;
	export const PWD: string;
	export const QEMU_AUDIO_DRV: string;
	export const LOGNAME: string;
	export const XDG_SESSION_DESKTOP: string;
	export const XDG_SESSION_TYPE: string;
	export const MANPATH: string;
	export const npm_config_init_module: string;
	export const SYSTEMD_EXEC_PID: string;
	export const _: string;
	export const XAUTHORITY: string;
	export const LS_OPTIONS: string;
	export const XKEYSYMDB: string;
	export const XNLSPATH: string;
	export const HOME: string;
	export const USERNAME: string;
	export const LANG: string;
	export const LS_COLORS: string;
	export const XDG_CURRENT_DESKTOP: string;
	export const npm_package_version: string;
	export const PYTHONSTARTUP: string;
	export const VTE_VERSION: string;
	export const WAYLAND_DISPLAY: string;
	export const OSTYPE: string;
	export const GNOME_TERMINAL_SCREEN: string;
	export const LESS_ADVANCED_PREPROCESSOR: string;
	export const INIT_CWD: string;
	export const npm_lifecycle_script: string;
	export const GNOME_SETUP_DISPLAY: string;
	export const LESSCLOSE: string;
	export const XDG_SESSION_CLASS: string;
	export const TERM: string;
	export const npm_package_name: string;
	export const G_FILENAME_ENCODING: string;
	export const HOST: string;
	export const npm_config_prefix: string;
	export const XAUTHLOCALHOSTNAME: string;
	export const LESSOPEN: string;
	export const USER: string;
	export const GNOME_TERMINAL_SERVICE: string;
	export const MORE: string;
	export const CSHEDIT: string;
	export const DISPLAY: string;
	export const npm_lifecycle_event: string;
	export const SHLVL: string;
	export const WINDOWMANAGER: string;
	export const PAGER: string;
	export const npm_config_user_agent: string;
	export const npm_execpath: string;
	export const XDG_RUNTIME_DIR: string;
	export const DEBUGINFOD_URLS: string;
	export const npm_package_json: string;
	export const MANPATHISSET: string;
	export const XDG_DATA_DIRS: string;
	export const npm_config_noproxy: string;
	export const CONFIG_SITE: string;
	export const VENDOR: string;
	export const PATH: string;
	export const npm_config_metrics_registry: string;
	export const npm_config_node_gyp: string;
	export const GDMSESSION: string;
	export const DBUS_SESSION_BUS_ADDRESS: string;
	export const PROFILEREAD: string;
	export const npm_config_global_prefix: string;
	export const MAIL: string;
	export const HOSTTYPE: string;
	export const NODE_VERSION: string;
	export const npm_node_execpath: string;
	export const LESSKEY: string;
	export const OLDPWD: string;
}

/**
 * Similar to [`$env/static/private`](https://kit.svelte.dev/docs/modules#$env-static-private), except that it only includes environment variables that begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Values are replaced statically at build time.
 * 
 * ```ts
 * import { PUBLIC_BASE_URL } from '$env/static/public';
 * ```
 */
declare module '$env/static/public' {

}

/**
 * This module provides access to runtime environment variables, as defined by the platform you're running on. For example if you're using [`adapter-node`](https://github.com/sveltejs/kit/tree/master/packages/adapter-node) (or running [`vite preview`](https://kit.svelte.dev/docs/cli)), this is equivalent to `process.env`. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env).
 * 
 * This module cannot be imported into public-facing code.
 * 
 * ```ts
 * import { env } from '$env/dynamic/private';
 * console.log(env.DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 * 
 * > In `dev`, `$env/dynamic` always includes environment variables from `.env`. In `prod`, this behavior will depend on your adapter.
 */
declare module '$env/dynamic/private' {
	export const env: {
		SHELL: string;
		npm_command: string;
		SESSION_MANAGER: string;
		npm_config_userconfig: string;
		COLORTERM: string;
		XDG_CONFIG_DIRS: string;
		npm_config_cache: string;
		LESS: string;
		XDG_MENU_PREFIX: string;
		MACHTYPE: string;
		G_BROKEN_FILENAMES: string;
		HOSTNAME: string;
		HISTSIZE: string;
		FROM_HEADER: string;
		MINICOM: string;
		NODE: string;
		JAVA_ROOT: string;
		JAVA_HOME: string;
		VDPAU_DRIVER: string;
		AUDIODRIVER: string;
		JRE_HOME: string;
		SSH_AUTH_SOCK: string;
		CPU: string;
		JAVA_BINDIR: string;
		COLOR: string;
		npm_config_local_prefix: string;
		LIBVA_DRIVER_NAME: string;
		DESKTOP_SESSION: string;
		npm_config_globalconfig: string;
		GPG_TTY: string;
		EDITOR: string;
		PWD: string;
		QEMU_AUDIO_DRV: string;
		LOGNAME: string;
		XDG_SESSION_DESKTOP: string;
		XDG_SESSION_TYPE: string;
		MANPATH: string;
		npm_config_init_module: string;
		SYSTEMD_EXEC_PID: string;
		_: string;
		XAUTHORITY: string;
		LS_OPTIONS: string;
		XKEYSYMDB: string;
		XNLSPATH: string;
		HOME: string;
		USERNAME: string;
		LANG: string;
		LS_COLORS: string;
		XDG_CURRENT_DESKTOP: string;
		npm_package_version: string;
		PYTHONSTARTUP: string;
		VTE_VERSION: string;
		WAYLAND_DISPLAY: string;
		OSTYPE: string;
		GNOME_TERMINAL_SCREEN: string;
		LESS_ADVANCED_PREPROCESSOR: string;
		INIT_CWD: string;
		npm_lifecycle_script: string;
		GNOME_SETUP_DISPLAY: string;
		LESSCLOSE: string;
		XDG_SESSION_CLASS: string;
		TERM: string;
		npm_package_name: string;
		G_FILENAME_ENCODING: string;
		HOST: string;
		npm_config_prefix: string;
		XAUTHLOCALHOSTNAME: string;
		LESSOPEN: string;
		USER: string;
		GNOME_TERMINAL_SERVICE: string;
		MORE: string;
		CSHEDIT: string;
		DISPLAY: string;
		npm_lifecycle_event: string;
		SHLVL: string;
		WINDOWMANAGER: string;
		PAGER: string;
		npm_config_user_agent: string;
		npm_execpath: string;
		XDG_RUNTIME_DIR: string;
		DEBUGINFOD_URLS: string;
		npm_package_json: string;
		MANPATHISSET: string;
		XDG_DATA_DIRS: string;
		npm_config_noproxy: string;
		CONFIG_SITE: string;
		VENDOR: string;
		PATH: string;
		npm_config_metrics_registry: string;
		npm_config_node_gyp: string;
		GDMSESSION: string;
		DBUS_SESSION_BUS_ADDRESS: string;
		PROFILEREAD: string;
		npm_config_global_prefix: string;
		MAIL: string;
		HOSTTYPE: string;
		NODE_VERSION: string;
		npm_node_execpath: string;
		LESSKEY: string;
		OLDPWD: string;
		[key: string]: string | undefined;
	}
}

/**
 * Similar to [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), but only includes variables that begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Note that public dynamic environment variables must all be sent from the server to the client, causing larger network requests — when possible, use `$env/static/public` instead.
 * 
 * ```ts
 * import { env } from '$env/dynamic/public';
 * console.log(env.PUBLIC_DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 */
declare module '$env/dynamic/public' {
	export const env: {
		[key: string]: string | undefined;
	}
}
