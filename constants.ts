
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

export const INITIAL_PLACEHOLDERS = [
    "Design a minimalist weather card",
    "Show me a live stock ticker",
    "Create a futuristic login form",
    "Build a stock portfolio dashboard",
    "Make a brutalist music player",
    "Generate a sleek pricing table",
    "Ask for anything"
];

export const DEFAULT_DESIGNER_RULES = {
    philosophy: `Design philosophy:
- Nordic modernism
- Calm clarity over expression
- Functional beauty
- Material honesty translated into UI

Allowed metaphors:
- Timber, stone, linen, glass
- Winter daylight, fog, overcast sky, snow cover
- Architectural grids and furniture logic`,
    
    generationRules: `**VISUAL EXECUTION RULES:**
1. **Materiality**: Translate the metaphor into CSS: paper/linen grain (subtle), timber warmth (muted), glass (clean), stone (cool neutrals). Keep effects restrained.
2. **Color**: Nordic palette — off-whites, stone, ash, muted blues/greens, occasional warm wood tone. Avoid neon/glow.
3. **Typography**: Use high-quality web fonts. Favor a neutral grotesk for UI + a refined monospace for data. Prioritize legibility.
4. **Layout**: Architectural grid, generous negative space, calm hierarchy. Avoid generic “template cards”.
5. **Motion**: Minimal and purposeful (micro-interactions, subtle transitions). No flashy animations.
6. **IP SAFEGUARD**: No artist names, no brands, no trademarks, no famous works.
7. **Anti-sci-fi**: Avoid futuristic/spectral/spacey language and visuals.`,

    variationRules: `Generate 3 DISTINCT design variations. 
STRICT IP SAFEGUARD: no artist names, no brands, no famous works.
Avoid futuristic / sci-fi language.
Avoid neon/glow/spectacle; gradients only if extremely subtle and daylight-like.
For EACH variation:
- Invent a unique persona name rooted in a material or environment metaphor.
- Rewrite the prompt to fully adopt that metaphor's visual language.`
};
