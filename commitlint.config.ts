import type { UserConfig } from '@commitlint/types'

const Configuration: UserConfig = {
  extends: ['@commitlint/config-conventional'],

  ignores: [(commit) => /^Bumps \[.+\]\(.+\) from .+ to .+\.$/m.test(commit)],

  prompt: {
    settings: {
      enableMultipleScopes: true,
    },
  },
}

export default Configuration
