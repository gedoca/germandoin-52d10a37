## Plan: Add venue gallery section to Estado de México page

### What we'll do

Add a new section after the "Facilitacion" section showing photos of the venue in Avándaro with a description of what's included (lodging, meals, fasting requirements).

### Steps

1. **Copy the 4 uploaded images** to `src/assets/` as `avandaro-1.png`, `avandaro-2.png`, `avandaro-3.png`, `avandaro-4.png`.
2. **Add a new "El Lugar" section** in `src/pages/EstadoDeMexico.tsx` after the "Propuesta" section:
  - Section header: "El Lugar"
  - Title: "Avándaro, Estado de México"
  - Description paragraph with the provided text about lodging, shared rooms, 4 meals included, and fasting requirements.
  - A responsive image grid (2x2 on desktop, stacked on mobile) displaying the 4 venue photos with rounded corners and hover effects, wrapped in `FadeIn` animations.
  - Include relevant icons (Home, Utensils) for the included amenities as small info cards below the description (2 nights lodging, 4 meals included, Saturday fasting requirement).

### Technical details

- Import the 4 images as ES6 modules from `@/assets/`
- Use the existing `FadeIn` component for scroll animations
- Grid layout: `grid grid-cols-1 sm:grid-cols-2 gap-4` for the photos
- Consistent styling with the rest of the page (same padding, max-width, typography classes)