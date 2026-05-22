# Kusakvasa Figma Screen Handoff

This document turns the current app into a small editable Figma brief.
Use it as the source of truth for the first design pass, then bring the
personalized design back to code.

## Product Shape

- Format: mobile-first single-page flow
- Main canvas width in code: `420px` max content width
- Suggested Figma device frame: `390 x 844` or `393 x 852`
- Language to design first: Russian
- Theme currently shipped: dark
- Flow: `Welcome -> Quiz 1 -> Quiz 2 -> Quiz 3 -> Result`

The live app does not use routes for the flow. It swaps screen components inside
`app/page.tsx` and keeps the language toggle at the top of every screen.

## Figma Frame Set

Create these frames first:

| Frame | Purpose | Design state |
| --- | --- | --- |
| `01 Welcome` | Entry screen | Ready to start |
| `02 Quiz / Q1 / Empty` | First question | No selected options, next button disabled |
| `03 Quiz / Q1 / Selected` | First question | At least two selected colored pills |
| `04 Quiz / Q2 / Selected` | Second question | Selected option state plus back action |
| `05 Quiz / Q3 / Selected` | Final question | Result CTA plus back action |
| `06 Result / Full` | Resume result | Representative result with all content blocks |

Optional frames for later exploration:

- `Quiz / None selected`: selected `Ничего из этого` pill.
- `Result / Analytics`: result filtered by Q1 option `A`.
- `Result / Growth`: result filtered by Q1 option `B`.
- English variants after the Russian design direction is stable.

## Shared Screen Shell

Every screen sits inside the same mobile shell:

1. Background: charcoal near-black.
2. Content column: full mobile width with `20px` horizontal padding.
3. Top utility row: language segmented toggle aligned right.
4. Main content area: vertical stack with generous breathing room.

### Shared Controls

| Control | Current shape |
| --- | --- |
| Language toggle | Small outlined segmented control: `RU`, `EN` |
| Primary button | Full-width white pill, black label, right arrow when moving forward |
| Ghost back button | Full-width pill, left arrow, transparent surface |
| Option pill | Full-width rounded pill with icon, title, optional hint |
| Selected option | Colored pill with black text |
| Result chip | Rounded colored block with text paragraph |

## Current Visual Tokens

The app palette comes from `app/globals.css`.

| Token | Current role | Approximate Figma color |
| --- | --- | --- |
| `background` | Dark app background | `#242424` |
| `foreground` | Main text | `#FAFAFA` |
| `muted-foreground` | Secondary text | `#A6A6A6` |
| `white` | Primary CTA fill | `#FFFFFF` |
| `pop-yellow` | Progress and selected state | vivid yellow-lime |
| `pop-green` | Selected state and chip | bright green |
| `pop-orange` | Selected state and chip | warm orange |
| `pop-blue` | Selected state and chip | vivid blue |
| `pop-pink` | Selected state and chip | soft pink |
| `pop-red` | Selected state and chip | bright red |
| `pop-sky` | Selected state and chip | light sky blue |
| `avatar` | Initials circle | violet |

The app currently uses `Geist` from Next font loading. In Figma, use Geist if
available; otherwise use a close sans-serif fallback during exploration.

## Screen 01 Welcome

### Structure

1. Language toggle.
2. Large centered avatar circle with initials `ВФ`.
3. Name block.
4. Four colored tag badges.
5. Short product explanation.
6. Primary CTA and timing hint.

### Copy

| Element | Text |
| --- | --- |
| Avatar | `ВФ` |
| Name | `Варвара Фёдорова` |
| Role | `Менеджер продукта` |
| Tag 1 | `data-driven (how else)` |
| Tag 2 | `оптимизация процессов` |
| Tag 3 | `развитие продукта` |
| Tag 4 | `нишевый юмор` |
| Body | `Нажмите кнопку - получите резюме, которое отвечает именно на ваши вопросы` |
| CTA | `Найти своё резюме` |
| Hint | `займёт ~1 минуту` |

### Figma Notes

- Keep this screen centered and personal.
- Avatar in code is intentionally simple initials, so this is the best place
  to test a portrait, illustration, monogram, or stronger personal signature.

## Quiz Pattern

All three quiz screens reuse one pattern:

1. Language toggle.
2. Progress bar.
3. Question title.
4. Small helper text: `можно выбрать несколько`.
5. Stack of five option pills.
6. Primary action.
7. Back action on Q2 and Q3.

### Option Pill Anatomy

| Layer | Notes |
| --- | --- |
| Container | Full-width pill with tall vertical padding |
| Leading icon | 20px icon |
| Title | Strong text line |
| Hint | Optional small muted line, truncated in code if too long |

### Option States

| State | Current behavior |
| --- | --- |
| Default | Dark low-contrast fill, subtle border |
| Selected regular option | Bright pop color, black title and icon |
| Default `none` option | Transparent fill, dashed border |
| Selected `none` option | Soft dark fill, standard border |

## Screen 02-03 Quiz Q1

Progress: `1 / 3`.

Question:

`Что вам важно в PM прямо сейчас?`

Options:

| Key | Title | Hint |
| --- | --- | --- |
| A | `Аналитика и метрики` | `данные, дашборды, SQL` |
| B | `Запуск и рост продукта` | `выводить фичи, считать unit-экономику` |
| C | `Эффективность процессов` | `автоматизация, снижение ручного труда` |
| D | `Команда и люди` | `онбординг, обучение, рост команды` |
| none | `Ничего из этого` | `посмотрим что дальше` |

Actions:

- Empty state CTA: `Далее`, disabled.
- Selected state CTA: `Далее`, enabled.

Suggested selected frame:

- Select `A` and `C` to show two pop-color option pills.

## Screen 04 Quiz Q2

Progress: `2 / 3`.

Question:

`Какие навыки важны для вашей задачи?`

Options:

| Key | Title | Hint |
| --- | --- | --- |
| A | `Системное мышление` | `понимание архитектуры, а не только инструментов` |
| B | `Запуск и доставка фич` | `от идеи до прода, быстро и без потерь` |
| C | `Эффективность и автоматизация` | `убрать ручной труд, выстроить процессы` |
| D | `Рост команды` | `онбординг, обучение, передача знаний` |
| none | `Ничего из этого` | none |

Actions:

- Primary: `Далее`.
- Secondary ghost: `Назад`.

Suggested selected frame:

- Select `A` and `B`.

## Screen 05 Quiz Q3

Progress: `3 / 3`.

Question:

`С какой командой вы работаете?`

Options:

| Key | Title | Hint |
| --- | --- | --- |
| A | `Стартап / быстрый рост` | `скорость важнее процессов` |
| B | `Корпорация` | `процессы, стейкхолдеры, согласования` |
| C | `Кросс-функциональная команда` | `дизайн, разработка, аналитика вместе` |
| D | `Есть аналитики в команде` | `важно говорить с ними на одном языке` |
| none | `Ничего из этого` | none |

Actions:

- Primary: `Смотреть результат`.
- Secondary ghost: `Назад`.

Suggested selected frame:

- Select `A` and `C`.

## Screen 06 Result

### Structure

1. Language toggle.
2. Compact identity row with avatar, name, and role.
3. Work block: `Яндекс.Практикум`.
4. Work block: `Станция Смена`.
5. CTA stack.

### Result Copy

Header:

| Element | Text |
| --- | --- |
| Name | `Варвара Фёдорова` |
| Role | `Менеджер продукта` |

Section `Яндекс.Практикум`:

1. `Сделала 4 дашборда - освободила 250+ часов в месяц у команды`
2. `С помощью регрессионной модели показала неэффективность нашей сегментации - ресурс аналитика пошёл на более полезные задачи`
3. `Унифицировала контент для 90+ профессий - прозрачно собираем данные и не собираем ненужные`
4. `Онбордила команду из 30 человек в новые инструменты аналитики`

Section `Станция Смена`:

1. `Провела качественные и количественные исследования - создала сегментацию по продукту и клиенту`
2. `Обеспечила продуктовую линейку на 2025 и 2026`
3. `Благодаря новой сегментации репозиционировали бренд -> солдауты на 3 месяца раньше плана`

Actions:

| Action | Text |
| --- | --- |
| Download | `Скачать резюме (PDF)` |
| Contact | `Написать в Telegram` |
| Back | `Назад` |

### Result Logic

The result chips are filtered by Q1:

| Q1 selection | Visible chip tendency |
| --- | --- |
| Empty or `none` | Show all chips |
| `A` | Analytics-heavy Practicum and Smena chips |
| `B` | Product launch and growth chips |
| `C` | Process efficiency chips |
| `D` | Team growth chip |

For the first Figma version, design `Result / Full` with all chips visible.
It gives enough content pressure to test spacing and typography.

## Suggested Figma Layer Naming

Use these names so the design can be mapped back to code quickly:

```text
Screen
  Shell
    LangToggle
    Progress
    Header
    Options
      Option/A
      Option/B
      Option/C
      Option/D
      Option/None
    Actions
```

Result screen:

```text
Screen
  Shell
    LangToggle
    Identity
    Experience/Practicum
    Experience/Smena
    Actions
```

## Code Map

| Design area | Current source |
| --- | --- |
| Flow state and screen order | `app/page.tsx` |
| Welcome screen | `components/WelcomeScreen.tsx` |
| Quiz screen pattern | `components/QuizScreen.tsx` |
| Result screen | `components/ResultScreen.tsx` |
| Copy and question options | `lib/content.ts` |
| Result filtering and result chips | `lib/chipMapping.ts` |
| Theme tokens | `app/globals.css` |

## Design Decisions Worth Exploring

1. Decide whether the page should feel like a playful resume selector, a sharper
   PM case study, or a personal portfolio opener.
2. Replace or evolve the initials avatar if a stronger first impression matters.
3. Test whether the selected option pills should stay multi-color or use one
   intentional active color with smaller accents.
4. Check Result readability under the longest chips before reducing spacing.
5. Decide whether `RU / EN` remains a top utility control or becomes quieter.

## Round Trip Back To Code

When the Figma design is ready, send:

1. The updated Figma frame link.
2. Which frame is the source of truth for each screen.
3. Any interactions that changed from the current flow.
4. Whether the design should stay mobile-only or expand to desktop.

Then the implementation can be updated screen by screen without guessing.
