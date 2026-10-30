---
version: alpha
name: "[BRAND] Ops Console"
description: Light-first, dense, accessible admin dashboard design system for a glamping business (bookings, payments, equipment, handover). Shares brand colors and typefaces with the public glamping site.
colors:
  canvas: "#F3F0E8"
  surface: "#FBFAF6"
  surface-raised: "#FFFFFF"
  sand: "#E9E4D8"
  ink: "#1F2A24"
  ink-soft: "#4F5B53"
  ink-mute: "#626C65"
  line: "#D9D3C4"
  line-strong: "#7D857E"
  primary: "#1E3B2F"
  primary-hover: "#2A5240"
  on-primary: "#FBFAF6"
  accent: "#A8481F"
  focus: "#1E3B2F"
  danger: "#A32020"
  danger-hover: "#861A1A"
  on-danger: "#FBFAF6"
  scrim: "rgba(31, 42, 36, 0.5)"
  ok-bg: "#E3EEDD"
  ok-fg: "#1F4D2C"
  ok-solid: "#2F6B3F"
  warn-bg: "#F6E6C8"
  warn-fg: "#6B4210"
  warn-solid: "#B86E0A"
  bad-bg: "#F4D9D2"
  bad-fg: "#7A1F12"
  bad-solid: "#A32020"
  info-bg: "#DCEBEA"
  info-fg: "#2F5D62"
  info-solid: "#2F5D62"
  chart-1: "#1E3B2F"
  chart-2: "#A8481F"
  chart-3: "#B8923A"
  chart-4: "#2F5D62"
  chart-5: "#7D857E"
  heat-0: "#E9E4D8"
  heat-1: "#C9D4B8"
  heat-2: "#9DB483"
  heat-3: "#3F6B49"
  heat-4: "#1E3B2F"
colors-night:
  canvas: "#131A16"
  surface: "#1B2520"
  surface-raised: "#222E28"
  sand: "#2A362F"
  ink: "#EAE5D8"
  ink-soft: "#B8BFB3"
  ink-mute: "#97A096"
  line: "#2E3A33"
  line-strong: "#6F7B72"
  primary: "#A8C79A"
  primary-hover: "#BBD6AE"
  on-primary: "#131A16"
  accent: "#E3A857"
  focus: "#E3A857"
  danger: "#B93A32"
  danger-hover: "#C2403A"
  on-danger: "#FBFAF6"
  scrim: "rgba(0, 0, 0, 0.6)"
  ok-bg: "#1F3A2B"
  ok-fg: "#BFE3C4"
  ok-solid: "#6FBF86"
  warn-bg: "#3F3114"
  warn-fg: "#F2D18A"
  warn-solid: "#E0A040"
  bad-bg: "#4A1F1B"
  bad-fg: "#F3B7AE"
  bad-solid: "#E5736A"
  info-bg: "#1C3A3D"
  info-fg: "#A9D6D8"
  info-solid: "#7FB5B8"
  chart-1: "#A8C79A"
  chart-2: "#E08A5F"
  chart-3: "#D9B35E"
  chart-4: "#7FB5B8"
  chart-5: "#A3ABA4"
  heat-0: "#232F28"
  heat-1: "#2F4A3A"
  heat-2: "#3A6450"
  heat-3: "#7FAE8D"
  heat-4: "#BBD6AE"
typography:
  h1:
    fontFamily: Fraunces
    fontSize: 1.75rem
    fontWeight: 500
    lineHeight: 1.3
  h2:
    fontFamily: Plus Jakarta Sans
    fontSize: 1.25rem
    fontWeight: 600
    lineHeight: 1.4
  h3:
    fontFamily: Plus Jakarta Sans
    fontSize: 1rem
    fontWeight: 600
    lineHeight: 1.5
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 0.875rem
    fontWeight: 400
    lineHeight: 1.45
    numeric: tabular
  body-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 0.8125rem
    fontWeight: 400
    lineHeight: 1.4
  label:
    fontFamily: Plus Jakarta Sans
    fontSize: 0.8125rem
    fontWeight: 500
    lineHeight: 1.4
  caption:
    fontFamily: Plus Jakarta Sans
    fontSize: 0.75rem
    fontWeight: 400
    lineHeight: 1.35
  kpi:
    fontFamily: Plus Jakarta Sans
    fontSize: 2rem
    fontWeight: 600
    lineHeight: 1.15
    numeric: tabular
  code:
    fontFamily: system-mono
    fontSize: 0.8125rem
    fontWeight: 400
    lineHeight: 1.5
rounded:
  sm: 4px
  md: 6px
  lg: 8px
  full: 9999px
spacing:
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 32px
  2xl: 48px
sizes:
  control-compact: 32px
  control-comfortable: 44px
  row-compact: 40px
  row-comfortable: 56px
  header-height: 56px
  sidebar-width: 248px
  sidebar-rail: 64px
  bottom-nav: 56px
  content-small: 640px
  content-default: 1120px
  icon: 20px
shadow:
  pop: "0 4px 12px rgba(31, 42, 36, 0.12)"
motion:
  fast: 100ms
  base: 150ms
  slow: 250ms
  easing: ease-out
zIndex:
  sticky: 10
  header: 20
  dropdown: 30
  dialog: 40
  toast: 50
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.md}"
    height: "{sizes.control-comfortable}"
    padding: 0 16px
  button-primary-hover:
    backgroundColor: "{colors.primary-hover}"
    textColor: "{colors.on-primary}"
  button-secondary:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    border: "1px solid {colors.line-strong}"
    rounded: "{rounded.md}"
    height: "{sizes.control-comfortable}"
    padding: 0 16px
  button-secondary-hover:
    backgroundColor: "{colors.sand}"
    textColor: "{colors.ink}"
  button-ghost:
    backgroundColor: transparent
    textColor: "{colors.ink-soft}"
    rounded: "{rounded.md}"
    height: "{sizes.control-comfortable}"
    padding: 0 12px
  button-ghost-hover:
    backgroundColor: "{colors.sand}"
    textColor: "{colors.ink}"
  button-danger:
    backgroundColor: "{colors.danger}"
    textColor: "{colors.on-danger}"
    rounded: "{rounded.md}"
    height: "{sizes.control-comfortable}"
    padding: 0 16px
  button-danger-hover:
    backgroundColor: "{colors.danger-hover}"
    textColor: "{colors.on-danger}"
  button-disabled:
    backgroundColor: "{colors.sand}"
    textColor: "{colors.ink-mute}"
  input:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    border: "1px solid {colors.line-strong}"
    rounded: "{rounded.md}"
    height: "{sizes.control-comfortable}"
    padding: 0 12px
  input-error:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    border: "1px solid {colors.bad-solid}"
  card:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    border: "1px solid {colors.line}"
    rounded: "{rounded.lg}"
    padding: 24px
  stat-card:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    border: "1px solid {colors.line}"
    rounded: "{rounded.lg}"
    padding: 16px
  table-header:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink-soft}"
    padding: 0 12px
  table-row-hover:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
  table-row-selected:
    backgroundColor: "{colors.sand}"
    textColor: "{colors.ink}"
  nav-item:
    backgroundColor: transparent
    textColor: "{colors.ink-soft}"
    rounded: "{rounded.md}"
    height: "{sizes.control-comfortable}"
    padding: 0 12px
  nav-item-active:
    backgroundColor: "{colors.sand}"
    textColor: "{colors.ink}"
  tab-active:
    backgroundColor: transparent
    textColor: "{colors.ink}"
    border: "2px solid {colors.primary} (bottom only)"
  sidebar:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink-soft}"
    border: "1px solid {colors.line} (right only)"
    padding: 16px
  popover:
    backgroundColor: "{colors.surface-raised}"
    textColor: "{colors.ink}"
    border: "1px solid {colors.line-strong}"
    rounded: "{rounded.lg}"
    padding: 8px
  dialog:
    backgroundColor: "{colors.surface-raised}"
    textColor: "{colors.ink}"
    border: "1px solid {colors.line}"
    rounded: "{rounded.lg}"
    padding: 24px
  toast:
    backgroundColor: "{colors.surface-raised}"
    textColor: "{colors.ink}"
    border: "1px solid {colors.line-strong}"
    rounded: "{rounded.lg}"
    padding: 12px
  tooltip:
    backgroundColor: "{colors.surface-raised}"
    textColor: "{colors.ink}"
    border: "1px solid {colors.line-strong}"
    rounded: "{rounded.sm}"
    padding: 6px 8px
  chip-ok:
    backgroundColor: "{colors.ok-bg}"
    textColor: "{colors.ok-fg}"
    rounded: "{rounded.full}"
    padding: 2px 10px
  chip-warn:
    backgroundColor: "{colors.warn-bg}"
    textColor: "{colors.warn-fg}"
    rounded: "{rounded.full}"
    padding: 2px 10px
  chip-bad:
    backgroundColor: "{colors.bad-bg}"
    textColor: "{colors.bad-fg}"
    rounded: "{rounded.full}"
    padding: 2px 10px
  chip-info:
    backgroundColor: "{colors.info-bg}"
    textColor: "{colors.info-fg}"
    rounded: "{rounded.full}"
    padding: 2px 10px
  chip-neutral:
    backgroundColor: "{colors.sand}"
    textColor: "{colors.ink-soft}"
    rounded: "{rounded.full}"
    padding: 2px 10px
  skeleton:
    backgroundColor: "{colors.sand}"
    rounded: "{rounded.sm}"
  code-inline:
    backgroundColor: "{colors.sand}"
    textColor: "{colors.ink}"
    rounded: "{rounded.sm}"
    padding: 1px 4px
---

# [BRAND] Ops Console: Design System

Placeholders to fill before building: `[BRAND]`, `[PREFIX]` (booking code prefix), `[DP_PERCENT]`.

## 1. Overview

This is the admin dashboard for a glamping business: bookings, payments (DP and pay-in-full), unit availability, equipment rental (add-ons), and equipment handover. Staff use it at a front desk, on tablets in the field, and on phones with weak signal.

It keeps the structure of a proven developer-tool system (dense, token-driven, one primary action per view) but is rebuilt around a different brand and different users. It shares colors and typefaces with the public glamping site so the two feel like one product.

**Core principles**
1. **Operations first.** Every screen answers: what must happen next, and who does it? Show actions and deadlines before decoration.
2. **Light-first, night-ready.** Staff work in daylight, so light is the default. Night mode is a full, tested theme (not an afterthought) for evening shifts and field use.
3. **Comfortable by default, compact by choice.** Default density meets 44px touch targets. Desktop users can opt into compact density.
4. **One source of truth.** Colors, sizes, and statuses come from tokens. Components never contain raw hex values, ad-hoc sizes, or ad-hoc status colors.
5. **Money and status must be unmistakable.** Amounts are always formatted, aligned, and labeled. Status is always text plus color, never color alone.
6. **Accessibility is the baseline.** Contrast, focus, keyboard, and touch targets are requirements, not polish.

**Why primary is forest green, not ember.** On the public site, ember (terracotta) is the booking call to action. In the dashboard it would sit next to the red danger button and read as a warning. So the dashboard's primary action is `primary` (forest). `accent` (ember) is reserved for small brand moments (see §3.4).

## 2. Anti-Slop Rules (reject in review)

**Visual**
- No gradients of any kind (backgrounds, buttons, text, cards, chart fills, skeleton shimmer). No glow, no glassmorphism, no `backdrop-blur`.
- No shadows except the single overlay shadow `shadow-pop` on popovers, dropdowns, toasts, and dialogs. Cards and tables use borders only.
- No default framework palette in templates (`blue-*`, `indigo-*`, `purple-*`, `gray-*`, `stone-*`, `slate-*`). Use named tokens only.
- No emoji as icons or in UI copy. One icon set (Lucide, stroke 1.5px, 20px).
- One radius system (§6). No `rounded-xl`, `rounded-2xl`, or `rounded-3xl`.
- No decorative illustrations, mascots, confetti, or animated hero banners inside the dashboard.
- No inverse (dark-on-light flip) surfaces for tooltips or toasts. They use `surface-raised` with a border so both themes work.

**Layout & content**
- No "Welcome back! 👋" banners. The home screen shows today's work.
- No row of identical KPI cards each with an icon, gradient, and sparkline. KPI cards are label + number + context, and every one links to a filtered list.
- No vanity metrics. A KPI must lead to an action or a decision.
- No fake, demo, or lorem data left in production. Empty states are honest.
- No centered body text. Left-align. Center only short empty-state messages.
- No placeholder-only labels. Labels are always visible.
- No hover-only actions. Anything that appears on hover must also be reachable on touch and keyboard.
- No tooltip as the only place essential information lives.

**Data visualization**
- No pie/donut charts with more than 3 slices. No 3D, no dual-axis charts, no rainbow category palettes.
- Bar charts start at zero. Maximum 5 series, and each series is distinguishable without color (label, marker shape, or dash).
- Every chart has a text or table alternative.

**Behavior**
- No generic "Are you sure?" dialogs. Confirmations name the action and its consequence (§9).
- No success toasts for routine saves that are already visible on screen.
- No auto-rotating carousels, no auto-playing animations, no scroll-jacking.

## 3. Colors

All values come from the front matter. Theme switching only swaps token values; component code is identical in both themes.

### 3.1 Surfaces and text (day / night)
| Token | Day | Night | Use |
|---|---|---|---|
| `canvas` | `#F3F0E8` | `#131A16` | App background, table header, row hover |
| `surface` | `#FBFAF6` | `#1B2520` | Cards, tables, sidebar, inputs |
| `surface-raised` | `#FFFFFF` | `#222E28` | Popovers, dialogs, toasts, tooltips |
| `sand` | `#E9E4D8` | `#2A362F` | Selected rows, hover fills, skeletons, neutral chips |
| `ink` | `#1F2A24` | `#EAE5D8` | Primary text |
| `ink-soft` | `#4F5B53` | `#B8BFB3` | Secondary text, labels, icons |
| `ink-mute` | `#626C65` | `#97A096` | Metadata, placeholders, helper text |
| `line` | `#D9D3C4` | `#2E3A33` | Decorative dividers, card borders |
| `line-strong` | `#7D857E` | `#6F7B72` | Borders of interactive controls (≥3:1) |
| `scrim` | 50% forest-ink | 60% black | Dialog backdrop |

Contrast rules (approximate; verify with a checker after any palette change):
- `ink`, `ink-soft`, and `ink-mute` meet 4.5:1 on `canvas` and `surface`.
- **Do not place `ink-mute` on `sand`** (it drops below 4.5:1). Use `ink-soft` there.
- Control borders use `line-strong`, never `line`.

### 3.2 Action colors
| Token | Day | Night | Use |
|---|---|---|---|
| `primary` | `#1E3B2F` | `#A8C79A` | Primary button, active tab underline, links, selected controls |
| `primary-hover` | `#2A5240` | `#BBD6AE` | Hover and pressed |
| `on-primary` | `#FBFAF6` | `#131A16` | Text on `primary` |
| `danger` | `#A32020` | `#B93A32` | Destructive button |
| `danger-hover` | `#861A1A` | `#C2403A` | Hover |
| `on-danger` | `#FBFAF6` | `#FBFAF6` | Text on `danger` |
| `focus` | `#1E3B2F` | `#E3A857` | Focus ring on every interactive element |
| `accent` | `#A8481F` | `#E3A857` | Brand wordmark dot, "today" marker, chart series 2 only |

Links are `primary` with an underline (`underline-offset-4`). Never blue.

### 3.3 Status colors (always a text label, optional icon)
| Status | bg / fg (day) | bg / fg (night) | Solid (dots, bars) |
|---|---|---|---|
| `ok` | `#E3EEDD` / `#1F4D2C` | `#1F3A2B` / `#BFE3C4` | `ok-solid` |
| `warn` | `#F6E6C8` / `#6B4210` | `#3F3114` / `#F2D18A` | `warn-solid` |
| `bad` | `#F4D9D2` / `#7A1F12` | `#4A1F1B` / `#F3B7AE` | `bad-solid` |
| `info` | `#DCEBEA` / `#2F5D62` | `#1C3A3D` / `#A9D6D8` | `info-solid` |
| `neutral` | `sand` / `ink-soft` | `sand` / `ink-soft` | `line-strong` |

### 3.4 Where `accent` (ember) is allowed
Brand wordmark detail, the "today" marker on timelines and calendars, and chart series 2. Nowhere else. Never for buttons, links, or status.

### 3.5 Chart and heat colors
- Categorical series: `chart-1` to `chart-5` in order. Use at most 5, prefer 3 or fewer. Pair color with direct labels, marker shapes, or dash patterns.
- Occupancy heatmap: `heat-0` to `heat-4` (single hue, low to high). Cell text uses `ink` on steps 0-2 and `on-primary` (day) / `canvas` (night) on steps 3-4. Show the numeric value in the cell or on focus, never color alone.

## 4. Typography

Two webfonts, self-hosted, Latin subset, `font-display: swap`. Mono uses the system stack (no download).

| Role | Font | Notes |
|---|---|---|
| Page titles (`h1`) and empty-state titles | Fraunces (variable), weight 500, `"SOFT" 50` | The only serif use in the dashboard |
| All other UI | Plus Jakarta Sans, 400 / 500 / 600 | Tabular numbers on all numeric columns |
| Codes and IDs | System mono | Booking codes, transaction IDs, references |

| Style | Size / line-height | Weight | Use |
|---|---|---|---|
| `h1` | 28 / 36 | 500 serif | Page title (one per page) |
| `h2` | 20 / 28 | 600 | Section title |
| `h3` | 16 / 24 | 600 | Card title, dialog title |
| `body-md` | 14 / 20 | 400 | Default text, table cells, form values |
| `body-sm` | 13 / 18 | 400 | Secondary text, helper text |
| `label` | 13 / 18 | 500 | Form labels, table headers, tab labels |
| `caption` | 12 / 16 | 400 | Timestamps, footnotes (**12px is the floor**) |
| `kpi` | 32 / 36 | 600, tabular | Big numbers on stat cards |
| `code` | 13 / 20 | 400 mono | IDs and codes |

Rules:
- Input text is **16px on touch devices** (prevents iOS zoom). `body-md` (14px) applies to non-input text and compact desktop density.
- Sentence case everywhere. No ALL CAPS labels.
- Numbers use `tabular-nums` and are right-aligned in tables.
- Max line length for prose is 65ch.

## 5. Layout

### 5.1 App shell
- **Header** `56px`: sticky, `surface`, bottom border `line`. Left: sidebar toggle (below 1024px) and brand wordmark. Right: global search (`/` shortcut), theme toggle, user menu. No page title in the header.
- **Sidebar** `248px` (collapsible to a `64px` icon rail with tooltips). `surface`, right border `line`. Groups: Operasional (Hari ini, Booking, Ketersediaan), Katalog (Unit, Peralatan), Keuangan (Pembayaran), Pengaturan.
- **Below 1024px**: sidebar becomes an off-canvas drawer. For field staff, a **bottom nav** (`56px` + safe area, max 4 items) replaces the drawer.
- **Content area**: `canvas` background, `px-4 md:px-6 lg:px-8`, `py-6`.

### 5.2 Page anatomy (every page, in this order)
1. **Breadcrumb row**: bordered bottom, `body-sm`, last crumb is the current page (not a link).
2. **Page header**: `h1` on the left, page actions on the right (at most one primary button).
3. **Page nav** (optional): tabs directly under the header, left-aligned, not inside the header.
4. **Content**, using one of these widths:
   - `small` (`640px`): settings, single-record forms.
   - `default` (`1120px`): lists, detail pages, dashboards.
   - `full` (no max): availability timeline, wide data tables.

### 5.3 Spacing
4px grid. Use `xs 4`, `sm 8`, `md 16`, `lg 24`, `xl 32`, `2xl 48`. Within a card use `md`; between cards use `lg`; between page sections use `xl`. Do not invent in-between values.

### 5.4 Density
Set with `data-density` on `<html>`.
| | `comfortable` (default) | `compact` (desktop opt-in) |
|---|---|---|
| Control height | 44px | 32px |
| Table row | 56px | 40px |
| Input text | 16px | 14px |
| Applies when | touch devices and default | pointer devices, saved per user |

### 5.5 Breakpoints and responsive behavior
`sm 640`, `md 768`, `lg 1024`, `xl 1280`. Mobile-first.
- Below `md`, key tables (Booking, Peralatan) become **card lists**: guest or item as the title, status chips, the main amount, and one visible action. Wide data tables elsewhere scroll horizontally inside their own container with a sticky first column.
- Forms are single column below `lg`.
- Dialogs become full-height **sheets** from the bottom below `md`.

## 6. Shape, Elevation, Motion, Icons

**Radius**: `sm 4px` (checkboxes, inline code, tooltips), `md 6px` (buttons, inputs, selects, nav items), `lg 8px` (cards, popovers, dialogs), `full` (status chips, avatars, switches). Nothing else.

**Elevation (tonal, not shadow-based)**
- Level 0: `canvas`.
- Level 1: `surface` + `1px line` border (cards, tables, sidebar).
- Level 2: `surface-raised` + `1px line-strong` border + `shadow-pop` (popovers, dropdowns, toasts, tooltips).
- Level 3: dialogs and sheets: Level 2 plus a `scrim` backdrop. No blur.

**Motion**: `100ms` for hover and press, `150ms` for most transitions, `250ms` for panels and sheets, always `ease-out`. Animate only color, opacity, and transform. Wrap everything in `motion-safe:`. Skeletons pulse opacity (1.2s); no shimmer gradients.

**z-index**: `sticky 10`, `header 20`, `dropdown 30`, `dialog 40`, `toast 50`. No other values.

**Icons**: Lucide, stroke 1.5px, `20px` (16px inside chips and dense tables). Decorative icons get `aria-hidden="true"`; icon-only buttons get `aria-label` and a tooltip.

**Focus**: every interactive element shows `outline: 2px solid var(--color-focus); outline-offset: 2px`. Never remove it.

## 7. Components

### 7.1 Buttons
- **Primary** (`button-primary`): one per view. Verb-first label.
- **Secondary**: bordered, for neutral actions beside the primary.
- **Ghost**: low-emphasis actions, toolbar items.
- **Danger**: only for destructive actions, and only inside the confirmation pattern in §9 (or as the confirm button of a dialog).
- States: hover (`*-hover` tokens), pressed (hover plus `translate-y-px`), focus ring, **disabled** (`button-disabled`; the reason is shown as helper text or a tooltip), **loading** (spinner replaces the icon; the label stays; button is non-interactive to prevent double submit).
- Height follows density. Icon-only buttons are square with the same height.
- Button labels are specific verbs: "Konfirmasi DP", "Tandai lunas", "Serahkan peralatan", "Terima pengembalian", "Batalkan booking". Never "OK", "Submit", or "Yes".

### 7.2 Forms and inputs
- Layout: label above the field, helper text below the label or the field, error text below the field. Single column.
- Labels are always visible. Required fields say "(wajib)" in text; an asterisk alone is not enough.
- Input: `input` tokens; focus shows the focus ring and keeps the `line-strong` border; error uses `input-error` plus an icon and message in `bad-fg`.
- **Money input**: prefix "Rp", `inputmode="numeric"`, live thousand separators (`1.250.000`), integer rupiah only. Never accept decimals.
- **Phone input**: `inputmode="tel"`, accepts `08…` and `+62…`, normalizes on blur, validates with a plain message.
- **Date and range**: Monday-first calendar popover, typed input also allowed, format `14 Nov 2026`. Show nights count for ranges.
- Select / combobox: searchable when the list exceeds 8 items; empty search state says what to do.
- Checkbox / radio: 20px box with `line-strong` border; checked uses `primary` fill. Switch: only for settings that apply immediately.
- **Save pattern**: forms use a sticky footer bar with "Simpan perubahan" (primary) and "Batalkan" (secondary). Leaving a dirty form asks for confirmation. Only switches and inline edits autosave.
- On error, keep the user's input and move focus to the first invalid field.

### 7.3 Navigation
- **Nav item**: `nav-item`, active uses `nav-item-active` plus weight 600 and `aria-current="page"`.
- **Tabs**: `tab-active` has a 2px `primary` bottom border; inactive tabs use `ink-soft`. Tabs navigate between views; they do not hide required form fields.
- **Pagination**: page size 25, shows "Menampilkan 26-50 dari 213". No infinite scroll for data that staff must audit.
- **Global search / command palette** (`/`): searches booking code, guest name, phone, unit. Results grouped by type, keyboard navigable.

### 7.4 Status chips (one chip = one dimension)
Chips use `chip-ok | warn | bad | info | neutral`: `h-6`, `px-2.5`, `caption` size, label text always present, optional 16px icon.

Never merge dimensions into one chip. A booking shows **two** chips:
| Dimension | Values → variant |
|---|---|
| **Pembayaran** | Belum dibayar → `bad`; Menunggu DP → `warn`; DP lunas → `info`; Lunas → `ok`; Refund diproses → `neutral` |
| **Menginap** | Akan datang → `neutral`; Menginap → `info`; Selesai → `ok`; Dibatalkan → `bad`; Kedaluwarsa → `neutral` |
| **Peralatan** | Dipesan → `neutral`; Diserahkan → `info`; Dikembalikan → `ok`; Rusak → `warn`; Hilang → `bad` |

The mapping from enum value to chip variant lives in **one place** (a `StatusPresenter` class or Blade component). Templates never choose chip colors themselves.

### 7.5 Data table
- Header: `table-header`, `label` style, sticky below the page header. Sortable columns show an icon and `aria-sort`.
- Rows: height by density, bottom border `line`, hover `table-row-hover`, selected `table-row-selected`. Whole-row click opens the detail; the guest or code cell is also a real link.
- Columns: text left, **numbers and money right-aligned with tabular figures**, dates in `Sab, 14 Nov 2026`, status as chips. Truncate with an ellipsis and a full-value tooltip, but never hide essential info there.
- Row actions: one primary inline action plus an overflow menu ("Aksi lainnya", icon button with `aria-label`). Visible on touch and keyboard, not hover-only.
- Selection: checkbox column; when rows are selected, a **bulk action bar** replaces the filter bar showing "3 dipilih" and actions.
- Filters: a filter bar above the table with search, status filters, and date range. Active filters appear as removable chips, with "Hapus semua filter".
- States: loading (skeleton rows after 400ms), empty (§7.10), error (message plus "Coba lagi").

### 7.6 Stat card (KPI)
`stat-card`: label (`label`), number (`kpi`), one line of context (`body-sm`, e.g. "2 jatuh tempo hari ini"). No icon, no sparkline unless it shows a trend that informs a decision. The whole card links to the filtered list behind the number. Time range is always stated. Negative or alarming values use the status color on the context line, not on the number.

### 7.7 Charts
- Library choice is free, but styling follows this system: tokens from §3.5, `caption` size axis text, `line` gridlines, no chart borders.
- Prefer horizontal bars for category comparison and lines for time. Direct-label series where possible instead of a legend.
- Axis and value formatting use Indonesian formats (`Rp 1,2 jt` for compact amounts, full `Rp 1.250.000` in tooltips and tables).
- Every chart has a caption stating what it shows and the date range, plus a "Lihat sebagai tabel" toggle.
- Tooltips are supplements; the key values are also visible without hovering.

### 7.8 Availability timeline (core screen)
Rows are units, columns are days (14-day default, 30-day option), horizontal scroll with the unit column sticky.
- Booking bars span their nights and show guest name and nights. Fill by payment status: **Lunas** = `ok-bg` with `ok-solid` border; **DP lunas** = `info-bg` with `info-solid` border; **Menunggu DP** = `warn-bg` with diagonal hatch; **Diblokir / perawatan** = `sand` with diagonal hatch and the reason.
- Today is marked with an `accent` vertical line and a "Hari ini" label. Weekends and national holidays have a subtle `canvas` column tint and a text tag in the header.
- Click a bar for a side panel with the booking summary and actions; drag-to-create is optional and must have a keyboard-accessible equivalent ("Buat booking" with unit and date fields).
- Bars have a minimum width so one-night bookings stay readable; text truncates but the tooltip and panel show the full text.
- The same data is available as a **list view** toggle for screen readers and small screens.

### 7.9 Overlays
- **Dialog**: `dialog`, max width 480px (forms 640px), focus trapped, `Esc` closes, focus returns to the trigger, title uses `h3`. Primary action on the right, secondary on the left of it.
- **Sheet** (right side on desktop, bottom on mobile): for detail panels and filters.
- **Popover / dropdown**: `popover`, closes on outside click and `Esc`, arrow-key navigation.
- **Toast**: `toast`, bottom-right (above the bottom nav on mobile), 5s auto-dismiss, errors persist until dismissed. Use only for out-of-view results and undo ("Booking diarsipkan. Urungkan"). `role="status"`; errors `role="alert"`.
- **Inline alert**: bordered box with status color tint, icon, and message, for page-level notices ("DP belum diterima, batas bayar 18.00 WIB").

### 7.10 Empty, loading, and error states
- **Empty**: `h3` message, one sentence on why it is empty, and one action ("Tambah unit"). No illustration. Filtered-empty says so and offers "Hapus filter".
- **Loading**: skeleton blocks in `skeleton` only if loading exceeds 400ms; buttons show their own loading state. Keep layout stable (no shifting).
- **Error**: say what happened and what to do next: "Pembayaran belum tercatat. Periksa nomor referensi lalu coba lagi." Include a retry action and a way to reach a human if it persists.

## 8. Domain Patterns

### 8.1 Dashboard home ("Hari ini")
Order of blocks: (1) stat cards: Check-in hari ini, Check-out hari ini, Menunggu DP, Sisa tagihan; (2) **Kedatangan hari ini** list (time with zone, guest, unit, payment chip, equipment chip, "Check-in" action); (3) **Serah terima tertunda**; (4) **DP jatuh tempo** with deadline countdown (real data); (5) **Stok menipis**. Every list item links to the record. Nothing on this page exists only to look impressive.

### 8.2 Booking detail
- Header: booking code (mono), guest name, both status chips, the primary action for the current state ("Konfirmasi DP", "Check-in", "Tandai lunas").
- Left (wide): stay details (unit, dates, nights, guests), equipment add-ons, notes, **activity timeline** (who changed what and when).
- Right (narrow, sticky): **payment panel**: price breakdown, DP due and paid, remaining balance, payment deadline, payment history, and "Catat pembayaran".
- Contact: WhatsApp button with a prefilled message for the guest.

### 8.3 Payment panel
```
Tenda Safari × 2 malam                 Rp 1.700.000
Peralatan (3 item)                       Rp 210.000
Tagihan tambahan (di lokasi)              Rp 70.000
Subtotal                               Rp 1.980.000
DP [DP_PERCENT]%  (dibayar 12 Nov)       − Rp 573.000
Sisa tagihan                           Rp 1.407.000
```
- Right-aligned tabular figures, the final line in `h3` weight.
- Each payment row shows method (QRIS, Transfer, Tunai), reference, amount, who recorded it, and time. Payments are **append-only**; corrections are new rows (refund or adjustment), never edits.
- Money is stored and calculated as integer rupiah. Never floats.

### 8.4 Equipment inventory and add-ons
- Inventory table: item, category, total stock, available now, out now, price and rule (per hari, per malam, flat), condition. Low stock uses a `warn` chip with the real threshold.
- Add-ons are separate line items from the room. Adding equipment during a stay (**Tagihan tambahan**) creates a new line with status Belum dibayar; the booking's remaining balance updates immediately. Staff can take payment right away or leave it to check-out.

### 8.5 Handover checklist (tablet, field staff)
- One row per item: name, quantity, condition, state chips (Diserahkan, Dikembalikan, Rusak, Hilang).
- Large touch targets (44px minimum), the primary action on each row visible without opening a menu ("Serahkan", "Terima kembali").
- Condition notes and an optional photo for Rusak/Hilang. Every change is timestamped and attributed to the staff member.
- A summary at the bottom shows items outstanding and any charges triggered (damage, loss).

### 8.6 Check-in
Scan the guest's QR or search by booking code. The screen shows guest, unit, payment status, outstanding balance, and equipment. The primary action is "Check-in". If balance is outstanding, the screen says so and offers "Catat pembayaran" first; it does not block staff from proceeding, but it is logged.

## 9. Destructive Actions and Data Integrity

Three tiers; pick by impact.
1. **Reversible** (archive, hide, unassign): act immediately and show a toast with "Urungkan" for 8 seconds.
2. **Confirm** (cancel booking, delete item with no history): a dialog that names the object and the consequence. Example title: "Batalkan booking [PREFIX]-2481?" Body: "DP Rp 573.000 perlu direfund manual. Unit dibuka kembali untuk tanggal ini." Buttons: "Kembali" (secondary) and "Batalkan booking" (danger).
3. **Irreversible or financial** (delete a customer with history, void a payment): the dialog also requires typing the booking code or name to enable the danger button.

Also required:
- **Audit log** for every money and status change: who, when, field, before → after. Visible on the record. Not editable.
- Financial records are never hard-deleted; they are voided or reversed with a reason.
- Optimistic concurrency: if a record changed since the user opened it, show "Data diperbarui oleh [nama] pukul 14.32" and ask to reload before saving.
- Icons for destructive actions are not colored red until the user is inside the confirmation step.

## 10. Roles and Permissions

| Role | Sees | Can do | Default density / theme |
|---|---|---|---|
| **Admin** | Everything | Everything, including prices, units, users, deletions | comfortable, light |
| **Resepsionis** | Hari ini, Booking, Ketersediaan, Pembayaran, Peralatan | Create and edit bookings, record payments, check-in/out, handover. Cannot change prices or delete records | comfortable (compact opt-in), light |
| **Staf lapangan** | Hari ini, Serah terima, Stok | Handover, stock counts, add-on requests. Mobile or tablet only | comfortable, night available, bottom nav |

Rules: hide navigation modules a role cannot use. Inside a page a role can open, show disallowed actions as **disabled with a reason** ("Hanya admin yang bisa mengubah harga"). Permissions are enforced on the server; the UI only reflects them.

## 11. Localization, Copy, and Formats

- `<html lang="id">`. UI language is Bahasa Indonesia; code and token names stay English. Use "kamu" or "Anda" consistently (pick one in a copy guide).
- **Currency**: `Rp 1.250.000` (dot thousands, no decimals), via `Intl.NumberFormat('id-ID')`. Compact in charts: `Rp 1,2 jt`.
- **Dates**: `Sab, 14 Nov 2026`; ranges `14-16 Nov 2026 (2 malam)`. Week starts Monday.
- **Time**: 24-hour with a dot and zone: `14.00 WIB`. Relative time ("2 jam lalu") always has the absolute time in a tooltip.
- **Phone**: display `0812-3456-7890`, store E.164.
- **Copy rules**: verb-first buttons, specific nouns, no exclamation marks, no filler. Errors say what happened and what to do. Never blame the user.
  - Good: "Nomor WhatsApp harus diawali 08 atau +62."
  - Bad: "Input tidak valid!"
- All formatting uses shared helpers. No ad-hoc string formatting in templates.

## 12. Offline and Low-Signal (field staff)

- Server-render with Blade; small JS (Alpine.js or vanilla) for interactivity.
- Handover changes made without signal are queued locally and shown with a neutral chip "Belum tersinkron (3)". On reconnect they sync; conflicts are shown to the user, never silently overwritten.
- A persistent banner shows when the device is offline ("Offline. Perubahan disimpan di perangkat ini"). Actions that need the network (payments) say so and are disabled with a reason.
- Budgets: dashboard JS ≤ `200 KB` gzipped, no web requests blocking first render, fonts limited to 2 families.

## 13. Accessibility Checklist

- Text contrast ≥ 4.5:1; control borders and icons that carry meaning ≥ 3:1.
- Status is never color-only (text, icon, hatch pattern).
- All functions work by keyboard. Visible focus ring on everything. Logical tab order. `Esc` closes overlays and returns focus.
- Touch targets ≥ 44px in comfortable density, with ≥ 8px between targets.
- Tables use real `<table>` markup with `scope`, `aria-sort`, and captions; the timeline has a list alternative.
- Forms: labels bound to inputs, errors announced with `aria-describedby` and `role="alert"` on submit.
- Respect `prefers-reduced-motion`. No content depends on hover.
- Charts have text alternatives. Language attribute set; mixed-language fragments are marked.

## 14. Tailwind CSS v4 Setup (`resources/css/app.css`)

```css
@import "tailwindcss";

@theme {
  --color-canvas: #F3F0E8;
  --color-surface: #FBFAF6;
  --color-surface-raised: #FFFFFF;
  --color-sand: #E9E4D8;
  --color-ink: #1F2A24;
  --color-ink-soft: #4F5B53;
  --color-ink-mute: #626C65;
  --color-line: #D9D3C4;
  --color-line-strong: #7D857E;
  --color-primary: #1E3B2F;
  --color-primary-hover: #2A5240;
  --color-on-primary: #FBFAF6;
  --color-accent: #A8481F;
  --color-focus: #1E3B2F;
  --color-danger: #A32020;
  --color-danger-hover: #861A1A;
  --color-on-danger: #FBFAF6;
  --color-scrim: rgb(31 42 36 / 0.5);

  --color-ok-bg: #E3EEDD;   --color-ok-fg: #1F4D2C;   --color-ok-solid: #2F6B3F;
  --color-warn-bg: #F6E6C8; --color-warn-fg: #6B4210; --color-warn-solid: #B86E0A;
  --color-bad-bg: #F4D9D2;  --color-bad-fg: #7A1F12;  --color-bad-solid: #A32020;
  --color-info-bg: #DCEBEA; --color-info-fg: #2F5D62; --color-info-solid: #2F5D62;

  --color-chart-1: #1E3B2F; --color-chart-2: #A8481F; --color-chart-3: #B8923A;
  --color-chart-4: #2F5D62; --color-chart-5: #7D857E;
  --color-heat-0: #E9E4D8;  --color-heat-1: #C9D4B8;  --color-heat-2: #9DB483;
  --color-heat-3: #3F6B49;  --color-heat-4: #1E3B2F;

  --font-serif: "Fraunces", Georgia, "Times New Roman", serif;
  --font-sans: "Plus Jakarta Sans", ui-sans-serif, system-ui, sans-serif;
  --font-mono: ui-monospace, "SF Mono", Menlo, Consolas, monospace;

  --radius-sm: 4px;
  --radius-md: 6px;
  --radius-lg: 8px;

  --shadow-pop: 0 4px 12px rgb(31 42 36 / 0.12);

  --z-sticky: 10;
  --z-header: 20;
  --z-dropdown: 30;
  --z-dialog: 40;
  --z-toast: 50;
}

.theme-night {
  --color-canvas: #131A16;
  --color-surface: #1B2520;
  --color-surface-raised: #222E28;
  --color-sand: #2A362F;
  --color-ink: #EAE5D8;
  --color-ink-soft: #B8BFB3;
  --color-ink-mute: #97A096;
  --color-line: #2E3A33;
  --color-line-strong: #6F7B72;
  --color-primary: #A8C79A;
  --color-primary-hover: #BBD6AE;
  --color-on-primary: #131A16;
  --color-accent: #E3A857;
  --color-focus: #E3A857;
  --color-danger: #B93A32;
  --color-danger-hover: #C2403A;
  --color-scrim: rgb(0 0 0 / 0.6);

  --color-ok-bg: #1F3A2B;   --color-ok-fg: #BFE3C4;   --color-ok-solid: #6FBF86;
  --color-warn-bg: #3F3114; --color-warn-fg: #F2D18A; --color-warn-solid: #E0A040;
  --color-bad-bg: #4A1F1B;  --color-bad-fg: #F3B7AE;  --color-bad-solid: #E5736A;
  --color-info-bg: #1C3A3D; --color-info-fg: #A9D6D8; --color-info-solid: #7FB5B8;

  --color-chart-1: #A8C79A; --color-chart-2: #E08A5F; --color-chart-3: #D9B35E;
  --color-chart-4: #7FB5B8; --color-chart-5: #A3ABA4;
  --color-heat-0: #232F28;  --color-heat-1: #2F4A3A;  --color-heat-2: #3A6450;
  --color-heat-3: #7FAE8D;  --color-heat-4: #BBD6AE;
  --shadow-pop: 0 4px 12px rgb(0 0 0 / 0.5);
}

:root, [data-density="comfortable"] {
  --control-h: 2.75rem;
  --row-h: 3.5rem;
  --input-text: 1rem;
}
[data-density="compact"] {
  --control-h: 2rem;
  --row-h: 2.5rem;
  --input-text: 0.875rem;
}

body { background: var(--color-canvas); color: var(--color-ink); font-family: var(--font-sans); }
:focus-visible { outline: 2px solid var(--color-focus); outline-offset: 2px; }
```
Use heights as `h-(--control-h)` and row heights as `h-(--row-h)`.

## 15. Agent Build Instructions

1. Add the Tailwind v4 block from §14. Use **only named tokens** in templates (`bg-surface`, `text-ink-soft`, `border-line`). Never use raw hex or default Tailwind palette classes.
2. Build Blade components with a single variant API: `x-ui.button`, `x-ui.input`, `x-ui.select`, `x-ui.status-chip`, `x-ui.stat-card`, `x-ui.data-table`, `x-ui.dialog`, `x-ui.sheet`, `x-ui.toast`, `x-ui.empty-state`, `x-page.header`, `x-page.breadcrumbs`, `x-booking.payment-panel`, `x-booking.timeline`, `x-handover.checklist`.
3. Put all enum → label → chip-variant mappings in one `StatusPresenter`. Templates call the presenter and never pick colors.
4. Format money, dates, and times only through shared helpers (`rupiah()`, `tanggal()`, `jam()`). Money is integer rupiah in the database and in PHP.
5. Write mobile-first (360px base). Verify comfortable density on a tablet and a phone before compact density on desktop.
6. Server enforces permissions; the UI mirrors them (hide modules, disable actions with reasons).
7. Every table, form, and dialog implements the loading, empty, and error states in §7.10.
8. Before finishing any screen, run the §2 anti-slop list, the §13 accessibility checklist, and both themes.

### Definition of done (per screen)
- [ ] Uses only tokens; no raw hex, no default Tailwind palette
- [ ] Exactly one primary action; all buttons are specific verbs
- [ ] Statuses use chips from the presenter, one chip per dimension
- [ ] Works in light and night themes and both densities
- [ ] 44px touch targets in comfortable density; no hover-only actions
- [ ] Loading, empty, and error states present
- [ ] Money and dates use the shared formatters; numbers right-aligned and tabular
- [ ] Destructive actions follow the §9 tier; audit log entries written
- [ ] Keyboard path tested; focus ring visible; contrast checked

## Rerun Inputs
```yaml
workflow: design-md-rewrite
product: fiber-connect
structure_reference: supabase-studio-style (developer-tool, token-driven)
brand_reference: tropical-highland-glamping (public site)
theme: light-first, night optional
language: id (UI), en (code and tokens)
target_stack: Vanilla HTML/CSS/JS + Alpine.js
output: DESIGN.md
```