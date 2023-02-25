/// <reference types="@astrojs/image/client" />
/// <reference types="astro/astro-jsx" />

type Config = import('./config').Config;

type CustomMetaEnv = {
  readonly [x in keyof Config]: Config[x];
};

type ImportMetaEnv = CustomMetaEnv;

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
