// Tell TypeScript that importing .css files is valid (side-effect import)
declare module "*.css" {
  const content: Record<string, string>;
  export default content;
}
