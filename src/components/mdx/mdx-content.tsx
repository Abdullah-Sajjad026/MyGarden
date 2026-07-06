import * as runtime from "react/jsx-runtime";

/** Render Velite-compiled MDX function bodies (official Velite pattern). */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const sharedComponents: Record<string, any> = {};

function useMDXComponent(code: string) {
  const fn = new Function(code);
  return fn({ ...runtime }).default;
}

export function MDXContent({ code }: { code: string }) {
  const Component = useMDXComponent(code);
  return <Component components={sharedComponents} />;
}
