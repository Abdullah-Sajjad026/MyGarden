import * as runtime from "react/jsx-runtime";

/** Render Velite-compiled MDX function bodies (official Velite pattern). */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const sharedComponents: Record<string, any> = {};

function getMDXComponent(code: string) {
  const fn = new Function(code);
  return fn({ ...runtime }).default;
}

export function MDXContent({ code }: { code: string }) {
  // The MDX body is compiled to a component at build time and can't be hoisted
  // to module scope — this is the official Velite render pattern.
  const Component = getMDXComponent(code);
  // eslint-disable-next-line react-hooks/static-components
  return <Component components={sharedComponents} />;
}
