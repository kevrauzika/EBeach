/* Present only to stop postcss-load-config walking up into c:\Projetos, which
   holds an unrelated Tailwind config. This site uses plain CSS + CSS Modules. */
/** @type {import('postcss-load-config').Config} */
export default { plugins: {} };
