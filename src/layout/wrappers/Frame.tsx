import styled, { css } from "styled-components";

type FrameProps = {
	ratio?: [number, number];
};

const ratioStyles = css`
	aspect-ratio: var(--n) / var(--d);
	@supports not (aspect-ratio: 1/1) {
		padding-block-end: calc(var(--d) / var(--n) * 100%);
	}
`;

const Frame = styled.div<FrameProps>`
	position: relative;

	--n: ${({ ratio }) => (ratio ? ratio[0] : 1)};
	--d: ${({ ratio }) => (ratio ? ratio[1] : 1)};

	${({ ratio }) => ratio && ratioStyles}

	> * {
		position: absolute;

		top: 0;
		bottom: 0;
		left: 0;
		right: 0;

		overflow: hidden;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	> img,
	> video {
		width: 100%;
		height: 100%;

		object-fit: cover;
	}
`;

export default Frame;
