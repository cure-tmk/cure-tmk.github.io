---
name: 'component'
root: 'src/components'
output: '**/*'
ignore:
  - '**/{A..Z}*'
  - '**/components/icons'
questions:
  name: 'Component Name?'
---

# Variables

- name: `{{ inputs.name | pascal }}`

# `{{ name }}.astro`

```astro
---
export type Props = {};
---

<div>TODO: {{ name }}</div>
```
