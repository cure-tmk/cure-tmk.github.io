---
name: 'component'
root: 'src'
output: 'components/**/*'
ignore:
  - '**/{A..Z}*'
questions:
  name: 'Component name?'
---

# Variables

- name: `{{ inputs.name | pascal }}`

# `{{ name }}/index.ts`

```typescript
export { default as {{ name }} } from './{{ name }}.astro';
export * from './{{ name }}.astro';
```

# `{{ name }}/{{ name }}.astro`

```astro
<div>{{ name }}</div>
```
