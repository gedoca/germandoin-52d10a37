

## Plan: Create San Miguel de Allende page

### Summary
Create a new destination page for the **Retiro DesAprender in San Miguel de Allende** (June 12-14), modeled after the Monterrey page structure but focused on a single event. Include content from the Desaprender page, a pricing table, and a dedicated WhatsApp contact.

### Steps

1. **Create `src/pages/SanMiguelDeAllende.tsx`** based on Monterrey's structure but simplified for a single event:
   - **Hero**: "San Miguel de Allende · Junio 2026" with DesAprender branding, using existing `desaprender-hero.jpg` as background
   - **Propuesta section**: Single card for "Retiro Vivencial DesAprender" (12-14 de Junio), pulling content from Desaprender page (description, 7 qualities, format info for retiro vivencial)
   - **Photo gallery**: Reuse Desaprender images (grupo, dinamica, extras)
   - **Content section**: Key content from Desaprender page (what we'll learn, qualities grid)
   - **Pricing table**: Single row — "Retiro DesAprender" with Early Bird Prepago (hasta 15 de Mayo): **$7,500**. No general price shown (only early bird as specified).
   - **WhatsApp CTA**: Link to `+52 1 55 3040 4218`
   - **Sobre German** section (reused from Monterrey pattern)

2. **Add route in `src/App.tsx`**: `/san-miguel-de-allende` → `SanMiguelDeAllende`

3. **Update `src/data/agenda.ts`**:
   - Add `"san-miguel-de-allende"` to the slug union type
   - Update the existing Allende event entry to use slug `"san-miguel-de-allende"` and link `/san-miguel-de-allende`

4. **Update `src/components/SiteNavbar.tsx`**: Add "San Miguel de Allende" to the `agendaLinks` array

### Technical details
- WhatsApp URL: `https://wa.me/5215530404218`
- Reuse existing assets (desaprender-hero, desaprender-grupo, german-portrait, etc.)
- Same FadeIn animation pattern, Layout wrapper, and styling conventions as Monterrey
- The slug `"allende"` in agenda.ts will become `"san-miguel-de-allende"`

