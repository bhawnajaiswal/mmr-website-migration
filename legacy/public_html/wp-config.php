<?php
define('WP_CACHE', true); // WP-Optimize Cache

/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * Localized language
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */
// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'u666490538_pAxQz' );
/** Database username */
define( 'DB_USER', 'u666490538_1iPbt' );
/** Database password */
define( 'DB_PASSWORD', 'nHdEJht8aS' );
/** Database hostname */
define( 'DB_HOST', '127.0.0.1' );
/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );
/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );
/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',          ';AUu__.gW}+:pXms[Da}V@GPQrs?3x}&u46!.P20Q$51p469IRiNaO2!s_nYjX$D' );
define( 'SECURE_AUTH_KEY',   'y0Ldne(c#Q3/7nEy>fKP5Ba7S?2BW55|TN0:his:I|ZI7w+=Zb|6sufU[y-4D,oY' );
define( 'LOGGED_IN_KEY',     'vv4uY^{c[M+s}0$(q@x.YeGuKJe<q||(! T0T*Q[E*t$zI[mJoKxeN&.VOt?>U/l' );
define( 'NONCE_KEY',         '3.$w$nOdH>^A6[MTKl{K&@)*E7Vsf+r^uy7Uz{.eu;Q22?]KqG@lk /w<~fjKhC1' );
define( 'AUTH_SALT',         ',yN}MvK` qd*=qC:{0UqFBnPk4li(,Bfsk2 MT[0YVx5SS}q|*)Sk-#4b:kaC}vj' );
define( 'SECURE_AUTH_SALT',  'LPz/#O#`NPv*&Pa4{yYjH}iN$w6$sOF[+D*sc7e|@qZTM ]kT{Lqi}df8v%;=zr8' );
define( 'LOGGED_IN_SALT',    'L$qt=2;Iv@pY}EBhL 8u;t_1]FR`jS/@UtL+y%V8{bIm.vS`/.ZrJ(~wE8{thG2*' );
define( 'NONCE_SALT',        'H{GAs56+6M3D;%m90(c/gUfUQT)u,|z<(Y7we4ICAi4J>OeYK@tEf/@qIlvq+wza' );
define( 'WP_CACHE_KEY_SALT', '#rdJ AjIkGKnAGCcA/rvdE6pT<?k0#L>3MsQB5SMR/!}A/Py&JRsQ9hbQ.16F_U+' );
/**#@-*/
/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';
/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
// define( 'WP_DEBUG', false );
// Source - https://stackoverflow.com/a/32266386
// Posted by Yogendra, modified by community. See post 'Timeline' for change history
// Retrieved 2026-06-26, License - CC BY-SA 4.0

// Enable WP_DEBUG mode
// define('WP_DEBUG', true);
// define('WP_DEBUG_LOG', true);
// define('WP_DEBUG_DISPLAY', true);

/* Add any custom values between this line and the "stop editing" line. */
define( 'FS_METHOD', 'direct' );
define( 'WP_AUTO_UPDATE_CORE', false );
/* That's all, stop editing! Happy publishing. */
/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}
/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';