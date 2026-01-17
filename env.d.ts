/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_GITHUB_URL: string
  readonly VITE_DISCORD_URL: string
  readonly VITE_KOFI_URL: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
