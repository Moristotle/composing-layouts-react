const spacingMap = {
	none: "0px",
	xs: "0.125rem",
	sm: "0.25rem",
	md: "0.5rem",
	lg: "1rem",
	xl: "2rem",
	xxl: "4rem",
};

const fractions = {
	"1/4": "1fr 3fr",
	"1/3": "1fr 2fr",
	"1/2": "1fr 1fr",
	"2/3": "2fr 1fr",
	"3/4": "3fr 1fr",
	"auto-start": "auto 1fr",
	"auto-end": "1fr auto",
};

const justifyAlignMap = {
	start: "flex-start",
	end: "flex-end",
	center: "center",
};

const stretchMap = {
	all: "> * { flex: 1 }",
	start: "> :first-child { flex: 1 }",
	end: "> :last-child { flex: 1 }",
};

type LowercaseCharacter =
	| "a"
	| "b"
	| "c"
	| "d"
	| "e"
	| "f"
	| "g"
	| "h"
	| "i"
	| "j"
	| "k"
	| "l"
	| "m"
	| "n"
	| "o"
	| "p"
	| "q"
	| "r"
	| "s"
	| "t"
	| "u"
	| "v"
	| "w"
	| "x"
	| "y"
	| "z";
type AllCharacter = LowercaseCharacter | Uppercase<LowercaseCharacter>;
type NonEmptyString = `${AllCharacter}${string}`;

type CSSCustomProperties = `var(--${NonEmptyString})`;

type LengthUnit =
	| "vmin"
	| "vmax"
	| "vh"
	| "vw"
	| "%"
	| "ch"
	| "ex"
	| "em"
	| "rem"
	| "in"
	| "cm"
	| "mm"
	| "pt"
	| "pc"
	| "px";

export type CSSLength = `${number}${LengthUnit}` | CSSCustomProperties;

export { spacingMap, fractions, justifyAlignMap, stretchMap };
