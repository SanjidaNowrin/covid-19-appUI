
import { colors } from "../../theme/colors";
import { typography } from "../../theme/typography";

const BASE = {
  fontFamily: typography.primary,
  fontSize: 14,
  color: colors.white,
};

const BASE_BOLD = {
  fontFamily: typography.primaryBold,
  color: colors.white,
};

const SECOND_BOLD={
  fontFamily: typography.primaryBold,
  color: colors.black,
}

export const presets = {
  default: BASE,
  h1: {
    ...BASE_BOLD,
    fontSize: 24,
  },
  h2: {
    ...BASE_BOLD,
    fontSize: 20,
  },
  h3: {
    ...BASE_BOLD,
    fontSize: 18,
  },
  h3: {
    ...SECOND_BOLD,
    fontSize: 16,
  },
  small: {
    ...BASE,
  },
};
