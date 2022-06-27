---
title: Constants
---

# constants - predefined constants

Provides a set of predefined constants that are frequently used

## How to use

```tsx | pure
import { constants } from '@wetrial/core';

const { LAYOUT_FORM_SINGLE } = constants;
```

##API

| Name                     | Description                                                                                  |
| ------------------------ | -------------------------------------------------------------------------------------------- |
| LAYOUT_FIXED_LABEL       | Universal layout, fixed label width of 98px, other adaptive                                  |
| LAYOUT_FORM_SINGLE       | Form item single-column layout responsive configuration (recommended to be assigned to Form) |
| LAYOUT_FORM_TWO          | Form two-column layout responsive configuration (recommended to be assigned to Form)         |
| LAYOUT_COL_TWO           | Col two-column layout responsive (used in From)                                              |
| LAYOUT_COL_SEARCH_TWO    | Search Form Col Two Columns Reactive Configuration                                           |
| LAYOUT_COL_SEARCH_THREE  | Search Form Col Three Columns Responsive Configuration                                       |
| LAYOUT_COL_SEARCH_FOUR   | Search Form Col Four Columns Responsive Configuration                                        |
| LAYOUT_COL_SEARCH_SIX    | Search form Col six columns responsive configuration                                         |
| LAYOUT_CHECK_SIX         | Single selection, check six columns Responsive configuration                                 |
| LAYOUT_CHECK_EIGHT       | Single selection, check eight columns Responsive configuration                               |
| TABLE_SCROLL_WIDTH       | Show scroll bar width bounds                                                                 |
| DEFAULT_DATE_TIME_FORMAT | Predefined Date Time Format                                                                  |
| DEFAULT_DATE_FORMAT      | Predefined date format                                                                       |
| PAGE_SIZE                | Predefined page number                                                                       |
| PAGE_PROPS               | Predefined paging properties configuration                                                   |
| VALIDATE_MESSAGES        | Predefined form validation messages                                                          |
