/**
 * Universal layout, fixed label width of 98px, other adaptive
 */
export const LAYOUT_FIXED_LABEL = {
  labelCol: {
    flex: '98px',
  },
  // wrapperCol: {
  // flex: 'auto',
  // },
};

/**
 * Form item single-column layout Responsive configuration (recommended to be assigned to Form)
 */
export const LAYOUT_FORM_SINGLE = {
  labelCol: { flex: '98px' },
  wrapperCol: {
    xs: { span: 16 },
    sm: { span: 18 },
    md: { span: 19 },
    lg: { span: 20 },
    xl: { span: 20 },
    xxl: { span: 22 },
  },
};

/**
 * Form two-column layout Responsive configuration (recommended to be assigned to Form)
 */
export const LAYOUT_FORM_TWO = {
  labelCol: {
    xs: { span: 8 },
    sm: { span: 6 },
    md: { span: 5 },
    lg: { span: 8 },
    xl: { span: 8 },
    xxl: { span: 4 },
  },
  wrapperCol: {
    xs: { span: 16 },
    sm: { span: 18 },
    md: { span: 19 },
    lg: { span: 16 },
    xl: { span: 16 },
    xxl: { span: 20 },
  },
};

/**
 * Col two-column layout responsive (used in From)
 */
export const LAYOUT_COL_TWO = {
  xs: 24, // <576px
  sm: 24, // ≥576px
  md: 24, // ≥768px
  lg: 12, // ≥992px
  xl: 12, // ≥1200px
  xxl: 12, // ≥1600px
};

/**
 * Search form Col with two columns Responsive configuration
 */
export const LAYOUT_COL_SEARCH_TWO = {
  xs: 24,
  sm: 12,
  md: 12,
  lg: 12,
  xl: 12,
  xxl: 12,
};

/**
 * Search form Col three columns Responsive configuration
 */
export const LAYOUT_COL_SEARCH_THREE = {
  xs: 24,
  sm: 12,
  md: 12,
  lg: 8,
  xl: 8,
  xxl: 8,
};

/**
 * Search form Col four columns Responsive configuration
 */
export const LAYOUT_COL_SEARCH_FOUR = {
  xs: 24,
  sm: 12,
  md: 12,
  lg: 8,
  xl: 8,
  xxl: 6,
};

/**
 * Search form Col six columns Responsive configuration
 */
export const LAYOUT_COL_SEARCH_SIX = {
  xs: 24,
  sm: 12,
  md: 8,
  lg: 6,
  xl: 6,
  xxl: 4,
};

/**
 * Single select, check six columns Responsive configuration
 */
export const LAYOUT_CHECK_SIX = {
  xs: 1,
  sm: 1,
  md: 2,
  lg: 4,
  xl: 6,
  xxl: 6,
};

/**
 * Single select, check eight columns Responsive configuration
 */
export const LAYOUT_CHECK_EIGHT = {
  xs: 12,
  sm: 12,
  md: 8,
  lg: 6,
  xl: 4,
  xxl: 3,
};
