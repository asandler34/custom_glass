# Section component — prompt template

Copy everything inside the block below and replace `[ComponentName]` plus the specific instructions.

```
Build [ComponentName] in /src/components/sections/[ComponentName].tsx.
Reference BRIEF.md for copy and DESIGN_SYSTEM.md for all design tokens, typography, spacing, animation, and color decisions.
[Specific instructions below]
Mark "use client" only if Framer Motion is used.
Make it mobile-first responsive.
Write real business copy — no Lorem Ipsum.
```

## Notes

- **Path:** `src/components/sections/` — create the folder if it does not exist.
- **Copy:** Use **`brief.md`** in the repo (same content as “BRIEF.md” in prompts): business overview, audience, CTAs, content pillars, SEO keywords.
- **Visual system:** Use `DESIGN_SYSTEM.md` and `tailwind.config.ts` tokens (`navy-*`, `gold`, `font-display`, `font-body`, `animate-fadeUp`, etc.).
- **Client components:** Add `"use client"` at the top only when using Framer Motion or other client-only APIs.
